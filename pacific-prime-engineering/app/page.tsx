"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

import FadeIn from "./components/fade-in";

import Image from "next/image";
import { trackEvent } from "./lib/gtag";

export default function Home() {
  const [menuOpen, setMenuOpen] =
  useState(false);
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
    <main className="min-h-screen pt-28 md:pt-36">
      {/* NAVBAR */}
   
<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071018]/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    
    {/* LOGO */}
    <a
      href="/"
      className="text-lg font-semibold tracking-wide"
    >
      Pacific Prime Engineering
    </a>

    {/* DESKTOP MENU */}
    <nav className="hidden items-center gap-8 text-sm md:flex">
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

      {/* LANGUAGE SWITCH */}
      <div className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2">
        <a
          href="/en"
          className="text-orange-300"
        >
          EN
        </a>

        <span className="text-slate-500">
          |
        </span>

        <a
          href="/es"
          className="transition hover:text-orange-300"
        >
          ES
        </a>
      </div>
    </nav>

    {/* MOBILE BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="border-t border-white/10 bg-[#071018] px-6 py-6 md:hidden">
      <div className="flex flex-col gap-5 text-lg">
        <a href="/">Home</a>
        <a href="#industries">Industries</a>
        <a href="/services/hospitality-engineering">
          Hospitality
        </a>

        <a href="/services/pumping-systems">
          Pumping Systems
        </a>

        <a href="/services/emergency-response">
          Emergency
        </a>

        <a href="#contact">Contact</a>

        {/* LANGUAGE SWITCH MOBILE */}
        <div className="mt-4 flex gap-4 text-base">
          <a
            href="/en"
            className="text-orange-300"
          >
            EN
          </a>

          <a href="/es">
            ES
          </a>
        </div>
      </div>
    </div>
  )}
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

    <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
  Premium Engineering
  <span className="block text-orange-400">
    for Critical Operations
  </span>
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
        Complimentary Technical Assessment
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
  Complimentary technical assessment for hospitality,
  villas and mission-critical infrastructure across
  Guanacaste and Papagayo.
</p>
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
      <FadeIn>
      <section id="services" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title mb-14 text-center">
            Premium Engineering Services
          </h2>

          <div className="grid gap-8 md:grid-cols-1 md:grid-cols-3">
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
      </FadeIn>

{/* TRUST STRIP */}
<section className="border-y border-white/10 bg-[#050b12] px-6 py-10">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 text-center text-sm tracking-[0.2em] text-slate-400 md:justify-between">
    <div>24/7 TECHNICAL RESPONSE</div>
    <div>HOSPITALITY OPERATIONS</div>
    <div>PUMPING SYSTEMS</div>
    <div>UTILITIES INFRASTRUCTURE</div>
    <div>OPERATIONAL CONTINUITY</div>
  </div>
</section>
      
{/* INDUSTRIES */}
<FadeIn>
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

    <div className="grid gap-8 md:grid-cols-1 md:grid-cols-3">
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
          className="glass-card rounded-[2rem] p-8 transition hover:-translate-y-3 hover:shadow-2xl duration-300"
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
</FadeIn>

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
<FadeIn>
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
          className="glass-card rounded-[2rem] p-8 transition hover:-translate-y-3 hover:shadow-2xl duration-300"
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
</FadeIn>

  {/* SERVICES QUICK ACCESS */}
<FadeIn>
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
</FadeIn>

      
{/* OPERATIONAL SCENARIOS */}
<FadeIn>
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
          className="glass-card rounded-[2rem] p-10 transition hover:-translate-y-3 hover:shadow-2xl duration-300"
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
</FadeIn>

