import { useUploadFile } from '@/hooks/useUploadFile';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onUploadSuccess: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 10 * 1024 * 1024, // 10MB limit
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    }
    // Include onDropRejected as needed
  });

  const { mutate: uploadFile, isLoading, isError, isSuccess, error } = useUploadFile();

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isLoading ? <p>Uploading...</p> : <p>Drag and drop a PDF file here, or click to select a file.</p>}
      {isError && <p style={{ color: 'red' }}>Error: {error instanceof Error ? error.message : 'An error occurred'}</p>}
      <button type="button" onClick={() => file && uploadFile(file)} disabled={!file || isLoading}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
