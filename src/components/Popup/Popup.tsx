import React, { PropsWithChildren } from "react";
import "./Popup.css"
type Props = {
    // title: string | ReactNode
    // content: string | ReactNode
    //event: React.MouseEvent<HTMLElement>
    onCancel: () => void
    onSubmit: () => void
    isShow: boolean
} & PropsWithChildren

const Popup = (props:Props) => {

    return (
        <div className={"background " + (props.isShow ? "" : "hidden")}>

            <div className="popup">
                <div className="body">
                    {props.children}
                </div>
            <footer>
                <button onClick={props.onSubmit}>Ок</button>
                <button onClick={props.onCancel}>Отмена</button>
            </footer>
            </div>
        </div>
    )

    //     
    //     // <div className={"popup" + (props.isShow ? "" : " hide")}>
    //     //     // <div className="body">
    //     //     //     <h3>{props.title}</h3>
    //     //     //     <div className="content">{props.content}</div>
    //     //     //     <footer>
    //     //     //         <button onClick={props.onCancel}>Отмена</button>
    //     //     //         <button onClick={props.onSubmit}>ОК</button>
    //     //     //     </footer>
    //     //     // </div>
    //     // </div>
    // )
}

export default Popup