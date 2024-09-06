import React from 'react'
import Image from 'next/image'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
        <h1>L&apos;orme au chat</h1>
        <p>28, boulevard de Brandebourg<br />Quartier : Ivry-Port<br/><br/><span style={{color:'#F21F1F'}}>Il est prévu que l’activité escalade soit déplacée sur le mur du Collège Gisèle Halimi 12, rue du 19 mars 1962 à Ivry sur Seine, au cours de l’automne 2024.</span></p>
        <div className={style.img}></div>
    </div>
  )
}

export default Hero