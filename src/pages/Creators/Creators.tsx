import React from "react";
import './Creators.css'
import { useNavigate } from "react-router";

const Creators = () => {
    const navigate = useNavigate()
    return(
        <main className="creators">
            <span className="go-back" onClick={()=> navigate(-1)}>Назад</span>
        </main>
    )
}
export default Creators