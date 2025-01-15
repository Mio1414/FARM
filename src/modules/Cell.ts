export enum TypeVegetables{ //Перечисление, при компиляции подставит нужные значения самостоятельно, это объект
    EMPTY,
    TOMATO, 
    POTATO, 
    CUCUMBER, 
    CARROT,
    EGGPLANT,
    ZUCCHINI,
    PUMPKIN,
    BLOCK
}
export default class CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.EMPTY
    readonly expired:number = 0
}
export class Block extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.BLOCK
    // readonly expired:number = 3
}
export class Tomato extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.TOMATO
    readonly expired:number = 3
}

export class Potato extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.POTATO
    readonly expired:number = 5
    
}
export class Cucumber extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.CUCUMBER
    readonly expired:number = 7
}
export class Carrot extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.CARROT
    readonly expired:number = 2
}
export class Eggplant extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.EGGPLANT
    readonly expired:number = 4
}
export class Zucchini extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.ZUCCHINI
    readonly expired:number = 3
}
export class Pumpkin extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.PUMPKIN
    readonly expired:number = 6
}