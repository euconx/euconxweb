"use client"

import { useLanguage } from "@/lib/language-context"
import { ChevronDownIcon, ClockIcon, ShieldCheckIcon, StarIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function FAQPage() {
  const { t } = useLanguage()
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
    { question: t("faq.q6.question"), answer: t("faq.q6.answer") },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-br from-primary via-amber-600 to-amber-700 text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <ShieldCheckIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Trusted by 500+ Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("faq.title")}</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">{t("faq.subtitle")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-muted/50 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-card-foreground pr-4">{faq.question}</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-5">
                    <div className="pt-3 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("faq.socialProof.title")}</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{t("faq.socialProof.stats.projects")}</div>
              <div className="text-sm text-muted-foreground">Completed Successfully</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{t("faq.socialProof.stats.savings")}</div>
              <div className="text-sm text-muted-foreground">Total Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{t("faq.socialProof.stats.delivery")}</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">{t("faq.socialProof.stats.satisfaction")}</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 italic">"{t("faq.socialProof.testimonial1")}"</p>
              <div className="text-sm text-muted-foreground">— {t("faq.socialProof.client1")}</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 italic">"{t("faq.socialProof.testimonial2")}"</p>
              <div className="text-sm text-muted-foreground">— {t("faq.socialProof.client2")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-amber-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">{t("faq.cta.title")}</h2>
          <p className="text-xl text-amber-100 mb-8">{t("faq.cta.subtitle")}</p>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <ClockIcon className="w-4 h-4" />
            <span className="text-sm font-medium text-amber-100">{t("faq.cta.urgency")}</span>
          </div>

          <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-colors shadow-lg">
            {t("faq.cta.button")}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
