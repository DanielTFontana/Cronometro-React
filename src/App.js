import { useState, useEffect, Fragment } from "react"
import MostrarTempo from "./monstrarTempo"
import Voltas from "./mostrarVoltas"
import Buttons from "./Button"
import './styles.css'

<>
<Voltas/>
<MostrarTempo/>
<Buttons/>
</>



function App() {
  const [numVoltas, incrementar] = useState(0)
  const [started, setStart] = useState(false)
  const [time, setTime] = useState (0)


  useEffect((props) =>{
    let timer = null
    if(started){
    timer = setInterval(()=>{
      setTime (old => old +1)
    }, 1000)
   
   
  }
  return () =>{ //esse return é a função de saída do useEffect
    if(timer){
      clearInterval(timer)
    }
  }
  },[started])
  //o started é passado como efeito colateral do useEffect, para que quando ele for chamado, mudar o valor de false para true e executar o effect

  const startStop = () => {
    setStart(!started)
  }

  const increment = () => {
    incrementar(numVoltas+1)
  }
  
  const decrement = () => {
    if(numVoltas > 0){
      incrementar(numVoltas-1)
    }
    else{
      alert ('Não é possível voltas negativas')
      return
    }
  }
  const reset = () => {
    setTime(0);
    incrementar(0)
  }

  return (
    <Fragment>
    <div>
      <Voltas numVoltas= {numVoltas}/>

      <Buttons onClick={increment} text= '+'/>
      <Buttons onClick={decrement} text = '-'/>
    </div>

    <div>
      <MostrarTempo tempo= {time}/><p className="stringTime">Tempo</p>
    </div>

    <div>
      {
        numVoltas > 0 &&
        <MostrarTempo tempo = {Math.round (time/numVoltas)}/>
      }
      <p className="stringTime">Tempo Médio por volta</p>
        <Buttons onClick={startStop} text={ !started ? "Iniciar" : "pause"}/>
        <Buttons onClick={reset} text='Reiniciar'/>
    </div>
    </Fragment>
  );
}

export default App;
