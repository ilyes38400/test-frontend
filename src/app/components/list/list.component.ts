import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../models/movie.model';
import {Store} from "@ngrx/store";
import {actions} from "../../store/actions";
import {watchListSelector} from "../../store/selectors/watchListe.selector";
const CACHE_KEY = 'httpRepoCache';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'list.component.html',
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: Movie[]=[];

  watchList: Movie[];


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.watchList = JSON.parse(localStorage[CACHE_KEY] || '[]');
    this.initWatchList();
    this.store.select(watchListSelector).subscribe((state)=>{
      this.watchList =state;
      localStorage[CACHE_KEY]= JSON.stringify(state);
    });
  }

  addMovie(movie: Movie) {

    if(!this.watchList.some(data=>data.imdbID == movie.imdbID))
      this.store.dispatch(actions.addMovie(movie) )
        }



  isInWatchlist(movie : Movie): boolean{
    let bool = false;
      if(this.watchList.some(data=>data.imdbID == movie.imdbID))
       bool =true;
      else
      bool = false

    return bool
  }

  initWatchList(){
    //to do : change this fonction to store all tab direclty
    this.watchList.forEach(movie =>this.store.dispatch(actions.addMovie(movie) ) );
  }


}
