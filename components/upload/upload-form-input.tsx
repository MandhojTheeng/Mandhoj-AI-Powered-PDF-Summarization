"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Upload, FileText } from "lucide-react";
import { useRef, useState } from "react";
import { ClientOnly } from "@/components/providers/client-only-provider";

interface UploadFormInputProps {
  onFileChange: (file: File | null) => void;
  onUpload: () => void;
  isUploading?: boolean;
}

export default function UploadFormInput({ onFileChange, onUpload, isUploading = false }: UploadFormInputProps) {
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragAccept, setDragAccept] = useState(false);
  const [dragReject, setDragReject] = useState(false);

  // Event handlers
  const handleButtonClick = () => {
    if (!isUploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileChange(file);
    } else {
      setSelectedFile(null);
      onFileChange(null);
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    
    // Check if it's a PDF file
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      const item = e.dataTransfer.items[0];
      if (item.kind === 'file' && item.type === 'application/pdf') {
        setDragAccept(true);
        setDragReject(false);
      } else {
        setDragAccept(false);
        setDragReject(true);
      }
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setDragAccept(false);
    setDragReject(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setDragAccept(false);
    setDragReject(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setSelectedFile(file);
        onFileChange(file);
      }
    }
  };

  // CSS classes
  const getDropzoneClasses = () => {
    const baseClasses = "border-2 border-dashed rounded-lg p-8 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer bg-white/50 backdrop-blur-sm";
    
    if (isDragging && dragAccept) return `${baseClasses} border-green-400 bg-green-50/50`;
    if (isDragging && dragReject) return `${baseClasses} border-red-400 bg-red-50/50`;
    if (isDragging) return `${baseClasses} border-rose-400 bg-rose-50/50`;
    if (selectedFile) return `${baseClasses} border-rose-300 bg-rose-50/40`;
    return `${baseClasses} border-gray-200 hover:border-rose-200 hover:bg-rose-50/30`;
  };

  return (
    <ClientOnly>
      <div className="flex flex-col gap-6">
        <div 
          className={getDropzoneClasses()}
          onClick={handleButtonClick}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Input
            id="file"
            name="file"
            type="file"
            accept="application/pdf"
            disabled={isUploading}
            ref={fileInputRef}
            className="hidden" // Hide the default file input
            onChange={handleFileChange}
          />
          
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            {selectedFile ? (
              <>
                <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-700">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button 
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                    onFileChange(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="mt-2 text-rose-600 border-rose-200 hover:bg-rose-50"
                >
                  Change file
                </Button>
              </>
            ) : (
              <>
                <div className="h-16 w-16 rounded-full bg-rose-100 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-rose-500" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-gray-700">Drag & drop your PDF here</p>
                  <p className="text-sm text-gray-500">or click to browse files</p>
                </div>
                <p className="text-xs text-gray-400 mt-2">PDF files only, up to 20MB</p>
              </>
            )}
          </div>
        </div>
      
        <div className="flex justify-center">
          <Button 
            type="button" 
            onClick={onUpload}
            disabled={isUploading || !selectedFile}
            className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white px-8"
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Upload PDF"
            )}
          </Button>
        </div>
      </div>
    </ClientOnly>
  );
}
