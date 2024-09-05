import React from 'react'
import style from './actuality.module.css'
import baseStyle from '../base.module.css'
import {dateFormat} from '../../services/dateFormat'

type ActualityProps = {
    width:number | string,
    height:number | string,
    actuality:any
}

const Actuality = ({width, height, actuality}: ActualityProps) => {
  return (
    <div className={style.actuality} style={{width,height, background: actuality.image, backgroundPosition:'center', backgroundSize:'cover', transition:'1s'}}>
        <div className={style.content}>
            <h1>
                {actuality.title}
            </h1>
            {actuality.date && <p className={style.date}>
                {dateFormat(actuality.date)}
            </p>}
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