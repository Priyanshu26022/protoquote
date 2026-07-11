import { ShieldCheck, Zap, BrainCircuit, Clock } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    desc: "Automatically analyzes manufacturability and recommends the best process.",
  },
  {
    icon: Zap,
    title: "Instant Quotes",
    desc: "Receive manufacturing quotations within seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Uploads",
    desc: "Your CAD files are encrypted and stored securely.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Track manufacturing progress and delivery timelines.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Why ProtoQuote?
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Built for modern AI-assisted manufacturing.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex gap-6 rounded-2xl border border-slate-700 bg-slate-900 p-8"
              >
                <div className="rounded-xl bg-blue-500/20 p-4">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400">
                    {feature.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;