
"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react";

import FadeIn from "../../components/fade-in";

import Image from "next/image";
import { trackEvent } from "../../lib/gtag";


export default function EmergencyResponsePage() {
 const [menuOpen, setMenuOpen] =
  useState(false);
  const services = [
    "Water & Pumping Systems",
    "Utilities Infrastructure",
    "Hospitality Engineering",
    "Industrial Maintenance",
    "Operational Continuity",
    "Reliability Assessments",
    "Telecom and CCTV Networks",
    "Energy Solutions",
    "Solar Networks",
  ];

  const industries = [
    "Luxury Resorts",
    "Luxury Villas",
    "Marinas",
    "Hospitality",
    "Industrial Facilities",
    "Food & Beverage Industry",
  ];
  return (
    <main className="min-h-screen bg-[#071018] px-6 py-28 text-white">

{/* NAVBAR */}
   
<header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071018]/90 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
    
    {/* LOGO */}
    <a style={{ display: "flex", alignItems: "center", gap: "0.75rem" ,fontSize: "1.125rem", fontWeight: "600", letterSpacing: "0.05em" }}
      href="/"
      className="text-lg font-semibold tracking-wide"
    > <img src="/ppe-logo.png" alt="Pacific Prime Engineering" width="120" height="20"></img>
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
        href="/services/hospitality-engineering"
        className="transition hover:text-orange-300"
      >
        Hospitality
      </a>
      
      <a
        href="/#industries"
        className="transition hover:text-orange-300"
      >
        Industries
      </a>

      <a
        href="/#newservices"
        className="transition hover:text-orange-300"
      >
        Services
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
          href="/"
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
        <a href="/services/hospitality-engineering">
          Hospitality
        </a>
        <a href="/#newservices">
          Services
        </a>
        <a href="/services/building-maintenance-repairs">
        Building Maintenance
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

<FadeIn>
 <section
  id="24-7-emergency-response"
  className="bg-white/5 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-sm tracking-[0.3em] text-orange-300">
          24/7 EMERGENCY RESPONSE
        </div>

        <h1 className="mb-8 text-5xl font-bold">
  24/7 Emergency Engineering Response
</h1>

        <p className="mb-12 text-xl leading-8 text-slate-300">
          Pacific Prime Engineering provides premium
          emergency engineering support for luxury
          hospitality, villas, utilities infrastructure
          and mission-critical operations across
          Guanacaste and Papagayo.
        </p>

        <div className="glass-card rounded-[2rem] p-10">
          <h2 className="mb-6 text-3xl font-semibold">
            Emergency Services Include
          </h2>

          <ul className="space-y-4 text-slate-300">
            <li>Emergency troubleshooting</li>
            <li>Critical utilities support</li>
            <li>Pumping systems failures</li>
            <li>Technical operational continuity</li>
            <li>Hospitality emergency response</li>
            <li>Infrastructure reliability support</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/#contact"
            className="orange-glow inline-flex rounded-full bg-orange-500 px-8 py-5 font-semibold transition hover:bg-orange-400"
          >
            Request Immediate Technical Support
          </a>
        </div>
      </div>
      </section>
      </FadeIn>

          
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

    <div className="mx-auto max-w-2xl">
      <form
        action="https://formsubmit.co/operations@pacificprimeengineering.com"
        method="POST"
        onSubmit={() =>
          trackEvent("lead_form_submit",{
            source: "website_contact",
          })
        }
        className="glass-card rounded-[2rem] p-4"
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
