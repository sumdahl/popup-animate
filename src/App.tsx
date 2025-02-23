import React, { useState } from "react";
import data from "./datas/data";
import MessageCard from "./components/MessageCard";
import { AnimatePresence, motion } from "framer-motion";

const App: React.FC = () => {
  const [messages, setMessages] = useState(data);

  const handleRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    // Move selected message to the top while keeping the order
    setMessages([
      randomMessage,
      ...messages.filter((_, index) => index !== randomIndex),
    ]);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
        Messages
      </h1>
      <button
        onClick={handleRandomMessage}
        className="bg-blue-500 text-white px-4 py-3 rounded-full mb-4 transition hover:bg-blue-600 active:scale-95"
      >
        Show Random Message
      </button>
      <motion.div layout className="space-y-4">
        <AnimatePresence>
          {messages.map((item, index) => (
            <MessageCard
              key={item.updatedAt} // Ensure unique key
              name={item.name}
              message={item.message}
              updatedAt={item.updatedAt}
              isNew={index === 0} // Highlight the top message
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
