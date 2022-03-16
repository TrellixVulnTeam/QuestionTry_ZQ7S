import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { addComment } from "../../store/post/actions";

export const AddReply = ({ postId, comments }) => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const onAddReply = () => {
    console.log(onAddReply);
    dispatch(addComment({ comments: [...comments, value], postId }));
  };

  return (
    <Form reply>
      <Form.TextArea value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        primary
        onClick={onAddReply}
      />
    </Form>
  );
};
