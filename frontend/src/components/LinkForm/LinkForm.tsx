import React, { useState } from "react";
import { useLink } from "@/hooks/useLink";

const LinkForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const {
    shortLink,
    loading,
    error,
    copied,
    createShortLink,
    copyToClipboard,
  } = useLink();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalUrl) return;
    createShortLink(originalUrl);
    setOriginalUrl("");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="url"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
          className="border bg-gray-100 p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {shortLink && (
        <div className="mt-4 p-4 bg-gray-100 rounded flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <a
              href={shortLink.shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 break-all"
            >
              {shortLink.shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 text-white px-2 py-1 rounded ml-2 hover:bg-green-600"
            >
              Copy
            </button>
          </div>
          {copied && <p className="text-green-600 text-sm">Copied!</p>}
        </div>
      )}
    </div>
  );
};

export default LinkForm;
