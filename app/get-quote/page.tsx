"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calculator, Clock, MapPin, Phone, Mail, User, FileText, ArrowRight } from "lucide-react"

export default function GetQuotePage() {
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-orange-500">{t('nav.getQuote')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Get personalized quotes for premium Turkish insulation materials
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>24-hour response</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-orange-500" />
                <span>Free calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-500" />
                <span>Expert consultation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Form */}
              <div className="md:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-orange-500 text-2xl">Quote Request Form</CardTitle>
                    <CardDescription className="text-slate-300">
                      Fill out the form below and our experts will contact you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <form onSubmit={handleSubmit}>
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              placeholder="Your full name"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-white">
                              Company Name
                            </Label>
                            <Input
                              id="company"
                              placeholder="Your company name"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="email@example.com"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+36 XX XXX XXXX"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          Project Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="project-type" className="text-white">
                              Project Type *
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-orange-500">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-slate-700">
                                <SelectItem value="industrial">Industrial Building</SelectItem>
                                <SelectItem value="residential">Residential Building</SelectItem>
                                <SelectItem value="commercial">Commercial Building</SelectItem>
                                <SelectItem value="office">Office Building</SelectItem>
                                <SelectItem value="warehouse">Warehouse</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location" className="text-white">
                              Project Location *
                            </Label>
                            <Input
                              id="location"
                              placeholder="City, Country"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="area" className="text-white">
                              Area (m²) *
                            </Label>
                            <Input
                              id="area"
                              type="number"
                              placeholder="e.g. 1000"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline" className="text-white">
                              Expected Start Date
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-orange-500">
                                <SelectValue placeholder="Timeline" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-slate-700">
                                <SelectItem value="asap">Immediately</SelectItem>
                                <SelectItem value="1month">Within 1 month</SelectItem>
                                <SelectItem value="3months">Within 3 months</SelectItem>
                                <SelectItem value="6months">Within 6 months</SelectItem>
                                <SelectItem value="planning">Planning phase</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Material Requirements */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Material Requirements
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="insulation-type" className="text-white">
                              Insulation Type
                            </Label>
                            <Select>
                              <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-orange-500">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-slate-700">
                                <SelectItem value="rockwool">Rock Wool</SelectItem>
                                <SelectItem value="glasswool">Glass Wool</SelectItem>
                                <SelectItem value="xps">XPS Foam</SelectItem>
                                <SelectItem value="eps">EPS Foam</SelectItem>
                                <SelectItem value="etics">ETICS System</SelectItem>
                                <SelectItem value="waterproofing">Waterproofing</SelectItem>
                                <SelectItem value="combination">Combined Solution</SelectItem>
                                <SelectItem value="consultation">Need Consultation</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="thickness" className="text-white">
                              Thickness (mm)
                            </Label>
                            <Input
                              id="thickness"
                              type="number"
                              placeholder="e.g. 100"
                              className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-orange-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-500">Additional Information</h3>
                        <div className="space-y-2">
                          <Label htmlFor="notes" className="text-white">
                            Comments, Special Requirements
                          </Label>
                          <Textarea
                            id="notes"
                            placeholder="Describe your project details, special requirements..."
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 min-h-[120px] focus:border-orange-500"
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6">
                        <Button
                          type="submit"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg transition-all duration-300 group"
                        >
                          Send Quote Request
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <p className="text-sm text-slate-400 mt-3 text-center">
                          By submitting this form, you agree to our{" "}
                          <a href="/privacy" className="text-orange-500 hover:underline">
                            privacy policy
                          </a>
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-orange-500">Why Choose EuConX?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Premium Quality</h4>
                        <p className="text-sm text-slate-400">Only from Turkey's best manufacturers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Fast Delivery</h4>
                        <p className="text-sm text-slate-400">On-time, reliable service</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Expert Support</h4>
                        <p className="text-sm text-slate-400">Complete consultation service</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-white">Competitive Prices</h4>
                        <p className="text-sm text-slate-400">Direct import advantages</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-orange-500">Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="text-white font-medium">{t('footer.contact.phone')}</p>
                        <p className="text-sm text-slate-400">{t('footer.contact.hours')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="text-white font-medium">{t('footer.contact.email')}</p>
                        <p className="text-sm text-slate-400">24-hour response</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                      <div>
                        <p className="text-white font-medium">{t('footer.contact.address')}</p>
                        <p className="text-sm text-slate-400">Hungary</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 px-4 bg-slate-900/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">How It Works</h2>
              <p className="text-xl text-slate-300">Simple steps to get the perfect quote</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fill Form</h3>
                <p className="text-slate-400">Provide your project details and requirements</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Analysis</h3>
                <p className="text-slate-400">Our team analyzes your needs</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Quote</h3>
                <p className="text-slate-400">Detailed quote within 24 hours</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                <p className="text-slate-400">Fast delivery and expert support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}