import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Home/Hero";
import Actualities from "../components/Home/Actualities";
import Calendar from "../components/Home/Calendar";
import Inscription from "../components/Home/Inscription";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Actualities />
      <Calendar />
      <Inscription />
    </main>
  );
}

export const metadata = {
  title: "Accueil - Ivry Montagne Escalade",
}
