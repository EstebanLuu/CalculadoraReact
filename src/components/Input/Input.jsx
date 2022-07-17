import React from "react";
import style from "./Input.module.css";

export function Input({ input }) {
  return <div className={style.input}>{input}</div>;
}
