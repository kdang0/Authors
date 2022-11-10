import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import DeleteBtn from './DeleteBtn';
import Button from '@mui/material/Button'

const AuthorList = (props) => {
    const [authors, setAuthors] = useState(props.authors);

    const removeFromDom = authorId => {
        console.log(authorId);
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
    }, [])

    const authorElements = authors?.map((author, i) => {
        return(
        <tr key={i}>
            <th>{author.name}</th>
            <th><DeleteBtn authorId={author._id} 
            successCallback={()=> removeFromDom(author._id)}/>
            <Button className="mx-3" variant="outlined"><Link to={`/authors/update/${author._id}`}>Edit</Link></Button>
            </th>
        </tr>)
    })
  return (
    <table className="bg-dark text-white table table-bordered">
        <tbody>
            <tr>
                <th>Author</th>
                <th>Actions available</th>
            </tr>
            {authorElements}
        </tbody>
    </table>
  )
}

export default AuthorList