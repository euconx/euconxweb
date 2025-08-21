"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown, ChevronRight, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { href: "/", label: t("nav.home"), icon: "🏠" },
    { href: "/about", label: t("nav.about"), icon: "👥" },
    { href: "/partners", label: t("nav.partners"), icon: "🤝" },
    { href: "/projects", label: t("nav.projects"), icon: "🏗️" },
    { href: "/faq", label: "FAQ", icon: "❓" },
  ]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hu", name: "Magyar", flag: "🇭🇺" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-euconx-navy/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-euconx-orange to-euconx-orange-neon bg-clip-text text-transparent font-orbitron group-hover:animate-pulse">
                EUCONX
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-euconx-orange to-euconx-orange-neon rounded-lg opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <Zap className="w-5 h-5 text-euconx-orange animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-euconx-gray-300 hover:text-euconx-white transition-colors duration-300 font-medium"
              >
                <span className="flex items-center space-x-2">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-euconx-orange to-euconx-orange-neon group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-euconx-gray-300 hover:text-euconx-white transition-colors duration-300 font-medium group"
              >
                <Globe className="w-4 h-4" />
                <span className="flex items-center space-x-1">
                  <span>{currentLanguage?.flag}</span>
                  <span>{currentLanguage?.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </span>
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-euconx-navy/95 backdrop-blur-xl border border-euconx-gray-700/50 rounded-xl shadow-2xl overflow-hidden animate-scale-in"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any)
                        setLangOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center space-x-3 transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-euconx-orange/20 text-euconx-orange border-l-4 border-euconx-orange'
                          : 'text-euconx-gray-300 hover:bg-euconx-gray-800/50 hover:text-euconx-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="/get-quote"
              className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-euconx-orange to-euconx-orange-neon text-euconx-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t("nav.getQuote")}</span></span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-euconx-orange-neon to-euconx-red-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-euconx-gray-300 hover:text-euconx-white transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-euconx-navy/95 backdrop-blur-xl border-t border-euconx-gray-700/50 animate-slide-down"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Navigation Items */}
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-euconx-gray-300 hover:text-euconx-white hover:bg-euconx-gray-800/50 rounded-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Language Selector */}
              <div className="border-t border-euconx-gray-700/50 pt-6">
                <h3 className="px-4 mb-3 text-sm font-medium text-euconx-gray-400">Language</h3>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center space-x-3 rounded-xl transition-all duration-200 ${
                        language === lang.code
                          ? 'bg-euconx-orange/20 text-euconx-orange border border-euconx-orange/30'
                          : 'text-euconx-gray-300 hover:bg-euconx-gray-800/50 hover:text-euconx-white'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="border-t border-euconx-gray-700/50 pt-6">
                <Link
                  href="/get-quote"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-euconx-orange to-euconx-orange-neon text-euconx-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t("nav.getQuote")}</span></span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
