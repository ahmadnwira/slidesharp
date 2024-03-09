import apiClient from '@/libs/api';
import { useMutation } from '@tanstack/react-query';

export const useUploadFile = () => {
  const mutation = useMutation(async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return await apiClient.post('/upload', formData);
  }, {});

  return mutation;
};
