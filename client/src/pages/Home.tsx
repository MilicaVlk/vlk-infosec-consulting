import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

/**
 * VLK InfoSec Consulting — exact user-provided brand direction
 * Dark midnight / violet / magenta / royal-blue surfaces, metallic-gold details,
 * original VLK logo and Direction · Structure · Assurance geometry.
 */

const brand = {
  logo: "/manus-storage/vlk-logo-lockup_dd99316e.png",
  cover: "/manus-storage/vlk-cover_4982402c.png",
  midnight: "#000030",
  violet: "#6000c0",
  magenta: "#d01060",
  blue: "#0050d0",
  gold: "#d4a574",
};

const services = [
  {
    index: "01",
    icon: Compass,
    title: "Strategic Guidance",
    text: "Define the organization's security direction and translate business objectives into a practical cybersecurity strategy focused on what matters most.",
    tone: "gold",
  },
  {
    index: "02",
    icon: BarChart3,
    title: "Risk Management",
    text: "Identify, assess and prioritize cybersecurity risks based on business impact and risk appetite so leadership can make informed decisions.",
    tone: "magenta",
  },
  {
    index: "03",
    icon: Layers3,
    title: "Compliance Leadership",
    text: "Turn regulatory, contractual and industry requirements into sustainable security processes rather than a one-time audit exercise.",
    tone: "blue",
  },
];

const competencies = [
  ["01", "Technical Depth", "Challenge assumptions across security architecture, infrastructure, applications, cloud environments, vulnerabilities and controls."],
  ["02", "Business Acumen", "Connect cybersecurity with business objectives, financial impact, operational priorities and customer expectations."],
  ["03", "Communication Skills", "Translate complex cybersecurity risks into clear language for executives, boards, technical teams and other stakeholders."],
];

const functions = [
  {
    number: "01",
    label: "DIRECTION",
    title: "Strategic Function",
    description: "Define where security needs to go.",
    points: ["Security vision, roadmap and priorities", "Risk appetite and security roadmap", "Board-level communication", "Alignment of security with business goals"],
  },
  {
    number: "02",
    label: "STRUCTURE",
    title: "Governance Function",
    description: "Build the structure that makes security manageable.",
    points: ["Policies, standards and roles", "Reporting frameworks and metrics", "Governance structure and accountability", "Alignment with ISO 27001, NIST and NIS2"],
  },
  {
    number: "03",
    label: "ASSURANCE",
    title: "Oversight Function",
    description: "Ensure security actually happens.",
    points: ["Reviewing technical controls", "Incident response and vendor risk", "Security awareness oversight", "Measured improvements and follow-through"],
  },
];

const responsibilityGroups = [
  {
    label: "OWNS",
    text: "The direction, structure and accountability that make security actionable.",
    items: ["Security Strategy", "Risk Register", "Policy Framework", "Governance Structure", "Board Reporting"],
    color: brand.gold,
  },
  {
    label: "OVERSEES",
    text: "The activities that need consistent challenge, prioritization and assurance.",
    items: ["Security Operations / SOC", "Vulnerability Management", "Incident Response", "Vendor Risk", "Security Awareness"],
    color: brand.magenta,
  },
  {
    label: "ADVISES ON",
    text: "The decisions where independent security judgment protects the business.",
    items: ["Tool Selection", "Architecture Decisions", "Compliance Approach", "Hiring Decisions", "Security Investments"],
    color: brand.blue,
  },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#f2d39b]">
      <span className="h-px w-10 bg-[#d4a574]" />
      <span>{number}</span>
      <span className="text-white/30">/</span>
      <span className="text-white/60">{children}</span>
    </div>
  );
}

