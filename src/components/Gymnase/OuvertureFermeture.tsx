import React from 'react'
import style from './ouverturefermeture.module.css'
/*
Un gardien gère l’ouverture et la fermeture du gymnase ; merci
de veiller à bien respecter les horaires et à ne pas terminer
au-delà de l’heure indiquée : 22h30 en semaine, 18h le samedi.
Il ouvre également le local « Associations », les sanitaires et
les vestiaires (si les vestiaires ne sont pas ouverts, possible
d’aller le solliciter dans sa loge).

Pour accéder au gymnase, il faut sonner à l’interphone, le
gardien vous ouvre la porte. L’accès au mur se fait en
poursuivant toujours tout droit (passer par deux couloirs),
puis sur la gauche.

Il n’est pas possible de rentrer les vélos à l’intérieur du gymnase,
merci de les laisser à l’extérieur.

A la fin de chaque séance, les derniers grimpeurs présents
doivent vérifier que toutes les consignes ci-dessous ont bien
été respectées :

- Chaque binôme range le matériel qu’il a utilisé lors de la séance
dans le meuble destiné ;

- Remettre tout ce qui traîne à sa place (baudriers,
chaussons, vis, clés).

- Veiller à respecter les horaires indicatifs suivantes : 
       22h15 : dernière voie et rangement du matériel ;
       22h30 : plus aucun grimpeur sur le mur et dans le gymnase, le gardien ferme.
*/
const OuvertureFermeture = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>L&apos;ouverture et la fermeture du gymnase</h1>
        <p>Un gardien gère l’ouverture et la fermeture du gymnase ; merci
de veiller à bien respecter les horaires et à ne pas terminer
au-delà de l’heure indiquée : <b>22h30 en semaine, 18h le samedi.</b>
Il ouvre également le local « Associations », les sanitaires et
les vestiaires (si les vestiaires ne sont pas ouverts, possible
d’aller le solliciter dans sa loge).
<br/><br/>
Pour accéder au gymnase, il faut sonner à l’interphone, le
gardien vous ouvre la porte. L’accès au mur se fait en
poursuivant toujours tout droit (passer par deux couloirs),
puis sur la gauche.
<br/><br/>
<b>Il n’est pas possible de rentrer les vélos à l’intérieur du gymnase,
merci de les laisser à l’extérieur.</b>
<br/><br/>
A la fin de chaque séance, les derniers grimpeurs présents
doivent vérifier que toutes les consignes ci-dessous ont bien
été respectées :</p>
             
             <ul>
                    <li>Chaque binôme range le matériel qu’il a utilisé lors de la séance
                    dans le meuble destiné ;</li>
                    <li>Remettre tout ce qui traîne à sa place (baudriers,
                    chaussons, vis, clés).</li>
                    <li><b>Veiller à respecter les horaires indicatifs suivantes :</b></li>
            </ul>
            <ul>
                <li><b>22h15 :</b> dernière voie et rangement du matériel ;</li>
                <li><b>22h30 :</b> plus aucun grimpeur sur le mur et dans le gymnase, le gardien ferme.</li>
            </ul>
    </div>
  )
}

export default OuvertureFermeture