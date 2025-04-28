// import {PDFLoader} from '@langchain/community/document_loaders/fs/pdf';

// export async function fetchAndExtractPdfText(fileUrl:string){
//     const response = await fetch(fileUrl);
//     const blob = await response.blob();
//     const arrayBuffer = await blob.arrayBuffer();
//     const loader = new PDFLoader(new Blob([arrayBuffer]));

//     const docs = await loader.load();
//     return docs.map((doc)=>doc.pageContent).join('\n');

// }

import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { writeFile, unlink } from 'fs/promises';
import { randomUUID } from 'crypto';

export async function fetchAndExtractPdfText(fileUrl: string) {
    const response = await fetch(fileUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const tempFilePath = `./tmp-${randomUUID()}.pdf`;
    await writeFile(tempFilePath, buffer);

    const loader = new PDFLoader(tempFilePath);
    const docs = await loader.load();

    await unlink(tempFilePath); // Clean up temp file

    return docs.map((doc) => doc.pageContent).join('\n');
}
