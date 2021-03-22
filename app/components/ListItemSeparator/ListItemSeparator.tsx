import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { colors } from "../../config/Common-Resources.props";

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    opacity: 0.5,
    backgroundColor: colors.MEDIUM,
  },
});

export default ListItemSeparator;
