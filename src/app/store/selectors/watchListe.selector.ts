import {  createFeatureSelector, createSelector } from '@ngrx/store';
import {getElementsState} from "./index";
import {ElementsState} from "../reducers";
import {Movie} from "../../models";

// globalState

//export const getWatchListState = createSelector(getElementsState, (state: ElementsState) => state.listMovies);


export const watchListSelector = createSelector(createFeatureSelector("movie"), (state: Movie[]) => state);


