import React from 'react'
import style from './step.module.css'
import baseStyle from '..//base.module.css'

type StepProps = {
    index: number,
    step: any
}

const Step = ({index, step}:StepProps) => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>{index}.</h1>
        <h2 className={style.subtitle} dangerouslySetInnerHTML={{__html: step.title}}></h2>
        <ul>
        {step.links.map((link:any) => (
            <li key={link.url}><a href={link.url} className={baseStyle.link} target="_blank">{link.title}</a></li>
        ))}
        </ul>
        <ol>
            {
                step.steps.map((substep:any, index:any) => (
                    <li key={index}>
                        {step.steps.length > 1 && <h2>{index + 1}.</h2>}
                        <p dangerouslySetInnerHTML={{__html: substep}}></p>
                    </li>
                ))
            }
        </ol>
    </div>
  )
}

export default Step