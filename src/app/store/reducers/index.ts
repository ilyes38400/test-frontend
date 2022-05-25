import { ActionReducerMap } from '@ngrx/store';
import * as moviesReducer from "./movies.reducer";
import * as listMoviesReducer from "./list.reducer"
import {MoviesState} from "./movies.reducer";
import {Movie} from "../../models";
//import {ListState} from "./list.reducer";

// State
export interface ElementsState {
  movies: MoviesState;
  //listMovies:ListState ;
}


// Reducers

export const reducers: ActionReducerMap<any,any> = {
  movies : moviesReducer.reducer ,
  //listMovies : listMoviesReducer.reducer
};

