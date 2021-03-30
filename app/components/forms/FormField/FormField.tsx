import React from "react";
import {
  FormikErrors,
  FormikTouched,
  FormikValues,
  useFormikContext,
} from "formik";

import AppTextInput from "../../TextInput/TextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function FormField({
  name,
  width,
  ...otherProps
}: {
  name: any;
  width?: any;
  [x: string]: any;
}) {
  //NOTE: This was a pain in the butt specially for typescript useFormikContext<FormikValues>(); solved my problem with error[name] indexing error
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
  } = useFormikContext<FormikValues>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        width={width}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
