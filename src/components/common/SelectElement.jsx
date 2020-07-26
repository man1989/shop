import React from "react";

export const SelectElement = ({label, ...props}) => {
    return (
        <div className="form-group">
            <span className="control-label">{label}</span>
            <label>
                <select className="form-control" {...props}>
                    {
                        props.options.map((option) => {
                            return (
                                <option key={option.value} value={option.value} selected={option.selected}>{option.text}</option>
                            )
                        })
                    }
                </select>
            </label>
        </div>
    );
}