import { Formik } from "formik";
import React from "react";

function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: any;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
