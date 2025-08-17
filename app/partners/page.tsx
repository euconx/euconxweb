"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function PartnersPage() {
  const { t } = useLanguage()

  const partners = [
    {
      name: "ODE INSULATION",
      logo: "/ode-insulation-logo.png",
      description: t("partners.odeDesc") || "Complete Thermal Insulation Portfolio",
      details:
        t("partners.odeDetails") ||
        "Leading Turkish manufacturer of stone wool, glass wool and XPS insulation materials",
      products: ["Starflex Flexible Duct Insulation", "R-Flex Elastomeric Rubber", "Rockflex Stone Wool"],
      ekrBenefit: "30% Energy Reduction",
      certification: "CE Marked",
      availability: "Limited Stock",
      clientCount: "500+",
    },
    {
      name: "IZOCAM INSULATION",
      logo: "/izocam-insulation.png",
      description: t("partners.izocamDesc") || "Sustainable Insulation Solutions",
      details: t("partners.izocamDetails") || "Eco-friendly stone wool and specialized industrial insulation materials",
      products: ["Glass Wool Insulation", "Stone Wool Products", "Duct Board Systems"],
      ekrBenefit: "40% Energy Savings",
      certification: "ISO 14001",
      availability: "In Stock",
      clientCount: "750+",
    },
    {
      name: "ADO GROUP",
      logo: "/ado-group-logo.png",
      description: "Innovative Construction Solutions",
      details: "Turkey's largest wooden composite door producer with integrated building solutions",
      products: ["ADOKAPI Composite Doors", "ADOFLOOR LVT Flooring", "ADOPEN PVC Windows"],
      ekrBenefit: "25% Thermal Efficiency",
      certification: "EU Standards",
      availability: "Fast Delivery",
      clientCount: "1000+",
    },
    {
      name: "BONUS YALITIM",
      logo: "/bonus-yalitim-logo.png",
      description: "Environmental Insulation Leadership",
      details: "Environmentally conscious insulation solutions with exceptional performance",
      products: ["XPS Thermal Insulation", "Stone Wool Systems", "Waterproofing Membranes"],
      ekrBenefit: "35% Energy Reduction",
      certification: "Green Building",
      availability: "Exclusive Access",
      clientCount: "300+",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Trusted by 2,500+ Hungarian Contractors
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Premium Turkish
              <span className="text-primary block">Manufacturing Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Exclusive access to Turkey's leading insulation manufacturers.
              <span className="text-primary font-semibold"> Limited partnerships available.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 pulse-glow">
                View Partnership Benefits
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Request Exclusive Access
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Manufacturing Partners</h2>
              <p className="text-xl text-muted-foreground">
                Exclusive partnerships with Turkey's top 4 insulation manufacturers
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 card-hover relative overflow-hidden group"
                >
                  {/* Scarcity badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold scarcity-badge">
                      {partner.availability}
                    </span>
                  </div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{partner.name}</h3>
                      <p className="text-primary font-semibold mb-2">{partner.description}</p>
                      <p className="text-muted-foreground text-sm">{partner.details}</p>
                    </div>
                  </div>

                  {/* EKR Benefits */}
                  <div className="bg-primary/5 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-muted-foreground">EKR Project Benefits</span>
                      <span className="text-2xl font-bold text-primary">{partner.ekrBenefit}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {partner.certification}
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {partner.clientCount} Projects
                      </span>
                    </div>
                  </div>

                  {/* Popular Products */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Most Popular EKR Products</h4>
                    <div className="space-y-2">
                      {partner.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300">
                      Get Quote
                    </button>
                    <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all duration-300">
                      View Products
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Proven Results</h2>
              <p className="text-xl text-muted-foreground">Real success stories from Hungarian contractors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">€2.3M</div>
                <div className="text-sm text-muted-foreground mb-4">Cost Savings Achieved</div>
                <p className="text-sm text-foreground">
                  "EuConX partnerships reduced our material costs by 35% while improving quality."
                </p>
                <div className="mt-4 text-xs text-muted-foreground">- Budapest Construction Ltd.</div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-muted-foreground mb-4">Faster Project Delivery</div>
                <p className="text-sm text-foreground">
                  "Streamlined supply chain eliminated delays and improved our project timelines."
                </p>
                <div className="mt-4 text-xs text-muted-foreground">- Magyar Építő Kft.</div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground mb-4">Client Satisfaction Rate</div>
                <p className="text-sm text-foreground">
                  "Premium Turkish materials exceeded our expectations for EKR compliance."
                </p>
                <div className="mt-4 text-xs text-muted-foreground">- Debrecen Renovations</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Exclusive Partnership Program</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Join our select network of Hungarian contractors with privileged access to Turkey's premium
                manufacturers.
                <span className="text-primary font-semibold"> Only 50 partnerships available this year.</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Priority Access</h3>
                  <p className="text-muted-foreground text-sm">First access to new products and exclusive pricing</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technical Support</h3>
                  <p className="text-muted-foreground text-sm">Direct line to Turkish engineering teams</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Joint Marketing</h3>
                  <p className="text-muted-foreground text-sm">Co-branded marketing materials and case studies</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Apply for Partnership
                </button>
                <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
