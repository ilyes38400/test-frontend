import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieService} from "./services/movie.service";
import {ActionReducer, ActionReducerMap, StoreModule} from '@ngrx/store';
import { reducers } from './store/reducers';
import { effects } from './store/effects/effect';

import {MoviesComponent} from "./components/movies.component";
import { EffectsModule } from '@ngrx/effects';
//import {MyService} from "./services/my.services";
import {routerReducers} from "./router-store/router.state";
import {MoviesListComponent} from "./components/movie-list.component";
import {WatchlistComponent} from "./components/watchlist.component";
import {listReducer} from "./store/reducers/list.reducer";
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
/*    StoreModule.forRoot({
      elements: reducer
    } as ActionReducerMap<any,any>)*/
    StoreModule.forRoot({}  ),
    StoreModule.forFeature('elements', reducers),
    StoreModule.forFeature('movie', listReducer),
    StoreModule.forFeature('router', routerReducers),
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    IonicModule.forRoot()
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
