import React from "react";
import { Text } from "react-native";
import defaultStyles from "../../config/styles";
/**
 * ### Creating Function Component for uniform text styles
 * #### Renaming the same component with <C-Name>.android.tsx makes it android platform specific
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
function AppText({ children, style }: { children: any; style?: any }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
