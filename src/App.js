import "./App.css";
import MenuSuperiorDeslogado from "./components/MenuSuperior/MenuSuperiorDeslogado";
import Cadastro from "./components/cadastro/cadastro";
import React, { useState } from "react";

function App() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showHome, setShowHome] = useState(false);

    function hideComponents() {
        setShowHome(false);
        setShowRegister(false);
        setShowLogin(false);
    }

    function setShowRegisterHandle() {
        hideComponents();
        setShowRegister(true);
    }

    function setShowLoginHandle() {
        hideComponents();
        setShowLogin(true);
    }

    function setShowHomeHandle() {
        hideComponents();
        setShowHome(true);
    }



    return (
        <div className="App">
            <MenuSuperiorDeslogado 
                showRegister={setShowRegisterHandle} 
                showLogin={setShowLoginHandle}
                showHome={setShowHomeHandle}
            />

            {showRegister && <Cadastro/>}

        </div>
    );
}

export default App;
