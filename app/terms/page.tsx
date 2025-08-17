"use client"

import { useLanguage } from "@/lib/language-context"

export default function TermsConditions() {
  const { language } = useLanguage()

  const termsContent = {
    en: {
      title: "Terms & Conditions",
      lastUpdated: "Last updated: January 2025",
      sections: [
        {
          title: "Acceptance of Terms",
          content:
            "By accessing and using EuConX services, you accept and agree to be bound by the terms and provision of this agreement.",
        },
        {
          title: "Services Description",
          content:
            "EuConX provides supply chain management services for insulation materials, connecting European construction projects with Turkish manufacturers. All materials comply with EU standards and regulations.",
        },
        {
          title: "Pricing and Payment",
          content:
            "Prices are quoted in EUR and are subject to change. Payment terms are Net 30 days unless otherwise agreed. Late payments may incur additional charges.",
        },
        {
          title: "Delivery and Risk Transfer",
          content:
            "Delivery terms are specified in each contract. Risk transfers to the buyer upon delivery to the agreed location. EuConX is not liable for delays caused by force majeure events.",
        },
        {
          title: "Quality Guarantee",
          content:
            "All materials are guaranteed to meet EU standards. Any defects must be reported within 30 days of delivery. Our liability is limited to replacement or refund of defective materials.",
        },
        {
          title: "Limitation of Liability",
          content:
            "EuConX's total liability shall not exceed the value of the specific order. We are not liable for indirect, consequential, or punitive damages.",
        },
      ],
    },
    hu: {
      title: "Általános Szerződési Feltételek",
      lastUpdated: "Utolsó frissítés: 2025. január",
      sections: [
        {
          title: "Feltételek Elfogadása",
          content:
            "Az EuConX szolgáltatásainak elérésével és használatával elfogadja és vállalja, hogy betartja jelen megállapodás feltételeit és rendelkezéseit.",
        },
        {
          title: "Szolgáltatások Leírása",
          content:
            "Az EuConX ellátási lánc menedzsment szolgáltatásokat nyújt szigetelőanyagokhoz, összekapcsolva az európai építési projekteket a török gyártókkal. Minden anyag megfelel az EU szabványoknak és előírásoknak.",
        },
        {
          title: "Árazás és Fizetés",
          content:
            "Az árak EUR-ban kerülnek megadásra és változhatnak. A fizetési feltételek Nettó 30 nap, hacsak másképp nem egyezünk meg. A késedelmes fizetés további díjakkal járhat.",
        },
        {
          title: "Szállítás és Kockázatátruházás",
          content:
            "A szállítási feltételeket minden szerződésben meghatározzuk. A kockázat a megegyezett helyre történő szállításkor száll át a vevőre. Az EuConX nem felelős a vis maior események okozta késésekért.",
        },
        {
          title: "Minőségi Garancia",
          content:
            "Minden anyag garantáltan megfelel az EU szabványoknak. Bármilyen hibát a szállítástól számított 30 napon belül jelenteni kell. Felelősségünk a hibás anyagok cseréjére vagy visszatérítésére korlátozódik.",
        },
        {
          title: "Felelősség Korlátozása",
          content:
            "Az EuConX teljes felelőssége nem haladhatja meg az adott megrendelés értékét. Nem vállalunk felelősséget közvetett, következményes vagy büntető kárért.",
        },
      ],
    },
    tr: {
      title: "Şartlar ve Koşullar",
      lastUpdated: "Son güncelleme: Ocak 2025",
      sections: [
        {
          title: "Şartların Kabulü",
          content:
            "EuConX hizmetlerine erişerek ve bunları kullanarak, bu anlaşmanın şart ve hükümlerine bağlı olmayı kabul edersiniz.",
        },
        {
          title: "Hizmet Açıklaması",
          content:
            "EuConX, izolasyon malzemeleri için tedarik zinciri yönetim hizmetleri sunarak Avrupa inşaat projelerini Türk üreticilerle buluşturur. Tüm malzemeler AB standartları ve düzenlemelerine uygundur.",
        },
        {
          title: "Fiyatlandırma ve Ödeme",
          content:
            "Fiyatlar EUR cinsinden verilir ve değişebilir. Ödeme koşulları, aksi kararlaştırılmadıkça Net 30 gündür. Geç ödemeler ek ücretlere tabi olabilir.",
        },
        {
          title: "Teslimat ve Risk Transferi",
          content:
            "Teslimat koşulları her sözleşmede belirtilir. Risk, kararlaştırılan yere teslimat üzerine alıcıya geçer. EuConX, mücbir sebep olaylarının neden olduğu gecikmelerden sorumlu değildir.",
        },
        {
          title: "Kalite Garantisi",
          content:
            "Tüm malzemelerin AB standartlarını karşılaması garanti edilir. Herhangi bir kusur teslimat tarihinden itibaren 30 gün içinde bildirilmelidir. Sorumluluğumuz kusurlu malzemelerin değiştirilmesi veya iadesi ile sınırlıdır.",
        },
        {
          title: "Sorumluluk Sınırlaması",
          content:
            "EuConX'in toplam sorumluluğu belirli siparişin değerini aşmayacaktır. Dolaylı, sonuçsal veya cezai zararlardan sorumlu değiliz.",
        },
      ],
    },
  }

  const content = termsContent[language]

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
