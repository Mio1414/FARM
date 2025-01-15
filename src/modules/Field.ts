import React from 'react';
import CellVegetable, { Block, Carrot, Cucumber, Eggplant, Potato, Pumpkin, Tomato, TypeVegetables, Zucchini } from './Cell';
import "./Field.css"


export default class FieldVegetables{
    private cells: any[] = []
    
    get field(){
        return[...this.cells]
    }

    constructor(size: number){
        this.createField(size)
    }
   
    private createField(size: number){
        
        for(let i = 0; i < size; i++){
            if(i % (size/2) > (size/4 -1)){
                this.cells.push(new Block)
            } else {
                this.cells.push(new CellVegetable)
            }
            
        }
    }

    seed(type: TypeVegetables, index:number){
        if(this.cells[index] && 
            this.cells[index].type === TypeVegetables.EMPTY || 
            this.cells[index].type === TypeVegetables.BLOCK)
            {
            switch (type) {
                case TypeVegetables.TOMATO:
                    this.cells[index] =  new Tomato
                    break;
                case TypeVegetables.POTATO:
                    this.cells[index] = new Potato
                    break;
                case TypeVegetables.CARROT:
                    this.cells[index] = new Carrot
                    break;
                case TypeVegetables.CUCUMBER:
                    this.cells[index] = new Cucumber
                    break;
                case TypeVegetables.EGGPLANT:
                    this.cells[index] = new Eggplant
                    break;
                case TypeVegetables.ZUCCHINI:
                    this.cells[index] = new Zucchini
                    break;
                case TypeVegetables.PUMPKIN:
                    this.cells[index] = new Pumpkin
                    break;
                case TypeVegetables.BLOCK:
                    this.cells[index] = new CellVegetable()
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