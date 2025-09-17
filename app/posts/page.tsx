import React from 'react';
import Card from "../components/Card";
import { FadeUp } from "../components/FadeUp";

export default function Posts() {
  return (
    <FadeUp as="div" className="flex flex-col min-h-screen px-8 pt-12 max-w-3xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-1">
          Blog: nouvelles technologies, update, ...
        </h1>
        <p className="text-zinc-300 text-md leading-relaxed mb-6 [max-width:70ch]">
          Découvrez ici l’ensemble de mes projets de développement réalisés à partir du 17 septembre 2025. 
          Tous sont publiés en open source sur GitHub et conçus pour être facilement réutilisables.
        </p>
        <Card/>
    </FadeUp>
  )
}
