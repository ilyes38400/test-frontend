import { Component, OnInit } from '@angular/core';
import { ElementsState  } from './store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/';
import { Movie } from './models/movie.model';
import {getMoviesState} from "./store/selectors/movie.selector";
import {action} from "./store/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  year : string = "";
  type : string = "";
  title :string = "";
  search : string = this.title+"&y="+this.year;
  constructor(private store: Store<ElementsState>,) {
  }

  ngOnInit() {

  }

  searchMovies(q:any){
    this.title=q;
    if(q != "") {
      let query = "s="+q + "&y=" + this.year + "&type=" + this.type;
      //this.store.select(getMoviesState).subscribe((state)=>console.log(state));
      this.store.dispatch(action.searchMovies({query: query}));
    }
  }

  yearSelect() {
    this.searchMovies(this.title);
  }

  typeSelect() {
    this.searchMovies(this.title);
  }
}
