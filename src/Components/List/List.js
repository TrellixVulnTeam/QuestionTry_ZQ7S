import React, { useState, useEffect } from "react";

import { QuestionUpdate } from "./UpdatePost";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Paper, TextField } from "@material-ui/core";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import { fetchPosts } from "../../store/post/actions";
import { AddReply } from "./AddReply";
import { QuestionAdd } from "./AddQuestion";
import List20Questions from "./Last20Questions";
import { DeletePost } from "./DeleteButton";


const Lista = () => {
  const { posts, loading, isLoggedIn } = useSelector((store) => {
    return {
      posts: store.post.posts,

      loading: store.post.loading,
      isLoggedIn: store.user.isLoggedIn,
    };
  });

  const [visible, setVisible] = useState(false);

  const handleButtonClick = () => {
    setVisible(visible);
  };

  const handleRegister = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("DISPATCH");
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <div>
        {visible ? (
          <List20Questions onList={handleRegister} />
        ) : (
          <Button
            className="VisibleButton"
            variant="contained"
            onClick={handleButtonClick}
          >
            {visible ? "ListComments" : "List20Questions"}
          </Button>
        )}
        <Grid container justifyContent="center"></Grid>
      </div>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Paper style={{ padding: "40px 20px" }}>
          {isLoggedIn && <QuestionAdd />}
        </Paper>

        <ListItem alignItems="flex-start">
          <ListItemText
            primary="List All Questions and comments , ASK IF YOU ARE LOGGED"
            secondary={
              <React.Fragment>
          
                {posts.map((post) => (
                  <div>
                    <Paper style={{ padding: "40px 20px" }}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <h4 style={{ margin: 0, textAlign: "left" }}>
                            {post.first_name}
                          </h4>
                          <p style={{ textAlign: "left" }}>{post.comment}</p>
                          <p style={{ textAlign: "left", color: "gray" }}>
                            {post.time}
                          </p>
                        </Grid>

                        <Grid justifyContent="right" item xs zeroMinWidth>
                          <p>{post.body}</p>
                        </Grid >
                      </Grid>
                      <Grid></Grid>

                      {isLoggedIn && (
                        <AddReply
                       
                          postId={post.id}
                          comments={post.comments || []}
                        />
                      )}
                      <DeletePost postId={post.id} body={post.id} />

                      <QuestionUpdate
                        postId={post.id}
                        body={post.id.body || []}
                      />

                      {/* List of comments with likes */}
                      {post.comments &&
                        post.comments.map((comment) => (
                          <div>
                            <Paper
                              style={{ margin: "10px", padding: "10px 20px" }}
                            >
                              <Grid container wrap="nowrap" spacing={2}>
                                <Grid
                                  justifyContent="left"
                                  item
                                  xs
                                  zeroMinWidth
                                >
                                  <p style={{ textAlign: "left" }}>{comment}</p>
                                </Grid>
                              </Grid>
                            </Paper>
                          </div>
                        ))}
                    </Paper>
                  </div>
                ))}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default Lista;
