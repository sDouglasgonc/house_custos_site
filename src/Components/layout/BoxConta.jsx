import React, { useState } from "react";
import "./BoxConta.css";


function BoxConta({ id, name, onFill }) {

    const [showMessage, setShowMessage] = useState(false);
    const [inputValue, setInputValue] = useState(""); // Estado para armazenar o valor do input

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault(); // Evitar envio de formulário padrão
        if (!inputValue) {
            setShowMessage(false);
            return;
        }

        console.log(inputValue);
        setShowMessage(true);
        if (onFill) {
            onFill(inputValue);
        }
    };


    return (
        <div id={id} className="box_conta">
            <h3 className="title">{name}</h3>
            <div className="space">
                {!showMessage && (
                    <form onSubmit={onSubmit}>
                        <input
                            className="input"
                            placeholder="Digite o valor"
                            type="number"
                            step="any"
                            onChange={handleInputChange}
                            disabled={showMessage}
                        />
                        <button type="submit" className="btn_form">
                            Confirmar
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default BoxConta;
