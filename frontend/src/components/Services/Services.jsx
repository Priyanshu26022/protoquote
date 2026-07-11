import {
  Cpu,
  Printer,
  Factory,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "CNC Machining",
    icon: Cpu,
    desc: "Precision machining for metal and plastic parts.",
  },
  {
    title: "3D Printing",
    icon: Printer,
    desc: "Rapid prototyping with industrial-grade printers.",
  },
  {
    title: "Injection Molding",
    icon: Factory,
    desc: "Mass manufacturing with high consistency.",
  },
  {
    title: "Sheet Metal",
    icon: Wrench,
    desc: "Laser cutting, bending and fabrication.",
  },
];

function Services() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold">
          Manufacturing Services
        </h2>

        <p className="mb-16 text-center text-slate-400">
          Everything needed to manufacture your product.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 duration-300 hover:border-blue-500"
              >
                <Icon className="mb-6 h-10 w-10 text-blue-500" />

                <h3 className="mb-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Services;