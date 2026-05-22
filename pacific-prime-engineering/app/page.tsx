import FadeIn from "./components/fade-in";

import Image from "next/image";

export default function Home() {
  const services = [
    "Water & Pumping Systems",
    "Utilities Infrastructure",
    "Hospitality Engineering",
    "Industrial Maintenance",
    "Emergency Response",
    "Reliability Assessments",
  ];

  const industries = [
    "Luxury Resorts",
    "Luxury Villas",
    "Marinas",
    "Hospitality",
    "Industrial Facilities",
    "Food & Beverage",
  ];

  return (
    <main className="min-h-screen text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071018]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/ppe-logo.png"
              alt="Pacific Prime Engineering"
              width={60}
              height={60}
              priority
              className="object-contain"
            />

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                PACIFIC PRIME ENGINEERING
              </h1>
              <p className="text-xs text-orange-300">
                Reliability Never Stops.
              </p>
            </div>
          </div>

<nav className="hidden gap-8 text-sm md:flex">
  <a
    href="/"
    className="transition hover:text-orange-300"
  >
    Home
  </a>

  <a
    href="#industries"
    className="transition hover:text-orange-300"
  >
    Industries
  </a>

  <a
    href="/services/hospitality-engineering"
    className="transition hover:text-orange-300"
  >
    Hospitality
  </a>

  <a
    href="/services/pumping-systems"
    className="transition hover:text-orange-300"
  >
    Pumping Systems
  </a>

  <a
    href="/services/emergency-response"
    className="transition hover:text-orange-300"
  >
    Emergency
  </a>

  <a
    href="#contact"
    className="transition hover:text-orange-300"
  >
    Contact
  </a>
</nav>
          
          <div className="hidden items-center gap-3 md:flex">
  <button className="text-orange-300 font-semibold">
    EN
  </button>

  <span className="text-slate-500">|</span>

  <button className="text-slate-400 hover:text-white transition">
    ES
  </button>
</div>
        </div>
      </header>

      {/* HERO */}
<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/video/hero-video.mp4" type="video/mp4" />
  </video>

  {/* CINEMATIC OVERLAY */}
  <div className="absolute inset-0 bg-black/45" />

  <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/40 via-[#071018]/70 to-[#071018]" />

  {/* CONTENT */}
  <div className="relative z-20 mx-auto max-w-5xl text-center">
    <div className="mb-10 flex justify-center">
      <Image
        src="/ppe-logo.png"
        alt="Pacific Prime Engineering"
        width={180}
        height={180}
        priority
        className="drop-shadow-2xl"
      />
    </div>

    <div className="mb-8 inline-flex rounded-full border border-orange-400/20 bg-white/10 px-6 py-3 text-sm tracking-[0.25em] text-orange-300 backdrop-blur-md">
      PREMIUM ENGINEERING • PAPAGAYO • GUANACASTE
    </div>

    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
      Reliability Never Stops.
    </h1>

    <h2 className="mb-8 text-2xl font-light text-orange-300 md:text-4xl">
      Critical Infrastructure. Premium Response.
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-200 md:text-xl">
      Operational continuity, utilities engineering,
      pumping systems and premium technical response
      for luxury hospitality and critical infrastructure
      across Guanacaste.
    </p>

    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <button className="orange-glow rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-orange-400">
        Request Technical Assessment
      </button>

      <a
        href="https://wa.me/50686053534?text=Hello%20Pacific%20Prime%20Engineering,%20I%20would%20like%20a%20technical%20assessment."
        target="_blank"
        className="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20"
      >
        Emergency Response 24/7
      </a>
    </div>
  </div>
</section>
     
      {/* SERVICES */}
      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mb-14 text-center">
            Premium Engineering Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="glass-card rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2"
              >
                <h3 className="mb-4 text-2xl font-semibold">
                  {service}
                </h3>

                <p className="text-slate-400">
                  Premium engineering and reliability-focused
                  solutions designed for critical operations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* INDUSTRIES */}
<section
  id="industries"
  className="bg-white/5 px-6 py-28"
>
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
        INDUSTRIES WE SERVE
      </div>

      <h2 className="section-title">
        Engineered for Critical Operations
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Luxury Resorts",
          desc: "Mission-critical hospitality engineering and operational continuity.",
        },
        {
          title: "Luxury Villas & Estates",
          desc: "Premium technical support for high-end residential operations.",
        },
        {
          title: "Marinas",
          desc: "Utilities, pumping systems and reliability support.",
        },
        {
          title: "Food & Beverage",
          desc: "Industrial technical operations and process support.",
        },
        {
          title: "Utilities Infrastructure",
          desc: "Engineering support for essential operational systems.",
        },
        {
          title: "Emergency Technical Response",
          desc: "24/7 engineering support when operations cannot stop.",
        },
      ].map((industry) => (
        <div
          key={industry.title}
          className="glass-card rounded-[2rem] p-8 transition hover:-translate-y-2"
        >
          <h3 className="mb-4 text-2xl font-semibold">
            {industry.title}
          </h3>

          <p className="text-slate-400">
            {industry.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 text-sm tracking-[0.3em] text-orange-300">
            BUILT FOR OPERATIONAL CONTINUITY
          </div>

          <h2 className="section-title mb-8">
            Engineering Reliability for Luxury
            Hospitality & Critical Infrastructure
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400">
            Pacific Prime Engineering delivers premium
            engineering, utilities support, pumping systems
            and technical response designed to protect
            operational continuity for luxury hospitality
            and critical infrastructure across Guanacaste.
          </p>
        </div>
      </section>

 {/* TRUST BUILDER */}
<section className="bg-[#050b12] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
        BUILT FOR CRITICAL OPERATIONS
      </div>

      <h2 className="section-title mb-6">
        Trusted Where Operations Cannot Stop
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-slate-400">
        Pacific Prime Engineering is built around
        operational continuity, rapid technical response
        and premium engineering execution for critical
        hospitality and infrastructure environments.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Rapid Response",
          desc: "Fast technical support when operational downtime is not an option.",
        },
        {
          title: "Reliability Focus",
          desc: "Solutions engineered to protect continuity and performance.",
        },
        {
          title: "Hospitality Expertise",
          desc: "Built for luxury resorts, villas and premium environments.",
        },
        {
          title: "Premium Standards",
          desc: "Professional execution aligned with high-end operations.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="glass-card rounded-[2rem] p-8 transition hover:-translate-y-2"
        >
          <h3 className="mb-4 text-2xl font-semibold">
            {item.title}
          </h3>

          <p className="text-slate-400">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  {/* SERVICES QUICK ACCESS */}
<section className="bg-white/5 px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
        CORE SERVICES
      </div>

      <h2 className="section-title">
        Engineering Services
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Hospitality Engineering",
          link: "/services/hospitality-engineering",
        },
        {
          title: "Pumping Systems",
          link: "/services/pumping-systems",
        },
        {
          title: "Emergency Response",
          link: "/services/emergency-response",
        },
        {
          title: "Industrial Maintenance",
          link: "/services/industrial-maintenance",
        },
      ].map((service) => (
        <a
          key={service.title}
          href={service.link}
          className="glass-card rounded-[2rem] p-8 transition hover:-translate-y-2 hover:border-orange-400/30"
        >
          <div className="mb-4 text-sm tracking-[0.2em] text-orange-300">
            SERVICE
          </div>

          <h3 className="text-2xl font-semibold">
            {service.title}
          </h3>
        </a>
      ))}
    </div>
  </div>
