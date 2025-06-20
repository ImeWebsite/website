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
        <a href="maito:Ivrymontagneescalade@gmail.com">Ivrymontagneescalade@gmail.com</a>
        <a href="https://maps.app.goo.gl/Y79iYwujnhKhrg53A" target="_blank"> Adresse du gymnase: <br />12 rue du 19 mars 1962<br />94200 Ivry-sur-Seine</a>
        <a href="https://t.me/+ecYrrGXHT4UyZjk0" target="_blank">rejoindre le groupe d&apos;échange</a>
        <p>&copy;IvryMontagneEscalade</p>
    </footer>
  )
}

export default Footer