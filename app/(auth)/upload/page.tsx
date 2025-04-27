"use client";

import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";
import { useState, useEffect } from "react";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden isolate px-6 py-24 sm:py-32 lg:px-8">
      {/* Base Gradient Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 transform-gpu overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f5faff] to-[#e0f0ff] opacity-60" />
      </div>

      {/* Gradient - Top (Radial) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 transform-gpu overflow-hidden blur-lg"
      >
        <div
          style={{
            clipPath:
              "polygon(70% 40%, 95% 60%, 90% 20%, 80% 5%, 75% 10%, 65% 35%, 55% 60%, 50% 65%, 45% 55%, 40% 30%, 25% 70%, 5% 60%, 15% 90%, 30% 80%, 70% 90%, 70% 40%)",
          }}
          className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_#e0f0ff_0%,_#b3d4fc_40%,_#80b5fa_70%,_#4a90e2_100%)] opacity-50"
        />
      </div>

      {/* Gradient - Middle Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 transform-gpu overflow-hidden blur-lg"
      >
        <div
          style={{
            clipPath:
              "polygon(25% 25%, 55% 5%, 95% 25%, 95% 65%, 75% 95%, 25% 95%, 5% 65%, 5% 25%)",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#f5faff] via-[#d1e3ff] to-[#8ab4f8] opacity-45"
        />
      </div>

      {/* Gradient - Bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 transform-gpu overflow-hidden blur-lg"
      >
        <div
          style={{
            clipPath: "polygon(45% 5%, 95% 35%, 75% 95%, 25% 95%, 5% 35%)",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#f7fafc] via-[#e6f3ff] to-[#b3d4fc] opacity-45"
        />
      </div>

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-4xl mx-auto">
        <UploadHeader />
        {isMounted ? (
          <UploadForm />
        ) : (
          <div className="w-full max-w-2xl mx-auto">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
              <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                <div className="h-8 w-8 text-rose-500" />
              </div>
              <div className="text-center mt-4">
                <p className="font-medium text-gray-700">Drag & drop your PDF here</p>
                <p className="text-sm text-gray-500">or click to browse files</p>
              </div>
              <p className="text-xs text-gray-400 mt-2">PDF files only, up to 20MB</p>
            </div>
            <div className="flex justify-center mt-6">
              <button 
                disabled
                className="w-full sm:w-auto bg-rose-500 text-white px-8 py-2 rounded-md opacity-70"
              >
                Upload PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
