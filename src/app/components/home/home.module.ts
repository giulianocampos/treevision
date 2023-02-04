import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})

export class HomeModule { }

