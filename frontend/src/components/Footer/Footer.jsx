import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-800 bg-slate-950 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              ProtoQuote
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              AI-powered manufacturing quotation platform that helps
              businesses upload CAD files, estimate manufacturing costs,
              estimate lead times and connect with manufacturers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>priyanshu@protoquote.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Greater Noida, India</span>
              </div>

            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Links
            </h3>

            <div className="space-y-3">

              <a
                href="https://github.com/Priyanshu"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-400 hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="block text-slate-400 hover:text-blue-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 ProtoQuote • Built with React, FastAPI & AI
        </div>

      </div>
    </footer>
  );
}

export default Footer;