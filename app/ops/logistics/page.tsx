'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { Truck, MapPin, Package, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LogisticsPage() {
  const router = useRouter()
  const { user, shipments, orders } = useOps()

  useEffect(() => {
    if (!user) {
      router.push('/ops')
    }
  }, [user, router])

  if (!user) return null

  const getOrderByShipment = (orderId: string) => orders.find((o) => o.id === orderId)

  return (
    <div className="min-h-screen bg-slate-50">
      <OpsNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Logistics Tracking</h1>
          <p className="text-slate-600">Monitor all active shipments and deliveries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.map((shipment) => {
            const order = getOrderByShipment(shipment.orderId)
            return (
              <div
                key={shipment.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Link
                      href={`/ops/orders/${shipment.orderId}`}
                      className="font-semibold text-orange-600 hover:text-orange-700"
                    >
                      {order?.orderNumber}
                    </Link>
                    <p className="text-sm text-slate-600">{order?.customerName}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full border border-blue-200">
                    {shipment.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{shipment.carrier}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{shipment.currentLocation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Package className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{shipment.trackingNumber}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">
                      ETA: {new Date(shipment.estimatedArrivalDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Route</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">{shipment.departureLocation}</span>
                    <div className="flex-1 border-t-2 border-dashed border-slate-300"></div>
                    <span className="text-sm font-medium text-slate-900">{shipment.arrivalLocation}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {shipments.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
            <Truck className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No Active Shipments</h3>
            <p className="text-slate-600">There are currently no shipments in transit</p>
          </div>
        )}
      </main>
    </div>
  )
}
