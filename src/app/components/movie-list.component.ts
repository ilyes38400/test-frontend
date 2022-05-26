import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../models/movie.model';
import {Store} from "@ngrx/store";
import {ElementsState} from "../store/reducers";
import {WatchlistComponent} from "./watchlist.component";
import {actions, AddMovie} from "../store/actions";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {watchListSelector} from "../store/selectors/watchListe.selector";


@Component({
  selector: 'app-movies-list',
  template: `
		<div *ngFor="let movie of movies" >
				<p>{{movie.Title}}</p>
        <p *ngIf="isInWatchlist(movie);else notInWatchList" >
          Listed
        </p>
      <ng-template #notInWatchList> not listed</ng-template>

      <button (click)="addMovie(movie)">Add a Tutorial</button>
    </div>
  `,
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: Movie[];

  watchList: Movie[];


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(watchListSelector).subscribe((state)=>this.watchList =state);
  }

  addMovie(movie: Movie) {
    //movie.isSelected = true;
  //  var newMovie = JSON.parse(JSON.stringify(movie));
    //newMovie.isSelected = true;
    if(!this.watchList.some(data=>data.imdbID == movie.imdbID))
      this.store.dispatch(actions.addMovie(movie) )
    /*    watchList = this.store.select<any>(getWatchListState);
        watchList.subscribe(x => {
          if(!x.some(data=>data.imdbID == movie.imdbID))
            this.store.dispatch(actions.addMovie(movie) )
        });*/
        //console.log(watchList.subscribe(data=>console.log(data)));
        }



  isInWatchlist(movie : Movie): boolean{
    let bool = false;
      if(this.watchList.some(data=>data.imdbID == movie.imdbID))
       bool =true;
      else
      bool = false

    return bool
  }




}
