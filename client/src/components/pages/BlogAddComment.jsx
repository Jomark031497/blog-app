import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux";

const BlogAddComment = ({ blogId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const loggedUser = useSelector((state) => state.userLogin.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addComment(blogId, { username: loggedUser.username, commentBody: comment })
    );
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          multiline
          label="Comment"
          variant="outlined"
          rows={4}
          required
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem auto",
  },
}));
export default BlogAddComment;
