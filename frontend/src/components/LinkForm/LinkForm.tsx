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
    <div className="items-center">
      <form onSubmit={handleSubmit} className="flex gap-4 pt-16 pb-6">
        <div className="flex flex-col w-full justify-between pr-2.5 py-2.5 pl-7.5 bg-white rounded md:flex-row">
          <input
            type="url"
            placeholder="Enter link here"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
            className="border-none bg-white p-2 rounded w-full"
          />
          <button
            type="submit"
            disabled={loading}
            className="shortenbtn bg-[#ecf0f2] text-white py-[9px] px-4.5 rounded hover:bg-blue-600 whitespace-nowrap"
          >
            <span>{loading ? "Shortening..." : "Shorten for free"}</span>
          </button>
        </div>
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
