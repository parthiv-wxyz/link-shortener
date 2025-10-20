import { useState } from "react";
import type { Link } from "../types/link";
import { createShortLink as apiCreateShortLink } from "../api/links";

export const useLink = () => {
  const [shortLink, setShortLink] = useState<Link | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const createShortLink = async (originalUrl: string) => {
    setLoading(true);
    setError("");
    try {
      const newLink = await apiCreateShortLink(originalUrl);
      setShortLink(newLink);
    } catch (err: any) {
      setError(err.message || "Failed to create short link");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!shortLink) return;
    navigator.clipboard.writeText(shortLink.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { shortLink, loading, error, copied, createShortLink, copyToClipboard };
};
