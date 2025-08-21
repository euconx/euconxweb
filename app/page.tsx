"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Building2,
  Truck,
  Shield,
  Thermometer,
  VolumeX,
  Droplets,
  Briefcase,
  FileText,
  Layers,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Upload,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

export default function HomePage() {
  const { language } = useLanguage()

  // Multilingual copy kept locally for precision control on word counts and CTAs
  const copy = useMemo(
    () => ({
      en: {
        hero: {
          headline: "EKR‑ready facade rehab. Supply chain you can trust.",
          subheadline:
            "Euconx Budapest powers B2B building rehabilitation with verified Turkish supply, real‑time KPIs, and compliant documentation.",
          ctaPrimary: "Get EKR Proposal",
          ctaSecondary: "See Packages",
        },
        servicesTitle: "Services Overview",
        services: [
          {
            title: "Thermal Insulation",
            desc:
              "High‑performance XPS, EPS and mineral wool systems engineered to cut primary energy 10–40% while maintaining durable moisture and fire performance for varied Hungarian stock.",
            bullets: [
              "10–40% energy cut",
              "EN/CE compliant",
              "Thermal bridge control",
            ],
          },
          {
            title: "Sound Insulation",
            desc:
              "Acoustic glass/stone wool and membranes for schools, offices, and housing, meeting EN ISO acoustic targets with quick install sequencing and verified on‑site results.",
            bullets: [
              "Up to 70 dB",
              "Low VOC",
              "Fast install",
            ],
          },
          {
            title: "Waterproofing",
            desc:
              "Membranes and detailing kits for roofs, basements, and wet zones. Complete moisture barrier design with warranty‑backed assemblies and substrate QA.",
            bullets: ["100% moisture stop", "25+ year life", "Spec backed"],
          },
          {
            title: "Facade Insulation",
            desc:
              "ETICS/ventilated facade packages sized for panel blocks and public stock. Verified U‑values, fire class, and EKR documentation included end‑to‑end.",
            bullets: ["U ≤ 0.24 W/m²K", "A1/A2 fire", "Full docs"],
          },
          {
            title: "EKR Project Consulting",
            desc:
              "Design‑assist for tenders: pre‑qual, spec drafting, bill of quantities, and evidence packs. Reduce risk and accelerate approval with audit‑ready files.",
            bullets: ["Spec & BOQ", "EKR evidence", "Approval speed"],
          },
          {
            title: "Logistics",
            desc:
              "Turkey‑to‑HU supply with customs, warehousing and site‑slot delivery. Live tracking, backup routes, and chain‑of‑custody for every shipment.",
            bullets: ["99.8% on‑time", "Live tracking", "CoC verified"],
          },
        ],
        workflowTitle: "EKR Workflow",
        workflow: [
          {
            title: "Pre‑Qual",
            desc:
              "Scope, baseline KPIs, and compliance gap check to align EKR outcomes and budget efficiency early.",
          },
          {
            title: "Design & Spec",
            desc:
              "System selection, U‑value targets, BOQ, and drawings with tested junction details for approval.",
          },
          {
            title: "Supply & Logistics",
            desc:
              "Sequenced deliveries, customs, and warehousing with live tracking and contingency planning.",
          },
          {
            title: "Execution & QA",
            desc:
              "On‑site audits, mockups, and test records to de‑risk install and assure performance.",
          },
          {
            title: "Documentation",
            desc:
              "Final EKR‑ready evidence, warranties, and as‑built files for handover and funding claim.",
          },
        ],
        packagesTitle: "Sample Packages",
        packages: [
          {
            title: "Panel Housing",
            goal: "12–28% primary energy reduction",
            scope:
              "ETICS EPS/XPS corners, mineral wool fire belts, window reveals, and roof insulation upgrade across typical 10‑storey blocks.",
          },
          {
            title: "Flat Roof",
            goal: "20–35% heat loss reduction",
            scope:
              "Tapered PIR/XPS package, vapor control, waterproofing membrane, upstand and penetration detailing, warranty docs.",
          },
          {
            title: "School/Office Buildings",
            goal: "10–30% primary energy reduction",
            scope:
              "Acoustic‑thermal facade mix, class‑leading fire performance, daylight and comfort balancing with tested assemblies.",
          },
          {
            title: "Industrial Roof PIR",
            goal: "Up to 30% HVAC energy cut",
            scope:
              "PIR panels with walkable finish, fast install sequencing, logistics windows, and QA photos for compliance.",
          },
          {
            title: "Basement",
            goal: "100% water ingress mitigation",
            scope:
              "External membrane, protect boards, drainage mat, thermal lining and sump detailing; site tests logged.",
          },
        ],
        proof: {
          kpis: [
            { value: 500, label: "Projects" },
            { value: 5, suffix: "M€", label: "Client savings" },
            { value: 99.8, suffix: "%", label: "On‑time" },
            { value: 100, suffix: "%", label: "EU compliant" },
          ],
          badges: [
            "EKR‑Ready Documentation",
            "Audited Suppliers",
            "Chain of Custody",
          ],
        },
        formTitle: "Request EKR Spec & Pricing Window",
        form: {
          labels: {
            name: "Name",
            email: "Email",
            phone: "Phone",
            company: "Company",
            role: "Role",
            type: "Project Type",
            area: "Area (m²)",
            date: "Target Date",
            msg: "Message",
            file: "Attach File",
            consent: "I agree to be contacted and accept the Privacy Policy.",
            gdpr: "I consent to processing of my data under GDPR.",
            marketing: "I’d like to receive updates and technical bulletins.",
            book: "Book a 24h Call",
            captchaQ: "Security check: What is",
            captchaA: "Answer",
          },
          submit: "Send Request",
        },
      },
      hu: {
        hero: {
          headline: "EKR‑kész homlokzatfelújítás. Megbízható ellátási lánc.",
          subheadline:
            "A budapesti Euconx EKR‑fókuszú B2B felújítást biztosít élő KPI‑okkal és auditált dokumentációval.",
          ctaPrimary: "EKR ajánlatkérés",
          ctaSecondary: "Csomagok megtekintése",
        },
        servicesTitle: "Szolgáltatások áttekintése",
        services: [
          {
            title: "Hőszigetelés",
            desc:
              "Nagy teljesítményű XPS, EPS és ásványgyapot rendszerek 10–40% primerenergia‑csökkentésre, tartós nedvesség‑ és tűzállósággal a hazai állományhoz.",
            bullets: ["10–40% energia", "EN/CE megfelelés", "Hőhíd‑kontroll"],
          },
          {
            title: "Hangszigetelés",
            desc:
              "Akusztikai üveg-/kőgyapot és membránok iskolákhoz, irodákhoz, lakóépületekhez; EN ISO célértékek, gyors kivitelezés és mérhető eredmények.",
            bullets: ["Akár 70 dB", "Alacsony VOC", "Gyors kivitelezés"],
          },
          {
            title: "Vízszigetelés",
            desc:
              "Tető, pince és nedves terek teljes vízzáró membrán‑ és csomóponti megoldásai garanciás rendszerekkel és aljzat‑QA‑val.",
            bullets: ["100% vízzárás", "25+ év élettartam", "Specifikáció"],
          },
          {
            title: "Homlokzati szigetelés",
            desc:
              "ETICS/szellőztetett homlokzati csomagok panel és középületi állományra. Igazolt U‑értékek, tűzállóság és teljes EKR dokumentáció.",
            bullets: ["U ≤ 0,24 W/m²K", "A1/A2 tűz", "Teljes dokumentáció"],
          },
          {
            title: "EKR projekt tanácsadás",
            desc:
              "Tender‑támogatás: előminősítés, specifikáció, költségvetés és bizonyítékcsomagok. Kisebb kockázat, gyorsabb jóváhagyás.",
            bullets: ["Spec & költségvetés", "EKR bizonyíték", "Gyors jóváhagyás"],
          },
          {
            title: "Logisztika",
            desc:
              "Törökország–Magyarország ellátás vámkezeléssel, raktárral és idősávos beszállítással. Élő követés, tartalék útvonalak, nyomon‑követhetőség.",
            bullets: ["99,8% időben", "Élő tracking", "CoC igazolt"],
          },
        ],
        workflowTitle: "EKR munkafolyamat",
        workflow: [
          {
            title: "Előminősítés",
            desc:
              "Terjedelem, kiinduló KPI‑ok és megfelelőségi hiányok feltárása a célok és költségkeret igazításához.",
          },
          {
            title: "Tervezés & specifikáció",
            desc:
              "Rendszerválasztás, U‑érték célok, költségvetés és rajzok tesztelt csomópontokkal.",
          },
          {
            title: "Ellátás & logisztika",
            desc:
              "Ütemezett szállítás, vám, raktár és élő követés tartalék megoldásokkal.",
          },
          {
            title: "Kivitelezés & QA",
            desc:
              "Helyszíni auditok, mintafelületek és vizsgálati jegyzőkönyvek a kockázatok csökkentésére.",
          },
          {
            title: "Dokumentáció",
            desc:
              "EKR‑kész bizonyítékok, garanciák és megvalósulási anyagok az átadáshoz és elszámoláshoz.",
          },
        ],
        packagesTitle: "Mintacsomagok",
        packages: [
          {
            title: "Panelház",
            goal: "12–28% primerenergia‑csökkentés",
            scope:
              "ETICS EPS/XPS sarkok, ásványgyapot tűzövek, kávakialakítás és tetőszigetelés 10 emeletes háztípusokra.",
          },
          {
            title: "Lapostető",
            goal: "20–35% hőveszteség‑csökkentés",
            scope:
              "Lejtésképző PIR/XPS, párazárás, vízszigetelő membrán, felhajtások és áttörések garanciával.",
          },
          {
            title: "Iskola/Iroda",
            goal: "10–30% primerenergia‑csökkentés",
            scope:
              "Akusztikus‑termikus homlokzati mix, kiemelkedő tűzállóság, komfort és megvilágítás összehangolása.",
          },
          {
            title: "Ipari PIR tető",
            goal: "Akár 30% HVAC energia",
            scope:
              "Járható PIR panelek gyors ütemezéssel, logisztikai idősávokkal és QA fotókkal a megfeleléshez.",
          },
          {
            title: "Pince",
            goal: "100% vízbetörés megszüntetése",
            scope:
              "Külső membrán, védőlap, drénlemez, hőburkolat és szivattyú akna részletek; helyszíni tesztek.",
          },
        ],
        proof: {
          kpis: [
            { value: 500, label: "Projekt" },
            { value: 5, suffix: "M€", label: "Ügyfél‑megtakarítás" },
            { value: 99.8, suffix: "%", label: "Időben" },
            { value: 100, suffix: "%", label: "EU megfelelés" },
          ],
          badges: [
            "EKR‑kész dokumentáció",
            "Auditált beszállítók",
            "Nyomon követhetőség",
          ],
        },
        formTitle: "EKR specifikáció és áridősáv kérése",
        form: {
          labels: {
            name: "Név",
            email: "Email",
            phone: "Telefon",
            company: "Cég",
            role: "Beosztás",
            type: "Projekt típusa",
            area: "Terület (m²)",
            date: "Cél dátum",
            msg: "Üzenet",
            file: "Fájl csatolása",
            consent:
              "Hozzájárulok a megkereséshez és elfogadom az Adatkezelési tájékoztatót.",
            gdpr: "Hozzájárulok adataim GDPR szerinti kezeléséhez.",
            marketing: "Szeretnék frissítéseket és műszaki hírlevelet.",
            book: "24 órán belüli hívás foglalása",
            captchaQ: "Biztonsági ellenőrzés: Mennyi",
            captchaA: "Válasz",
          },
          submit: "Kérés elküldése",
        },
      },
      tr: {
        hero: {
          headline: "EKR’ye hazır cephe rehabilitasyonu. Güvenilir tedarik zinciri.",
          subheadline:
            "Budapeşte Euconx, B2B yenilemede canlı KPI’lar ve denetimli dokümantasyonla sonuç odaklı tedarik sunar.",
          ctaPrimary: "EKR Teklif Talebi",
          ctaSecondary: "Paketleri Gör",
        },
        servicesTitle: "Hizmet Özeti",
        services: [
          {
            title: "Isı Yalıtımı",
            desc:
              "Yüksek performanslı XPS, EPS ve mineral yün sistemleri; Macar stoklarına uygun, %10–40 birincil enerji azaltımı ve kalıcı nem/yangın dayanımı.",
            bullets: ["%10–40 enerji", "EN/CE uyum", "Köprü kontrol"],
          },
          {
            title: "Ses Yalıtımı",
            desc:
              "Okul, ofis ve konutlar için cam/taş yünü ve membranlar; EN ISO hedefleri, hızlı kurulum ve sahada doğrulanmış sonuçlar.",
            bullets: ["70 dB’ye kadar", "Düşük VOC", "Hızlı kurulum"],
          },
          {
            title: "Su Yalıtımı",
            desc:
              "Çatılar, bodrumlar ve ıslak hacimler için membran ve detay setleri. Garanti destekli sistemler ve zemin QA ile tam bariyer.",
            bullets: ["%100 nem bariyeri", "25+ yıl ömür", "Teknik şartname"],
          },
          {
            title: "Cephe Yalıtımı",
            desc:
              "ETICS/ havalandırmalı cephe paketleri; panel bloklar ve kamu stoğuna uygun. U‑değeri, yangın sınıfı ve EKR dokümantasyonu hazır.",
            bullets: ["U ≤ 0.24 W/m²K", "A1/A2 yangın", "Tam evrak"],
          },
          {
            title: "EKR Proje Danışmanlığı",
            desc:
              "İhale tasarım desteği: ön yeterlilik, şartname, metraj ve kanıt dosyaları. Riski azaltır, onayı hızlandırır.",
            bullets: ["Şartname & metraj", "EKR kanıtı", "Hızlı onay"],
          },
          {
            title: "Lojistik",
            desc:
              "Türkiye‑Macaristan tedarik; gümrük, depolama ve şantiye zaman pencereleri. Canlı takip ve tedarik zinciri izlenebilirliği.",
            bullets: ["%99.8 zamanında", "Canlı takip", "CoC doğruluğu"],
          },
        ],
        workflowTitle: "EKR Süreci",
        workflow: [
          {
            title: "Ön Yeterlilik",
            desc:
              "Kapsam, başlangıç KPI’ları ve uyum boşlukları; hedef ve bütçe verimliliği için hizalama.",
          },
          {
            title: "Tasarım & Şartname",
            desc:
              "Sistem seçimi, U‑değeri hedefi, metraj ve çizimler; testli düğüm detaylarıyla.",
          },
          {
            title: "Tedarik & Lojistik",
            desc:
              "Sıralı teslimatlar, gümrük ve depolama; canlı takip ve alternatif planlar.",
          },
          {
            title: "Uygulama & QA",
            desc:
              "Saha denetimleri, numune alanlar ve test kayıtları; performans güvencesi.",
          },
          {
            title: "Dokümantasyon",
            desc:
              "EKR’ye hazır kanıt dosyaları, garanti ve as‑built teslim evrakları.",
          },
        ],
        packagesTitle: "Örnek Paketler",
        packages: [
          {
            title: "Panel Konut",
            goal: "%12–28 birincil enerji",
            scope:
              "ETICS EPS/XPS köşeler, mineral yün yangın kuşakları, pencere söveleri ve çatı ısı yalıtımı.",
          },
          {
            title: "Düz Çatı",
            goal: "%20–35 ısı kaybı",
            scope:
              "Eğimli PIR/XPS paket, buhar kontrolü, su yalıtım membranı, döndürme ve detay garanti evrakı.",
          },
          {
            title: "Okul/Ofis",
            goal: "%10–30 birincil enerji",
            scope:
              "Akustik‑termal cephe karışımı, üst sınıf yangın dayanımı, konfor ve günışığı optimizasyonu.",
          },
          {
            title: "Endüstriyel PIR Çatı",
            goal: "%30’a kadar HVAC",
            scope:
              "Yürünebilir PIR paneller, hızlı kurulum, lojistik pencereler ve uyum için QA fotoğrafları.",
          },
          {
            title: "Bodrum",
            goal: "%100 su girişinin önlenmesi",
            scope:
              "Dış membran, koruma levhası, drenaj tabakası, ısıl kaplama ve çukur detayları; saha testleri.",
          },
        ],
        proof: {
          kpis: [
            { value: 500, label: "Proje" },
            { value: 5, suffix: "M€", label: "Müşteri tasarrufu" },
            { value: 99.8, suffix: "%", label: "Zamanında" },
            { value: 100, suffix: "%", label: "AB uyumu" },
          ],
          badges: [
            "EKR‑Hazır Dokümantasyon",
            "Denetlenmiş Tedarikçiler",
            "Mamul İzlenebilirliği",
          ],
        },
        formTitle: "EKR şartname ve fiyat penceresi talebi",
        form: {
          labels: {
            name: "Ad Soyad",
            email: "Email",
            phone: "Telefon",
            company: "Şirket",
            role: "Görev",
            type: "Proje Türü",
            area: "Alan (m²)",
            date: "Hedef Tarih",
            msg: "Mesaj",
            file: "Dosya Ekle",
            consent:
              "İletişime geçilmesini ve Gizlilik Politikasını kabul ediyorum.",
            gdpr: "Verilerimin GDPR kapsamında işlenmesine onay veriyorum.",
            marketing: "Güncellemeler ve teknik bülten almak isterim.",
            book: "24 saat içinde arama planla",
            captchaQ: "Güvenlik: Kaç eder",
            captchaA: "Cevap",
          },
          submit: "Talebi Gönder",
        },
      },
    }),
    [language]
  )

  const lang = language as "en" | "hu" | "tr"
  const t = copy[lang]

  // Animated KPI counters
  const [energy, setEnergy] = useState(0)
  const [uval, setUval] = useState(1.2)
  const [co2, setCo2] = useState(0)
  useEffect(() => {
    let e = 0
    let u = 1.2
    let c = 0
    const id = setInterval(() => {
      e = Math.min(22, e + 1)
      u = Math.max(0.24, Number((u - 0.04).toFixed(2)))
      c = Math.min(18, c + 1)
      setEnergy(e)
      setUval(u)
      setCo2(c)
      if (e === 22 && u === 0.24 && c === 18) clearInterval(id)
    }, 120)
    return () => clearInterval(id)
  }, [])

  // Lead form state
  const [bookCall, setBookCall] = useState(false)
  const [captcha, setCaptcha] = useState<{ a: number; b: number }>({ a: 3, b: 5 })
  const [captchaAns, setCaptchaAns] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    type: "",
    area: "",
    date: "",
    msg: "",
    file: undefined as File | undefined,
    consent: false,
    gdpr: false,
    marketing: false,
  })

  const totalFields = 9 // name,email,phone,company,role,type,area,date,msg
  const filledCount = [
    form.name,
    form.email,
    form.phone,
    form.company,
    form.role,
    form.type,
    form.area,
    form.date,
    form.msg,
  ].filter((v) => String(v).trim().length > 0).length
  const progress = Math.round((filledCount / totalFields) * 100)

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault()
    const validCaptcha = Number(captchaAns) === captcha.a + captcha.b
    if (!form.consent || !form.gdpr) {
      alert("Please accept mandatory consents / Kérjük, fogadja el a kötelező hozzájárulásokat / Lütfen gerekli onayları verin")
      return
    }
    if (bookCall && !validCaptcha) {
      alert("Security check failed / Biztonsági ellenőrzés sikertelen / Güvenlik doğrulaması başarısız")
      return
    }
    alert("Request submitted. Our team will respond within 24h.")
  }

  return (
    <div className="min-h-screen flex flex-col bg-euconx-navy text-white">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden gradient-dark-elegant">
          <div className="absolute inset-0 opacity-10">
            <img src="/construction-supply-chain-hero.png" alt="Facade rehab" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-gradient-green">
                {t.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-euconx-gray-300 mb-8 max-w-2xl">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#lead"
                  className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-black font-semibold py-3 px-7 rounded-xl text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center border-2 border-white/20 hover:border-lime-400 text-white hover:text-lime-400 font-semibold py-3 px-7 rounded-xl text-lg transition-all duration-300"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
            {/* Animated facade with live KPIs */}
            <div className="relative">
              <div className="relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden glass-morphism-dark border border-euconx-glass-border">
                {/* Simple animated facade grid */}
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-1 p-3">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-slate-800/60 rounded-sm animate-pulse"
                      style={{ animationDelay: `${(i % 8) * 120}ms` }}
                    />
                  ))}
                </div>
                {/* KPI overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold text-lime-400">‑{energy}%</div>
                      <div className="text-xs text-euconx-gray-300">Energy</div>
                    </div>
                    <div className="p-3 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold text-lime-400">{uval.toFixed(2)}</div>
                      <div className="text-xs text-euconx-gray-300">U‑value W/m²K</div>
                    </div>
                    <div className="p-3 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold text-lime-400">‑{co2}%</div>
                      <div className="text-xs text-euconx-gray-300">CO₂</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-euconx-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.servicesTitle}</h2>
              <div className="h-1 w-24 bg-lime-400 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.map((s, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4 text-lime-400">
                    {idx === 0 && <Thermometer className="w-6 h-6" />}
                    {idx === 1 && <VolumeX className="w-6 h-6" />}
                    {idx === 2 && <Droplets className="w-6 h-6" />}
                    {idx === 3 && <Layers className="w-6 h-6" />}
                    {idx === 4 && <Briefcase className="w-6 h-6" />}
                    {idx === 5 && <Truck className="w-6 h-6" />}
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-euconx-gray-300 mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="text-sm text-euconx-gray-300 space-y-1 mb-5">
                    {s.bullets.map((b: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-lime-400" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#lead" className="inline-flex items-center text-lime-400 hover:text-lime-300 font-medium">
                    {lang === "en" ? "Get details" : lang === "hu" ? "Részletek" : "Detay alın"}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EKR Workflow */}
        <section className="py-20 bg-slate-900" id="workflow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t.workflowTitle}</h2>
            <Timeline steps={t.workflow} lang={lang} />
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-euconx-black" id="packages">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.packagesTitle}</h2>
              <div className="h-1 w-24 bg-lime-400 mx-auto rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.packages.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-semibold mb-1 text-white">{p.title}</h3>
                  <div className="text-lime-400 font-semibold mb-3">{p.goal}</div>
                  <p className="text-sm text-euconx-gray-300 mb-5 leading-relaxed">{p.scope}</p>
                  <a href="#lead" className="inline-flex items-center text-lime-400 hover:text-lime-300 font-medium">
                    {lang === "en"
                      ? "Request Spec & Pricing Window"
                      : lang === "hu"
                      ? "Specifikáció és áridősáv kérése"
                      : "Şartname ve fiyat penceresi talebi"}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof & KPIs */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {t.proof.kpis.map((k, i) => (
                <div key={i} className="text-center p-6 rounded-xl border border-white/10 bg-slate-800/40">
                  <div className="text-3xl font-bold text-lime-400">
                    {k.value}
                    {k.suffix || ""}
                  </div>
                  <div className="text-sm text-euconx-gray-300">{k.label}</div>
                </div>
              ))}
            </div>
            {/* Logo wall */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center opacity-80 mb-10">
              <img src="/ode-insulation-logo.png" alt="ODE" className="h-10 object-contain mx-auto" />
              <img src="/izocam-insulation.png" alt="Izocam" className="h-10 object-contain mx-auto" />
              <img src="/ado-group-logo.png" alt="ADO" className="h-10 object-contain mx-auto" />
              <img src="/bonus-yalitim-logo.png" alt="Bonus" className="h-10 object-contain mx-auto" />
            </div>
            {/* Assurance badges */}
            <div className="flex flex-wrap gap-3 justify-center">
              {t.proof.badges.map((b, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-lime-400/50 text-lime-300 bg-lime-400/10 text-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-20 bg-euconx-black" id="lead">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.formTitle}</h2>
              <div className="h-1 w-24 bg-lime-400 mx-auto rounded"></div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-euconx-gray-300 mb-1">
                <span>{progress}%</span>
                <span>
                  {filledCount}/{totalFields}
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded">
                <div className="h-2 bg-lime-400 rounded" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <form onSubmit={submitLead} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label={t.form.labels.name}>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 focus-ring-orange"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </Field>
              <Field label={t.form.labels.email}>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </Field>
              <Field label={t.form.labels.phone}>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </Field>
              <Field label={t.form.labels.company}>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </Field>
              <Field label={t.form.labels.role}>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                />
              </Field>
              <Field label={t.form.labels.type}>
                <select
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option value="">—</option>
                  <option value="panel">Panel</option>
                  <option value="school">School / Office</option>
                  <option value="industrial">Industrial roof</option>
                  <option value="basement">Basement</option>
                  <option value="other">Other</option>
                </select>
              </Field>
              <Field label={t.form.labels.area}>
                <input
                  type="number"
                  min={0}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                />
              </Field>
              <Field label={t.form.labels.date}>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </Field>
              <div className="md:col-span-2">
                <Field label={t.form.labels.msg}>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  />
                </Field>
              </div>
              <Field label={t.form.labels.file}>
                <input
                  type="file"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                  onChange={(e) => setForm({ ...form, file: e.target.files?.[0] })}
                />
              </Field>
              <div></div>

              {/* Consents */}
              <div className="md:col-span-2 space-y-3">
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    required
                  />
                  <span>{t.form.labels.consent}</span>
                </label>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={form.gdpr}
                    onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                    required
                  />
                  <span>{t.form.labels.gdpr}</span>
                </label>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    checked={form.marketing}
                    onChange={(e) => setForm({ ...form, marketing: e.target.checked })}
                  />
                  <span>{t.form.labels.marketing}</span>
                </label>
              </div>

              {/* Book call & captcha */}
              <div className="md:col-span-2 space-y-4 p-4 rounded-xl border border-white/10 bg-slate-900/50">
                <label className="flex items-center gap-3 text-sm">
                  <input type="checkbox" checked={bookCall} onChange={(e) => setBookCall(e.target.checked)} />
                  <span className="font-medium">{t.form.labels.book}</span>
                </label>
                {bookCall && (
                  <div className="grid md:grid-cols-3 gap-4">
                    <Field label="Preferred time">
                      <input type="time" className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10" />
                    </Field>
                    <Field label="Timezone">
                      <select className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10">
                        <option>Europe/Budapest (UTC+1/+2)</option>
                        <option>Europe/Istanbul (UTC+3)</option>
                        <option>UTC</option>
                      </select>
                    </Field>
                    <Field label={`${t.form.labels.captchaQ} ${captcha.a} + ${captcha.b}?`}>
                      <input
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10"
                        value={captchaAns}
                        onChange={(e) => setCaptchaAns(e.target.value)}
                      />
                    </Field>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-black font-semibold py-3 px-7 rounded-xl text-lg transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  {t.form.submit}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Contact quick info */}
            <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm text-euconx-gray-300">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-lime-400" /> +36 1 XXX XXXX</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-lime-400" /> info@euconx.hu</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-lime-400" /> Budapest, Hungary</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="text-euconx-gray-300 mb-1 inline-block">{label}</span>
      {children}
    </label>
  )
}

function Timeline({ steps, lang }: { steps: { title: string; desc: string }[]; lang: "en" | "hu" | "tr" }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6 mb-8">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-1 text-left md:text-center px-4 py-3 rounded-xl border transition-all ${
              active === i ? "border-lime-400 bg-lime-400/10" : "border-white/10 hover:border-white/30"
            }`}
          >
            <div className="text-sm text-euconx-gray-300">{i + 1 < 10 ? `0${i + 1}` : i + 1}</div>
            <div className="font-semibold text-white">{s.title}</div>
            <div className="text-xs text-euconx-gray-300 mt-1 line-clamp-2">{s.desc}</div>
          </button>
        ))}
      </div>
      <div className="p-6 rounded-2xl border border-white/10 bg-slate-800/40">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-euconx-gray-300">{lang === "en" ? "Current step" : lang === "hu" ? "Aktuális lépés" : "Geçerli adım"}</div>
            <h3 className="text-2xl font-bold text-white">{steps[active].title}</h3>
            <p className="text-sm text-euconx-gray-300 mt-2 max-w-2xl">{steps[active].desc}</p>
          </div>
          <a href="#lead" className="inline-flex items-center text-lime-400 hover:text-lime-300 font-medium whitespace-nowrap">
            {lang === "en" ? "Book this step" : lang === "hu" ? "Lépés foglalása" : "Bu adımı planla"}
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
