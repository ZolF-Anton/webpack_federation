import React, { useState } from "react";
import s from "./app.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(1);
  const increment = () => setCount((prev) => prev * 2);
  return (
    <div>
      <h1 className={s.h1}>Hello world</h1>
      <h3>{count}</h3>
      <button className={s.button} onClick={increment}>
        <span>increment</span>
      </button>
    </div>
  );
};
