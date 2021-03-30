import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/styles";

/**
 * ### Creating Function Component for uniform text styles
 *  - This will make sure our text looks the same throughout our app
 *  ----
 *  @example
 *  <AppText />
 *  ----
 *  @version 21.03.18
 *  -  *Creating File*
 *  @author  s_Mankar
 *
 **/
function AppText({
  children,
  style,
  ...otherProps
}: {
  children: any;
  style?: any;
  [x: string]: any;
}) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
