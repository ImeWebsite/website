import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Home/Hero";
// import Actualities from "../components/Home/Actualities";
// import Calendar from "../components/Home/Calendar";
import Gymnase from "../components/Home/Gymnase";
import Inscription from "../components/Home/Inscription";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* <Actualities />
      <Calendar /> */}
      <Inscription />
      <Gymnase />
    </main>
  );
}

export const metadata = {
  title: "Accueil - Ivry Montagne Escalade",
}
