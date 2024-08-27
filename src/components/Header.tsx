'use client';
import Image from 'next/image';
import styles from './header.module.css';
import { useState } from 'react';

export const Header = () => {
    const [status, setStatus] = useState('default');
  return (
    <header className={(status == 'default' ? styles.red : styles.green) + ' '+ styles.container} style={{zIndex:7}}>
        <div className={styles.header}>
            <Image 
                src="/contact.svg"
                alt="Contact"
                width="45"
                height="33"
            />
            <div className={styles.headerRight}>
                {status == 'menu' ? (
                    <Image 
                        src="fermer.svg"
                        alt="Fermer"
                        width="39"
                        height="41"
                        onClick={() => setStatus('default')}
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
                    />
                ):(
                <Image
                    src="/recherche1.svg"
                    alt="Recherche"
                    width="41"
                    height="41"
                    onClick={() => setStatus('search')}
                />
                )}
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
    </header>
  )
}
