/* eslint-disable react/jsx-no-undef */
import{ useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';




  export default function Home(){
    const url =process.env.REACT_APP_URL;
    const [movies, setmovies] = useState([]);
     async function sendReq(){
        const response = await fetch(`${url}/trending`);
        const data = await response.json();
        console.log(data);
        setmovies(data);
        console.log(movies);
    }

    useEffect(()=>{
        sendReq();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])  





    return(
        <>
          <h2> Welcome to  Home Page</h2>
          <MovieList data={movies}/>
         
    </>

    )
}