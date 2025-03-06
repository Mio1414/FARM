import React from 'react';
import CellVegetable, { Block, Carrot, Cucumber, Eggplant, Potato, Pumpkin, Tomato, TypeVegetables, Zucchini } from './Cell';
import "./Field.css"


type Seeds = {
    [n: number]: number
}
// type Aging = {

//     name: string
//     [n: number]: number
// }

export default class FieldVegetables{
    private _cells: any[] = []

   

    private _seeds: Seeds = {
            [TypeVegetables.TOMATO]: 5,
            [TypeVegetables.CARROT]: 4,
            [TypeVegetables.CUCUMBER]: 3,
            [TypeVegetables.EGGPLANT]: 2,
            [TypeVegetables.POTATO]: 5,
            [TypeVegetables.PUMPKIN]: 4,
            [TypeVegetables.ZUCCHINI]: 3,

        };
    
        
    get seeds(){
        return this._seeds
    }
    get field(){
        return[...this._cells]
    }
    get cells(){
        return this. _cells
    }

    constructor(size: number){
        this.createField(size)
    }
   
    private createField(size: number){
        
        for(let i = 0; i < size; i++){
            if(i % (size/2) > (size/4 -1)){
                this._cells.push(new Block)
            } else {
                this._cells.push(new CellVegetable)
            }
            
        }
    }

    // seedsNumber(type: TypeVegetables){
    //     if(this.seeds.type === 0 ||){

    //     }
    // }

    seed(type: TypeVegetables, index:number){
        if(this._cells[index] && (
            this._cells[index].type === TypeVegetables.EMPTY || 
            this._cells[index].type === TypeVegetables.BLOCK))
            {
                console.log(this._cells[index], type)
                // if (type && 
                //     type !== TypeVegetables.BLOCK &&
                //     this.cells[index].type !== TypeVegetables.BLOCK ) {
                //     if(this.seeds[type] > 0) {
                //         switch case 
                //     } //Нужно переделать это место
            switch (type) {
                case TypeVegetables.TOMATO:
                    if(this.seeds[TypeVegetables.TOMATO] != 0 ){
                        this._cells[index] =  new Tomato
                        this._seeds[TypeVegetables.TOMATO] -= 1
                    } else{
                        alert("Семя закончилось")
                    }                    
                    break;

                case TypeVegetables.POTATO:
                    if(this.seeds[TypeVegetables.POTATO] != 0 ){
                        this._cells[index] =  new Potato
                        this.seeds[TypeVegetables.POTATO] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.CARROT:
                    if(this.seeds[TypeVegetables.CARROT] != 0 ){
                        this._cells[index] =  new Carrot
                        this.seeds[TypeVegetables.CARROT] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.CUCUMBER:
                    if(this.seeds[TypeVegetables.CUCUMBER] != 0 ){
                        this._cells[index] =  new Cucumber
                        this.seeds[TypeVegetables.CUCUMBER] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.EGGPLANT:
                    if(this.seeds[TypeVegetables.EGGPLANT] != 0 ){
                        this._cells[index] =  new Eggplant
                        this.seeds[TypeVegetables.EGGPLANT] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.ZUCCHINI:
                    if(this.seeds[TypeVegetables.ZUCCHINI] != 0 ){
                        this._cells[index] =  new Zucchini
                        this.seeds[TypeVegetables.ZUCCHINI] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.PUMPKIN:
                    if(this.seeds[TypeVegetables.PUMPKIN] != 0 ){
                        this._cells[index] =  new Pumpkin
                        this.seeds[TypeVegetables.PUMPKIN] -= 1
                    } else{
                        alert("Семя закончилось")
                    }
                    break;

                case TypeVegetables.BLOCK:
                default:
                    this._cells[index] = new CellVegetable()
                    console.log(this._cells)
                    break;
            
            }
        }
        // const vegetablesArr:any[] = [
        //     "tomato", "potato", "cucumber", "carrot"
        // ]
        // const num = Math.round(Math.random()*4)
        // switch (true) {
        //         case num === 1:
        //             this.cells[index] = new Potato
        //             // this.cells[index].classList.add("potato")
        //             break;
        //         case  num === 2:
        //             this.cells[index] = new Tomato
        //             // this.cells[index].classList.add("tomato")
        //             break;
        //         case num === 3:
        //             this.cells[index] = new Cucumber
        //             // this.cells[index].classList.add("cucumber")
        //         break;
        //         case num === 4:
        //             this.cells[index] = new Carrot
        //             // this.cells[index].classList.add("carrot")
        //         break;
            
               
        //     }
        // switch (true) {
        //     case type === "potato":
        //         this.cells[index] = new Potato
        //         this.cells[index].classList.add("potato")
        //         break;
        //     case  type === "tomato":
        //         this.cells[index] = new Tomato
        //         this.cells[index].classList.add("tomato")
        //         break;
        //     case type === "cucumber":
        //         this.cells[index] = new Cucumber
        //         this.cells[index].classList.add("cucumber")
        //     break;
        //     case type === "carrot":
        //         this.cells[index] = new Carrot
        //         this.cells[index].classList.add("carrot")
        //     break;
        
           
        // }
        
    }
}
// const vegetablesArr:any[] = []