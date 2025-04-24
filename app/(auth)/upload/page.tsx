"use client";

import UploadHeader from "@/components/upload/upload-header";
import UploadForm from "@/components/upload/upload-form";

export default function Page() {
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
        <UploadForm />
      </div>
    </section>
  );
}
