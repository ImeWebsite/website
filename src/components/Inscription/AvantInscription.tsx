import React from 'react'
import baseStyle from '../base.module.css'
import style from './avantinscription.module.css'

const AvantInscription = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Avant de s&apos;inscrire</h1>
        <p className={style.text}><span className={style.red}><b>Attestation sur l’honneur</b></span>, à remplir après avoir complété <b>le questionnaire de santé</b> adéquat : mineurs ou adultes. <b>Ne communiquer au club que la partie attestation sur l’honneur !</b> Vous pouvez retrouver les attestations et les questionnaires ici :</p>
        <a href="https://www.fsgt.org/affiliation/certificat-medical-non-contre-indication/" className={baseStyle.link} target="_blank">FSGT</a>
    </div>
  )
}

export default AvantInscription