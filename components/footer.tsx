"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Building2, Truck, Shield, Award, Globe, Zap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const { language, t } = useLanguage()

  // Helper function to ensure we get strings from translations
  const getString = (key: string): string => {
    const value = t(key)
    return typeof value === "string" ? value : key
  }

  const services = Array.isArray(t("footer.services")) ? t("footer.services") : []
  const whyChoose = Array.isArray(t("footer.whyChoose")) ? t("footer.whyChoose") : []

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-gradient-to-b from-euconx-navy to-euconx-black text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-euconx-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-euconx-orange rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 px-4 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          >
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4"
              >
                <div className="flex items-center space-x-2"
                >
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-euconx-orange to-euconx-orange-neon bg-clip-text text-transparent font-orbitron"
                  >EUCONX</span>
                  <Zap className="w-6 h-6 text-euconx-orange animate-pulse" />
                </div>
                <p className="text-euconx-gray-300 text-lg leading-relaxed max-w-md"
                >
                  {getString("footer.companyDesc")}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4"
              >
                <h4 className="text-euconx-orange font-bold text-lg">Get In Touch</h4>
                <div className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-euconx-gray-300 hover:text-euconx-white transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-euconx-orange group-hover:text-euconx-orange-neon transition-colors" />
                    <span className="text-sm">{getString("footer.contact.address")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-euconx-gray-300 hover:text-euconx-white transition-colors group"
                  >
                    <Phone className="w-5 h-5 text-euconx-orange group-hover:text-euconx-orange-neon transition-colors" />
                    <span className="text-sm">{getString("footer.contact.phone")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-euconx-gray-300 hover:text-euconx-white transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-euconx-orange group-hover:text-euconx-orange-neon transition-colors" />
                    <span className="text-sm">{getString("footer.contact.email")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-euconx-gray-300 hover:text-euconx-white transition-colors group"
                  >
                    <Clock className="w-5 h-5 text-euconx-orange group-hover:text-euconx-orange-neon transition-colors" />
                    <span className="text-sm">{getString("footer.contact.hours")}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-euconx-gray-800 hover:bg-euconx-orange rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-euconx-orange/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-euconx-gray-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6"
            >
              <h3 className="text-xl font-bold text-euconx-orange mb-6">{getString("footer.servicesTitle")}</h3>
              <div className="grid grid-cols-2 gap-3"
              >
                {[
                  "Thermal Insulation",
                  "Sound Insulation", 
                  "Waterproofing",
                  "ETICS Facade",
                  "Expert Consulting",
                  "Logistics Services"
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group flex items-center gap-2 text-euconx-gray-300 hover:text-euconx-orange transition-all duration-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-euconx-orange rounded-full group-hover:w-4 transition-all duration-300"></div>
                    <span>{service}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6"
            >
              <h3 className="text-xl font-bold text-euconx-orange mb-6">{getString("footer.navigationTitle")}</h3>
              <div className="space-y-3"
              >
                {[
                  { href: "/", label: getString("nav.home") },
                  { href: "/services", label: getString("footer.servicesTitle") },
                  { href: "/why-euconx", label: getString("footer.whyChooseTitle") },
                  { href: "/partners", label: getString("nav.partners") },
                  { href: "/about", label: getString("nav.about") },
                  { href: "/projects", label: getString("nav.projects") },
                  { href: "/get-quote", label: getString("nav.getQuote") },
                  { href: "/faq", label: "FAQ" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-euconx-gray-300 hover:text-euconx-orange transition-all duration-300 text-sm group"
                  >
                    <span className="border-b border-transparent hover:border-euconx-orange transition-all duration-300"
                    >{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-6"
            >
              <h3 className="text-xl font-bold text-euconx-orange mb-6">{getString("footer.whyChooseTitle")}</h3>
              <div className="space-y-4"
              >
                {[
                  { icon: Building2, title: "Premium Quality", desc: "Direct Turkish partnerships" },
                  { icon: Truck, title: "Reliable Logistics", desc: "On-time delivery across Europe" },
                  { icon: Shield, title: "EU Compliance", desc: "All materials certified" },
                  { icon: Award, title: "15+ Years Experience", desc: "Industry expertise" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group"
                  >
                    <item.icon className="w-5 h-5 text-euconx-orange group-hover:text-euconx-orange-neon transition-colors mt-0.5 flex-shrink-0" />
                    <div className="space-y-1"
                    >
                      <h4 className="text-white text-sm font-semibold group-hover:text-euconx-orange transition-colors"
                      >{item.title}</h4>
                      <p className="text-euconx-gray-400 text-xs group-hover:text-euconx-gray-300 transition-colors"
                      >{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-euconx-gray-800 py-8 px-4 relative z-10"
      >
        <div className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-euconx-gray-400 text-sm text-center md:text-left"
            >
              {getString("footer.copyright")}
            </div>
            <div className="flex flex-wrap gap-6 justify-center"
            >
              <Link href="/privacy" className="text-euconx-gray-400 hover:text-euconx-orange transition-all duration-300 text-sm group"
              >
                <span className="border-b border-transparent hover:border-euconx-orange transition-all duration-300"
                >{getString("footer.legal.privacy")}</span>
              </Link>
              <Link href="/terms" className="text-euconx-gray-400 hover:text-euconx-orange transition-all duration-300 text-sm group"
              >
                <span className="border-b border-transparent hover:border-euconx-orange transition-all duration-300"
                >{getString("footer.legal.terms")}</span>
              </Link>
              <Link href="/cookies" className="text-euconx-gray-400 hover:text-euconx-orange transition-all duration-300 text-sm group"
              >
                <span className="border-b border-transparent hover:border-euconx-orange transition-all duration-300"
                >{getString("footer.legal.cookies")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
