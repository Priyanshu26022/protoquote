import { Upload, BrainCircuit, FileText, Factory } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload CAD",
    desc: "Upload your CAD files securely.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    desc: "AI analyzes manufacturability and materials.",
  },
  {
    icon: FileText,
    title: "Instant Quote",
    desc: "Receive pricing and estimated lead time.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Production begins after approval.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          How It Works
        </h2>

        <p className="mb-20 text-center text-slate-400">
          From design to manufacturing in four simple steps.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-slate-400">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;