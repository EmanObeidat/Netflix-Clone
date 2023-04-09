import Movie from '../Movie/Movie';
export default function MovieList(props){
    return(
        <>
        <h2>Trending Movies</h2>
        <div>
            {props.data.map(movie => {
                return <Movie data = {movie}/>
            })}
        </div>
        </>
    )
}