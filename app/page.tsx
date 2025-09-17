import Timer from "./components/Timer";
import Stack from "./components/Stack";
import Card from "./components/Card";
import Music from "./components/Music";
import { Metadata } from "next";
import { FadeUp } from "./components/FadeUp";

export const metadata: Metadata = {
  title: "Portfolio de Gabriel – Développeur & Passionné de Cybersécurité",
  description:
    "Découvrez mon portfolio : projets en cybersécurité, développement Web et mobile, outils d'automatisation et explorations en IA/ML.",
  keywords:
    "Gabriel, portfolio, développeur, cybersécurité, Golang, Python, Rust, React, DevSecOps, OSINT, outils sécurité, web3, IA, machine learning",
};

export default async function Home() {
  return (
    <FadeUp as="div" className="flex flex-col min-h-screen px-8 pt-12 max-w-3xl mx-auto">
      <h1 className="text-white text-4xl font-bold mb-1">
        Gabriel Zzzzz
      </h1>

      <h2 className="text-gray-300 mb-6">
        (He/Him) • 16y/o Développeur, France • <Timer />
      </h2>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 [max-width:70ch]">
        Salut ! 👋🏻 Moi, c’est Gabriel. Je suis développeur système depuis plus de 3 ans et
        actuellement étudiant en cybersécurité en France. Je développe des applications Web et
        Mobile orientées sécurité, et je consacre mon temps libre à résoudre des katas sur
        Codewars pour perfectionner mes compétences. Passionné par la technologie, la mode et la
        musique, j’aspire à évoluer vers un poste en IA/ML ou en tant que Malware Analyst.
      </p>

      <h3 className="text-white text-xl font-semibold mb-2">
        Mon histoire
      </h3>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 [max-width:70ch]">
        J’ai commencé à coder en 2021, lorsque j’étais en classe de 5ᵉ. J’ai débuté avec Python
        avant de passer à Golang. Aujourd’hui, je travaille principalement avec Python, Golang,
        React, JavaScript et Node.js. Actuellement, j’apprends Rust ainsi que le développement
        d’applications mobiles avec React Native. J’aime travailler sur des projets d’automatisation
        et de sécurité informatique, tels que des outils de reconnaissance, d’OSINT ou
        d’exploitation. Plus tard, j’aimerais m’orienter vers le Web3, l’IA/ML, le DevSecOps ou le
        métier de Malware Analyst.
      </p>

      <h3 className="text-white text-lg font-semibold mb-2">
        Tech Stack
      </h3>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 [max-width:70ch]">
        Ci-dessous, j’ai mis la liste des technologies que j’utilise en développement, programmation
        et sécurité informatique. J’y ai inclus les frameworks, IDE, applications ainsi que divers
        autres logiciels.
      </p>

      <Stack />

      <h3 className="text-white text-lg font-semibold mb-2">
        Mes projets
      </h3>

      <p className="text-zinc-300 text-sm leading-relaxed mb-6 [max-width:70ch]">
        J’ai travaillé sur différents projets liés à la sécurité informatique et à l’automatisation.
        Je contribue rarement à des projets open source, mais vous trouverez ici quelques-uns de mes
        travaux réalisés.
      </p>

      <Card />

      <h3 className="text-white text-lg font-semibold mb-2">
        Musique
      </h3>

      <p className="text-zinc-300 text-sm leading-relaxed [max-width:70ch]">
        J’aime écouter de la musique pendant que je code. Ici vous avez le top de mes artistes
        Spotify.
      </p>

      <Music />
    </FadeUp>
  );
}
