import React from 'react'
import baseStyle from '../base.module.css'
import Image from 'next/image'
import style from './gymnase.module.css'
import Actuality from './Actuality'
const Gymnase = () => {
  return (
    <div className={style.container}>
        <h1 className={baseStyle.title}>Le gymnase</h1>
        <Actuality
        width="703px"
        height="437px"
        actuality={{
            title: "Le mur d’ecalade",
            subtitle: "Du collège Gisèle Halimi",
            description: "Découvrez le fonctionnement, les horaires et les règles du gymnase.",
            link: "/gymnase",
            image: "url(/lemur-image.jpg)"
        }}
        />
    </div>
  )
}

export default Gymnase