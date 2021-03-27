import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../Screen";

import defaultStyles from "../../config/styles";

function AppTextInput({
  icon,
  width = "100%",
  placeholder,
  ...otherProps
}: {
  icon?: any;
  width: any;
  placeholder?: string;
  [x: string]: any;
}) {
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={defaultStyles.colors.MEDIUM}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        placeholderTextColor={defaultStyles.colors.MEDIUM}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.LIGHT,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
