import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const ArrowRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    style={{ transform: [{ rotate: "180deg" }] }}
  >
    <Path
      fill="currentColor"
      d="m9.55 12 7.35 7.35q.375.375.363.875t-.388.875-.875.375-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75.15-.75.45-.675l7.7-7.7q.375-.375.888-.363t.887.388.375.875-.375.875z"
    />
  </Svg>
);
