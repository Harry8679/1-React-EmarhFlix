import React from 'react';
import Navigation from "../components/Navigation";
import MovieInfo from "../components/MovieInfo";
import MovieInfoBar from "../components/MovieInfoBar";
import Grid from "../components/elements/Grid";
import Actor from "../components/Actor";
import Spinner from "../components/elements/Spinner";
import {useMovieFetch} from "../components/hooks/useMovieFetch";

const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId);
    console.log(movie);

    if (error) return <div>Something went wrong ...</div>;
    if (loading) return <Spinner />
    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                { movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor}/>
                )) }
            </Grid>
        </>
    );
};

export default Movie;