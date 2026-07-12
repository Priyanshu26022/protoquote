import { Upload, BrainCircuit, FileText, Factory } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload CAD File",
    desc: "Upload STEP, STL, DXF or DWG CAD files securely to begin the quotation process.",
  },
  {
    icon: BrainCircuit,
    title: "AI Manufacturing Analysis",
    desc: "Our AI analyzes the design, material, manufacturing process and production feasibility.",
  },
  {
    icon: FileText,
    title: "Instant Quote & Lead Time",
    desc: "Receive an estimated manufacturing cost, recommended process and expected delivery time instantly.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Delivery",
    desc: "Once approved, the order moves to production and is delivered through trusted manufacturing partners.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works"
     className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-5xl font-bold">
          How It Works
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-slate-400">
          From uploading your CAD design to receiving a manufacturing quote,
          ProtoQuote simplifies the entire process in just four easy steps.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative rounded-2xl border border-slate-700 bg-slate-950 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-500 font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-slate-400">
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