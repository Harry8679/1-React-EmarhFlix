import React from 'react';
import Navigation from "./Navigation";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Grid from "./elements/Grid";
import Actor from "./Actor";
import Spinner from "./elements/Spinner";
import {useMovieFetch} from "./hooks/useMovieFetch";

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