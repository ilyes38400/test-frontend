import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IMovie} from "../interfaces/IMovie"
import {map, Observable} from "rxjs";
import {OmdbResponse} from "../interfaces/OmdbResponse";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = environment.apiUrl

  constructor(private http:HttpClient) { }

  getMovies(params: string): Observable<IMovie[]>{
    return this.http.get<OmdbResponse>(`${this._url}${params}`).pipe(map((response :OmdbResponse) => {
      return response.Search}));
  }

}
