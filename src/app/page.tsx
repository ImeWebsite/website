import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Home/Hero";
import Actualities from "../components/Home/Actualities";
import Calendar from "../components/Home/Calendar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Actualities />
      <Calendar />
    </main>
  );
}
