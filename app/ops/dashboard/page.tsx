'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { Package, TrendingUp, Truck, CircleCheck as CheckCircle, Clock, ArrowRight, CircleAlert as AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardPage() {
  const router = useRouter()
  const { user, orders, stats } = useOps()

  useEffect(() => {
    if (!user) {
      router.push('/ops')
    }
  }, [user, router])

  if (!user) return null

  const recentOrders = orders.slice(0, 5)
  const urgentOrders = orders.filter(
    (o) =>
      !['delivered', 'cancelled'].includes(o.status) &&
      new Date(o.estimatedDeliveryDate).getTime() - Date.now() < 7 * 24 * 60 * 60 * 1000
  )

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
    in_production: 'bg-purple-100 text-purple-800 border-purple-200',
    ready_to_ship: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    in_transit: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    customs: 'bg-orange-100 text-orange-800 border-orange-200',
    out_for_delivery: 'bg-green-100 text-green-800 border-green-200',
    delivered: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    cancelled: 'bg-red-100 text-red-800 border-red-200',
  }

  const statCards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      change: '+12%',
      icon: <Package className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Active Orders',
      value: stats.activeOrders,
      change: '+8%',
      icon: <Truck className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Completed',
      value: stats.completedOrders,
      change: '+15%',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Total Revenue',
      value: `€${(stats.totalRevenue / 1000).toFixed(0)}K`,
      change: '+23%',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <OpsNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">
            Welcome back, {user.name}. Here's your supply chain overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center text-white`}
                >
                  {card.icon}
                </div>
                <span className="text-sm font-semibold text-green-600">{card.change}</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-600">Avg Delivery Time</h3>
                <p className="text-xl font-bold text-slate-900">{stats.averageDeliveryTime.toFixed(1)} days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-600">On-Time Rate</h3>
                <p className="text-xl font-bold text-slate-900">{stats.onTimeDeliveryRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-600">This Month</h3>
                <p className="text-xl font-bold text-slate-900">€{(stats.revenueThisMonth / 1000).toFixed(0)}K</p>
              </div>
            </div>
          </div>
        </div>

        {urgentOrders.length > 0 && (
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Urgent Orders Requiring Attention
                </h3>
                <p className="text-sm text-orange-700 mb-4">
                  {urgentOrders.length} order(s) with delivery scheduled within 7 days
                </p>
                <Link
                  href="/ops/orders"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  View All Orders <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Recent Orders</h2>
                <Link
                  href="/ops/orders"
                  className="text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {recentOrders.map((order) => (
                <Link
                  key={order.id}
                  href={`/ops/orders/${order.id}`}
                  className="block p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-slate-900">{order.orderNumber}</p>
                      <p className="text-sm text-slate-600">{order.customerName}</p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full border ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                    <span className="font-semibold text-slate-900">
                      €{order.totalValue.toLocaleString()}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Order Status Distribution</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {Object.entries(
                  orders.reduce((acc, order) => {
                    acc[order.status] = (acc[order.status] || 0) + 1
                    return acc
                  }, {} as Record<string, number>)
                )
                  .sort((a, b) => b[1] - a[1])
                  .map(([status, count]) => (
                    <div key={status}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700 capitalize">
                          {status.replace(/_/g, ' ')}
                        </span>
                        <span className="text-sm font-semibold text-slate-900">{count}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all"
                          style={{ width: `${(count / orders.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
