<!-- @format -->

# Gavellia Buyer Dashboard

A modern, feature-rich buyer dashboard for the Gavellia auction platform. Built with Next.js 14, TypeScript, and Tailwind CSS, this application provides a comprehensive interface for buyers to manage their bidding activities, purchases, messages, and profile settings.

## 🚀 Features

### 📊 Overview Dashboard

- Live auction countdown and upcoming auctions
- Recent activity feed with real-time updates
- Statistics cards for active bids and purchases
- Product grid with auction items

### 🔨 My Bids

- Active, Won, and Lost bids tracking
- Dynamic tab counters based on actual data
- Pagination with 5 items per page
- Status indicators (Winning/Outbid)
- Real-time bid updates

### 🛍️ Purchases

- Multi-status tracking (To Pay, To Ship, In Transit, Completed)
- Order management and history
- Purchase timeline tracking
- Detailed item information

### 💬 Messages

- Inbox with unread message indicators
- Search and filter functionality
- Sort by date and read status
- Reply and message management
- Pagination for large message lists

### 📋 Watchlist

- Save items for later
- Quick access to watched auctions
- Remove items from watchlist

### ⚙️ Profile & Settings

- **Business Information**: Update business details and VAT number
- **Bank Payout Details**: Manage connected bank accounts
- **Notifications Settings**: Configure email and push notifications
- Verification status display

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: React Hooks (useState, usePathname)

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Rahul-Mallik-CSE/Gavellia_Buyer_Dashboard.git
cd gavellia-buyer-dashboard
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
gavellia-buyer-dashboard/
├── src/
│   ├── app/
│   │   ├── messages/           # Messages page
│   │   ├── my-bids/           # My Bids page
│   │   ├── profile-settings/  # Profile & Settings page
│   │   ├── purchases/         # Purchases page
│   │   ├── watch-list/        # Watchlist page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage (Overview)
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── CommonComponents/
│   │   │   └── NavBar.tsx     # Navigation bar
│   │   ├── MessageComponents/
│   │   │   └── MessageTable.tsx
│   │   ├── MyBidsComponents/
│   │   │   ├── ItemsCard.tsx
│   │   │   └── ItemsTable.tsx
│   │   ├── OverViewComponents/
│   │   │   ├── Activity.tsx
│   │   │   ├── LiveAuction.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── ProfileComponents/
│   │   │   ├── BankInfo.tsx
│   │   │   ├── BusinessInfo.tsx
│   │   │   └── Notifications.tsx
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/
│   │   └── use-mobile.ts
│   └── lib/
│       └── utils.ts
├── public/                    # Static assets
├── components.json            # shadcn/ui config
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## 🎨 UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for accessible and customizable components:

- Avatar
- Button
- Input
- Textarea
- Select
- Switch
- Tabs
- Pagination
- Dropdown Menu
- Sidebar
- Skeleton
- Tooltip

## 🔑 Key Features Implementation

### Dynamic Navigation

- Active page highlighting
- Responsive mobile navigation
- User profile display with balance

### Pagination System

- Reusable pagination component
- Dynamic page calculation
- 5 items per page default
- Smooth page transitions

### Real-time Filtering

- Search functionality across messages
- Sort by multiple criteria
- Unread message prioritization
- Dynamic count updates

### Status Management

- Bid status tracking (Active/Won/Lost)
- Purchase status workflow
- Visual status indicators
- Color-coded badges

## 🚧 Development

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `NavBar.tsx`

### Creating Components

1. Add component in appropriate folder under `src/components/`
2. Use TypeScript interfaces for props
3. Follow existing naming conventions

### Styling Guidelines

- Use Tailwind CSS utility classes
- Maintain consistent spacing (4px increments)
- Follow mobile-first responsive design
- Use shadcn/ui components for consistency

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔮 Future Enhancements

- [ ] Real-time WebSocket integration for live auctions
- [ ] Advanced search and filtering
- [ ] Email notifications
- [ ] Payment integration
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Export data functionality
- [ ] Advanced analytics dashboard

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Rahul Mallik**

- GitHub: [@Rahul-Mallik-CSE](https://github.com/Rahul-Mallik-CSE)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- Vercel for hosting and deployment platform

---

Built with ❤️ using Next.js and TypeScript
