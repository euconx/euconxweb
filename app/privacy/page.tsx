"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  const privacyContent = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2025",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information you provide directly to us, such as when you create an account, request a quote, or contact us. This may include your name, email address, phone number, company information, and project details.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers.",
        },
        {
          title: "Information Sharing",
          content:
            "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.",
        },
        {
          title: "Data Security",
          content:
            "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          title: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at info@euconx.hu",
        },
      ],
    },
    hu: {
      title: "Adatvédelmi Szabályzat",
      lastUpdated: "Utolsó frissítés: 2025. január",
      sections: [
        {
          title: "Gyűjtött Információk",
          content:
            "Gyűjtjük az Ön által közvetlenül megadott információkat, például amikor fiókot hoz létre, ajánlatot kér, vagy kapcsolatba lép velünk. Ez magában foglalhatja a nevét, e-mail címét, telefonszámát, céginformációkat és projektadatokat.",
        },
        {
          title: "Információk Felhasználása",
          content:
            "A gyűjtött információkat szolgáltatásaink nyújtására, fenntartására és fejlesztésére, tranzakciók feldolgozására, technikai értesítések és támogatási üzenetek küldésére, valamint termékekkel, szolgáltatásokkal és promóciós ajánlatokkal kapcsolatos kommunikációra használjuk.",
        },
        {
          title: "Információmegosztás",
          content:
            "Személyes adatait nem adjuk el, cseréljük vagy másképp továbbítjuk harmadik feleknek az Ön beleegyezése nélkül, kivéve a jelen szabályzatban leírtakat vagy jogszabályi kötelezettség esetén.",
        },
        {
          title: "Adatbiztonság",
          content:
            "Megfelelő biztonsági intézkedéseket alkalmazunk személyes adatainak jogosulatlan hozzáférés, módosítás, nyilvánosságra hozatal vagy megsemmisítés elleni védelme érdekében.",
        },
        {
          title: "Kapcsolat",
          content:
            "Ha kérdése van ezzel az Adatvédelmi Szabályzattal kapcsolatban, kérjük, lépjen kapcsolatba velünk az info@euconx.hu címen.",
        },
      ],
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son güncelleme: Ocak 2025",
      sections: [
        {
          title: "Topladığımız Bilgiler",
          content:
            "Hesap oluşturduğunuzda, teklif talep ettiğinizde veya bizimle iletişime geçtiğinizde doğrudan bize sağladığınız bilgileri topluyoruz. Bu, adınız, e-posta adresiniz, telefon numaranız, şirket bilgileriniz ve proje detaylarınızı içerebilir.",
        },
        {
          title: "Bilgilerinizi Nasıl Kullanırız",
          content:
            "Topladığımız bilgileri hizmetlerimizi sağlamak, sürdürmek ve geliştirmek, işlemleri gerçekleştirmek, teknik bildirimler ve destek mesajları göndermek ve ürünler, hizmetler ve promosyon teklifleri hakkında sizinle iletişim kurmak için kullanırız.",
        },
        {
          title: "Bilgi Paylaşımı",
          content:
            "Kişisel bilgilerinizi, bu politikada açıklananlar veya yasal gereklilikler dışında, rızanız olmadan üçüncü taraflarla satmaz, takas etmez veya başka şekilde aktarmayız.",
        },
        {
          title: "Veri Güvenliği",
          content:
            "Kişisel bilgilerinizi yetkisiz erişim, değişiklik, ifşa veya imha edilmeye karşı korumak için uygun güvenlik önlemleri uyguluyoruz.",
        },
        {
          title: "Bize Ulaşın",
          content:
            "Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen info@euconx.hu adresinden bizimle iletişime geçin.",
        },
      ],
    },
  }

  const { language } = useLanguage()
  const content = privacyContent[language]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">{content.title}</h1>
        <p className="text-slate-600 mb-8">{content.lastUpdated}</p>

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">{section.title}</h2>
              <p className="text-slate-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
