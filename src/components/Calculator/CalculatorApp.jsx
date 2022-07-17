import React from "react";
import style from "./CalculatorApp.module.css";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import { ButtonClear } from "../Button/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

export function CalculatorApp() {
  const [value, setValue] = useState("");

  const agregar = (val) => {
    setValue(value + val);
  };
  const sacar = () => {
    setValue("");
  };

  const calculo = () => {
    value ? setValue(evaluate(value)) : alert("invalid value");
  };

  return (
    <div className={style.app}>
      <div className={style.titulo}>
        <h1 className={style.tit}>Calculadora React</h1>
      </div>
      <div className={style.calculatorContainer}>
        <Input input={value} />
        <div className={style.fila}>
          <Button click={agregar}>7</Button>
          <Button click={agregar}>8</Button>
          <Button click={agregar}>9</Button>
          <Button click={agregar}>+</Button>
        </div>
        <div className={style.fila}>
          <Button click={agregar}>4</Button>
          <Button click={agregar}>5</Button>
          <Button click={agregar}>6</Button>
          <Button click={agregar}>-</Button>
        </div>
        <div className={style.fila}>
          <Button click={agregar}>1</Button>
          <Button click={agregar}>2</Button>
          <Button click={agregar}>3</Button>
          <Button click={agregar}>*</Button>
        </div>
        <div className={style.fila}>
          <Button click={agregar}>0</Button>
          <Button click={agregar}>.</Button>
          <Button click={calculo}>=</Button>
          <Button click={agregar}>/</Button>
        </div>
        <div className={style.fila}>
          <ButtonClear sacar={sacar}>CLEAR</ButtonClear>
        </div>
      </div>
    </div>
  );
}
// () => setValue("")
