import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Layers3,
  ShieldCheck,
} from "lucide-react";

/**
 * VLK InfoSec Consulting — exact user-provided brand identity
 * Using the user's approved shield logo with CSS-only reference-inspired atmosphere.
 */

const brand = {
  logo: "/assets/vlk-logo.png",
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

const coreExpertiseList = [
  "vCISO Services",
  "Cyber Risk Assessments",
  "Governance, Risk & Compliance (GRC)",
  "ISO 27001 & Frameworks",
  "NIST Cybersecurity Framework",
  "Business Impact Analysis (BIA)",
  "Business Continuity Planning",
  "Disaster Recovery",
  "Security Governance",
  "Security Policies & Standards",
  "Third-Party Risk",
  "Security Strategy",
];

const telecomExperienceList = [
  "IPTV & Headend (Middleware, VOD, nPVR)",
  "Access & Distributed Infrastructure",
  "Radio Network Optimization (GSM, UMTS, LTE)",
  "Systems Integration & Vendor Coordination",
  "High Availability & Production Resilience",
];

const competencies = [
  ["01", "Technical Depth", "Challenge assumptions across security architecture, infrastructure, applications, cloud environments, vulnerabilities and controls."],
  ["02", "Business Acumen", "Connect cybersecurity with business objectives, financial impact, operational priorities and customer expectations."],
  ["03", "Communication Skills", "Translate complex cybersecurity risks into clear language for executives, boards, technical teams and other stakeholders."],
];

const executiveSectors = [
  {
    industry: "Small Business",
    quote: "We are a small company. Why would anyone target us?",
    reality: "Ransomware locks files, email stops working, and customer data is exposed. Questions instantly shift to operational continuity, backups, regulatory notification, and decision-making authority.",
  },
  {
    industry: "SaaS Company",
    quote: "Our platform is secure. But what happens if a customer is compromised through us?",
    reality: "Tenant isolation, asset visibility, environment separation, and contractual compliance become critical when security extends directly into your product delivery.",
  },
  {
    industry: "FinTech & Financial Services",
    quote: "Money hasn’t been lost yet. Are we sure?",
    reality: "Suspicious transactions, compromised privileged accounts, or third-party incidents require immediate authority, regulatory reporting, and trustworthy validation.",
  },
  {
    industry: "Healthcare",
    quote: "Can we still safely provide care?",
    reality: "Ransomware taking clinical systems offline turns cybersecurity instantly into an operational continuity and patient safety crisis.",
  },
  {
    industry: "Telecom & Critical Infrastructure",
    quote: "What happens if the network cannot be trusted?",
    reality: "Signalling integrity, subscriber authentication, core segmentation, and degraded-mode resilience determine whether critical utility services survive an attack.",
  },
  {
    industry: "Manufacturing & OT",
    quote: "Can we safely keep the factory running?",
    reality: "When IT incidents reach production environments, safety, OT/IT segmentation, manual continuity, and ERP availability dictate operational survival.",
  },
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
    <div className="flex flex-wrap items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#f2d39b] sm:gap-3 sm:text-[0.68rem] sm:tracking-[0.24em]">
      <span className="h-px w-8 bg-[#d4a574] sm:w-10" />
      <span>{number}</span>
      <span className="text-white/30">/</span>
      <span className="text-white/60">{children}</span>
    </div>
  );
}

