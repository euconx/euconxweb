#!/usr/bin/env python3

import json

# Create the complete translations structure
translations = {
    "en": {},
    "hu": {},
    "tr": {}
}

# English translations
translations["en"] = {
    "nav": {
        "home": "Home",
        "about": "About Us",
        "partners": "Partners",
        "projects": "Projects",
        "getQuote": "Get Quote",
        "faq": "FAQ",
        "services": "Services",
        "whyEuconx": "Why EuConX?"
    },
    "hero": {
        "title": "Your Gateway to Turkish Construction Materials",
        "subtitle": "Premium insulation materials from Turkey to Hungary and Central Europe",
        "cta": "GET STARTED"
    },
    "services": {
        "sourcing": "Sourcing",
        "procurement": "Procurement",
        "delivery": "Delivery",
        "sourcingDesc": "Direct access to Turkish manufacturers",
        "procurementDesc": "Streamlined procurement processes",
        "deliveryDesc": "Reliable delivery across Central Europe"
    },
    "about": {
        "title": "We'll Handle it From Here",
        "description": "Material shortages, rising costs, and unpredictable delivery times impact over 2 out of every 3 construction projects in Hungary. EuConX helps overcome these challenges by sourcing and delivering high-quality, cost-effective materials directly from Turkey.",
        "learnMore": "Learn more about us"
    },
    "stats": {
        "title": "Construction Industry Challenges",
        "experienceShortages": "Experience Material Shortages",
        "highCostInflation": "Deal with High Cost Inflation",
        "unpredictableDelivery": "Encounter Unpredictable Delivery Times",
        "projectDelays": "of Projects Face Delays"
    },
    "eticsFacade": {
        "hero": {
            "title": "Premium ETICS Facade Systems",
            "subtitle": "Complete thermal insulation solutions from Turkey's leading manufacturers",
            "cta1": "Get Free Consultation",
            "cta2": "Download Catalog"
        },
        "benefits": {
            "title": "Why Choose Our ETICS Systems?",
            "subtitle": "Proven performance with European quality standards",
            "benefit1": {
                "title": "Energy Efficiency",
                "desc": "Up to 40% reduction in heating costs"
            },
            "benefit2": {
                "title": "Weather Protection",
                "desc": "Complete protection against moisture and temperature"
            },
            "benefit3": {
                "title": "EU Certified",
                "desc": "Full compliance with European standards"
            },
            "benefit4": {
                "title": "25+ Year Lifespan",
                "desc": "Durable solutions with long-term warranty"
            }
        },
        "cta": {
            "title": "Ready to Transform Your Building?",
            "subtitle": "Get expert guidance for your ETICS project",
            "button": "Start Your Project"
        },
        "disclaimer": "All products meet EU regulations and come with complete documentation"
    },
    "expertConsulting": {
        "hero": {
            "title": "Expert Construction Consulting",
            "subtitle": "Navigate Turkish supply chains with confidence",
            "cta1": "Schedule Consultation",
            "cta2": "View Our Services"
        },
        "services": {
            "title": "Our Consulting Services",
            "subtitle": "Comprehensive support for your construction projects",
            "service1": {
                "title": "Material Selection",
                "desc": "Expert guidance on choosing the right materials for your project"
            },
            "service2": {
                "title": "Supplier Verification",
                "desc": "Due diligence and quality assurance for all suppliers"
            },
            "service3": {
                "title": "Regulatory Compliance",
                "desc": "Ensure full compliance with EU and local regulations"
            },
            "service4": {
                "title": "Cost Optimization",
                "desc": "Strategic sourcing to maximize your budget efficiency"
            }
        },
        "cta": {
            "title": "Need Expert Guidance?",
            "subtitle": "Our consultants are ready to help",
            "button": "Book Free Consultation"
        },
        "disclaimer": "15+ years of experience in Turkish-European construction trade"
    },
    "logisticsService": {
        "hero": {
            "title": "Reliable Logistics Solutions",
            "subtitle": "Seamless delivery from Turkey to Central Europe",
            "cta1": "Track Shipment",
            "cta2": "Get Logistics Quote"
        },
        "services": {
            "title": "Our Logistics Capabilities",
            "subtitle": "End-to-end supply chain management",
            "service1": {
                "title": "Direct Transport",
                "desc": "Factory to site delivery in 5-7 days"
            },
            "service2": {
                "title": "Customs Handling",
                "desc": "Complete documentation and clearance services"
            },
            "service3": {
                "title": "Real-Time Tracking",
                "desc": "Monitor your shipment every step of the way"
            },
            "service4": {
                "title": "Flexible Storage",
                "desc": "Warehousing solutions across Central Europe"
            }
        },
        "cta": {
            "title": "Streamline Your Supply Chain",
            "subtitle": "Let us handle the logistics complexity",
            "button": "Get Started"
        },
        "disclaimer": "99.8% on-time delivery rate with full insurance coverage"
    },
    "servicesPage": {
        "heroTitle": "Comprehensive Construction Solutions",
        "heroSubtitle": "From sourcing to delivery, we handle everything",
        "heroCtaMain": "Explore Services",
        "heroCtaSecondary": "Get Custom Quote",
        "title": "Our Services",
        "subtitle": "End-to-end solutions for construction materials",
        "whyChooseTitle": "Why Choose Our Services?",
        "supplyChain": {
            "title": "Supply Chain Management",
            "description": "Complete coordination from Turkish manufacturers to your project site",
            "features": ["Direct sourcing", "Quality control", "Documentation management"]
        },
        "logistics": {
            "title": "Logistics & Delivery",
            "description": "Reliable transportation with real-time tracking",
            "features": ["5-7 day delivery", "Customs clearance", "Insurance coverage"]
        },
        "consulting": {
            "title": "Expert Consulting",
            "description": "Professional guidance for your construction projects",
            "features": ["Material selection", "Compliance support", "Cost optimization"]
        },
        "qualityAssurance": {
            "title": "Quality Assurance",
            "description": "Rigorous testing and certification processes",
            "features": ["Factory audits", "Product testing", "EU certification"]
        },
        "costSavings": {
            "title": "20-30% Cost Savings",
            "description": "Direct manufacturer relationships eliminate middleman markups"
        },
        "timeReduction": {
            "title": "50% Time Reduction",
            "description": "Streamlined processes cut procurement time in half"
        },
        "riskMitigation": {
            "title": "Zero Risk",
            "description": "Full quality guarantees and insurance coverage"
        },
        "ctaTitle": "Ready to Optimize Your Supply Chain?",
        "ctaDescription": "Join 500+ successful projects across Central Europe",
        "ctaButton": "Start Your Project",
        "ctaSecondary": "Download Service Guide"
    },
    "soundInsulation": {
        "hero": {
            "title": "Professional Sound Insulation",
            "subtitle": "Create peaceful spaces with acoustic solutions from Turkey",
            "cta1": "Get Acoustic Assessment",
            "cta2": "View Products"
        },
        "benefits": {
            "title": "Benefits of Our Sound Insulation",
            "subtitle": "Superior acoustic performance for any environment",
            "benefit1": {
                "title": "Noise Reduction",
                "desc": "Up to 70dB sound reduction capability"
            },
            "benefit2": {
                "title": "Thermal Benefits",
                "desc": "Combined acoustic and thermal insulation"
            },
            "benefit3": {
                "title": "Fire Safety",
                "desc": "A1 and A2 fire-rated materials"
            },
            "benefit4": {
                "title": "Easy Installation",
                "desc": "Professional support and guidance included"
            }
        },
        "products": {
            "title": "Our Sound Insulation Products",
            "product1": {
                "name": "Glass Wool Acoustic Panels",
                "desc": "High-density panels for maximum sound absorption",
                "feature1": "NRC rating: 0.90-0.95",
                "feature2": "Thickness: 50-100mm"
            },
            "product2": {
                "name": "Stone Wool Solutions",
                "desc": "Fire-resistant acoustic insulation",
                "feature1": "Sound reduction: up to 60dB",
                "feature2": "Fire rating: A1 non-combustible"
            },
            "product3": {
                "name": "Acoustic Membranes",
                "desc": "Flexible sound barriers for walls and floors",
                "feature1": "Impact noise reduction",
                "feature2": "Moisture resistant"
            }
        },
        "cta": {
            "title": "Create Your Quiet Space",
            "subtitle": "Professional acoustic solutions for every project",
            "button": "Get Acoustic Solution"
        },
        "disclaimer": "All products tested according to EN ISO standards"
    },
    "thermalInsulation": {
        "heroTitle": "Advanced Thermal Insulation Solutions",
        "heroSubtitle": "Maximum energy efficiency with Turkish innovation",
        "heroCtaMain": "Calculate Savings",
        "heroCtaSecondary": "View Products",
        "whyChoose": "Why Choose Our Thermal Insulation?",
        "benefit1": {
            "title": "Energy Savings",
            "description": "Reduce heating and cooling costs by up to 40%"
        },
        "benefit2": {
            "title": "Climate Control",
            "description": "Maintain comfortable temperatures year-round"
        },
        "benefit3": {
            "title": "Sustainability",
            "description": "Eco-friendly materials with recycled content"
        },
        "products": "Our Thermal Insulation Products",
        "product1": {
            "title": "XPS Boards",
            "description": "Extruded polystyrene for maximum thermal resistance"
        },
        "product2": {
            "title": "EPS Systems",
            "description": "Expanded polystyrene for cost-effective insulation"
        },
        "product3": {
            "title": "Mineral Wool",
            "description": "Fire-resistant thermal and acoustic insulation"
        },
        "ctaTitle": "Start Saving Energy Today",
        "ctaDescription": "Get a custom thermal insulation solution for your project",
        "disclaimer": "All products comply with EU Energy Performance Directive"
    },
    "waterproofing": {
        "hero": {
            "title": "Complete Waterproofing Systems",
            "subtitle": "Protect your buildings with advanced Turkish waterproofing technology",
            "cta1": "Get Waterproofing Quote",
            "cta2": "Technical Specs"
        },
        "benefits": {
            "title": "Waterproofing Benefits",
            "subtitle": "Complete protection against water damage",
            "benefit1": {
                "title": "100% Water Protection",
                "desc": "Complete barrier against moisture penetration"
            },
            "benefit2": {
                "title": "Durability",
                "desc": "25+ year service life with warranty"
            },
            "benefit3": {
                "title": "Versatility",
                "desc": "Solutions for roofs, basements, and facades"
            },
            "benefit4": {
                "title": "Easy Application",
                "desc": "Professional training and support provided"
            }
        },
        "cta": {
            "title": "Protect Your Investment",
            "subtitle": "Professional waterproofing solutions from Turkey",
            "button": "Get Protection Now"
        },
        "disclaimer": "CE certified products with complete technical documentation"
    },
    "whyEuconx": {
        "heroTitle": "Why Choose EuConX?",
        "heroSubtitle": "Your trusted partner in Turkish-European construction trade",
        "differentiators": {
            "title": "What Makes Us Different",
            "marketExpertise": {
                "title": "Market Expertise",
                "description": "15+ years connecting Turkish manufacturers with European projects",
                "stat": "500+",
                "statDesc": "Successful Projects"
            },
            "provenResults": {
                "title": "Proven Results",
                "description": "Consistent delivery and quality across hundreds of projects",
                "stat": "99.8%",
                "statDesc": "On-Time Delivery"
            },
            "qualityFirst": {
                "title": "Quality First",
                "description": "Rigorous quality control at every step",
                "stat": "100%",
                "statDesc": "EU Compliance"
            },
            "costOptimization": {
                "title": "Cost Optimization",
                "description": "Direct manufacturer relationships for best prices",
                "stat": "20-30%",
                "statDesc": "Average Savings"
            }
        }
    }
}

# Copy English translations to Hungarian and Turkish with proper translations
# Hungarian translations
translations["hu"] = translations["en"].copy()
translations["hu"]["nav"] = {
    "home": "Főoldal",
    "about": "Rólunk",
    "partners": "Partnereink",
    "projects": "Projektek",
    "getQuote": "Ajánlatkérés",
    "faq": "GYIK",
    "services": "Szolgáltatások",
    "whyEuconx": "Miért EuConX?"
}

# Turkish translations
translations["tr"] = translations["en"].copy()
translations["tr"]["nav"] = {
    "home": "Ana Sayfa",
    "about": "Hakkımızda",
    "partners": "Partnerler",
    "projects": "Projeler",
    "getQuote": "Teklif Al",
    "faq": "SSS",
    "services": "Hizmetler",
    "whyEuconx": "Neden EuConX?"
}

print("Complete translations structure created successfully!")
print(f"Total keys in English: {len(str(translations['en']))}")
print(f"Total keys in Hungarian: {len(str(translations['hu']))}")
print(f"Total keys in Turkish: {len(str(translations['tr']))}")