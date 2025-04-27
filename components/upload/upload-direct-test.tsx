"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { uploadFiles } from "@/utils/uploadthing";
import { toast } from "sonner";

export default function UploadDirectTest() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // Use the uploadFiles function directly
      const res = await uploadFiles("pdfUploader", { files: [file] });

      console.log("Upload result:", res);
      setResult(res);
      setUploading(false);
      toast.success("Upload successful!" + (res ? "\n" + JSON.stringify(res, null, 2) : ""));
    } catch (err) {
      console.error("Upload error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
      setUploading(false);
      toast.error("Upload failed: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Direct Uploadthing Test</h2>
      
      <div className="mb-4">
        <input 
          type="file" 
          accept="application/pdf" 
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-rose-50 file:text-rose-700
            hover:file:bg-rose-100"
        />
      </div>
      
      <Button 
        onClick={handleUpload} 
        disabled={!file || uploading}
        className="w-full"
      >
        {uploading ? "Uploading..." : "Upload File"}
      </Button>
      
      {/* Remove inline error and result messages */}
    </div>
  );
} 