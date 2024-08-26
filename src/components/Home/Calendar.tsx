import React from 'react'
import baseStyle from './base.module.css'

const months = [
    'de Janvier',
    'de Fevrier',
    'de Mars',
    'd\'Avril',
    'de Mai',
    'de Juin',
    'de Juillet',
    'd\'Aout',
    'de Septembre',
    'd\'Octobre',
    'de Novembre',
    'de Decembre'
];

const Calendar = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  
  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  
  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create an array for the calendar days
  const calendarDays = [];
  
  // Fill in the empty days at the start of the month
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(<td key={`empty-${i}`}></td>);
  }

  // Fill in the actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(<td key={day}>{day}</td>);
  }

  // Split the calendar days into weeks (rows)
  const rows = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    rows.push(<tr key={`row-${i / 7}`}>{calendarDays.slice(i, i + 7)}</tr>);
  }

  return (
    <div>
        <h1 className={baseStyle.title}>Les sorties {months[month]}</h1>
        <table>
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
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>
  )
}

export default Calendar
 