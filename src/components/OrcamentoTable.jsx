import Button from './Button'
import './ImcTable.css'

// Recebe os dados
const OrcamentoTable = ({ data, orcamento, classificacao, info, complexidade, infoClass, resetCalc }) => {
  return (
    <div id="result-container">
      <p id="imc-number">Total do Orçamento: <span className={infoClass}> R$ {orcamento} </span></p>
      <p id="imc-info">Categoria do Projeto: <span className={infoClass}> {classificacao} </span></p>
      <p id="imc-info">Tipo de Entrega: <span className={infoClass}> {info} </span></p>
      <p id="imc-info">Complexidade: <span className={infoClass}> {complexidade} </span></p>

      <h3>Confira as categorias de orçamento</h3>

      <div className="imc-table">
        <div className="table-header">
          <h4>Faixa de Preço</h4>
          <h4>Categoria</h4>
          <h4>Complexidade</h4>
        </div>

        {/* Percorrer o array data e exibir cada item */}
        {data.map((item, index) => (
          <div className="table-data" key={index}>
            <p>
              {item.max === 999999
                ? `Acima de R$ ${item.min.toLocaleString("pt-BR")}`
                : `R$ ${item.min.toLocaleString("pt-BR")} – R$ ${item.max.toLocaleString("pt-BR")}`}
            </p>
            <p>{item.classification} — {item.info}</p>
            <p>{item.complexity}</p>
          </div>
        ))}
      </div>

      {/* Botão que chama a função de resetar a calculadora */}
      <Button id="back-btn" text="Calcular Novamente" action={resetCalc} />
    </div>
  );
};

export default OrcamentoTable;
