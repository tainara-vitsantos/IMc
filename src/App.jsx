import './App.css'
import OrcamentoCalc from './components/OrcamentoCalc'
import { useState } from 'react';
import { data } from "./data/projetoData";
import OrcamentoTable from './components/OrcamentoTable';

function App() {

  const calcOrcamento = (e, valorHora, totalHoras, urgente) => {
    e.preventDefault(); // Previne o recarregamento da página

    // Validação: Não podem estar vazios
    if (!valorHora || !totalHoras) return;

    const valorHoraFloat = +valorHora.replace(",", ".");
    const totalHorasFloat = +totalHoras.replace(",", ".");

    // Fórmula: Total do Orçamento = Valor da Hora × Total de Horas
    let totalOrcamento = valorHoraFloat * totalHorasFloat;

    // Desafio Extra: aplicar taxa de urgência de 20%
    if (urgente) {
      totalOrcamento = totalOrcamento * 1.2;
    }

    setOrcamento(totalOrcamento.toFixed(2));

    // Percorre os dados para encontrar a classificação correta
    data.forEach((item) => {
      if (totalOrcamento >= item.min && totalOrcamento <= item.max) {
        setClassificacao(item.classification);
        setInfo(item.info);
        setComplexidade(item.complexity);
        setInfoClass(item.infoClass);
      }
    });
  }

  const resetCalc = () => {
    setOrcamento("");
    setClassificacao("");
    setInfo("");
    setComplexidade("");
    setInfoClass("");
  }

  const [orcamento, setOrcamento] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [info, setInfo] = useState("");
  const [complexidade, setComplexidade] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {/* Renderização Condicional
          - Se não tem orçamento calculado -> mostra o formulário (OrcamentoCalc)
          - Se tem orçamento calculado -> mostra os resultados (OrcamentoTable)
      */}

      {!orcamento ? (
        <OrcamentoCalc calcOrcamento={calcOrcamento} />
      ) : (
        <OrcamentoTable
          data={data}
          orcamento={orcamento}
          classificacao={classificacao}
          info={info}
          complexidade={complexidade}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  )
}

export default App
