"use client"

import { useLanguage } from "@/lib/language-context"

export default function CookiePolicy() {
  const { language } = useLanguage()

  const cookieContent = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: January 2025",
      sections: [
        {
          title: "What Are Cookies",
          content:
            "Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.",
        },
        {
          title: "Types of Cookies We Use",
          content:
            "We use essential cookies for website functionality, analytics cookies to understand how visitors use our site, and preference cookies to remember your language and other settings.",
        },
        {
          title: "Managing Cookies",
          content:
            "You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.",
        },
        {
          title: "Third-Party Cookies",
          content:
            "We may use third-party services like Google Analytics that place their own cookies. These services have their own privacy policies governing their use of cookies.",
        },
        {
          title: "Updates to This Policy",
          content:
            "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.",
        },
      ],
    },
    hu: {
      title: "Cookie Szabályzat",
      lastUpdated: "Utolsó frissítés: 2025. január",
      sections: [
        {
          title: "Mik Azok a Cookie-k",
          content:
            "A cookie-k kis szöveges fájlok, amelyek a számítógépére vagy mobileszközére kerülnek, amikor meglátogatja weboldalunkat. Segítenek jobb élményt nyújtani a preferenciáinak megjegyzésével és szolgáltatásaink fejlesztésével.",
        },
        {
          title: "Általunk Használt Cookie Típusok",
          content:
            "Alapvető cookie-kat használunk a weboldal működéséhez, elemzési cookie-kat a látogatók viselkedésének megértéséhez, és preferencia cookie-kat a nyelv és egyéb beállítások megjegyzéséhez.",
        },
        {
          title: "Cookie-k Kezelése",
          content:
            "A cookie-kat a böngésző beállításain keresztül tudja irányítani és kezelni. Azonban bizonyos cookie-k letiltása befolyásolhatja weboldalunk működését.",
        },
        {
          title: "Harmadik Fél Cookie-k",
          content:
            "Harmadik fél szolgáltatásokat használhatunk, mint a Google Analytics, amelyek saját cookie-kat helyeznek el. Ezek a szolgáltatások saját adatvédelmi szabályzattal rendelkeznek a cookie-k használatára vonatkozóan.",
        },
        {
          title: "Szabályzat Frissítései",
          content:
            "Időről időre frissíthetjük ezt a Cookie Szabályzatot. Minden változást ezen az oldalon teszünk közzé frissített dátummal.",
        },
      ],
    },
    tr: {
      title: "Çerez Politikası",
      lastUpdated: "Son güncelleme: Ocak 2025",
      sections: [
        {
          title: "Çerezler Nedir",
          content:
            "Çerezler, web sitemizi ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük metin dosyalarıdır. Tercihlerinizi hatırlayarak ve hizmetlerimizi geliştirerek size daha iyi bir deneyim sunmamıza yardımcı olurlar.",
        },
        {
          title: "Kullandığımız Çerez Türleri",
          content:
            "Web sitesi işlevselliği için temel çerezler, ziyaretçilerin sitemizi nasıl kullandığını anlamak için analitik çerezler ve dilinizi ve diğer ayarlarınızı hatırlamak için tercih çerezleri kullanıyoruz.",
        },
        {
          title: "Çerezleri Yönetme",
          content:
            "Çerezleri tarayıcı ayarlarınız aracılığıyla kontrol edebilir ve yönetebilirsiniz. Ancak, belirli çerezleri devre dışı bırakmak web sitemizin işlevselliğini etkileyebilir.",
        },
        {
          title: "Üçüncü Taraf Çerezleri",
          content:
            "Kendi çerezlerini yerleştiren Google Analytics gibi üçüncü taraf hizmetleri kullanabiliriz. Bu hizmetlerin çerez kullanımını yöneten kendi gizlilik politikaları vardır.",
        },
        {
          title: "Bu Politikanın Güncellemeleri",
          content:
            "Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişiklik, güncellenmiş revizyon tarihi ile bu sayfada yayınlanacaktır.",
        },
      ],
    },
  }

  const content = cookieContent[language]

  return (
    <div className="min-h-screen bg-white">
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
    </div>
  )
}
