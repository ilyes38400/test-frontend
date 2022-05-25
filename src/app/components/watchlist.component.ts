import {Store} from "@ngrx/store";
import {Observable} from "rxjs/";
import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { Movie } from '../models/movie.model';
import {ElementsState} from "../store/reducers";
import { watchListSelector} from "../store/selectors/watchListe.selector";
import {actions, REMOVE_MOVIE, RemoveMovie} from "../store/actions";
import {getAllMovies} from "../store/selectors/movie.selector";

@Component({
  selector: 'app-watchList',
  template: `
    <ng-container *ngIf="watchList ">
    <li *ngFor="let movie of watchList">
      <button (click)="delMovie(movie)">delete</button>
      {{ movie.Title }}
    </li>
    </ng-container>

  `,
})


export class WatchlistComponent implements OnInit {

  // Section 1
  watchList: Movie[] =[];

  // Section 2
  constructor(private store: Store) {
  }
  ngOnInit() {
    this.loadWatchList();
  }

  loadWatchList(){
  this.store.select(watchListSelector).subscribe((state)=>this.watchList =state);

}

  delMovie(movie:Movie) {
   // console.log(index);
    this.store.dispatch(actions.deleteMovie(movie) )
    //console.log(this.watchList.subscribe(data=>console.log(data)));

  }

}
