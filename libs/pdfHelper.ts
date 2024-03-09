import { getDocument } from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

export async function extractTextFromPDF(fileBuffer: Buffer): Promise<string> {
  const pdfDoc = await getDocument(fileBuffer).promise;
  const numPages = pdfDoc.numPages;

  let allText = '';
  for (let i = 1; i <= numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const pageTextContent = await page.getTextContent();
    allText += pageTextContent.items
      .filter((item): item is TextItem => item.hasOwnProperty('str'))
      .map((item) => item.str)
      .join(' ');
  }

  return allText;
}
