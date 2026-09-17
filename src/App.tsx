import React, { useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, CheckCircle2, Menu, X, Copy, Check } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#F8F1E3] text-[#2A1B12] font-sans antialiased selection:bg-[#B8813A]/20 selection:text-[#2A1B12]">
      {/* HEADER / NAVIGATION */}
      <header
        id="main-header"
        className="fixed top-0 left-0 right-0 z-50 bg-[#F8F1E3]/95 backdrop-blur-md border-b border-[#2A1B12]/12 transition-shadow duration-300"
      >
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <a
            id="brand-logo"
            href="#home"
            className="font-serif text-2xl font-semibold text-[#2A1B12] tracking-wide flex items-center gap-1 hover:opacity-90 transition-opacity"
          >
            Ravi <span className="text-[#96402B]">Cafe</span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:block">
            <ul className="flex items-center gap-9">
              <li>
                <a
                  id="nav-link-home"
                  href="#home"
                  className="text-[0.95rem] font-medium text-[#4A3527] hover:text-[#96402B] transition-colors pb-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="nav-link-about"
                  href="#about"
                  className="text-[0.95rem] font-medium text-[#4A3527] hover:text-[#96402B] transition-colors pb-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  id="nav-link-registration"
                  href="#registration"
                  className="text-[0.95rem] font-medium text-[#4A3527] hover:text-[#96402B] transition-colors pb-1"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  id="nav-link-contact"
                  href="#contact"
                  className="text-[0.95rem] font-medium text-[#4A3527] hover:text-[#96402B] transition-colors pb-1"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  id="nav-link-privacy"
                  href="#privacy"
                  className="text-[0.95rem] font-medium text-[#4A3527] hover:text-[#96402B] transition-colors pb-1"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2A1B12] hover:text-[#96402B] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="md:hidden bg-[#F8F1E3] border-b border-[#2A1B12]/12 px-6 py-5 shadow-lg animate-fadeIn"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#4A3527] hover:text-[#96402B] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#4A3527] hover:text-[#96402B] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#4A3527] hover:text-[#96402B] transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#4A3527] hover:text-[#96402B] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-[#4A3527] hover:text-[#96402B] transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-[640px] h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20,12,7,0.35) 0%, rgba(20,12,7,0.6) 55%, rgba(20,12,7,0.86) 100%), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=80')`,
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto px-6 sm:px-8 text-[#F8F1E3] pt-16">
          <span
            id="hero-tag-badge"
            className="inline-block text-[0.85rem] tracking-wide text-[#F1E7D3] border border-[#F8F1E3]/40 px-4 py-1.5 rounded-full mb-6"
          >
            Jawahar Colony, Faridabad
          </span>

          <h1
            id="hero-title"
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-serif font-semibold leading-[1.12] max-w-[750px] mb-6 drop-shadow-sm"
          >
            Good food, brewed with care, served with heart.
          </h1>

          <p
            id="hero-description"
            className="max-w-[520px] text-base sm:text-[1.08rem] leading-relaxed text-[#F8F1E3]/85 mb-9"
          >
            Ravi Cafe is a registered micro-enterprise bringing fresh food, quality coffee, and warm hospitality to Faridabad since 2026.
          </p>

          <div id="hero-cta-group" className="flex flex-wrap items-center gap-4">
            <a
              id="hero-cta-contact"
              href="#contact"
              className="inline-block px-8 py-3.5 bg-[#96402B] text-white rounded-md text-[0.95rem] font-semibold hover:bg-[#7d3221] hover:-translate-y-0.5 transition-all shadow-md"
            >
              Get in Touch
            </a>
            <a
              id="hero-cta-registration"
              href="#registration"
              className="inline-block px-8 py-3.5 bg-transparent text-white border border-white/55 rounded-md text-[0.95rem] font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              View Registration
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 bg-[#F8F1E3]">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-[10px] overflow-hidden shadow-[0_18px_40px_rgba(42,27,18,0.14)] aspect-[4/5] bg-[#F1E7D3]">
                <img
                  id="about-cafe-image"
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
                  alt="Interior of Ravi Cafe"
                  className="w-full h-full object-cover"
                />
                <div
                  id="about-since-badge"
                  className="absolute bottom-0 right-0 bg-[#2A1B12] text-[#F8F1E3] px-6 py-5 rounded-tl-[10px] text-center"
                >
                  <strong className="block font-serif text-2xl text-[#B8813A] font-semibold leading-tight">2026</strong>
                  <span className="text-[0.75rem] tracking-wider text-[#F1E7D3] uppercase font-medium">Est. in Faridabad</span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="md:col-span-7">
              <div id="about-eyebrow" className="text-[0.82rem] tracking-wider text-[#8C5A21] font-semibold uppercase mb-3.5">
                About Ravi Cafe
              </div>
              <h2
                id="about-headline"
                className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#2A1B12] leading-[1.18] mb-6"
              >
                A neighbourhood cafe built on freshness and trust
              </h2>
              <p
                id="about-narrative"
                className="text-[#4A3527] text-base sm:text-[1.03rem] leading-relaxed mb-7"
              >
                Ravi Cafe is a proudly registered micro-enterprise nestled in Jawahar Colony, Faridabad, Haryana. Since commencing operations in March 2026, we have been serving the local community with wholesome food, quality beverages, and warm hospitality that keeps guests coming back. Recognised under the Udyam Registration scheme of the Ministry of Micro, Small and Medium Enterprises, Government of India, Ravi Cafe operates within the food and beverage service sector, specialising in cafeteria and fast-food style dining. Every cup we pour and every plate we serve reflects our commitment to freshness, consistency, and genuine care for our customers.
              </p>

              <ul id="about-key-points" className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                <li className="text-[0.95rem] pl-6 relative text-[#4A3527] font-medium">
                  <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#96402B]"></span>
                  Udyam registered MSME
                </li>
                <li className="text-[0.95rem] pl-6 relative text-[#4A3527] font-medium">
                  <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#96402B]"></span>
                  Freshly prepared food daily
                </li>
                <li className="text-[0.95rem] pl-6 relative text-[#4A3527] font-medium">
                  <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#96402B]"></span>
                  Warm, welcoming service
                </li>
                <li className="text-[0.95rem] pl-6 relative text-[#4A3527] font-medium">
                  <span className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#96402B]"></span>
                  Rooted in the Faridabad community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION / UDYAM SECTION */}
      <section id="registration" className="py-20 md:py-28 bg-[#2A1B12] text-[#F8F1E3]">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div id="reg-eyebrow" className="text-[0.82rem] tracking-wider text-[#B8813A] font-semibold uppercase mb-3.5">
            Government Recognition
          </div>
          <h2
            id="reg-title"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-white leading-[1.18] max-w-[600px] mb-3.5"
          >
            Udyam Registration Details
          </h2>
          <p id="reg-subtitle" className="text-[#F8F1E3]/75 max-w-[600px] text-base leading-relaxed mb-12">
            Ravi Cafe is officially recognised as a Micro enterprise by the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
          </p>

          {/* Certificate Card */}
          <div
            id="cert-card-container"
            className="bg-[#F8F1E3] text-[#2A1B12] rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            <div
              id="cert-card-header"
              className="flex flex-wrap items-center justify-between gap-4 p-6 sm:px-9 sm:py-7 bg-[#F1E7D3] border-b border-[#2A1B12]/12"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2A1B12]">
                Udyam Registration Certificate
              </h3>
              <div className="flex items-center gap-2">
                <span
                  id="udyam-reg-badge"
                  className="font-mono text-sm font-semibold bg-[#2A1B12] text-[#B8813A] px-4 py-2 rounded-md tracking-wider inline-flex items-center gap-2"
                >
                  UDYAM-HR-03-0155975
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy('UDYAM-HR-03-0155975', 'udyam')}
                  title="Copy Udyam Registration Number"
                  className="p-2 bg-[#2A1B12]/10 hover:bg-[#2A1B12]/20 rounded-md text-[#2A1B12] transition-colors"
                >
                  {copiedField === 'udyam' ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div id="cert-table-rows" className="px-6 sm:px-9 py-2 divide-y divide-[#2A1B12]/12">
              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Name of Enterprise</div>
                <div className="text-[0.98rem] text-[#4A3527] font-semibold">RAVI CAFE</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Type of Enterprise</div>
                <div className="text-[0.98rem] text-[#4A3527]">Micro (Classification Year 2026–27)</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Major Activity</div>
                <div className="text-[0.98rem] text-[#4A3527]">Services</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Social Category of Entrepreneur</div>
                <div className="text-[0.98rem] text-[#4A3527]">OBC</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">NIC Classification</div>
                <div className="text-[0.98rem] text-[#4A3527] leading-relaxed">
                  56 – Food and Beverage Service Activities › 5610 – Restaurants and Mobile Food Service Activities › 56102 – Cafeterias, Fast-Food Restaurants and Other Food Preparation in Market Stalls
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Registered Address</div>
                <div className="text-[0.98rem] text-[#4A3527]">
                  22-F, Jawahar Colony, Block A, Near Akash Hospital, Faridabad, Haryana – 121004
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Date of Incorporation / Registration</div>
                <div className="text-[0.98rem] text-[#4A3527]">01/04/2026</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Date of Commencement of Business</div>
                <div className="text-[0.98rem] text-[#4A3527]">01/03/2026</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 md:gap-5 py-4">
                <div className="text-[0.88rem] font-semibold text-[#8C5A21]">Date of Udyam Registration</div>
                <div className="text-[0.98rem] text-[#4A3527]">20/05/2026</div>
              </div>
            </div>

            <div
              id="cert-card-footer"
              className="px-6 sm:px-9 py-6 sm:py-8 bg-[#F1E7D3] border-t border-[#2A1B12]/12 flex flex-wrap items-center justify-between gap-5"
            >
              <p className="text-[0.85rem] text-[#4A3527] max-w-[440px] leading-normal">
                This certificate is computer generated and issued by the Ministry of MSME, Government of India via udyamregistration.gov.in.
              </p>
              <a
                id="verify-udyam-btn"
                href="https://udyamregistration.gov.in/Udyam_Verify.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A1B12] text-[#F8F1E3] rounded-md text-[0.95rem] font-medium hover:bg-[#1b110a] hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <span>Verify on Official Website</span>
                <ExternalLink className="w-4 h-4 text-[#B8813A]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 bg-[#F8F1E3]">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Contact Details & Map */}
            <div id="contact-info-panel">
              <div className="text-[0.82rem] tracking-wider text-[#8C5A21] font-semibold uppercase mb-3.5">
                Contact Us
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#2A1B12] leading-[1.18] mb-4">
                Visit or reach out to us
              </h2>
              <p className="text-[#4A3527] text-base leading-relaxed mb-9 max-w-[440px]">
                Have a question, feedback, or want to place a bulk order? We would love to hear from you.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[10px] bg-[#F1E7D3] flex items-center justify-center flex-shrink-0 text-[#96402B] text-lg font-bold group-hover:bg-[#96402B] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.95rem] font-semibold text-[#2A1B12] mb-0.5">Phone</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="tel:+918987676545"
                        className="text-[0.92rem] text-[#4A3527] hover:text-[#96402B] font-medium transition-colors"
                      >
                        +91 89876 76545
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('+91 89876 76545', 'phone')}
                        className="text-xs text-[#8C5A21] hover:underline flex items-center gap-1"
                      >
                        {copiedField === 'phone' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[10px] bg-[#F1E7D3] flex items-center justify-center flex-shrink-0 text-[#96402B] text-lg font-bold group-hover:bg-[#96402B] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[0.95rem] font-semibold text-[#2A1B12] mb-0.5">Email</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:jatavnitin0077@gmail.com"
                        className="text-[0.92rem] text-[#4A3527] hover:text-[#96402B] font-medium transition-colors break-all"
                      >
                        jatavnitin0077@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('jatavnitin0077@gmail.com', 'email')}
                        className="text-xs text-[#8C5A21] hover:underline flex items-center gap-1"
                      >
                        {copiedField === 'email' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-[10px] bg-[#F1E7D3] flex items-center justify-center flex-shrink-0 text-[#96402B] text-lg font-bold group-hover:bg-[#96402B] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold text-[#2A1B12] mb-0.5">Address</h4>
                    <p className="text-[0.92rem] text-[#4A3527] leading-relaxed">
                      22-F, Jawahar Colony, Block A, Near Akash Hospital, Faridabad, Haryana – 121004
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div
                id="google-maps-wrapper"
                className="mt-8 rounded-[10px] overflow-hidden shadow-[0_18px_40px_rgba(42,27,18,0.14)] border border-[#2A1B12]/12 bg-[#F1E7D3]"
              >
                <iframe
                  id="google-map-iframe"
                  src="https://maps.google.com/maps?q=Jawahar%20Colony%2C%20Near%20Akash%20Hospital%2C%20Faridabad%2C%20Haryana%20121004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ravi Cafe location map"
                  className="w-full h-[260px] border-0 block"
                ></iframe>
              </div>
            </div>

            {/* Right Contact Form */}
            <div
              id="inquiry-form-card"
              className="bg-white rounded-xl p-8 sm:p-11 shadow-[0_18px_40px_rgba(42,27,18,0.14)] border border-[#2A1B12]/12"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#2A1B12] mb-2">
                Send an inquiry
              </h3>
              <p className="text-[0.92rem] text-[#4A3527] mb-7">
                Fill in the form and our team will get back to you shortly.
              </p>

              {formSubmitted ? (
                <div
                  id="form-success-banner"
                  className="bg-[#F8F1E3] border border-[#B8813A]/40 rounded-lg p-6 text-center animate-fadeIn"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#2A1B12] mb-1">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-[0.92rem] text-[#4A3527] mb-4">
                    Your inquiry has been noted. We will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#96402B] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-[0.85rem] font-semibold text-[#4A3527] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-[7px] border border-[#2A1B12]/12 bg-[#F8F1E3] font-sans text-[0.95rem] text-[#2A1B12] focus:outline-2 focus:outline-[#B8813A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[0.85rem] font-semibold text-[#4A3527] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-[7px] border border-[#2A1B12]/12 bg-[#F8F1E3] font-sans text-[0.95rem] text-[#2A1B12] focus:outline-2 focus:outline-[#B8813A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[0.85rem] font-semibold text-[#4A3527] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 rounded-[7px] border border-[#2A1B12]/12 bg-[#F8F1E3] font-sans text-[0.95rem] text-[#2A1B12] focus:outline-2 focus:outline-[#B8813A] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[0.85rem] font-semibold text-[#4A3527] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-[7px] border border-[#2A1B12]/12 bg-[#F8F1E3] font-sans text-[0.95rem] text-[#2A1B12] focus:outline-2 focus:outline-[#B8813A] focus:bg-white transition-all resize-y min-h-[110px]"
                    ></textarea>
                  </div>

                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    className="w-full py-3.5 bg-[#96402B] text-white rounded-[6px] text-[0.95rem] font-semibold hover:bg-[#7d3221] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY SECTION */}
      <section id="privacy" className="py-20 md:py-28 bg-[#F1E7D3]">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div
            id="privacy-card-container"
            className="max-w-[820px] mx-auto bg-white rounded-xl p-8 sm:p-12 shadow-[0_18px_40px_rgba(42,27,18,0.14)] border border-[#2A1B12]/12"
          >
            <div className="text-[0.82rem] tracking-wider text-[#8C5A21] font-semibold uppercase mb-3.5">
              Privacy Policy
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] font-semibold text-[#2A1B12] leading-[1.2] mb-6">
              Your privacy matters to us
            </h2>
            <div className="space-y-4 text-[#4A3527] text-base leading-relaxed">
              <p>
                At Ravi Cafe, we respect your privacy and ensure that all personal information shared through this website remains secure. Information collected through inquiry forms such as name, email, or phone number is used only for communication and service purposes.
              </p>
              <p>
                We do not sell or share personal information with third parties. Information may only be disclosed if required by law.
              </p>
              <p>
                By using this website you agree to this privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="main-footer" className="bg-[#2A1B12] text-[#F1E7D3] pt-16 sm:pt-20">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div
            id="footer-grid-columns"
            className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-[#F8F1E3]/15"
          >
            {/* Col 1 */}
            <div className="md:col-span-6 lg:col-span-5">
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4">
                Ravi Cafe
              </h4>
              <p className="text-[0.92rem] text-[#F8F1E3]/70 leading-relaxed max-w-[420px]">
                A Udyam-registered micro enterprise in Faridabad, Haryana, serving fresh food, quality beverages, and warm hospitality in the food and beverage service sector.
              </p>
            </div>

            {/* Col 2 */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="font-serif text-lg font-semibold text-white mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-[0.92rem] text-[#F8F1E3]/70">
                <li>
                  <a href="tel:+918987676545" className="hover:text-white transition-colors">
                    Phone: +91 89876 76545
                  </a>
                </li>
                <li>
                  <a href="mailto:jatavnitin0077@gmail.com" className="hover:text-white transition-colors break-all">
                    Email: jatavnitin0077@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="md:col-span-3 lg:col-span-4">
              <h4 className="font-serif text-lg font-semibold text-white mb-4">
                Address
              </h4>
              <ul className="space-y-2 text-[0.92rem] text-[#F8F1E3]/70 leading-relaxed">
                <li>22-F, Jawahar Colony, Block A</li>
                <li>Near Akash Hospital, Faridabad</li>
                <li>Haryana – 121004, India</li>
              </ul>
            </div>
          </div>

          <div
            id="footer-copyright-bar"
            className="text-center py-7 text-xs sm:text-[0.85rem] text-[#F8F1E3]/50"
          >
            © 2026 Ravi Cafe. All rights reserved. | Udyam Reg. No. UDYAM-HR-03-0155975
          </div>
        </div>
      </footer>
    </div>
  );
}

