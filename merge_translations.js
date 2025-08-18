#!/usr/bin/env node

const fs = require('fs');

// Read the current translations file
const currentContent = fs.readFileSync('/home/user/webapp/lib/translations.ts', 'utf8');

// Read the additions file
const additionsContent = fs.readFileSync('/home/user/webapp/lib/translations_additions.ts', 'utf8');

// Extract the additions object
const additionsStart = additionsContent.indexOf('export const additionalTranslations = {');
const additionsCode = additionsContent.substring(additionsStart);

// Create the merged content
let mergedContent = `export type Language = "en" | "hu" | "tr"

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Us",
      partners: "Partners",
      projects: "Projects",
      getQuote: "Get Quote",
      faq: "FAQ",
      services: "Services",
      whyEuconx: "Why EuConX?",
    },

    // Hero Section
    hero: {
      title: "Your Gateway to Turkish Construction Materials",
      subtitle: "Premium insulation materials from Turkey to Hungary and Central Europe",
      cta: "GET STARTED",
    },

    // Services
    services: {
      sourcing: "Sourcing",
      procurement: "Procurement",
      delivery: "Delivery",
      sourcingDesc: "Direct access to Turkish manufacturers",
      procurementDesc: "Streamlined procurement processes",
      deliveryDesc: "Reliable delivery across Central Europe",
    },

    // About
    about: {
      title: "We'll Handle it From Here",
      description:
        "Material shortages, rising costs, and unpredictable delivery times impact over 2 out of every 3 construction projects in Hungary. EuConX helps overcome these challenges by sourcing and delivering high-quality, cost-effective materials directly from Turkey.",
      learnMore: "Learn more about us",
    },

    // Statistics
    stats: {
      title: "Construction Industry Challenges",
      experienceShortages: "Experience Material Shortages",
      highCostInflation: "Deal with High Cost Inflation",
      unpredictableDelivery: "Encounter Unpredictable Delivery Times",
      projectDelays: "of Projects Face Delays",
    },

    // Partners
    partners: {
      title: "Our Partners",
      subtitle: "Working together for efficiency: ODE and other leading Turkish manufacturers.",

      odeTitle: "ODE INSULATION",
      odeDesc:
        "Leading Turkish manufacturer of comprehensive thermal insulation solutions with 40+ years of expertise in energy-efficient building materials.",
      odeDetails:
        "ODE specializes in four key product lines perfect for EKR projects: ODE Isıpan (extruded polystyrene with superior thermal performance), ODE Starflex (premium glass wool for maximum energy savings), ODE R-Flex (elastomeric rubber foam with exceptional thermal conductivity), and ODE Membran (advanced waterproofing systems). Their commitment to sustainability includes 60% solar-powered manufacturing, making them ideal for Hungary's green building initiatives.",
      odeProducts:
        "Key EKR Products: Starflex Loft Rolls (reduce energy costs by 30%), R-Flex PRM Sheets (maximum thermal efficiency), Isıpan XPS Boards (long-lasting insulation)",

      izocamTitle: "IZOCAM INSULATION",
      izocamDesc:
        "Turkey's premier insulation manufacturer specializing in glass wool and stone wool solutions for sustainable, energy-efficient construction.",
      izocamDetails:
        "IZOCAM leads the Turkish insulation industry with advanced glass wool and stone wool products designed for optimal thermal performance. Their comprehensive range includes high-performance glass wool for residential EKR renovations, fire-resistant stone wool for commercial applications, and specialized acoustic insulation systems. All products meet stringent EU energy efficiency standards, making them perfect for Hungary's ambitious renovation targets.",
      izocamProducts:
        "EKR Solutions: Premium Glass Wool (thermal conductivity λ=0.032-0.040 W/mK), Fire-Safe Stone Wool (A1 fire classification), Acoustic Insulation Systems",

      adoTitle: "ADO GROUP",
      adoDesc:
        "Turkey's leading manufacturer of integrated building solutions, specializing in energy-efficient doors, windows, and flooring systems for modern construction.",
      adoDetails:
        "ADO GROUP operates from state-of-the-art facilities in Antalya, producing comprehensive building envelope solutions perfect for Hungarian EKR projects. As Turkey's only LVT and SPC parquet manufacturer, they offer ADOKAPI wooden composite doors (combining natural aesthetics with superior thermal performance), ADOFLOOR luxury vinyl tile flooring (exceptional durability and design flexibility), advanced PVC window and door systems, and aluminum facade solutions. Their commitment to sustainability includes 100% recyclable Penwood profiles, making them ideal for Hungary's green building requirements.",
      adoProducts:
        "EKR Solutions: ADOKAPI Composite Doors (superior thermal insulation), ADOFLOOR LVT Systems (energy-efficient flooring), PVC Window Systems (thermal bridge prevention), Aluminum Facade Solutions",

      bonusTitle: "BONUS YALITIM",
      bonusDesc:
        "Leading Turkish manufacturer of high-performance thermal insulation and waterproofing solutions, specializing in XPS systems for maximum energy efficiency.",
      bonusDetails:
        "BONUS YALITIM excels in producing comprehensive insulation solutions designed for optimal energy performance in challenging climates. Their product range includes high-performance XPS thermal insulation boards (exceptional thermal resistance and moisture protection), advanced waterproofing membranes (complete building envelope protection), specialized sound insulation systems, and fire-resistant materials. All products are engineered to maximize energy efficiency and contribute to sustainable development, making them perfect for Hungary's EKR energy renovation programs.",
      bonusProducts:
        "EKR Solutions: XPS Thermal Boards (superior thermal performance), Waterproofing Membranes (moisture protection), Sound Insulation Systems (acoustic comfort), Fire-Resistant Materials (safety compliance)",

      whyChoose: "Why do our partners choose EuConX?",
      reliableLogistics: "Reliable logistics",
      reliableLogisticsDesc: "Precise delivery schedules and comprehensive documentation management",
      euCompliance: "EU compliance",
      euComplianceDesc: "Complete coordination of CE, EPD and other certifications",
      marketExpertise: "Market expertise",
      marketExpertiseDesc: "Deep knowledge of Hungarian and Central European construction requirements",
      becomePartner: "Want to become our partner?",
      becomePartnerDesc:
        "Join our leading Turkish manufacturers and expand your offering with premium insulation materials.",
      contact: "Contact Us",
    },`;

