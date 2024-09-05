import baseStyle from './base.module.css'
import style from './inscription.module.css'

const Inscription = () => {
  return (
    <div className={style.container}>
        <h1 className={baseStyle.title}>Inscription</h1>
        <p className={style.article}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <a href="/collection" className={baseStyle.link}>
                Plus
        </a>
    </div>
  )
}

export default Inscription