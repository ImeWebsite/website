import React from 'react'
import style from './fonctionnement.module.css'
const AttentionGrimpeur = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>À l’attention des grimpeurs adultes</h1>
        <p className={style.text}>
        Si vous êtes débutants ou nouveaux au club, il est nécessaire de valider votre autonomie en SAE (Structure Artificielle d’Escalade) avant de pouvoir grimper sur les créneaux libres. Pour cela, se renseigner auprès des référents lors des séances encadrées. Les séances adultes encadrées ont lieu les lundis et mercredis. Les créneaux restants sont libres. 
        </p>
    </div>
  )
}

export default AttentionGrimpeur