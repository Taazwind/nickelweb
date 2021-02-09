import React from "react";

interface ButtonProps {
    text?: string;
    onClick?: any;
    message?: string;
}

const Button = (props:ButtonProps) => {
    const {
        text = "Bouton",
        onClick,
        message,
    } = props
    return (
        <button className="baguette" onClick={onClick}>{text} {message}</button>
    )
}

export default Button
