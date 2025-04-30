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
                ufsUrl?: string;
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
            file: { ufsUrl, url: pdfUrl, name: fileName },
        },
    } = uploadResponse[0];

    // Use ufsUrl if available, otherwise fall back to pdfUrl
    const fileUrl = ufsUrl || pdfUrl;

    // Check if PDF URL is missing
    if (!fileUrl) {
        return {
            success: false,
            message: 'File upload failed: Missing PDF URL',
            data: null,
        };
    }

    try {
        // Fetch and extract text from the PDF using ufsUrl if available
        const pdfText = await fetchAndExtractPdfText(fileUrl);
        console.log(`Extracted text from PDF:`, pdfText);

        // Try generating the summary with OpenAI
        let summary: string | null = null;
        let errorMessage = 'Failed to generate summary';
        
        try {
            summary = await generateSummaryFromOpenAI(pdfText);
            console.log(`Generated summary:`, summary);
        } catch (error: any) {
            console.error(`Error generating summary:`, error);
            
            // Capture more specific error messages from OpenAI
            if (error instanceof Error) {
                errorMessage = `Summary generation failed: ${error.message}`;
            }
        }

        // Return appropriate response based on whether summary was generated
        if (!summary) {
            return {
                success: false,
                message: errorMessage,
                data: null,
            };
        }

        // Return successful response with summary data
        return {
            success: true,
            message: 'PDF extracted and summary generated successfully',
            data: { pdfText, summary },
        };
    } catch (err: any) {
        console.error(`Error extracting PDF:`, err);
        
        // More specific error message for PDF extraction failures
        let errorMessage = 'Error extracting PDF';
        if (err instanceof Error) {
            errorMessage = `PDF extraction failed: ${err.message}`;
        }
        
        return {
            success: false,
            message: errorMessage,
            data: null,
        };
    }
}
