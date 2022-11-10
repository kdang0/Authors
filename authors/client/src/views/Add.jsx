import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
const Add = () => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();
  const createAuthor = author => {
    console.log(author.length)
    axios.post('http://localhost:8000/api/authors/new', {name: author})
        .then(res=> {
            console.log(res);
            navigate("/")
        })
        .catch(err=> {
          console.log("FAILURE")
          const errorResponse = err.response.data.errors;
          const errorArr = [];

          for (const key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message)
          }
          setErrors(errorArr);
          console.error(err)});
}
  return (
    <div>
      {errors.map((err,index) => <p className="text-danger"key={index}>{err}</p>)}
      <h1>Favorite authors</h1>
      <Link to={`/`}>Home</Link>
      <h4>Add a new author:</h4>
      <AuthorForm initialName="" onSubmitProp={createAuthor}/>
    </div>
  )
}

export default Add