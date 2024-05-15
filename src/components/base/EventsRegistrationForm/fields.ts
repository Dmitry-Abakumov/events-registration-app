export const fields = {
  fullName: {
    name: "fullName",
    type: "text",
    placeholder: "Full name",
    label: "Full name",
  },
  email: {
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
  },
  dateOfBirth: {
    name: "dateOfBirth",
    type: "text",
    placeholder: "Date of birth",
    label: "Date of birth",
  },
  referralSource: {
    name: "referralSource",
    type: "radio",
    value: {
      socialMedia: "Social media",
      friends: "Friends",
      foundMyself: "Found myself",
    },
    // placeholder: "Where did you hear about this event?",
    // label: "Where did you hear about this event?",
  },
};
