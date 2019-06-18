import { WeaponPipe } from './../shared/pipes/weapon.pipe';
import { CharactersComponent } from './characters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { NoDataPipe } from '../shared/pipes/no-data.pipe';

@NgModule({
  declarations: [
    CharactersComponent,
    NoDataPipe,
    WeaponPipe
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
