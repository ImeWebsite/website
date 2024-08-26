import React from 'react'
import baseStyle from './base.module.css'
import style from './actualities.module.css'
import Image from 'next/image'
import Actuality from './Actuality'

const Actualities = () => {
  return (
    <div className={style.actualities}>
        <h1 className={baseStyle.title}>Actualités</h1>
        <div className={style.gallery}>
            <Actuality 
                width={556}
                height={580}
                actuality={{
                    image: 'url(/actu1.png)',
                    title: 'Sortie escalade',
                    date: '2024-08-23',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    link: '/collection'
                }}
            />
            <div className={style.galleryRight}>
                <Actuality 
                    width={424}
                    height={278}
                    actuality={{
                        image: 'url(/actu2.png)',
                        title: 'Sortie escalade',
                        date: '2024-08-23',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        link: '/collection'
                    }}
                />
                <Actuality 
                    width={424}
                    height={278}
                    actuality={{
                        image: 'url(/actu3.png)',
                        title: 'Sortie escalade',
                        date: '2024-08-23',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        link: '/collection'
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Actualities