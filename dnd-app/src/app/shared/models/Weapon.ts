import { ModifierTypeEnum } from './../enums/ModifierTypeEnum';

export class Weapon {
    id: number;
    name: string;
    dice: number;
    amount: number;
    modifier: ModifierTypeEnum;
    modifyValue: number;
}