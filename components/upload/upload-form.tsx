"use client";

import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { useState } from "react";

const Schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

export default function UploadForm() {
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const { startUpload, isUploading: isUploadthingUploading } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload Completed!", res);
      setIsUploading(false);
      setError(null);
      setUploadSuccess(true);
    },
    onUploadError: (error) => {
      console.error("Error occurred while uploading:", error);
      setError(`Upload failed: ${error.message || "Unknown error"}`);
      setIsUploading(false);
    },
    onUploadBegin: (fileName) => {
      console.log("Upload has begun for:", fileName);
      setIsUploading(true);
      setError(null);
      setUploadSuccess(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setUploadSuccess(false);

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validatedFields = Schema.safeParse({ file });

    if (!validatedFields.success) {
      const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File";
      console.error("Validation error:", errorMessage);
      setError(errorMessage);
      return;
    }

    try {
      // Upload the file using uploadthing
      const resp = await startUpload([file]);
      if (!resp) {
        setError("Upload failed: No response received");
        return;
      }
      
      console.log("Upload successful:", resp);
    } catch (err) {
      console.error("Upload error:", err);
      setError(`Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          {error}
        </div>
      )}
      {uploadSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-600">
          File uploaded successfully!
        </div>
      )}
      <UploadFormInput onSubmit={handleSubmit} isUploading={isUploading || isUploadthingUploading} />
    </div>
  );
}
