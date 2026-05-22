
export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071018] px-6 text-white">
      <div className="glass-card max-w-2xl rounded-[2rem] p-12 text-center">
        <div className="mb-5 text-sm tracking-[0.3em] text-orange-300">
          REQUEST RECEIVED
        </div>

        <h1 className="mb-6 text-5xl font-bold">
          Thank You
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-400">
          Your technical assessment request has been
          successfully submitted to Pacific Prime
          Engineering.
        </p>

        <p className="mb-10 text-slate-400">
          Our operations team will contact you shortly.
        </p>

        <a
          href="/"
          className="orange-glow inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-400"
        >
          Return to Homepage
        </a>
      </div>
    </main>
  );
}
