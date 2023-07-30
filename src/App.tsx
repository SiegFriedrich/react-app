import { useState } from "react ";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Message />
    </div>
  );
}

export default App;
