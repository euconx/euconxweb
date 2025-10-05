'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { Users, Mail, Phone, MapPin, Building } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CustomersPage() {
  const router = useRouter()
  const { user, customers, orders } = useOps()

  useEffect(() => {
    if (!user) {
      router.push('/ops')
    }
  }, [user, router])

  if (!user) return null

  const getCustomerStats = (customerId: string) => {
    const customerOrders = orders.filter((o) => o.customerId === customerId)
    const totalOrders = customerOrders.length
    const totalValue = customerOrders.reduce((sum, o) => sum + o.totalValue, 0)
    return { totalOrders, totalValue }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <OpsNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Customers</h1>
          <p className="text-slate-600">Manage customer information and relationships</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => {
            const stats = getCustomerStats(customer.id)
            return (
              <div
                key={customer.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                    {customer.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900">{stats.totalOrders}</p>
                    <p className="text-xs text-slate-500">Orders</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-1">{customer.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{customer.company}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">
                      {customer.city}, {customer.country}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Total Value</span>
                    <span className="text-lg font-bold text-slate-900">
                      €{(stats.totalValue / 1000).toFixed(0)}K
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
