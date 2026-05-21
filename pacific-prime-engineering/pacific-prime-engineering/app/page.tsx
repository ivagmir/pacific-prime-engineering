export default function Home() {
  return (
    <main className="min-h-screen bg-[#071018] text-white">
      {/* HERO SECTION */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#071018]/70 to-[#071018]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full border border-orange-400/30 bg-white/5 px-5 py-2 text-sm tracking-[0.25em] text-orange-300 backdrop-blur-sm">
              PACIFIC PRIME ENGINEERING
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Reliability Never Stops.
          </h1>

          <h2 className="mb-8 text-xl font-light text-orange-300 md:text-3xl">
            Critical Infrastructure. Premium Response.
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-300 md:text-xl">
            Operational continuity, utilities engineering, pumping systems and
            premium technical response for luxury hospitality and critical
            infrastructure across Guanacaste.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-orange-400">
              Request Technical Assessment
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20">
              Emergency Response 24/7
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0B1724] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-14 text-center text-4xl font-bold">
            Premium Engineering Services
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Water & Pumping Systems",
              "Utilities Infrastructure",
              "Hospitality Engineering",
              "Industrial Maintenance",
              "Emergency Response",
              "Reliability Assessments",
            ].map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:border-orange-400/40"
              >
                <h4 className="mb-4 text-2xl font-semibold">{service}</h4>
                <p className="text-slate-400">
                  Premium engineering solutions designed for luxury hospitality
                  and critical infrastructure reliability.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-24 text-center">
        <h3 className="mb-4 text-4xl font-bold">
          Ready to Protect Your Operations?
        </h3>

        <p className="mx-auto mb-8 max-w-2xl text-slate-400">
          Schedule a technical assessment or contact our emergency response
          team today.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-400">
            Contact Us
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">
            WhatsApp +506 8605-3534
          </button>
        </div>
      </section>
    </main>
  );
}