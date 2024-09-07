import React from 'react'
import style from './tarifs.module.css'

const tarifs:any = {
    Adultes: [
    '18-59 ans -> 108 €',
    'à partir de 60 ans -> 96 €',
    'chômeurs -> 84 €'
    ],
    Etudiants: ['jusqu’à 25 ans -> 96 €'],
    Ados: ['13 à 17 ans -> 84 €'],
    Enfants: ['10 à 12 ans -> 80 €'],
    'Grimpe Famille': ['Le tarif est calculé en fonction du nombre de personnes inscrites (parents et enfants) et vous seront communiqués par famille, suite à la journée portes ouvertes.']
}

const Tarifs = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Les tarifs</h1>
        {Object.keys(tarifs).map((key) => (
            <div key={key} className={style.subcontainer}>
                <h2>{key}</h2>
                <ul className={style.list}>
                    {tarifs[key].map((tarif:any) => (
                        <li key={tarif}>{tarif}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Tarifs