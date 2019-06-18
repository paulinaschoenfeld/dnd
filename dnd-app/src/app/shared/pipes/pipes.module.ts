import { WeaponPipe } from './weapon.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoDataPipe } from './no-data.pipe';

@NgModule({
  declarations: [
    NoDataPipe,
    WeaponPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoDataPipe,
    WeaponPipe
  ]
})
export class PipesModule { }
