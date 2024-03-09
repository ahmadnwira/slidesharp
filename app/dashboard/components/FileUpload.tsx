'use client';

import { useUploadFile } from '@/hooks/useUploadFile';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadIcon } from 'lucide-react';

interface FileUploadProps {
  onUploadSuccess: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 10 * 1024 * 1024, // 10MB limit
    onDrop
  });

  const { mutate: uploadFile, isPending, isError, error } = useUploadFile();

  const handleUploadClick = () => {
    if (file) {
      uploadFile(file, {
        onSuccess: () => {
          onUploadSuccess();
          // Reset file after successful upload
          setFile(null);
        }
      });
    }
  };

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer hover:border-gray-400"
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center">
        <UploadIcon className="w-12 h-12 text-gray-400 mb-2" />
        {isPending ? (
          <p className="text-gray-500">Uploading...</p>
        ) : (
          <p className="text-gray-400 text-sm">
            Drag and drop a PDF file here, or click to select a file. <br />
            (Only *.pdf files are supported, up to 10MB in size.)
          </p>
        )}
        {isError && (
          <p className="text-red-500">Error: {error instanceof Error ? error.message : 'An error occurred'}</p>
        )}
      </div>
      <button
        type="button"
        onClick={handleUploadClick}
        disabled={!file || isPending}
        className="mt-4 bg-slate-800 text-white font-bold py-2 px-4 rounded disabled:bg-slate-300"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
