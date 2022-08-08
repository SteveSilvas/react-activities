import { useState } from "react";
import { ComponentProps } from "react";
const SuccessMessage = (props) => {

   return (
        <div>
            <span style={"font-size: 2em;"}>{props.message}</span>
        </div>
    );
}



export default SuccessMessage;