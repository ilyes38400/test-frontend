import { Injectable } from '@angular/core';
import * as movieAction from '../actions/index';
import { GetMovieActionSuccess, GetMovieActionError } from '../actions/index';
import {map, switchMap} from 'rxjs/operators';
import { catchError } from 'rxjs';
import { of } from 'rxjs';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
//import {MyService} from "../../services/my.services";
import {MovieService} from "../../services/movie.service";
@Injectable()
export class MovieEffect {
  constructor(
    private actions$: Actions,
    private movieService: MovieService) { }

  @Effect()
  loadMovies$ = this.actions$.pipe(ofType(movieAction.GET_MOVIES))
    .pipe(
      switchMap((action) => {
        return this.movieService.getMovies('s=inception')
          .pipe(
            map(movies => new GetMovieActionSuccess(movies)),
            catchError(err => of(new GetMovieActionError(err)))
          );
      }));
}
