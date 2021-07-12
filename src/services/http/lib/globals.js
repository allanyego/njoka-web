export const ROOT_URL =
  process.env.NODE_ENV === "production"
    ? "https://afyamedex.herokuapp.com"
    : "http://localhost:8080";

export const SERVER_URL = `${ROOT_URL}/api/v1`;
