import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import universeImage from "@/assets/africafun-deux-univers.jpeg.asset.json";
import zemzemImage from "@/assets/sam-zemidjan.jpg";
import tresorsImage from "@/assets/abomey-tresors.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAA — Africafun AI Agency · Agence créative augmentée par l'IA" },
      { name: "description", content: "Africafun AI Agency (AAA) : une agence créative augmentée par l'intelligence artificielle. 3 talents, 3 conseillers et 8 intelligences IA pour explorer le Bénin et raconter l'Afrique au monde." },
      { property: "og:title", content: "AAA — Africafun AI Agency · Agence créative augmentée" },
      { property: "og:description", content: "Une agence créative augmentée par l'IA : 3 talents opérationnels, 3 conseillers et 8 intelligences spécialisées. Une équipe. Une intelligence collective. Une agence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ---------- Données ----------

const talents = [
  {
    id: "romeo",
    name: "Roméo",
    role: "Direction créative & recherche",
    domains: "Vision créative, recherche, concepts, storytelling, univers, direction artistique, validation.",
    short: "Il transforme les intuitions en concepts, personnages, histoires et univers cohérents.",
  },
  {
    id: "cesaire",
    name: "Césaire",
    role: "Vidéo & postproduction",
    domains: "Production audiovisuelle, génération vidéo, montage, son, voix, sous-titres, finition.",
    short: "Il donne forme aux intentions : plans, montage, rythme, voix, son et masters.",
  },
  {
    id: "fleur",
    name: "Fleur",
    role: "Community & Social Media",
    domains: "Distribution, réseaux sociaux, communautés, relation avec le public, apprentissage numérique.",
    short: "Elle relie les œuvres aux plateformes et aux communautés, avec un regard humain.",
    badge: "Jeune talent en formation",
  },
];

const advisers = [
  {
    id: "stephane",
    name: "Stéphane",
    role: "Vision & Ambition",
    domains: "Vision stratégique, recul, ambition, développement.",
  },
  {
    id: "rodrigue",
    name: "Rodrigue",
    role: "Éditorial & impact",
    domains: "Patrimoine, recherche, sens, transmission, impact.",
  },
  {
    id: "legrand",
    name: "Legrand",
    role: "Technique & IA",
    domains: "Architecture, automatisation, outils, sécurité, évolution technologique.",
  },
];

const agents = [
  {
    id: "da",
    number: "01",
    name: "Directeur artistique IA",
    mission: "Garde les personnages, décors et palettes fidèles à chaque univers.",
    duties: ["Exploration visuelle", "Conception de prompts", "Cohérence des univers", "Palettes et styles", "Déclinaisons graphiques"],
    usageWho: "Roméo (concept, direction artistique) · Césaire (production visuelle)",
    usageSteps: "Du concept à la production",
    tools: [
      ["Midjourney", "Création et exploration visuelle"],
      ["Adobe Firefly", "Génération et édition d'images"],
      ["OpenAI", "Recherche visuelle, analyse, prompts, cohérence"],
      ["Runway", "Exploration visuelle et animation"],
    ],
    mainTool: "Midjourney",
    alternatives: ["Adobe Firefly", "Runway", "OpenAI"],
    budget: "≈ 30–100 $ / mois",
    nature: "Abonnements + crédits/API selon les outils",
    sharing: "Le coût correspond à une infrastructure créative partagée. Il ne s'agit pas d'un abonnement spécifique à l'agent.",
    videoEnvelope: false,
  },
  {
    id: "showrunner",
    number: "02",
    name: "Showrunner IA",
    mission: "Transforme une intuition en concepts, arcs narratifs et épisodes.",
    duties: ["Développement des concepts", "Épisodes et arcs", "Personnages", "Dialogues", "Hooks et variantes"],
    usageWho: "Roméo (développement créatif) · relecture des conseillers",
    usageSteps: "Idée → concept → arc → épisode",
    tools: [["OpenAI", "Développement narratif, dialogues, itérations"], ["Gemini", "Recherche et variantes créatives"]],
    mainTool: "OpenAI",
    alternatives: ["Gemini", "Claude (Anthropic)"],
    budget: "≈ 20–100 $ / mois",
    nature: "Principalement API ou abonnement selon le workflow",
    sharing: "Un même abonnement peut également servir au Scénariste, au Gardien de la Continuité et au Social Media Manager.",
    videoEnvelope: false,
  },
  {
    id: "scenariste",
    number: "03",
    name: "Scénariste & storyboarder IA",
    mission: "Décompose l'histoire en scènes, plans, mouvements et atmosphères.",
    duties: ["Écriture", "Découpage en scènes", "Storyboard", "Mouvements de caméra", "Atmosphères"],
    usageWho: "Roméo (écriture) · Césaire (préparation de la production)",
    usageSteps: "Histoire → scènes → storyboard",
    tools: [["OpenAI", "Écriture et découpage"], ["Gemini", "Variantes et recherche"], ["Runway", "Exploration visuelle des plans"], ["Outils spécialisés de storyboard", "Découpage visuel"]],
    mainTool: "OpenAI",
    alternatives: ["Gemini", "Runway", "Outils spécialisés de storyboard"],
    budget: "≈ 20–100 $ / mois hors génération vidéo intensive",
    nature: "Texte + génération visuelle + éventuellement vidéo",
    sharing: "Partage l'infrastructure texte avec le Showrunner et le Gardien de la Continuité.",
    videoEnvelope: false,
  },
  {
    id: "gardien",
    number: "04",
    name: "Gardien de la continuité IA",
    mission: "Conserve la mémoire des personnages, lieux, règles et récits.",
    duties: ["Bibles créatives", "Fiches personnages et lieux", "Chronologies", "Contrôle de cohérence", "Documentation des décisions"],
    usageWho: "Toute l'équipe, à chaque étape de création et de production",
    usageSteps: "En continu, du concept à la diffusion",
    tools: [["OpenAI", "Consultation et synthèse de la mémoire"], ["Gemini", "Vérification de cohérence"], ["Base documentaire", "Bibles et fiches"], ["Stockage cloud", "Base de données AAA"]],
    mainTool: "OpenAI",
    alternatives: ["Gemini", "Base documentaire", "Stockage cloud"],
    budget: "≈ 10–50 $ / mois hors besoins importants de stockage ou d'infrastructure",
    nature: "API + stockage + base documentaire",
    sharing: "La base documentaire est commune à toute l'agence — elle sert les huit intelligences.",
    videoEnvelope: false,
  },
  {
    id: "producteur",
    number: "05",
    name: "Producteur vidéo IA",
    mission: "Transforme les storyboards et images en matière vidéo exploitable.",
    duties: ["Génération de plans", "Animation des images", "Itérations de générations", "Variantes", "Préparation des séquences"],
    usageWho: "Césaire (production vidéo)",
    usageSteps: "Storyboard → générations → séquences",
    tools: [["Runway", "Génération et animation vidéo"], ["Google Veo", "Génération vidéo"], ["Autres modèles vidéo", "Selon les besoins des projets"]],
    mainTool: "Runway",
    alternatives: ["Google Veo", "Autres modèles vidéo", "Kling"],
    budget: "≈ 250–500 $ / mois",
    nature: "Crédits de génération (API ou abonnement selon le modèle)",
    sharing: "Enveloppe dédiée à la production, mutualisable entre les projets de l'agence.",
    videoEnvelope: true,
  },
  {
    id: "monteur",
    number: "06",
    name: "Monteur & audio IA",
    mission: "Assemble le rythme, les voix, le son, les sous-titres et les formats.",
    duties: ["Montage", "Voix", "Mixage audio", "Sous-titrage", "Déclinaisons de formats"],
    usageWho: "Césaire (postproduction)",
    usageSteps: "Rushes → montage → master",
    tools: [["Adobe Premiere", "≈ 23 $ / mois selon la formule"], ["ElevenLabs", "≈ 6 $ / mois et plus selon le niveau d'utilisation"], ["Outils audio IA", "Nettoyage audio, génération musicale"], ["Sous-titrage IA", "Déclinaisons multilingues"]],
    mainTool: "Adobe Premiere",
    alternatives: ["DaVinci Resolve", "ElevenLabs", "Outils de sous-titrage IA"],
    budget: "≈ 30–120 $ / mois selon l'intensité d'utilisation",
    nature: "Logiciel (abonnement) + voix et audio à l'usage",
    sharing: "L'abonnement logiciel est utilisable par l'ensemble de la production.",
    videoEnvelope: false,
    disclaimer: "Tarifs indicatifs à vérifier au moment de l'abonnement.",
  },
  {
    id: "social",
    number: "07",
    name: "Social Media Manager IA",
    mission: "Décline chaque œuvre en contenus adaptés à chaque plateforme.",
    duties: ["Formats par plateforme", "Calendrier éditorial", "Textes et variantes", "Programmation des publications"],
    usageWho: "Fleur (distribution)",
    usageSteps: "Œuvre → déclinaisons → publication",
    tools: [["Metricool", "≈ 20 $ / mois à partir du niveau Starter"], ["n8n", "≈ 20 € / mois et plus selon la formule"], ["OpenAI", "Génération de textes, variantes et calendrier"]],
    mainTool: "Metricool",
    alternatives: ["Buffer", "Later", "Hootsuite"],
    budget: "≈ 40–100 $ / mois selon les outils activés et le volume",
    nature: "Abonnement logiciel + automation + API texte",
    sharing: "n8n et OpenAI sont mutualisés avec le Community & Growth Intelligence IA.",
    videoEnvelope: false,
  },
  {
    id: "growth",
    number: "08",
    name: "Community & Growth Intelligence IA",
    mission: "Observe les réactions du public et nourrit les créations suivantes.",
    duties: ["Analyse des réactions", "Veille", "Signaux communautaires", "Synthèses pour la création"],
    usageWho: "Fleur (communautés) · toute l'équipe (boucle d'apprentissage)",
    usageSteps: "Publication → observation → prochaine création",
    tools: [["Metricool", "Statistiques et reporting"], ["Analytics natifs", "Données des plateformes"], ["OpenAI", "Synthèses et lecture des signaux"], ["n8n", "Automatisation des rapports"], ["Outils d'analyse de données", "Tableaux de bord"]],
    mainTool: "Metricool",
    alternatives: ["Analytics natifs des plateformes", "n8n", "Outils d'analyse de données"],
    budget: "≈ 30–100 $ / mois",
    nature: "Abonnement + analyse de données",
    sharing: "Une partie de l'infrastructure peut être mutualisée avec le Social Media Manager IA.",
    videoEnvelope: false,
  },
];

const horizons = {
  build: ["Équipe", "Conseillers", "Agents IA", "Outils", "Workflows", "Bases documentaires", "Processus de production"],
  measure: ["Temps de production", "Qualité", "Coûts", "Outils", "Workflows", "Performances", "Réactions du public"],
  portfolio: ["Premières œuvres", "Premiers formats", "Premières démonstrations", "Premiers cas d'usage", "Première identité de production", "Premiers résultats mesurables"],
  yearly: [
    "Développer un portfolio identifiable",
    "Produire plusieurs projets forts",
    "Construire une signature créative",
    "Développer une communauté",
    "Démontrer des méthodes de production IA efficaces",
    "Développer des collaborations",
    "Obtenir de premiers clients / partenaires selon le modèle économique choisi",
    "Documenter les workflows",
    "Renforcer la crédibilité de AAA",
    "Installer progressivement la marque",
  ],
};

const timeline = [
  ["0", "Lancement"],
  ["Mois 1", "Construire"],
  ["Mois 2", "Produire"],
  ["Mois 3", "Apprendre"],
  ["Mois 4–6", "Développer"],
  ["Mois 7–9", "Accélérer"],
  ["Mois 10–12", "Installer"],
] as const;

// ---------- Constellation ----------

type NodeKind = "core" | "talent" | "advisor" | "agent";
type CNode = {
  id: string;
  kind: NodeKind;
  label: string;
  sub: string;
  blurb: string;
  number?: string;
  x: number;
  y: number;
};

const CX = 500;
const CY = 500;

function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)] as const;
}

