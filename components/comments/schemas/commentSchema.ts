import * as yup from "yup";

const editCommentSchema = yup.object({
  name: yup.string().required("Required"),
  body: yup.string().required("Required"),
  email: yup.string().email().required("required"),
});

export default editCommentSchema;
