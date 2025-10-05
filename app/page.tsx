"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, CircleCheck as CheckCircle, Users, Clock, Building2, Truck, Shield, Zap, TrendingUp, Award, Star, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <Users className="w-10 h-10" />,
      title: t("services.sourcing"),
      description: t("services.sourcingDesc"),
      stat: "50+",
      statLabel: "Partners",
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: t("services.procurement"),
      description: t("services.procurementDesc"),
      stat: "24h",
      statLabel: "Response",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: t("services.delivery"),
      description: t("services.deliveryDesc"),
      stat: "5-7d",
      statLabel: "Delivery",
    },
  ]

  const stats = [
    { value: "500+", label: "Successful Projects", icon: <Award className="w-6 h-6" /> },
    { value: "€5M+", label: "Client Savings", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "99.8%", label: "On-Time Delivery", icon: <Truck className="w-6 h-6" /> },
    { value: "100%", label: "EU Compliance", icon: <Shield className="w-6 h-6" /> },
  ]

  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Direct partnerships with leading Turkish manufacturers for unmatched material excellence",
      benefit: "30% cost savings",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Reliable Logistics",
      description: "On-time delivery across Central Europe with real-time tracking and guaranteed schedules",
      benefit: "99.8% on-time rate",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "EU Compliance",
      description: "All materials exceed European standards with complete CE certification and documentation",
      benefit: "Zero compliance issues",
    },
  ]

  const trustBadges = [
    { label: "ISO 9001 Certified", icon: <Award className="w-5 h-5" /> },
    { label: "CE Marking", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "15+ Years Experience", icon: <Star className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
            <div className="absolute inset-0">
              <img
                src="/construction-supply-chain-hero.png"
                alt="Modern construction supply chain"
                className="w-full h-full object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>

          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-400">Trusted by 500+ Construction Companies</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  {t("hero.title")}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  {t("hero.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/get-quote"
                    className="group relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
                  >
                    <span className="relative z-10">{t("hero.cta")}</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-xl" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center border-2 border-white/30 hover:border-orange-500 bg-white/5 backdrop-blur-sm text-white hover:text-orange-500 font-semibold py-5 px-10 rounded-xl text-lg transition-all duration-300 hover:bg-white/10"
                  >
                    {t("about.learnMore")}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                  {trustBadges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400">
                      <div className="text-orange-500">{badge.icon}</div>
                      <span className="text-sm font-medium">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-lg ml-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-slate-800/20 rounded-3xl backdrop-blur-3xl" />
                  <img
                    src="/turkish-insulation-factory.png"
                    alt="Turkish insulation factory"
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-2xl border border-orange-400/20">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-1">15+</div>
                      <div className="text-sm opacity-90">Years Excellence</div>
                    </div>
                  </div>
                  <div className="absolute -top-6 -left-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-white/10 backdrop-blur-sm">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-1 text-orange-500">€5M+</div>
                      <div className="text-sm opacity-90">Client Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Services Section - Enhanced */}
        <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                <Zap className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-600">Complete Solutions</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive supply chain solutions for your construction material needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/5 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <div className="text-3xl font-bold text-orange-600">{service.stat}</div>
                        <div className="text-sm text-slate-500">{service.statLabel}</div>
                      </div>
                      <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
                  <Building2 className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-semibold text-orange-600">Your Trusted Partner</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">{t("about.title")}</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">{t("about.description")}</p>
                <div className="grid grid-cols-1 gap-6 mb-10">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`group relative p-6 bg-white rounded-2xl border-2 transition-all duration-300 hover:border-orange-500 hover:shadow-xl ${
                        activeFeature === index ? 'border-orange-500 shadow-xl' : 'border-slate-200'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          activeFeature === index ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-orange-100 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600'
                        }`}>
                          <div className={`transition-all duration-300 ${
                            activeFeature === index ? 'text-white' : 'text-orange-500 group-hover:text-white'
                          }`}>{feature.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-lg text-slate-900">{feature.title}</h4>
                            <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                              {feature.benefit}
                            </span>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {t("about.learnMore")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-slate-800/20 rounded-3xl blur-3xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src="/construction-team-meeting.png"
                      alt="Professional construction team"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-2xl border-4 border-white">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold mb-2">15+</div>
                      <div className="text-sm font-medium opacity-90">Years Excellence</div>
                    </div>
                  </div>
                  <div className="absolute -top-8 -left-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 shadow-2xl border-4 border-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1 text-orange-500">50+</div>
                      <div className="text-sm font-medium text-white">Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section - Enhanced */}
        <section className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-400">Proven Track Record</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Results That Speak</h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Industry-leading performance across Central Europe
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative p-8 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-orange-500">{stat.icon}</div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-6xl font-bold text-white mb-3 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-slate-300 text-sm font-medium leading-tight">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Get Started in 24 Hours</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get access to premium Turkish construction materials with reliable delivery across Central Europe.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link
                href="/get-quote"
                className="group relative inline-flex items-center bg-white hover:bg-slate-50 text-orange-600 font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
              >
                Get Your Quote Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-6 px-12 rounded-2xl text-xl transition-all duration-300"
              >
                View Success Stories
                <ChevronRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-orange-100">Quote Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5-7d</div>
                <div className="text-sm text-orange-100">Delivery Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-orange-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
