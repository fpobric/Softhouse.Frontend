import { FieldValues, SubmitHandler } from "react-hook-form";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export default Comment;
