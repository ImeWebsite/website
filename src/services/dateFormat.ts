const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
export const dateFormat = (date: string) => {
  let dateString = '';
  const dateObj = new Date(date);
  const day = dateObj.getDay();
  const dateNb = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  return `${days[day - 1]} ${dateNb} ${months[month]} ${year}`;
}