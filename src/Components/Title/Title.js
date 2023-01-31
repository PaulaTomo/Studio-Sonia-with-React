import React from "react";
import "../Title/title.css";
export default function Title(props){
    return (
        <h1>
            {props.title}
        </h1>
    )
}