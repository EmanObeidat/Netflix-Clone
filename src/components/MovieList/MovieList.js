import Movie from '../Movie/Movie';
export default function MovieList(props) {
    return (
        <>
            <h2>Trending Movies</h2>
            {props.data.map((movie) => {
                return (<div id="card"> <Movie data={movie} /> 
                 </div>);
            })}
        </>
    )
}