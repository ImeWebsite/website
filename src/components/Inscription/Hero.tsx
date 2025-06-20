import React from 'react'
import style from './hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Comment s&apos;inscrire ?</h1>
        <p style={{textAlign: 'center'}}>
          Les inscriptions pour la saison 2024/2025 sont closes.<br /><br />
Les demandes de licences et inscriptions pour la saison 2025/2026 seront ouvertes à partir du
1 er septembre 2025 selon la procédure décrite ci-après.<br /><br />
Si vous avez besoin d’une licence saisonnière avant le 31 août 2025 pour participer aux
activités de la FSGT, assurez-vous que le secrétariat est en mesure de répondre à votre
demande en vous adressant par courriel à ivrymontagneescalade@gmail.com. Si la réponse
est positive, cliquez sur ce <a href="https://www.helloasso.com/associations/ivry-
montagne-escalade/adhesions/adhesion-4-mois-2024-2025">lien</a>.<br /><br /> Comment adhérer au club et obtenir sa licence FSGT ? On se retrouve à plusieurs rendez-vous
pour la rentrée. Cette année comme l’année dernière, toute la procédure d’inscription peut être
faite en ligne !
        </p>
    </div>
  )
}

export default Hero