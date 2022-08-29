import React from 'react'
import Title from '../../Components/Title/Title'
import S from "./Home.'module.css"
import Descricao from '../Components/Descricao/Descricao.jsx'

const Home = () => {
  return (
    <Title texto='O CÉU NÃO É O LIMITE'/>
    <Descricao descricao= 'Todo dia a Nasa captura fotos e vídeos do espaço e com o uso de uma API
    chamada APOD podemos visualizar as imagens e informações de uma
    determinada data. Insira a data que deseja e aproveite.'/>
  )
}

export default Home