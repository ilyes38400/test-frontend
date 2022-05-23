import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {OmdbResponse} from "../models/OmdbResponse";
import {Movie} from "../models";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // private _url: string = environment.apiUrl
  //configure heroku deployment ( to be change)
   private _url: string = 'http://www.omdbapi.com/?apikey=4197ada1&'

  constructor(private http:HttpClient) { }

  getMovies(params: string): Observable<Movie[]>{
    return this.http.get<OmdbResponse>(`${this._url}${params}`).pipe(map((response :OmdbResponse) => {
      return response.Search}));
  }

}
