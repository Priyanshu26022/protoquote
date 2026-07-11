function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        <span className="mb-5 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          AI Powered Manufacturing Platform
        </span>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Upload CAD Files.
          <br />
          Get Instant Manufacturing Quotes.
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-slate-300">
          ProtoQuote uses AI to analyze manufacturing requirements,
          estimate costs and connect businesses with trusted manufacturers.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            Get Quote
          </button>

          <button className="rounded-xl border border-slate-600 px-8 py-4 transition hover:border-blue-500">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;