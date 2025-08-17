"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, CheckCircle, Users, Clock, Building2, Truck, Shield } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t("services.sourcing"),
      description: t("services.sourcingDesc"),
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t("services.procurement"),
      description: t("services.procurementDesc"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("services.delivery"),
      description: t("services.deliveryDesc"),
    },
  ]

  const stats = [
    { value: "65%", label: t("stats.experienceShortages") },
    { value: "72%", label: t("stats.highCostInflation") },
    { value: "70%", label: t("stats.unpredictableDelivery") },
    { value: "59%", label: t("stats.projectDelays") },
  ]

  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Direct partnerships with leading Turkish manufacturers",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliable Logistics",
      description: "On-time delivery across Central Europe",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "EU Compliance",
      description: "All materials meet European standards",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <img
              src="/construction-supply-chain-hero.png"
              alt="Modern construction supply chain"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{t("hero.title")}</h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">{t("hero.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-orange-500 text-white hover:text-orange-500 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  {t("about.learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive supply chain solutions for your construction material needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200"
                >
                  <div className="w-16 h-16 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{t("about.title")}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">{t("about.description")}</p>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-orange-500">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                        <p className="text-slate-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group"
                >
                  {t("about.learnMore")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/turkish-insulation-factory.png"
                    alt="Turkish insulation factory"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">{t("stats.title")}</h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Understanding the challenges facing construction projects today
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-5xl font-bold text-orange-500 mb-3">{stat.value}</div>
                  <div className="text-slate-300 text-sm leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get access to premium Turkish construction materials with reliable delivery across Central Europe.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center bg-white hover:bg-slate-50 text-orange-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Get Your Quote Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
