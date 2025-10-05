'use client'

import { useOps } from '@/lib/ops/ops-context'
import OpsNav from '@/components/ops/ops-nav'
import { ArrowLeft, Package, User, Calendar, DollarSign, Truck, MapPin, Clock, FileText, CreditCard as Edit, CircleCheck as CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { OrderStatus } from '@/lib/ops/types'

export default function OrderDetailsPage() {
  const params = useParams()
  const { user, getOrderById, getLogisticsByOrderId, getShipmentByOrderId, updateOrder, addLogisticsUpdate } = useOps()
  const [showStatusUpdate, setShowStatusUpdate] = useState(false)
  const [newStatus, setNewStatus] = useState<OrderStatus>('pending')
  const [newLocation, setNewLocation] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const order = getOrderById(params?.id as string)
  const logistics = getLogisticsByOrderId(params?.id as string)
  const shipment = getShipmentByOrderId(params?.id as string)

  useEffect(() => {
    if (!user) {
      window.location.href = '/ops'
    }
  }, [user])

  if (!user || !order) {
    return null
  }

  const handleAddUpdate = () => {
    if (!newLocation || !newDescription) return

    addLogisticsUpdate({
      orderId: order.id,
      status: newStatus,
      location: newLocation,
      timestamp: new Date().toISOString(),
      description: newDescription,
      updatedBy: user.id,
    })

    setShowStatusUpdate(false)
    setNewLocation('')
    setNewDescription('')
  }

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
        <div className="mb-6">
          <Link
            href="/ops/orders"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{order.orderNumber}</h1>
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex px-3 py-1 text-sm font-medium rounded-full border ${
                    statusColors[order.status]
                  }`}
                >
                  {order.status.replace(/_/g, ' ')}
                </span>
                <span className="text-sm text-slate-600">
                  Ordered {new Date(order.orderDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowStatusUpdate(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
            >
              <Edit className="w-4 h-4" />
              Update Status
            </button>
          </div>
        </div>

        {showStatusUpdate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Add Status Update</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">New Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as OrderStatus)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="in_production">In Production</option>
                    <option value="ready_to_ship">Ready to Ship</option>
                    <option value="in_transit">In Transit</option>
                    <option value="customs">Customs</option>
                    <option value="out_for_delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    placeholder="e.g., Budapest, Hungary"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Describe the status update..."
                    rows={3}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowStatusUpdate(false)}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddUpdate}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Add Update
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Customer Name</p>
                  <p className="font-medium text-slate-900">{order.customerName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <p className="font-medium text-slate-900">{order.customerEmail}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Order Items
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900">{item.productName}</h3>
                        <p className="text-sm text-slate-600">{item.productCode}</p>
                        <p className="text-sm text-slate-500 mt-1">{item.manufacturer}</p>
                      </div>
                      <p className="font-bold text-slate-900">€{item.totalPrice.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{item.specifications}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">
                        Quantity: {item.quantity} {item.unit}
                      </span>
                      <span className="text-slate-500">€{item.unitPrice.toFixed(2)} per {item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {shipment && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Shipment Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Tracking Number</p>
                    <p className="font-medium text-slate-900">{shipment.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Carrier</p>
                    <p className="font-medium text-slate-900">{shipment.carrier}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Current Location</p>
                    <p className="font-medium text-slate-900">{shipment.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Vehicle</p>
                    <p className="font-medium text-slate-900">{shipment.vehicleNumber}</p>
                  </div>
                  {shipment.driverName && (
                    <>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Driver</p>
                        <p className="font-medium text-slate-900">{shipment.driverName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 mb-1">Driver Phone</p>
                        <p className="font-medium text-slate-900">{shipment.driverPhone}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Order Date</span>
                  <span className="font-medium text-slate-900">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Est. Delivery</span>
                  <span className="font-medium text-slate-900">
                    {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
                  </span>
                </div>
                {order.actualDeliveryDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Delivered</span>
                    <span className="font-medium text-green-600">
                      {new Date(order.actualDeliveryDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                <div className="border-t border-slate-200 pt-3 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">Total Value</span>
                    <span className="text-2xl font-bold text-slate-900">
                      €{order.totalValue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {order.notes && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Notes
                </h2>
                <p className="text-slate-600">{order.notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Logistics Tracking
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
              {logistics.map((log, idx) => (
                <div key={log.id} className="relative flex gap-4">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 capitalize">
                          {log.status.replace(/_/g, ' ')}
                        </h3>
                        <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {log.location}
                        </p>
                      </div>
                      <span className="text-sm text-slate-500">
                        {new Date(log.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-slate-600">{log.description}</p>
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
