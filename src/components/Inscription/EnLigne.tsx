import React from 'react'
import Step from './Step'

import style from './enligne.module.css'


const EnLigne = () => {
    const steps = [
        {
            title: 'Se connecter au site de la FSGT pour <b>prendre une licence</b>',
            links: [
                {
                    title: 'FSGT',
                    url: 'https://monespace.fsgt.org/'
                }
            ],
            steps: [
                'Connectez vous ou créez un compte sur le site de la FSGT puis allez dans la rubrique <b>prendre une licence.</b>',
                'Sélectionner dans choix de la structure : <span style="font-weight: 900">08354 - Ivry Montagne Escalade</span>',
                '<span style="font-weight: 900">Saisissez vos informations personnelles</span> : ajoutez votre photo, cochez vos options et n\'oubliez pas d\' enregistrer les données. Continuer la Saisie.',
                '<span style="font-weight: 900">Choix de la section</span> : Escalade / Montagne',
                '<span style="font-weight: 900">Choix de la licence</span> : type de licence <span style="font-weight: 900">OMNISPORT</span> </br></br> Si toutes vos réponses au <b>questionnaire santé</b> sont <span style="font-weight: 900">NON</span> : cochez l\'option. \n\n Si vous avez répondu à au moins une des rubriques <span style="font-weight: 900">OUI</span> : téléchargez votre certificat médical. </br></br> <b>N\'oubliez pas de cocher <span style="color:red">l\'assurance (IA)</span>, c\'est très important !</b>',
                'Cliquez sur <span style="font-weight: 900">Calculer le tarif, vérifiez si toutes les informations sont correctes (Pour rectifier, retournez en cliquant sur les onglets en haut).</span> Si tout est correct, cliquez sur <span style="font-weight: 900">Continuer avec cette licence.</span></br></br> <b>aucun paiement n\'est nécessaire à cette étape</b> (le règlement se fait par HelloAsso lors de l’adhésion au club).'
            ]
        },
        {
            title: 'Se connecter à HelloAsso pour <b>adhérer au club</b>',
            links: [
                {
                    title: 'Adultes',
                    url: 'https://www.helloasso.com/associations/ivry-montagne-escalade/adhesions/renouvellement-adhesion-adulte-2024-25'
                },
                {
                    title: 'Seniors',
                    url: 'https://www.helloasso.com/associations/ivry-montagne-escalade/adhesions/adhesion-senior-2024-25'
                },
                {
                    title: 'Chomeurs',
                    url: 'https://www.helloasso.com/associations/ivry-montagne-escalade/adhesions/adhesion-chomeur-adulte-2024-25'
                },
                {
                    title: 'Etudiants',
                    url: 'https://www.helloasso.com/associations/ivry-montagne-escalade/adhesions/adhesion-etudiant-2024-25'
                },
                {
                    title: 'Ados',
                    url: 'https://www.helloasso.com/associations/ivry-montagne-escalade/adhesions/renouvellement-adhesion-jeunes-2024-25'
                }
            ],
            steps: [
                'Connectez vous ou créez un compte sur HelloAsso.',
                'Remplissez et cochez les informations demandées.',
                'Effectuez le paiement (tarifs ci-dessus), vous faites partie du club !'
            ]
        },
        {
            title: 'Imprimez votre licence',
            links: [],
            steps: [
                'Nous allons croiser les informations entre HelloAsso et FSGT pour la validation. Vous recevrez un mail de confirmation.</br></br>Connectez vous à <b>monespace.fsgt.org</b> pour télécharger et imprimer votre licence.</br></br>Accrochez votre licence à votre baudrier pour grimper chez les voisins ;)</br></br><b><span style="color:#818C58">Bienvenue à Ivry Montagne Escalade !</span></b>'
            ]
        }
    ]
  return (
    <div className={style.container}>
        <h1 className={style.title}>En ligne</h1>
        <p className={style.subtitle}>Pour la saison 2024-25, les inscriptions sont dématérialisées, tout peut se faire en ligne !</p>
        {
            steps.map((step, index) => (
                <Step key={index} index={index + 1} step={step} />
            ))
        }
    </div>
  )
}

export default EnLigne