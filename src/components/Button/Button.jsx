import React from "react";
import "./Buttons.css";

function Button(props) {
  const operador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`button-container ${
        operador(props.children) ? "operador" : null
      }`}
      onClick={() => props.click(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
