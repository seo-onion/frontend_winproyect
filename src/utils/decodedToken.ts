import { jwtDecode } from "jwt-decode";

export function decodedToken(token: string | null) {

  if (!token || typeof token !== "string") {
    throw new Error("Token not found or is not a valid string");
  }

  const decoded = jwtDecode(token); // Decodificar el token
  return decoded;
}