</section>

      
{/* OPERATIONAL SCENARIOS */}
<section className="px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 text-center">
      <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
        OPERATIONAL SCENARIOS
      </div>

      <h2 className="section-title mb-6">
        Built for Mission-Critical Environments
      </h2>

      <p className="mx-auto max-w-3xl text-lg text-slate-400">
        Engineering support designed for operational
        continuity where downtime directly impacts
        guest experience, infrastructure reliability
        and business performance.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">
      {[
        {
          title: "Luxury Resort Utilities Continuity",
          desc:
            "Maintaining uninterrupted operations through premium technical response and utilities support.",
        },
        {
          title: "Critical Pumping Reliability",
          desc:
            "Protecting water continuity and pressure stability for hospitality environments with high operational demand.",
        },
        {
          title: "Emergency Infrastructure Support",
          desc:
            "Rapid technical intervention when operational systems require immediate response.",
        },
      ].map((scenario) => (
        <div
          key={scenario.title}
          className="glass-card rounded-[2rem] p-10 transition hover:-translate-y-2"
        >
          <div className="mb-4 text-sm tracking-[0.2em] text-orange-300">
            OPERATIONAL CASE
          </div>

          <h3 className="mb-5 text-2xl font-semibold">
            {scenario.title}
          </h3>

          <p className="leading-8 text-slate-400">
            {scenario.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      
{/* CONTACT */}
<section
  id="contact"
  className="bg-white/5 px-6 py-28"
>
  <div className="mx-auto max-w-4xl">
    <div className="mb-12 text-center">
      <h2 className="section-title mb-4">
        Request Technical Assessment
      </h2>

      <p className="mx-auto max-w-2xl text-slate-400">
        Contact our engineering team for premium
        technical support, operational continuity,
        emergency response and reliability solutions.
      </p>
    </div>

    <form
      action="https://formsubmit.co/operations@pacificprimeengineering.com"
      method="POST"
      className="glass-card rounded-[2rem] p-10"
    >
      {/* Hidden FormSubmit Config */}
      <input
        type="hidden"
        name="_subject"
        value="New Pacific Prime Engineering Lead"
      />

      <input
        type="hidden"
        name="_captcha"
        value="false"
      />

      <input
        type="hidden"
        name="_template" 
        value="table"
      />
      <input
        type="hidden"
        name="_next"
        value="https://pacificprimeengineering.com/thank-you"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <input
          type="text"
          name="company"
          placeholder="Company / Property"
          required
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
        />

        <input
          type="text"
          name="contact_name"
          placeholder="Contact Name"
          required
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
        />

        <select
          name="service_type"
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none"
        >
          <option>Service Type</option>
          <option>Water & Pumping Systems</option>
          <option>Utilities Infrastructure</option>
          <option>Hospitality Engineering</option>
          <option>Industrial Maintenance</option>
          <option>Emergency Response</option>
        </select>

        <select
          name="urgency"
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none"
        >
          <option>Urgency</option>
          <option>Routine</option>
          <option>Priority</option>
          <option>Emergency 24/7</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
        />
      </div>

      <textarea
        name="project_details"
        placeholder="Project Details"
        rows={6}
        className="mt-6 w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
      />

      <button
        type="submit"
        className="orange-glow mt-8 w-full rounded-full bg-orange-500 px-8 py-5 text-lg font-semibold transition hover:bg-orange-400"
      >
        Request Technical Assessment
      </button>
    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050b12] px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5">
              <Image
                src="/ppe-logo.png"
                alt="Pacific Prime Engineering"
                width={120}
                height={120}
              />
            </div>

            <p className="text-orange-300">
              Reliability Never Stops.
            </p>

            <p className="mt-4 text-slate-400">
              Critical Infrastructure. Premium Response.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>

            <div className="space-y-2 text-slate-400">
              <p>Water & Pumping Systems</p>
              <p>Utilities Infrastructure</p>
              <p>Hospitality Engineering</p>
              <p>Emergency Response</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <div className="space-y-2 text-slate-400">
              <p>Papagayo, Guanacaste</p>
              <p>+506 8605-3534</p>
              <p>info@pacificprimeengineering.com</p>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/50686053534?text=Hello%20Pacific%20Prime%20Engineering,%20I%20need%20technical%20support."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
      >
        WhatsApp 24/7
      </a>
      <a
  href="https://wa.me/50686053534?text=Hello%20Pacific%20Prime%20Engineering"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
>
  WhatsApp 24/7
</a>
    </main>
  );
}
