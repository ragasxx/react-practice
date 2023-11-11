import { useEffect, useState } from "react";
import "./App.css";

import React from "react";

const ShowSomething = ({ words }) => {
  const [displayWord, setDisplayWord] = useState([]);

  useEffect(() => {
    words.forEach((word, index) => {
      const timer = setTimeout(() => {
        setDisplayWord((prev) => [...prev, word]);
        console.log(displayWord);
      }, index * 2000);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div>
      {displayWord.map((word, index) => (
        <p key={index}> {word}</p>
      ))}
    </div>
  );
};

const App = () => {
  const [typedText, setTypedText] = useState("");
  const [showChildComponent, setShowChildComponent] = useState(false);
  const handleSubmit = () => {
    setShowChildComponent(true);
  };

  return (
    <div className="flex border border-black justify-center items-center h-screen">
      <div className="mb-10">
        <input
          className="b-2 border border-black"
          type="text"
          placeholder="enter something"
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
        {showChildComponent && <ShowSomething words={typedText.split(" ")} />}
      </div>
    </div>
  );
};

export default App;
