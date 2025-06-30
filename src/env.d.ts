/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_TEMPALATE_ID: string;
  readonly VITE_API_SERVICE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
