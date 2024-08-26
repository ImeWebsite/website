"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <section>
        <Image 
            src="/logo-accueil.svg"
            alt="Logo Ime"
            width={433}
            height={140}
        />
    </section>
  );
}

export default Hero;
