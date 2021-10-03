import Counter from "../counter/counter";
import Button from "../button/button";
import { useState } from "react";
import "./counter-main.scss";

function CounterMain() {
  const [counter, updateCounter] = useState([]);
  const resetArr = [];
  const appendcard = () => {
    if (counter.length === 0) {
      updateCounter([{ 0: 0 }]);
    } else {
      updateCounter([...counter, { [counter.length]: 0 }]);
    }
  };
  const getResetFunc = (func) => {
    resetArr.push(func);
  };
  const getCounters = () => {
    // console.log('called')
    return counter.map((elem, index) => {
      // console.log(elem[index],index)
      return (
        <li className="list" key={index}>
          <Counter
            itemIndex={index}
            deleteCounter={deleteCounter}
            getResetFunc={getResetFunc}
          >
            {elem[index]}
          </Counter>
        </li>
      );
    });
  };
  const deleteCounter = (index) => {
    // let someArray = counter.slice(0, index).concat(counter.slice(-index));
    let someArray = removeByIndex(counter, index);
    updateCounter(someArray);
  };

  function removeByIndex(data, key) {
    let arr = [...data];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] >= 0) {
        arr.splice(i, 1);
        break;
      }
    }
    return arr;
  }
  const reset = () => {
    resetArr.forEach((elem) => {
      elem();
    });
  };
  return (
    <div className="counter-main">
      <header className="counter-main-header">
        <Button styling="createBtn" performOp={appendcard}>
          +
        </Button>
        {counter.length > 0 ? (
          <Button styling="resetButton" performOp={reset}>
            Reset
          </Button>
        ) : (
          <></>
        )}
        <ul>{getCounters()}</ul>
      </header>
    </div>
  );
}

export default CounterMain;
