import {createReducer, on} from '@ngrx/store'
import * as listActions from '../actions/list.action'
import {Movie} from "../../models";
import {actions} from "../actions/list.action";

let movies:Movie[]=[];


export const listReducer = createReducer(
  movies,
  on(actions.addMovie,(state,movie)=> {
    return [...state, movie]
  }),
  on(actions.deleteMovie,(state,movie)=>{
    let movies = state.filter((m)=>m.imdbID != movie.imdbID);
    return [...movies] ;
  })
)
