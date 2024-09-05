import React from 'react'
import style from './fonctionnement.module.css'

const Fonctionnement = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Fonctionnement</h1>
        <p className={style.text}>
        Le mur de l’Orme au Chat est accessible aux adhérents du club Ivry Montagne Escalade, ainsi qu’aux adhérents des autres clubs d’escalade de la FSGT Île-de-France, en fonction du planning ci-dessous.<br/><br/>Le club est affilié à la Fédération Sportive et Gymnique du Travail (FSGT) qui a pour ambition de rendre accessible le sport à tous. Son fonctionnement est essentiellement basé sur les valeurs du <b>bénévolat</b>, du partage, de l’accès à l’autonomie et de l’entraide.
        </p>
        <table>
            <thead>
                <tr>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mer</th>
                    <th>Jeu</th>
                    <th>Ven</th>
                    <th>Sam</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h3>Enfants</h3>
                        <p>18:00<br/>-<br/>19:30</p>
                        <h3>Adultes encadrés</h3>
                        <p>19:30<br/>-<br/>23:00</p>
                    </td>
                    <td>
                        <h3>Enfants</h3>
                        <p>18:00<br/>-<br/>19:30</p>
                        <h3>Ados</h3>
                        <p>19:00<br/>-<br/>21:00</p>
                        <h3 className={style.red}>Grimpe Libre</h3>
                        <p>19:30<br/>-<br/>23:00</p>
                    </td>
                    <td>
                        <h3>Adultes encadrés</h3>
                        <p>19:30<br/>-<br/>23:00</p>
                    </td>
                    <td>
                        <h3>Ados</h3>
                        <p>19:00<br/>-<br/>21:00</p>
                        <h3 className={style.red}>Grimpe Libre</h3>
                        <p>19:30<br/>-<br/>23:00</p>
                    </td>
                    <td>
                        <h3>Grimpe famille</h3>
                        <p>17:00<br/>-<br/>19:00</p>
                        <h3 className={style.red}>Grimpe Libre</h3>
                        <h5>Créneau ouvert aux voisins</h5>
                        <p>18:00<br/>-<br/>23:00</p>
                    </td>
                    <td style={{backgroundColor:"#818C58"}}>
                        <h3>Grimpe famille</h3>
                        <p>09:30<br/>-<br/>12:30</p>
                        <h3 style={{color:'#FFE9CF'}}>Grimpe Libre</h3>
                        <p>12:30<br/>-<br/>18:00</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <h5 style={{marginTop: '15px'}}>Les créneaux <b>Grimpe libre</b> sont accessibles seulement aux grimpeurs autonomes</h5>
    </div>
  )
}

export default Fonctionnement