"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="scroll-smooth font-sans text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <a href="#hero" className="font-bold text-xl">BBV Capital</a>
          <nav className="hidden md:flex gap-8">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-primary transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white border-t shadow-inner"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center bg-[url('/hero.jpg')] bg-cover bg-center text-white relative"
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-xl p-8 backdrop-blur-sm bg-white/10 rounded-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Independent • Fee-Only • Fiduciary
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Transparent investment advice for individuals & small businesses
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Schedule a Free Consultation</a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative z-10 absolute bottom-8"
        >
          <ChevronDown size={36} />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About BBV Capital</h2>
          <p className="text-lg leading-relaxed">
            BBV Capital LLC is a Texas-based, state-registered investment adviser founded by
            Jonathon Blackburn, PE, and Gerald “Gus” Bennett. We combine rigorous engineering-style
            analysis with real-estate expertise to deliver holistic wealth solutions that put our
            clients’ interests first.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
                <p className="mb-4">
                  Continuous, discretionary management focused on diversified, low-cost ETF portfolios.
                  Flat <strong>0.50% AUM</strong> fee. No commissions, no hidden costs.
                </p>
                <Button asChild variant="ghost">
                  <a href="#contact">Start Today</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-2">Comprehensive Financial Planning</h3>
                <p className="mb-4">
                  Retirement, tax, estate, and cash‑flow planning—delivered hourly at
                  <strong> $250/hr</strong> or fixed‑fee projects from <strong>$3k–20k</strong>.
                </p>
                <Button asChild variant="ghost">
                  <a href="#contact">Book a Discovery Call</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Investment Philosophy</h2>
          <p className="text-lg leading-relaxed">
            Evidence matters. Research shows that after fees, most active managers underperform.
            That’s why we embrace a low-cost, passive core, tilting toward factors that drive
            long‑term returns and aligning risk with your goals—keeping more of the market’s
            growth in your pocket.
          </p>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <img
                  src="/jonathon.jpg"
                  alt="Jonathon Blackburn"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Jonathon Blackburn, PE</h3>
                <p className="text-sm text-gray-600 mb-4">Principal & Lead Advisor</p>
                <p>
                  15+ years across corporate finance & renewable energy. Degrees from Duke & Cambridge.
                  Licensed Professional Engineer.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <img
                  src="/gus.jpg"
                  alt="Gerald Bennett"
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">Gerald “Gus” Bennett</h3>
                <p className="text-sm text-gray-600 mb-4">Co‑Founder & Advisor</p>
                <p>
                  U.S. Navy veteran & real‑estate developer bringing strategic planning expertise to client
                  portfolios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Let’s Talk</h2>
          <p className="mb-10">
            Ready to build a plan that works as hard as you do? Reach out and schedule a complimentary
            consultation.
          </p>
          <div className="space-y-3 text-lg">
            <p>
              📞 <a href="tel:8502081344" className="underline">850‑208‑1344</a>
            </p>
            <p>
              📧 <a href="mailto:jonathon@bbv-capital.com" className="underline">jonathon@bbv-capital.com</a>
            </p>
            <p>📍 8000 Copano Drive | Austin, TX 78749</p>
          </div>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="/Form%20ADV%20BBV%20Capital%20LLC.pdf" target="_blank" rel="noopener noreferrer">
                Download Form ADV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-900 text-white">
        <p>
          © {new Date().getFullYear()} BBV Capital LLC. Registration as an investment adviser does
          not imply a certain level of skill or training.
        </p>
      </footer>
    </main>
  );
}
