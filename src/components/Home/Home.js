/* eslint-disable react/jsx-no-undef */
import{ useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import Navbar from '../Navbar/Navbar';



  export default function Home(){
    const url =process.env.URL;
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
          <MovieList  data={movies}/>
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                 <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favRecipes">fav-Recipes</Nav.Link>

            </Nav>
        </Container>
    </Navbar>
    </>

    )
}