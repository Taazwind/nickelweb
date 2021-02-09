import React from "react";

interface LogoProps {
    logo: any;
}

const Logo = (props:LogoProps) => {

    const {
        logo
    } = props

    return (
        <img src={logo} className="App-logo" alt="logo" />
    )
}

export default Logo;