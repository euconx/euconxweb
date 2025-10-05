'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { FileText, Download, TrendingUp, Package, DollarSign, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ReportsPage() {
  const router = useRouter()
  const { user, orders, stats } = useOps()

  useEffect(() => {
    if (!user) {
      router.push('/ops')
    }
  }, [user, router])

  if (!user) return null

  const exportToCSV = () => {
    const headers = ['Order Number', 'Customer', 'Status', 'Order Date', 'Delivery Date', 'Total Value']
    const rows = orders.map((o) => [
      o.orderNumber,
      o.customerName,
      o.status,
      new Date(o.orderDate).toLocaleDateString(),
      new Date(o.estimatedDeliveryDate).toLocaleDateString(),
      o.totalValue,
    ])

    const csvContent = [headers, ...rows].map((row) => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `euconx-orders-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  const monthlyData = orders.reduce((acc, order) => {
    const month = new Date(order.orderDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    if (!acc[month]) acc[month] = { count: 0, revenue: 0 }
    acc[month].count++
    if (order.status === 'delivered') acc[month].revenue += order.totalValue
    return acc
  }, {} as Record<string, { count: number; revenue: number }>)

  return (
    <div className="min-h-screen bg-slate-50">
      <OpsNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Reports & Analytics</h1>
              <p className="text-slate-600">Generate insights and export data</p>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Orders</p>
                <p className="text-2xl font-bold text-slate-900">{stats.totalOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Total Revenue</p>
                <p className="text-2xl font-bold text-slate-900">€{(stats.totalRevenue / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Avg Delivery</p>
                <p className="text-2xl font-bold text-slate-900">{stats.averageDeliveryTime.toFixed(1)} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">On-Time Rate</p>
                <p className="text-2xl font-bold text-slate-900">{stats.onTimeDeliveryRate.toFixed(0)}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Monthly Performance</h2>
            <div className="space-y-4">
              {Object.entries(monthlyData)
                .reverse()
                .slice(0, 6)
                .map(([month, data]) => (
                  <div key={month}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{month}</span>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-slate-900">{data.count} orders</span>
                        <span className="text-sm text-slate-500 ml-3">
                          €{(data.revenue / 1000).toFixed(0)}K
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                        style={{ width: `${(data.count / stats.totalOrders) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Top Performing Products</h2>
            <div className="space-y-4">
              {orders
                .flatMap((o) => o.items)
                .reduce((acc, item) => {
                  const existing = acc.find((i) => i.productCode === item.productCode)
                  if (existing) {
                    existing.quantity += item.quantity
                    existing.revenue += item.totalPrice
                  } else {
                    acc.push({
                      productCode: item.productCode,
                      productName: item.productName,
                      quantity: item.quantity,
                      revenue: item.totalPrice,
                    })
                  }
                  return acc
                }, [] as Array<{ productCode: string; productName: string; quantity: number; revenue: number }>)
                .sort((a, b) => b.revenue - a.revenue)
                .slice(0, 5)
                .map((product) => (
                  <div key={product.productCode} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{product.productName}</p>
                      <p className="text-sm text-slate-500">{product.productCode}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">€{(product.revenue / 1000).toFixed(1)}K</p>
                      <p className="text-sm text-slate-500">{product.quantity} units</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
