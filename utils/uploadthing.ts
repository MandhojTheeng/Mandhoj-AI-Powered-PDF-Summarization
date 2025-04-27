import type { OurFileRouter } from '../app/api/uploadthings/core';
import { generateReactHelpers } from '@uploadthing/react';

// Create the uploadthing helper with proper configuration
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>({
  url: '/api/uploadthings',
});