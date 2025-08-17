import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calculator, Clock, MapPin, Phone, Mail, User, FileText } from "lucide-react"

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-euconx-yellow">Ajánlatkérés</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Kérjen személyre szabott ajánlatot prémium szigetelőanyagainkra
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-euconx-yellow" />
              <span>24 órán belüli válasz</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-euconx-yellow" />
              <span>Ingyenes kalkuláció</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-euconx-yellow" />
              <span>Szakértői tanácsadás</span>
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
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-euconx-yellow text-2xl">Ajánlatkérő űrlap</CardTitle>
                  <CardDescription className="text-gray-400">
                    Töltse ki az alábbi űrlapot, és szakértőink 24 órán belül felveszik Önnel a kapcsolatot.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-euconx-yellow flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Kapcsolattartó adatok
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Név *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Teljes név"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">
                          Cég neve
                        </Label>
                        <Input
                          id="company"
                          placeholder="Cég neve"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          E-mail cím *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Telefonszám *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+36 XX XXX XXXX"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-euconx-yellow flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Projekt információk
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-type" className="text-white">
                          Projekt típusa *
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Válasszon projekt típust" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="industrial">Ipari csarnok</SelectItem>
                            <SelectItem value="residential">Lakóépület</SelectItem>
                            <SelectItem value="commercial">Kereskedelmi épület</SelectItem>
                            <SelectItem value="office">Irodaépület</SelectItem>
                            <SelectItem value="warehouse">Raktár</SelectItem>
                            <SelectItem value="other">Egyéb</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">
                          Projekt helyszíne *
                        </Label>
                        <Input
                          id="location"
                          placeholder="Város, megye"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area" className="text-white">
                          Terület (m²) *
                        </Label>
                        <Input
                          id="area"
                          type="number"
                          placeholder="pl. 1000"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-white">
                          Tervezett kezdés
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Időzítés" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="asap">Azonnal</SelectItem>
                            <SelectItem value="1month">1 hónapon belül</SelectItem>
                            <SelectItem value="3months">3 hónapon belül</SelectItem>
                            <SelectItem value="6months">6 hónapon belül</SelectItem>
                            <SelectItem value="planning">Tervezési fázis</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Material Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-euconx-yellow flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Anyag igények
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="insulation-type" className="text-white">
                          Szigetelés típusa
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Válasszon típust" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            <SelectItem value="rockwool">Kőgyapot</SelectItem>
                            <SelectItem value="xps">XPS hab</SelectItem>
                            <SelectItem value="eps">EPS hab</SelectItem>
                            <SelectItem value="etics">ETICS rendszer</SelectItem>
                            <SelectItem value="combination">Kombinált megoldás</SelectItem>
                            <SelectItem value="consultation">Tanácsadás szükséges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="thickness" className="text-white">
                          Vastagság (mm)
                        </Label>
                        <Input
                          id="thickness"
                          type="number"
                          placeholder="pl. 100"
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-euconx-yellow">További információk</h3>
                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-white">
                        Megjegyzések, speciális igények
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Írja le a projekt részleteit, speciális igényeit..."
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-euconx-yellow text-black hover:bg-yellow-600 font-semibold py-3 text-lg"
                    >
                      Ajánlatkérés elküldése
                    </Button>
                    <p className="text-sm text-gray-400 mt-3 text-center">
                      Az űrlap elküldésével elfogadja az{" "}
                      <a href="#" className="text-euconx-yellow hover:underline">
                        adatvédelmi szabályzatot
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-euconx-yellow">Miért válasszon minket?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-euconx-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Prémium minőség</h4>
                      <p className="text-sm text-gray-400">Csak a legjobb török gyártóktól</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-euconx-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Gyors szállítás</h4>
                      <p className="text-sm text-gray-400">Határidőre, megbízhatóan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-euconx-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Szakértői támogatás</h4>
                      <p className="text-sm text-gray-400">Teljes körű tanácsadás</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-euconx-yellow rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">Versenyképes árak</h4>
                      <p className="text-sm text-gray-400">Közvetlen import előnyei</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-euconx-yellow">Kapcsolat</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-euconx-yellow" />
                    <div>
                      <p className="text-white font-medium">+36 1 XXX XXXX</p>
                      <p className="text-sm text-gray-400">Hétfő-Péntek 8:00-17:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-euconx-yellow" />
                    <div>
                      <p className="text-white font-medium">info@euconx.hu</p>
                      <p className="text-sm text-gray-400">24 órán belüli válasz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-euconx-yellow mt-1" />
                    <div>
                      <p className="text-white font-medium">Budapest</p>
                      <p className="text-sm text-gray-400">Magyarország</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-euconx-yellow mb-4">Hogyan működik?</h2>
            <p className="text-xl text-gray-300">Egyszerű lépések a tökéletes ajánlatért</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-euconx-yellow text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Űrlap kitöltése</h3>
              <p className="text-gray-400">Adja meg projekt részleteit és igényeit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-euconx-yellow text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Szakértői elemzés</h3>
              <p className="text-gray-400">Csapatunk elemzi az igényeket</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-euconx-yellow text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Személyre szabott ajánlat</h3>
              <p className="text-gray-400">24 órán belül részletes ajánlat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-euconx-yellow text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Megvalósítás</h3>
              <p className="text-gray-400">Gyors szállítás és szakértői támogatás</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