const talentAngles = [0, 120, 240];
const advisorAngles = [60, 180, 300];
const agentAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

const cTalents = talents.map((t, i) => {
  const [x, y] = polar(200, talentAngles[i]!);
  return { ...t, kind: "talent" as NodeKind, id: t.id, label: t.name, sub: t.role, blurb: t.short, x, y };
});

const cAdvisers = advisers.map((a, i) => {
  const [x, y] = polar(320, advisorAngles[i]!);
  return { ...a, kind: "advisor" as NodeKind, id: a.id, label: a.name, sub: a.role, blurb: a.domains, x, y };
});

const cAgents = agents.map((a, i) => {
  const [x, y] = polar(440, agentAngles[i]!);
  return { ...a, kind: "agent" as NodeKind, id: a.id, label: a.name, sub: `Agent ${a.number}`, blurb: a.mission, x, y };
});

const coreNode: CNode = {
  id: "core",
  kind: "core",
  label: "AAA",
  sub: "Africafun AI Agency",
  blurb: "Le centre de coordination : les décisions restent humaines, les intelligences amplifient.",
  x: CX,
  y: CY,
};

const allNodes: CNode[] = [coreNode, ...cTalents, ...cAdvisers, ...cAgents];

const edges: [string, string][] = [
  ["core", "romeo"], ["core", "cesaire"], ["core", "fleur"],
  ["romeo", "showrunner"], ["romeo", "scenariste"], ["romeo", "da"], ["romeo", "gardien"],
  ["cesaire", "producteur"], ["cesaire", "monteur"], ["cesaire", "da"],
  ["fleur", "social"], ["fleur", "growth"],
  ["stephane", "romeo"], ["stephane", "showrunner"], ["stephane", "fleur"],
  ["rodrigue", "scenariste"], ["rodrigue", "gardien"], ["rodrigue", "growth"],
  ["legrand", "producteur"], ["legrand", "monteur"], ["legrand", "social"], ["legrand", "gardien"],
];

