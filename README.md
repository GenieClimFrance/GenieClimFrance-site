# Genie Clim France - Energy Renovation Website

A modern, responsive website for Genie Clim France, a leading energy renovation company specializing in eco-friendly heating and insulation solutions across France.

## 🌟 Overview

Genie Clim France is a comprehensive web platform that helps homeowners discover and access energy renovation services. The website features an eligibility test, detailed service information, government aid calculators, and a complete contact system for personalized energy renovation programs.

## ✨ Key Features

### 🏠 Core Services

- **Heat Pumps (PAC)** - Air/Water and Air/Air systems for efficient heating and cooling
- **Thermodynamic Water Heaters** - Eco-friendly hot water solutions with up to 50% energy savings
- **Insulation Services** - Complete insulation solutions (ITE, attic, basement floors)
- **Mechanical Ventilation (VMC)** - Controlled ventilation systems for optimal air quality
- **Window & Door Renovation** - Energy-efficient PVC windows and doors

### 🎯 Interactive Features

- **Eligibility Test** - Interactive form to determine qualification for energy renovation programs
- **Government Aid Calculator** - Detailed breakdown of available financial assistance (MaPrimeRénov', CEE, etc.)
- **Service Configurator** - Personalized renovation program builder
- **Contact Forms** - Multiple contact points with SendGrid integration
- **Video Gallery** - Educational content about energy renovation

### 📱 User Experience

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Accessibility** - WCAG compliant with proper semantic HTML
- **Performance Optimized** - Fast loading with Next.js optimization features

## 🛠️ Technology Stack

### Frontend

- **Next.js 15.2.1** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Icons** - Comprehensive icon library
- **Swiper.js** - Modern slider/carousel component

### Backend & Services

- **Next.js API Routes** - Server-side API endpoints
- **SendGrid** - Email service integration
- **Vercel Analytics** - Performance and user analytics

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development server

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/genieclimfrance.git
   cd genieclimfrance
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
genieclimfrance/
├── public/                    # Static assets
│   ├── icon/                 # Service and UI icons
│   ├── icon-aides/          # Government aid icons
│   └── video-section/       # Video thumbnails
├── src/
│   └── app/
│       ├── aides/           # Government aid information pages
│       ├── api/             # API routes (SendGrid integration)
│       ├── components/      # Reusable React components
│       │   ├── Footer/      # Footer components
│       │   └── home/        # Homepage specific components
│       ├── contact/         # Contact page
│       ├── data/            # Static data (services, team, slides)
│       ├── eligibility/     # Eligibility test page
│       ├── fonts/           # Custom fonts (EmOne, Kollektif)
│       ├── mentions-legales/ # Legal notices
│       ├── notre-mission/   # About us page
│       ├── services/        # Dynamic service pages
│       └── Utils/           # Utility functions
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Typography

- **EmOne** - Primary brand font (headings, CTAs)
- **Kollektif** - Secondary font (body text, descriptions)

### Color Palette

- **Primary** - Brand green for CTAs and highlights
- **Secondary** - Complementary colors for sections
- **Tertiary** - Accent colors for special elements

### Components

- Responsive navigation with mobile menu
- Interactive sliders and carousels
- Form components with validation
- Progress bars and accordions
- Modal dialogs and overlays

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js application:

1. **Connect to Vercel**

   - Import your repository to [Vercel](https://vercel.com)
   - Configure environment variables
   - Deploy automatically

2. **Environment Variables**
   Set up the following in your Vercel dashboard:
   - `SENDGRID_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

### Other Platforms

The application can also be deployed on:

- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack deployment
- **Railway** - Container-based deployment

## 📧 Email Integration

The contact forms use SendGrid for reliable email delivery:

- **Contact Form** - General inquiries
- **Eligibility Form** - Test results and follow-up
- **Service Requests** - Specific service inquiries

Configure your SendGrid API key in the environment variables to enable email functionality.

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run type-check   # TypeScript type checking
npm run format       # Code formatting
```

## 🤝 Contributing

We welcome contributions to improve the Genie Clim France website:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful variable and function names in English
- Maintain responsive design principles
- Test across different devices and browsers
- Follow the existing code style and conventions

## 📄 License

This project is proprietary software owned by Genie Clim France. All rights reserved.

## 📞 Support

For technical support or business inquiries:

- **Website**: [genieclimfrance.fr](https://genieclimfrance.fr)
- **Email**: contact@genieclimfrance.fr
- **Phone**: 07 69 76 26 36

## 🏢 About Genie Clim France

Genie Clim France is a leading energy renovation company based in Bordeaux, serving clients across France. We specialize in eco-friendly heating solutions, insulation services, and comprehensive energy renovation programs that help homeowners reduce their carbon footprint and energy costs.

Our mission is to make energy renovation accessible and affordable for everyone, supporting France's transition to sustainable energy consumption.

---

**Built with ❤️ by the Genie Clim France team**
