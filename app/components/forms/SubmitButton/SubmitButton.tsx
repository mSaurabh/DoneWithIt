import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet } from "react-native";
import AppButton from "../../AppButton";

function SubmitButton({ title }: { title: any }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}
const styles = StyleSheet.create({});
export default SubmitButton;
