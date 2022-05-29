import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import {Movie} from "../../models/movie.model";
import {MoviesState} from "../../store/reducers/movies.reducer";
import {ElementsState} from "../../store/reducers";
import { getMoviesState} from "../../store/selectors/movie.selector";
import {action} from "../../store/actions";
import {watchListSelector} from "../../store/selectors/watchListe.selector";



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',

})
export class MoviesComponent implements OnInit{
  selectedMoviesState$: Movie[];


  constructor(
    private store: Store<ElementsState>,
  ) { }

  ngOnInit(): void {
    this.store.select(getMoviesState).subscribe((state)=>this.selectedMoviesState$=state);
   // this.store.dispatch(action.searchMovies({query : 's=inception'}));






  }
}
