// hook/usePut.js
import { useMutation } from "@tanstack/react-query";
import { useState } from 'react';

import { API } from "../config/axiosConfig";
import { notifyError } from "../components/common/Toast/Toaster";



const useDelete = (apiEndpoint, onSuccessCallback, onErrorCallback) => {

  const { mutate, isLoading } = useMutation(
    (id) => API.delete(`${apiEndpoint}/${id}`),

    {
      onSuccess: (response) => {
        onSuccessCallback(response.data.message);
      },
      onError: (errors) => {
        console.log("errors", errors);
        notifyError(errors.response?.data?.message);
        onErrorCallback(errors.response.data.message);
      },
    },
  );
  return {
    mutate,
    isLoading,
  };
};

export default useDelete;