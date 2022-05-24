import { Action } from '@ngrx/store'
import * as listActions from '../actions/list.action'
import {Movie} from "../../models";


export interface ListState {
  data: Movie;
  isSelected : boolean;
}

export const initialState: Array<ListState> = [];

export function reducer(
  state:Array<ListState>  = initialState,
  action: listActions.Actions)
{
  switch(action.type) {
    case listActions.ADD_MOVIE:
      return [
        ...state,
         action.payload,
      ];
    default:
      return state;
  }
}
