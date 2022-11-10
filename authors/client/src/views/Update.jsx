import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'
import Button from '@mui/material/Button'
const Update = () => {
  const [errors, setErrors] = useState([]);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate()
  const {id} = useParams(); 
  useEffect(() => {
    console.log({id});
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res);
        setAuthor(res.data.Author.name)})
      .catch(err=>{
        console.log(err);
      })
  }, [id])

  const updateAuthor = author => {
    axios.put(`http://localhost:8000/api/authors/update/${id}`, {name:author})
        .then(() => {
          navigate("/")})
        .catch(err=>{
        console.log("FAILURE")
        const errorResponse = err.response.data.errors;
        const errorArr = [];
  
        for (const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message)
        }
        console.log(errorArr);
        setErrors(errorArr)});
  }
  return author ? (
    <div>
      {errors.map((err,index) => <p className="text-danger"key={index}>{err}</p>)}
      <h1>Favorite authors</h1>
      <Link to={`/`}>Home</Link>
      <h4>Edit this author</h4>
      <AuthorForm initialName={author} onSubmitProp={updateAuthor}/>
    </div>
  ) : (
    <div>
      <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
      <Button variant="outlined"><Link to={`/authors/add`}>ADD</Link></Button>
    </div>)
  
}

export default Update