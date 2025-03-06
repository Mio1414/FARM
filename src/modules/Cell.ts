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
    protected stage: number = 0
    protected readonly stages: number[] = []
    protected readonly _color:number[] = []

    get color(){
        let alpha = 1
        if(this.stages.length === 0){}
        else{
            const step = alpha/this.stages.length
            alpha = 0
            for(const stage of this.stages){
                if(this.stage >= stage){
                    alpha += step

                }
            }
        }
        return `rgb(${this._color.join(',')}, ${alpha})`
    }

    get currentStage(){
        let currentStage = this.stage
        for(const stage of this.stages){
            if(this.stage > stage ){
                currentStage = stage
            } 
            if(stage === this.stage){
                return stage
            } 
        }
          return  currentStage
    }

    incStage(){
        if(this.stages.length > 0 && 
            this.stages[this.stages.length - 1] > this.stage){
            this.stage += 100
            // console.log(this.stage)
        }

    }
}
    
    

export class Block extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.BLOCK
    protected readonly _color:number[] = [0, 0, 0]
    // readonly expired:number = 3
    

}
export class Tomato extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.TOMATO
    readonly expired:number = 3
    protected readonly stages: number[] = [100, 300, 600]
    protected readonly _color:number[] = [255, 0, 0]

    // readonly aging:{} = [0, 6000, 12000]
    // readonly averageHeight: number = 6000
    // readonly finalHeight: number = 12000
}

export class Potato extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.POTATO
    readonly expired:number = 5
    protected readonly stages: number[] = [100, 200, 400, 600]
    protected readonly _color:number[] = [246, 255, 127]
    // readonly startHeight: number = 0
    // readonly aging:{} = [0, 6000, 12000, 1500]
    
}
export class Cucumber extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.CUCUMBER
    readonly expired:number = 7
    protected readonly stages: number[] = [100, 400]
    protected readonly _color:number[] = [0, 128, 0]
    // readonly aging:{} = [0, 5000, 10000]
}
export class Carrot extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.CARROT
    readonly expired:number = 4
    protected readonly stages: number[] = [100, 300, 600]
    protected readonly _color:number[] = [255, 165, 0]
    // readonly aging:{} = [0, 3000, 6000]
}
export class Eggplant extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.EGGPLANT
    readonly expired:number = 4
    protected readonly stages: number[] = [100, 500, 1000]
    protected readonly _color:number[] = [123, 0, 255]
    // readonly aging:{} = [0, 3000, 6000]
}
export class Zucchini extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.ZUCCHINI
    readonly expired:number = 3
    protected readonly stages: number[] = [100, 400]
    protected readonly _color:number[] = [75, 156, 0]
    // readonly aging:{} = [0, 3000, 6000]
}
export class Pumpkin extends CellVegetable{
    readonly type:TypeVegetables = TypeVegetables.PUMPKIN
    readonly expired:number = 6
    protected readonly stages: number[] = [100, 300, 600, 1200]
    protected readonly _color:number[] = [179, 118, 7]
    // readonly aging:{} = [0, 3000, 6000]
}