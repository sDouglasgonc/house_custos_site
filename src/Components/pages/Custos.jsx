
// todos os imports
import React, { useState } from "react";
import "./Custos.css";
import Chart from "../layout/Charts";
import Pie from "../layout/PieChart";
import BoxConta from "../layout/BoxConta";
import ProgressBar from "../layout/ProgressBar";
import ButtonMain from "../layout/ButtonMain";



function Custos() {

  //todos os useStates //
  const [filledBoxes, setFilledBoxes] = useState(0);
  const [allboxesFilled, setAllBoxesFilled] = useState(false);
  const [submitData, setSubmitData] = useState([]);
  const [confirmPressed, setConfirmPressed] = useState(false)

  // aqui fica o codigo referente a barra de progresso que vai aumentando de acordo com o preenchimento das boxes//
  const updateProgress = () => {
    const totalPercentage = (filledBoxes / 3) * 50;
    return totalPercentage <= 100 ? totalPercentage : 100;
  };

  //aqui fica o codigo referente ao armazenamento dentro do json server 
  const handleBoxFill = (id, name, value) => {
    setFilledBoxes((prevFilledBoxes) => prevFilledBoxes + 1);
    setSubmitData((prevSubmitData) => [
      ...prevSubmitData,
      { id, nome: name, valor: value }
    ]);
    //aqui é uma condicional para mostrar o botão quando as boxes forem preenchidas //
    if (filledBoxes + 1 === 6) {
      setAllBoxesFilled(true)

    }
  };
  //esse é o codigo referente a requisição POST para o json server //
  const handleStartButtonClick = () => {
    const jsondata = JSON.stringify(submitData)

    const updateValues = {
      "1": submitData["1"],
      "2": submitData["2"],
      "3": submitData["3"],
      "4": submitData["4"],
      "5": submitData["5"],
      "6": submitData["6"]
    }

    fetch("http://localhost:5000/Contas", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsondata
    },)
      .then((response) => {
        if (response.ok) {
          console.log("Dados da API enviados com sucesso!!")
        } else {
          console.log("Erro ao enviar os dados!!")
        }
      })
      .catch(error => {
        console.error("Erro ao enviar os dados para a API", error)
      })

    setSubmitData(updateValues)
    setConfirmPressed(true)

  }
  // aqui fica as boxes e o botão que será mostrado se a condicional acima estiver correta
  return (
    <div className="container">
      <div className="content_page">
        <div className="chart-bar">
          <Chart submitData={submitData} confirmPressed={confirmPressed} />
        </div>
        <div className="chart-pie">
          <Pie />
        </div>

        <div className="progress-bar">
          <ProgressBar percent={updateProgress()} />
        </div>
        <div className="box">
          <BoxConta id={"1"} name={"Conta de Água"} onFill={(value) => handleBoxFill("1", "Conta de Água", value)} />
        </div>
        <div className="box">
          <BoxConta id={"2"} name={"Conta de Energia"} onFill={(value) => handleBoxFill("2", "Conta de Energia", value)} />
        </div>
        <div className="box">
          <BoxConta id={"3"} name={"Conta do Gás"} onFill={(value) => handleBoxFill("3", "Conta do Gás", value)} />
        </div>
        <div className="box">
          <BoxConta id={"4"} name={"Conta do Cartão"} onFill={(value) => handleBoxFill("4", "Conta do Cartão", value)} />
        </div>
        <div className="box">
          <BoxConta id={"5"} name={"Conta do Mercado"} onFill={(value) => handleBoxFill("5", "Conta do Mercado", value)} />
        </div>
        <div className="box ">
          <BoxConta id={"6"} name={"Conta da Previdencia Social"} onFill={(value) => handleBoxFill("6", "Conta da Previdencia Social", value)} />
        </div>


        <div className="bt">
          {allboxesFilled && (<ButtonMain onStartClick={handleStartButtonClick} />)}
        </div>

      </div>
    </div>
  );
}

export default Custos;