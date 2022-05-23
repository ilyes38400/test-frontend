import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies-list',
  template: `
		<div *ngFor="let movie of movies" >
				<p>{{movie.Title}}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {

  @Input()
  movies: Movie[];

  constructor() {
  }

  ngOnInit(): void {
    console.log('ici');
  }


}
