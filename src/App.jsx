import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="font-bold">hola</h1>{" "}
      <p className="font-light ...">The quick brown fox ...</p>{" "}
      <p className="font-normal ...">The quick brown fox ...</p>{" "}
      <p className="font-medium ...">The quick brown fox ...</p>{" "}
      <p className="font-semibold ...">The quick brown fox ...</p>{" "}
      <p className="font-bold ...">The quick brown fox ...</p>{" "}
    </div>
  );
}

export default App;
