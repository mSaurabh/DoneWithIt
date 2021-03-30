import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../config/Common-Resources.props";
import AppText from "../../Text";

function ErrorMessage({ error, visible }: { error: any; visible: any }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: colors.DANGER,
  },
});
export default ErrorMessage;
