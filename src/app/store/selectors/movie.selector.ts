import {  createFeatureSelector, createSelector } from '@ngrx/store';
import {ElementsState} from "../reducers";
import {getMovies, MoviesState} from "../reducers/movies.reducer";
import {getElementsState} from "./index";

// globalState

// moviesState
export const getMoviesState = createSelector(getElementsState, (state: ElementsState) => state.movies);

// pure datas
export const getAllMovies = createSelector(getMoviesState, getMovies);

///data selectors
/*export const getSelectedMovies = createSelector(getMoviesState, (state: MoviesState) => {
  const entities = DictionaryUtils.toArray<Movie>(state.data);
  return { ...state, data: entities };
});*/
