import React from 'react'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Comment s&apos;inscrire ?</h1>
        <p className={style.text}>Afin de découvrir le club et l&apos;escalade, des journées portes ouvertes pour les nouveaux adhérents adultes auront lieu <b>lundi 9, mercredi 11 et vendredi 6 septembre, à partir de 19h30</b> au gymnase de l&apos;Orme au chat. Pour les adolescents, la séance de découverte aura lieu <b>jeudi 5 septembre, à 19h.</b></p>
    </div>
  )
}

export default Hero