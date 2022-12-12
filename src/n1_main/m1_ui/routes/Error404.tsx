import React from "react";
import ErrorImg from "../assets/error.jpg"
import s from "./Error404.module.css"

export const Error404 = () => {
    return(
        <div className={s.wappaper}>
            <img alt={'404'} src={ErrorImg} className={s.error404}/>

        </div>
    )
}