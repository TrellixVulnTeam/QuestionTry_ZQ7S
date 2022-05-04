import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { updatePost } from "../../store/post/actions";

export const QuestionUpdate = ({ postId, body }) => {
  const [state, setState] = useState([]);

  const dispatch = useDispatch();

  const onUpdatePost = () => {
    console.log(onUpdatePost);
    dispatch(updatePost({ body: [body, state], postId }));
  };

  return (
    <Form updatePost>
      <Form.TextArea value={state} onChange={(e) => setState(e.target.value)} />
      <Button
        content="Update Question"
        labelPosition="left"
        icon="edit"
        primary
        onClick={onUpdatePost}
      />
    </Form>
  );
};
