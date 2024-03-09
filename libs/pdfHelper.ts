import pdfParse from 'pdf-parse';

export async function extractTextFromPDF(fileBuffer: Buffer): Promise<string> {
  try {
    const pdfData = await pdfParse(fileBuffer);
    return pdfData.text.trim();
  } catch (error) {
    console.log('error', error);
    return '';
  }
}
