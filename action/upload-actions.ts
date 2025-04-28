'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";

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
    // Check if the upload response exists and is non-empty
    if (!uploadResponse || uploadResponse.length === 0) {
        return {
            success: false,
            message: 'File upload failed: No data received',
            data: null,
        };
    }

    // Extract necessary file details from the response
    const {
        serverData: {
            userId,
            file: { url: pdfUrl, name: fileName },
        },
    } = uploadResponse[0];

    // Check if PDF URL is missing
    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed: Missing PDF URL',
            data: null,
        };
    }

    try {
        // Fetch and extract text from the PDF
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log(`Extracted text from PDF:`, pdfText);

        // Try generating the summary with OpenAI
        let summary: string | null = null;
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log(`Generated summary:`, summary);
        } catch (error) {
            console.error(`Error generating summary:`, error);
        }

        // Return appropriate response based on whether summary was generated
        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null,
            };
        }

        // Return successful response with summary data
        return {
            success: true,
            message: 'PDF extracted and summary generated successfully',
            data: { pdfText, summary },
        };
    } catch (err) {
        console.error(`Error extracting PDF:`, err);
        return {
            success: false,
            message: 'Error extracting PDF',
            data: null,
        };
    }
}
