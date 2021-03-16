import React from "react";
import { View } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

/**
 *
 * * Flexbox horizontal axis is called "Primary Axis"
 * * Flexbox vertical axis is called "Cross Axis"
 */

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "grey",
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", // main axis
        alignItems: "center", // secondary axis & determines alignment of items within each line
        alignContent: "center", // determines alignment of all contents.
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          //* flexBasis = width in portrait mode & height in landscape mode.
          //flexBasis: 100,
          width: 100,
          //* flexShrink : 1 is equivalent to flex: -1 (means if there is an overflow then this component can shrink)
          //* flexGrow & flex = 1 results in same output = fills out rest of the main axis. (here its central axis)
          //flexGrow: 1,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
          top: 10,
          right: 10,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
