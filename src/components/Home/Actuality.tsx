import React from 'react'
import style from './actuality.module.css'

const Actuality = ({width, height, actuality}) => {
  return (
    <div className={style.actuality} style={{width,height, background: actuality.image, backgroundPosition:'center', backgroundSize:'cover', transition:'1s'}}>
        <h1>
            {actuality.title}
        </h1>
        <p className={style.date}>
            {new Date(actuality.date).toDateString()}
        </p>
        <p>
            {actuality.description}
        </p>
        <a href={actuality.link} className={style.link}>
            Plus
        </a>
    </div>
  )
}

export default Actuality