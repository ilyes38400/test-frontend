// State Type
import {Movie} from "../../models/movie.model";

import * as MovieActions from '../actions/movies.action'
import {createReducer, on} from "@ngrx/store";
import {action} from "../actions/movies.action";


export interface MoviesState {
  searchValue: string;
  movies: Movie[];
}

// Initial state
const initialState: MoviesState = {
  searchValue: '',
  movies: []
};

// REDUCER
export const reducer = createReducer(
  initialState,
  on(action.searchMovies, (state,{ query }) => ({
    ...state,
    searchValue: query,
  })),
  on(action.searchSuccess, (state, { movies }) => ({
    ...state,
    movies,
  }))
);

//export const getMovies = (state: MoviesState) => state;

