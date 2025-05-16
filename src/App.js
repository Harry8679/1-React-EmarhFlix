import React from 'react';
// import { createGlobalStyle } from "styled-components";
import Home from "./Home";
import { Router } from "@reach/router";


import { GlobalStyle } from "./styles/GlobalStyle";
import Header from './components/elements/Header';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

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