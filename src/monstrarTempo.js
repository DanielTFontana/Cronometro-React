import React from "react"

const MostrarTempo = (props) =>{
    const tempo = props.tempo
    const minutos = Math.round(tempo/120)
    const segundos = tempo %60
    const minString = minutos < 0 ? '10' + minutos : minutos
    const segString = segundos <0 ? '10' + segundos : segundos
    return (
      <p className="time">
        { `${minString}: ${segString}`}<br/>
      </p>
    )
  }
export default MostrarTempo