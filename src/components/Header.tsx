'use client';
import Image from 'next/image';
import styles from './header.module.css';
import { useState } from 'react';

export const Header = () => {
    const [status, setStatus] = useState('default');
  return (
    <header className={(status == 'default' ? styles.red : styles.green) + ' '+ styles.container} style={{...{zIndex:7}, ...(status=='default' ? {borderBottom: '3px solid black'} : {})}}>
        <div className={styles.header}>
            {status == 'contact' ? (
                <Image 
                    src="/fermer.svg"
                    alt="Fermer"
                    width="39"
                    height="41"
                    onClick={() => setStatus('default')}
                    className={styles.icon}
                />
            ):(
                <Image 
                    src="/contact.svg"
                    alt="Contact"
                    width="45"
                    height="33"
                    onClick={() => setStatus('contact')}
                    className={styles.icon}
                />
            )    
            }
            <a href="/">
            <Image 
                src="/logo-header.svg"
                alt="Logo"
                width="152"
                height="48"
                className={styles.logo}
            />
            </a>
            <div className={styles.headerRight}>
                {/* {status == 'menu' ? (
                    <Image 
                        src="fermer.svg"
                        alt="Fermer"
                        width="39"
                        height="41"
                        onClick={() => setStatus('default')}
                        className={styles.icon}
                    />
                ):(
                    <a onClick={() => setStatus('menu')}>
                        Menu
                    </a>
                )}
                {status == 'search' ? (
                    <Image 
                        src="fermer.svg"
                        alt="Fermer"
                        width="39"
                        height="41"
                        onClick={() => setStatus('default')}
                        className={styles.icon}
                    />
                ):(
                <Image
                    src="/recherche1.svg"
                    alt="Recherche"
                    width="41"
                    height="41"
                    onClick={() => setStatus('search')}
                    className={styles.icon}
                />
                )} */}
            </div>
        </div>
        {status == 'menu' && (
            <p>
                Menu
            </p>
        )}
        {status == 'search' && (
            <p>
                Search
            </p>
        )}
        {status == 'contact' && (
            <div className={styles.contact}>
                <a href="mailto:Ivrymontagneescalade@gmail.com" target="_blank">Ivrymontagneescalade@gmail.com</a>
                <a href="https://maps.app.goo.gl/9H5zUejzkuFBR1NJ6" target="_blank">Adresse du gymnase: <br />28 Bd de Brandebourg <br /> 94200 Ivry-sur-Seine</a>
                <a href="https://t.me/+ecYrrGXHT4UyZjk0" target="_blank">Rejoindre le groupe d&apos;échange</a>
            </div>
        )}
    </header>
  )
}
