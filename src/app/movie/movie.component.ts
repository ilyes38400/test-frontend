import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie} from "../interfaces/IMovie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies:IMovie[]=[] ;
  public params: string= "s=inception";

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this._movieService.getMovies(this.params)
      .subscribe(data => {
        this.movies=data;
        console.log(this.movies)
      }  );

  }

}
