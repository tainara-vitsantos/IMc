import { useState } from "react";
import "./ImcCalc.css"
import Button from "./Button";

const OrcamentoCalc = ({ calcOrcamento }) => {
    const [valorHora, setValorHora] = useState("");
    const [totalHoras, setTotalHoras] = useState("");
    const [urgente, setUrgente] = useState(false);

    const clearForms = (e) => {
        e.preventDefault();
        setValorHora("");
        setTotalHoras("");
        setUrgente(false);
    }

    /* Permitir apenas números */
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleValorHoraChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setValorHora(updateValue);
    }

    const handleTotalHorasChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setTotalHoras(updateValue);
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de Orçamento Freelancer</h2>
            {/* Form para obter valor/hora e total de horas */}
            <form id="imc-form">
                <div className="form-inputs">
                    {/* Campo de Valor da Hora */}
                    <div className="form-control">
                        <label htmlFor="valorHora">Valor da sua Hora (R$)</label>
                        <input type="text"
                               name="valorHora"
                               id="valorHora"
                               placeholder="Ex: 50"
                               onChange={(e) => handleValorHoraChange(e)}
                               value={valorHora} />
                    </div>
                    {/* Campo de Total de Horas */}
                    <div className="form-control">
                        <label htmlFor="totalHoras">Estimativa de Horas do Projeto</label>
                        <input type="text"
                               name="totalHoras"
                               id="totalHoras"
                               placeholder="Ex: 40"
                               onChange={(e) => handleTotalHorasChange(e)}
                               value={totalHoras} />
                    </div>
                </div>

                {/* Desafio Extra: Taxa de Urgência */}
                <div className="form-control" style={{ flexDirection: "row", alignItems: "center", gap: "8px" }}>
                    <input type="checkbox"
                           id="urgente"
                           checked={urgente}
                           onChange={(e) => setUrgente(e.target.checked)} />
                    <label htmlFor="urgente">Projeto Urgente (+20% no valor total)</label>
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcOrcamento(e, valorHora, totalHoras, urgente)} />
                    <Button id="clear-btn" text="Limpar" action={clearForms} />
                </div>
            </form>
        </div>
    );
};

export default OrcamentoCalc;
