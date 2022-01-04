import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCounter,
  divideCounter,
  incrementCounter,
  multiplyCounter
} from "../redux/action";

function Counter() {
  const dispatch = useDispatch();

  const [inp, setInp] = useState("");

  const handleIncrement = () => {
    let myAct = incrementCounter(1);
    dispatch(myAct);
  };

  const handleDecrement = () => {
    let myAct = decrementCounter(1);
    dispatch(myAct);
  };

  const handleAdd = () => {
    let num = inp;
    const act = incrementCounter(num);
    dispatch(act);
  };

  const handleSubtract = () => {
    let num = inp;
    const act = decrementCounter(num);
    dispatch(act);
  };

  const handleMultiply = () => {
    let num = inp;
    const act = multiplyCounter(num);
    dispatch(act);
  };

  const handleDivide = () => {
    let num = inp;
    const act = divideCounter(num);
    dispatch(act);
  };

  return (
    <div>
      <input
        placeholder="add number"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <br />
      <br />
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSubtract}>SUBTRACT</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
    </div>
  );
}

export default Counter;
