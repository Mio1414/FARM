import Animal, { Animals, Cow, Pork, Prey } from "./Animal"
import { TypeVegetables } from "./Cell"
// type Food = {
//     [name: string]: number
// }

export enum TypeFood {
    FOOD,
    APPLES,
    HAY,
    GRASS,
    CARROT

}
export class Food {
    readonly type:TypeFood = TypeFood.FOOD
    readonly expired:number = 10
    readonly saturation:number = 3

}
export class Appels extends Food{
    readonly type:TypeFood = TypeFood.APPLES
    readonly expired:number = 20
    readonly saturation:number = 5

}
export class Hay extends Food{
    readonly type:TypeFood = TypeFood.HAY
    readonly expired:number = 30
    readonly saturation:number = 2
}
export class Grass extends Food{
    readonly type:TypeFood = TypeFood.GRASS
    readonly expired:number = 10
    readonly saturation:number = 2
}
export class Carrot extends Food{
    readonly type:TypeFood = TypeFood.CARROT
    readonly expired:number = 40
    readonly saturation:number = 5
}



export class Yard {
    private animals:Animal[] = []
    private food: Food[] = [new Grass(),new Hay(),new Grass(), new Appels(), new Appels(), new Carrot(), new Carrot()]
    private maxCount: number = 3
    private health: number = 100
    private preyes: Prey[] =[]

    constructor(){
        this.init()
    }
    get newAnimals () {
        return[...this.animals]
    }
    get newFood(){
        return[...this.food]
    }

    private init(){

        // this.animals.push(new Pork())
        // this.animals.push(new Cow())

    }
    addAnimal(animal:Animals){
        console.log(animal)
        if(this.animals.length <= this.maxCount){
            switch (animal) {
                case Animals.COW:
                    this.animals.push(new Cow())
                    break;
                case Animals.PORK:
                    this.animals.push(new Pork())
                    break;
            
                default:
                    break;
            }

            // this.animals.push(animal)
        }

    }
    // addFeed(food:TypeFood){
    //     // if(this.animals.length <= this.maxCount){
    //         switch (food) {
    //             case TypeFood.APPLES:
    //                 this.food.push(new Appels())
    //                 break;
    //             case TypeFood.HAY:
    //                 this.food.push(new Hay())
    //                 break;
    //                 case TypeFood.GRASS:
    //                 this.food.push(new Grass())
    //                 break;
    //                 case TypeFood.CARROT:
    //                 this.food.push(new Carrot())
    //                 break;
            
    //             default:
    //                 break;
    //         }

    //         // this.animals.push(animal)
    //     // }
    // }
    dilapidation(){}//обветшание
    feeding(){
       for(const animal of this.animals){
        let isFeed = false
        for(let i = 0; i < this.food.length && !isFeed; i++){
            isFeed = animal.feed(this.food[i])
            if(isFeed){
                this.food.splice(i, 1)
            }
        }

       }

       
       // получить набор еды, проверить есть ли эта еда и покормить

    }
    growingUp(){
        for(const animal of this.animals){
            animal.growingUp()
            
        }
        this.removeDeadAnimals()
    }
    getHungry(){
        for(const animal of this.animals){
            animal.getHungry()
        }
        this.removeDeadAnimals()
    }
    private removeDeadAnimals(){
        for(let i = 0; i < this.animals.length; i++){
            if(this.animals[i].isDead()){
                this.preyes.push(...this.animals[i].prey)
                this.animals.splice(i, 1)
                i--
            }
        }
    }
    killAnimal(idAnimal:number){}

    // private createYard(){
            
           
              
        
    // }

    // private createAnimals (size: number){
        
    //     // for(let i = 0; i < size; i++){
    //     //     if(i % (size/2) > (size/4 -1)){
    //     //         this._cells.push(new Block)
    //     //     } else {
    //     //         this._cells.push(new CellVegetable)
    //     //     }
            
    //     // }
    // }


}



