// export class Yard{
//     private animals:any[] = []
//     private feed: any[] = []
//     private maxCount: number = 1
//     private health: number = 100

//     constructor(){}

//     private init(){}
//     addAnimal(animal:Animal){}
//     addFeed(feed:any){}
//     dilapidation(){}//обветшание
//     feeding(){}
//     growingUp(){}
//     killAnimal(idAnimal:number){}
// }

import { Food, TypeFood } from "./Yard"

export default class Animal {
    protected health: number = 0
    readonly type: Animals = Animals.ANIMAL
    protected readonly satietyLevel: number = 0
    protected _prey:Prey[] = []
    protected age: number = 0
    protected readonly maxAge: number = 0
    readonly eatType:TypeFood[]=[]

    get prey(){
        return this._prey
    }

    getHungry(){
        if(this.health > 0){
            this.health -= 10
            // console.log( this.type, this.health)

        }
    }
    growingUp(){
        if(this.age < this.maxAge){
            this.age++
            // console.log(this.type, this.age)
        }
    }
    isDead(){
        return this.health <= 0 || this.age >= this.maxAge
    }
    feed(food: Food):boolean{
        const typeFood = this.eatType.findIndex((v) => v === food.type)

        if(typeFood !== -1){
            if(this.health <= this.satietyLevel){
                this.health += food.saturation
                return true
                // console.log( this.type, this.health)
            }
        }
        return false
        
    }
}

export enum Animals {
    ANIMAL,
    PORK,
    COW
}



export class Pork extends Animal{
    readonly type: Animals = Animals.PORK
    protected health: number = 100
    protected readonly satietyLevel: number = 60
    protected readonly maxAge: number = 5
    readonly eatType = [TypeFood.APPLES, TypeFood.GRASS, TypeFood.CARROT]

}
export class Cow extends Animal{
    readonly type: Animals = Animals.COW
    protected health: number = 100
    protected readonly satietyLevel: number = 50
    protected readonly maxAge: number = 10
    readonly eatType = [TypeFood.HAY, TypeFood.GRASS]
}

export class Prey{

}

export class Milk extends Prey{}
export class Meat extends Prey{}
export class Poop extends Prey{}
export class Leather extends Prey{}
export class Blood extends Prey{}