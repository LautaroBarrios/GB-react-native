import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Plus = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path
      fill="none"
      stroke={props.stroke || "#ffff00"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v14m-7-7h14"
    />
  </Svg>
);
