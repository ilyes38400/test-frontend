import {Store} from "@ngrx/store";
import {Observable} from "rxjs/";
import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import { Movie } from '../../models/movie.model';
import {ElementsState} from "../../store/reducers";
import { watchListSelector} from "../../store/selectors/watchListe.selector";
import {actions, REMOVE_MOVIE, RemoveMovie} from "../../store/actions";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-watchList',
  templateUrl:'./watchlist.component.html',
})


export class WatchlistComponent implements OnInit {

  watchList: Movie[] =[];

  platform : any ;

  constructor(private store: Store,platform: Platform) {
    platform.ready().then(() => {
      this.platform = platform.width();
    });
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
