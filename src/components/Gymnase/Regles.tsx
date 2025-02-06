import React from 'react'
import style from './regles.module.css'

const Regles = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Quelques règles de bon fonctionnement</h1>
        <h3 className={style.subtitle}>Les grimpeurs sont invités à:</h3>
        <ul>
            <li>Faire attention au bon déroulement de la séance ;</li>
            <li>Prendre soin du matériel ;</li>
            <b><li style={{marginBottom: 0}}>Participer au rangement du matériel en fin de séance :</li></b>
            <p>Participer au rangement du matériel en fin de séance :<br/>cordes lovées, dégaines rangées par lot avec leur système<br/>d’assurage et mousqueton à vis dans le local<br/>« Associations »</p>
            <li>En fin de séance, veiller à respecter scrupuleusement les consignes de fermeture ci dessous.</li>
        </ul>
    </div>
  )
}

export default Regles