import {  createFeatureSelector, createSelector } from '@ngrx/store';
import {getMovies, MoviesState} from "../reducers/movies.reducer";
import {getElementsState} from "./index";
import {ElementsState} from "../reducers";

// globalState

export const getWatchListState = createSelector(getElementsState, (state: ElementsState) => state.listMovies);





