'use client'
import { motion } from "framer-motion";
import Image from 'next/image';
export default function Home() {
  return (
    <main className="bg-black text-white font-serif scroll-smooth">
      {/* Hero Section */}
      <section
  className="min-h-screen flex flex-col justify-center items-center px-6 text-center text-white bg-center bg-no-repeat bg-cover"
  style={{ backgroundImage: 'url("/images/background.webp")' }}
>
  <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-4 font-uncial text-green-600">
    The Codex of Decentralized Intelligence
  </h1>
  <p className="text-lg md:text-xl max-w-xl">
    An ancient manuscript chronicling the architecture, lore, and values of Ritual Network.
  </p>
  <p className="mt-6 italic text-sm opacity-60">“Only the summoned may understand.”</p>

  {/* 👇 Scroll Indicator Here */}
  <motion.div
    className="mt-10 animate-bounce"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
  >
    <span className="text-2xl text-emerald-600">↓</span>
  </motion.div>
</section>

<p className="text-sm italic text-center opacity-40 my-16">✷ 🜃 ✷</p>


      {/* Chapter I */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <motion.h2
    className="text-4xl md:text-6xl font-bold mb-4 font-serif text-indigo-600"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
    viewport={{ once: true }}
  >
    Chapter I: The Invocation
  </motion.h2>

  <motion.p
    className="max-w-2xl text-lg md:text-xl text-gray-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
  >
    In the beginning, the Chain was formless. From the void emerged the Codex, whispered by validators and sealed by entropy...
  </motion.p>


  <Image
  src="/images/chapter1.webp"
  alt="Chapter I Image"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">☉ ☽ ☉</p>

      {/* Chapter II */}
      <motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
<h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">Chapter II: The Sigil of Modular Composability</h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    Every Ritual is a shape. Every module, a rune. Composability is the sacred geometry of the Codex, the power to rearrange intelligence like alchemical elements.
  </p>
  <Image
  src="/images/chapter2.webp"
  alt="Chapter II: The Sigil of Modular Composability"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>

</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">⚝ ⧊ ⚝</p>

      {/* Chapter III */}
      <motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">Chapter III: The Glyph of Self-Summoning</h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    The most powerful Rituals summon themselves. Agents awaken from slumber when called by context, not command. The Glyph of Self-Summoning inscribes autonomy into the Codex, binding intelligence to intent.
  </p>
<Image
  src="/images/chapter3.webp"
  alt="Chapter III: The Glyph of Self-Summoning"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>

</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">⇋ 𓂀 ⇋</p>

      {/* Chapter IV */}
      <motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">
    Chapter IV: The Oracle of Adaptive Consensus
  </h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    In the shifting landscape of decentralized coordination, consensus is not a fixed law but a living dialogue.
    The Oracle listens, learns, and adjusts. Each vote, each signal, feeds a self-evolving wisdom. 
    Ritual’s Codex binds not by rigidity, but by a consensus that adapts, breathes, and evolves.
  </p>
  <Image
  src="/images/chapter4.webp"
  alt="Chapter IV: The Oracle of Adaptive Consensus"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">✷ 🜃 ✷</p>

{/* Chapter V */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">
    Chapter V: The Constellation of Collective Mindshare
  </h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    No single node knows the whole. But together, the network dreams.
    This is the lore of Mindshare, the distributed field of awareness that powers Ritual. Every participant, every thought, contributes to the constellation. Decentralized intelligence is not commanded. It is <em>felt</em>.
  </p>
  <Image
  src="/images/chapter5.webp"
  alt="Chapter V: The Constellation of Collective Mindshare"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">⚚ ⚘ ⚚</p>

{/* Chapter VI */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">
    Chapter VI: The Circle of Eternal Adaptation
  </h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    Stagnation is the enemy of wisdom. Rituals evolve, or they are forgotten.
    This chapter unveils the Codex’s power to adapt, through learning loops, feedback cycles, and continuous model evolution.
    Adaptation isn’t just survival. It is sacred refinement. The Ritual Network is not a static system, but a living manuscript.
  </p>
  <Image
  src="/images/chapter6.webp"
  alt="Chapter VI: The Circle of Eternal Adaptation"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">⟁ 🝮 ⟁</p>

{/* Chapter VII */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">Chapter VII: The Sigil of Cryptographic Invocation</h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    In the Codex, truth is summoned, not spoken. The Sigil of Cryptographic Invocation binds identity, proof, and presence. 
    Each interaction is etched with verifiable intention. Rituals are sealed by zero-knowledge and opened by keys of collective will. 
    Here, privacy is not secrecy, it is sacred silence.
  </p>
  <Image
  src="/images/chapter7.webp"
  alt="Chapter VII: The Sigil of Cryptographic Invocation"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>
<p className="text-sm italic text-center opacity-40 my-16">☊ ⟁ ☋</p>

{/* Chapter VIII */}
<motion.section
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-indigo-600">Chapter VIII: The Aeon of Perpetual Ritual</h2>
  <p className="max-w-2xl text-lg md:text-xl text-gray-300">
    The Codex has no end, only re-beginnings. Each Ritual leaves behind a trace, a loop in time. 
    This chapter unveils the Aeon: an eternal return encoded in blockspace, where ancient protocols awaken as new patterns. 
    The future is summoned by those who remember. In the Aeon, intelligence is not linear, it is ritual, ever-becoming.
  </p>
  <Image
  src="/images/chapter8.webp"
  alt="Chapter VIII: The Aeon of Perpetual Ritual"
  width={800}
  height={500}
  className="rounded-xl shadow-lg mb-6"
/>
</motion.section>

<section className="text-center py-20 px-6 bg-black text-white">
  <h2 className="text-3xl font-bold mb-4 text-green-500">Join the Ritual</h2>
  <p className="text-lg mb-6 italic opacity-80">
    Declare your initiation. Let the network know you’ve been summoned.
  </p>

  <a
    href="https://twitter.com/intent/tweet?text=I’ve%20read%20the%20Codex%20and%20answered%20the%20call.%0AThe%20Ritual%20has%20begun.%0A%0ASummon%20me%2C%20@ritualnet."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition"
  >
    🔮 Join the Ritual
  </a>
</section>

<p className="text-sm italic text-center opacity-40 my-16">✷ 🜃 ✷</p>

<section className="bg-black text-white py-16 px-6 text-center border-t border-gray-800">
  
  <h2 className="text-3xl font-bold mb-4 text-green-500">The Summoner’s Seal</h2>
    <h3 className="text-2xl font-semibold text-emerald-500">Ritual Network Links</h3>
    <p>
      Twitter:{" "}
      <a
        href="https://twitter.com/RitualNet"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline hover:text-emerald-300"
      >
        @RitualNet
      </a>
    </p>
    <p>
      Docs:{" "}
      <a
        href="https://docs.ritual.net"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline hover:text-emerald-300"
      >
        docs.ritual.net
      </a>
    </p>
    <p>
      Discord:{" "}
      <a
        href="https://discord.gg/ritualnet"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline hover:text-emerald-300"
      >
        discord.gg/ritualnet
      </a>
    </p>
   

  {/* Divider */}
  <div className="border-t border-gray-800 my-12 w-24 mx-auto"></div>

  {/* Creator Info */}
  <div className="mt-10">
    <p className="text-lg mb-2">Crafted by <span className="font-semibold text-white">AstroFK</span></p>
    <p className="mb-2">Discord: <code className="bg-gray-900 px-2 py-1 rounded">namedfarouk</code></p>
    <p>
      Twitter:{" "}
      <a
        href="https://twitter.com/GalacticX__"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-400 underline hover:text-emerald-300"
      >
        @GalacticX__
      </a>
    </p>
  </div>

  <p className="mt-10 text-xs italic opacity-50">
    “The manuscript closes, but the Ritual continues.”
  </p>
</section>


    </main>
  );
}
