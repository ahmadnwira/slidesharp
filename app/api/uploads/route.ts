import { NextResponse, NextRequest } from 'next/server';
import { z } from 'zod';
import { extractTextFromPDF } from '@/libs/pdfHelper';
import { sendOpenAi } from '@/libs/gpt';

const pdfFileSchema = z.object({
  type: z.literal('application/pdf'),
  size: z.number().max(10 * 1024 * 1024, 'File must be under 10MB') // 10MB limit
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const fileEntry = formData.get('file');

    if (!fileEntry || typeof fileEntry === 'string') {
      return NextResponse.json({ error: 'File is required and must not be a string' }, { status: 400 });
    }

    const fileMetadata = {
      type: fileEntry.type,
      size: fileEntry.size
    };

    // Validate file metadata
    pdfFileSchema.parse(fileMetadata);

    // Assuming fileEntry.stream() is available and extractTextFromPDF supports Buffer input directly
    const fileBuffer = Buffer.from(await fileEntry.arrayBuffer());
    const allText = await extractTextFromPDF(fileBuffer);

    const openAIResponse = await sendOpenAi(
      [
        {
          role: 'user',
          content: `Analyze this pitch deck and provide a comprehensive summary including an overall rating: ${allText}`
        }
      ],
      1
    );

    return NextResponse.json({ message: 'Report generated successfully', report: openAIResponse });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
