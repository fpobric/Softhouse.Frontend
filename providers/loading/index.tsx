import { createContext, useState } from "react";

export const LoadingContext = createContext({
  loading: false,
  updateLoading: (value: boolean) => {},
});

const LoadingProvider = ({ children }: { children: any }) => {
  const [loading, setLoading] = useState(true);

  const updateLoading = (value: boolean) => {
    setLoading(value);
  };

  const loadingData = {
    loading,
    updateLoading,
  };

  return (
    <LoadingContext.Provider value={loadingData}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