function BrandSignature({ children }: { children: string }) {
  return (
    <div className="vlk-logo-signature mt-6">
      <img className="vlk-signature-logo" src={brand.logo} alt="" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function HeroBrandMark() {
  return (
    <div className="vlk-hero-mark" aria-label="VLK InfoSec Consulting">
      <div className="vlk-hero-logo-frame">
        <img src={brand.logo} alt="VLK InfoSec Consulting shield logo" />
      </div>
      <span className="vlk-wordmark">VLK InfoSec Consulting</span>
    </div>
  );
}

function TriangleMotif() {
  return (
    <div className="w-full max-w-[280px]" aria-label="Direction, Structure and Assurance triangle motif">
      <svg viewBox="0 0 360 300" role="img" className="h-auto w-full">
        <defs>
          <linearGradient id="vlkTriangleGold" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f2d39b" />
            <stop offset="0.45" stopColor="#d4a574" />
            <stop offset="1" stopColor="#95632e" />
          </linearGradient>
        </defs>
        <path d="M180 36 286 226H74L180 36Z" fill="none" stroke="url(#vlkTriangleGold)" strokeWidth="4" strokeLinejoin="round" />
        <path d="M180 62 255 204H105L180 62Z" fill="none" stroke="#d4a574" strokeOpacity="0.24" strokeWidth="1.25" />
        <circle cx="180" cy="36" r="3.5" fill="#f2d39b" />
        <circle cx="74" cy="226" r="3.5" fill="#f2d39b" />
        <circle cx="286" cy="226" r="3.5" fill="#f2d39b" />
        <text x="180" y="24" textAnchor="middle" fill="#f2d39b" fontSize="11" fontWeight="700" letterSpacing="1.8">STRUCTURE</text>
        <text x="109" y="151" textAnchor="middle" fill="#f2d39b" fontSize="11" fontWeight="700" letterSpacing="1.6" transform="rotate(-59 109 151)">DIRECTION</text>
        <text x="251" y="151" textAnchor="middle" fill="#f2d39b" fontSize="11" fontWeight="700" letterSpacing="1.6" transform="rotate(59 251 151)">ASSURANCE</text>
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
          <a href="#top" aria-label="VLK InfoSec Consulting home" className="group flex items-center gap-3">
            <img src={brand.logo} alt="VLK InfoSec Consulting shield logo" className="h-12 w-12 shrink-0 rounded-full border border-[#d4a574]/50 object-cover shadow-md sm:h-14 sm:w-14" />
            <span className="vlk-wordmark">VLK InfoSec Consulting</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <a href="#about" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">About</a>
            <a href="#services" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Services</a>
            <a href="#executive-insights" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Executive Insights</a>
            <a href="#competencies" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Competencies</a>
            <a href="#functions" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/65 hover:text-[#f2d39b]">Functions</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="vlk-wave-surface vlk-grid relative isolate overflow-hidden border-b border-[#d4a574]/30">
          <NetworkOrnament />
            <div className="container relative z-10 flex min-h-[500px] items-center justify-center py-20 lg:min-h-[620px] lg:py-24">
            <div className="max-w-4xl text-center">
              <HeroBrandMark />
              <div className="flex justify-center"><SectionLabel number="00">vCISO · RISK ASSESSMENT · GRC · COMPLIANCE</SectionLabel></div>
              <h1 className="display-heading mt-6 max-w-[18ch] text-center text-4xl leading-[1.02] text-[#fbf8ef] sm:text-5xl lg:mt-7 lg:text-7xl">Strategic security leadership for a changing world.</h1>
              <p className="vlk-section-copy mx-auto mt-8 max-w-lg">Virtual CISO services that connect cybersecurity direction with business reality, governance and measurable assurance.</p>
              <div className="mt-12 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/45"><span className="h-2 w-2 rounded-full bg-[#e02060] shadow-[0_0_12px_#e02060]" />vlk-infosec.com</div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[#000030] py-24 lg:py-32 border-b border-[#d4a574]/20">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel number="01">ABOUT THE FOUNDER</SectionLabel>
              <BrandSignature>Founder-led security advisory</BrandSignature>
              <h2 className="display-heading mt-7">Technology experience. Cybersecurity perspective. Business-focused security.</h2>
              <p className="vlk-section-copy mt-8">
                VLK InfoSec Consulting was founded by Milica Vlk, a telecommunications engineer and cybersecurity professional with 17+ years of experience across technology, infrastructure, engineering, project management, and information security.
              </p>
              <p className="mt-6 leading-7 text-white/65">
                My career started close to the technology itself—building, operating, troubleshooting, and improving complex technology environments long before cybersecurity became the discipline it is today.
              </p>
              <div className="mt-8 rounded-2xl border border-[#d4a574]/30 bg-[#050518]/80 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#f2d39b]">From Engineering to Leadership</p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  My career gradually expanded from hands-on engineering into technical leadership, project management, and program management at Telekom Srbija and TeleGroup, evolving naturally into comprehensive cybersecurity governance and vCISO advisory.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="vlk-frame p-8 sm:p-10">
                <h3 className="text-xl font-bold text-[#fbf8ef]">Experience at a Glance</h3>
                <p className="mt-2 text-sm text-white/60">17+ years bridging engineering, infrastructure, and governance.</p>
                <div className="mt-6 space-y-4 text-sm text-white/70">
                  <div className="border-b border-[#d4a574]/15 pb-3">
                    <span className="font-bold text-[#f2d39b]">11 Years at Telekom Srbija:</span> IPTV & Headend, VOD & nPVR, access networks, mobile radio optimization (GSM/UMTS/LTE), systems integration, and high-availability operations.
                  </div>
                  <div className="border-b border-[#d4a574]/15 pb-3">
                    <span className="font-bold text-[#f2d39b]">6 Years at TeleGroup (Cybersecurity & Leadership):</span> Security engineering, program management, risk assessment, governance frameworks, and technical team mentoring.
                  </div>
                  <div>
                    <span className="font-bold text-[#f2d39b]">Professional Development:</span> CISSP (ISC2, in progress) & CEH v13 (EC-Council, in progress).
                  </div>
                </div>
              </div>
              <div className="vlk-frame border-l-4 border-l-[#d4a574] p-6 text-sm italic text-white/80">
                "What changed was the perspective—from securing individual technologies and services to looking at security as an organizational capability that enables business growth."
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#050518] py-24 lg:py-32 border-b border-[#d4a574]/20">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionLabel number="02">FOUNDATION & PERSPECTIVE</SectionLabel>
              <BrandSignature>Engineering depth · executive perspective</BrandSignature>
              <h2 className="display-heading mt-7">Building security that works in the real world.</h2>
              <div className="mt-8 space-y-6 text-white/75">
                <p className="leading-7">
                  I spent 11 years building the technical foundation that later shaped my approach to cybersecurity. From contributing to the early development and scale of large IPTV, VOD, and nPVR platforms to working as a radio network optimization engineer across GSM, UMTS, and LTE environments, I gained deep insight into complex production systems.
                </p>
                <p className="leading-7">
                  Alongside telecommunications engineering, I worked as a software developer, gaining another perspective on complex systems—from software and interfaces to infrastructure and service performance. Working across these environments taught me to look beyond individual technologies and understand how dependencies exist, how changes propagate, and where operational risks emerge.
                </p>
                <p className="leading-7">
                  For me, cybersecurity was never a complete career change; it was a natural continuation. Firewalls, networks, servers, access controls, availability, segmentation, and operational risk were already part of my technical world long before cybersecurity became as widely discussed as it is today.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div className="vlk-frame p-8 sm:p-10">
                <h3 className="text-xl font-bold text-[#fbf8ef]">Core Focus Areas</h3>
                <p className="mt-2 text-sm text-white/60">Comprehensive frameworks and practical advisory services.</p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {coreExpertiseList.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-lg border border-[#d4a574]/20 bg-[#000030]/60 px-4 py-3 text-xs font-semibold text-[#f2d39b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d4a574]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="vlk-frame p-8">
                <h4 className="font-bold text-[#f2d39b]">Telecom & Tech Background</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {telecomExperienceList.map((item, i) => (
                    <span key={i} className="rounded border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden bg-[#050518] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <SectionLabel number="01">WHAT A vCISO DOES</SectionLabel>
                <h2 className="display-heading mt-7 max-w-md">Security becomes manageable when someone owns the whole picture.</h2>
                <p className="mt-7 max-w-sm leading-7 text-white/60">A vCISO brings executive-level focus to strategy, risk and compliance while creating the structure needed for security to become repeatable and measurable.</p>
              </div>
              <div className="grid gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  const color = service.tone === "gold" ? brand.gold : service.tone === "magenta" ? brand.magenta : brand.blue;
                  return (
                    <article key={service.index} className="vlk-frame group grid gap-6 p-6 transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[3rem_3rem_1fr_auto] sm:items-start" style={{ borderTopColor: color }}>
                      <span className="text-sm font-bold tracking-[0.2em]" style={{ color }}>{service.index}</span>
                      <Icon className="h-6 w-6" style={{ color }} />
                      <div><h3 className="vlk-card-title text-[#fbf8ef]">{service.title}</h3><p className="mt-3 max-w-xl leading-7 text-white/60">{service.text}</p></div>
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
              <h2 className="display-heading mt-7 max-w-md">Technical credibility. Business judgment. Clear communication.</h2>
              <p className="mt-7 max-w-sm leading-7 text-white/65">Trust is built quickly when security advice is deep enough for technical teams and clear enough for leadership.</p>
            </div>
            <div className="vlk-frame overflow-hidden">
              <div className="grid divide-y divide-[#d4a574]/20">
                {competencies.map(([index, title, text]) => (
                  <article key={index} className="group grid gap-5 p-6 sm:grid-cols-[3rem_1fr] sm:p-8">
                    <span className="text-sm font-bold tracking-[0.2em] text-[#f2d39b]">{index}</span>
                    <div><h3 className="vlk-card-title text-[#fbf8ef] transition-colors group-hover:text-[#f2d39b]">{title}</h3><p className="mt-3 max-w-xl leading-7 text-white/60">{text}</p></div>
                  </article>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-[#d4a574]/20 bg-[#000030]/50 px-6 py-4 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/45 sm:px-8"><span>VLK InfoSec Consulting / Trusted advisor</span><span className="text-[#f2d39b]">Depth · Judgment · Clarity</span></div>
            </div>
          </div>
        </section>

        <section id="executive-insights" className="relative overflow-hidden bg-[#050518] py-24 lg:py-32 border-b border-[#d4a574]/20">
          <NetworkOrnament />
          <div className="container relative z-10">
            <div className="max-w-3xl">
                <SectionLabel number="03">C-LEVEL & BOARD PERSPECTIVE</SectionLabel>
              <BrandSignature>Direction · Structure · Assurance</BrandSignature>
              <h2 className="display-heading mt-7">When something goes wrong, what happens next?</h2>
              <p className="vlk-section-copy mt-6">
                Cybersecurity is not only about preventing an incident. It is about knowing what to do when prevention fails. When management faces a crisis, technical reports are no longer enough—leadership teams ask critical governance questions.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {executiveSectors.map((item, idx) => (
                <div key={idx} className="vlk-frame flex flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">{item.industry}</span>
                    <blockquote className="mt-4 text-base font-semibold leading-snug text-[#fbf8ef]">
                      "{item.quote}"
                    </blockquote>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm leading-6 text-white/60">
                      {item.reality}
                    </p>
                    <div className="mt-5 pt-4 border-t border-[#d4a574]/15 flex justify-end">
                      <a
                        href="mailto:contact@vlk-infosec.com"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f2d39b] hover:text-white transition-colors"
                      >
                        Let’s talk <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-3xl border border-[#d4a574]/40 bg-gradient-to-r from-[#000030] via-[#050518] to-[#000030] p-8 sm:p-12 text-center shadow-2xl">
              <h3 className="text-2xl font-bold text-[#fbf8ef] sm:text-3xl">The questions that matter before the incident</h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
                What are our most critical assets? What could stop the business? Who makes the decisions? These are not questions to be answered for the first time during a crisis. Let's discuss how a vCISO program establishes governance and response readiness beforehand.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:contact@vlk-infosec.com"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#d4a574] px-8 py-4 text-sm font-bold text-[#000030] shadow-[0_8px_30px_rgba(212,165,116,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#f2d39b]"
                >
                  Let’s discuss your risk <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="functions" className="relative overflow-hidden bg-[#000030] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel number="04">THE 3 CORE FUNCTIONS OF A vCISO</SectionLabel>
              <BrandSignature>VLK operating model</BrandSignature>
              <h2 className="display-heading mt-7 max-w-md">Direction. Structure. Assurance.</h2>
              <p className="mt-7 max-w-sm leading-7 text-white/65">Not by doing every technical task personally—but by ensuring the right security work is prioritized, performed and measured.</p>
              <div className="mt-10"><TriangleMotif /></div>
            </div>
            <div className="grid gap-4">
              {functions.map((item) => (
                <article key={item.number} className="vlk-frame group p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-[4rem_1fr]">
                    <div className="flex h-14 w-14 items-center justify-center border border-[#d4a574]/70 bg-[#050518] text-lg font-bold text-[#f2d39b] transition-colors group-hover:bg-[#d4a574] group-hover:text-[#000030]">{item.number}</div>
                    <div><div className="flex flex-wrap items-baseline gap-x-4 gap-y-2"><h3 className="vlk-card-title text-[#fbf8ef]">{item.title}</h3><span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">{item.label}</span></div><p className="mt-2 font-medium text-white/55">{item.description}</p><ul className="mt-5 grid gap-3 md:grid-cols-2">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-white/62"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#d4a574]" />{point}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#000030] py-24 lg:py-32">
          <NetworkOrnament />
          <div className="container relative z-10 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionLabel number="04">vCISO RESPONSIBILITY MAP</SectionLabel>
              <h2 className="display-heading mt-7 max-w-md">Clear ownership. Better security decisions.</h2>
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

        <section id="contact" className="vlk-wave-surface relative overflow-hidden border-t border-[#d4a574]/30 py-28 lg:py-36">
          <NetworkOrnament />
          <div className="container relative z-10 max-w-4xl text-center">
            <div className="flex justify-center"><SectionLabel number="06">CONVERSATION & ENGAGEMENT</SectionLabel></div>
            <h2 className="display-heading mt-7 text-3xl sm:text-4xl lg:text-5xl text-[#fbf8ef]">Bring senior security leadership into the room.</h2>
            <p className="vlk-section-copy mx-auto mt-6 max-w-2xl">Let's discuss how vCISO services can align cybersecurity with business objectives, bridge the gap between technical teams and executive leadership, and build a security program that can be trusted.</p>
            <div className="mt-12 rounded-2xl border border-[#d4a574]/40 bg-[#07073b]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f2d39b]">Tailored Advisory</p>
              <h3 className="display-heading mt-3 text-2xl sm:text-3xl text-white">Explore vCISO service packages that fit your business needs.</h3>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">Whether you need ongoing strategic guidance, risk assessment rigor, or comprehensive GRC alignment, let's shape a framework suited for your organization.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:vciso.services@vlk-infosec.com" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#d4a574] via-[#f2d39b] to-[#c68b47] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#000030] shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <span>Explore vCISO Services</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="mailto:contact@vlk-infosec.com" className="inline-flex items-center gap-3 rounded-xl border border-[#d4a574]/40 bg-[#000030]/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-[#d4a574] hover:bg-[#000030]">
                  <span>General Inquiry</span>
                </a>
              </div>
              <div className="mt-6 text-xs text-white/45">vlk-infosec.com · milica@vlk-infosec.com</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d4a574]/20 bg-[#000020] py-12">
        <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex items-center gap-4">
            <img src={brand.logo} alt="VLK InfoSec Consulting shield logo" className="h-12 w-12 rounded-full border border-[#d4a574]/50 object-cover shadow-md" />
            <div><p className="vlk-wordmark">VLK InfoSec Consulting</p><p className="mt-1 text-sm text-white/45">Strategic CISO leadership · Risk assessment · GRC · Compliance.</p></div>
          </div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">Navigate</p><div className="mt-4 grid gap-2 text-sm text-white/55"><a href="#about" className="hover:text-white">About</a><a href="#services" className="hover:text-white">Services</a><a href="#executive-insights" className="hover:text-white">Executive Insights</a><a href="#competencies" className="hover:text-white">Competencies</a><a href="#functions" className="hover:text-white">Direction · Structure · Assurance</a></div></div>
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f2d39b]">Contact</p><div className="mt-4 grid gap-2 text-sm text-white/55"><a href="https://vlk-infosec.com" className="hover:text-white">vlk-infosec.com</a><span>Privacy · Terms</span></div></div>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-white/35">© 2026 VLK InfoSec Consulting. All rights reserved.</div>
      </footer>
    </div>
  );
}
