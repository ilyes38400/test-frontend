import { Injectable } from '@angular/core';
import * as movieAction from '../actions/index';
import {map, switchMap} from 'rxjs/operators';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
//import {MyService} from "../../services/my.services";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models";
import {actions,action} from "../actions/index";

@Injectable()
export class MovieEffect {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.searchMovies),
      switchMap(({ query }) => {
        /*this.moviesServices.getMovies(query).pipe(
          map((movies: Movie[]) => console.log('ici')));*/
        return this.moviesServices.getMovies(query).pipe(
          map((movies: Movie[]) => action.searchSuccess({ movies })),
          catchError((err) =>
            of(action.searchFailure({ errorMsg: err.message }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private moviesServices: MovieService
  ) {}
}
