import { ActionReducerMap } from '@ngrx/store';
import * as moviesReducer from "./movies.reducer";
import * as listMoviesReducer from "./list.reducer"
import {MoviesState} from "./movies.reducer";
import {Movie} from "../../models";

// State
export interface ElementsState {
  movies: MoviesState;
  listMovies: Movie[];
}


// Reducers
export const reducers: ActionReducerMap<any,any> = {
  movies : moviesReducer.reducer ,
  listMovies : listMoviesReducer.reducer
};
