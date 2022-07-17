import React from "react";

export function ButtonClear(props) {
  return (
    <div className="button-clear" onClick={() => props.sacar()}>
      {props.children}
    </div>
  );
}
