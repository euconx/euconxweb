"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("euconx-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("euconx-language", lang)
  }

  const t = (key: string): any => {
    const keys = key.split(".")
    let value: any = translations[language]

    // Navigate through nested objects
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        value = undefined
        break
      }
    }

    // If not found in current language, try English as fallback
    if (value === undefined) {
      value = translations.en
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k]
        } else {
          value = undefined
          break
        }
      }
    }

    // Ensure we never return undefined - return the key as fallback
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }

    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
