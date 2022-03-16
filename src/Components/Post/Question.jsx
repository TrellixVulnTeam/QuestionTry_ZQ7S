import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import api from "../../posts";
import { format } from "date-fns";
import { Button, Comment,  Form } from "semantic-ui-react";
import { Divider, Avatar, Grid, Paper, Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addQuestion  } from "../../store/AskQuestion/actions";

const Question = ({ postId, body }) => {
  const [post, setPosts] = useState("");
  const [postBody, setPostBody] = useState("");

  const { posts, loading } = useSelector((store) => store.post);

  const dispatch = useDispatch();



  const onQuestion = () => {
    console.log(onQuestion);
    dispatch(addQuestion({ body: [...body, post], postId }));
  };





  /* const handleSubmit = async (e) => {
     e.preventDefault();
     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
     const datetime = format(new Date(), "MMMM dd, yyyy pp");
     const newPost = { id, datetime, body: postBody, comments: null };
     console.log(id + "  " + datetime + "  " + JSON.stringify(newPost));
     try {
      const response = await api.post("/posts", newPost);
       console.log(response);
       const allPosts = [...posts, response.data];
       console.log(allPosts);
       setPostBody("");
     } catch (err) {
       console.log(`Error: ${err.message}`);
     }
  };

*/

  return (
    <>
    <Box component="span" >
      <Grid className="List-All-Comments-and-questions">
        <Form className="newPostForm" onSubmit={""}>
        <Avatar></Avatar>
        
          <label htmlFor="postBody">Post:</label>
          <TextField
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </Form>
        

       
        {/* { users && users.map((users) => (
            <div> <h2> { users.id && users.question } </h2>

<Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp"  />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{users.id && users.first_name }</h4>
            <p style={{ textAlign: "left" }}>
              {users.comment}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {users.time}
            </p>
          </Grid>
          
        </Grid>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
        <h2> { users.id && users.question } </h2>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
]            </p>
          </Grid>
        </Grid>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </Paper>
</div>
            ))} */}
      </Grid>
      </Box>
    </>
  );
};

export default Question;
