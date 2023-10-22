import { useCallback, useState } from "react";
import "./App.css";

const useToggle = (arr, index = 0) => {
  const [currIndex, setCurrIndex] = useState(index);

  const toggler = useCallback(() => {
    return setCurrIndex((prevIndex) =>
      prevIndex >= arr.length - 1 ? 0 : prevIndex + 1
    );
  }, [arr]);
  return [toggler, arr[currIndex]];
};

function App() {
  const [toggler, currentValue] = useToggle([1, 2, 3, 4, 5], 2);
  return (
    <div className="App">
      <h1>{currentValue}</h1>
      <button onClick={toggler}>toggle</button>
    </div>
  );
}

export default App;
