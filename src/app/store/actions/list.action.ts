import {Action, createAction, props} from '@ngrx/store';
import {Movie} from "../../models";


export const ADD_MOVIE       = 'Add'
export const REMOVE_MOVIE    = 'Remove'


const deleteMovie = createAction("[LIST] DELETE_MOVIE", props<Movie>())
const addMovie = createAction("[LIST] ADD_MOVIE", props<Movie>())

// Section 3
export class AddMovie implements Action {
  readonly type = ADD_MOVIE
  constructor(public payload: any) {}
}

export class RemoveMovie implements Action {
  readonly type = REMOVE_MOVIE

  constructor(public payload: any) {}
}

// Section 4
export type Actions = AddMovie | RemoveMovie

export const actions = {addMovie,deleteMovie};
