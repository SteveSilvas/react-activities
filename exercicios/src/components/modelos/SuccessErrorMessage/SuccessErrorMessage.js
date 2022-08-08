import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage"
const SuccessErrorMessage = (props) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(getTypeMessage());
    const [showErrorMessage, setShowErrorMessage] = useState(getTypeMessage());

    function getTypeMessage(){
        if(props.type == "success"){
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
        }else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }
 
   return (
        <div>           
            {showSuccessMessage ? <SuccessMessage message={props.message}></SuccessMessage> : ""}
            {showErrorMessage ? <ErrorMessage message={props.message}></ErrorMessage> : ""}

           
        </div>
    );
}



export default SuccessErrorMessage;