import React from "react";
import './Settings.css'
import { useNavigate } from "react-router";

const Settings = () => {
    const navigate = useNavigate()

    return(
        <main className="settings">
             <span className="go-back" onClick={()=> navigate(-1)}>Назад</span>
        </main>
    )
}
export default Settings