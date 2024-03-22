import React from "react";
import { BlueRectangle, LightBlueRectangle, LightGrayRectangle, WhiteRectangle } from "./rectangles";

export const Background1 = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'red'
      }}
    >
      <BlueRectangle />
      <LightBlueRectangle />
      <LightGrayRectangle />
      <WhiteRectangle />
    </div>
  );
};
export default Background1;