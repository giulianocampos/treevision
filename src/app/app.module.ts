import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/home/home.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FavoritesModule } from './components/favorites/favorites.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    FavoritesModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
