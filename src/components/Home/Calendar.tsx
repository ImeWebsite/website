// import React from 'react'
// import baseStyle from '../base.module.css'
// import style from './calendar.module.css'
// import { events } from './events'
// import Image from 'next/image'

// const months = [
//     'de Janvier',
//     'de Fevrier',
//     'de Mars',
//     'd\'Avril',
//     'de Mai',
//     'de Juin',
//     'de Juillet',
//     'd\'Aout',
//     'de Septembre',
//     'd\'Octobre',
//     'de Novembre',
//     'de Decembre'
// ];

// function isEventOngoing(event, dateToCheck) {
//   // Convertir la date à vérifier en objet Date et ignorer l'heure
//   const checkDate = new Date(dateToCheck);
//   checkDate.setHours(0, 0, 0, 0); // On met l'heure à 00:00:00 pour ignorer l'heure

//   // Vérifier si un événement est en cours à cette date et si calendar est à true
//       const startDate = new Date(event.date);
//       const endDate = new Date(event.end);

//       // Ignorer l'heure pour les dates de début et de fin
//       startDate.setHours(0, 0, 0, 0);
//       endDate.setHours(0, 0, 0, 0);

//       // Vérifier si la date à vérifier est entre la date de début et la date de fin
//       return checkDate >= startDate && checkDate <= endDate;
// }

// const Calendar = () => {
//   const calendarEvents = events.filter(event => event.calendar);
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = now.getMonth();
  
//   // Get the first day of the month
//   const firstDay = new Date(year, month, 1).getDay();
  
//   // Get the number of days in the month
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   // Create an array for the calendar days
//   const calendarDays = [];
  
//   // Fill in the empty days at the start of the month
//   for (let i = 0; i < firstDay - 1; i++) {
//     calendarDays.push(<td key={`empty-${i}`}></td>);
//   }

//   // Fill in the actual days of the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     let event = null;
//     for(let i = 0; i < calendarEvents.length && event == null; i++) {
//       if(isEventOngoing(calendarEvents[i], `${year}-${month + 1}-${day}`)) {
//         event = calendarEvents[i];
//       }
//     }

//     calendarDays.push(<td key={day} className={style.cell}><p>{day}</p>{event != null && <a className={style.eventName}><span style={{textAlign:'center'}}>{event.title}</span></a>}</td>);
//   }

//   // Split the calendar days into weeks (rows)
//   const rows = [];
//   for (let i = 0; i < calendarDays.length; i += 7) {
//     rows.push(<tr className={style.row} key={`row-${i / 7}`}>{calendarDays.slice(i, i + 7)}</tr>);
//   }

//   return (
//     <div className={style.container}>
//         <h1 className={baseStyle.title}>Les sorties {months[month]}</h1>
//         <div className={style.calendarZone}>
//           <Image
//             src="fleche-g.svg"
//             alt="Fleche gauche"
//             width="51"
//             height="51"
//           />
//         <table className={style.calendar}>
//             <thead>
//                 <tr>
//                     <th>Lun</th>
//                     <th>Mar</th>
//                     <th>Mer</th>
//                     <th>Jeu</th>
//                     <th>Ven</th>
//                     <th>Sam</th>
//                     <th>Dim</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {rows}
//             </tbody>
//         </table>
//         <Image
//             src="fleche-d.svg"
//             alt="Fleche droite"
//             width="51"
//             height="51"
//           />
//         </div>
//     </div>
//   )
// }

// export default Calendar
 