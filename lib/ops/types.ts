export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'in_production'
  | 'ready_to_ship'
  | 'in_transit'
  | 'customs'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'

export type UserRole = 'admin' | 'manager' | 'viewer'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  createdAt: string
}

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  customerName: string
  customerEmail: string
  status: OrderStatus
  items: OrderItem[]
  totalValue: number
  currency: string
  orderDate: string
  estimatedDeliveryDate: string
  actualDeliveryDate?: string
  notes: string
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productName: string
  productCode: string
  quantity: number
  unit: string
  unitPrice: number
  totalPrice: number
  manufacturer: string
  specifications: string
}

export interface LogisticsTracking {
  id: string
  orderId: string
  status: OrderStatus
  location: string
  timestamp: string
  description: string
  coordinates?: {
    lat: number
    lng: number
  }
  attachments?: string[]
  updatedBy: string
}

export interface Shipment {
  id: string
  orderId: string
  trackingNumber: string
  carrier: string
  departureLocation: string
  arrivalLocation: string
  departureDate: string
  estimatedArrivalDate: string
  actualArrivalDate?: string
  currentLocation: string
  status: string
  containerNumber?: string
  vehicleNumber?: string
  driverName?: string
  driverPhone?: string
}

export interface Document {
  id: string
  orderId: string
  name: string
  type: 'invoice' | 'packing_list' | 'bill_of_lading' | 'certificate' | 'customs' | 'other'
  url: string
  uploadedBy: string
  uploadedAt: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company: string
  address: string
  city: string
  country: string
  taxId: string
  createdAt: string
}

export interface DashboardStats {
  totalOrders: number
  activeOrders: number
  completedOrders: number
  totalRevenue: number
  averageDeliveryTime: number
  onTimeDeliveryRate: number
  ordersThisMonth: number
  revenueThisMonth: number
}
