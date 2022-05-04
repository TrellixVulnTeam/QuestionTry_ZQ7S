import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { deletePost } from "../../store/post/actions";

import { useSelector } from "react-redux";

export const DeletePost = ({ postId }) => {
  const dispatch = useDispatch();

  const onDeletePost = () => {
    console.log(deletePost);
    dispatch(deletePost({ postId: postId }));
  };

  return (
    <Form DeletePost>
      <Button
        content="Delete"
        labelPosition="left"
        icon="edit"
        primary
        onClick={onDeletePost}
      />
    </Form>
  );
};
