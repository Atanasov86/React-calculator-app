import "./App.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { btnValues } from "./components/constants";
import { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState({
    sing: "",
    num: 0,
    result: 0,
  });

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      result: calc.result ? calc.result * -1 : 0,
      sign: ""
    })

  };

  const resetClickHandler = () => {
    setCalc({
      sing: "",
      num: 0,
      result: 0,
    });
  };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(calc.num.length);
    console.log(calc.num);
    // if (calc.num.length < 16) {
    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === "0"
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      result: !calc.sign ? 0 : calc.result,
    });
    // }
  };

  const btnLists = btnValues.flat().map((btn, i) => {
    return (
      <Button
        key={i}
        className={btn === "=" ? "equals" : ""}
        value={btn}
        onClick={
          btn === "C"
            ? resetClickHandler
            : btn === "+-"
            ? invertClickHandler
            : numClickHandler
        }
      />
    );
  });

  return (
    <div className="App">
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.result} />
        <ButtonBox>{btnLists}</ButtonBox>
      </Wrapper>
    </div>
  );
};

export default App;
