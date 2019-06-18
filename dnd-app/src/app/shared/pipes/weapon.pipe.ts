import { Weapon } from './../models/Weapon';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weapon'
})
export class WeaponPipe implements PipeTransform {

  transform(weapon: Weapon): any {
    return weapon.name + ' (' + weapon.amount + 'd' + weapon.dice + (weapon.modifier ? weapon.modifier.value : '')
     + (weapon.modifyValue ? weapon.modifyValue : '') + ')';
  }
}