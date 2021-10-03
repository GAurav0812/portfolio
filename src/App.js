import React, { useState } from "react";
import "./App.scss";
import Nav from "./components/nav/nav";
import CounterMain from "./components/counter-main/counter-main";

function App() {
  /*  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter((counter = 0));
  }; */
  let sections = [
    {
      title: "Home",
      show: true,
      class: "home",
    },
    {
      title: "About us",
      show: true,
      class: "about-us",
    },
    {
      title: "Contact us",
      show: true,
      class: "contact-us",
    }
  ];
  let [section, setSections] = useState(sections);
  // let [refresh, setRefresh] = useState(false);
  const setNav = (navData) => {
    setSections(navData);
    // setRefresh(!refresh);
  };
  return (
    <div className="app-component">
      <div className="header-component">
        <Nav data={section} updateSections={setNav}></Nav>
      </div>
      <div className="main-component">
        {section.map((ele, index) => {
          console.log(ele);
          return (
            ele.show && (
              <section key={index} className={`section ${ele.class}`}>
                <div className="heading">{ele.title}</div>
                {ele.class === "home" && (
                  <div>
                    <CounterMain></CounterMain>
                  </div>
                )}
              </section>
            )
          );
        })}

        {/*    <button className="reset-button" disabled={counter === 0} onClick={reset}>Reset</button>
      <div className="main">
        <div className="header">Counter</div>
        <div className="counter">
          <button
            className="minus"
            disabled={counter >= 10}
            onClick={increment}
          >
            +
          </button>
          <div className="header">{counter}</div>
          <button className="plus" disabled={counter <= 0} onClick={decrement}>
            -
          </button>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default App;
