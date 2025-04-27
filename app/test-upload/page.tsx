"use client";

import UploadTest from "@/components/upload/upload-test";
import UploadDirectTest from "@/components/upload/upload-direct-test";

export default function TestUploadPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Uploadthing Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h2 className="text-xl font-semibold mb-4">Hook-based Upload</h2>
          <UploadTest />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Direct API Upload</h2>
          <UploadDirectTest />
        </div>
      </div>
    </div>
  );
} 