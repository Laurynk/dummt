import { nanoid } from "nanoid";
import "./styles.css";

export default function App() {
  const myid = nanoid();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{myid}</p>
    </div>
  );
}
