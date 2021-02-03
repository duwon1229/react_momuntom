import { render } from "@testing-library/react";
import React from "react";
import "./App.css";

const initTime = () => {
  const nowTime = new Date();
  const nowHours = nowTime.getHours();
  const nowMinutes = nowTime.getMinutes();
  const nowSeconds = nowTime.getSeconds();

  return { nowHours, nowMinutes, nowSeconds };
};

function getTime() {
  return (
    <div className="clock">
      <h1>
        {initTime().nowHours}:{initTime().nowMinutes}:{initTime().nowSeconds}
      </h1>
    </div>
  );
}

export default getTime;
