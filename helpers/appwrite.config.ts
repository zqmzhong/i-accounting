import { Client } from "appwrite";

const client = new Client();
console.log('process.env.NEXT_PUBLIC_APPWRITE_CLOUD_URL: ', process.env.NEXT_PUBLIC_APPWRITE_CLOUD_URL);
console.log('process.env.APPWRITE_PROJECT_ID: ', process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_CLOUD_URL as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

export default client;
