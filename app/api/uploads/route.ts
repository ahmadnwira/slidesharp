import { NextResponse, NextRequest } from 'next/server';
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
    // const formData = await req.formData();
    // const fileEntry = formData.get('file');

    // if (!fileEntry || typeof fileEntry === 'string') {
    //   return NextResponse.json({ error: 'File is required and must not be a string' }, { status: 400 });
    // }

    // const fileMetadata = {
    //   type: fileEntry.type,
    //   size: fileEntry.size
    // };

    // Validate file metadata
    // pdfFileSchema.parse(fileMetadata);

    // Assuming fileEntry.stream() is available and extractTextFromPDF supports Buffer input directly
    // const fileBuffer = Buffer.from(await fileEntry.arrayBuffer());
    // const allText = await extractTextFromPDF(fileBuffer);
    const allText = `    Premium Freelance Talent Marketplace Focused on Startups.

    Problem
1 Qualified talent 2 Payment
3 Social security
         *According to magnitt State of MENA Startups 2019
 
    Solution
1 Trusted directory
2 Transnational payment
3 Medical & Social security plans
       
      Post unlimited projects

      Get qualified applicants

        Collaborate
Send payment

      Apply for unlimited projects

        Collaborate Get paid

     Traction
  
    400K
Earned by freelancers from Jan 2020
   
    How we make money?
● 10% for transactional payment & conflict resolution services.
● Fixed pricing plans for Startups & SMEs (one-off / subscriptions).
   
    Competitors
        Ourspark
Ureed
Al7arefa
Upwork
Screened talent
Startup Focused
Social security
Payment
     
    Market size
100K freelancer in Egypt
$4 Billion freelancing market in MENA $18 Billion global market
     *World Bank 2016 report

    Ask
   1,000,000 EGP

    Team
Ahmed Salah
Founder-CEO
4+ years as a freelancer Developer @ Scandiweb Developer @ Udacity
Ahmed Mohamed
Founder-CCO
6+ years as a freelancer
SE @ (MIG)
SE @ Hammam Industries & Co.
     `;
    const messages = [
      { role: 'system', content: summaryPrompt },
      { role: 'user', content: allText }
    ];

    const openAIResponse = await sendOpenAi(messages);

    return NextResponse.json({ message: 'Report generated successfully', report: openAIResponse });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
    }

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
