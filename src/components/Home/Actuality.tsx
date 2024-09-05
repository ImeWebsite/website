import React from 'react'
import style from './actuality.module.css'
import baseStyle from './base.module.css'
import {dateFormat} from '../../services/dateFormat'

const Actuality = ({width, height, actuality}) => {
  return (
    <div className={style.actuality} style={{width,height, background: actuality.image, backgroundPosition:'center', backgroundSize:'cover', transition:'1s'}}>
        <div className={style.content}>
            <h1>
                {actuality.title}
            </h1>
            <p className={style.date}>
                {dateFormat(actuality.date)}
            </p>
            <p>
                {actuality.description}
            </p>
            <a href={actuality.link} className={baseStyle.link}>
                Plus
            </a>
        </div>
    </div>
  )
}

export default Actuality