import OpenAI from 'openai';
import { SUMMARY_SYSTEM_PROMPT } from '@/utils/prompts';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummaryFromOpenAI(pdfText: string) {
  try {
    // Log the incoming pdfText for debugging
    console.log('Input PDF Text:', pdfText);

    // Making the API call to OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
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

    if (error?.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    } else if (error?.response?.data) {
      // Handle OpenAI API errors (e.g., invalid input or server issues)
      throw new Error(`OpenAI API Error: ${error.response.data?.error?.message}`);
    } else {
      // General fallback for unexpected errors
      throw new Error('An unexpected error occurred while generating the summary');
    }
  }
}
