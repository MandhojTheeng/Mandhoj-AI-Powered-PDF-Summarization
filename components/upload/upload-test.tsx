"use client";

import { useState } from "react";
import { useUploadThing } from "@/utils/uploadthing";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function UploadTest() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload completed:", res);
      setResult(res);
      setUploading(false);
      setError(null);
      toast.success("Upload successful!");
    },
    onUploadError: (error) => {
      console.error("Upload error:", error);
      setError(error.message || "Unknown error");
      setUploading(false);
      toast.error("Upload failed: " + (error.message || "Unknown error"));
    },
    onUploadBegin: (fileName) => {
      console.log("Upload started:", fileName);
      setUploading(true);
      setError(null);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    try {
      const res = await startUpload([file]);
      console.log("Upload result:", res);
    } catch (err) {
      console.error("Upload error:", err);
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Uploadthing Test</h2>
      
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