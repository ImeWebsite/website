import React from 'react'
import style from '../page.module.css'
import Hero from '../../components/Inscription/Hero'
import Tarifs from '../../components/Inscription/Tarifs'
import GrimpeFamille from '../../components/Inscription/GrimpeFamille'
import AvantInscription from '../../components/Inscription/AvantInscription'
import EnLigne from '../../components/Inscription/EnLigne'
import Contact from '../../components/Inscription/Contact'

const page = () => {
  return (
    <main className={style.main}>
        <Hero />
        <Tarifs />
        <GrimpeFamille />
        <AvantInscription />
        <EnLigne />
        <Contact />
    </main>
  )
}

export default page

export const metadata = {
  title: "Inscription - Ivry Montagne Escalade",
}