import React from "react";
import { View, Image } from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

/**
 *
 * * Flexbox horizontal axis is called "Primary Axis"
 * * Flexbox vertical axis is called "Cross Axis"
 */

export default function App() {
  return <ViewImageScreen />;
  //return <WelcomeScreen />;
}
