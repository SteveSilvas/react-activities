import { useState } from "react";
import SuccessErrorMessage from "../modelos/SuccessErrorMessage/SuccessErrorMessage";

const TesteMessages = () => {
    const [showSomething, setShowSomething] = useState(false);

   const onShowSomethingClick = (e) => {
        setShowSomething(!showSomething);
    }

   return (
        <div>
            panel
            <br></br>
            <button onClick={onShowSomethingClick}>SHOW IT</button>
            {showSomething ? <SuccessErrorMessage 
            type={"success"}
            message={"Deu tudo certo"}
            ></SuccessErrorMessage> : ""}
        </div>
    );
}



export default TesteMessages;