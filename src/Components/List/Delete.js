import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form } from "semantic-ui-react";

export const Delete = ({ postId, body }) => {
  const [deletei, setDelete] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setErrorMessage] = useState("");

  useEffect(() => {
    if (deletei) {
      fetch(`http://localhost:5000/posts/${postId}`, { method: "DELETE" })
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }

          setStatus("Delete successful");
        })
        .catch((error) => {
          setErrorMessage(error);
          console.error("There was an error!", error);
        });
      setDelete(false);
    }
  }, [deletei]);

  const onDelete = () => {
    setDelete(true);
  };

  return (
    <Form deleteon>
      <Button
        content="Delete"
        labelPosition="left"
        icon="edit"
        primary
        onClick={onDelete}
      />
    </Form>
  );
};
