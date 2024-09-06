import React from 'react'
import style from '../page.module.css'
import Hero from '../../components/Gymnase/Hero'
import Fonctionnement from '../../components/Gymnase/Fonctionnement'
import Regles from '../../components/Gymnase/Regles'
import OuvertureFermeture from '../../components/Gymnase/OuvertureFermeture'
const page = () => {
  return (
    <main className={style.main}>
        <Hero />
        <Fonctionnement />
        <Regles />
        <OuvertureFermeture />
    </main>
  )
}

export default page

export const metadata = {
    title: "Gymnase - Ivry Montagne Escalade",
  }