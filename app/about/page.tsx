"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/construction-team-meeting.png)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t("aboutPage.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{t("aboutPage.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                {t("aboutPage.ctaButton")}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                {t("aboutPage.ctaSecondary")}
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("aboutPage.teamTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("aboutPage.teamSubtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Ahmet Alptekin KASAR */}
              <div className="team-card p-6 rounded-xl group">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">AK</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {t("aboutPage.teamMembers.ahmet.name")}
                </h3>
                <p className="text-primary font-semibold text-center mb-3">{t("aboutPage.teamMembers.ahmet.title")}</p>
                <p className="text-sm text-muted-foreground mb-4 text-center">{t("aboutPage.teamMembers.ahmet.bio")}</p>
                <div className="expertise-badge text-xs px-3 py-1 rounded-full text-center mb-4">
                  {t("aboutPage.teamMembers.ahmet.expertise")}
                </div>
                <blockquote className="text-xs italic text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "{t("aboutPage.teamMembers.ahmet.quote")}"
                </blockquote>
              </div>

              {/* Efe SARINALBANT */}
              <div className="team-card p-6 rounded-xl group">
                <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <span className="text-2xl font-bold text-secondary">ES</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {t("aboutPage.teamMembers.efe.name")}
                </h3>
                <p className="text-primary font-semibold text-center mb-3">{t("aboutPage.teamMembers.efe.title")}</p>
                <p className="text-sm text-muted-foreground mb-4 text-center">{t("aboutPage.teamMembers.efe.bio")}</p>
                <div className="expertise-badge text-xs px-3 py-1 rounded-full text-center mb-4">
                  {t("aboutPage.teamMembers.efe.expertise")}
                </div>
                <blockquote className="text-xs italic text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "{t("aboutPage.teamMembers.efe.quote")}"
                </blockquote>
              </div>

              {/* Cihan PEYNIRCI */}
              <div className="team-card p-6 rounded-xl group">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <span className="text-2xl font-bold text-accent">CP</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {t("aboutPage.teamMembers.cihan.name")}
                </h3>
                <p className="text-primary font-semibold text-center mb-3">{t("aboutPage.teamMembers.cihan.title")}</p>
                <p className="text-sm text-muted-foreground mb-4 text-center">{t("aboutPage.teamMembers.cihan.bio")}</p>
                <div className="expertise-badge text-xs px-3 py-1 rounded-full text-center mb-4">
                  {t("aboutPage.teamMembers.cihan.expertise")}
                </div>
                <blockquote className="text-xs italic text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "{t("aboutPage.teamMembers.cihan.quote")}"
                </blockquote>
              </div>

              {/* Henriett VINCZE */}
              <div className="team-card p-6 rounded-xl group">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">HV</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {t("aboutPage.teamMembers.henriett.name")}
                </h3>
                <p className="text-primary font-semibold text-center mb-3">
                  {t("aboutPage.teamMembers.henriett.title")}
                </p>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {t("aboutPage.teamMembers.henriett.bio")}
                </p>
                <div className="expertise-badge text-xs px-3 py-1 rounded-full text-center mb-4">
                  {t("aboutPage.teamMembers.henriett.expertise")}
                </div>
                <blockquote className="text-xs italic text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "{t("aboutPage.teamMembers.henriett.quote")}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("aboutPage.historyTitle")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("aboutPage.historySubtitle")}</p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

              <div className="space-y-12">
                {Object.entries({
                  founding: t("aboutPage.milestones.founding"),
                  expansion: t("aboutPage.milestones.expansion"),
                  certification: t("aboutPage.milestones.certification"),
                  growth: t("aboutPage.milestones.growth"),
                  innovation: t("aboutPage.milestones.innovation"),
                  future: t("aboutPage.milestones.future"),
                }).map(([key, milestone], index) => (
                  <div key={key} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="w-1/2 px-8">
                      <div className="timeline-milestone bg-card p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <span className="text-2xl font-bold text-primary mr-4">{milestone?.year || "2024"}</span>
                          <h3 className="text-xl font-bold text-foreground">{milestone?.title || "Milestone"}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{milestone?.description || "Description"}</p>
                        <p className="text-sm font-semibold text-secondary">{milestone?.impact || "Impact"}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("aboutPage.statsTitle")}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
              {Object.entries({
                projects: t("aboutPage.stats.projects"),
                savings: t("aboutPage.stats.savings"),
                delivery: t("aboutPage.stats.delivery"),
                satisfaction: t("aboutPage.stats.satisfaction"),
                partners: t("aboutPage.stats.partners"),
                compliance: t("aboutPage.stats.compliance"),
              }).map(([key, stat]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat?.number || "100+"}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat?.label || "Metric"}</div>
                  <div className="text-xs text-muted-foreground">{stat?.description || "Description"}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries({
                testimonial1: t("aboutPage.clientTestimonials.testimonial1"),
                testimonial2: t("aboutPage.clientTestimonials.testimonial2"),
                testimonial3: t("aboutPage.clientTestimonials.testimonial3"),
              }).map(([key, testimonial]) => (
                <div key={key} className="confidence-card p-6 rounded-xl">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial?.quote || "Great service"}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial?.client || "Client Name"}</div>
                    <div className="text-sm text-primary">{testimonial?.company || "Company"}</div>
                    <div className="text-xs text-muted-foreground">{testimonial?.project || "Project"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">{t("aboutPage.ctaTitle")}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">{t("aboutPage.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-quote"
                className="bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t("aboutPage.ctaButton")}
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-white hover:text-primary"
              >
                {t("aboutPage.ctaSecondary")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
