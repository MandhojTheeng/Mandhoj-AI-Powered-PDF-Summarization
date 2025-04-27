import { NextResponse } from "next/server";
import { createUploadthing, type FileRouter } from "uploadthing/server";

// Create a simple file router for testing
const f = createUploadthing();

const testFileRouter = {
  testUploader: f({ pdf: { maxFileSize: "32MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("Test upload completed:", file.url);
      return { file: file.url };
    }),
} satisfies FileRouter;

// Create a route handler for testing
export async function GET() {
  try {
    // Return a simple response to indicate the API is working
    return NextResponse.json({ 
      status: "ok", 
      message: "Test API route is working" 
    });
  } catch (error) {
    console.error("Test API error:", error);
    return NextResponse.json(
      { 
        status: "error", 
        message: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
} 