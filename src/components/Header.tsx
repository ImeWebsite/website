import Image from 'next/image';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
        <Image 
            src="/contact.svg"
            alt="Contact"
            width="45"
            height="33"
        />
        <div className={styles.headerRight}>
            <a>
                Menu
            </a>
            <Image
                src="/recherche1.svg"
                alt="Recherche"
                width="41"
                height="41"
            />
        </div>
    </header>
  )
}
