import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule,
    HttpClientModule
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
