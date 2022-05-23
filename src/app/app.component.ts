import { Component, OnInit } from '@angular/core';
import { ElementsState  } from './store/reducers/index';
import { Store } from '@ngrx/store';
import { getMovies, MoviesState } from './store/reducers/movies.reducer';
import { Observable } from 'rxjs/';
import { Movie } from './models/movie.model';
import {GetMovieAction} from "./store/actions/movies.action";
import {getMoviesState} from "./store/selectors/movie.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies$: Observable<MoviesState>;

  constructor(private store: Store<ElementsState>,) {
  }

  ngOnInit() {
    this.movies$ = this.store.select<MoviesState>(getMoviesState);
    this.store.dispatch(new GetMovieAction());
  }
}
