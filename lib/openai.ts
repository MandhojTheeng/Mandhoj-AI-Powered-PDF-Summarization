import OpenAI from 'openai';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

// Check for environment variables and provide fallback
const apiKey = process.env.OPENAI_API_KEY || '';
const fallbackModel = process.env.OPENAI_FALLBACK_MODEL || 'gpt-3.5-turbo';

// Create OpenAI instance with error handling for missing API key
const openai = new OpenAI({
  apiKey: apiKey,
});

// Flag to track if we're in API quota exceeded mode
let isQuotaExceeded = false;

export async function generateSummaryFromOpenAI(pdfText: string) {
  try {
    // If we already know quota is exceeded, go straight to fallback
    if (isQuotaExceeded) {
      console.log('Skipping OpenAI API call due to known quota limitation');
      return generateFallbackSummary(pdfText);
    }

    // Log the incoming pdfText for debugging
    console.log('Input PDF Text:', pdfText);

    // Check if API key is missing
    if (!apiKey) {
      console.warn('OpenAI API key is missing. Using fallback summary generation.');
      return generateFallbackSummary(pdfText);
    }

    // Making the API call to OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4.1',
      messages: [
        { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    // Ensure that we have a valid response
    const summary = completion.choices?.[0]?.message?.content;

    if (!summary) {
      throw new Error('No summary generated');
    }

    return summary;
  } catch (error: any) {
    // More detailed error handling
    console.error('Error generating summary:', error);

    // Handle specific error codes
    if (error?.status === 404 && error?.code === 'model_not_found') {
      console.log('Model not found, trying fallback model...');
      return tryFallbackModel(pdfText);
    } else if (error?.status === 429 || error?.code === 'insufficient_quota') {
      // Set the quota exceeded flag to avoid further API calls
      isQuotaExceeded = true;
      console.log('Using fallback summary generation due to API rate limit or quota issues');
      return generateFallbackSummary(pdfText);
    } else if (error?.status === 401) {
      console.warn('Authentication error with OpenAI API. Using fallback summary generation.');
      return generateFallbackSummary(pdfText);
    } else if (error?.response?.data) {
      // Handle other OpenAI API errors
      console.warn(`OpenAI API Error: ${error.response.data?.error?.message}. Using fallback.`);
      return generateFallbackSummary(pdfText);
    } else if (error instanceof Error) {
      // Pass through Error objects with their message
      console.warn(`Error: ${error.message}. Using fallback.`);
      return generateFallbackSummary(pdfText);
    } else {
      // General fallback for unexpected errors
      console.warn('An unexpected error occurred. Using fallback summary generation.');
      return generateFallbackSummary(pdfText);
    }
  }
}

/**
 * Try using a fallback model when the primary model is not available
 */
async function tryFallbackModel(pdfText: string): Promise<string> {
  try {
    console.log(`Attempting to use fallback model: ${fallbackModel}`);
    
    const completion = await openai.chat.completions.create({
      model: fallbackModel,
      messages: [
        { role: 'system', content: SUMMARY_SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000, // Reduced for the fallback model
    });

    const summary = completion.choices?.[0]?.message?.content;
    
    if (!summary) {
      throw new Error('No summary generated from fallback model');
    }
    
    return summary;
  } catch (error) {
    console.error('Error with fallback model:', error);
    return generateFallbackSummary(pdfText);
  }
}

/**
 * Generates a basic summary when OpenAI API is unavailable
 * This is a fallback function that extracts key information from the text
 */
function generateFallbackSummary(text: string): string {
  try {
    // Simple fallback that extracts headings and first sentences
    const lines = text.split('\n').filter(line => line.trim().length > 0);

    // Extract what seem to be headings (short lines, often with colons)
    const headings = lines.filter(line =>
      (line.length < 100 && (line.includes(':') || /^[A-Z]/.test(line))) ||
      /^(#|\*|\-|\d+\.)/.test(line.trim())
    ).slice(0, 10);

    // Extract first sentences from paragraphs (likely to contain key information)
    const firstSentences = lines
      .filter(line => line.length > 100)
      .map(line => {
        const sentenceEnd = line.indexOf('. ');
        return sentenceEnd > 0 ? line.substring(0, sentenceEnd + 1) : line;
      })
      .slice(0, 5);

    // Combine into a simple markdown summary
    const summary = `
# Document Summary (Fallback Mode)

> Note: This is a basic summary generated without AI due to API limitations.

## Key Points

${headings.map(h => `- ${h.trim()}`).join('\n')}

## Overview

${firstSentences.join('\n\n')}

---
*This summary was generated in fallback mode due to OpenAI API limitations. For a more detailed summary, please try again later.*
`;

    return summary;
  } catch (err) {
    console.error('Error in fallback summary generation:', err);
    // Return an extremely basic summary if even the fallback fails
    return `# Document Summary\n\nThe document appears to contain information about: ${text.substring(0, 100)}...\n\n*Generated in emergency fallback mode due to API limitations.*`;
  }
}
