"use client"

import { useLanguage } from "@/lib/language-context"
import { CheckCircle, Thermometer, Shield, Clock, ArrowRight, Download, Phone } from "lucide-react"
import Link from "next/link"

export default function ThermalInsulationPage() {
  const { t } = useLanguage()

  const getString = (key: string): string => {
    const value = t(key)
    return typeof value === "string" ? value : key
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">{getString("thermalInsulation.heroTitle")}</h1>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                {getString("thermalInsulation.heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  {getString("thermalInsulation.heroCtaMain")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2">
                  {getString("thermalInsulation.heroCtaSecondary")}
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/thermal-insulation-hero.png"
                alt="Thermal Insulation Installation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            {getString("thermalInsulation.whyChoose")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Thermometer className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                {getString("thermalInsulation.benefit1.title")}
              </h3>
              <p className="text-slate-600">{getString("thermalInsulation.benefit1.description")}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                {getString("thermalInsulation.benefit2.title")}
              </h3>
              <p className="text-slate-600">{getString("thermalInsulation.benefit2.description")}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                {getString("thermalInsulation.benefit3.title")}
              </h3>
              <p className="text-slate-600">{getString("thermalInsulation.benefit3.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            {getString("thermalInsulation.products")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg">
              <img src="/stone-wool-insulation.png" alt="Stone Wool Insulation" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {getString("thermalInsulation.product1.title")}
                </h3>
                <p className="text-slate-600 mb-4">{getString("thermalInsulation.product1.description")}</p>
                <ul className="space-y-2">
                  {[
                    "Fire resistance up to 1000°C",
                    "Excellent thermal performance",
                    "Sound absorption",
                    "Moisture resistant",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg">
              <img src="/glass-wool-systems.png" alt="Glass Wool Systems" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {getString("thermalInsulation.product2.title")}
                </h3>
                <p className="text-slate-600 mb-4">{getString("thermalInsulation.product2.description")}</p>
                <ul className="space-y-2">
                  {["Superior thermal efficiency", "Easy installation", "Non-combustible", "Eco-friendly"].map(
                    (feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-lg">
              <img src="/xps-foam-boards.png" alt="XPS Foam Boards" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {getString("thermalInsulation.product3.title")}
                </h3>
                <p className="text-slate-600 mb-4">{getString("thermalInsulation.product3.description")}</p>
                <ul className="space-y-2">
                  {[
                    "Zero water absorption",
                    "High compressive strength",
                    "Long-term stability",
                    "Thermal bridging prevention",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{getString("thermalInsulation.ctaTitle")}</h2>
          <p className="text-xl mb-8 text-orange-100">{getString("thermalInsulation.ctaDescription")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              {getString("thermalInsulation.heroCtaMain")}
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm text-orange-100 mt-8 max-w-2xl mx-auto">{getString("thermalInsulation.disclaimer")}</p>
        </div>
      </section>
    </div>
  )
}
