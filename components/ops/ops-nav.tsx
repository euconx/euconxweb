'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useOps } from '@/lib/ops/ops-context'
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'

export default function OpsNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useOps()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/ops/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: '/ops/orders', label: 'Orders', icon: <Package className="w-5 h-5" /> },
    { href: '/ops/logistics', label: 'Logistics', icon: <Truck className="w-5 h-5" /> },
    { href: '/ops/customers', label: 'Customers', icon: <Users className="w-5 h-5" /> },
    { href: '/ops/reports', label: 'Reports', icon: <FileText className="w-5 h-5" /> },
  ]

  const handleLogout = () => {
    logout()
    router.push('/ops')
  }

  if (!user) return null

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/ops/dashboard" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  EuConX Ops
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      pathname === item.href
                        ? 'bg-orange-50 text-orange-600 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500 capitalize">{user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    pathname === item.href
                      ? 'bg-orange-50 text-orange-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="px-4 mb-3">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500 capitalize">{user.role}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