function TriangleMotif({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "w-44" : "w-full max-w-[350px]"} aria-label="Direction, Structure and Assurance triangle motif">
      <svg viewBox="0 0 360 300" role="img" className="h-auto w-full">
        <defs>
          <linearGradient id="vlkTriangleGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f2d39b" />
            <stop offset="0.45" stopColor="#d4a574" />
            <stop offset="1" stopColor="#95632e" />
          </linearGradient>
        </defs>
        <path d="M180 28 312 246H48L180 28Z" fill="none" stroke="url(#vlkTriangleGold)" strokeWidth="3" />
        <path d="M180 56 279 220H81L180 56Z" fill="none" stroke="#d4a574" strokeOpacity="0.32" strokeWidth="1" />
        <circle cx="180" cy="28" r="4" fill="#f2d39b" />
        <circle cx="48" cy="246" r="4" fill="#f2d39b" />
        <circle cx="312" cy="246" r="4" fill="#f2d39b" />
        {!compact && (
          <>
            <text x="180" y="18" textAnchor="middle" fill="#f2d39b" fontSize="12" fontWeight="700" letterSpacing="2">DIRECTION</text>
            <text x="44" y="272" textAnchor="middle" fill="#f2d39b" fontSize="12" fontWeight="700" letterSpacing="2">ASSURANCE</text>
            <text x="316" y="272" textAnchor="middle" fill="#f2d39b" fontSize="12" fontWeight="700" letterSpacing="2">STRUCTURE</text>
          </>
        )}
      </svg>
    </div>
  );
}

