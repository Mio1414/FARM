import React, { ReactNode, useEffect, useState } from "react";
// import { TypeVegetables } from "../../modules/Cell";
import "./Select.css"

type Item = {
    label: string //| ReactNode
    value: any
    amount: number
}

type Props = {
    items: Item[]
    onSelect:(value: any) => void
}
const Select = (props:Props) => {
    const [show, setShow] = useState(false)
    const [value, setValue] = useState ()
    const [label, setLabel] = useState("")
    const [amount, setAmount] = useState()

    // useEffect(
    //     () => {
    //         setValue(undefined)
    //         setLabel("")
    //         setShow(false)
    //     }, [props.items]
    // )

    useEffect(
        ()=>{
            if(value){
                props.onSelect(value)

                
            }
        }, [value]
    )

    const onSelect = (item: Item) =>{
        // if(!item.disabled){

        // }
        setValue(item.value)
        setLabel (item.label) //<string | ReactNode>
        // setAmount (item.amount)
        setShow(false)
    }

    return(
        <div className="select">
            <div className="main" onClick={()=> setShow(!show)}>
                {label}
            </div>
            <div className={"list " + ( show ? "" : "hidden")}>
                {props.items.map((item, index)=>(
                    <div key={`item_${index}`} className={item.amount != 0 ? "" : "gray"}
                     onClick={item.amount != 0 ? ()=>onSelect(item) : ()=>""}>
                        {item.label} x{item.amount}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Select