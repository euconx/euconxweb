"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Users, Lightbulb, Target, Award } from "lucide-react"

export default function ExpertConsultingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t("expertConsulting.hero.title")}</h1>
            <p className="text-xl mb-8 text-slate-200">{t("expertConsulting.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                {t("expertConsulting.hero.cta1")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("expertConsulting.hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("expertConsulting.services.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t("expertConsulting.services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("expertConsulting.services.service1.title")}</h3>
                <p className="text-slate-600">{t("expertConsulting.services.service1.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("expertConsulting.services.service2.title")}</h3>
                <p className="text-slate-600">{t("expertConsulting.services.service2.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("expertConsulting.services.service3.title")}</h3>
                <p className="text-slate-600">{t("expertConsulting.services.service3.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("expertConsulting.services.service4.title")}</h3>
                <p className="text-slate-600">{t("expertConsulting.services.service4.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("expertConsulting.cta.title")}</h2>
          <p className="text-xl mb-8 text-purple-100">{t("expertConsulting.cta.subtitle")}</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 px-8 py-3">
            <ArrowRight className="mr-2 h-5 w-5" />
            {t("expertConsulting.cta.button")}
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-600 text-center">{t("expertConsulting.disclaimer")}</p>
        </div>
      </section>
    </div>
  )
}
