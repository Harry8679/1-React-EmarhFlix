import React from 'react';
import { Router } from "@reach/router";
import Header from './components/elements/Header';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import GlobalStyle from '../node_modules/styled-components/dist/models/GlobalStyle.d';

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