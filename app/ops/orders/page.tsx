'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { Package, Search, Filter, Plus, Eye, CreditCard as Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { OrderStatus } from '@/lib/ops/types'

export default function OrdersPage() {
  const router = useRouter()
  const { user, orders, deleteOrder } = useOps()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all')

  useEffect(() => {
    if (!user) {
      router.push('/ops')
    }
  }, [user, router])

  if (!user) return null

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

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

  return (
    <div className="min-h-screen bg-slate-50">
      <OpsNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Orders</h1>
              <p className="text-slate-600">Manage all orders and track their status</p>
            </div>
            <Link
              href="/ops/orders/new"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              New Order
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by order number or customer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as OrderStatus | 'all')}
                className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="in_production">In Production</option>
                <option value="ready_to_ship">Ready to Ship</option>
                <option value="in_transit">In Transit</option>
                <option value="customs">Customs</option>
                <option value="out_for_delivery">Out for Delivery</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Order Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Order Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Delivery Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Total Value
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center">
                      <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-600 font-medium">No orders found</p>
                      <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters</p>
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <Link
                          href={`/ops/orders/${order.id}`}
                          className="font-semibold text-orange-600 hover:text-orange-700"
                        >
                          {order.orderNumber}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-slate-900">{order.customerName}</p>
                          <p className="text-sm text-slate-500">{order.customerEmail}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${
                            statusColors[order.status]
                          }`}
                        >
                          {order.status.replace(/_/g, ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {new Date(order.orderDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900">
                          €{order.totalValue.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/ops/orders/${order.id}`}
                            className="p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          {user.role === 'admin' && (
                            <button
                              onClick={() => {
                                if (confirm('Are you sure you want to delete this order?')) {
                                  deleteOrder(order.id)
                                }
                              }}
                              className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Order"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
