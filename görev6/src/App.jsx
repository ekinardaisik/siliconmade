import React, { useState } from "react";
import emojiArray from "./data";
import EmojiItem from "./EmojiItem";


// Türkçe karakterleri İngilizce karakterlere dönüştürme fonksiyonu
const normalizeText = (text) =>
  text
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");


function App() {
  // Emoji listesi ve arama terimi için state'ler

  const [emojis, setEmojis] = useState(emojiArray);
  const [searchTerm, setSearchTerm] = useState("");

  // Arama terimini güncelleyen ve normalize eden fonksiyon
  const handleChange = (e) => {
    const normalizedInput = normalizeText(e.target.value);
    setSearchTerm(normalizedInput);
  };

  // Normalize edilmiş arama terimini kullanarak eşleşen emoji'leri bulan fonksiyon
  const filteredEmojis = emojis.filter((emoji) =>
    normalizeText(emoji.name).includes(searchTerm)
  );

  return (
    <div className="min-h-screen h-full w-full flex items-center flex-col">
      <div className="p-4 w-full flex flex-col items-center">
        <div className="flex gap-4 h-fit items-center text-2xl">
          <img className="w-6 h-6" src="cat-left.png" alt="" />
          Emoji Arama Motoru
          <img className="w-6 h-6" src="cat-right.png" alt="" />
        </div>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-sm text-xl mt-4 p-1"
          placeholder="Emoji adı girin..."
          onChange={handleChange}
        />
      </div>
      <div className="data flex flex-col w-full text-xl">
        {filteredEmojis.map((emoji, index) => (
          <EmojiItem key={index} emoji={emoji.emoji} name={emoji.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
