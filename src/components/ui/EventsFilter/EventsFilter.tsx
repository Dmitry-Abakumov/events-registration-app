import { Formik, Form, Field } from "formik";

export const EventsFilter = () => {
  return (
    <Formik
      initialValues={{ filter: "" }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
      }}
    >
      <Form>
        <Field />
      </Form>
    </Formik>
  );
};
