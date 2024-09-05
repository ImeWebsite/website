import React from 'react'
import Image from 'next/image'
import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.container}>
        <Image
            src="/footer.svg"
            alt="Footer"
            width="82"
            height="139"
        />
        <a href="maito:escalade@usivry.org">escalade@usivry.org</a>
        <a href="">26 Bd de Brandebourg</a>
        <a href="">94200 Ivry-sur-Seine</a>
        <a href="">rejoindre le télégram</a>
        <p>&copy;IvryMontagneEscalade</p>
    </footer>
  )
}

export default Footer