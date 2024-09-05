import React from 'react'
import style from './grimpefamille.module.css'

const GrimpeFamille = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Pour les enfants et la grimpe famille</h1>
        <p className={style.text}>L’inscription en ligne n’est pas possible, merci de nous contacter par mail à <b>ivrymontagneescalalde@gmail.com</b></p>
    </div>
  )
}

export default GrimpeFamille