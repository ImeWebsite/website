'use client';
import React, { useState } from 'react';
import baseStyle from './base.module.css';
import style from './calendar.module.css';
import { events } from './events';
import Image from 'next/image';

const months = [
    'de Janvier',
    'de Février',
    'de Mars',
    'd\'Avril',
    'de Mai',
    'de Juin',
    'de Juillet',
    'd\'Août',
    'de Septembre',
    'd\'Octobre',
    'de Novembre',
    'de Décembre'
];

function isEventOngoing(event, dateToCheck) {
  const checkDate = new Date(dateToCheck);
  checkDate.setHours(0, 0, 0, 0);

  const startDate = new Date(event.date);
  const endDate = new Date(event.end);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);

  return checkDate >= startDate && checkDate <= endDate;
}

const Calendar = () => {
  const [activeMonth, setActiveMonth] = useState(new Date());
  const currentYear = new Date().getFullYear();

  const handlePreviousMonth = () => {
    setActiveMonth(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setActiveMonth(prev => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  const calendarEvents = events.filter(event => event.calendar);
  const year = activeMonth.getFullYear();
  const month = activeMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];
  
  for (let i = 0; i < firstDay - 1; i++) {
    calendarDays.push(<td key={`empty-${i}`}></td>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let event = null;
    for (let i = 0; i < calendarEvents.length && event == null; i++) {
      if (isEventOngoing(calendarEvents[i], `${year}-${month + 1}-${day}`)) {
        event = calendarEvents[i];
      }
    }

    calendarDays.push(
      <td key={day} className={style.cell}>
        <p>{day}</p>
        {event != null && (
          <a className={style.eventName}>
            <span style={{ textAlign: 'center' }}>{event.title}</span>
          </a>
        )}
      </td>
    );
  }

  const rows = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    rows.push(
      <tr className={style.row} key={`row-${i / 7}`}>
        {calendarDays.slice(i, i + 7)}
      </tr>
    );
  }

  return (
    <div className={style.container}>
      <h1 className={baseStyle.title}>
        Les sorties {months[month]}{year !== currentYear ? ` ${year}` : ''}
      </h1>
      <div className={style.calendarZone}>
        <Image
          src="fleche-g.svg"
          alt="Fleche gauche"
          width="51"
          height="51"
          onClick={handlePreviousMonth}
          style={{ cursor: 'pointer' }}
        />
        <table className={style.calendar}>
          <thead>
            <tr>
              <th>Lun</th>
              <th>Mar</th>
              <th>Mer</th>
              <th>Jeu</th>
              <th>Ven</th>
              <th>Sam</th>
              <th>Dim</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <Image
          src="fleche-d.svg"
          alt="Fleche droite"
          width="51"
          height="51"
          onClick={handleNextMonth}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Calendar;
