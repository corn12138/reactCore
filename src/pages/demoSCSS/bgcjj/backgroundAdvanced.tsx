import React from "react";
import {useNavigate} from "react-router-dom";
import uniqueStyle from "./advance.module.scss"
// import styles from "@/pages/demoSCSS/back.module.scss";

const AdvancedScss : React.FC=()=>{
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    }

    return (
        <div className={uniqueStyle.uniqueName}>
            <div className={uniqueStyle["goback"]}>
                <button onClick={goBack}>Go Back</button>
            </div>
            <div className={uniqueStyle["l-container"]}>
                <div className={uniqueStyle[""]}></div>
            </div>
        </div>
    )

}
export default AdvancedScss;