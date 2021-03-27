import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../../config/styles";

function AppButton({
  title,
  onPress,
  color = defaultStyles.colors.PRIMARY,
}: {
  title: string;
  onPress: any;
  color?: string;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    padding: 15,
    marginVertical: 10,
    backgroundColor: defaultStyles.colors.PRIMARY,
    borderRadius: 25,
  },
  text: {
    color: defaultStyles.colors.WHITE,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
