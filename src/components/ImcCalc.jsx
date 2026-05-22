import { useState } from "react";
import "./ImcCalc.css"
import Button from "./Button";

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForms = (e) => {
        e.preventDefault;
        setHeight("");
        setWeight("");
    }

    /* Permitir apenas números */
    const validDigits = (text) => {
         return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setHeight(updateValue);
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setWeight(updateValue);
    }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
        {/* Form para obter peso e altura */}
        <form id="imc-form">
            <div className="form-inputs">
                {/* Campo de altura */}
                <div className="form-control">
                    <label htmlFor="height">Altura (m)</label>
                    <input type="text"
                           name="height"
                           id="height"
                           placeholder="Ex: 1,75"
                           onChange={(e) => handleHeightChange(e)}
                           value={height} />
                </div>
                {/* Campo de Peso */}
                <div className="form-control">
                    <label htmlFor="weight">Peso (kg)</label>
                    <input type="text"
                           name="weight"
                           id="weight"
                           placeholder="Ex: 80,8"
                           onChange={(e) => handleWeightChange(e)}
                           value={weight} />
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForms}/>
            </div>
        </form>
    </div>
  );
};

export default ImcCalc;