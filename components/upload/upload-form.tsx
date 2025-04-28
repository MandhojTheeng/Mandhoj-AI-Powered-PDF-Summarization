// "use client";

// import { z } from "zod";
// import { useUploadThing } from "@/utils/uploadthing";
// import UploadFormInput from "./upload-form-input";
// import { useState, useEffect } from "react";
// // Import toast for type checking
// import { toast } from "sonner";
// import { ClientOnly } from "@/components/providers/client-only-provider";
// import { generatedPDFSummary } from "@/action/upload-actions";

// const Schema = z.object({
//   file: z
//     .instanceof(File, { message: "Invalid file" })
//     .refine(
//       (file) => file.size <= 20 * 1024 * 1024,
//       "File size must be less than 20MB"
//     )
//     .refine(
//       (file) => file.type.startsWith("application/pdf"),
//       "File must be a PDF"
//     ),
// });

// export default function UploadForm() {
//   const [isUploading, setIsUploading] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // Ensure component is mounted before using toast
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Safe toast function that only runs on client
//   const showToast = (type: 'success' | 'error' | 'info', message: string) => {
//     if (isMounted) {
//       if (type === 'success') toast.success(message);
//       if (type === 'error') toast.error(message);
//       if (type === 'info') toast.info(message);
//     }
//   };

//   const { startUpload, isUploading: isUploadthingUploading } = useUploadThing("pdfUploader", {
//     onClientUploadComplete: (res) => {
//       console.log("Upload Completed!", res);
//       setIsUploading(false);
//       showToast('success', "File uploaded successfully!");
//     },
//     onUploadError: (error) => {
//       console.error("Error occurred while uploading:", error);
//       showToast('error', `Upload failed: ${error.message || "Unknown error"}`);
//       setIsUploading(false);
//     },
//     onUploadBegin: (fileName) => {
//       console.log("Upload has begun for:", fileName);
//       setIsUploading(true);
//       showToast('info', `Uploading ${fileName}...`);
//     },
//   });

//   const handleFileChange = (file: File | null) => {
//     setSelectedFile(file);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       showToast('error', "Please select a file first");
//       return;
//     }

//     if (!selectedFile || selectedFile.size === 0) {
//       showToast('error', "Please select a valid PDF file");
//       return;
//     }

//     // Validate file before uploading
//     const validatedFields = Schema.safeParse({ file: selectedFile });

//     if (!validatedFields.success) {
//       const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File";
//       console.error("Validation error:", errorMessage);
//       showToast('error', errorMessage);
//       return;
//     }

//     // Optimize file if possible (for PDFs we can't do much optimization client-side)
//     try {
//       // Show immediate feedback to user
//       setIsUploading(true);
      
//       // Start upload with optimized settings
//       const resp = await startUpload([selectedFile]);
      
//       if (!resp) {
//         setIsUploading(false);
//         showToast('error', "Upload failed: No response received");
//         return;
//       }

//       console.log("Upload successful:", resp);
//       // The onClientUploadComplete callback will handle success state
//     } catch (err) {
//       console.error("Upload error:", err);
//       setIsUploading(false);
//       showToast('error', `Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
//     }

//     // parse the pdf using 
//     const summary = await generatedPDFSummary(resp);
//     console.log({summary});
//     // summarize the pdf using AI
//     // save the sumary to the database
//     // redirect to the [id] summary page
//   };

//   return (
//     <ClientOnly>
//       <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
//         <UploadFormInput 
//           onFileChange={handleFileChange} 
//           onUpload={handleUpload}
//           isUploading={isUploading || isUploadthingUploading} 
//         />
//       </div>
//     </ClientOnly>
//   );
// }














"use client";

import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ClientOnly } from "@/components/providers/client-only-provider";
import { generatePDFSummary } from "@/action/upload-actions"; 

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
  const [isUploading, setIsUploading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    if (isMounted) {
      if (type === 'success') toast.success(message);
      if (type === 'error') toast.error(message);
      if (type === 'info') toast.info(message);
    }
  };

  const { startUpload, isUploading: isUploadthingUploading } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      console.log("Upload Completed!", res);
      setIsUploading(false);
      showToast('success', "File uploaded successfully!");
    },
    onUploadError: (error) => {
      console.error("Error occurred while uploading:", error);
      showToast('error', `Upload failed: ${error.message || "Unknown error"}`);
      setIsUploading(false);
    },
    onUploadBegin: (fileName) => {
      console.log("Upload has begun for:", fileName);
      setIsUploading(true);
      showToast('info', `Uploading ${fileName}...`);
    },
  });

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      showToast('error', "Please select a file first");
      return;
    }

    if (!selectedFile || selectedFile.size === 0) {
      showToast('error', "Please select a valid PDF file");
      return;
    }

    const validatedFields = Schema.safeParse({ file: selectedFile });

    if (!validatedFields.success) {
      const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid File";
      console.error("Validation error:", errorMessage);
      showToast('error', errorMessage);
      return;
    }

    try {
      setIsUploading(true);

      const resp = await startUpload([selectedFile]);

      if (!resp) {
        setIsUploading(false);
        showToast('error', "Upload failed: No response received");
        return;
      }

      console.log("Upload successful:", resp);

      // Only now call generatePDFSummary
      showToast('info', "Extracting and summarizing PDF...");
      const summary = await generatePDFSummary(resp);

      console.log({ summary });

      // You can now do:
      // - Save the summary to your DB
      // - Redirect to a new page
      // (example code below)
      // router.push(`/summary/${summary.data.id}`);
    } catch (err) {
      console.error("Upload error:", err);
      setIsUploading(false);
      showToast('error', `Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
    }
  };

  return (
    <ClientOnly>
      <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
        <UploadFormInput 
          onFileChange={handleFileChange} 
          onUpload={handleUpload}
          isUploading={isUploading || isUploadthingUploading} 
        />
      </div>
    </ClientOnly>
  );
}

