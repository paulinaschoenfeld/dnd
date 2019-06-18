import { Weapon } from './../shared/models/Weapon';
import { Character } from './../shared/models/Character';
import { ModifierTypeEnum } from '../shared/enums/ModifierTypeEnum';

export const weapons: Weapon[] = [
    {
        id: 1,
        name: "Long sword",
        dice: 8,
        amount: 1,
        modifier: null,
        modifyValue: null
    },{
        id: 2,
        name: "Great Axe",
        dice: 6,
        amount: 2,
        modifier: ModifierTypeEnum.ADD,
        modifyValue: 2
    }, {
        id: 3,
        name: "Damaged Sword",
        dice: 8,
        amount: 1,
        modifier: ModifierTypeEnum.SUB,
        modifyValue: 3
    }, {
        id: 4,
        name: "Magical bow",
        dice: 10,
        amount: 1,
        modifier: ModifierTypeEnum.MULTIPLY,
        modifyValue: 2
    }
]

export const characters: Character[] = [
    {
        name: "Rivas",
        class: "Warrior",
        race: "Human",
        weapon: [weapons[0], weapons[2]]
    }, {
        name: "Allison",
        class: "Ranger",
        race: "Elf",
        weapon: [weapons[3]]
    }, {
        name: "Gimli",
        class: null,
        race: "Dwarf",
        weapon: [weapons[1]]
    }
]