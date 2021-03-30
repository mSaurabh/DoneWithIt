import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  backgroundColor = "#000",
  iconColor = "#fff",
  name,
  size = 40,
  borderRadius = size / 2,
}: {
  backgroundColor?: string;
  borderRadius: any;
  iconColor?: string;
  name: any;
  size?: number;
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: borderRadius,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.5}
      ></MaterialCommunityIcons>
    </View>
  );
}

export default Icon;
