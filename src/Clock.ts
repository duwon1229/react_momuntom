import React from "react";

const initTime = () => {
  const nowTime = new Date();
  const nowHours = nowTime.getHours();
  const nowMinutes = nowTime.getMinutes();
  const nowSeconds = nowTime.getSeconds();

  return { nowHours, nowMinutes, nowSeconds };
};

const getTime = () => {
  let time: string;
  time = Date();
  console.log(initTime());
};

getTime();

export default {};
