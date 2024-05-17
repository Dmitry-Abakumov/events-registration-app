"use client";

import { useParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { TextField } from "@/components/ui/TextField/TextField";

import { onSubmit } from "./onSubmit";

import { initialValues } from "./initialValues";
import { fields } from "./fields";

import { eventRegistrationSchema } from "./validationSchema";

export const EventRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();

  const { fullName, email, dateOfBirth, referralSource } = fields;
  const {
    value: { socialMedia, friends, foundMyself },
  } = referralSource;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={eventRegistrationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values, id);

        resetForm();
      }}
    >
      {({ errors }) => (
        <Form className="flex flex-col gap-2 items-center">
          <TextField {...fullName} />
          <ErrorMessage
            className="text-red-600 text-xs mt-1"
            component="p"
            name={fullName.name}
          />

          <TextField {...email} />
          <ErrorMessage
            className="text-red-600 text-xs mt-1"
            component="p"
            name={email.name}
          />

          <TextField {...dateOfBirth} />
          <ErrorMessage
            className="text-red-600 text-xs mt-1"
            component="p"
            name={dateOfBirth.name}
          />

          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-1">
              {socialMedia}
              <Field
                className="cursor-pointer"
                {...referralSource}
                value={socialMedia}
                label={socialMedia}
              />
            </label>

            <label className="flex items-center gap-1">
              {friends}
              <Field
                className="cursor-pointer"
                {...referralSource}
                value={friends}
                label={friends}
              />
            </label>

            <label className="flex items-center gap-1">
              {foundMyself}
              <Field
                className="cursor-pointer"
                {...referralSource}
                value={foundMyself}
                label={foundMyself}
              />
            </label>
          </div>

          <button
            className="border-solid border-accent border-2 rounded-[5px] py-1 px-2 w-[150px]"
            type="submit"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
