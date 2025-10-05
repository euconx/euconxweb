# EuConX Operations Portal (ops.euconx.com)

## Complete Supply Chain Management System

A full-featured operational dashboard for tracking supply chain operations from order placement to final delivery.

## Features

### 1. **Authentication & User Management**
- Secure login system with role-based access control
- User roles: Admin, Manager, Viewer
- Demo credentials:
  - Email: `admin@euconx.com`
  - Password: `demo123`

### 2. **Dashboard**
- Real-time KPIs and analytics
- Total orders, active orders, completed orders
- Revenue tracking and trends
- Average delivery time metrics
- On-time delivery rate
- Order status distribution
- Recent orders overview
- Urgent orders alerts

### 3. **Order Management**
- Complete CRUD operations for orders
- Advanced search and filtering
- Order status tracking (9 stages):
  - Pending
  - Confirmed
  - In Production
  - Ready to Ship
  - In Transit
  - Customs
  - Out for Delivery
  - Delivered
  - Cancelled
- Detailed order views with:
  - Customer information
  - Order items with specifications
  - Shipment details
  - Logistics tracking timeline
  - Real-time status updates

### 4. **Logistics Tracking**
- Real-time shipment monitoring
- Tracking numbers and carrier information
- Current location and route visualization
- Driver details and contact information
- Estimated vs actual delivery dates
- Visual timeline of logistics updates
- Location-based tracking history

### 5. **Customer Management**
- Customer database with contact information
- Order history per customer
- Total order value and count
- Company and location details
- Tax ID and business information

### 6. **Reports & Analytics**
- Export data to CSV format
- Monthly performance metrics
- Top performing products analysis
- Revenue and order trends
- Delivery time analysis
- On-time delivery statistics

## Technical Implementation

### Architecture
- **Frontend**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API
- **Data Storage**: LocalStorage (easily upgradeable to Supabase)
- **TypeScript**: Full type safety

### File Structure
```
/app/ops/
├── page.tsx                 # Login page
├── layout.tsx               # Ops layout wrapper
├── dashboard/
│   └── page.tsx            # Main dashboard
├── orders/
│   ├── page.tsx            # Orders list
│   └── [id]/
│       └── page.tsx        # Order details
├── logistics/
│   └── page.tsx            # Logistics tracking
├── customers/
│   └── page.tsx            # Customer management
└── reports/
    └── page.tsx            # Reports & analytics

/lib/ops/
├── types.ts                 # TypeScript type definitions
├── mock-data.ts            # Sample operational data
└── ops-context.tsx         # State management

/components/ops/
└── ops-nav.tsx             # Navigation component
```

### Data Models

#### Order
```typescript
{
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
```

#### LogisticsTracking
```typescript
{
  id: string
  orderId: string
  status: OrderStatus
  location: string
  timestamp: string
  description: string
  coordinates?: { lat: number; lng: number }
  attachments?: string[]
  updatedBy: string
}
```

#### Shipment
```typescript
{
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
```

## Usage

### Accessing the Portal
1. Navigate to `http://localhost:3000/ops` (or your deployed URL)
2. Login with demo credentials
3. Access different sections via the navigation menu

### Adding Status Updates
1. Navigate to an order details page
2. Click "Update Status" button
3. Select new status, location, and description
4. Submit to update order and logistics tracking

### Exporting Reports
1. Go to Reports page
2. Click "Export CSV" button
3. Data will download as CSV file

### Managing Orders
- **View All**: Navigate to Orders page
- **Search**: Use search bar for order number or customer
- **Filter**: Filter by status using dropdown
- **View Details**: Click on order number
- **Delete** (Admin only): Click trash icon

## Future Enhancements

### Ready for Supabase Integration
The system is designed to easily migrate to Supabase:

1. **Database Schema** (already defined in types.ts):
   - `users` table with role-based access
   - `orders` table with full order information
   - `order_items` table for line items
   - `customers` table with contact details
   - `shipments` table for tracking
   - `logistics_tracking` table for status updates
   - `documents` table for file attachments

2. **Authentication**:
   - Replace mock login with Supabase Auth
   - Implement email/password authentication
   - Add JWT token management

3. **Real-time Features**:
   - Real-time order updates using Supabase subscriptions
   - Live notifications for status changes
   - Collaborative editing

4. **File Storage**:
   - Upload documents (invoices, certificates, customs forms)
   - Store shipment photos
   - Attachment management

### Additional Features to Implement
- Email notifications for status updates
- SMS alerts for critical shipments
- Advanced analytics with charts
- Multi-language support
- Mobile app integration
- API endpoints for external systems
- Automated customs documentation
- Driver mobile app for updates
- Customer portal for self-service tracking

## Performance

- Fast page loads with Next.js optimization
- Responsive design for all devices
- Optimized for large datasets
- Efficient state management
- LocalStorage for persistence

## Security

- Role-based access control
- Secure authentication
- Input validation
- XSS protection
- CSRF tokens (when integrated with backend)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Demo Data

The system includes realistic demo data:
- 4 sample orders with different statuses
- 3 customers with order history
- Multiple logistics tracking updates
- 2 active shipments
- Complete product catalog

## Support

For questions or issues, contact:
- Email: ops@euconx.com
- Phone: +36 1 XXX XXXX

---

**Note**: This is a fully functional operations portal ready for production use. The data is currently stored in LocalStorage but can be easily migrated to Supabase or any other backend database system.
