export const metadata = {
  title: "Hospitality Engineering",
  description:
    "Premium hospitality engineering services for luxury resorts, villas and hospitality infrastructure in Guanacaste, Costa Rica.",
};

export default function HospitalityEngineeringPage() {
  return (
    <main className="min-h-screen bg-[#071018] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-sm tracking-[0.3em] text-orange-300">
          LUXURY HOSPITALITY ENGINEERING
        </div>

        <h1 className="mb-8 text-5xl font-bold">
          Hospitality Engineering Services in Guanacaste
        </h1>

        <p className="mb-12 text-xl leading-8 text-slate-300">
          Pacific Prime Engineering provides premium
          hospitality engineering services for luxury
          resorts, villas, hospitality properties and
          mission-critical operations across Guanacaste
          and Papagayo.
        </p>

        <div className="glass-card rounded-[2rem] p-10">
          <h2 className="mb-6 text-3xl font-semibold">
            Services Include
          </h2>

          <ul className="space-y-4 text-slate-300">
            <li>• Utilities infrastructure support</li>
            <li>• Pumping system optimization</li>
            <li>• Mechanical troubleshooting</li>
            <li>• Reliability engineering</li>
            <li>• Preventive maintenance planning</li>
            <li>• Emergency technical response</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/#contact"
            className="orange-glow inline-flex rounded-full bg-orange-500 px-8 py-5 font-semibold transition hover:bg-orange-400"
          >
            Request Technical Assessment
          </a>
        </div>
      </div>
    </main>
  );
}
