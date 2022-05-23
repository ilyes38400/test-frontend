import { ActionReducerMap } from '@ngrx/store';
import * as moviesReducer from "./movies.reducer";
import {MoviesState} from "./movies.reducer";

// State de notre feature
export interface ElementsState {
  movies: MoviesState;
}

// Reducers pour notre state
export const reducers: ActionReducerMap<ElementsState,any> = {
  movies : moviesReducer.reducer ,
};
