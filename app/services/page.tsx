"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Users, CheckCircle, ArrowRight, Clock, DollarSign, Building2 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const { t } = useLanguage()

  const getString = (key: string): string => {
    const value = t(key)
    return typeof value === "string" ? value : key
  }

  const services = [
    {
      icon: Building2,
      title: getString("servicesPage.supplyChain.title"),
      description: getString("servicesPage.supplyChain.description"),
      features: Array.isArray(t("servicesPage.supplyChain.features"))
        ? (t("servicesPage.supplyChain.features") as string[])
        : [],
    },
    {
      icon: Truck,
      title: getString("servicesPage.logistics.title"),
      description: getString("servicesPage.logistics.description"),
      features: Array.isArray(t("servicesPage.logistics.features"))
        ? (t("servicesPage.logistics.features") as string[])
        : [],
    },
    {
      icon: Users,
      title: getString("servicesPage.consulting.title"),
      description: getString("servicesPage.consulting.description"),
      features: Array.isArray(t("servicesPage.consulting.features"))
        ? (t("servicesPage.consulting.features") as string[])
        : [],
    },
    {
      icon: Shield,
      title: getString("servicesPage.qualityAssurance.title"),
      description: getString("servicesPage.qualityAssurance.description"),
      features: Array.isArray(t("servicesPage.qualityAssurance.features"))
        ? (t("servicesPage.qualityAssurance.features") as string[])
        : [],
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: getString("servicesPage.costSavings.title"),
      description: getString("servicesPage.costSavings.description"),
      color: "text-green-500",
    },
    {
      icon: Clock,
      title: getString("servicesPage.timeReduction.title"),
      description: getString("servicesPage.timeReduction.description"),
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: getString("servicesPage.riskMitigation.title"),
      description: getString("servicesPage.riskMitigation.description"),
      color: "text-orange-500",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {getString("servicesPage.heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {getString("servicesPage.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Link href="/get-quote">{getString("servicesPage.heroCtaMain")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
              >
                <Link href="/get-quote">{getString("servicesPage.heroCtaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{getString("servicesPage.title")}</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">{getString("servicesPage.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                          <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{getString("servicesPage.whyChooseTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex p-4 bg-slate-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-12 h-12 ${benefit.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{getString("servicesPage.ctaTitle")}</h2>
            <p className="text-xl mb-8 opacity-90">{getString("servicesPage.ctaDescription")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-slate-100 px-8 py-3">
                <Link href="/get-quote">
                  {getString("servicesPage.ctaButton")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 bg-transparent"
              >
                <Link href="/projects">{getString("servicesPage.ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
