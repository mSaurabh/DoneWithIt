import React from "react";
import { useFormikContext } from "formik";

import { StyleSheet } from "react-native";
import Button from "../../Button";

function SubmitButton({ title }: { title: any }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}
const styles = StyleSheet.create({});
export default SubmitButton;
