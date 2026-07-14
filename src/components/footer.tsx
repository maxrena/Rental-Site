import { House } from "lucide-react";

const footerLinks = [
  {
    title: "Properties",
    links: [
      { label: "Apartments", href: "#" },
      { label: "Houses", href: "#" },
      { label: "Studios", href: "#" },
      { label: "Luxury", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Safety", href: "#" },
      { label: "Terms & Privacy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-zinc-400 py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center">
                <House size={16} fill="currentColor" strokeWidth={0} className="text-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">
                Havenly
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-[240px]">
              Curated rentals in the world&apos;s most desirable
              neighborhoods. Your next home starts here.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Havenly. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
