const BASE_URL = "/auth";

export default async function login(email, password) {
  return {
    name: "john doe",
    token: password,
    email,
  };
}
