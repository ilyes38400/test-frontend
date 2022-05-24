import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../models/movie.model';
import {Store} from "@ngrx/store";
import {ElementsState} from "../store/reducers";
import {WatchlistComponent} from "./watchlist.component";
import {AddMovie} from "../store/actions";
import {getWatchListState} from "../store/selectors/watchListe.selector";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-movies-list',
  template: `
		<div *ngFor="let movie of movies" >
				<p>{{movie.Title}}</p>
      <button (click)="addTutorial(movie)">Add a Tutorial</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: Movie[];

  constructor(private store: Store<ElementsState>) {
  }

  ngOnInit(): void {
  }

  addTutorial(movie: Movie) {
    let watchList: Observable<Movie[]>;
    watchList = this.store.select<any>(getWatchListState);
    watchList.subscribe(x => {
      if(!x.some(data=>data.imdbID == movie.imdbID))
        this.store.dispatch(new AddMovie(movie) )
    })
  }



}
