import React, { useState } from "react";
//import { Input } from "antd";
// import "./index.css";
const FloatInput = (props) => {
    const [focus, setFocus] = useState(false);
    let { label, val, placeholder, type, required } = props;
    if (!placeholder) placeholder = label;
    //   const isOccupied = focus || (val && val.length !== 0);
    //   const labelClass = isOccupied ? "elabel as-elabel" : "elabel as-eplaceholder";
    // const requiredMark = required ? <span className="text-danger">*</span> : null;
    return (
        <div
            className="efloat-label position-relative"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {props.children}
            <label className={(focus || val) ? "elabel position-absolute as-elabel tc-purple bg-white Rubik" : "elabel position-absolute as-eplaceholder tc-purple"}>
                {(focus || val) ? label : placeholder}
                {/* {requiredMark} */}
            </label>
        </div>
    );
};
export default FloatInput;