function NetworkOrnament() {
  return (
    <svg viewBox="0 0 500 240" className="pointer-events-none absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
      <g fill="none" stroke="#d4a574" strokeOpacity="0.32" strokeWidth="1">
        <path d="M0 172 98 68l94 72 105-102 92 98 111-70" />
        <path d="M0 218 122 118l92 34 120-108 80 92 86-72" />
      </g>
      <g fill="#d4a574">
        <circle cx="98" cy="68" r="3" /><circle cx="192" cy="140" r="3" /><circle cx="297" cy="38" r="3" /><circle cx="389" cy="136" r="3" /><circle cx="500" cy="66" r="3" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000030] text-[#fbf8ef]">
      <header className="sticky top-0 z-50 border-b border-[#d4a574]/25 bg-[#000030]/95 backdrop-blur-xl">
        <div className="container flex min-h-[78px] items-center justify-between gap-8">
          <a href="#top" aria-label="VLK InfoSec Consulting home" className="group flex items-center">
            <img src={brand.logo} alt="VLK InfoSec Consulting" className="h-14 w-auto max-w-[180px] object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <a href="#services" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Services</a>
            <a href="#competencies" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Competencies</a>
            <a href="#functions" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Functions</a>
            <a href="#contact" className="border-l border-[#d4a574]/35 pl-7 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f2d39b] hover:text-white">Contact</a>
          </nav>
          <a href="mailto:milica@vlk-infosec.com" className="hidden border border-[#d4a574]/60 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#f2d39b] hover:bg-[#d4a574] hover:text-[#000030] sm:inline-flex">milica@vlk-infosec.com</a>
        </div>
      </header>

      <main id="top">
        <section className="vlk-wave-surface vlk-grid relative isolate overflow-hidden border-b border-[#d4a574]/30">
          <NetworkOrnament />
          <div className="container relative z-10 grid items-center gap-14 py-20 lg:min-h-[700px] lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
            <div className="max-w-xl">
              <SectionLabel number="00">vCISO · RISK ASSESSMENT · GRC · COMPLIANCE</SectionLabel>
              <h1 className="display-heading mt-7 text-5xl leading-[0.98] text-[#fbf8ef] sm:text-6xl lg:text-[5.6rem]">Strategic security leadership for a changing world.</h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">Virtual CISO services that connect cybersecurity direction with business reality, governance and measurable assurance.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#functions" className="inline-flex items-center gap-3 bg-[#d4a574] px-6 py-4 text-sm font-bold text-[#000030] hover:-translate-y-1 hover:bg-[#f2d39b] hover:shadow-[0_12px_32px_rgba(212,165,116,0.24)]">Explore Direction · Structure · Assurance <ArrowRight className="h-4 w-4" /></a>
                <a href="mailto:milica@vlk-infosec.com" className="inline-flex items-center gap-3 border border-[#d4a574]/60 px-6 py-4 text-sm font-bold text-[#f2d39b] hover:border-[#f2d39b] hover:bg-white/5">Contact VLK <ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/45"><span className="h-2 w-2 rounded-full bg-[#e02060] shadow-[0_0_12px_#e02060]" />vlk-infosec.com</div>
            </div>
            <div className="relative lg:translate-y-5">
              <div className="vlk-frame overflow-hidden p-2 sm:p-3">
                <img src={brand.cover} alt="VLK InfoSec Consulting brand cover showing the Direction, Structure and Assurance model" className="h-auto w-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-12 hidden opacity-90 lg:block"><TriangleMotif compact /></div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-[#050518] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionLabel number="01">WHAT A vCISO DOES</SectionLabel>
                <h2 className="display-heading mt-7 max-w-md text-4xl leading-[1.02] sm:text-5xl">Security becomes manageable when someone owns the whole picture.</h2>
                <p className="mt-7 max-w-sm leading-7 text-white/60">A vCISO brings executive-level focus to strategy, risk and compliance while creating the structure needed for security to become repeatable and measurable.</p>
                <div className="mt-10 flex items-center gap-4"><div className="h-px w-20 bg-gradient-to-r from-[#d4a574] to-transparent" /><Network className="h-5 w-5 text-[#d4a574]" /><span className="text-xs uppercase tracking-[0.18em] text-white/45">Business-aligned security</span></div>
              </div>
              <div className="grid gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const color = service.tone === "gold" ? brand.gold : service.tone === "magenta" ? brand.magenta : brand.blue;
                  return (
                    <article key={service.index} className="vlk-frame group grid gap-6 p-6 transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[3rem_3rem_1fr_auto] sm:items-start" style={{ borderTopColor: color }}>
                      <span className="text-sm font-bold tracking-[0.2em]" style={{ color }}>{service.index}</span>
                      <Icon className="h-6 w-6" style={{ color }} />
                      <div><h3 className="text-xl font-bold text-[#fbf8ef]">{service.title}</h3><p className="mt-3 max-w-xl leading-7 text-white/60">{service.text}</p></div>
                      <ArrowUpRight className="h-5 w-5 text-white/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2d39b]" />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="competencies" className="vlk-wave-surface relative overflow-hidden border-y border-[#d4a574]/20 py-24 lg:py-32">
          <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionLabel number="02">CORE COMPETENCIES</SectionLabel>
              <h2 className="display-heading mt-7 max-w-md text-4xl leading-[1.02] sm:text-5xl">Technical credibility. Business judgment. Clear communication.</h2>
              <p className="mt-7 max-w-sm leading-7 text-white/65">Trust is built quickly when security advice is deep enough for technical teams and clear enough for leadership.</p>
              <div className="mt-12 flex items-center gap-8"><TriangleMotif compact /><div className="h-28 w-px bg-gradient-to-b from-[#d4a574] to-transparent" /></div>
            </div>
            <div className="vlk-frame overflow-hidden">
              <div className="grid divide-y divide-[#d4a574]/20">
                {competencies.map(([index, title, text]) => (
                  <article key={index} className="group grid gap-5 p-6 sm:grid-cols-[3rem_1fr] sm:p-8">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#f2d39b]">{index}</span>
                    <div><h3 className="text-2xl font-bold text-[#fbf8ef] transition-colors group-hover:text-[#f2d39b]">{title}</h3><p className="mt-3 max-w-xl leading-7 text-white/60">{text}</p></div>
                  </article>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#d4a574]/20 bg-[#000030]/50 px-6 py-4 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:px-8"><span>VLK / Trusted advisor</span><span className="text-[#f2d39b]">Depth · Judgment · Clarity</span></div>
            </div>
          </div>
        </section>

        <section id="functions" className="relative overflow-hidden bg-[#000030] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel number="03">THE 3 CORE FUNCTIONS OF A vCISO</SectionLabel>
              <h2 className="display-heading mt-7 max-w-md text-4xl leading-[1.02] sm:text-5xl">Direction. Structure. Assurance.</h2>
              <p className="mt-7 max-w-sm leading-7 text-white/65">Not by doing every technical task personally—but by ensuring the right security work is prioritized, performed and measured.</p>
              <div className="mt-10"><TriangleMotif /></div>
            </div>
            <div className="grid gap-4">
              {functions.map((item) => (
                <article key={item.number} className="vlk-frame group p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#d4a574]/70 bg-[#050518] text-lg font-bold text-[#f2d39b] transition-colors group-hover:bg-[#d4a574] group-hover:text-[#000030]">{item.number}</div>
                    <div><div className="flex flex-wrap items-baseline gap-x-4 gap-y-2"><h3 className="text-2xl font-bold text-[#fbf8ef]">{item.title}</h3><span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">{item.label}</span></div><p className="mt-2 font-medium text-white/55">{item.description}</p><ul className="mt-5 grid gap-3 md:grid-cols-2">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-white/62"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#d4a574]" />{point}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#050518] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionLabel number="04">vCISO RESPONSIBILITY MAP</SectionLabel>
              <h2 className="display-heading mt-7 max-w-md text-4xl leading-[1.02] sm:text-5xl">Clear ownership. Better security decisions.</h2>
              <p className="mt-7 max-w-sm leading-7 text-white/60">A practical line of sight between leadership intent and security execution.</p>
              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#f2d39b]"><ShieldCheck className="h-5 w-5" />Accountability that can be measured.</div>
            </div>
            <div className="grid gap-4">
              {responsibilityGroups.map((group) => (
                <article key={group.label} className="vlk-frame p-6 sm:p-8" style={{ borderLeftColor: group.color }}>
                  <div className="grid gap-5 md:grid-cols-[8rem_1fr]">
                    <span className="text-sm font-bold tracking-[0.2em]" style={{ color: group.color }}>{group.label}</span>
                    <div><p className="max-w-xl leading-7 text-white/60">{group.text}</p><ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">{group.items.map((item) => <li key={item} className="flex gap-3 text-sm font-medium text-[#fbf8ef]"><span className="mt-2 h-1.5 w-1.5 rotate-45" style={{ backgroundColor: group.color }} />{item}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="vlk-wave-surface relative overflow-hidden border-t border-[#d4a574]/30 py-24 lg:py-28">
          <div className="container relative z-10 grid items-end gap-10 md:grid-cols-[1fr_auto]">
            <div><SectionLabel number="05">CONVERSATION</SectionLabel><h2 className="display-heading mt-7 max-w-3xl text-4xl leading-[1.02] sm:text-5xl">Bring senior security leadership into the room.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Let's discuss how vCISO services can align cybersecurity with business objectives and build a security program that can be trusted.</p><div className="mt-8 flex flex-wrap gap-5 text-sm text-white/65"><span>vlk-infosec.com</span><span className="text-[#d4a574]">·</span><a href="mailto:milica@vlk-infosec.com" className="text-[#f2d39b] hover:text-white">milica@vlk-infosec.com</a></div></div>
            <a href="mailto:milica@vlk-infosec.com" className="inline-flex items-center justify-center gap-3 bg-[#d4a574] px-7 py-4 text-sm font-bold text-[#000030] hover:-translate-y-1 hover:bg-[#f2d39b] hover:shadow-[0_12px_32px_rgba(212,165,116,0.24)]">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4a574]/20 bg-[#000020] py-12">
        <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><img src={brand.logo} alt="VLK InfoSec Consulting" className="h-16 w-auto max-w-[190px] object-contain object-left" /><p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Strategic CISO leadership · Risk assessment · GRC · Compliance.</p></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">Navigate</p><div className="mt-4 grid gap-2 text-sm text-white/55"><a href="#services" className="hover:text-white">Services</a><a href="#competencies" className="hover:text-white">Competencies</a><a href="#functions" className="hover:text-white">Direction · Structure · Assurance</a></div></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">Contact</p><div className="mt-4 grid gap-2 text-sm text-white/55"><a href="mailto:milica@vlk-infosec.com" className="hover:text-white">milica@vlk-infosec.com</a><a href="https://vlk-infosec.com" className="hover:text-white">vlk-infosec.com</a><span>Privacy · Terms</span></div></div>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-white/35">© 2026 VLK InfoSec Consulting. All rights reserved.</div>
      </footer>
    </div>
  );
}
