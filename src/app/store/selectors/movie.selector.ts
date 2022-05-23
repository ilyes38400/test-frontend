import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import {ElementsState} from "../reducers";
import {getMovies, MoviesState} from "../reducers/movies.reducer";
import {Movie} from "../../models/movie.model";

// globalState
export const getElementsState = createFeatureSelector<ElementsState>('elements');

// moviesState
export const getMoviesState = createSelector(getElementsState, (state: ElementsState) => state.movies);

// pure datas
export const getAllMovies = createSelector(getMoviesState, getMovies);

///data selectors
/*export const getSelectedMovies = createSelector(getMoviesState, (state: MoviesState) => {
  const entities = DictionaryUtils.toArray<Movie>(state.data);
  return { ...state, data: entities };
});*/
