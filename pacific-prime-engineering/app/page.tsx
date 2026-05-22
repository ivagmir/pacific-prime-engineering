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
            <a href="#" className="transition hover:text-orange-300">
              Home
            </a>
            <a href="#services" className="transition hover:text-orange-300">
              Services
            </a>
            <a href="#industries" className="transition hover:text-orange-300">
              Industries
            </a>
            <a href="#about" className="transition hover:text-orange-300">
              About
            </a>
            <a href="#contact" className="transition hover:text-orange-300">
              Contact
            </a>
          </nav>
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
          <h2 className="section-title mb-14 text-center">
            Industries We Serve
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="glass-card rounded-[2rem] p-8 text-center transition hover:-translate-y-2"
              >
                <h3 className="text-2xl font-semibold">
                  {industry}
                </h3>
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

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-white/5 px-6 py-28 text-center"
      >
        <h2 className="section-title mb-4">
          Ready to Protect Your Operations?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-slate-400">
          Schedule a technical assessment or contact
          our emergency response team.
        </p>

        <div className="flex flex-col items-center gap-3 text-slate-300">
          <p>📍 Papagayo, Guanacaste, Costa Rica</p>
          <p>📞 +506 8605-3534</p>
          <p>✉ info@pacificprimeengineering.com</p>
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
    </main>
  );
}
