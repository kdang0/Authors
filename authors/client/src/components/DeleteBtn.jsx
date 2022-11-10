import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
const DeleteBtn = (props) => {
    const { authorId , successCallback } = props;
    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
            .then(response => {
                console.log(response)
                successCallback()})
            .catch(err=> console.error(err));
    }
  return (
    <Button variant="outlined" onClick={deleteAuthor}>
        Delete
    </Button>
  )
}

export default DeleteBtn