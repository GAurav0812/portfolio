import { useState } from "react";
import Button from "../button/button";
import "./counter.css";
function Counter(props) {
  // var value=0;
  const [value, updateValue] = useState(props.children);
  const incr = () => {
    updateValue(value + 1);
  };
  const decr = () => {
    updateValue(value - 1);
  };
  const reset = () => {
    updateValue(0);
  };
  return (
    <>
      <div className="counter-card">
        <Button
          className="rmvBtn"
          performOp={() => props.deleteCounter(props.itemIndex)}
        >
          D
        </Button>
        <div>
          <Button styling="counterButton" performOp={decr}>
            -
          </Button>
          {value}
          <Button styling="counterButton" performOp={incr}>
            +
          </Button>
        </div>
        <Button styling="counterButton" performOp={reset}>
          Reset
        </Button>
      </div>
    </>
  );
}
export default Counter;
