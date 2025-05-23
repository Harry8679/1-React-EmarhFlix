import React, { useState } from 'react';
// Custom Hook
import { useHomeFecth } from "./hooks/useHomeFetch";
import NoImage from './images/no_image.jpg';
import Spinner from '../components/elements/Spinner';
import HeroImage from '../components/elements/HeroImage';
import SearchBar from '../components/elements/SearchBar';
import Grid from '../components/elements/Grid';
import MovieThumb from '../components/elements/MovieThumb';
import LoadMoreBtn from '../components/elements/LoadMoreBtn';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POPULAR_BASE_URL, POSTER_SIZE, SEARCH_BASE_URL } from '../config';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [{
            state: { movies, currentPage, totalPages, heroImage },
            loading,
            error
            }, fetchMovies] = useHomeFecth(searchTerm);

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endpoint);
    }

    const loadMoreMovies = () => {
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndPoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

        fetchMovies(endpoint);
    }

    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <Spinner />;

    return (
        <>
            {!searchTerm && (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}
            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />}
            {currentPage < totalPages && !loading &&(
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
        </>
    );
};

export default Home;