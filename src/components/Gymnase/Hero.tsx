import React from 'react'
import Image from 'next/image'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
        <h1>Le mur d'escalade</h1>
        <h2>Du collège Gisèle Halimi</h2>
        <a href="https://maps.app.goo.gl/Y79iYwujnhKhrg53A"><b>12, rue du 19 mars 1962<br /> Quartier : Plateau-Monmousseau</b><br/> Tram T9 – Arrêt « La Briqueterie »</a>
        <div className={style.img}></div>
    </div>
  )
}

export default Hero