{/* EXECUTIVE ASSESSMENT */}
<section className="bg-white/5 px-6 py-28">
  <div className="mx-auto max-w-6xl">
    <div className="glass-card rounded-[2.5rem] p-12 text-center">
      <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
        EXECUTIVE TECHNICAL REVIEW
      </div>

      <h2 className="section-title mb-6">
        Complimentary Infrastructure Reliability Assessment
      </h2>

      <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-400">
        Pacific Prime Engineering offers a complimentary
        technical assessment focused on operational
        continuity, pumping systems, utilities reliability
        and infrastructure risks for hospitality and
        premium environments.
      </p>

      <div className="mb-10 grid gap-6 md:grid-cols-1 md:grid-cols-3">
        {[
          "Infrastructure Review",
          "Operational Risks",
          "Reliability Recommendations",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            {item}
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="orange-glow inline-flex rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold transition hover:bg-orange-400"
      >
        Request Complimentary Assessment
      </a>
    </div>
  </div>
</section>

{/* SERVICE FOOTPRINT */}
<section className="px-6 py-28">
  <div className="mx-auto max-w-6xl text-center">
    <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
      SERVICE FOOTPRINT
    </div>

    <h2 className="section-title mb-6">
      Serving Guanacaste & Premium Hospitality Destinations
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-400">
      Pacific Prime Engineering supports hospitality,
      villas and operational infrastructure throughout
      Guanacaste, including Papagayo and surrounding
      high-demand environments.
    </p>

    <div className="grid gap-6 md:grid-cols-1 md:grid-cols-4">
      {[
        "Papagayo",
        "Guanacaste",
        "Luxury Villas",
        "Hospitality Operations",
      ].map((item) => (
        <div
          key={item}
          className="glass-card rounded-[2rem] p-6"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>
      
{/* CONTACT */}
<FadeIn>
  <section
  id="contact"
  className="bg-white/5 px-6 py-28"
>
  <div className="mx-auto max-w-4xl">
    <div className="mb-12 text-center">
      <h2 className="section-title mb-4">
        Request Complimentary Assessment
      </h2>

      <p className="mx-auto max-w-2xl text-slate-400">
        Contact our engineering team to schedule a
complimentary technical assessment for your
property, utilities systems or operational
infrastructure.
      </p>
    </div>

    <form
      action="https://formsubmit.co/operations@pacificprimeengineering.com"
      method="POST"
      onSubmit={() =>
        trackEvent("lead_form_submit",{
          source: "website_contact",
        })
      }
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

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Service Needed
  </label>

  <select
    name="service"
    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none"
    defaultValue=""
  >
    <option value="" disabled>
      Select Service
    </option>

    <option>
      Hospitality Engineering
    </option>

    <option>
      Pumping Systems
    </option>

    <option>
      Emergency Response
    </option>

    <option>
      Industrial Maintenance
    </option>

    <option>
      Utilities Infrastructure
    </option>
  </select>
</div>
      
      <textarea
        name="project_details"
        placeholder="Project Details"
        rows={6}
        className="mt-6 w-full rounded-xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-slate-500"
      />
<div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm text-orange-200">
  Priority response available for operational-critical situations.
</div>
      <button
        type="submit"
        className="orange-glow mt-8 w-full rounded-full bg-orange-500 px-8 py-5 text-lg font-semibold transition hover:bg-orange-400"
      >
        Request Complimentary Assessment
      </button>
    </form>
  </div>
</section>
</FadeIn>

{/* LOCAL SEO */}
<section className="border-t border-white/10 px-6 py-20">
  <div className="mx-auto max-w-5xl text-center">
    <div className="mb-4 text-sm tracking-[0.3em] text-orange-300">
      SERVICE REGIONS
    </div>

    <h2 className="section-title mb-8">
      Engineering Services Across Guanacaste
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400">
      Pacific Prime Engineering provides premium
      engineering support throughout Guanacaste,
      including Papagayo, Liberia, Playa Hermosa,
      Playa Panamá, Coco, Tamarindo, Nosara and
      surrounding hospitality destinations.
    </p>
  </div>
</section>
      
      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-12 text-slate-400">
  <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">
        Pacific Prime Engineering
      </h3>

      <p className="leading-7">
        Premium engineering support for hospitality,
        pumping systems, utilities infrastructure and
        operational continuity in Guanacaste.
      </p>
    </div>

    <div>
      <h4 className="mb-4 font-semibold text-white">
        Core Services
      </h4>

      <ul className="space-y-2">
        <li>
          <a href="/services/hospitality-engineering">
            Hospitality Engineering
          </a>
        </li>
        <li>
          <a href="/services/pumping-systems">
            Pumping Systems
          </a>
        </li>
        <li>
          <a href="/services/emergency-response">
            Emergency Response
          </a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="mb-4 font-semibold text-white">
        Contact
      </h4>

      <p>operations@pacificprimeengineering.com</p>
      <p>+506 8605-3534</p>
      <p>Papagayo, Guanacaste</p>
    </div>
  </div>
</footer>
     <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
  © {new Date().getFullYear()} Pacific Prime Engineering.
  Premium Engineering for Critical Operations.
</div> 

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/50686053534?text=Hello%20Pacific%20Prime%20Engineering,%20I%20need%20technical%20support."
        target="_blank"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-6 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
      >
        WhatsApp 24/7
      </a>
      <a
  href="https://wa.me/50686053534?text=Hello%20Pacific%20Prime%20Engineering,%20I%20would%20like%20a%20technical%20assessment." 
  target="_blank"
        onClick={() => 
          trackEvent("whatsapp_click",{
             source: "sticky_cta",
          })
        }
  className="fixed bottom-6 right-6 z-50 rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
>
  Technical Support
</a>
    </main>
  );
}
