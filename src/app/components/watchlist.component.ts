import {Store} from "@ngrx/store";
import {Observable} from "rxjs/";
import {Component, OnInit} from "@angular/core";
import { Movie } from '../models/movie.model';
import {ElementsState} from "../store/reducers";
import {getWatchListState} from "../store/selectors/watchListe.selector";

@Component({
  selector: 'app-watchList',
  template: `
    <ng-container *ngIf="(watchList | async)">
    <li *ngFor="let movie of watchList | async">
     {{ movie.Title }}
    </li>
    </ng-container>
  `,

})


export class WatchlistComponent implements OnInit {

  // Section 1
  watchList: Observable<Movie[]>;

  // Section 2
  constructor(private store: Store<ElementsState>) {

  }

  ngOnInit() {
    this.watchList = this.store.select<any>(getWatchListState);
   //console.log(this.store.select<any>(getWatchListState).subscribe(data=>console.log(data)));
  }

}
