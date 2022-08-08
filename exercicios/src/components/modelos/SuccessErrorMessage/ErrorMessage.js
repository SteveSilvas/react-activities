import { useState } from "react";

const ErrorMessage = (props) => {

   return (
        <div>
            <span>{props.message}</span>
        </div>
    );
}



export default ErrorMessage;