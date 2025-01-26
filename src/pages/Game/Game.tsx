import React, { useState } from "react";
import FieldVegetables from "../../modules/Field";
import "./Game.css"
// import Tomato from '../../modules/Cell';
// import Potato from '../../modules/Cell';
// import Cucumber from '../../modules/Cell';
// import Carrot from '../../modules/Cell';
import CellVegetable, { TypeVegetables } from "../../modules/Cell";
import Popup from "../../components/Popup/Popup";
import Select from "../../components/Select/Select";


export const field = new FieldVegetables(16)

const colors = {
    [TypeVegetables.EMPTY]: "white",
    [TypeVegetables.TOMATO]: "red",
    [TypeVegetables.CARROT]: "orange",
    [TypeVegetables.POTATO]: "yellow",
    [TypeVegetables.CUCUMBER]: "green",
    [TypeVegetables.EGGPLANT]: "rgb(123, 0, 255)",
    [TypeVegetables.ZUCCHINI]: "rgb(75, 156, 0)",
    [TypeVegetables.PUMPKIN]: " rgb(179, 118, 7)",
    [TypeVegetables.BLOCK]: " rgb(0, 0, 0)",
}
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

const Game = () => {

    const items = [
        {
            label:"Морковь", 
            value: TypeVegetables.CARROT, 
            amount: field.seeds[TypeVegetables.CARROT]},
        {
            label:"Помидор", 
            value: TypeVegetables.TOMATO, 
            amount: field.seeds[TypeVegetables.TOMATO]},
        {
            label:"Картошка", 
            value: TypeVegetables.POTATO, 
            amount: field.seeds[TypeVegetables.POTATO]},
        {
            label:"Огурец", 
            value: TypeVegetables.CUCUMBER, 
            amount: field.seeds[TypeVegetables.CUCUMBER]},
        {
            label:"Баклажан", 
            value: TypeVegetables.EGGPLANT, 
            amount: field.seeds[TypeVegetables.EGGPLANT]},
        {
            label:"Кабачек", 
            value: TypeVegetables.ZUCCHINI, 
            amount: field.seeds[TypeVegetables.ZUCCHINI]},
        {
            label:"Тыква", 
            value: TypeVegetables.PUMPKIN, 
            amount: field.seeds[TypeVegetables.PUMPKIN]},
    ]
    
    const [cells, setCells] = useState<CellVegetable[]>(field.field) // что такое это
    const [index, setIndex] = useState(-1)
    const [showPopup, setShowPopup] = useState(false)
    const [type, setType] = useState<TypeVegetables>(TypeVegetables.EMPTY)

    const [isBlockCell, setIsBlockCell] = useState(false)

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
    const onSelect = (value: TypeVegetables) => {
        setType(value)
    }
    const onClick = (index: number) => {
       setIsBlockCell(cells[index].type === TypeVegetables.BLOCK)
        setIndex(index)
       setShowPopup(true)
    }
    const onCancel = () => {
        setShowPopup(false)
    }
    const onSubmit = () => {
        setShowPopup(false)
        onSeed()
    }
    const popupSeedBody = () => {
        return(
        <>
            <h2> Выберете семя </h2>
            <div>
                <Select items = {items} onSelect={onSelect}></Select>
            </div>
        </>)
    }
    const popupBlockBody = () => {
        return(
        <>
            <h2> Разблокировать поле?</h2>
            {/* <div>
                <Select items = {items} onSelect={onSelect}></Select>
            </div> */}
        </>)
    }
    
    return(
        <main>
            <section>
                {cells.map((cell, index) => ( 
                    <div className="cell"  
                    onClick={() => onClick (index)}
                    style={{backgroundColor: colors[cell.type]}}
                    >
                        {/* <button 
                        // onClick={(event: any) => {
                        // onSeed(type, index)}}
                        >Посадить</button> */}
                       </div>
                ))}
            </section>
            <Popup isShow={showPopup} onCancel={onCancel} onSubmit={onSubmit}>
               {
                isBlockCell ? popupBlockBody() : popupSeedBody() 
               }
            </Popup>
           
        </main>
    )
    }


export default Game