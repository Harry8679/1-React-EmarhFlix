import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from "../helpers";
import { StyledMovieInfoBar } from "./styles/StyledMovieInfoBar";
import PropTypes from 'prop-types';

const MovieInfoBar = ({ time, budget, revenue }) => (
    <StyledMovieInfoBar>
        <div className="movieinfobar-content">
            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-time" name="clock-o" size="2x" />
                <span className="movieinfobar-info">
                    Running time: {calcTime(time)}
                </span>
            </div>

            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-budget" name="money" size="2x" />
                <span className="movieinfobar-info">
                    Budget: {convertMoney(budget)}
                </span>
            </div>

            <div className="movieinfobar-content-col">
                <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                <span className="movieinfobar-info">
                    Revenue : {convertMoney(revenue)}
                </span>
            </div>
        </div>
    </StyledMovieInfoBar>
);

MovieInfoBar.propType = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
};

export default MovieInfoBar;