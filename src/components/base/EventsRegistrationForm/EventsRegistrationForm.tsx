"use client";

import { useParams } from "next/navigation";
import { Formik, Form, Field } from "formik";

import { TextField } from "@/components/ui/TextField/TextField";

import { onSubmit } from "./onSubmit";

import { initialValues } from "./initialValues";
import { fields } from "./fields";

export const EventRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();

  console.log(id);

  const { fullName, email, dateOfBirth, referralSource } = fields;
  const {
    value: { socialMedia, friends, foundMyself },
  } = referralSource;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values, id);

        resetForm();
      }}
    >
      {({ errors }) => (
        <Form className="flex flex-col gap-2">
          <TextField {...fullName} />
          <TextField {...email} />
          <TextField {...dateOfBirth} />

          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-1">
              {socialMedia}
              <Field
                {...referralSource}
                value={socialMedia}
                label={socialMedia}
              />
            </label>

            <label className="flex items-center gap-1">
              {friends}
              <Field {...referralSource} value={friends} label={friends} />
            </label>

            <label className="flex items-center gap-1">
              {foundMyself}
              <Field
                {...referralSource}
                value={foundMyself}
                label={foundMyself}
              />
            </label>
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};
