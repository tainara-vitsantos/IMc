import Button from './Button'
import './ImcTable.css'

// Recebe os dados 
const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="result-container">
      <p id="imc-number">Seu IMC: <span className={infoClass}> {imc} </span> </p>
      <p id="imc-info"> Situação Atual: <span className={infoClass}> {info} </span> </p>
    
        <h3>Confira as classificações</h3>
        
        <div className="imc-table">
            <div className="table-header">
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Obesidade</h4>
            </div>

            {/* Percorrer o array data e exibir cada item */}
            {data.map((item) =>(
                <div className="table-data">
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
            ))}
        </div>

            {/* 12. Botão que chama a função de resetar a calculadora */}
        <Button id="back-btn" text="Calcular Novamente" action={resetCalc}/>
    </div>
  );
};

export default ImcTable;