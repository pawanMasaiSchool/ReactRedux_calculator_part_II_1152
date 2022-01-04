import { useSelector } from "react-redux";
import Counter from "./Components/Counter";
import "./styles.css";

export default function App() {
  const myCount = useSelector((state) => state.myCount);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{myCount}</h1>
      <Counter />
    </div>
  );
}
