// "use client";

// import { Formik, Form } from "formik";

// import { TextField } from "../TextField";

// import { fields } from "./fields";

// import { MembersFilterProps } from "./types";

// export const MembersFilter: React.FC<MembersFilterProps> = ({
//   members,
//   setMembers,
// }) => {
//   const onChange = ({ target: { value } }) => {
//     if (value === "") setMembers;
//   };
//   return (
//     <Formik
//       initialValues={{ filter: "" }}
//       onSubmit={(values, { resetForm }) => {
//         resetForm();
//       }}
//     >
//       <Form>
//         <TextField {...fields.filter} onChange={onChange} />
//       </Form>
//     </Formik>
//   );
// };
