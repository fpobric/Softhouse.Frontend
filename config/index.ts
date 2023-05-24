const API_KEY = "Apikey 470e6e7c-4517-4c14-b818-13d67b2dcedf";
const BACKEND_API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const LOCAL_STORAGE_ID_KEY = "medicalCenterId";

const dateFormat = "DD/MM/YYYY";

process.env.BASE_URL = "";

if (!BACKEND_API_URL) {
  throw new Error("incorrect environment configuration");
}

const config = {
  BACKEND_API_URL,
  API_KEY,
  LOCAL_STORAGE_ID_KEY,
  dateFormat,
};

export default config;