function nodeById(id: string) {
  return allNodes.find((n) => n.id === id)!;
}

// ---------- Composants ----------

function AaaMark({ className = "", tone = "sun" }: { className?: string; tone?: "sun" | "navy" | "cream" }) {
  const color = tone === "sun" ? "text-sun" : tone === "navy" ? "text-navy" : "text-cream";
  return <span className={`font-display font-bold tracking-tight ${color} ${className}`}>AAA</span>;
}

function SectionKicker({ children, tone = "" }: { children: React.ReactNode; tone?: string }) {
  return <p className={`section-kicker ${tone}`}>{children}</p>;
}

function Constellation() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const focusId = hovered ?? activeId;
  const connected = focusId ? new Set(edges.filter(([a, b]) => a === focusId || b === focusId).flat()) : null;

  const active = activeId ? nodeById(activeId) : null;
  const activeEdges = activeId ? edges.filter(([a, b]) => a === activeId || b === activeId) : [];
  const activeConnected = activeId ? [...new Set(activeEdges.flat())].filter((id) => id !== activeId).map(nodeById) : [];

  return (
    <section id="constellation" className="border-y border-line bg-navy py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <SectionKicker tone="text-sky lg:col-span-3">Architecture collaborative</SectionKicker>
          <div className="lg:col-span-9">
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">Personne ne travaille seul.<br /><em className="text-sun">Un système, pas une pyramide.</em></h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-cream/70">Une constellation, pas un organigramme. Une même personne se relie à plusieurs intelligences, un agent sert plusieurs personnes, un conseiller éclaire plusieurs fonctions. Survolez la constellation, puis cliquez sur un élément pour ouvrir sa fiche.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="timeline-scroll overflow-x-auto pb-2">
              <div className="mx-auto min-w-[640px] max-w-[860px]">
                <svg viewBox="-150 -90 1300 1180" className="w-full" role="img" aria-label="Constellation AAA : 3 talents, 3 conseillers, 8 intelligences IA autour du centre AAA">
                  {/* Anneaux */}
                  {[200, 320, 440].map((r) => (
                    <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="var(--sky)" strokeOpacity="0.18" strokeDasharray="2 10" />
                  ))}

                  {/* Connexions */}
                  {edges.map(([a, b]) => {
                    const na = nodeById(a);
                    const nb = nodeById(b);
                    const dim = focusId && !connected?.has(a);
                    const lit = focusId ? connected?.has(a) : true;
                    return (
                      <line
                        key={`${a}-${b}`}
                        x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
                        stroke="var(--sun)"
                        strokeOpacity={focusId ? (lit ? 0.85 : 0.08) : 0.25}
                        strokeWidth={lit && focusId ? 2 : 1}
                        className="transition-all duration-300"
                      />
                    );
                  })}

                  {/* Nœuds */}
                  {cAgents.map((n) => {
                    const dx = n.x - CX;
                    const dy = n.y - CY;
                    const anchor: "middle" | "start" | "end" = Math.abs(dx) < 60 ? "middle" : dx > 0 ? "start" : "end";
                    const tx = anchor === "middle" ? n.x : n.x + Math.sign(dx) * 28;
                    const ty = anchor === "middle" ? n.y + Math.sign(dy || 1) * 38 : n.y + 4;
                    const words = n.label.split(" ");
                    const lines: string[] = [];
                    for (let i = 0; i < words.length; i += 2) lines.push(words.slice(i, i + 2).join(" "));
                    return (
                      <g
                        key={n.id}
                        className="cursor-pointer transition-opacity duration-300"
                        style={{ opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.25 : 1 }}
                        onMouseEnter={() => setHovered(n.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setActiveId((v) => (v === n.id ? null : n.id))}
                      >
                        {focusId === n.id && <circle cx={n.x} cy={n.y} r={26} fill="var(--sky)" fillOpacity="0.25" />}
                        <circle cx={n.x} cy={n.y} r={15} fill="var(--sky)" />
                        <text x={n.x} y={n.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--navy)" fontFamily="Space Grotesk, sans-serif">{n.number}</text>
                        {lines.map((line, li) => (
                          <text key={li} x={tx} y={ty + li * 17} textAnchor={anchor} fontSize="14" fontWeight="600" fill="var(--cream)" fontFamily="Space Grotesk, sans-serif">{line}</text>
                        ))}
                      </g>
                    );
                  })}

                  {cAdvisers.map((n) => (
                    <g
                      key={n.id}
                      className="cursor-pointer transition-opacity duration-300"
                      style={{ opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.25 : 1 }}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setActiveId((v) => (v === n.id ? null : n.id))}
                    >
                      {focusId === n.id && <circle cx={n.x} cy={n.y} r={36} fill="none" stroke="var(--sun)" strokeOpacity="0.6" />}
                      <circle cx={n.x} cy={n.y} r={24} fill="var(--navy)" stroke="var(--sun)" strokeWidth="2" />
                      <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--sun)" fontFamily="Space Grotesk, sans-serif">{n.label.slice(0, 2).toUpperCase()}</text>
                      <text x={n.x} y={n.y + 46} textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--cream)" fontFamily="Fraunces, serif">{n.label}</text>
                      <text x={n.x} y={n.y + 64} textAnchor="middle" fontSize="12" fill="var(--cream)" fillOpacity="0.6" fontFamily="Space Grotesk, sans-serif">{n.sub}</text>
                    </g>
                  ))}

                  {cTalents.map((n) => (
                    <g
                      key={n.id}
                      className="cursor-pointer transition-opacity duration-300"
                      style={{ opacity: focusId && focusId !== n.id && !connected?.has(n.id) ? 0.25 : 1 }}
                      onMouseEnter={() => setHovered(n.id)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setActiveId((v) => (v === n.id ? null : n.id))}
                    >
                      {focusId === n.id && <circle cx={n.x} cy={n.y} r={44} fill="var(--sun)" fillOpacity="0.2" />}
                      <circle cx={n.x} cy={n.y} r={32} fill="var(--sun)" />
                      <text x={n.x} y={n.y - 48} textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--cream)" fontFamily="Fraunces, serif">{n.label}</text>
                      <text x={n.x} y={n.y + 56} textAnchor="middle" fontSize="12" fill="var(--cream)" fillOpacity="0.65" fontFamily="Space Grotesk, sans-serif">{n.sub}</text>
                    </g>
                  ))}

                  {/* Centre AAA */}
                  <g className="cursor-pointer" onMouseEnter={() => setHovered("core")} onMouseLeave={() => setHovered(null)} onClick={() => setActiveId("core")}>
                    <circle cx={CX} cy={CY} r={92} fill="var(--sun)" fillOpacity={focusId === "core" || !focusId ? 1 : 0.5} />
                    <text x={CX} y={CY - 8} textAnchor="middle" fontSize="44" fontWeight="700" fill="var(--navy)" fontFamily="Fraunces, serif">AAA</text>
                    <text x={CX} y={CY + 22} textAnchor="middle" fontSize="12" letterSpacing="3" fill="var(--navy)" fillOpacity="0.8" fontFamily="Space Grotesk, sans-serif">AFRICAFUN AI AGENCY</text>
                  </g>
                </svg>

                <div className="mt-4 flex min-h-14 items-center justify-center text-center text-sm text-cream/70">
                  <span>{focusId ? nodeById(focusId).blurb : "Survolez un élément pour lire son rôle — cliquez pour ouvrir sa fiche."}</span>
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.15em]">
                  <span className="flex items-center gap-2"><i className="size-3 rounded-full bg-sun" /> Talents · l'action</span>
                  <span className="flex items-center gap-2"><i className="size-3 rounded-full border-2 border-sun" /> Conseillers · le recul</span>
                  <span className="flex items-center gap-2"><i className="size-3 rounded-full bg-sky" /> Intelligences IA · la capacité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau de détail */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="border border-cream/20 bg-blue-glow/60 p-6 lg:sticky lg:top-8">
              {!active ? (
                <div className="text-cream/70">
                  <SectionKicker tone="text-sun">Fiche d'un élément</SectionKicker>
                  <p className="mt-4 font-display text-2xl">Cliquez sur un nœud</p>
                  <p className="mt-3 text-sm leading-relaxed">Talents, conseillers ou intelligences IA : chaque élément ouvre sa fiche — rôle, connexions et, pour les agents, enveloppe budgétaire.</p>
                  <div className="mt-6 grid gap-2 text-xs">
                    <p className="text-cream/60">Exemples : cliquez sur <span className="text-sun">Roméo</span> pour voir ses 4 intelligences, sur <span className="text-sky">05</span> pour la fiche vidéo.</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sun">
                        {active.kind === "talent" ? "Talent opérationnel" : active.kind === "advisor" ? "Conseiller" : active.kind === "agent" ? `Intelligence IA · Agent ${active.sub}` : "Centre AAA"}
                      </p>
                      <h3 className="mt-2 font-display text-3xl">{active.label}</h3>
                      {active.kind !== "core" && <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-sky">{active.sub}</p>}
                    </div>
                    <button onClick={() => setActiveId(null)} className="text-cream/50 transition-colors hover:text-sun" aria-label="Fermer la fiche">✕</button>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-cream/80">
                    {active.kind === "core" ? active.blurb : active.kind === "agent" ? agents.find((a) => a.id === active.id)!.mission : (active as typeof cTalents[number]).domains}
                  </p>
                  {active.kind === "agent" && (
                    <div className="mt-4 border border-sky/30 bg-navy/60 px-4 py-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-sky">Enveloppe mensuelle estimative</p>
                      <p className="mt-1 font-display text-xl text-cream">{agents.find((a) => a.id === active.id)!.budget}</p>
                    </div>
                  )}
                  {activeConnected.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cream/60">
                        {active.kind === "agent" ? "Utilisée par" : active.kind === "advisor" ? "Éclaire" : "Intelligences reliées"}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeConnected.map((n) => (
                          <button key={n.id} onClick={() => setActiveId(n.id)} className="border border-cream/25 px-3 py-1.5 text-xs transition-colors hover:border-sun hover:text-sun">
                            {n.kind === "agent" ? `${n.number} · ${n.label}` : n.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}


// ---------- Agent fiche ----------

function AgentFiche({ agent }: { agent: (typeof agents)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`flex flex-col border-l-4 bg-canvas p-6 shadow-soft transition-colors ${open ? "border-forest" : "border-line"}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-display text-3xl text-forest">{agent.number}</span>
          <h3 className="mt-2 font-display text-2xl leading-tight">{agent.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">{agent.mission}</p>
        </div>
        <div className="text-right">
          <p className="bg-sun-soft px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-navy">Enveloppe</p>
          <p className="mt-1 text-xs font-bold text-forest">{agent.budget}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {agent.tools.slice(0, 3).map(([t]) => <span key={t} className="border border-line px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-navy/60">{t}</span>)}
        {agent.tools.length > 3 && <span className="border border-line px-2 py-1 text-[10px] font-semibold text-navy/60">+{agent.tools.length - 3}</span>}
      </div>

      <button onClick={() => setOpen((v) => !v)} className="mt-5 flex items-center gap-2 self-start border-b border-forest pb-1 text-xs font-bold uppercase tracking-[0.14em] text-forest transition-colors hover:text-navy" aria-expanded={open}>
        {open ? "Replier la fiche" : "Fiche économique complète"} <ArrowDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-6 grid gap-6 border-t border-line pt-6 text-sm">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Responsabilités</p>
            <ul className="mt-2 grid gap-1.5">
              {agent.duties.map((d) => <li key={d} className="flex items-start gap-2 text-navy/75"><span className="mt-1.5 size-1.5 shrink-0 bg-forest" />{d}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Utilisation dans AAA</p>
            <p className="mt-2 text-navy/75"><strong className="text-navy">Qui :</strong> {agent.usageWho}</p>
            <p className="mt-1 text-navy/75"><strong className="text-navy">Étapes :</strong> {agent.usageSteps}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Outils possibles</p>
            <div className="mt-2 grid gap-2">
              {agent.tools.map(([t, d]) => <div key={t} className="flex flex-wrap items-baseline gap-x-2"><strong className="text-navy">{t}</strong><span className="text-navy/60 text-xs">{d}</span></div>)}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Outil principal recommandé</p>
              <p className="mt-2 inline-block bg-forest px-3 py-1.5 text-xs font-bold text-cream">{agent.mainTool}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Alternatives</p>
              <p className="mt-2 text-xs leading-relaxed text-navy/70">{agent.alternatives.join(" · ")}</p>
            </div>
          </div>
          <div className="border border-line bg-paper p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Enveloppe mensuelle estimative</p>
                <p className="mt-1.5 font-display text-2xl text-forest">{agent.budget}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">Nature du coût</p>
                <p className="mt-1.5 text-xs leading-relaxed text-navy/70">{agent.nature}</p>
              </div>
            </div>
            {agent.videoEnvelope && (
              <div className="mt-4 border-t border-sun bg-sun-soft/60 p-4">
                <p className="font-display text-lg font-bold uppercase tracking-[0.06em] text-red">Enveloppe de production vidéo</p>
                <p className="mt-2 text-xs leading-relaxed text-navy/75">Ce n'est pas un « abonnement Producteur Vidéo IA ». Le coût dépend fortement du nombre de vidéos, de leur durée, du modèle, du nombre de générations, des variantes, des itérations et de la résolution.</p>
              </div>
            )}
            <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-navy/75"><strong className="text-navy">Partage possible :</strong> {agent.sharing}</p>
            {agent.disclaimer && <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-navy/45">{agent.disclaimer}</p>}
          </div>
        </div>
      )}
    </article>
  );
}

// ---------- Page ----------

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-body text-navy selection:bg-sun selection:text-navy">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-cream/20 text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Retour en haut">
            <span className="grid size-11 place-items-center bg-sun font-display text-base font-bold text-navy">AAA</span>
            <span className="font-display text-lg font-semibold">Africafun <i className="font-normal text-sun">AI Agency</i></span>
          </a>
          <nav className="hidden gap-7 text-xs uppercase tracking-[0.16em] md:flex" aria-label="Navigation principale">
            <a href="#constellation" className="transition-colors hover:text-sun">Constellation</a>
            <a href="#agents" className="transition-colors hover:text-sun">Agents IA</a>
            <a href="#horizons" className="transition-colors hover:text-sun">Horizons</a>
            <a href="#univers" className="transition-colors hover:text-sun">Univers</a>
          </nav>
          <a href="#contact" className="border border-cream/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-cream hover:text-navy">Échanger</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy text-cream">
          <img src={universeImage.url} alt="Les univers Zemzem et Les Trésors réunis entre Cotonou et un musée futuriste" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-12 pt-36 sm:px-8 md:pb-16 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-9">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-sun"><span className="h-px w-10 bg-sun" />Agence créative augmentée · Cotonou</p>
              <h1 className="font-display text-[clamp(2.9rem,7vw,7rem)] leading-[0.9]">Africafun<br /><em className="font-medium text-sun">AI Agency</em></h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cream/85 md:text-xl">Une agence créative augmentée par l'intelligence artificielle.</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-cream/70 md:text-base">Une équipe humaine, des conseillers et des intelligences spécialisées collaborent pour transformer des idées en univers, en œuvres, en communautés et en projets culturels.</p>

              <div className="mt-9 flex flex-wrap items-end gap-x-5 gap-y-3">
                <div className="flex items-center font-display text-5xl text-sun md:text-6xl">
                  <span>3</span><Plus className="mx-2 text-cream/60" size={26} /><span>3</span><Plus className="mx-2 text-cream/60" size={26} /><span>8</span>
                </div>
                <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70">3 talents opérationnels · 3 conseillers · 8 intelligences IA</p>
              </div>

              <p className="mt-8 font-display text-xl uppercase leading-snug tracking-[0.08em] text-cream md:text-2xl">Une équipe.<br />Une intelligence collective.<br /><span className="text-sun">Une agence.</span></p>
            </div>
            <div className="flex items-end lg:col-span-3 lg:justify-end">
              <div className="text-right">
                <AaaMark className="text-7xl md:text-8xl" />
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/60">Africafun · AI · Agency</p>
              </div>
            </div>
          </div>
          <a href="#constellation" aria-label="Découvrir la constellation" className="absolute bottom-5 right-5 grid size-11 place-items-center border border-cream/35 text-cream transition-colors hover:bg-sun hover:text-navy sm:right-8 lg:right-10"><ArrowDown size={18} /></a>
        </section>

        {/* CONSTELLATION */}
        <Constellation />

        {/* TALENTS */}
        <section className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Cercle 1 · Les talents</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">Les humains donnent<br /><em className="text-forest">la direction.</em></h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-navy/65">Trois talents opérationnels prennent les décisions et portent la responsabilité. Chacun commande plusieurs intelligences — jamais l'inverse.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {talents.map((talent, i) => (
                <article key={talent.id} className="flex flex-col border-t-4 border-forest bg-canvas p-6 shadow-soft">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-forest">0{i + 1}</span>
                    {talent.badge && <span className="max-w-[9rem] bg-sun px-2 py-1 text-right text-[8px] font-bold uppercase tracking-[0.12em]">{talent.badge}</span>}
                  </div>
                  <h3 className="mt-9 font-display text-3xl">{talent.name}</h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-forest">{talent.role}</p>
                  <p className="mt-5 text-sm leading-relaxed text-navy/70">{talent.short}</p>
                  <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-navy/60">{talent.domains}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONSEILLERS */}
        <section className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Cercle 2 · Les conseillers</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">Des forces d'orientation<br /><em className="text-forest">et d'amplification.</em></h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-navy/65">Autour du système, les conseillers apportent le recul, l'expertise et l'orientation — et amplifient chaque action de l'équipe. Chacun peut intervenir sur plusieurs fonctions.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
              {advisers.map((adviser, i) => (
                <article key={adviser.id} className="bg-navy p-7 text-cream">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-sun">Conseiller 0{i + 1} · {adviser.role}</p>
                    <span className="grid size-8 place-items-center border border-sun/50 font-display text-xs text-sun">AAA</span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl">{adviser.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">{adviser.domains}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AGENTS IA — FICHES */}
        <section id="agents" className="relative overflow-hidden bg-navy py-24 text-cream lg:py-32">
          <div className="network-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="text-sky lg:col-span-3">Cercle 3 · Infrastructure créative</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-none md:text-7xl">Huit intelligences spécialisées.<br /><em className="text-sky">Huit fiches économiques.</em></h2>
                <p className="mt-6 max-w-2xl text-cream/70">Chaque agent est une fonction au service de l'équipe — avec sa mission, ses outils, son enveloppe et ses mutualisations. Aucun abonnement n'est lié à un agent : les outils alimentent plusieurs intelligences.</p>
              </div>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {agents.map((agent) => <AgentFiche key={agent.id} agent={agent} />)}
            </div>
          </div>
        </section>

        {/* CARTE D'INFRASTRUCTURE */}
        <section className="border-y border-line bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="text-center">
              <SectionKicker>Carte d'infrastructure</SectionKicker>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Une technologie peut alimenter<br /><em className="text-forest">plusieurs intelligences.</em></h2>
            </div>
            <div className="mt-14">
              <div className="flex justify-center">
                <div className="bg-navy px-8 py-4 text-center text-cream">
                  <p className="font-display text-3xl font-bold text-sun">AAA</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-cream/70">Africafun AI Agency</p>
                </div>
              </div>
              <div className="mx-auto h-8 w-px bg-line" />
              <div className="grid gap-px bg-line md:grid-cols-3">
                {[
                  ["IA Texte", "OpenAI · Gemini", "Showrunner · Scénariste · Gardien · Social Media"],
                  ["Image", "Midjourney · Firefly", "Directeur artistique · Storyboard"],
                  ["Vidéo", "Runway · Veo", "Producteur vidéo · Scénariste"],
                ].map(([title, tools, agentsList]) => (
                  <div key={title} className="bg-canvas p-6 text-center">
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-forest">{tools}</p>
                    <p className="mt-3 text-xs leading-relaxed text-navy/60">{agentsList}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto h-8 w-px bg-line" />
              <div className="grid gap-px bg-line md:grid-cols-2">
                {[
                  ["Audio", "ElevenLabs", "Monteur & audio IA"],
                  ["Automation", "n8n", "Social Media · Community & Growth"],
                ].map(([title, tool, agentsList]) => (
                  <div key={title} className="bg-canvas p-6 text-center">
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-forest">{tool}</p>
                    <p className="mt-3 text-xs leading-relaxed text-navy/60">{agentsList}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto h-8 w-px bg-line" />
              <div className="bg-forest px-8 py-5 text-center text-cream">
                <p className="font-display text-2xl font-bold">8 AGENTS IA</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/70">Une même source sert plusieurs intelligences — pas 8 abonnements</p>
              </div>
            </div>
          </div>
        </section>

        {/* DEUX HORIZONS */}
        <section id="horizons" className="bg-canvas py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Deux horizons distincts</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">Trois mois pour construire la machine.<br /><em className="text-forest">Douze mois pour construire la référence.</em></h2>
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {/* Horizon 01 */}
              <article className="border-t-4 border-red bg-paper p-8 shadow-soft lg:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red">Horizon 01 · 90 jours</p>
                <h3 className="mt-4 font-display text-4xl leading-tight">Construire, tester, apprendre</h3>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">L'objectif n'est pas encore de devenir une agence de référence. Il est de construire la machine capable de le devenir.</p>
                <div className="mt-8 grid gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">1 · Construire</p>
                    <div className="mt-2 flex flex-wrap gap-2">{horizons.build.map((x) => <span key={x} className="border border-line bg-canvas px-2 py-1 text-[11px] text-navy/70">{x}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">2 · Expérimenter</p>
                    <p className="mt-2 text-sm text-navy/75">Produire les premiers contenus et prototypes autour des univers <strong>Zemzem</strong> et <strong>Les Trésors</strong>.</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">3 · Apprendre</p>
                    <div className="mt-2 flex flex-wrap gap-2">{horizons.measure.map((x) => <span key={x} className="border border-line bg-canvas px-2 py-1 text-[11px] text-navy/70">{x}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">4 · Construire un premier portfolio</p>
                    <div className="mt-2 flex flex-wrap gap-2">{horizons.portfolio.map((x) => <span key={x} className="border border-line bg-canvas px-2 py-1 text-[11px] text-navy/70">{x}</span>)}</div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-navy/50">5 · Trouver le modèle de production</p>
                    <p className="mt-2 text-sm text-navy/75">Identifier les workflows qui fonctionnent réellement.</p>
                  </div>
                </div>
                <blockquote className="mt-8 border-l-4 border-sun pl-5 font-display text-lg italic leading-relaxed text-navy">« Les 90 premiers jours ne servent pas à prouver que nous sommes déjà une agence de référence. Ils servent à construire la machine capable de le devenir. »</blockquote>
              </article>

              {/* Horizon 02 */}
              <article className="border-t-4 border-forest bg-navy p-8 text-cream shadow-soft lg:p-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sun">Horizon 02 · 12 mois</p>
                <h3 className="mt-4 font-display text-4xl leading-tight">Installer AAA comme une agence de référence</h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">Positionner AAA comme une agence reconnue pour sa capacité à combiner :</p>
                <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-display text-lg text-sun">Création + Culture + Technologie + IA + Production + Communautés</p>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.14em] text-cream/50">Objectifs à 12 mois</p>
                <ul className="mt-3 grid gap-2.5">
                  {horizons.yearly.map((x) => <li key={x} className="flex items-start gap-3 text-sm leading-relaxed text-cream/80"><span className="mt-2 size-1.5 shrink-0 bg-sun" />{x}</li>)}
                </ul>
              </article>
            </div>

            {/* Timeline */}
            <div className="timeline-scroll mt-16 overflow-x-auto pb-4">
              <div className="min-w-[980px]">
                <div className="grid grid-cols-12 border-x border-t border-line">
                  <div className="col-span-7 bg-sun-soft px-5 py-4 text-center"><p className="font-display text-2xl font-bold text-red">90 JOURS</p><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/60">Construire la machine</p></div>
                  <div className="col-span-5 bg-paper px-5 py-4 text-center"><p className="font-display text-2xl font-bold text-forest">12 MOIS</p><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/60">Construire la référence</p></div>
                </div>
                <div className="grid grid-cols-7 border-b border-line">
                  {timeline.map(([month, title], i) => (
                    <article key={month} className={`relative px-3 pb-6 pt-7 text-center ${i < 4 ? "bg-sun-soft" : "bg-paper"} border-r border-line last:border-r-0`}>
                      <span className={`absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full border-[3px] border-canvas ${i < 4 ? "bg-red" : "bg-forest"}`} />
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-navy/45">{month}</p>
                      <h4 className="mt-2 font-display text-lg md:text-xl">{title}</h4>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS — MISSION CULTURELLE */}
        <section id="univers" className="bg-paper py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-12">
              <SectionKicker tone="lg:col-span-3">Mission culturelle</SectionKicker>
              <div className="lg:col-span-9">
                <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">Chaque projet est une nouvelle façon<br /><em className="text-forest">d'explorer le Bénin.</em></h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-navy/65">Les projets d'AAA ne sont pas seulement des productions. Ils constituent différentes portes d'entrée vers le Bénin.</p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {/* Zemzem */}
              <article className="group relative min-h-[640px] overflow-hidden bg-sun">
                <img src={zemzemImage} alt="Sam, conducteur de zemidjan, et sa passagère dans les rues de Cotonou" className="absolute inset-0 size-full object-cover object-left transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream md:p-9">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun">Le Bénin que l'on vit · Comédie visuelle · Cotonou</p>
                  <h3 className="font-display text-5xl">Zemzem</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-cream/80">Sam transforme chaque course en aventure. Un héros populaire, un humour physique et une ville pleine de mouvement.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Vie quotidienne", "Beauté", "Simplicité", "Familles", "Villes et villages", "Humour", "Cuisine", "Traditions vivantes", "Relations humaines"].map((x) => <span key={x} className="border border-cream/30 bg-navy/40 px-2 py-1 text-[10px] text-cream/85">{x}</span>)}
                  </div>
                  <blockquote className="mt-6 border-l-2 border-sun pl-4 font-display text-lg italic text-cream/90">« Zemzem nous fait découvrir le Bénin de l'intérieur, à travers la vie de ceux qui l'habitent. »</blockquote>
                </div>
              </article>

              {/* Les Trésors */}
              <article className="group relative min-h-[640px] overflow-hidden bg-navy">
                <img src={tresorsImage} alt="Les trésors royaux d'Abomey s'éveillent dans un musée futuriste" className="absolute inset-0 size-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream md:p-9">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sun">Le Bénin que l'on découvre · Aventure · Histoire · Science-fiction</p>
                  <h3 className="font-display text-5xl">Les Trésors</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-cream/80">Les trésors royaux s'éveillent la nuit. Chaque objet devient une voix et un passage vers l'histoire.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Histoire", "Royaumes", "Patrimoine", "Grandes figures", "Savoirs et sagesses", "Organisation", "Réalisations", "Héritages", "Systèmes de pensée", "Puissance historique"].map((x) => <span key={x} className="border border-cream/30 bg-navy/40 px-2 py-1 text-[10px] text-cream/85">{x}</span>)}
                  </div>
                  <blockquote className="mt-6 border-l-2 border-sun pl-4 font-display text-lg italic text-cream/90">« Les Trésors révèlent la profondeur, la puissance historique et la grandeur du Bénin. »</blockquote>
                </div>
              </article>
            </div>

            {/* Centre commun */}
            <div className="relative mt-5 overflow-hidden">
              <img src={universeImage.url} alt="Les deux univers AAA réunis" className="h-72 w-full object-cover md:h-96" />
              <div className="absolute inset-0 bg-hero-overlay flex items-center justify-center text-center px-6">
                <div>
                  <p className="font-display text-3xl leading-tight text-cream md:text-5xl">Un même pays.<br /><span className="text-sun">Des milliers de façons de le découvrir.</span></p>
                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3 font-display text-xl md:text-2xl">
                    <span className="bg-sun px-4 py-2 text-navy">Bénin</span>
                    <ArrowRight className="text-cream/70" size={22} />
                    <span className="border border-cream/40 px-4 py-2 text-cream">Afrique</span>
                    <ArrowRight className="text-cream/70" size={22} />
                    <span className="border border-cream/40 px-4 py-2 text-cream">Monde</span>
                  </div>
                  <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">« En commençant par le Bénin, AAA explore de nouvelles façons de raconter, transmettre et valoriser les cultures africaines. »</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MESSAGE GLOBAL */}
        <section className="bg-navy py-24 text-cream lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionKicker tone="text-sun">Message global</SectionKicker>
            <h2 className="mt-8 max-w-5xl font-display text-4xl leading-[1.05] md:text-6xl">Nous ne produisons pas seulement des contenus.<br /><em className="text-sun">Nous construisons des façons de regarder.</em></h2>
            <div className="mt-12 grid gap-px bg-cream/15 sm:grid-cols-2 lg:grid-cols-3">
              {["Regarder le quotidien", "Comprendre l'histoire", "Découvrir les savoirs", "Explorer les cultures", "Créer de nouveaux imaginaires", "Partager avec le monde"].map((x, i) => (
                <p key={x} className="bg-blue-glow p-6 font-display text-xl leading-snug md:text-2xl"><span className="mr-3 text-xs font-bold text-sky">0{i + 1}</span>{x}</p>
              ))}
            </div>
          </div>
        </section>

        {/* POSITIONNEMENT FINAL / CONTACT */}
        <section id="contact" className="relative overflow-hidden bg-sun py-24 lg:py-32">
          <Sparkles className="absolute right-[8%] top-16 text-red/30" size={84} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="font-display text-3xl font-bold md:text-4xl">AFRICAFUN AI AGENCY</p>
            <p className="mt-5 max-w-4xl font-display text-2xl leading-snug text-navy md:text-3xl">Une agence créative augmentée par l'intelligence artificielle, qui explore le Bénin pour mieux raconter l'Afrique au monde.</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-9">
                <div className="flex items-center gap-4">
                  <AaaMark tone="navy" className="text-6xl md:text-7xl" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy">Africafun · AI · Agency</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy/70">Une petite équipe. Une grande capacité de création. Transformer une idée en univers, un univers en œuvres et des œuvres en communautés.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-end lg:col-span-3 lg:justify-end">
                <a href="mailto:sb@afrikafun.com" className="inline-flex items-center gap-3 bg-navy px-6 py-4 font-semibold text-cream transition-transform hover:-translate-y-1">Entrer en conversation <ArrowUpRight size={18} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-cream">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div className="flex items-center gap-4">
            <span className="grid size-11 place-items-center bg-sun font-display text-sm font-bold text-navy">AAA</span>
            <p className="font-display text-2xl">Africafun <i className="text-sun">AI Agency</i></p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream/55">Cotonou · Bénin · Création humaine augmentée</p>
        </div>
      </footer>
    </div>
  );
}
