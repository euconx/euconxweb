"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Award,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Users,
  Shield,
  Target,
  Building2,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function WhyEuConXPage() {
  const { t } = useLanguage()

  const getString = (key: string): string => {
    const value = t(key)
    return typeof value === "string" ? value : key
  }

  const differentiators = [
    {
      icon: Globe,
      title: getString("whyEuconx.differentiators.marketExpertise.title"),
      description: getString("whyEuconx.differentiators.marketExpertise.description"),
      stat: getString("whyEuconx.differentiators.marketExpertise.stat"),
      statDesc: getString("whyEuconx.differentiators.marketExpertise.statDesc"),
      color: "text-blue-500",
    },
    {
      icon: Award,
      title: getString("whyEuconx.differentiators.provenResults.title"),
      description: getString("whyEuconx.differentiators.provenResults.description"),
      stat: getString("whyEuconx.differentiators.provenResults.stat"),
      statDesc: getString("whyEuconx.differentiators.provenResults.statDesc"),
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: getString("whyEuconx.differentiators.qualityFirst.title"),
      description: getString("whyEuconx.differentiators.qualityFirst.description"),
      stat: getString("whyEuconx.differentiators.qualityFirst.stat"),
      statDesc: getString("whyEuconx.differentiators.qualityFirst.statDesc"),
      color: "text-orange-500",
    },
    {
      icon: DollarSign,
      title: getString("whyEuconx.differentiators.costOptimization.title"),
      description: getString("whyEuconx.differentiators.costOptimization.description"),
      stat: getString("whyEuconx.differentiators.costOptimization.stat"),
      statDesc: getString("whyEuconx.differentiators.costOptimization.statDesc"),
      color: "text-purple-500",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: getString("whyEuconx.benefitsTitle.singleContact.title"),
      description: getString("whyEuconx.benefitsTitle.singleContact.description"),
    },
    {
      icon: Shield,
      title: getString("whyEuconx.benefitsTitle.riskReduction.title"),
      description: getString("whyEuconx.benefitsTitle.riskReduction.description"),
    },
    {
      icon: TrendingUp,
      title: getString("whyEuconx.benefitsTitle.scalability.title"),
      description: getString("whyEuconx.benefitsTitle.scalability.description"),
    },
  ]

  const contractorExperiences = [
    {
      contractor: "Építő Kft. - Budapest",
      project: "Office Complex Energy Retrofit",
      challenge: "Needed 40% energy efficiency improvement within 6 months while maintaining operations",
      solution: "EuConX provided integrated ODE insulation + ASAS facade system with just-in-time delivery",
      results: "42% energy reduction achieved, €180,000 annual savings, project completed 3 weeks early",
      testimonial: "EuConX transformed our impossible deadline into our biggest success story.",
      savings: "€180,000/year",
      timeline: "3 weeks early",
      efficiency: "42% improvement",
    },
    {
      contractor: "Magyar Építészet Zrt. - Debrecen",
      project: "200-Unit Residential EKR Renovation",
      challenge: "Complex EKR compliance requirements across multiple building types with tight budget constraints",
      solution:
        "EuConX designed comprehensive material package with Izocam + Teknopanel systems and managed all certifications",
      results: "100% EKR compliance achieved, 25% cost savings vs. local suppliers, zero delivery delays",
      testimonial: "Their expertise in Hungarian EKR regulations saved us months of bureaucracy.",
      savings: "25% cost reduction",
      timeline: "Zero delays",
      efficiency: "100% EKR compliance",
    },
    {
      contractor: "Innovatív Építő Bt. - Szeged",
      project: "Industrial Warehouse Rapid Construction",
      challenge: "Labor shortage required 70% faster construction with same quality standards",
      solution: "EuConX supplied Teknopanel prefab systems with coordinated installation training and support",
      results: "Construction time reduced by 65%, labor requirements cut by 50%, quality exceeded expectations",
      testimonial: "EuConX didn't just supply materials - they revolutionized our construction process.",
      savings: "50% labor reduction",
      timeline: "65% faster build",
      efficiency: "Superior quality",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="absolute inset-0">
            <img
              src="/construction-supply-chain-hero.png"
              alt="EuConX supply chain excellence"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Why Choose
                </span>
                <br />
                <span className="text-white">EuConX?</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                {getString("whyEuconx.heroSubtitle")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">€2.3M+</div>
                  <div className="text-slate-300 text-sm">Client Cost Savings in 2024</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">100%</div>
                  <div className="text-slate-300 text-sm">On-Time Project Delivery</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">50+</div>
                  <div className="text-slate-300 text-sm">EKR Projects Completed</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  Start Your Project Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{getString("whyEuconx.differentiators.title")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex p-4 bg-slate-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-12 h-12 ${item.color}`} />
                      </div>
                      <div className="mb-6">
                        <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.stat}</div>
                        <div className="text-slate-600 text-sm">{item.statDesc}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Real Contractor Experiences</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how EuConX has transformed construction projects across Hungary with measurable results
              </p>
            </div>

            <div className="space-y-12">
              {contractorExperiences.map((experience, index) => (
                <Card key={index} className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <Building2 className="w-6 h-6 text-orange-500" />
                          <h3 className="text-2xl font-bold text-slate-900">{experience.contractor}</h3>
                        </div>
                        <h4 className="text-lg font-semibold text-orange-600 mb-6">{experience.project}</h4>

                        <div className="space-y-6">
                          <div>
                            <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Target className="w-4 h-4 text-red-500" />
                              Challenge:
                            </h5>
                            <p className="text-slate-600 leading-relaxed">{experience.challenge}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <Shield className="w-4 h-4 text-blue-500" />
                              EuConX Solution:
                            </h5>
                            <p className="text-slate-600 leading-relaxed">{experience.solution}</p>
                          </div>

                          <div>
                            <h5 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              Results:
                            </h5>
                            <p className="text-green-600 font-semibold leading-relaxed">{experience.results}</p>
                          </div>

                          <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-orange-500">
                            <div className="flex items-start gap-3">
                              <Star className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                              <p className="text-slate-700 italic">"{experience.testimonial}"</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats Side */}
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 lg:p-12 text-white flex flex-col justify-center">
                        <h5 className="text-lg font-semibold mb-8 opacity-90">Project Impact</h5>
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold mb-2">{experience.savings}</div>
                            <div className="text-orange-100 text-sm">Cost Savings</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold mb-2">{experience.timeline}</div>
                            <div className="text-orange-100 text-sm">Timeline Performance</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold mb-2">{experience.efficiency}</div>
                            <div className="text-orange-100 text-sm">Quality Achievement</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Benefits */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{getString("whyEuconx.benefitsTitle")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex p-4 bg-white rounded-full mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Icon className="w-12 h-12 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Over 50 Hungarian contractors have transformed their projects with EuConX. You're next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-slate-100 px-8 py-3">
                <Link href="/get-quote">
                  Get Your Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 bg-transparent"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
