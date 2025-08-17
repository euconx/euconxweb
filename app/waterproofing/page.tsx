"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Droplets, Shield, Clock, Award } from "lucide-react"

export default function WaterproofingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t("waterproofing.hero.title")}</h1>
            <p className="text-xl mb-8 text-slate-200">{t("waterproofing.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                {t("waterproofing.hero.cta1")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("waterproofing.hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("waterproofing.benefits.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t("waterproofing.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("waterproofing.benefits.benefit1.title")}</h3>
                <p className="text-slate-600">{t("waterproofing.benefits.benefit1.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("waterproofing.benefits.benefit2.title")}</h3>
                <p className="text-slate-600">{t("waterproofing.benefits.benefit2.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("waterproofing.benefits.benefit3.title")}</h3>
                <p className="text-slate-600">{t("waterproofing.benefits.benefit3.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("waterproofing.benefits.benefit4.title")}</h3>
                <p className="text-slate-600">{t("waterproofing.benefits.benefit4.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("waterproofing.cta.title")}</h2>
          <p className="text-xl mb-8 text-blue-100">{t("waterproofing.cta.subtitle")}</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3">
            <ArrowRight className="mr-2 h-5 w-5" />
            {t("waterproofing.cta.button")}
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-600 text-center">{t("waterproofing.disclaimer")}</p>
        </div>
      </section>
    </div>
  )
}
