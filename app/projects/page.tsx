"use client"

import { useLanguage } from "@/lib/language-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ProjectsPage() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState("all")

  const ekrProjects = [
    {
      id: "attic-insulation",
      name: t("projects.atticInsulation"),
      description: t("projects.atticInsulationDesc"),
      details: t("projects.atticInsulationDetails"),
      image: "/attic-insulation-project.png",
      category: "insulation",
      location: "Budapest, XIII. kerület",
      year: "2024",
      materials: ["ODE Starflex üveggyapot", "Gőzzáró membrán", "Hőhíd megszakító"],
      metrics: {
        energySavings: "40%",
        duration: "3 hét",
        units: "120 lakás",
        satisfaction: "98%",
      },
      supplier: "ODE Insulation",
      certification: "EKR A+ minősítés",
    },
    {
      id: "window-renewal",
      name: t("projects.windowRenewal"),
      description: t("projects.windowRenewalDesc"),
      details: t("projects.windowRenewalDetails"),
      image: "/window-renewal-project.png",
      category: "windows",
      location: "Debrecen",
      year: "2024",
      materials: ["ADO PVC nyílászárók", "Háromrétegű üvegezés", "Argon töltés"],
      metrics: {
        thermalImprovement: "35%",
        windows: "850 db",
        compliance: "100% EU",
        warranty: "15 év",
      },
      supplier: "ADO Group",
      certification: "CE jelölés",
    },
    {
      id: "heat-glass",
      name: t("projects.heatGlassInstallation"),
      description: t("projects.heatGlassInstallationDesc"),
      details: t("projects.heatGlassInstallationDetails"),
      image: "/heat-glass-project.png",
      category: "glazing",
      location: "Szeged",
      year: "2024",
      materials: ["Hőszigetelő üveg", "Low-E bevonat", "Argon töltés"],
      metrics: {
        heatReduction: "45%",
        buildings: "25 épület",
        certification: "A+",
        payback: "4.2 év",
      },
      supplier: "ADO Group",
      certification: "Energetikai A+ tanúsítvány",
    },
    {
      id: "facade-update",
      name: t("projects.facadeUpdate"),
      description: t("projects.facadeUpdateDesc"),
      details: t("projects.facadeUpdateDetails"),
      image: "/facade-update-project.png",
      category: "facade",
      location: "Pécs",
      year: "2023",
      materials: ["BONUS XPS lemez", "EPS rendszer", "IZOCAM kőgyapot"],
      metrics: {
        performance: "50%",
        fireRating: "A1",
        area: "12,000 m²",
        maintenance: "25 év",
      },
      supplier: "BONUS YALITIM + IZOCAM",
      certification: "Tűzvédelmi A1 osztály",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? ekrProjects : ekrProjects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              150+ Successful EKR Projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">{t("projects.title")}</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {t("projects.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="turkish-supplier-trust px-4 py-2 rounded-full">🇹🇷 Turkish Manufacturing Excellence</div>
              <div className="energy-savings-badge px-4 py-2 rounded-full">⚡ Average 42% Energy Savings</div>
              <div className="certification-badge px-4 py-2 rounded-full">✓ 100% EU Compliance</div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { key: "all", label: "All Projects" },
                { key: "insulation", label: "Insulation" },
                { key: "windows", label: "Windows & Doors" },
                { key: "glazing", label: "Glazing Systems" },
                { key: "facade", label: "Facade Systems" },
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="ekr-project-card rounded-xl overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg?height=256&width=512&query=modern construction project"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                      <span className="certification-badge px-3 py-1 rounded-full text-sm font-semibold">
                        {project.certification}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 turkish-supplier-trust px-3 py-1 rounded-full text-sm font-semibold">
                      {project.supplier}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.name}</h3>
                    <p className="text-primary font-semibold mb-4">{project.description}</p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.details}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-foreground text-sm font-semibold mb-1">Location</p>
                        <p className="text-muted-foreground text-sm">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-semibold mb-1">Category</p>
                        <p className="text-muted-foreground text-sm capitalize">{project.category}</p>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Project Success Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-primary project-metric-highlight">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-foreground text-sm font-semibold mb-2">Materials Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.materials.map((material, idx) => (
                          <span
                            key={idx}
                            className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full border border-accent/20"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Proven Turkish Manufacturing Excellence</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Why Hungarian construction companies trust Turkish suppliers for EKR projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-slate-800 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-accent font-semibold mb-2">Completed EKR Projects</div>
                <div className="text-slate-400 text-sm">Since 2020</div>
              </div>

              <div className="text-center p-6 bg-slate-800 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">42%</div>
                <div className="text-accent font-semibold mb-2">Average Energy Savings</div>
                <div className="text-slate-400 text-sm">Across all projects</div>
              </div>

              <div className="text-center p-6 bg-slate-800 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-accent font-semibold mb-2">EU Compliance Rate</div>
                <div className="text-slate-400 text-sm">All materials certified</div>
              </div>

              <div className="text-center p-6 bg-slate-800 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">96%</div>
                <div className="text-accent font-semibold mb-2">Client Retention</div>
                <div className="text-slate-400 text-sm">Repeat business rate</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "EuConX delivered exceptional results with Turkish glass wool systems. 40% energy savings exceeded our
                  expectations."
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">Budapest Housing Association</p>
                  <p className="text-sm text-slate-400">Attic Insulation Program</p>
                  <p className="text-sm text-accent font-semibold">€180,000 annual savings</p>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "Outstanding quality and reliability. Turkish insulation materials proved superior to previous
                  suppliers."
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">Debrecen Municipality</p>
                  <p className="text-sm text-slate-400">Public Building Facade Renovation</p>
                  <p className="text-sm text-accent font-semibold">2 weeks ahead of schedule</p>
                </div>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
                <p className="text-slate-300 mb-4 italic">
                  "ADO Group's window systems transformed our buildings' energy performance. Excellent partnership with
                  EuConX."
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-semibold text-white">Szeged Construction Group</p>
                  <p className="text-sm text-slate-400">Commercial Window Renewal</p>
                  <p className="text-sm text-accent font-semibold">35% thermal improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Next EKR Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 150+ successful projects with proven Turkish manufacturing excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-quote"
                className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get EKR Consultation
              </a>
              <a
                href="/projects/case-studies"
                className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Download Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
