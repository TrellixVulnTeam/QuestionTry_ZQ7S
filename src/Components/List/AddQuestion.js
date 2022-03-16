import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addQuestion } from "../../store/AskQuestion/actions";

export const QuestionAdd = ({ postId, body }) => {
  const [post, setPost] = useState([]);

  const dispatch = useDispatch();

  const onAddQUestion = () => {
    console.log(onAddQUestion);
    dispatch(addQuestion({ body: [body, post], postId }));
  };

  return (
    <Form addQuestion>
      <Form.TextArea value={post} onChange={(e) => setPost(e.target.value)} />
      <Button
        type="submit"
        content="Add Question"
        labelPosition="left"
        icon="edit"
        primary
        onClick={onAddQUestion}
      />
    </Form>
  );
};
