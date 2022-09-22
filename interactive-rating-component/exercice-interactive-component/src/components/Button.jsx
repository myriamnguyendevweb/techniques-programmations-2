import React from 'react'

const Button = ({ onClick, placement, round, children }) => {
    const roundButtonClassname = round ? "btn-round" : "";
    const placementClassname = placement === "left" ? "left" : "right";

    const classnames = `btn ${roundButtonClassname} ${placementClassname}`;

    return <button onClick={onClick} className={classnames}>{children}</button>

}

export default Button;