import {  createFeatureSelector, createSelector } from '@ngrx/store';
import {ElementsState} from "../reducers";


export const getMoviesState = createSelector(createFeatureSelector("elements"), (state: ElementsState) => state.movies.movies);


