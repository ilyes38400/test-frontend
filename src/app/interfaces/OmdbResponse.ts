import {IMovie} from "./IMovie";

export interface OmdbResponse{
  Search: IMovie[];
  totalResults: string;
  Response: string;
}
