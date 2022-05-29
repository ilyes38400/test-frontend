import {Action, createAction, props} from '@ngrx/store';
import {ADD_MOVIE} from "./list.action";
import {Movie} from "../../models";

// Les types des differentes actions
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
const searchMovies = createAction('[MOVIES] Search Movies', props<{ query: string }>());
const searchSuccess = createAction('[MOVIES] Search Success', props<{ movies: Movie[] }>());
const searchFailure = createAction('[Products/API] Search Failure', props<{ errorMsg: string }>());


export const action = {searchMovies,searchSuccess,searchFailure};





