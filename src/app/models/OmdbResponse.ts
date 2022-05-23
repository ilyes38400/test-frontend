import {Movie} from "./movie.model";

export interface OmdbResponse{
  Search: Movie[];
  totalResults: string;
  Response: string;
}
