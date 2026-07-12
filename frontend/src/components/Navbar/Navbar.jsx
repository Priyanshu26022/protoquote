import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

       <button
       onClick={() =>
        window.scrollTo({
        top: 0,
          behavior: "smooth",
       })
       }
        className="flex items-center gap-3"
         >
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500 font-black text-slate-950">
            PQ
          </div>

          <span className="text-lg font-semibold">
            ProtoQuote
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-slate-300 hover:text-blue-300 transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={() => alert("Login module coming soon 🚀")}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Login
          </button>

          <button
            onClick={() => scrollToSection("upload")}
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
          >
            Get Started
          </button>

        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 p-4 md:hidden">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full rounded-lg px-3 py-2 text-left text-slate-300 hover:bg-white/5"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => alert("Login module coming soon 🚀")}
            className="mt-3 w-full rounded-lg border border-white/10 px-4 py-2"
          >
            Login
          </button>

          <button
            onClick={() => scrollToSection("quote")}
            className="mt-2 w-full rounded-lg bg-blue-500 px-4 py-2 text-white"
          >
            Get Started
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;