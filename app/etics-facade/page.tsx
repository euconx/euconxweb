"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, ArrowRight, Home, Zap, Shield, TrendingUp } from "lucide-react"

export default function EticsFacadePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t("eticsFacade.hero.title")}</h1>
            <p className="text-xl mb-8 text-slate-200">{t("eticsFacade.hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                {t("eticsFacade.hero.cta1")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("eticsFacade.hero.cta2")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("eticsFacade.benefits.title")}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{t("eticsFacade.benefits.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("eticsFacade.benefits.benefit1.title")}</h3>
                <p className="text-slate-600">{t("eticsFacade.benefits.benefit1.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Home className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("eticsFacade.benefits.benefit2.title")}</h3>
                <p className="text-slate-600">{t("eticsFacade.benefits.benefit2.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("eticsFacade.benefits.benefit3.title")}</h3>
                <p className="text-slate-600">{t("eticsFacade.benefits.benefit3.desc")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t("eticsFacade.benefits.benefit4.title")}</h3>
                <p className="text-slate-600">{t("eticsFacade.benefits.benefit4.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("eticsFacade.cta.title")}</h2>
          <p className="text-xl mb-8 text-green-100">{t("eticsFacade.cta.subtitle")}</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-slate-100 px-8 py-3">
            <ArrowRight className="mr-2 h-5 w-5" />
            {t("eticsFacade.cta.button")}
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-sm text-slate-600 text-center">{t("eticsFacade.disclaimer")}</p>
        </div>
      </section>
    </div>
  )
}
