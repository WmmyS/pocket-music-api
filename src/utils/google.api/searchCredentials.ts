export interface SearchCredentialsType {
  auth: string;
  context: string;
}

export default {
  auth: process.env.GOOGLE_API_KEY,
  context: process.env.GOOGLE_ENG_ID,
};
