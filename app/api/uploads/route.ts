import { NextResponse, NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import { z } from 'zod';
import { extractTextFromPDF } from '@/libs/pdfHelper';
import { sendOpenAi } from '@/libs/gpt';
import { summaryPrompt } from '@/prompt';

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

    // pdfFileSchema.parse(fileMetadata);
    console.log('parsing file');
    const fileBuffer = Buffer.from(await fileEntry.arrayBuffer());
    const allText = await extractTextFromPDF(fileBuffer);
    console.log('file parsed', allText);

    // const messages = [
    //   { role: 'system', content: summaryPrompt },
    //   { role: 'user', content: allText }
    // ];

    // const openAIResponse = await sendOpenAi(messages);

    return NextResponse.json({ message: 'Report generated successfully', report: allText });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
