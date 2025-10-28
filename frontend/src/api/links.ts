import type { Link } from "../types/link";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createShortLink = async (originalUrl: string): Promise<Link> => {
  const res = await fetch(`${BASE_URL}/api/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ originalUrl }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to create short link");
  }
  const data = await res.json();
  return data as Link;
};
