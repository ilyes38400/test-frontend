import { Action } from '@ngrx/store';
import {Movie} from "../../models";


export const ADD_MOVIE       = 'Add'
export const REMOVE_MOVIE    = 'Remove'



// Section 3
export class AddMovie implements Action {
  readonly type = ADD_MOVIE
  constructor(public payload: any) {}
}

export class RemoveMovie implements Action {
  readonly type = REMOVE_MOVIE

  constructor(public payload: number) {}
}

// Section 4
export type Actions = AddMovie | RemoveMovie
