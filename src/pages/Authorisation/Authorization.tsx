import React from "react";
import './Authorization.css'
import { Navigate, useNavigate } from "react-router";

const Authorization = () => {
    const navigate = useNavigate()
    return(
        <main className="authorization">
            <span className="go-back" onClick={()=> navigate(-1)}>Назад</span>
        </main>
       
    )
}
export default Authorization