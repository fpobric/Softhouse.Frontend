import React, { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import editCommentSchema from "./schemas/commentSchema";
import Comment from "../../interfaces/Comment";
import TextField from "../fields/text";
interface CommentProps {
  comment: Comment;
  save: (data: any) => void;
}
const EditComment: React.FC<CommentProps> = ({ comment, save }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(editCommentSchema) });
  useEffect(() => {
    setValue("postId", comment.postId);
    setValue("id", comment.id);
    setValue("name", comment.name);
    setValue("email", comment.email);
    setValue("body", comment.body);
  }, []);
  return (
    <div className="d-flex w-100">
      <form className="w-100" onSubmit={handleSubmit(save)}>
        <TextField register={register} name="name" errors={errors} />
        <TextField register={register} name="email" errors={errors} />
        <TextField register={register} name="body" errors={errors} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
export default EditComment;
