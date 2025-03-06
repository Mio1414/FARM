import React, { useEffect, useState } from "react";
import FieldVegetables from "../../modules/Field";
import "./Game.css"
// import Tomato from '../../modules/Cell';
// import Potato from '../../modules/Cell';
// import Cucumber from '../../modules/Cell';
// import Carrot from '../../modules/Cell';
import CellVegetable, { TypeVegetables } from "../../modules/Cell";
import Animal from "../../modules/Animal";
import { Food, TypeFood, Yard } from "../../modules/Yard";
//Pork, Cow, Prey, Milk, Meat, Poop, Leather, Blood 

import Popup from "../../components/Popup/Popup";
import Select from "../../components/Select/Select";
import { Animals } from "../../modules/Animal";


export const field = new FieldVegetables(16)

const yard = new Yard()

const animalsClasses = {
    [Animals.PORK]: 'pork',
    [Animals.COW]: 'cow',
    [Animals.ANIMAL]: ''
}
const foodClasses = {
    [TypeFood.APPLES]: 'apples',
    [TypeFood.CARROT]: 'carrot',
    [TypeFood.GRASS]: 'grass',
    [TypeFood.HAY]: 'hay',
    [TypeFood.FOOD]: ''
}

// let colors = {
//     [TypeVegetables.EMPTY]: "white",
//     [TypeVegetables.TOMATO]: "rgb(255, 0, 0, 0.2)",
//     [TypeVegetables.CARROT]: "rgb(255, 165, 0, 0.2)",
//     [TypeVegetables.POTATO]: "rgb(246, 255, 127, 0.2)",
//     [TypeVegetables.CUCUMBER]: "rgb(0, 128, 0, 0.2)",
//     [TypeVegetables.EGGPLANT]: "rgba(123, 0, 255, 0.2)",
//     [TypeVegetables.ZUCCHINI]: "rgb(75, 156, 0,  0.2",
//     [TypeVegetables.PUMPKIN]: "rgb(179, 118, 7, 0.2)",
//     [TypeVegetables.BLOCK]: "rgb(0, 0, 0)",
// }
const names = {
    [TypeVegetables.EMPTY]: " ",
    [TypeVegetables.TOMATO]: "Помидор",
    [TypeVegetables.CARROT]: "Морковь",
    [TypeVegetables.POTATO]: "Картошка",
    [TypeVegetables.CUCUMBER]: "Огурец",
    [TypeVegetables.EGGPLANT]: "Баклажан",
    [TypeVegetables.ZUCCHINI]: "Кабачек",
    [TypeVegetables.PUMPKIN]: "Тыква",
    [TypeVegetables.BLOCK]: "",
}