// Now load the additions properly
eval(additionsCode.replace('export const additionalTranslations', 'const additionalTranslations'));

// Continue with the rest of the merged content
mergedContent += `
    // ETICS Facade Page
    eticsFacade: ${JSON.stringify(additionalTranslations.en.eticsFacade, null, 6).replace(/"/g, '"')},

    // Expert Consulting Page
    expertConsulting: ${JSON.stringify(additionalTranslations.en.expertConsulting, null, 6).replace(/"/g, '"')},

    // Logistics Service Page
    logisticsService: ${JSON.stringify(additionalTranslations.en.logisticsService, null, 6).replace(/"/g, '"')},

    // Services Page
    servicesPage: ${JSON.stringify(additionalTranslations.en.servicesPage, null, 6).replace(/"/g, '"')},

    // Sound Insulation Page
    soundInsulation: ${JSON.stringify(additionalTranslations.en.soundInsulation, null, 6).replace(/"/g, '"')},

    // Thermal Insulation Page
    thermalInsulation: ${JSON.stringify(additionalTranslations.en.thermalInsulation, null, 6).replace(/"/g, '"')},

    // Waterproofing Page
    waterproofing: ${JSON.stringify(additionalTranslations.en.waterproofing, null, 6).replace(/"/g, '"')},

    // Why EuConX Page
    whyEuconx: ${JSON.stringify(additionalTranslations.en.whyEuconx, null, 6).replace(/"/g, '"')},
  },

  hu: {
    // Navigation
    nav: {
      home: "Főoldal",
      about: "Rólunk",
      partners: "Partnereink",
      projects: "Projektek",
      getQuote: "Ajánlatkérés",
      faq: "GYIK",
      services: "Szolgáltatások",
      whyEuconx: "Miért EuConX?",
    },

    // Add Hungarian translations for new pages
    eticsFacade: ${JSON.stringify(additionalTranslations.hu.eticsFacade, null, 6).replace(/"/g, '"')},
    expertConsulting: ${JSON.stringify(additionalTranslations.hu.expertConsulting, null, 6).replace(/"/g, '"')},
    logisticsService: ${JSON.stringify(additionalTranslations.hu.logisticsService, null, 6).replace(/"/g, '"')},
    servicesPage: ${JSON.stringify(additionalTranslations.hu.servicesPage, null, 6).replace(/"/g, '"')},
    soundInsulation: ${JSON.stringify(additionalTranslations.hu.soundInsulation, null, 6).replace(/"/g, '"')},
    thermalInsulation: ${JSON.stringify(additionalTranslations.hu.thermalInsulation, null, 6).replace(/"/g, '"')},
    waterproofing: ${JSON.stringify(additionalTranslations.hu.waterproofing, null, 6).replace(/"/g, '"')},
    whyEuconx: ${JSON.stringify(additionalTranslations.hu.whyEuconx, null, 6).replace(/"/g, '"')},
  },

  tr: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      partners: "Partnerler",
      projects: "Projeler",
      getQuote: "Teklif Al",
      faq: "SSS",
      services: "Hizmetler",
      whyEuconx: "Neden EuConX?",
    },

    // Add Turkish translations for new pages
    eticsFacade: ${JSON.stringify(additionalTranslations.tr.eticsFacade, null, 6).replace(/"/g, '"')},
    expertConsulting: ${JSON.stringify(additionalTranslations.tr.expertConsulting, null, 6).replace(/"/g, '"')},
    logisticsService: ${JSON.stringify(additionalTranslations.tr.logisticsService, null, 6).replace(/"/g, '"')},
    servicesPage: ${JSON.stringify(additionalTranslations.tr.servicesPage, null, 6).replace(/"/g, '"')},
    soundInsulation: ${JSON.stringify(additionalTranslations.tr.soundInsulation, null, 6).replace(/"/g, '"')},
    thermalInsulation: ${JSON.stringify(additionalTranslations.tr.thermalInsulation, null, 6).replace(/"/g, '"')},
    waterproofing: ${JSON.stringify(additionalTranslations.tr.waterproofing, null, 6).replace(/"/g, '"')},
    whyEuconx: ${JSON.stringify(additionalTranslations.tr.whyEuconx, null, 6).replace(/"/g, '"')},
  },
}`;

console.log('Writing merged translations file...');
fs.writeFileSync('/home/user/webapp/lib/translations_merged.ts', mergedContent);
console.log('Merged translations written to translations_merged.ts');