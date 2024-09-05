import React from 'react'
import style from './ouverturefermeture.module.css'

const OuvertureFermeture = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>L&apos;ouverture et la fermeture du gymnase</h1>
        <p>Des référents au sein du club viennent ouvrir le gymnase
            grâce à un badge ; en l’absence de ce référent, il n’est pas
            possible d’accéder au mur.<br/><br/>
             A la fin de chaque séance, les derniers grimpeurs présents
             doivent vérifier que toutes les consignes ci-dessous ont bien
             été respectées :</p>
             
             <ul>
                <li>Chaque binôme range le matériel qu’il a utilisé lors de la séance dans le meuble destiné.</li>
                <li>Remettre tout ce qui traîne à sa place (baudriers, chaussons, vis, clés).</li>
                <li>Ranger les tapis d’escalade (penser à remonter le pan de bloc). Les petits tapis doivent être empilés dans 
                    le local à droite des vestiaires femmes. <b>Le vendredi soir, laisser les tapis en place, ainsi que quelques cordes en moulinette sur des voies faciles, pour la séance de 
                    grimpe famille du samedi matin !</b></li>
                <li><b>Fermer les 4 cadenas</b> (placards de fond, meuble à cordes et dégaines) dans le local escalade. Faire coulisser le panneau de bois qui sépare le local en deux.Objets trouvés sur le meuble des cordes.</li>
                <li>Fermer la porte de secours avec la barre métallique.</li>
                <li>S’assurer que tout le monde ait quitté le gymnase.</li>
                <li>Éteindre les lumières dans le local du gardien.</li>
            </ul>
            <p>
                <b>Attention ! À 23 h 00, une alarme est automatiquement déclenchée !<br/><br/>
                Veiller à respecter les horaires indicatives suivantes :</b>
            </p>
            <ul>
                <li><b>22h30 :</b> dernière voie ;</li>
                <li><b>22h45 :</b> plus aucun grimpeur sur le mur et rangement du gymnase ;</li>
                <li><b>23h MAX :</b> fermeture du gymnase.</li>
            </ul>
    </div>
  )
}

export default OuvertureFermeture