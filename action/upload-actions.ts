// 'use server';

// import { fetchAndExtractPdfText } from "@/lib/langchain";

// export async function generatePDFSummary(
//     uploadResponse:[
//         serverData:{
//             userId: string;
//             file:{
//                 url: string;
//                 name: string;
//             }
//         }
//     ]
// ){
//     if(!uploadResponse){
//         return {
//             success: false,
//             message: 'File uploaded failed',
//             data: null,
//         };
//     }
//     const {
//         serverData: {
//             userId,
//             file:{pdfUrl, name: fileName},
//         },
//     }=uploadResponse[0];

//     if(!pdfUrl){
//         return {
//             success: false,
//             message: 'File uploaded failed',
//             data: null,
//         };
//     }
//     try{
//         const pdfText = await fetchAndExtractPdfText(pdfUrl);
//         console.log({pdfText});
//     }catch(err){
//         return {
//             success: false,
//             message: 'File upload failed',
//             data: null,
//         };
//     }
// }

'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePDFSummary(
    uploadResponse: {
        serverData: {
            userId: string;
            file: {
                url: string;
                name: string;
            };
        };
    }[]
) {
    if (!uploadResponse || uploadResponse.length === 0) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        },
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log({ pdfText });

        return {
            success: true,
            message: 'PDF extracted successfully',
            data: pdfText,
        };
    } catch (err) {
        console.error(err);
        return {
            success: false,
            message: 'Error extracting PDF',
            data: null,
        };
    }
}
