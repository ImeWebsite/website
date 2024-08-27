import React from 'react'
import baseStyle from './base.module.css'
import style from './actualities.module.css'
import Image from 'next/image'
import Actuality from './Actuality'
import {events} from './events'

function getNextEvents(events) {
    // Filtrer les événements avec home à true
    const homeEvents = events.filter(event => event.home);

    // Trier les événements par date croissante
    homeEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Sélectionner les 3 prochains événements
    let nextEvents = homeEvents.slice(0, 3);

    // S'il y a moins de 3 événements, compléter avec les plus récents
    if (nextEvents.length < 3) {
        const remainingEvents = events.filter(event => !homeEvents.includes(event));
        remainingEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
        nextEvents = nextEvents.concat(remainingEvents.slice(0, 3 - nextEvents.length));
    }

    return nextEvents;
}

const Actualities = () => {
    const nextEvents = getNextEvents(events);
  return (
    <div className={style.actualities}>
        <h1 className={baseStyle.title}>Actualités</h1>
        <div className={style.gallery}>
            <Actuality 
                width={556}
                height={580}
                actuality={events[0]}
            />
            <div className={style.galleryRight}>
                <Actuality 
                    width={424}
                    height={278}
                    actuality={events[1]}
                />
                <Actuality 
                    width={424}
                    height={278}
                    actuality={events[2]}
                />
            </div>
        </div>
    </div>
  )
}

export default Actualities