import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import {Movie} from "../models/movie.model";
import {MoviesState} from "../store/reducers/movies.reducer";
import {ElementsState} from "../store/reducers";
import {getAllMovies, getMoviesState} from "../store/selectors/movie.selector";
import {GetMovieAction} from "../store/actions";



@Component({
  selector: 'app-movies',
  template: `
    <ng-container>
      {{(selectedMoviesState$|async)!.error}}
    </ng-container>
    <ng-container *ngIf="!(selectedMoviesState$ | async)!.loading; else loader">
      <app-movies-list [movies]="(selectedMoviesState$ | async)!.data"></app-movies-list>
    </ng-container>
    <ng-template #loader>
      <div class="loader"></div>
    </ng-template>
  `,

})
export class MoviesComponent implements OnInit{
  selectedMoviesState$: Observable<MoviesState>;
  listMovies: Movie[];


  constructor(
    private store: Store<ElementsState>,
    ) { }

  ngOnInit(): void {
    this.selectedMoviesState$ = this.store.select<any>(getMoviesState);
    this.store.dispatch(new GetMovieAction());
    console.log(this.selectedMoviesState$.subscribe(elem=>console.log(elem.data)));



  }
}
