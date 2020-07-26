import React from "react";

export const InputField = (props) => {
    return (
        <div className={props.className}>
            <span>{props.label}</span>
            <label>
                <input className="form-control" type={props.type}
                    id={props.id}
                    placeholder={props.placeholder}
                    pattern={props.pattern}
                    required={props.required}
                />
            </label>
        </div>
    );
}
