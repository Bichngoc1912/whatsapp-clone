const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? '';
const AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN ?? '';
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID ?? '';
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET ?? '';
const MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID ?? '';
const APP_ID = process.env.NEXT_PUBLIC_APP_ID;

export const APP_CONFIGS = {
  API_KEY: API_KEY,
  AUTH_DOMAIN: AUTH_DOMAIN,
  PROJECT_ID: PROJECT_ID,
  STORAGE_BUCKET: STORAGE_BUCKET,
  MESSAGING_SENDER_ID: MESSAGING_SENDER_ID,
  APP_ID: APP_ID,
};
