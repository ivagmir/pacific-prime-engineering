export const metadata = {
  title: "Emergency Response",
  description:
    "24/7 emergency engineering response for critical infrastructure, hospitality and industrial facilities in Guanacaste, Costa Rica.",
};

export default function EmergencyResponsePage() {
  return (
    <main className="min-h-screen bg-[#071018] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-sm tracking-[0.3em] text-orange-300">
          24/7 EMERGENCY RESPONSE
        </div>

        <h1 className="mb-8 text-5xl font-bold">
          Emergency Engineering Response in Guanacaste
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
            <li>• Emergency troubleshooting</li>
            <li>• Critical utilities support</li>
            <li>• Pumping systems failures</li>
            <li>• Technical operational continuity</li>
            <li>• Hospitality emergency response</li>
            <li>• Infrastructure reliability support</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/#contact"
            className="orange-glow inline-flex rounded-full bg-orange-500 px-8 py-5 font-semibold transition hover:bg-orange-400"
          >
            Request Immediate Support
          </a>
        </div>
      </div>
    </main>
  );
}
