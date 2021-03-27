import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "../AppIcon/Icon";
import AppText from "../AppText";

function CategoryPickerItem({ item, onPress }: { item: any; onPress: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "flex-start",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "left",
  },
});
export default CategoryPickerItem;
