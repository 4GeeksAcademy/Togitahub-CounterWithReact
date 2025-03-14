import React from "react";

const Button = ({ method, label, style}) => {
    return (
        <div className="row p-4">
            <div className="d-flex justify-content-center">
                <button className={style} onClick={method}>
                    {label}
                </button>
            </div>
        </div>
    );
};

export default Button;