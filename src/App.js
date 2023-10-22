import { useState } from "react";
import "./App.css";
import { useCopy } from "./useCopy";

function App() {
  const [value, setValue] = useState("");
  const copy = useCopy();

  return (
    <div className="App">
      <div>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={() => {
          copy(value);
          setValue("");
        }}
      >
        Copy{" "}
      </button>
    </div>
  );
}

export default App;
