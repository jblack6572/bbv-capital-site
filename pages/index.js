import { Mail, Phone, MapPin } from "lucide-react";

export default function BBVCapitalPage() {
  return (
    <main className="font-sans">
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532510946220-8f491d4999f8?auto=format&fit=crop&w=1400&q=80)' }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold">BBV Capital LLC</h1>
          <p className="mt-4 text-lg max-w-xl">Fiduciary-focused financial advisory for individuals & small businesses. We keep it smart, strategic, and stylish.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 text-lg">
          BBV Capital LLC, based in Austin, TX, is a fee-only registered investment advisor providing portfolio management and financial planning services tailored to your goals.
          Our founders — Jonathon Blackburn, Gerald "Gus" Bennett, and Christopher Musshafen — bring expertise in finance, engineering, and real estate.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Portfolio Management</h3>
              <p className="text-gray-600">Diversified, low-cost index fund portfolios. Transparent 0.5% AUM fee. No hidden charges, ever.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
              <p className="text-gray-600">Full-spectrum planning: retirement, tax, estate. Billed hourly at $250 or project-based ($3k–$20k).</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Fractional CFO</h3>
              <p className="text-gray-600">Through our sister firm Black Moose Financial Group — expert-level finance guidance for growing businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BBV Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Why Work With Us?</h2>
        <p className="text-gray-700 text-lg">
          We believe in passive investing, transparent fees, and avoiding Wall Street nonsense. BBV Capital exists to help you grow your wealth with clarity, honesty, and a touch of flair.
          Our advice is free from commissions, conflicts, and BS. Instead, it’s data-driven, goal-oriented, and always in your best interest.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="flex items-center gap-3 mb-2"><MapPin size={18}/> 8000 Copano Drive, Austin, TX 78749</p>
          <p className="flex items-center gap-3 mb-2"><Phone size={18}/> <a href="tel:8502081344" className="underline">850.208.1344</a></p>
          <p className="flex items-center gap-3"><Mail size={18}/> <a href="mailto:jonathon@bbv-capital.com" className="underline">jonathon@bbv-capital.com</a></p>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6 bg-black">
        <p>© {new Date().getFullYear()} BBV Capital LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
