import React from 'react';
import { Router } from "@reach/router";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from './components/elements/Header';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () =>
    <>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>;

export default App;