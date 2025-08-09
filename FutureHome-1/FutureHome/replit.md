# Aura - Next Generation Business Suite

## Overview

Aura is a comprehensive business suite application inspired by Zoho's ecosystem, designed to provide 80+ integrated applications across multiple business categories. The platform features a modern, futuristic design with a dark theme and neon accents, targeting enterprise users who need a unified platform for managing various business operations from sales and marketing to finance and project management.

The application is built as a full-stack web application with a React frontend and Express backend, featuring a clean architecture that separates concerns between client, server, and shared components. The system is designed to showcase different business application categories, individual apps within those categories, and curated business suites.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with pages for home, category views, and individual app details
- **State Management**: TanStack Query (React Query) for server state management, caching, and data synchronization
- **Styling**: Tailwind CSS with custom design system featuring dark theme, neon accents, and glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript providing RESTful API endpoints
- **Data Layer**: In-memory storage implementation (MemStorage) simulating database operations for categories, apps, and suites
- **API Design**: RESTful endpoints for CRUD operations on categories (`/api/categories`), apps (`/api/apps`), and suites (`/api/suites`) with search and filtering capabilities
- **Development**: Hot module replacement and development middleware integration for seamless development experience

### Database Schema Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Tables**: 
  - Categories: Business application categories with metadata (icons, colors, app counts)
  - Apps: Individual applications with features, shortcuts, and category associations
  - Suites: Curated collections of related applications
- **Schema Management**: Drizzle Kit for migrations and schema management with environment-based configuration

### Component Architecture
- **Layout System**: Responsive layout with fixed navigation header and main content area
- **Reusable Components**: Modular card components for apps, categories, and suites with consistent styling
- **Search Functionality**: Real-time search with debouncing and query-based filtering across all applications
- **Responsive Design**: Mobile-first approach with adaptive layouts for different screen sizes

### Development Workflow
- **TypeScript**: Strict type checking across frontend, backend, and shared modules
- **Code Organization**: Monorepo structure with shared schema and types between client and server
- **Path Aliases**: Configured import aliases for clean, maintainable import statements
- **Development Scripts**: Integrated scripts for development, building, and database management

## External Dependencies

### UI and Styling Libraries
- **Radix UI**: Comprehensive suite of accessible, unstyled UI primitives for building the interface
- **Tailwind CSS**: Utility-first CSS framework with custom configuration for dark theme and design system
- **Lucide React**: Modern icon library providing consistent iconography throughout the application
- **Font Awesome**: Icon library for business application category representations

### Data Management
- **TanStack Query**: Server state management with caching, background updates, and optimistic updates
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support and schema validation
- **Zod**: Runtime type validation integrated with Drizzle for schema validation

### Development and Build Tools
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **Wouter**: Lightweight routing library for client-side navigation
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Database Infrastructure
- **Neon Database**: Serverless PostgreSQL database service for production data storage
- **Connection Management**: Environment-based database connection configuration with fallback handling

### Replit Integration
- **Development Environment**: Configured for Replit development with runtime error handling and development banners
- **Cartographer Plugin**: Development-time navigation and debugging assistance within Replit environment