export const metadata = {
  title: "Industrial Maintenance",
  description:
    "Industrial maintenance, reliability engineering and emergency technical response in Guanacaste, Costa Rica.",
};

export default function IndustrialMaintenancePage() {
  return (
    <main className="min-h-screen bg-[#071018] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 text-sm tracking-[0.3em] text-orange-300">
          INDUSTRIAL MAINTENANCE
        </div>

        <h1 className="mb-8 text-5xl font-bold">
          Industrial Maintenance Services in Guanacaste
        </h1>

        <p className="mb-12 text-xl leading-8 text-slate-300">
          Pacific Prime Engineering delivers industrial
          maintenance, utilities support and operational
          continuity services for hospitality, villas,
          industrial facilities and mission-critical
          infrastructure throughout Guanacaste.
        </p>

        <div className="glass-card rounded-[2rem] p-10">
          <h2 className="mb-6 text-3xl font-semibold">
            Maintenance Services Include
          </h2>

          <ul className="space-y-4 text-slate-300">
            <li>• Preventive maintenance planning</li>
            <li>• Utilities reliability</li>
            <li>• Mechanical troubleshooting</li>
            <li>• Technical emergency response</li>
            <li>• Infrastructure continuity</li>
            <li>• Operational support systems</li>
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
