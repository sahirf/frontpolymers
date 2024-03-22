import React from "react";
import { FondoAzul } from "./FondoAzul";

export const Background1 = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white'
      }}
    >
      <FondoAzul/>
    </div>
  );
};
export default Background1;