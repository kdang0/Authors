import React, { useState } from 'react'

const AuthorForm = (props) => {
    const  { initialName, onSubmitProp } = props;
    const [author, setAuthor] = useState(initialName);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp(author);
    }
  return (
    <form onSubmit = { handleSubmit }>
        <label>Name:</label>
        <input type="text" value={author} onChange = {e => setAuthor(e.target.value)}/>
        <button>Cancel</button>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AuthorForm