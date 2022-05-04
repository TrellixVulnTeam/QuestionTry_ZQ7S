import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { LikePost } from "../../store/post/actions";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const AddLike = ({ postId }) => {
  const [likes, setLikes] = React.useState(0);

  const dispatch = useDispatch();

  const onLike = () => {
    console.log(onLike);
    dispatch(LikePost({ likes: [...likes, setLikes], postId }));
  };

  const handleChangeLike = () => {
    if (onLike) return likes + 1;
  };

  return (
    <Form reply>
      <Form.TextArea
        value={setLikes}
        onChange={(e) => setLikes(e.target.value)}
      />
      <Fab
        aria-label="like"
        content="Add Reply"
        labelPosition="left"
        icon="edit"
        primary
        onChange={handleChangeLike}
        onClick={onLike}
      >
        <FavoriteIcon />
      </Fab>
    </Form>
  );
};
