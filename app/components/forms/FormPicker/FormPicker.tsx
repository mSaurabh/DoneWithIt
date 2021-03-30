import React from "react";
import { FormikValues, useFormikContext } from "formik";

import Picker from "../../Picker/Picker";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { dItems } from "../../../config/Common-Resources.props";

function FormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}: {
  items: dItems[];
  name: string;
  numberOfColumns?: any;
  PickerItemComponent?: any;
  placeholder: string;
  width: any;
}) {
  const {
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormikContext<FormikValues>();
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item: dItems) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
