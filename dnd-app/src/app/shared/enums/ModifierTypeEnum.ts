import { BaseEnum } from './BaseEnum';

export class ModifierTypeEnum extends BaseEnum {

    constructor(public name: string, public value: string) {
        super();
    }

    static ADD = new ModifierTypeEnum("ADD", '+');
    static SUB = new ModifierTypeEnum("SUB", '-');
    static MULTIPLY = new ModifierTypeEnum("MULTIPLY", '*');
    static DIVIDE = new ModifierTypeEnum("DIVIDE", '/');
}