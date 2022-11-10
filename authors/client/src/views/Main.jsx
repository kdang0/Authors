import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import AuthorList from '../components/AuthorList'
const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch(err => console.error(err))
    }, []);

  return (
    <div>
        <h1>Favorite authors</h1>
        <Link to={`/authors/add`}>Add an author</Link>
        <AuthorList authors={authors} />
    </div>
  )
}

export default Main