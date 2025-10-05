'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Order, Customer, LogisticsTracking, Shipment, User, DashboardStats } from './types'
import { mockOrders, mockCustomers, mockLogistics, mockShipments, mockUsers } from './mock-data'

interface OpsContextType {
  user: User | null
  orders: Order[]
  customers: Customer[]
  logistics: LogisticsTracking[]
  shipments: Shipment[]
  stats: DashboardStats
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateOrder: (id: string, updates: Partial<Order>) => void
  deleteOrder: (id: string) => void
  addLogisticsUpdate: (update: Omit<LogisticsTracking, 'id'>) => void
  getOrderById: (id: string) => Order | undefined
  getLogisticsByOrderId: (orderId: string) => LogisticsTracking[]
  getShipmentByOrderId: (orderId: string) => Shipment | undefined
}

const OpsContext = createContext<OpsContextType | undefined>(undefined)

export function OpsProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [customers, setCustomers] = useState<Customer[]>([])
  const [logistics, setLogistics] = useState<LogisticsTracking[]>([])
  const [shipments, setShipments] = useState<Shipment[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    activeOrders: 0,
    completedOrders: 0,
    totalRevenue: 0,
    averageDeliveryTime: 0,
    onTimeDeliveryRate: 0,
    ordersThisMonth: 0,
    revenueThisMonth: 0,
  })

  useEffect(() => {
    const savedOrders = localStorage.getItem('euconx_orders')
    const savedCustomers = localStorage.getItem('euconx_customers')
    const savedLogistics = localStorage.getItem('euconx_logistics')
    const savedShipments = localStorage.getItem('euconx_shipments')
    const savedUser = localStorage.getItem('euconx_user')

    if (savedOrders) setOrders(JSON.parse(savedOrders))
    else setOrders(mockOrders)

    if (savedCustomers) setCustomers(JSON.parse(savedCustomers))
    else setCustomers(mockCustomers)

    if (savedLogistics) setLogistics(JSON.parse(savedLogistics))
    else setLogistics(mockLogistics)

    if (savedShipments) setShipments(JSON.parse(savedShipments))
    else setShipments(mockShipments)

    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  useEffect(() => {
    localStorage.setItem('euconx_orders', JSON.stringify(orders))
    calculateStats()
  }, [orders])

  useEffect(() => {
    localStorage.setItem('euconx_customers', JSON.stringify(customers))
  }, [customers])

  useEffect(() => {
    localStorage.setItem('euconx_logistics', JSON.stringify(logistics))
  }, [logistics])

  useEffect(() => {
    localStorage.setItem('euconx_shipments', JSON.stringify(shipments))
  }, [shipments])

  const calculateStats = () => {
    const now = new Date()
    const thisMonth = now.getMonth()
    const thisYear = now.getFullYear()

    const totalOrders = orders.length
    const activeOrders = orders.filter(
      (o) => !['delivered', 'cancelled'].includes(o.status)
    ).length
    const completedOrders = orders.filter((o) => o.status === 'delivered').length
    const totalRevenue = orders
      .filter((o) => o.status === 'delivered')
      .reduce((sum, o) => sum + o.totalValue, 0)

    const ordersThisMonth = orders.filter((o) => {
      const orderDate = new Date(o.orderDate)
      return orderDate.getMonth() === thisMonth && orderDate.getFullYear() === thisYear
    }).length

    const revenueThisMonth = orders
      .filter((o) => {
        const orderDate = new Date(o.orderDate)
        return (
          o.status === 'delivered' &&
          orderDate.getMonth() === thisMonth &&
          orderDate.getFullYear() === thisYear
        )
      })
      .reduce((sum, o) => sum + o.totalValue, 0)

    const deliveredOrders = orders.filter((o) => o.status === 'delivered' && o.actualDeliveryDate)
    const totalDeliveryTime = deliveredOrders.reduce((sum, o) => {
      const orderDate = new Date(o.orderDate).getTime()
      const deliveryDate = new Date(o.actualDeliveryDate!).getTime()
      return sum + (deliveryDate - orderDate) / (1000 * 60 * 60 * 24)
    }, 0)
    const averageDeliveryTime = deliveredOrders.length > 0 ? totalDeliveryTime / deliveredOrders.length : 0

    const onTimeDeliveries = deliveredOrders.filter((o) => {
      const estimated = new Date(o.estimatedDeliveryDate).getTime()
      const actual = new Date(o.actualDeliveryDate!).getTime()
      return actual <= estimated
    }).length
    const onTimeDeliveryRate = deliveredOrders.length > 0 ? (onTimeDeliveries / deliveredOrders.length) * 100 : 0

    setStats({
      totalOrders,
      activeOrders,
      completedOrders,
      totalRevenue,
      averageDeliveryTime,
      onTimeDeliveryRate,
      ordersThisMonth,
      revenueThisMonth,
    })
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    const foundUser = mockUsers.find((u) => u.email === email)
    if (foundUser && password === 'demo123') {
      setUser(foundUser)
      localStorage.setItem('euconx_user', JSON.stringify(foundUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('euconx_user')
  }

  const addOrder = (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setOrders([...orders, newOrder])
  }

  const updateOrder = (id: string, updates: Partial<Order>) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, ...updates, updatedAt: new Date().toISOString() } : order
      )
    )
  }

  const deleteOrder = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id))
  }

  const addLogisticsUpdate = (update: Omit<LogisticsTracking, 'id'>) => {
    const newUpdate: LogisticsTracking = {
      ...update,
      id: Date.now().toString(),
    }
    setLogistics([...logistics, newUpdate])

    updateOrder(update.orderId, { status: update.status })
  }

  const getOrderById = (id: string) => orders.find((order) => order.id === id)

  const getLogisticsByOrderId = (orderId: string) =>
    logistics.filter((log) => log.orderId === orderId).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const getShipmentByOrderId = (orderId: string) => shipments.find((ship) => ship.orderId === orderId)

  return (
    <OpsContext.Provider
      value={{
        user,
        orders,
        customers,
        logistics,
        shipments,
        stats,
        login,
        logout,
        addOrder,
        updateOrder,
        deleteOrder,
        addLogisticsUpdate,
        getOrderById,
        getLogisticsByOrderId,
        getShipmentByOrderId,
      }}
    >
      {children}
    </OpsContext.Provider>
  )
}

export function useOps() {
  const context = useContext(OpsContext)
  if (context === undefined) {
    throw new Error('useOps must be used within an OpsProvider')
  }
  return context
}
