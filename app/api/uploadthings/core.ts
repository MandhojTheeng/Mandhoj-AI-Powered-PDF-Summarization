import {
  createUploadthing,
  type FileRouter,
  UploadThingError,
} from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

// Create the uploadthing instance
const f = createUploadthing();

// Define the file router
export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async () => {
      try {
        const session = await auth();

        if (!session.userId) {
          console.error("Authentication failed: No user ID found in session");
          throw new UploadThingError("Unauthorized: Please sign in to upload files");
        }

        return { userId: session.userId };
      } catch (error) {
        console.error("Authentication error:", error);
        throw new UploadThingError(
          error instanceof Error 
            ? `Authentication error: ${error.message}` 
            : "Authentication failed"
        );
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed for user ID:", metadata.userId);
      return {
        userId: metadata.userId,
        file: {
          url: file.url,
          name: file.name,
          ufsUrl: file.url, // Using the same URL for now, you can modify this as needed
        },
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
