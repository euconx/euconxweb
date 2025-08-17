"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Building2, Truck, Shield, Award } from "lucide-react"
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

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-orange-500">EuConX</span>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">{getString("footer.companyDesc")}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{getString("footer.contact.address")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{getString("footer.contact.phone")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{getString("footer.contact.email")}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm">{getString("footer.contact.hours")}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-6">{getString("footer.servicesTitle")}</h3>
              <div className="space-y-3">
                <Link
                  href="/thermal-insulation"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[0] || "Thermal Insulation Materials"}</span>
                </Link>
                <Link
                  href="/sound-insulation"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[1] || "Sound Insulation Systems"}</span>
                </Link>
                <Link
                  href="/waterproofing"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[2] || "Waterproofing Solutions"}</span>
                </Link>
                <Link
                  href="/etics-facade"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[3] || "ETICS Facade Systems"}</span>
                </Link>
                <Link
                  href="/expert-consulting"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[4] || "Expert Consulting"}</span>
                </Link>
                <Link
                  href="/logistics-service"
                  className="flex items-center gap-2 text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  <span>{services[5] || "Logistics Services"}</span>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-6">{getString("footer.navigationTitle")}</h3>
              <div className="space-y-3">
                <Link href="/" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  {getString("nav.home")}
                </Link>
                <Link href="/services" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  {getString("footer.servicesTitle")}
                </Link>
                <Link
                  href="/why-euconx"
                  className="block text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  {getString("footer.whyChooseTitle")}
                </Link>
                <Link href="/partners" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  {getString("nav.partners")}
                </Link>
                <Link href="/about" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  {getString("nav.about")}
                </Link>
                <Link href="/projects" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  {getString("nav.projects")}
                </Link>
                <Link
                  href="/get-quote"
                  className="block text-slate-300 hover:text-orange-500 transition-colors text-sm"
                >
                  {getString("nav.getQuote")}
                </Link>
                <Link href="/faq" className="block text-slate-300 hover:text-orange-500 transition-colors text-sm">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-lg font-semibold text-orange-500 mb-6">{getString("footer.whyChooseTitle")}</h3>
              <div className="space-y-4">
                {whyChoose.map((item: any, index: number) => {
                  const icons = [Building2, Truck, Shield, Award]
                  const Icon = icons[index] || Building2
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-white text-sm font-medium">
                          {typeof item.title === "string" ? item.title : "Title"}
                        </h4>
                        <p className="text-slate-400 text-xs">
                          {typeof item.desc === "string" ? item.desc : "Description"}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">{getString("footer.copyright")}</div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-orange-500 transition-colors">
                {getString("footer.legal.privacy")}
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-orange-500 transition-colors">
                {getString("footer.legal.terms")}
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-orange-500 transition-colors">
                {getString("footer.legal.cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