enum Type {
    VEGETABLES = "vegetables",
    ANIMALS = "animals",
    FOOD = "food",
    AOF = "aof"
}
enum Tabs {
    FOOD,
    ANIMALS
}
const Game = () => {

    const items = [
        {
            label: "Морковь",
            value: TypeVegetables.CARROT,
            amount: field.seeds[TypeVegetables.CARROT]
        },
        {
            label: "Помидор",
            value: TypeVegetables.TOMATO,
            amount: field.seeds[TypeVegetables.TOMATO]
        },
        {
            label: "Картошка",
            value: TypeVegetables.POTATO,
            amount: field.seeds[TypeVegetables.POTATO]
        },
        {
            label: "Огурец",
            value: TypeVegetables.CUCUMBER,
            amount: field.seeds[TypeVegetables.CUCUMBER]
        },
        {
            label: "Баклажан",
            value: TypeVegetables.EGGPLANT,
            amount: field.seeds[TypeVegetables.EGGPLANT]
        },
        {
            label: "Кабачек",
            value: TypeVegetables.ZUCCHINI,
            amount: field.seeds[TypeVegetables.ZUCCHINI]
        },
        {
            label: "Тыква",
            value: TypeVegetables.PUMPKIN,
            amount: field.seeds[TypeVegetables.PUMPKIN]
        },
    ]

    const animalsItem = [
        {
            label:"Свинья", 
            value: Animals.PORK, 
            amount: 1
        },
        {
            label:"Корова", 
            value:  Animals.COW, 
            amount: 1
        }
    ]
    const foodIsItem = [
        {
            label: "Яблоко",
            value:  TypeFood.APPLES, 
            amount: 1
        },
        {
            label: "Трава",
            value:  TypeFood.GRASS, 
            amount: 1
        },
        {
            label: "Сено",
            value:  TypeFood.HAY, 
            amount: 1
        },
        {
            label: "Морковка",
            value:  TypeFood.CARROT, 
            amount: 1
        }
    
    ]

    const [cells, setCells] = useState<CellVegetable[]>(field.field) // что такое это
    const [index, setIndex] = useState(-1)
    const [showPopup, setShowPopup] = useState(false)
    const [type, setType] = useState<TypeVegetables>(TypeVegetables.EMPTY)

    const [isBlockCell, setIsBlockCell] = useState(false)

    const [animals, setAnimals] = useState<Animal[]>(yard.newAnimals)
    const [animal, setAnimal] = useState<Animals>(Animals.ANIMAL)
    const [food, setFood] = useState<Food[]>(yard.newFood)
    const [foodType, setFoodType] = useState<TypeFood>()
    const [typePopup, setTypePopup] = useState<Type>()
    const [activeTab, setActiveTab] = useState<Tabs | undefined>()
    // useEffect(
    //     ()=>{
    //         console.log(animal)
    //     },[animal]
    // )

    useEffect(
        () => {
            let color: string
            let transparency: number = 0.2
            const intervalField = setInterval(
                () => {
                    for (const cell of field.cells) {
                        cell.incStage()
                        // color = `rgb (${colors[cell.type]}, ${}`
                    }
                    yard.feeding()
                    yard.getHungry()
                    setCells(field.field)
                    setAnimals(yard.newAnimals)
                    setFood(yard.newFood)
                }, 2000
            )
            return () => {
                clearInterval(intervalField)
            }
        },
        []
    )
    // useEffect(
    //     () => {
    //         // let color: string
    //         // let transparency: number = 0.2
    //         const intervalAnimals = setInterval(
    //             () => {
    //                 // for (const animal of yard.newAnimals) {
    //                 // }
    //                 yard.growingUp()
    //                 setAnimals(yard.newAnimals)
    //             }, 10000
    //         )
    //         return () => {
    //             clearInterval(intervalAnimals)
    //         }
    //     },
    //     []
    // )

    // const tomato = new Tomato
    // const potato = new Potato
    // const cucumber = new Cucumber
    // const carrot = new Carrot
    // const potato = new 
    // const vegetablesArr:any[] = [
    //     tomato, potato, cucumber, carrot
    // ]
    const onSeed = () => {
        field.seed(type, index)
        setCells(field.field)
        //    const index:number =  Math.round(Math.random()*4)

        //   const selectVegetable = vegetablesArr[index]
        // field.seed(index)

    }
    const onAddAnimal = () => {
        yard.addAnimal(animal)
        setAnimals(yard.newAnimals)

    }

    const onSelect = (value: TypeVegetables) => {
        setType(value)
    }
    const onClick = (index: number) => {
        setTypePopup(Type.VEGETABLES)
        setIsBlockCell(cells[index].type === TypeVegetables.BLOCK)
        setIndex(index)
        setShowPopup(true)
    }
    const onClickYard = () => {
        setTypePopup(Type.AOF)
        setShowPopup(true)
    }
    const onCancel = () => {
        setShowPopup(false)
    }
    const onSubmit = () => {
        setShowPopup(false)
        setActiveTab(undefined)

        if (typePopup === Type.VEGETABLES) {
            onSeed()
        } else if (typePopup === Type.ANIMALS){
            onAddAnimal()
        }
        
        
    }
    const popupSeedBody = () => {
        return (
            <>
                <h2> Выберете семя </h2>
                <div>
                    <Select items={items} onSelect={onSelect}></Select>
                </div>
            </>)
    }
    const popupBlockBody = () => {
        return (
            <>
                <h2> Разблокировать поле?</h2>
                {/* <div>
                <Select items = {items} onSelect={onSelect}></Select>
            </div> */}
            </>)
    }
    const onSelectAnimal = (value: Animals) => {
        setAnimal(value)
    }
    const onSelectFood = (value: TypeFood) => {
        setFoodType(value)
    }

    const popupAnimalBody = () => {
        return (
            <>
                <h2> Хотите добавить животное?</h2>
                <div>
                <Select items = {animalsItem} onSelect={onSelectAnimal}></Select>
            </div>
            </>
            )
    }

    const popupAnimalOrFoodBody = () => {
        let title = ""
        switch(typePopup){
            case Type.ANIMALS:
                title = "Выбери своего зверя"
                break;
            case Type.FOOD:
                title = "Какой еды добавить?"
                break;   
        }
        return(
            //Если тайтл существует то он выводится, если нет то нет
            <>
            {title && <h2>{title}</h2>} 
            <div className="tabs">
                <div className={activeTab === Tabs.FOOD ? "active" : ""} onClick={()=> changeTub(Tabs.FOOD)}>Food</div>
                <div className={activeTab === Tabs.ANIMALS ? "active" : ""} onClick={()=> changeTub(Tabs.ANIMALS)}>Animals</div>
            </div>
            <div className="tab-content"> 
                { activeTab === Tabs.ANIMALS && <Select items = {animalsItem} onSelect={onSelectAnimal}></Select>}
                { activeTab === Tabs.FOOD && <Select items = {foodIsItem} onSelect={onSelectFood}></Select>}
            </div>
            </>
        )
    }
    const changeTub = (tab: Tabs) => {
        setActiveTab(tab)
        switch(tab){
            case Tabs.ANIMALS:
                setTypePopup(Type.ANIMALS)
                break;
            case Tabs.FOOD:
                setTypePopup(Type.FOOD)
                break;
        }
    }
    const popupBody = () => {
        switch (typePopup) {
            case Type.AOF:
            case Type.FOOD:
            case Type.ANIMALS:
                return popupAnimalOrFoodBody()
                
            case Type.VEGETABLES:
                return  isBlockCell ? popupBlockBody() : popupSeedBody() 
        }
    }

    
    return (
        <main className="game">
            <section className="field">
                {cells.map((cell, index) => (
                    <div className="cell"
                        onClick={() => onClick(index)}
                        style={{ backgroundColor: cell.color }}
                    > {cell.currentStage}
                        {/* <button 
                        // onClick={(event: any) => {
                        // onSeed(type, index)}}
                        >Посадить</button> */}
                    </div>
                ))}
            </section>
            <section className="dog">
                <section className="doghouse"></section>
            </section>
            <section className="yard" onClick={onClickYard}>
                <div className={Type.ANIMALS}>
                    {animals.map(animal => <div className={`${Type.ANIMALS} ${animalsClasses[animal.type]}`}></div>)}
                </div>
                <div className={Type.FOOD}>
                    {food.map(item => <div className={`${Type.FOOD} ${foodClasses[item.type]}`}></div>)}
                </div>
                
            </section>
            <section className="house"></section>
            <section className="farmer"></section>
            <Popup isShow={showPopup} onCancel={onCancel} onSubmit={onSubmit}>
               {
                 popupBody()
               }
            </Popup>
           
        </main>
    )
}


export default Game