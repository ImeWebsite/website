import baseStyle from '../base.module.css'
import style from './inscription.module.css'

const Inscription = () => {
  return (
    <div className={style.container}>
        <h1 className={baseStyle.title}>Inscription</h1>
        <p className={style.article}>Comment adhérer au club et obtenir sa licence FSGT? On se retrouve à plusieurs rendez-vous pour la rentrée. Cette année, toute la procédure d’inscription peut être faite en ligne !</p>
        <a href="/inscription" className={baseStyle.link}>
                Plus
        </a>
    </div>
  )
}

export default Inscription