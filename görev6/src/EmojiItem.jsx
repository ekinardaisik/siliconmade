import React, { useState } from "react";

function EmojiItem({ emoji, name }) {
  const [copied, setCopied] = useState(false);

  const copyEmoji = () => {
    navigator.clipboard.writeText(emoji);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full border-t group cursor-pointer flex justify-between hover:bg-gray-200 transition border-gray-200 p-2 px-4"
      onClick={copyEmoji}
    >
      <div>
        {emoji} {name}
      </div>
      <div
        className={`opacity-0 group-hover:opacity-100 transition text-base ${
          copied ? "opacity-100" : ""
        }`}
      >
        {copied ? "Emoji kopyalandı" : "Kopyalamak için tıklayın"}
      </div>
    </div>
  );
}

export default EmojiItem;
