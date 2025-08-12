import {
  Home,
  Settings,
  BarChart3,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  CreditCard,
  Package,
  Truck,
  Shield,
  Database,
  Code,
  Zap,
  Globe,
  Camera,
  Video,
  Headphones,
  Monitor,
  Smartphone,
  Cloud,
  Share2,
  Edit3,
  BookOpen,
  GraduationCap,
  Target,
  PieChart,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Upload,
  Download,
  Lock,
  Key,
  UserCheck,
  Wifi,
  Server,
  HardDrive,
  Layers,
  GitBranch,
  PlayCircle,
  PauseCircle,
  RotateCcw,
  RefreshCw,
  Eye,
  EyeOff,
  MousePointer,
  Palette,
  Brush,
  Image,
  FileImage,
  Music,
  FileMusic,
  Film,
  FileVideo,
  Mic,
  Volume2,
  Clock,
  Timer,
  MapPin,
  Map,
  Navigation,
  Compass,
  Star,
  Heart,
  ThumbsUp,
  MessageCircle,
  Send,
  Inbox,
  Archive,
  Tag,
  Bookmark,
  Flag,
  Bell,
  AlertCircle,
  CheckCircle,
  XCircle,
  Plus,
  Minus,
  X,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Paperclip,
  Scissors,
  Copy,
  Clipboard,
  Save,
  FolderOpen,
  Folder,
  Files,
  FileCheck,
  FilePlus,
  FileX,
  Grid,
  List,
  Table,
  Columns,
  Rows,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Sidebar,
  Layout,
  Maximize2,
  Minimize2,
  Fullscreen,
  Crosshair,
  Move,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  ZoomIn,
  ZoomOut,
  Focus,
  Aperture,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Power,
  PowerOff,
  Plug,
  Unplug,
  Battery,
  BatteryLow,
  Cpu,
  MemoryStick,
  HardDrive as Storage,
  Router,
  Bluetooth,
  Printer,
  Webcam,
  Gamepad2,
  Joystick,
  Keyboard,
  Mouse,
  Tablet,
  Laptop,
  Tv,
  Watch,
  Radio,
  Satellite,
  Bot,
  DollarSign,
  Building,
  Building2,
  Hash,
  Calculator,
  Link2,
  User,
  Wallet,
  Scale
} from "lucide-react";

// App-specific navigation structure based on Zoho.com
export const getAppNavigation = (appName: string) => {
  const navigationMap: Record<string, any> = {
    "CRM": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Dashboard", "Today's Activities", "Recent Items", "My CRM Home", "Home Page Designer"]
        },
        {
          title: "Leads",
          icon: <Users className="w-4 h-4" />,
          items: ["All Leads", "Today's Leads", "Recently Created Leads", "Recently Modified Leads", "Overdue Leads", "My Leads", "Converted Leads", "Unqualified Leads"]
        },
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["All Contacts", "Today's Contacts", "Recently Created Contacts", "Recently Modified Contacts", "My Contacts", "Mailing Labels", "Untouched Contacts"]
        },
        {
          title: "Accounts",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Accounts", "Today's Accounts", "Recently Created Accounts", "Recently Modified Accounts", "My Accounts", "Untouched Accounts"]
        },
        {
          title: "Deals",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Deals", "Today's Deals", "Recently Created Deals", "Recently Modified Deals", "My Deals", "Closing This Month", "Overdue Deals", "Won Deals", "Lost Deals"]
        },
        {
          title: "Tasks",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Tasks", "Today's Tasks", "Yesterday's Tasks", "This Week's Tasks", "Overdue Tasks", "Recently Created Tasks", "Recently Modified Tasks", "My Tasks", "Recurring Tasks"]
        },
        {
          title: "Events",
          icon: <Calendar className="w-4 h-4" />,
          items: ["All Events", "Today's Events", "This Week's Events", "Recently Created Events", "Recently Modified Events", "My Events", "Recurring Events"]
        },
        {
          title: "Calls",
          icon: <Phone className="w-4 h-4" />,
          items: ["All Calls", "Today's Calls", "Overdue Calls", "Recently Created Calls", "Recently Modified Calls", "My Calls", "Recurring Calls"]
        },
        {
          title: "Campaigns",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["All Campaigns", "Recently Created Campaigns", "Recently Modified Campaigns", "My Campaigns", "Active Campaigns", "Inactive Campaigns", "Archived Campaigns"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: [
            "Folders",
            "All Reports",
            "My Reports",
            "Favorites",
            "Recently Viewed",
            "Scheduled Reports",
            "Recently Deleted",
            "Account and Contact Reports",
            "Deal Reports",
            "Lead Reports",
            "Campaign Reports",
            "Case and Solution Reports",
            "Product Reports",
            "Vendor Reports",
            "Quote Reports",
            "Sales Order Reports",
            "Purchase Order Reports",
            "Invoice Reports",
            "Sales Metrics Reports",
            "Email Reports",
            "Meeting Reports",
            "Task Reports",
            "Call Reports",
            "Activity Reports",
            "Forecast Reports",
            "Territory Reports",
            "User Reports",
            "Custom Reports"
          ]
        },
        {
          title: "Dashboards",
          icon: <Monitor className="w-4 h-4" />,
          items: ["All Dashboards", "Sales Dashboard", "Marketing Dashboard", "CEO Dashboard", "Sales Manager Dashboard", "My Dashboard"]
        },
        {
          title: "Forecasts",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["Forecasts", "Forecast Settings", "Territory Forecasts", "User Forecasts"]
        },
        {
          title: "Products",
          icon: <Package className="w-4 h-4" />,
          items: ["All Products", "Recently Created Products", "Recently Modified Products", "My Products", "Active Products", "Inactive Products"]
        },
        {
          title: "Price Books",
          icon: <DollarSign className="w-4 h-4" />,
          items: ["All Price Books", "Recently Created Price Books", "Recently Modified Price Books", "My Price Books", "Active Price Books"]
        },
        {
          title: "Quotes",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Quotes", "Recently Created Quotes", "Recently Modified Quotes", "My Quotes", "Accepted Quotes", "Declined Quotes", "Draft Quotes"]
        },
        {
          title: "Sales Orders",
          icon: <Truck className="w-4 h-4" />,
          items: ["All Sales Orders", "Recently Created Sales Orders", "Recently Modified Sales Orders", "My Sales Orders", "Confirmed Sales Orders", "Delivered Sales Orders"]
        },
        {
          title: "Purchase Orders",
          icon: <Truck className="w-4 h-4" />,
          items: ["All Purchase Orders", "Recently Created Purchase Orders", "Recently Modified Purchase Orders", "My Purchase Orders", "Delivered Purchase Orders"]
        },
        {
          title: "Invoices",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Invoices", "Recently Created Invoices", "Recently Modified Invoices", "My Invoices", "Sent Invoices", "Paid Invoices", "Overdue Invoices"]
        },
        {
          title: "Cases",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["All Cases", "Today's Cases", "Recently Created Cases", "Recently Modified Cases", "My Cases", "Open Cases", "On Hold Cases", "Escalated Cases", "Closed Cases"]
        },
        {
          title: "Solutions",
          icon: <BookOpen className="w-4 h-4" />,
          items: ["All Solutions", "Recently Created Solutions", "Recently Modified Solutions", "My Solutions", "Published Solutions", "Draft Solutions"]
        },
        {
          title: "Vendors",
          icon: <Users className="w-4 h-4" />,
          items: ["All Vendors", "Recently Created Vendors", "Recently Modified Vendors", "My Vendors", "Active Vendors", "Inactive Vendors"]
        },
        {
          title: "Documents",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Documents", "Recently Created Documents", "Recently Modified Documents", "My Documents", "Folders"]
        },
        {
          title: "Feeds",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["What I Follow", "Company Updates", "My Posts", "All Posts", "Recent Activities"]
        },
        {
          title: "Recycle Bin",
          icon: <Archive className="w-4 h-4" />,
          items: ["Deleted Leads", "Deleted Contacts", "Deleted Accounts", "Deleted Deals", "Deleted Activities", "Deleted Records"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "EZ-Report Builder",
            "Guided Onboarding Tour",
            "Custom Field Wizard",
            "Simplified \"Lite\" Mode",
            "Voice-to-Text Note Taking"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Universal API Connector",
            "Automated Data Cleanser",
            "Offline Mobile Sync",
            "Compliance Center (GDPR/CCPA)",
            "Workflow Replicator"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Team Usage Dashboard",
            "Integration Health Check",
            "Data Decay Alerts",
            "App Marketplace Connector",
            "ROI Calculator",
            "Priority Support Channel",
            "Adoption Rate Forecaster",
            "Budget-Friendly Plan Advisor",
            "One-Click Security Audit",
            "24/7 Live Chat Support"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI Deal-Closing Predictor",
            "Automated Competitor Tracker",
            "Sentiment Analysis for Client Emails",
            "\"Best Time to Call\" Suggester",
            "Gamified Sales Leaderboard",
            "Relationship Health Score",
            "Automated Lead Enrichment",
            "\"Forgotten Leads\" Nurture Sequence",
            "AI-Powered Sales Script Generator",
            "Natural Language Analytics",
            "Predictive Lead Scoring",
            "AI-Powered Email Template Generator",
            "Automated Meeting Scheduler",
            "Customer Churn Prediction",
            "AI-driven Sales Forecasting",
            "Automated Data Entry from Emails",
            "Intelligent Document Scanner",
            "AI-powered Competitor Analysis",
            "Automated Task Prioritization",
            "AI-based Customer Segmentation"
          ]
        }
      ]
    },
    "Bigin": {
      sections: [
        {
          title: "Pipelines",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["Team Pipelines", "Sub-Pipelines", "Sales Pipeline", "Customer Support Pipelines", "Stage Automation", "Collapsible Stages"]
        },
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Data", "Prospect Management", "Contact Details", "Associated Deals", "Lead Conversion", "Custom Contact Fields", "Activities History"]
        },
        {
          title: "Companies",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Business Partners", "Company Profiles", "Associated Contacts", "Business Relationships", "Company Pipelines"]
        },
        {
          title: "Products",
          icon: <Package className="w-4 h-4" />,
          items: ["Product Catalog", "Services Management", "Product Lifecycle", "Pricing & Inventory", "Product Records", "Custom Product Fields"]
        },
        {
          title: "Activities",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Tasks & Events", "Calls Scheduling", "Calendar Integration", "Follow-up Reminders", "Activity Notifications", "Call Logging", "Meeting Scheduling"]
        },
        {
          title: "Dashboards",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Goal Setting", "Goal Tracking", "Business Insights", "Performance Metrics", "Custom Reporting", "Data Visualization", "Progress Monitoring"]
        },
        {
          title: "Messages",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Lead Capture", "Customer Communication", "Chat History", "Multi-channel Messaging", "WhatsApp Integration", "Communication Logs"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Email Workflows", "Stage Automation", "Booking Pages", "LeadChain Integration", "Marketing Automation", "Workflow Builder"]
        },
        {
          title: "Integrations",
          icon: <Link2 className="w-4 h-4" />,
          items: ["Zoho SalesIQ", "Instagram Integration", "Facebook Integration", "LinkedIn Integration", "TikTok Integration", "Enhanced Forms"]
        },
        {
          title: "Mobile Features",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["Business Card Scanner", "Offline Access", "Push Notifications", "Touch ID Security", "Dark Mode", "Calendar View"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Simplified Contact Import",
            "One-Click 'Call' Button",
            "Basic Email Templates",
            "Meeting Scheduler Link",
            "Pipeline Stage Color-Coding"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated Lead Assignment",
            "Telephony Integration",
            "Team Performance Dashboards",
            "Product/Service Management",
            "Custom Workflow Automation"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automated Follow-up Reminders",
            "Visual Drag-and-Drop Pipeline",
            "Unified Contact Timeline",
            "Shareable Booking Links",
            "Business Card Scanner",
            "Simple Performance Dashboards",
            "Offline Mobile Access",
            "Distinct Process Pipelines",
            "Repetitive Task Automation",
            "Key App Integrations"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI 'Next Best Action' Suggester",
            "Predictive Lead Scoring",
            "Email Sentiment Analysis",
            "Automated Data Enrichment",
            "Best Time to Contact AI",
            "AI-Generated Follow-up Emails",
            "Voice-to-Text Note Logging",
            "Pipeline Anomaly Detection",
            "AI Sales Assistant Q&A",
            "Automated Contact Tagging",
            "AI-Powered Deal Insights",
            "Automated Meeting Summaries",
            "Predictive Pipeline Forecasting",
            "Intelligent Task Recommendations",
            "AI-driven Competitor Alerts",
            "Automated Data Deduplication",
            "AI-based Lead Source Analysis",
            "Smart Email Scheduling",
            "AI-powered Sales Playbooks",
            "Automated Voicemail Transcription"
          ]
        }
      ]
    },
    "Books": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Dashboard", "Getting Started", "Announcements", "Recent Updates", "Custom Dashboards"]
        },
        {
          title: "Sales",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Customers", "Invoices", "Sales Orders", "Quotes", "Delivery Challans", "Sales Receipts", "Credit Notes", "Payments Received", "Retainer Invoices"]
        },
        {
          title: "Purchases",
          icon: <Package className="w-4 h-4" />,
          items: ["Vendors", "Bills", "Purchase Orders", "Purchase Receives", "Vendor Credits", "Payments Made", "Expenses"]
        },
        {
          title: "Items",
          icon: <Package className="w-4 h-4" />,
          items: ["Items", "Price Lists", "Inventory Adjustments", "Composite Items", "Item Groups"]
        },
        {
          title: "Banking",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Bank Accounts", "Deposits", "Withdrawals", "Bank Reconciliation", "Rules"]
        },
        {
          title: "Accountant",
          icon: <Calculator className="w-4 h-4" />,
          items: ["Chart of Accounts", "Manual Journals", "Bulk Updates", "Currencies", "Opening Balances"]
        },
        {
          title: "Projects",
          icon: <FileText className="w-4 h-4" />,
          items: ["Projects", "Time Tracking", "Project Expenses"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Financial Reports", "Sales Reports", "Purchase Reports", "Tax Reports", "Inventory Reports", "Account Reports", "Project Reports", "Custom Reports"]
        },
        {
          title: "More",
          icon: <MoreHorizontal className="w-4 h-4" />,
          items: ["Custom Modules", "Retainer Invoices", "Documents"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Organization Profile", "Users & Roles", "General Preferences", "Taxes", "Templates", "Online Payments", "Email Settings", "Import/Export", "Extensions", "Backup"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "One-click invoice aging report",
            "Customizable dashboard widgets",
            "\"Mark as Paid\" in invoice list view",
            "Bulk import for vendor contacts",
            "Toggle for automatic late fees"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-currency cash flow forecasting",
            "Advanced project-based accounting",
            "Automated 1099 e-filing",
            "Direct payroll provider integration",
            "Comprehensive budgeting tool"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Solving poor cash flow visibility",
            "Simplifying multi-state sales tax",
            "Automating bank feed categorization",
            "Streamlining client payment reminders",
            "Managing project profitability",
            "Automating recurring subscription billing",
            "Providing reports for loan applications",
            "Simplifying retail inventory tracking",
            "Ensuring all project hours are billed",
            "Managing vendor bills efficiently"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered fraud detection",
            "Predictive cash flow forecasting",
            "Intelligent invoice data extraction",
            "AI-driven expense categorization",
            "Smart bank reconciliation suggestions",
            "AI financial health score",
            "Automated compliance audit trails",
            "AI chart of accounts recommendations",
            "Predictive customer payment behavior",
            "AI accounting question chatbot",
            "AI-driven expense reduction advice",
            "Automated duplicate record detection",
            "AI-powered sales tax rate suggestions",
            "Natural language report generation",
            "AI inventory reorder point suggestions",
            "Automated vendor risk assessment",
            "Predictive revenue forecasting",
            "AI-powered invoice-to-payment matching",
            "Smart alerts for spending anomalies",
            "AI-generated financial summaries"
          ]
        }
      ]
    },
    "Campaigns": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Campaign Analytics", "Performance Overview", "Customized Dashboard", "Recent Activity"]
        },
        {
          title: "Campaigns",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Email Campaigns", "SMS Campaigns", "A/B Testing", "Event Platform Integration", "Send Immediately", "Schedule Campaigns", "Batch Sending"]
        },
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["List Management", "Dynamic Segments", "Exclusion Lists", "Zoho CRM Sync", "Custom Fields", "Signup Forms", "Permission-based Marketing"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Drip Campaigns", "Workflow Builder", "Lead Scoring", "Triggered Actions", "Behavior-based Sequences"]
        },
        {
          title: "Templates",
          icon: <Palette className="w-4 h-4" />,
          items: ["Mobile-responsive Templates", "Custom HTML", "Drag-and-drop Builder", "Image Editing", "Merge Tags", "Template Library"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Real-time Analytics", "A/B Test Results", "Litmus Integration", "Campaign Performance", "Version History"]
        },
        {
          title: "Social Integration",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Facebook Promotion", "Twitter Integration", "LinkedIn Sharing", "Social Media Analytics"]
        },
        {
          title: "Integrations",
          icon: <Link2 className="w-4 h-4" />,
          items: ["Zoho Ecosystem", "WooCommerce", "Shopify", "Zapier Integration", "50+ App Integrations"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Dashboard Customization", "Sender Authentication", "Data Management", "Team Collaboration", "Template Management"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Emoji support in subject lines",
            "One-click \"resend to unopens\"",
            "A/B testing for sender name",
            "Pre-built holiday templates",
            "Dark mode for campaign editor"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Integrated SMS marketing",
            "Advanced visual workflow builder",
            "Predictive sending optimization",
            "Built-in landing page creator",
            "Native e-commerce integrations"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Improving email deliverability",
            "Advanced contact list segmentation",
            "Automating welcome email series",
            "Measuring campaign ROI",
            "Creating mobile-responsive emails",
            "Managing list growth & unsubscribes",
            "Personalizing content at scale",
            "Re-engaging inactive subscribers",
            "Ensuring GDPR/CAN-SPAM compliance",
            "A/B testing to improve engagement"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered subject line generator",
            "AI-driven content personalization",
            "Predictive campaign success scoring",
            "Smart behavioral segmentation",
            "AI-powered send time optimization",
            "Automated A/B test winner selection",
            "AI-based template recommendations",
            "Predictive subscriber churn analysis",
            "AI-powered newsletter content summarization",
            "Automated image selection for emails",
            "Sentiment analysis of email replies",
            "AI-generated email copy variations",
            "Predictive lead scoring integration",
            "AI-driven follow-up campaign recommendations",
            "Automated list hygiene suggestions",
            "AI-powered pre-send spam score checker",
            "Natural language campaign setup",
            "AI-based CTA text suggestions",
            "Predictive content type performance",
            "Automated reports with actionable insights"
          ]
        }
      ]
    },
    "Desk": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["The HQ", "My Dashboard", "Team Dashboard", "Getting Started", "Recent Activity"]
        },
        {
          title: "Tickets",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["My Tickets", "All Tickets", "Ticket Views", "Blueprints", "Assignment Rules", "Escalation Rules", "Time Tracking"]
        },
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["Contacts", "Accounts", "Contact Views", "Account Views"]
        },
        {
          title: "Knowledge Base",
          icon: <BookOpen className="w-4 h-4" />,
          items: ["Articles", "Categories", "Community Forums", "Help Center", "ASAP", "Multilingual Support"]
        },
        {
          title: "Channels",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Email Integration", "Live Chat", "Phone Integration", "Social Media", "WhatsApp Business", "Web Forms"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["The HQ Dashboard", "Ticket Status Dashboard", "Agent Performance", "Customer Satisfaction", "Custom Dashboards"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Standard Reports", "Custom Reports", "Scheduled Reports", "Performance Metrics", "Trend Analysis"]
        },
        {
          title: "AI & Automation",
          icon: <Bot className="w-4 h-4" />,
          items: ["Zia AI Assistant", "Sentiment Analysis", "Answer Bot", "Workflows", "Macros", "Custom Functions"]
        },
        {
          title: "Setup",
          icon: <Settings className="w-4 h-4" />,
          items: ["Users & Roles", "Departments", "Products", "Custom Fields", "Layouts", "Email Templates", "Integrations", "Extensions"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Canned responses",
            "Customizable ticket status",
            "Agent collision detection",
            "Merge duplicate tickets",
            "Internal notes on tickets"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-channel support inbox",
            "Advanced workflow automation",
            "Customizable self-service portal",
            "SLA management & reporting",
            "Integrated telephony"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Deflecting tickets with a knowledge base",
            "Ensuring consistent answers",
            "Automating ticket assignment",
            "Managing urgent issues with SLAs",
            "Tracking team performance",
            "Providing 24/7 support with chatbots",
            "Viewing unified customer history",
            "Measuring customer satisfaction",
            "Integrating with CRM & bug trackers",
            "Onboarding new agents quickly"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI assistant for agents (Zia)",
            "Ticket sentiment analysis",
            "AI-powered auto-tagging",
            "Answer Bot for instant responses",
            "Predictive ticket volume forecasting",
            "AI suggestions for new articles",
            "Intelligent ticket summarization",
            "AI identification of trending issues",
            "Automated language translation",
            "AI-powered agent coaching",
            "Smart routing to best-skilled agent",
            "Predictive customer churn risk",
            "AI-generated response suggestions",
            "Voice-to-text call transcription",
            "AI analysis of CSAT scores",
            "Automated spam/threat detection",
            "AI-driven upsell recommendations",
            "Natural language help desk search",
            "AI anomaly detection for SLA breaches",
            "Automated ticket categorization"
          ]
        }
      ]
    },
    "Mail": {
      sections: [
        {
          title: "Compose",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["New Email", "Templates", "Signatures", "Scheduled Send", "Rich Text Editor"]
        },
        {
          title: "Inbox",
          icon: <Inbox className="w-4 h-4" />,
          items: ["All Mail", "Unread", "Important", "Starred", "With Attachments"]
        },
        {
          title: "Drafts",
          icon: <FileText className="w-4 h-4" />,
          items: ["Draft Emails", "Auto-saved Drafts", "Scheduled Emails"]
        },
        {
          title: "Outbox",
          icon: <Send className="w-4 h-4" />,
          items: ["Pending Send", "Scheduled Emails", "Failed Sends"]
        },
        {
          title: "Sent",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Sent Mail", "Delivery Reports", "Read Receipts"]
        },
        {
          title: "Spam",
          icon: <Shield className="w-4 h-4" />,
          items: ["Spam Emails", "Blocked Senders", "Spam Settings"]
        },
        {
          title: "Trash",
          icon: <Archive className="w-4 h-4" />,
          items: ["Deleted Emails", "Empty Trash", "Recover Emails"]
        },
        {
          title: "Folders",
          icon: <Folder className="w-4 h-4" />,
          items: ["Custom Folders", "Shared Folders", "System Folders", "Folder Settings"]
        },
        {
          title: "Tags",
          icon: <Tag className="w-4 h-4" />,
          items: ["Color Tags", "Custom Tags", "Tag Management"]
        },
        {
          title: "Views",
          icon: <Eye className="w-4 h-4" />,
          items: ["Unread View", "Archived View", "Attachment View", "Conversation View"]
        },
        {
          title: "Streams",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Streams", "Group Collaboration", "Stream Settings"]
        },
        {
          title: "Zoho Apps",
          icon: <Grid className="w-4 h-4" />,
          items: ["Calendar", "Contacts", "Tasks", "Notes", "Bookmarks", "Resources", "eArchive"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Undo send",
            "Email templates",
            "Snooze emails",
            "Customizable swipe actions",
            "Out of Office auto-responder"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "End-to-end email encryption",
            "Integrated productivity suite",
            "eDiscovery and email archiving",
            "Team collaboration via Streams",
            "Full offline mode access"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing an overflowing inbox",
            "Remembering to follow up",
            "Scheduling meetings efficiently",
            "Fighting spam and phishing",
            "Collaborating on documents",
            "Finding old emails and attachments",
            "Managing multiple email accounts",
            "Sending large file attachments",
            "Migrating from other providers",
            "Getting a custom domain email"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered email prioritization",
            "Smart reply suggestions",
            "AI-based email summarization",
            "Nudge reminders for follow-ups",
            "AI-driven smart folders",
            "Email sentiment analysis",
            "Natural language email search",
            "Automated task/event extraction",
            "AI grammar and tone checker",
            "Predictive text composition",
            "Self-learning spam filter",
            "Smart notification management",
            "AI-driven contact suggestions",
            "Automated email translation",
            "AI-powered phishing detection",
            "Voice commands for email",
            "AI scheduling assistant",
            "Automated follow-up suggestions",
            "AI insights into email habits",
            "Smart attachment management"
          ]
        }
      ]
    },
    "Projects": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Homepage", "Dashboard Overview", "Recent Activity", "Quick Access Widgets"]
        },
        {
          title: "Projects",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Projects", "Project Templates", "Project Creation", "Active Projects", "Archived Projects"]
        },
        {
          title: "Tasks",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Task Lists", "All Tasks", "My Tasks", "Task Views", "Task Dependencies", "Subtasks"]
        },
        {
          title: "Gantt & Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Milestone Gantt", "Chronology Gantt", "Dependencies Visualization", "Critical Path", "Baseline Comparisons"]
        },
        {
          title: "Time Tracking",
          icon: <Clock className="w-4 h-4" />,
          items: ["Timesheets", "Manual Time Entry", "Timer-based Logging", "Billable Hours", "Time Reports"]
        },
        {
          title: "Milestones",
          icon: <Flag className="w-4 h-4" />,
          items: ["All Milestones", "Create Milestone", "Milestone Tracking", "Project Phases"]
        },
        {
          title: "Issues",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["Bug Tracking", "Issue Management", "Bug-Task Associations", "Issue Reports"]
        },
        {
          title: "Documents",
          icon: <Folder className="w-4 h-4" />,
          items: ["File Management", "WorkDrive Integration", "Document Sharing", "Version Control"]
        },
        {
          title: "Reports",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["Workload Tracking", "Plan vs Actuals", "Resource Utilization", "Project Analytics", "Custom Reports"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Activity Feeds", "Shared Calendars", "Team Chat", "Comments & Mentions"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Task templates",
            "My Tasks view",
            "Simple hour timer",
            "Project status labels",
            "Drag-and-drop task ranking"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Interactive Gantt charts",
            "Advanced resource management",
            "Integrated issue tracking",
            "Project budgeting & financials",
            "Customizable project templates"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Clarifying who is doing what",
            "Preventing budget overruns",
            "Centralizing team communication",
            "Managing scope creep",
            "Preventing team burnout",
            "Tracking billable vs. non-billable hours",
            "Keeping clients informed",
            "Preventing bugs from getting lost",
            "Standardizing project setup",
            "Understanding project profitability"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered project risk prediction",
            "Smart task scheduling",
            "AI-driven task breakdown suggestions",
            "Predictive project completion dates",
            "Automated project status reporting",
            "AI anomaly detection in timesheets",
            "Intelligent bottleneck identification",
            "AI-powered task prioritization",
            "Natural language project queries",
            "Team morale sentiment analysis",
            "AI workflow improvement suggestions",
            "Automated meeting agendas",
            "Predictive budget overrun warnings",
            "AI-based task duration estimation",
            "Smart notifications for at-risk tasks",
            "AI-powered task assignment",
            "Automated issue categorization",
            "AI insights from past projects",
            "Predictive resource forecasting",
            "AI project support chatbot"
          ]
        }
      ]
    },
    "People": {
      sections: [
        {
          title: "Employee",
          icon: <Users className="w-4 h-4" />,
          items: ["Employee Directory", "My Space", "Employee Profiles", "Organization Chart"]
        },
        {
          title: "Attendance",
          icon: <Clock className="w-4 h-4" />,
          items: ["Check In/Out", "Attendance Reports", "Attendance Settings", "Regularization", "Shifts", "Working Hours", "Overtime"]
        },
        {
          title: "Leave",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Apply Leave", "Leave Calendar", "Leave Approvals", "Leave Reports", "Leave Settings", "Leave Types", "Holiday Calendar"]
        },
        {
          title: "Performance",
          icon: <Target className="w-4 h-4" />,
          items: ["Performance Management", "Learning Management", "Compensation Module"]
        },
        {
          title: "Communication",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Announcements", "Feeds", "Files", "Forms"]
        },
        {
          title: "Administration",
          icon: <Settings className="w-4 h-4" />,
          items: ["Settings", "Reports", "Integrations", "Cases"]
        },
        {
          title: "Mobile Features",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["Facial Recognition", "Location Tracking", "Push Notifications", "Offline Capability", "AI Chatbot Zia"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Company directory",
            "Employee self-service portal",
            "Leave request system",
            "Holiday calendar",
            "Company announcements feed"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated employee onboarding",
            "Performance management module",
            "Automated attendance tracking",
            "Comprehensive leave management",
            "Centralized document management"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Digitizing paper-based HR processes",
            "Tracking time and attendance accurately",
            "Managing leave requests and balances",
            "Ensuring fair performance reviews",
            "Keeping employee data secure",
            "Streamlining new hire onboarding",
            "Answering repetitive HR questions",
            "Generating HR reports for management",
            "Tracking company assets",
            "Handling complex shift scheduling"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered resume screening",
            "Predictive employee turnover analysis",
            "AI chatbot for HR queries",
            "Sentiment analysis of employee surveys",
            "AI-driven learning path recommendations",
            "Smart automation of HR workflows",
            "AI-based compensation analysis",
            "Predictive workforce needs forecasting",
            "AI analysis of performance review data",
            "Intelligent attendance anomaly detection",
            "Automated job description generation",
            "AI insights into organizational structure",
            "Personalized employee onboarding",
            "AI suggestions for employee engagement",
            "Smart mentor/mentee matching",
            "Automated HR compliance checks",
            "AI analysis of employee skills gaps",
            "Predictive promotion readiness analysis",
            "AI-generated performance summaries",
            "Voice commands for HR tasks"
          ]
        }
      ]
    },
    "Invoice": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Sales Overview", "Receivables Summary", "Top Projects", "Business Metrics", "Real-time Sync"]
        },
        {
          title: "Invoices",
          icon: <FileText className="w-4 h-4" />,
          items: ["Create Invoice", "All Invoices", "Draft Invoices", "Sent Invoices", "Paid Invoices", "Overdue Invoices", "Batch Operations", "Advanced Search"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["All Customers", "Customer Portal", "Customer Statements", "Credit Limit Management", "Payment Information", "Multi-factor Authentication"]
        },
        {
          title: "Items",
          icon: <Package className="w-4 h-4" />,
          items: ["Product Catalog", "Service Items", "Item Categories", "Import Items", "Import Overwrite"]
        },
        {
          title: "Quotes",
          icon: <FileCheck className="w-4 h-4" />,
          items: ["Create Estimate", "All Quotes", "Professional Quotes", "Quote Templates"]
        },
        {
          title: "Recurring Invoices",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["Automated Billing", "Recurring Templates", "Subscription Management"]
        },
        {
          title: "Credit Notes",
          icon: <FileX className="w-4 h-4" />,
          items: ["Refund Management", "Credit Adjustments", "Credit Note Templates"]
        },
        {
          title: "Expenses",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Track Expenses", "Expense Categories", "Billable Expenses", "Receipt Management"]
        },
        {
          title: "Timesheets",
          icon: <Clock className="w-4 h-4" />,
          items: ["Time Tracking", "Project Billing", "Timesheet Reports"]
        },
        {
          title: "Projects",
          icon: <Folder className="w-4 h-4" />,
          items: ["Project Management", "Revenue Tracking", "Project Reports"]
        },
        {
          title: "Payment Links",
          icon: <Link2 className="w-4 h-4" />,
          items: ["Standalone Payment Collection", "Payment Link Management"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Financial Reports", "Invoice Analytics", "Payment Reports", "Tax Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Organization Profile", "User Management", "Custom Fields", "Templates", "Payment Gateways", "Integrations", "Digital Signatures"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable invoice templates",
            "\"Mark as Sent\" status",
            "Recurring invoice profiles",
            "Simple billable hours timer",
            "Accept online payments"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-currency invoicing",
            "Client payment portal",
            "Automated payment reminders",
            "Advanced sales tax compliance",
            "Integration with accounting software"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Reducing time spent creating invoices",
            "Handling late-paying clients",
            "Creating professional-looking invoices",
            "Tracking paid vs. overdue invoices",
            "Calculating sales tax automatically",
            "Billing clients for expenses",
            "Converting quotes to invoices",
            "Providing clients with payment history",
            "Tracking time for service projects",
            "Managing refunds with credit notes"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI prediction of invoice payment dates",
            "Smart due date suggestions",
            "AI-optimized reminder timing",
            "Automated expense categorization",
            "AI fraud detection for payments",
            "Intelligent data extraction from POs",
            "AI recommendations for early payment discounts",
            "Natural language invoice creation",
            "AI summary of outstanding receivables",
            "Predictive analysis of late payers",
            "AI-assisted dunning management",
            "Smart payment-to-invoice matching",
            "AI-powered cash flow forecasting",
            "Automated 'thank you' notes",
            "AI insights into revenue trends",
            "Intelligent invoice error checking",
            "AI suggestions for item descriptions",
            "Automated real-time currency conversion",
            "AI analysis of client payment patterns",
            "Smart alerts for viewed-but-unpaid invoices"
          ]
        }
      ]
    },
    "SalesInbox": {
      sections: [
        {
          title: "Deals",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Active Deals", "Deal Pipeline", "Deal Communications", "Deal Progress", "Sales Opportunities"]
        },
        {
          title: "Leads",
          icon: <Users className="w-4 h-4" />,
          items: ["Prospective Customers", "Lead Communications", "Lead Conversion", "Follow-up Management"]
        },
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Correspondence", "Contact Timeline", "Interaction History", "Customer Engagement"]
        },
        {
          title: "Not in CRM",
          icon: <User className="w-4 h-4" />,
          items: ["Unknown Contacts", "New Prospects", "External Communications", "Lead Creation"]
        },
        {
          title: "Colleagues",
          icon: <Users className="w-4 h-4" />,
          items: ["Internal Communications", "Team Collaboration", "Internal Updates"]
        },
        {
          title: "Smart Features",
          icon: <Zap className="w-4 h-4" />,
          items: ["Auto-prioritization", "CRM Filtering", "Label System", "Drag-and-drop Actions", "Contact Suggestions"]
        },
        {
          title: "ResponseWatch",
          icon: <Clock className="w-4 h-4" />,
          items: ["Deadline Reminders", "Overdue Notifications", "VIP Customer Alerts", "Follow-up Automation"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Email Intelligence", "Open Tracking", "Template Performance", "Dashboard Reports", "A/B Testing Insights"]
        },
        {
          title: "Templates",
          icon: <FileText className="w-4 h-4" />,
          items: ["Sales Email Templates", "Email Scheduling", "Performance Tracking", "CRM-based Suggestions"]
        },
        {
          title: "Team Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Shared Contexts", "Team Handoffs", "New Hire Onboarding", "Role Change Continuity"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Email templates",
            "Email open and link tracking",
            "Send later scheduling",
            "Create CRM contact from email",
            "Set follow-up reminders"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automatic email prioritization",
            "Multi-column inbox view",
            "Deep CRM integration",
            "Reply tracking with ResponseWatch",
            "Team email sharing"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Organizing a cluttered sales inbox",
            "Remembering to follow up with leads",
            "Reducing context switching with CRM",
            "Knowing if a prospect saw your email",
            "Avoiding writing repetitive emails",
            "Responding faster to hot leads",
            "Onboarding new salespeople",
            "Ensuring consistent team messaging",
            "Prioritizing daily emails",
            "Automating CRM data entry"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI suggestions for best send time",
            "Email sentiment analysis",
            "AI-generated email drafts",
            "Predictive lead scoring",
            "Next Best Action recommendations",
            "AI insights on template performance",
            "Automated email thread summarization",
            "AI identification of upsell opportunities",
            "Smart alerts on prospect engagement",
            "AI grammar and tone analysis",
            "Automated contact data enrichment",
            "Predictive deal closing analysis",
            "AI-powered 'ghostwriting' for replies",
            "Automated meeting scheduling",
            "AI competitor mention alerts",
            "Intelligent email categorization",
            "AI-powered adaptive follow-up reminders",
            "Voice-to-text email and CRM logging",
            "AI analysis of team email performance",
            "Smart 'nudge' for cold leads"
          ]
        }
      ]
    },
    "SalesIQ": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Settings > Brands", "Channel Management", "Brand Configuration", "Department Access", "Dark/Light Theme"]
        },
        {
          title: "Live Chat",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Chat Widget Customization", "Float vs Static Options", "Custom Branding", "Chat Window Themes", "Operator Profile Pictures", "24-Hour Idle Management"]
        },
        {
          title: "Multi-Channel",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["WhatsApp Integration", "Telegram Support", "Facebook Messenger", "Pre-chat Forms", "Canned Response Categories", "Hebrew RTL Support"]
        },
        {
          title: "Visitor Tracking",
          icon: <Eye className="w-4 h-4" />,
          items: ["Real-time Analytics", "Geographic Tracking", "Behavioral Insights", "Lead Scoring", "Mobile App Tracking", "Mobilisten SDK"]
        },
        {
          title: "Visitor Data",
          icon: <Database className="w-4 h-4" />,
          items: ["Demographics", "Engagement Metrics", "CRM Integration", "Email Campaign Tracking", "MailChimp Integration"]
        },
        {
          title: "Widgets",
          icon: <Code className="w-4 h-4" />,
          items: ["Custom Widget Development", "Deluge Scripting", "API Access", "Webhooks", "Platform Support"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Weekly Reports Dashboard", "Visitor Trends", "Real-time Notifications", "Automated Mailing Lists", "Google Analytics Sync"]
        },
        {
          title: "Integrations",
          icon: <Link2 className="w-4 h-4" />,
          items: ["Zoho Desk Integration", "TV Apps", "Android TV", "Apple TV", "Desktop Apps", "Mobile Alerts"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable chat widgets",
            "Canned responses",
            "Pre-chat forms",
            "Desktop notifications",
            "Operator 'away' status"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time visitor tracking",
            "Proactive chat invitations",
            "Lead scoring",
            "Codeless chatbot builder",
            "CRM & Help Desk integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Engaging website visitors",
            "Understanding visitor behavior",
            "Providing 24/7 support with chatbots",
            "Reducing website bounce rates",
            "Answering repetitive questions",
            "Qualifying leads effectively",
            "Creating a unified customer experience",
            "Measuring live chat ROI",
            "Supporting customers on multiple platforms",
            "Personalizing the website experience"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered Answer Bot",
            "Intelligent chat routing",
            "AI-driven lead scoring",
            "Chat sentiment analysis",
            "AI-generated agent responses",
            "Predictive visitor behavior analysis",
            "AI-powered proactive chat triggers",
            "Self-learning chatbot builder",
            "AI chat transcript summarization",
            "Automated real-time translation",
            "AI insights into customer pain points",
            "Advanced NLU for chatbots",
            "AI-driven upsell recommendations",
            "Automated chat categorization",
            "AI-based agent quality assurance",
            "Predictive chat volume forecasting",
            "AI-powered 'smart actions' in chat",
            "Voice-enabled chat interaction",
            "AI A/B testing for chat widgets",
            "Automated VIP customer identification"
          ]
        }
      ]
    },
    "Motivator": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Performance Overview", "Team Standings", "Achievement Gallery", "Recent Activities"]
        },
        {
          title: "Games",
          icon: <Target className="w-4 h-4" />,
          items: ["Active Games", "Game Templates", "Custom Games", "Game History", "Game Settings"]
        },
        {
          title: "Leaderboards",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["Top Performers", "Team Rankings", "Individual Scores", "Period Comparisons"]
        },
        {
          title: "Achievements",
          icon: <Star className="w-4 h-4" />,
          items: ["Badges", "Rewards", "Milestones", "Recognition Wall", "Achievement History"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Performance Metrics", "Engagement Reports", "ROI Analysis", "Behavioral Insights"]
        },
        {
          title: "Setup",
          icon: <Settings className="w-4 h-4" />,
          items: ["KPI Configuration", "Team Setup", "Reward System", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable leaderboard themes",
            "Achievement sound effects",
            "Peer recognition 'kudos' feature",
            "Personal best notifications",
            "Mobile goal-tracking widget"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Integrate with any CRM data point",
            "TV channel for office screens",
            "Complex contest builder",
            "Fantasy sports-style competitions",
            "Rewards fulfillment system"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Boosting low team morale",
            "Focusing reps on key metrics",
            "Preventing negative competition",
            "Visualizing real-time performance",
            "Making sales meetings engaging",
            "Motivating through long sales cycles",
            "Recognizing non-sales contributions",
            "Speeding up new rep onboarding",
            "Simplifying complex sales data",
            "Automating reward fulfillment"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered personalized goals",
            "Predictive motivation analysis",
            "AI-driven contest recommendations",
            "Smart milestone alerts",
            "AI sales coach for reps",
            "Automated balanced team generation",
            "Team morale sentiment analysis",
            "AI recognition of 'unsung heroes'",
            "Predictive KPI forecasting",
            "AI-generated contest summaries",
            "Natural language ranking queries",
            "AI recommendations for rewards",
            "Automated performance anomaly detection",
            "AI skill gap analysis",
            "Personalized 'power-up' suggestions",
            "AI dynamic difficulty adjustment",
            "Predictive contest effectiveness modeling",
            "Automated peer recognition suggestions",
            "AI-generated contest 'hype' messages",
            "Smart matchmaking for sales challenges"
          ]
        }
      ]
    },
    "Social": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Brand Health Overview", "Performance Metrics", "Live Notifications", "Unified Activity Feed"]
        },
        {
          title: "Publish",
          icon: <Send className="w-4 h-4" />,
          items: ["New Post Composer", "Multi-platform Support", "Publishing Calendar", "Content Queue", "SmartQ Predictions", "Draft Management", "Team Approvals"]
        },
        {
          title: "Posts",
          icon: <FileText className="w-4 h-4" />,
          items: ["Published Posts", "Scheduled Posts", "Performance Tracking", "Failed Posts", "Post Analytics"]
        },
        {
          title: "Calendar",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Visual Content Planning", "Monthly/Weekly/Daily Views", "Drag-and-drop Scheduling", "Notes & Events", "Holiday View", "Time Zone Customization"]
        },
        {
          title: "Monitor",
          icon: <Search className="w-4 h-4" />,
          items: ["Real-time Social Listening", "Brand Mentions", "Keyword Monitoring", "Hashtag Performance", "Custom Columns", "Competitor Tracking"]
        },
        {
          title: "Messages",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Unified Inbox", "WhatsApp Business", "Telegram Integration", "Saved Replies", "Conversation History", "Team Assignment"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Custom Analytics Dashboard", "Pre-built Templates", "Performance Metrics", "Automated Scheduling", "PDF/PNG Export", "White-label Options"]
        },
        {
          title: "Connections",
          icon: <Users className="w-4 h-4" />,
          items: ["Audience Profile Management", "Lead Identification", "CRM Integration", "Follower Organization", "Direct Engagement"]
        },
        {
          title: "Platforms",
          icon: <Grid className="w-4 h-4" />,
          items: ["Facebook", "Instagram", "X/Twitter", "LinkedIn", "YouTube", "TikTok", "Pinterest", "Threads", "Bluesky", "Mastodon"]
        },
        {
          title: "Team",
          icon: <Users className="w-4 h-4" />,
          items: ["Role-based Permissions", "Content Approval", "Team Chat", "Client Portal", "White-label Reporting"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Unified social inbox",
            "Content calendar",
            "Browser sharing extension",
            "URL shortener",
            "Simple graphics editor"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Advanced social listening",
            "SmartQ optimal post timing",
            "Comprehensive analytics",
            "Team collaboration workflows",
            "CRM integration for leads"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing multiple social accounts",
            "Generating content ideas",
            "Knowing the best time to post",
            "Missing customer comments",
            "Proving social media ROI",
            "Collaborating with a team",
            "Tracking brand mentions",
            "Handling social customer service",
            "Turning followers into leads",
            "Bulk scheduling content"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI content generation for posts",
            "AI hashtag suggestions",
            "Predictive post performance analytics",
            "Sentiment analysis of mentions",
            "AI recommendations for content formats",
            "Smart replies for social inquiries",
            "AI identification of brand influencers",
            "Automated user-generated content discovery",
            "AI-driven competitor analysis",
            "Predictive industry trend spotting",
            "AI social media crisis alerts",
            "Automated A/B testing for copy",
            "AI-driven audience segmentation",
            "Natural language post scheduling",
            "AI-generated performance summaries",
            "Smart comment moderation",
            "AI suggestions for re-sharing content",
            "Predictive lead scoring from social",
            "AI video content analysis",
            "Automated ad campaign optimization"
          ]
        }
      ]
    },
    "Marketing Automation": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Campaign Overview", "Lead Flow Analytics", "Performance Metrics", "Real-time Activities", "ROI Dashboard"]
        },
        {
          title: "Journey Builder",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["Visual Journey Designer", "Customer Journey Mapping", "Multi-channel Journeys", "Trigger Events", "Path Analysis", "Journey Templates"]
        },
        {
          title: "Campaigns",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Email Campaigns", "SMS Campaigns", "Push Notifications", "In-App Messages", "Web Push", "Social Media Campaigns"]
        },
        {
          title: "Lead Management",
          icon: <Users className="w-4 h-4" />,
          items: ["Lead Scoring", "Lead Nurturing", "Behavioral Tracking", "Lead Lifecycle", "Progressive Profiling"]
        },
        {
          title: "Segmentation",
          icon: <Filter className="w-4 h-4" />,
          items: ["Audience Segments", "Dynamic Lists", "Behavioral Triggers", "Custom Attributes", "Smart Segmentation"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Workflow Automation", "Trigger Campaigns", "Auto-responses", "Drip Sequences", "Event-based Actions"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Campaign Performance", "Attribution Reports", "Conversion Tracking", "A/B Test Results", "Revenue Attribution"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["CRM Integration", "Website Tracking", "API Configuration", "Webhooks", "Third-party Apps"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Drag-and-Drop Email Builder",
            "A/B Testing for Subject Lines",
            "Dynamic Content Blocks",
            "Form Pre-fill with Known Data",
            "Lead Source Tracking"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Visual Customer Journey Builder",
            "Advanced Lead Scoring & Grading",
            "Multi-channel Campaign Orchestration",
            "Revenue Attribution Reporting",
            "Website Personalization Engine"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Generating High-Quality Leads",
            "Nurturing Leads Effectively",
            "Aligning Sales and Marketing",
            "Measuring Marketing ROI",
            "Personalizing at Scale",
            "Managing Customer Data",
            "Creating Engaging Content",
            "Automating Repetitive Tasks",
            "Understanding Customer Behavior",
            "Improving Customer Retention"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-Powered Predictive Segmentation",
            "Automated Journey Optimization",
            "AI-Generated Email Copy",
            "Predictive Lead Scoring",
            "Smart Audience Targeting",
            "AI-driven Content Recommendations",
            "Automated Anomaly Detection in Campaigns",
            "Predictive Churn Analysis",
            "AI-assisted Campaign Creation",
            "Voice-activated Campaign Analytics",
            "Predictive A/B Testing",
            "AI-powered Content Personalization",
            "Automated Customer Journey Mapping",
            "AI-driven Lead Nurturing",
            "Predictive Analytics for Campaign Success",
            "AI-powered Social Media Scheduling",
            "Automated Ad Spend Optimization",
            "AI-based Email Subject Line Generator",
            "Customer Lifetime Value Prediction",
            "AI-driven Market Trend Analysis"
          ]
        }
      ]
    },
    "PageSense": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Optimization Overview", "Active Experiments", "Conversion Insights", "Performance Summary", "Quick Stats"]
        },
        {
          title: "A/B Testing",
          icon: <Target className="w-4 h-4" />,
          items: ["Create A/B Test", "Running Tests", "Test Results", "Statistical Significance", "Winner Selection", "Test Templates", "Multivariate Testing"]
        },
        {
          title: "Heatmaps",
          icon: <MousePointer className="w-4 h-4" />,
          items: ["Click Heatmaps", "Scroll Heatmaps", "Move Heatmaps", "Attention Heatmaps", "Mobile Heatmaps", "Page Comparison", "Element Analysis"]
        },
        {
          title: "Session Recordings",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["User Sessions", "Visitor Recordings", "Funnel Analysis", "Error Tracking", "Form Analytics", "Conversion Paths", "Drop-off Analysis"]
        },
        {
          title: "Funnels",
          icon: <TrendingDown className="w-4 h-4" />,
          items: ["Funnel Builder", "Conversion Funnel", "Drop-off Points", "Funnel Optimization", "Goal Tracking"]
        },
        {
          title: "Polls & Surveys",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["On-page Polls", "Exit-Intent Surveys", "Feedback Widgets", "NPS Surveys", "User Voice", "Custom Questions"]
        },
        {
          title: "Form Analytics",
          icon: <FileText className="w-4 h-4" />,
          items: ["Form Analysis", "Field Analytics", "Form Drop-offs", "Completion Rates", "Form Optimization"]
        },
        {
          title: "Goals & Events",
          icon: <Flag className="w-4 h-4" />,
          items: ["Goal Setup", "Conversion Goals", "Custom Events", "Revenue Tracking", "Goal Analytics"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Conversion Reports", "Experiment Reports", "Revenue Impact", "Visitor Behavior", "Performance Analytics"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "On-page poll creator",
            "Click heatmaps",
            "Visual A/B test editor",
            "Scroll heatmaps",
            "One-click Zoho Sites integration"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Session recordings",
            "Funnel analysis",
            "Advanced A/B testing",
            "Form analytics",
            "Website personalization"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Understanding why visitors don't convert",
            "Making data-driven design changes",
            "Fixing high bounce rates",
            "Optimizing long forms",
            "Seeing which page elements are ignored",
            "Getting direct user feedback",
            "Safely testing website changes",
            "Tailoring content for different users",
            "Tracking micro-conversions and goals",
            "Visualizing the complete user journey"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI recommendations for A/B tests",
            "Predictive uplift forecasting",
            "Automated user frustration analysis",
            "AI insights from heatmap data",
            "Smart behavioral segmentation",
            "AI form field reordering suggestions",
            "Natural language report queries",
            "AI-generated A/B test summaries",
            "Predictive content personalization",
            "AI anomaly detection in funnels",
            "Automated A/B test hypothesis generation",
            "Sentiment analysis of survey responses",
            "AI identification of valuable segments",
            "Smart alerts for significant results",
            "AI page speed improvement recommendations",
            "Automated user journey mapping",
            "AI design suggestions for conversions",
            "Predictive user friction analysis",
            "AI 'opportunity score' for pages",
            "Automated content personalization ideas"
          ]
        }
      ]
    },
    "Forms": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Form Overview", "Submission Stats", "Performance Metrics", "Recent Submissions", "Quick Actions"]
        },
        {
          title: "All Forms",
          icon: <FileText className="w-4 h-4" />,
          items: ["My Forms", "Shared Forms", "Published Forms", "Draft Forms", "Archived Forms", "Deleted Forms"]
        },
        {
          title: "Form Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Drag & Drop Builder", "Field Library", "Design Themes", "Logic & Rules", "Conditional Logic", "Multi-page Forms"]
        },
        {
          title: "Templates",
          icon: <Copy className="w-4 h-4" />,
          items: ["Form Templates", "Industry Templates", "Custom Templates", "Template Gallery", "Template Builder"]
        },
        {
          title: "Submissions",
          icon: <Inbox className="w-4 h-4" />,
          items: ["All Submissions", "Recent Submissions", "Export Data", "Submission Details", "Data Validation", "Duplicate Detection"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Form Analytics", "Submission Reports", "Conversion Rates", "Field Analytics", "Drop-off Analysis", "Time Analytics"]
        },
        {
          title: "Integrations",
          icon: <Link2 className="w-4 h-4" />,
          items: ["CRM Integration", "Email Marketing", "Payment Gateways", "Webhooks", "API Access", "Third-party Apps"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Account Settings", "Form Settings", "Notification Settings", "Security Settings", "User Management"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time Submission Counter",
            "Customizable \"Thank You\" Pages",
            "Field Validation Rules",
            "Save and Resume Later",
            "Basic Form Templates"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-page Forms with Conditional Logic",
            "Payment Integration (Stripe, PayPal)",
            "Advanced Reporting & Analytics",
            "Offline Form Submission",
            "Document Upload & Attachment"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Low Form Completion Rates",
            "Spam Submissions",
            "Integrating Form Data with Other Apps",
            "Creating Mobile-Responsive Forms",
            "Securely Handling Sensitive Data",
            "Automating Post-Submission Workflows",
            "Analyzing Form Performance",
            "Making Forms Accessible (WCAG)",
            "Collaborating on Form Creation",
            "Collecting Payments through Forms"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-Powered Form Generation from a Description",
            "Predictive Field Validation",
            "Automated Spam Detection",
            "AI-driven Form Layout Optimization",
            "Smart Field Suggestions",
            "AI-assisted Response Analysis",
            "Automated PDF Conversion to Forms",
            "Predictive Conversion Rate Analysis",
            "AI-powered Conditional Logic Builder",
            "Voice-to-Text Form Filling",
            "AI-based A/B testing for form fields",
            "Sentiment analysis of open-text feedback",
            "AI-powered form-to-database schema generation",
            "Predictive analytics on form abandonment",
            "AI-driven recommendations for form templates",
            "Automated translation of form fields and labels",
            "AI-powered image analysis for uploaded files (e.g., OCR)",
            "Smart CAPTCHA alternatives",
            "AI-generated summary reports of form submissions",
            "Natural language form creation"
          ]
        }
      ]
    },
    "Survey": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Survey Overview", "Response Analytics", "Active Surveys", "Performance Summary"]
        },
        {
          title: "Surveys",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["All Surveys", "Published Surveys", "Draft Surveys", "Survey Templates", "Question Bank"]
        },
        {
          title: "Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Survey Builder", "Question Types", "Logic & Branching", "Survey Themes", "Advanced Settings"]
        },
        {
          title: "Distribution",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Email Invitations", "Social Sharing", "Website Embedding", "QR Codes", "Mobile App"]
        },
        {
          title: "Responses",
          icon: <Database className="w-4 h-4" />,
          items: ["All Responses", "Response Details", "Export Responses", "Real-time Results", "Data Filtering"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Response Analytics", "Cross Tabulation", "Sentiment Analysis", "Text Analytics", "Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Pre-built survey templates",
            "Multiple question types",
            "Customizable 'Thank You' page",
            "Real-time response tracking",
            "Simple web link sharing"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Skip logic and question branching",
            "Multi-channel distribution",
            "Offline survey collection",
            "Advanced reporting & cross-tabulation",
            "Integration to trigger surveys"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Solving low survey response rates",
            "Avoiding irrelevant questions",
            "Getting feedback at the right time",
            "Analyzing open-ended feedback",
            "Ensuring respondent anonymity",
            "Matching surveys to company branding",
            "Conducting field research offline",
            "Preventing duplicate survey submissions",
            "Collaborating on survey creation",
            "Turning data into actionable insights"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered survey generation",
            "AI suggestions to reduce bias",
            "Predictive completion rate analysis",
            "Automated sentiment analysis",
            "AI identification of feedback themes",
            "Smart logic suggestions",
            "AI recommendations for survey length",
            "Predictive respondent fatigue detection",
            "AI-powered data cleaning",
            "Natural language results analysis",
            "AI-generated findings summaries",
            "Automated survey translation",
            "AI-based A/B testing for questions",
            "Smart distribution channel advice",
            "AI anomaly detection in responses",
            "Predictive analysis of respondent value",
            "AI-generated action plans",
            "Smart reminders for participants",
            "AI comparison to industry benchmarks",
            "Automated 'Other' response categorization"
          ]
        }
      ]
    },
    "Backstage": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Event Overview", "Registration Stats", "Revenue Summary", "Recent Activities"]
        },
        {
          title: "Events",
          icon: <Calendar className="w-4 h-4" />,
          items: ["All Events", "Upcoming Events", "Past Events", "Event Templates", "Event Series"]
        },
        {
          title: "Registration",
          icon: <UserCheck className="w-4 h-4" />,
          items: ["Registration Forms", "Ticket Types", "Pricing Tiers", "Discount Codes", "Waitlist Management"]
        },
        {
          title: "Attendees",
          icon: <Users className="w-4 h-4" />,
          items: ["Attendee List", "Check-in Management", "Attendee Communication", "Badge Printing", "Networking"]
        },
        {
          title: "Marketing",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Email Campaigns", "Social Promotion", "Landing Pages", "Referral Program", "Analytics"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Registration Reports", "Revenue Reports", "Attendance Reports", "Survey Results"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable registration forms",
            "On-demand badge printing",
            "Simple event website builder",
            "Attendee email templates",
            "Mobile app for attendees"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Comprehensive virtual event platform",
            "Advanced ticket management",
            "Sponsor & exhibitor portals",
            "Advanced event analytics",
            "Marketing & CRM integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing chaotic event registrations",
            "Promoting events to the right audience",
            "Keeping virtual attendees engaged",
            "Demonstrating value to sponsors",
            "Handling large event check-ins",
            "Communicating last-minute changes",
            "Facilitating attendee networking",
            "Gathering post-event feedback",
            "Proving event ROI",
            "Managing hybrid events seamlessly"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered attendee matchmaking",
            "Predictive attendance analysis",
            "AI-driven session recommendations",
            "Live sentiment analysis",
            "AI chatbot for attendee FAQs",
            "Automated post-event summaries",
            "AI-based speaker suggestions",
            "Smart agenda scheduling",
            "AI transcription of sessions",
            "Predictive lead scoring for attendees",
            "AI recommendations for ticket pricing",
            "Automated promotional content creation",
            "AI moderation of live Q&A",
            "Natural language event data queries",
            "AI analysis of sponsor ROI",
            "Intelligent identification of top engagers",
            "AI-powered event highlights videos",
            "Predictive session popularity",
            "AI-driven agenda improvement suggestions",
            "Automated session topic tagging"
          ]
        }
      ]
    },
    "Expense": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Expense Overview", "Pending Approvals", "Monthly Summary", "Quick Actions"]
        },
        {
          title: "Expenses",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Expenses", "My Expenses", "Team Expenses", "Recurring Expenses", "Mileage Tracking"]
        },
        {
          title: "Receipts",
          icon: <Camera className="w-4 h-4" />,
          items: ["Receipt Capture", "Auto-Scan", "Receipt Matching", "Receipt Storage", "Mobile Upload"]
        },
        {
          title: "Approvals",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Pending Approvals", "Approval Workflows", "Rejected Expenses", "Approved Expenses"]
        },
        {
          title: "Reimbursements",
          icon: <DollarSign className="w-4 h-4" />,
          items: ["Pending Reimbursements", "Payment Processing", "Reimbursement History", "Payment Methods"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Expense Reports", "Category Reports", "Employee Reports", "Tax Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Expense Policies", "Categories", "Approval Rules", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Mileage Tracker",
            "Quick Expense Entry",
            "Duplicate Expense Detection",
            "Mobile Approvals",
            "Split Personal/Business Expenses"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Corporate Card Reconciliation",
            "ERP/Accounting Integration",
            "Per Diem & Travel Allowance Management",
            "Direct Payroll Integration",
            "Built-in Tax Compliance"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Receipt Auto-Categorization",
            "Expense Policy Reminders",
            "Automated Approval Workflows",
            "Advanced Analytics & Insights",
            "Real-time Receipt Capture",
            "Smart Scan for Reports",
            "Real-time Policy Checks",
            "Project-based Expense Tagging",
            "Centralized Spend Dashboard",
            "Automatic Currency Conversion"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-Powered Anomaly Detection",
            "Predictive Budgeting",
            "Intelligent Policy Advisor",
            "Voice-Powered Expense Creation",
            "Automated Itinerary-Based Reporting",
            "AI Chatbot for Support",
            "Vendor Negotiation Insights",
            "Personalized Spending Insights",
            "Automated Receipt Translation",
            "Gamified Savings Goals",
            "AI-Powered Receipt Data Extraction",
            "Automated Expense Report Generation",
            "Predictive Expense Forecasting",
            "Intelligent Policy Violation Detection",
            "AI-driven Spend Optimization",
            "Automated Expense Categorization",
            "Smart Trip-based Expense Bundling",
            "AI-powered Approval Workflow Suggestions",
            "Personalized Employee Expense Insights",
            "Automated Fraud Detection"
          ]
        }
      ]
    },
    "Subscriptions": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Revenue Overview", "Subscription Metrics", "Growth Analytics", "Churn Analysis"]
        },
        {
          title: "Subscriptions",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["All Subscriptions", "Active Subscriptions", "Paused Subscriptions", "Cancelled Subscriptions"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["All Customers", "Customer Portal", "Customer Communication", "Customer Segmentation"]
        },
        {
          title: "Plans",
          icon: <Package className="w-4 h-4" />,
          items: ["Subscription Plans", "Pricing Tiers", "Add-ons", "Plan Upgrades", "Plan Analytics"]
        },
        {
          title: "Billing",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Invoices", "Payment Methods", "Failed Payments", "Dunning Management", "Tax Settings"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Revenue Reports", "Subscription Analytics", "Cohort Analysis", "Lifetime Value"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Billing Settings", "Payment Gateways", "Email Templates", "Webhooks"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Subscription Pause/Resume",
            "Prorated Billing Calculator",
            "Dunning Email Templates",
            "One-Click Plan Upgrade",
            "Trial Expiration Reminders"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Usage-Based Billing Engine",
            "Revenue Recognition Automation",
            "Advanced Churn Prediction",
            "Multi-Currency & Tax Automation",
            "Cohort Analysis Dashboard"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automated Dunning Management",
            "Self-Service Customer Portal",
            "Automated Prorated Invoicing",
            "Real-time Subscription Metrics",
            "Global Tax & Currency Support",
            "Automated Subscriber Notifications",
            "Seamless Onboarding Integration",
            "Flexible Billing Cycles",
            "PCI-Compliant Security",
            "Robust API & Integrations"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-Powered Pricing Optimization",
            "Predictive Churn Scoring",
            "Automated Upsell Recommendations",
            "Intelligent Dunning Customization",
            "AI-Generated Renewal Forecasts",
            "Subscription Fatigue Analysis",
            "Natural Language Analytics Query",
            "Automated Competitor Price Tracker",
            "AI-Assisted Plan Configuration",
            "Personalized Retention Offers",
            "AI-Powered Churn Prediction",
            "Automated Dunning Management",
            "Predictive LTV Analysis",
            "AI-driven Pricing Optimization",
            "Smart Subscription Recommendations",
            "AI-powered Revenue Forecasting",
            "Automated Failed Payment Recovery",
            "AI-based Customer Segmentation",
            "Intelligent Coupon Suggestions",
            "AI-driven Subscription Analytics"
          ]
        }
      ]
    },
    "Inventory": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Inventory Overview", "Stock Levels", "Low Stock Alerts", "Recent Transactions"]
        },
        {
          title: "Items",
          icon: <Package className="w-4 h-4" />,
          items: ["All Items", "Item Groups", "Composite Items", "Serial Numbers", "Item Images"]
        },
        {
          title: "Stock",
          icon: <Storage className="w-4 h-4" />,
          items: ["Stock Summary", "Stock Adjustments", "Stock Transfers", "Physical Count", "Reorder Points"]
        },
        {
          title: "Orders",
          icon: <FileText className="w-4 h-4" />,
          items: ["Sales Orders", "Purchase Orders", "Order Fulfillment", "Backorders", "Order History"]
        },
        {
          title: "Warehouses",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Warehouse Management", "Locations", "Bin Management", "Warehouse Transfers"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Inventory Reports", "Valuation Reports", "Movement Reports", "Aging Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Units of Measure", "Categories", "Preferences"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Low Stock Alerts",
            "Barcode/QR Code Generation",
            "Quick Stock Adjustment",
            "Item Image Upload",
            "Basic Stock Count Sheet"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-Warehouse Management",
            "Serial/Batch Number Tracking",
            "Automated Reordering",
            "Landed Cost Tracking",
            "Kitting & Bundling"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automated Reorder Points",
            "Inventory Turnover Reports",
            "Cycle Counting & Barcode Scanning",
            "Real-time Multi-channel Sync",
            "Expiration Date Management",
            "Picklists & Packing Slips",
            "Streamlined Returns Workflow",
            "Detailed Inventory Audit Trail",
            "Landed Cost Valuation",
            "Warehouse Bin Location Management"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-Powered Demand Forecasting",
            "Supplier Performance Scorecards",
            "Dynamic Reorder Point Suggestions",
            "Automated Dead Stock Identification",
            "Smart Replenishment Recommendations",
            "Warehouse Layout Optimization",
            "Image Recognition for Item ID",
            "Automated Quality Control Analysis",
            "Natural Language Inventory Queries",
            "Predictive Inbound Shipping Alerts",
            "AI-Powered Stock Level Optimization",
            "Automated Purchase Order Creation",
            "Predictive Sales Forecasting",
            "Intelligent Supplier Selection",
            "AI-driven Warehouse Slotting",
            "Automated Stock Transfer Suggestions",
            "Smart Barcode Scanning",
            "AI-powered Quality Control",
            "Personalized Product Recommendations",
            "Automated Returns Processing"
          ]
        }
      ]
    },
    "Checkout": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Payment Overview", "Transaction Stats", "Revenue Summary", "Recent Payments"]
        },
        {
          title: "Payment Pages",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Pages", "Published Pages", "Draft Pages", "Page Templates", "Mobile Pages"]
        },
        {
          title: "Transactions",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Transactions", "Successful Payments", "Failed Payments", "Refunds", "Chargebacks"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Database", "Payment Methods", "Customer Communications", "Purchase History"]
        },
        {
          title: "Products",
          icon: <Package className="w-4 h-4" />,
          items: ["Product Catalog", "Pricing", "Inventory Integration", "Digital Products"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Payment Analytics", "Conversion Rates", "Abandonment Analysis", "Revenue Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Payment Settings", "Gateway Configuration", "Security Settings", "Branding"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable payment templates",
            "One-time & recurring payments",
            "Collect shipping addresses",
            "Embeddable payment buttons",
            "Automatic email receipts"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-currency support",
            "Major payment gateway integration",
            "Handled PCI compliance",
            "Custom domain for payment pages",
            "Dunning management"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Accepting payments without an e-commerce store",
            "Reducing cart abandonment",
            "Handling payment security & PCI compliance",
            "Automating payment receipts",
            "Setting up subscription billing",
            "Accepting international payments",
            "Keeping customers on your site to pay",
            "Recovering failed subscription payments",
            "Collecting 'pay what you want' donations",
            "Tracking sales and payment history"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered transaction fraud detection",
            "Predictive A/B testing for page designs",
            "AI-driven checkout flow optimization",
            "Smart dunning management",
            "AI recommendations for pricing",
            "Automated payment page generation",
            "Natural language sales queries",
            "AI-powered A/B testing for pages",
            "Cancellation reason sentiment analysis",
            "Predictive customer churn analysis",
            "AI-driven currency conversion advice",
            "Smart alerts for unusual activity",
            "AI-powered upsell suggestions",
            "Automated tax calculation suggestions",
            "AI-based page localization",
            "Predictive revenue forecasting",
            "AI-generated LTV insights",
            "Smart bank deposit matching",
            "AI-optimized payment retry schedules",
            "Automated high-value customer identification"
          ]
        }
      ]
    },
    "Analytics": {
      sections: [
        {
          title: "Modules",
          icon: <Grid className="w-4 h-4" />,
          items: ["Teamspace Modules", "Module Management", "Custom Modules"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Reports", "Favorite Reports", "Recent Reports", "Shared Reports", "Create New Report"]
        },
        {
          title: "Dashboards",
          icon: <Monitor className="w-4 h-4" />,
          items: ["All Dashboards", "Favorite Dashboards", "Recent Dashboards", "Shared Dashboards", "Create New Dashboard"]
        },
        {
          title: "Data Sources",
          icon: <Database className="w-4 h-4" />,
          items: ["Connected Sources", "Import Data", "Database Connections", "File Imports", "Zoho App Integrations", "Third-party Connectors"]
        },
        {
          title: "AI & Intelligence",
          icon: <Bot className="w-4 h-4" />,
          items: ["Ask Zia", "Zia Insights", "Predictive Analytics", "Advanced Analytics"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Shared Workspaces", "Comments & Annotations", "User Management", "Activity Logs"]
        },
        {
          title: "New Features 2024",
          icon: <Star className="w-4 h-4" />,
          items: ["Sunburst Charts", "Enhanced JavaScript API", "Distributed Architecture", "Puvi Font Support"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Workspace Settings", "Currency Formatting", "Week/Year Format", "Fiscal Year Settings", "Data Backup", "User Permissions"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Drag-and-drop report builder",
            "Library of chart types",
            "Interactive dashboard filters",
            "Import from CSV/Excel",
            "Scheduled email reports"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Connect to multiple data sources",
            "AI assistant 'Ask Zia'",
            "Advanced data preparation",
            "Secure collaboration features",
            "Embeddable analytics"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Analyzing scattered data",
            "Enabling self-service reporting",
            "Creating insightful, interactive reports",
            "Automating report distribution",
            "Visualizing data to spot trends",
            "Sharing sensitive data securely",
            "Cleaning messy data for analysis",
            "Embedding analytics in other apps",
            "Getting quick answers from data",
            "Analyzing large datasets efficiently"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "Zia: AI natural language querying",
            "Zia Insights: Automated data narratives",
            "Predictive forecasting models",
            "AI-powered 'what-if' analysis",
            "Smart data cleansing",
            "AI chart type suggestions",
            "Automated key driver analysis",
            "AI-based anomaly detection",
            "Natural Language Generation (NLG)",
            "AI-powered data storytelling",
            "Smart data prep suggestions",
            "AI recommendations for data blending",
            "Predictive modeling (churn, sales)",
            "AI pattern recognition",
            "Automated data clustering",
            "AI-powered goal seeking",
            "Smart metric change diagnostics",
            "AI suggestions for new KPIs",
            "Automated data enrichment",
            "Conversational analytics (chat/voice)"
          ]
        }
      ]
    },
    "Recruit": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Recruitment Overview", "Pipeline Analytics", "Team Performance", "Recent Activities"]
        },
        {
          title: "Jobs",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Jobs", "Published Jobs", "Draft Jobs", "Job Templates", "Job Boards"]
        },
        {
          title: "Candidates",
          icon: <Users className="w-4 h-4" />,
          items: ["All Candidates", "Resume Database", "Candidate Profiles", "Source Tracking", "Candidate Pool"]
        },
        {
          title: "Applications",
          icon: <Inbox className="w-4 h-4" />,
          items: ["All Applications", "Interview Scheduling", "Application Status", "Candidate Pipeline"]
        },
        {
          title: "Interviews",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Schedule Interview", "Interview Calendar", "Interview Feedback", "Panel Management"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Recruitment Reports", "Source Analytics", "Time-to-Hire", "Cost-per-Hire"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Recruitment Settings", "User Management", "Workflow Configuration", "Integrations"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable hiring pipelines",
            "Candidate email templates",
            "Centralized candidate database",
            "Post to multiple job boards",
            "Direct interview scheduling"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated resume parsing",
            "Hiring manager review portal",
            "Advanced recruitment analytics",
            "Premium job board integrations",
            "Workflow automation"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing high application volumes",
            "Posting jobs on multiple sites",
            "Ensuring consistent communication",
            "Collaborating with hiring managers",
            "Rediscovering past candidates",
            "Reducing time spent screening resumes",
            "Measuring recruitment effectiveness",
            "Simplifying interview scheduling",
            "Improving the candidate experience",
            "Creating a branded career page"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered candidate sourcing",
            "Zia: AI candidate matching",
            "Predictive candidate success analysis",
            "AI resume screening and ranking",
            "Screening chatbot for candidates",
            "Interview feedback sentiment analysis",
            "AI job description improvement",
            "Automated interview scheduling",
            "AI video interview analysis",
            "Predictive time-to-hire analysis",
            "Smart talent pool rediscovery",
            "AI compensation benchmarking",
            "Automated background checks",
            "AI diversity & inclusion analytics",
            "Natural language candidate search",
            "AI onboarding workflow suggestions",
            "Predictive job board performance",
            "Automated interview question generation",
            "AI ideal candidate profile building",
            "Smart alerts for top-tier candidates"
          ]
        }
      ]
    },
    "Workerly": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Workforce Overview", "Assignment Status", "Performance Metrics", "Recent Activities"]
        },
        {
          title: "Workers",
          icon: <Users className="w-4 h-4" />,
          items: ["All Workers", "Worker Profiles", "Skills & Qualifications", "Availability"]
        },
        {
          title: "Assignments",
          icon: <FileText className="w-4 h-4" />,
          items: ["Current Assignments", "Assignment History", "Assignment Matching", "Client Requests"]
        },
        {
          title: "Scheduling",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Shift Scheduling", "Calendar View", "Time Tracking", "Attendance Management"]
        },
        {
          title: "Payroll",
          icon: <DollarSign className="w-4 h-4" />,
          items: ["Payroll Processing", "Timesheets", "Payment Records", "Tax Management"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Workforce Analytics", "Performance Reports", "Financial Reports", "Compliance Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central temp database",
            "Worker availability calendar",
            "Bulk email/SMS to temps",
            "Temp mobile app",
            "Client contact management"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated job-to-temp matching",
            "Client portal",
            "Digital timesheet workflows",
            "Automated invoice generation",
            "GPS-verified clock-ins"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Filling last-minute jobs",
            "Manually creating schedules",
            "Handling inaccurate timesheets",
            "Reducing client communication overhead",
            "Matching the right skills to jobs",
            "Speeding up payroll and invoicing",
            "Broadcasting jobs to many temps",
            "Preventing no-shows and forgotten shifts",
            "Tracking job profitability",
            "Ensuring temps are paid accurately"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered temp-to-job matching",
            "Predictive temp demand forecasting",
            "AI resume skill validation",
            "Smart travel time optimization",
            "AI chatbot for temp queries",
            "Automated timesheet anomaly detection",
            "AI-driven rating and feedback system",
            "Predictive job acceptance analysis",
            "AI suggestions for shift coverage",
            "Natural language temp search",
            "AI-generated job descriptions",
            "Client feedback sentiment analysis",
            "AI dynamic pricing suggestions",
            "Automated labor law compliance checks",
            "Predictive temp reliability analysis",
            "AI recommendations for upskilling",
            "Smart alerts for expiring certifications",
            "AI-powered payroll auditing",
            "Automated temp performance reports",
            "AI client-to-temp matching"
          ]
        }
      ]
    },
    "Cliq": {
      sections: [
        {
          title: "Chats",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["All Conversations", "Direct Messages", "Group Chats", "Starred Messages", "Message Search"]
        },
        {
          title: "Channels",
          icon: <Hash className="w-4 h-4" />,
          items: ["All Channels", "Public Channels", "Private Channels", "Channel Discovery", "Channel Settings"]
        },
        {
          title: "Teams",
          icon: <Users className="w-4 h-4" />,
          items: ["My Teams", "Team Directory", "Team Settings", "Team Analytics", "Cross-functional Teams"]
        },
        {
          title: "Calls",
          icon: <Phone className="w-4 h-4" />,
          items: ["Audio Calls", "Video Calls", "Screen Sharing", "Call History", "Conference Calls"]
        },
        {
          title: "Files",
          icon: <FileText className="w-4 h-4" />,
          items: ["Shared Files", "File Library", "Recent Files", "File Search", "Cloud Storage"]
        },
        {
          title: "Integrations",
          icon: <Zap className="w-4 h-4" />,
          items: ["App Integrations", "Bots", "Workflows", "Custom Commands", "API Access"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Emoji reactions and GIFs",
            "Do Not Disturb mode",
            "Threaded conversations",
            "Pin important messages",
            "Global search"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Integrated audio/video calls",
            "Custom bot platform",
            "Guest access for externals",
            "Company-wide announcement channels",
            "Contextual chat integrations"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Reducing internal email chains",
            "Finding past conversations",
            "Eliminating app switching for calls",
            "Making sure announcements are seen",
            "Automating routine notifications",
            "Organizing team discussions",
            "Collaborating securely with clients",
            "Managing notification overload",
            "Remembering decisions made in chat",
            "Sharing code snippets effectively"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI chat channel summarization",
            "Smart reply suggestions",
            "AI meeting scheduler",
            "Team morale sentiment analysis",
            "AI assistant for chat actions",
            "Automated call transcription",
            "AI-driven Do Not Disturb mode",
            "Predictive text for messaging",
            "AI new hire channel recommendations",
            "Smart action item extraction",
            "Natural language search",
            "Real-time multilingual translation",
            "Smart reminders for unanswered questions",
            "AI sensitive data detection",
            "Automated channel activity reports",
            "AI expert finder",
            "Smart notification prioritization",
            "AI suggestions for new channels",
            "Automated in-channel polling",
            "AI-powered 'focus mode'"
          ]
        }
      ]
    },
    "Meeting": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Meeting Overview", "Upcoming Meetings", "Recent Recordings", "Usage Analytics"]
        },
        {
          title: "Meetings",
          icon: <Video className="w-4 h-4" />,
          items: ["Start Meeting", "Schedule Meeting", "Join Meeting", "Meeting History", "Recurring Meetings"]
        },
        {
          title: "Webinars",
          icon: <Users className="w-4 h-4" />,
          items: ["Host Webinar", "Webinar Registration", "Attendee Management", "Webinar Analytics"]
        },
        {
          title: "Recordings",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["All Recordings", "Cloud Recordings", "Local Recordings", "Recording Settings"]
        },
        {
          title: "Room Management",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Meeting Rooms", "Room Booking", "Room Equipment", "Room Analytics"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Meeting Settings", "Security Settings", "Integration Settings", "User Management"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable meeting URLs",
            "Virtual backgrounds",
            "In-meeting chat",
            "Raise hand feature",
            "Password protection"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "HD video conferencing",
            "Screen sharing with annotation",
            "Cloud recording & transcripts",
            "Webinar capabilities",
            "Calendar integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Avoiding software installation",
            "Remembering what was discussed",
            "Preventing meeting interruptions",
            "Collaborating on documents live",
            "Securing confidential meetings",
            "Scheduling across time zones",
            "Hiding distracting backgrounds",
            "Presenting to large audiences",
            "Joining meetings on the go",
            "Following up with attendees"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI meeting summarization",
            "Real-time transcription",
            "AI noise cancellation",
            "Smart camera framing",
            "AI attendee engagement analysis",
            "Zia virtual meeting assistant",
            "AI-powered chat translation",
            "Meeting sentiment analysis",
            "AI-generated meeting agendas",
            "Predictive attendance analytics",
            "Smart 'overtime' alerts",
            "AI meeting productivity suggestions",
            "Automated recording chapters",
            "AI key moment highlighting",
            "Natural language voice commands",
            "AI bandwidth optimization",
            "Smart speaker identification",
            "AI 'catch me up' feature",
            "Automated recurring meeting scheduling",
            "AI virtual background generation"
          ]
        }
      ]
    },
    "Connect": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Activity Feed", "News & Updates", "Trending Topics", "Company Announcements"]
        },
        {
          title: "Groups",
          icon: <Users className="w-4 h-4" />,
          items: ["My Groups", "All Groups", "Create Group", "Group Directory", "Group Analytics"]
        },
        {
          title: "Forums",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Discussion Forums", "Q&A Forums", "Knowledge Sharing", "Expert Networks"]
        },
        {
          title: "Events",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Upcoming Events", "Create Event", "Event Calendar", "Event Registration", "Virtual Events"]
        },
        {
          title: "Knowledge Base",
          icon: <BookOpen className="w-4 h-4" />,
          items: ["Articles", "Wikis", "Best Practices", "Training Materials", "Resource Library"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Engagement Metrics", "User Activity", "Content Performance", "Network Analysis"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central activity feed",
            "Employee profiles",
            "Team/interest groups",
            "Quick polls",
            "Likes and comments"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Shared knowledge base",
            "Discussion forums",
            "Company-wide calendar",
            "Automated update integrations",
            "Custom approval workflows"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Reducing internal email noise",
            "Breaking down team silos",
            "Improving new hire onboarding",
            "Preventing knowledge loss",
            "Building company culture remotely",
            "Finding the right expert",
            "Encouraging employee feedback",
            "Organizing company events",
            "Consolidating communication tools",
            "Getting feedback on new ideas"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI feed summarization",
            "Smart group suggestions",
            "AI-based expert finding",
            "Employee morale sentiment analysis",
            "AI-powered content moderation",
            "Automated post topic tagging",
            "AI knowledge base recommendations",
            "Predictive employee engagement analytics",
            "AI chatbot for policy questions",
            "Natural language user search",
            "AI 'icebreaker' question generation",
            "Smart identification of emerging leaders",
            "AI-powered post translation",
            "Automated weekly 'digest' generation",
            "AI-based skill gap analysis",
            "Predictive disengagement analysis",
            "Smart content sharing recommendations",
            "AI-powered event suggestions",
            "Automated duplicate KB article detection",
            "AI insights into informal networks"
          ]
        }
      ]
    },
    "WorkDrive": {
      sections: [
        {
          title: "My Files",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Files", "Recent Files", "Starred Files", "Trash", "Offline Files"]
        },
        {
          title: "Shared",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Shared with Me", "Shared by Me", "Team Folders", "Public Links", "External Sharing"]
        },
        {
          title: "Team Folders",
          icon: <Users className="w-4 h-4" />,
          items: ["All Team Folders", "My Teams", "Folder Permissions", "Team Analytics"]
        },
        {
          title: "Sync",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["Desktop Sync", "Mobile Sync", "Sync Status", "Sync Settings", "Version History"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Access Permissions", "Data Encryption", "Audit Logs", "Compliance Reports"]
        },
        {
          title: "Administration",
          icon: <Settings className="w-4 h-4" />,
          items: ["User Management", "Storage Management", "Security Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Recent Files view",
            "File version history",
            "Starred files and folders",
            "Desktop sync client",
            "Trash for file recovery"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Centralized Team Folders",
            "Granular role-based permissions",
            "Integrated office suite",
            "Advanced admin security controls",
            "Secure external sharing"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Solving scattered file storage",
            "Eliminating document version chaos",
            "Controlling access to sensitive data",
            "Sharing large files securely",
            "Finding files with content search",
            "Simplifying team access to files",
            "Recovering accidentally deleted files",
            "Accessing files while offline",
            "Ensuring data security and compliance",
            "Preventing data loss when employees leave"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered contextual search",
            "Automated file organization suggestions",
            "AI sensitive data (PII) detection",
            "Predictive file access suggestions",
            "AI-powered OCR for images/PDFs",
            "Smart sharing recommendations",
            "AI-driven duplicate file detection",
            "Automated document summarization",
            "AI malware and virus scanning",
            "Natural language file search",
            "AI-powered workflow automation",
            "Smart alerts for unusual file activity",
            "AI recommendations for archiving",
            "Automated content-based tagging",
            "AI-powered virtual data room creation",
            "Document comment sentiment analysis",
            "AI insights into content usage",
            "Smart 'what's changed' version comparison",
            "AI-powered knowledge discovery",
            "Automated on-demand file conversion"
          ]
        }
      ]
    },
    "Writer": {
      sections: [
        {
          title: "Documents",
          icon: <FileText className="w-4 h-4" />,
          items: ["My Documents", "Recent Documents", "Shared Documents", "Templates", "Drafts"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Real-time Editing", "Comments", "Suggestions", "Track Changes", "Document Sharing"]
        },
        {
          title: "Formatting",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Text Formatting", "Styles", "Headers & Footers", "Tables", "Images & Media"]
        },
        {
          title: "Review",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Spell Check", "Grammar Check", "Document Review", "Version History", "Approval Workflow"]
        },
        {
          title: "Export",
          icon: <Download className="w-4 h-4" />,
          items: ["PDF Export", "Word Export", "HTML Export", "Print Options", "Batch Export"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Document Settings", "Sharing Permissions", "Auto-save Settings", "Language Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Document templates",
            "Rich text formatting",
            "Spell check & grammar",
            "Insert images & tables",
            "Download as PDF/DOCX"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time collaborative editing",
            "Track changes & commenting",
            "Integrated document signing",
            "Document merge feature",
            "AI-powered writing assistant"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Solving document version control",
            "Streamlining document reviews",
            "Fixing spelling and grammar errors",
            "Getting documents legally signed",
            "Creating personalized bulk documents",
            "Improving document readability",
            "Preventing lost work with auto-save",
            "Automating form filling",
            "Working on documents from any device",
            "Finalizing and locking documents"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "Zia: AI writing assistant",
            "AI-powered document summarization",
            "Smart compose & sentence completion",
            "AI-based tone analysis",
            "Automated content generation",
            "AI-powered research assistant",
            "Plagiarism checker",
            "AI suggestions for word choice",
            "Automated document translation",
            "Natural language editing commands",
            "AI 'ask your document' feature",
            "Smart template recommendations",
            "AI-based formatting suggestions",
            "Automated table of contents",
            "AI acronym & definition finder",
            "Predictive text that learns your style",
            "AI-driven internal linking suggestions",
            "Automated sensitive data masking",
            "AI analysis of document engagement",
            "Smart content repurposing"
          ]
        }
      ]
    },
    "Sheet": {
      sections: [
        {
          title: "Spreadsheets",
          icon: <Table className="w-4 h-4" />,
          items: ["My Spreadsheets", "Recent Sheets", "Shared Sheets", "Templates", "Drafts"]
        },
        {
          title: "Data",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Import", "Data Validation", "Pivot Tables", "Charts & Graphs", "Data Analysis"]
        },
        {
          title: "Functions",
          icon: <Calculator className="w-4 h-4" />,
          items: ["Formula Builder", "Function Library", "Custom Functions", "Array Formulas"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Real-time Editing", "Comments", "Sheet Sharing", "Permission Management"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Macros", "Scripts", "Auto-fill", "Conditional Formatting", "Data Triggers"]
        },
        {
          title: "Export",
          icon: <Download className="w-4 h-4" />,
          items: ["Excel Export", "CSV Export", "PDF Export", "Chart Export", "Print Options"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Formula library",
            "Conditional formatting",
            "Data validation rules",
            "Chart creation",
            "Freeze panes"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Pivot tables",
            "Real-time collaboration",
            "Custom scripts & macros",
            "AI assistant (Zia)",
            "External data integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Analyzing large datasets",
            "Collaborating on budgets and plans",
            "Preventing incorrect data entry",
            "Automating repetitive spreadsheet tasks",
            "Finding hidden insights in data",
            "Creating professional charts easily",
            "Connecting to external data sources",
            "Combining data from multiple sheets",
            "Remembering complex formulas",
            "Tracking changes from collaborators"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "Zia: AI assistant",
            "AI-powered data cleansing",
            "Natural language querying",
            "AI formula suggestions",
            "Predictive data forecasting",
            "Automated anomaly detection",
            "AI-powered goal seeking",
            "Smart fill for data entry",
            "AI-generated data narratives",
            "Automated data validation suggestions",
            "AI recommendations for data joins",
            "Smart data clustering",
            "AI-powered 'what-if' analysis",
            "Text sentiment analysis",
            "AI suggestions for conditional formatting",
            "Automated dashboard creation",
            "AI-powered data enrichment",
            "Smart outlier detection",
            "AI assistance for custom scripts",
            "In-sheet predictive modeling"
          ]
        }
      ]
    },
    "Show": {
      sections: [
        {
          title: "Presentations",
          icon: <Monitor className="w-4 h-4" />,
          items: ["My Presentations", "Recent Presentations", "Shared Presentations", "Templates", "Drafts"]
        },
        {
          title: "Design",
          icon: <Palette className="w-4 h-4" />,
          items: ["Slide Layouts", "Themes", "Master Slides", "Animation Effects", "Transitions"]
        },
        {
          title: "Media",
          icon: <Image className="w-4 h-4" />,
          items: ["Images", "Videos", "Audio", "Charts", "Icons", "Stock Media"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Real-time Editing", "Comments", "Presenter Notes", "Review Mode", "Sharing"]
        },
        {
          title: "Present",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["Slideshow Mode", "Presenter View", "Remote Control", "Broadcast", "Record Presentation"]
        },
        {
          title: "Export",
          icon: <Download className="w-4 h-4" />,
          items: ["PDF Export", "PowerPoint Export", "Image Export", "Video Export", "Print"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Presentation templates",
            "Rich text & shape tools",
            "Transitions & animations",
            "Image & icon library",
            "Presenter view"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time collaboration",
            "Live broadcast to remote audience",
            "Embed live charts",
            "Centralized brand library",
            "PowerPoint compatibility"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Avoiding unprofessional designs",
            "Collaborating on a team presentation",
            "Presenting to a remote audience",
            "Maintaining brand consistency",
            "Updating charts automatically",
            "Remembering key points while presenting",
            "Finding engaging visuals",
            "Sharing presentations after a meeting",
            "Making presentations interactive",
            "Avoiding starting from scratch"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI presentation generation",
            "AI-driven slide design suggestions",
            "Smart image recommendations",
            "AI suggestions for animations",
            "Automated element alignment",
            "AI-powered speaker notes",
            "Grammar and spelling checks",
            "AI recommendations for color/fonts",
            "Natural language editing commands",
            "AI 'design makeover' feature",
            "Automated presentation summary",
            "AI presentation practice coach",
            "Smart content summarization",
            "AI-powered cross-presentation search",
            "Automated chart creation",
            "AI suggestions for visuals over text",
            "Predictive engagement analysis",
            "AI-powered template autofill",
            "Automated branding compliance",
            "AI-generated poll questions"
          ]
        }
      ]
    },
    "Notebook": {
      sections: [
        {
          title: "Notebooks",
          icon: <BookOpen className="w-4 h-4" />,
          items: ["My Notebooks", "Shared Notebooks", "Recent Notes", "Favorites", "Archived"]
        },
        {
          title: "Notes",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Create Note", "Text Notes", "Audio Notes", "Photo Notes", "Sketch Notes"]
        },
        {
          title: "Organization",
          icon: <Folder className="w-4 h-4" />,
          items: ["Tags", "Categories", "Search", "Filters", "Quick Access"]
        },
        {
          title: "Collaboration",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Share Notebooks", "Team Notes", "Comments", "Real-time Sync"]
        },
        {
          title: "Sync",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["Cloud Sync", "Offline Access", "Multi-device Sync", "Backup"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Different note types",
            "Notebooks & tags",
            "Web clipper",
            "Note reminders",
            "Cross-device sync"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Search within images/PDFs (OCR)",
            "Note sharing & collaboration",
            "Smart Cards auto-formatting",
            "Password protection",
            "Integration with other Zoho apps"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Capturing ideas on the go",
            "Organizing messy notes",
            "Finding old information",
            "Saving web articles",
            "Combining different content types",
            "Collaborating on research",
            "Remembering to act on a note",
            "Unlocking info from images",
            "Keeping notes secure",
            "Accessing notes offline"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered smart search",
            "Automated note tagging",
            "AI summarization of notes",
            "Zia assistant for related notes",
            "AI audio transcription",
            "Smart notebook suggestions",
            "AI OCR for handwriting",
            "Smart Card for any content",
            "AI 'knowledge graph' of notes",
            "Predictive search suggestions",
            "AI-driven contextual reminders",
            "Automated duplicate note detection",
            "AI-generated flashcards",
            "Smart adaptive templates",
            "AI grammar & spelling correction",
            "Automated content linking",
            "AI mind map generation",
            "Smart action item extraction",
            "AI insights into note habits",
            "Automated web clip categorization"
          ]
        }
      ]
    },
    "Sign": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Document Overview", "Pending Signatures", "Completed Documents", "Recent Activity"]
        },
        {
          title: "Documents",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Documents", "Draft Documents", "In Progress", "Completed", "Templates"]
        },
        {
          title: "Send for Signature",
          icon: <Send className="w-4 h-4" />,
          items: ["Upload Document", "Add Recipients", "Set Signature Fields", "Customize Message"]
        },
        {
          title: "Sign Documents",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Pending Signatures", "Digital Signature", "Initial & Date", "Fill Forms"]
        },
        {
          title: "Templates",
          icon: <Copy className="w-4 h-4" />,
          items: ["Document Templates", "Signature Templates", "Reusable Fields", "Template Library"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Signature Analytics", "Document Status", "Audit Trail", "Compliance Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Upload any document",
            "Drag & drop signature fields",
            "Send to multiple recipients",
            "Email status notifications",
            "Mobile signing app"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Legally binding e-signatures",
            "Complete document audit trail",
            "CRM & HR system integration",
            "Bulk sending to many people",
            "Reusable document templates"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Replacing print-sign-scan workflows",
            "Getting signatures from remote parties",
            "Ensuring legal validity of documents",
            "Tracking document status",
            "Standardizing frequently used contracts",
            "Following up on unsigned documents",
            "Signing documents on a phone",
            "Collecting data on forms",
            "Integrating signing into business processes",
            "Storing signed documents securely"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI document scanning & field detection",
            "Smart signature field suggestions",
            "AI analysis of document risk",
            "Predictive 'time-to-sign' analysis",
            "AI-driven identity verification",
            "Automated document summarization",
            "Natural language document search",
            "AI-powered smart reminders",
            "Automated data extraction from forms",
            "AI fraudulent signature detection",
            "Smart template recommendations",
            "AI 'readability score' for contracts",
            "Automated contract version comparison",
            "AI chatbot for signer guidance",
            "Predictive workflow bottleneck analysis",
            "AI suggestions for template improvement",
            "Automated document categorization",
            "AI-powered signature verification",
            "Smart expiration alerts",
            "AI-based clause localization"
          ]
        }
      ]
    },
    "Assist": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Support Overview", "Active Sessions", "Performance Metrics", "Recent Activities"]
        },
        {
          title: "Remote Support",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Screen Sharing", "Remote Control", "File Transfer", "Multi-monitor Support"]
        },
        {
          title: "Sessions",
          icon: <Users className="w-4 h-4" />,
          items: ["Current Sessions", "Scheduled Sessions", "Session History", "Session Recording"]
        },
        {
          title: "Chat Support",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Live Chat", "Chat History", "File Sharing", "Screen Annotation"]
        },
        {
          title: "Tools",
          icon: <Settings className="w-4 h-4" />,
          items: ["System Information", "Diagnostic Tools", "Performance Monitor", "Registry Editor"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Session Reports", "Performance Reports", "Usage Analytics", "Customer Satisfaction"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "On-demand remote support",
            "File transfer",
            "In-session chat",
            "Reboot and reconnect",
            "Multi-monitor support"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Unattended remote access",
            "Screen sharing for demos",
            "Session recording",
            "Cross-platform support",
            "Mass deployment of agents"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Troubleshooting remote computers",
            "Guiding non-technical users",
            "Managing fleets of computers",
            "Getting files from a remote PC",
            "Training customers on software",
            "Ensuring remote access is secure",
            "Supporting different operating systems",
            "Keeping a record of support sessions",
            "Diagnosing issues without interruption",
            "Integrating support with a help desk"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered screen OCR",
            "Smart diagnostic suggestions",
            "AI analysis of session recordings",
            "Automated session summaries",
            "AI-driven AR remote assistance",
            "Predictive device support needs",
            "AI troubleshooting chatbot",
            "Natural language technician commands",
            "AI performance anomaly detection",
            "Automated screen redaction",
            "AI-powered chat translation",
            "Smart technician scheduling",
            "AI knowledge base recommendations",
            "Predictive session duration analysis",
            "AI-powered 'show me' guidance",
            "Automated session categorization",
            "AI-based voice-to-text for notes",
            "Smart security risk alerts",
            "AI-optimized screen quality",
            "Automated post-session surveys"
          ]
        }
      ]
    },
    "Lens": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["AR Overview", "Active Sessions", "Device Status", "Recent Activities"]
        },
        {
          title: "AR Sessions",
          icon: <Eye className="w-4 h-4" />,
          items: ["Start AR Session", "Join Session", "Session Library", "Session Recording"]
        },
        {
          title: "Annotations",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["3D Annotations", "Voice Notes", "Drawing Tools", "Measurement Tools"]
        },
        {
          title: "Knowledge Base",
          icon: <BookOpen className="w-4 h-4" />,
          items: ["AR Guides", "Step-by-step Instructions", "Video Tutorials", "Documentation"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Multi-user Sessions", "Expert Assistance", "Real-time Sharing", "Team Collaboration"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Usage Analytics", "Performance Metrics", "Session Analysis", "ROI Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Live camera streaming",
            "On-screen annotations",
            "In-session chat & audio",
            "Freeze frame",
            "Flashlight control"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "3D object annotation",
            "Smart glass integration",
            "Session recording",
            "Optical Character Recognition (OCR)",
            "Help desk integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Troubleshooting remote machinery",
            "Explaining complex physical repairs",
            "Reducing expert travel costs",
            "Documenting repair processes",
            "Reading serial numbers remotely",
            "Enabling hands-free operation",
            "Providing immediate visual context",
            "Training new technicians",
            "Avoiding miscommunication in repairs",
            "Integrating AR into service workflows"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI object recognition",
            "Automated step-by-step AR guidance",
            "AI analysis of session recordings",
            "Smart annotation suggestions",
            "AI-based language translation",
            "Predictive maintenance alerts",
            "AI-powered digital twin overlays",
            "Automated session summaries",
            "Natural language technician commands",
            "AI noise cancellation",
            "Smart video stabilization",
            "AI-driven OCR parsing",
            "Predictive repair time analysis",
            "AI-powered expert routing",
            "Automated safety warnings",
            "AI tool and parts recommendations",
            "Image-based knowledge search",
            "AI analysis of technician performance",
            "Automated training module creation",
            "AI 'best next step' suggestions"
          ]
        }
      ]
    },
    "Sites": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Site Overview", "Traffic Analytics", "Performance Metrics", "Recent Updates"]
        },
        {
          title: "Sites",
          icon: <Globe className="w-4 h-4" />,
          items: ["All Sites", "Published Sites", "Draft Sites", "Site Templates", "Mobile Sites"]
        },
        {
          title: "Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Page Builder", "Design Elements", "Layouts", "Widgets", "Custom Code"]
        },
        {
          title: "Content",
          icon: <FileText className="w-4 h-4" />,
          items: ["Pages", "Blog Posts", "Media Library", "Forms", "SEO Settings"]
        },
        {
          title: "E-commerce",
          icon: <Package className="w-4 h-4" />,
          items: ["Online Store", "Products", "Orders", "Payment Settings", "Inventory"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Traffic Reports", "Visitor Analytics", "Conversion Tracking", "SEO Performance"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Domain Settings", "SSL Certificates", "Backup", "Performance Optimization"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Website templates",
            "Drag-and-drop builder",
            "Stock image gallery",
            "Built-in contact forms",
            "Mobile-responsive designs"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Integrated blogging platform",
            "E-commerce capabilities",
            "Built-in SEO tools",
            "Password-protected pages",
            "CRM & marketing integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Building a website with no code",
            "Ensuring sites look good on mobile",
            "Ranking on search engines",
            "Adding a blog to a website",
            "Selling products simply online",
            "Capturing leads from a website",
            "Creating private member areas",
            "Finding quality images",
            "Understanding website traffic",
            "Ensuring a fast, reliable website"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered website generation",
            "AI design assistant",
            "Smart content suggestions",
            "AI-based SEO recommendations",
            "Automated image selection",
            "AI blog post idea generator",
            "AI-powered A/B testing",
            "AI website personalization",
            "Predictive conversion analysis",
            "Addable AI chatbot",
            "Automated accessibility checks",
            "AI-driven logo maker",
            "Smart template recommendations",
            "AI predictive heatmaps",
            "Automated meta description generation",
            "AI copy editing suggestions",
            "Natural language editing commands",
            "AI competitor website analysis",
            "Smart performance alerts",
            "AI-generated e-commerce descriptions"
          ]
        }
      ]
    },
    "Creator": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["App Overview", "Usage Analytics", "Performance Stats", "Recent Activities"]
        },
        {
          title: "Applications",
          icon: <Code className="w-4 h-4" />,
          items: ["My Apps", "Published Apps", "Draft Apps", "App Templates", "Shared Apps"]
        },
        {
          title: "Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Form Builder", "Report Builder", "Workflow Builder", "Page Builder", "Script Editor"]
        },
        {
          title: "Data",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Management", "Import/Export", "Data Validation", "Relationships", "Lookup Fields"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Workflows", "Triggers", "Scheduled Actions", "Email Notifications", "Webhooks"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["API Access", "Third-party Integrations", "Zapier", "Custom Connections"]
        },
        {
          title: "Publishing",
          icon: <Upload className="w-4 h-4" />,
          items: ["App Deployment", "User Management", "Access Control", "Mobile Apps"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Drag-and-drop app builder",
            "Data collection forms",
            "Reports and dashboards",
            "Pre-built app templates",
            "Automatic mobile apps"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Deluge scripting language",
            "Integration with other apps",
            "Advanced user management",
            "Cross-platform deployment",
            "Scalable cloud hosting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Building apps for unique processes",
            "Replacing spreadsheet-based systems",
            "Empowering business users to build tools",
            "Digitizing manual, paper processes",
            "Creating mobile apps for field staff",
            "Integrating disparate cloud services",
            "Controlling access to sensitive data",
            "Accelerating app development",
            "Visualizing business data",
            "Managing app hosting and maintenance"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI app generation from text/sheets",
            "Zia: AI data assistant",
            "AI suggestions for app improvement",
            "Smart data cleansing on import",
            "AI-powered OCR for form creation",
            "Predictive analytics in reports",
            "AI code completion for Deluge",
            "Automated dashboard generation",
            "AI app performance monitoring",
            "Natural language form building",
            "AI security vulnerability scanning",
            "Smart relationship suggestions",
            "AI user behavior analytics",
            "Automated app translation",
            "AI template recommendations",
            "Sentiment analysis of user feedback",
            "AI-powered 'what-if' analysis",
            "Automated redundant workflow detection",
            "AI-assisted platform migration",
            "Embeddable AI chatbot for apps"
          ]
        }
      ]
    },
    "Flow": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Automation Overview", "Active Workflows", "Execution Stats", "Recent Activities"]
        },
        {
          title: "Workflows",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["My Workflows", "Shared Workflows", "Workflow Templates", "Draft Workflows"]
        },
        {
          title: "Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Visual Builder", "Triggers", "Actions", "Conditions", "Functions"]
        },
        {
          title: "Executions",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["Execution History", "Failed Executions", "Scheduled Executions", "Real-time Monitoring"]
        },
        {
          title: "Connections",
          icon: <Link2 className="w-4 h-4" />,
          items: ["App Connections", "API Integrations", "Webhooks", "Custom Connections"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Account Settings", "Team Management", "Usage Limits", "Security Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Visual workflow builder",
            "Pre-built app connectors",
            "Simple triggers and actions",
            "Workflow execution history",
            "On/off toggle for flows"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-step flows with logic",
            "Custom scripting with Deluge",
            "Webhook support",
            "Scheduled flows",
            "Team collaboration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automating data syncing between apps",
            "Consolidating important notifications",
            "Automating multi-app processes",
            "Eliminating repetitive data entry",
            "Connecting apps that don't integrate",
            "Automating manual business processes",
            "Handling complex business logic",
            "Creating a central activity log",
            "Automating onboarding workflows",
            "Distributing form data to multiple apps"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered workflow suggestions",
            "AI-based field mapping",
            "Natural language flow creation",
            "AI-driven error handling",
            "Predictive workflow success analysis",
            "AI-powered data transformation",
            "Smart infinite loop detection",
            "AI recommendations for optimization",
            "Automated flow documentation",
            "AI-powered webhook data parsing",
            "Sentiment analysis for workflow triggers",
            "AI content summarization for notifications",
            "Smart flow scheduling",
            "AI pattern recognition for new automations",
            "Automated flow testing",
            "AI-powered flow debugger",
            "Smart data validation in flows",
            "AI-generated Deluge scripts",
            "Predictive API cost analysis",
            "AI 'what-if' analysis for logic"
          ]
        }
      ]
    },
    "DataPrep": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Data Overview", "Processing Stats", "Recent Datasets", "Quick Actions"]
        },
        {
          title: "Datasets",
          icon: <Database className="w-4 h-4" />,
          items: ["My Datasets", "Shared Datasets", "Data Sources", "Import Data"]
        },
        {
          title: "Preparation",
          icon: <Filter className="w-4 h-4" />,
          items: ["Data Cleaning", "Transform Data", "Merge Datasets", "Data Validation"]
        },
        {
          title: "Recipes",
          icon: <Code className="w-4 h-4" />,
          items: ["Transformation Recipes", "Recipe Templates", "Custom Functions", "Recipe History"]
        },
        {
          title: "Export",
          icon: <Download className="w-4 h-4" />,
          items: ["Export Data", "Schedule Exports", "Export Formats", "Data Publishing"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Data Sources", "Performance Settings", "Security"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Import data from various sources",
            "Visual data transformation",
            "Library of transform functions",
            "Data quality monitoring",
            "Export cleaned data"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated data pipelines",
            "Smart data blending",
            "Data catalog for governance",
            "Advanced data quality rules",
            "Team collaboration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Cleaning messy and inconsistent data",
            "Automating data prep for BI tools",
            "Combining data from different systems",
            "Enabling self-service data prep",
            "Ensuring ongoing data quality",
            "Understanding new datasets quickly",
            "Finding and trusting the right data",
            "Transforming data without code",
            "Migrating data between systems",
            "Collaborating on data prep tasks"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered data cleaning suggestions",
            "Automated data type detection",
            "AI recommendations for joining data",
            "Smart duplicate record detection",
            "AI-powered data enrichment",
            "Natural language data transformation",
            "AI-driven data quality scoring",
            "Predictive data pipeline analytics",
            "AI-based anomaly detection in data",
            "Smart parsing of unstructured data",
            "AI suggestions for validation rules",
            "Automated data catalog generation",
            "AI recommendations for data security",
            "Smart pattern recognition",
            "AI-assisted expression writing",
            "Predictive data quality alerts",
            "AI 'what-if' analysis for transforms",
            "Automated schema mapping",
            "AI-driven data lineage analysis",
            "Smart suggestions for pipeline optimization"
          ]
        }
      ]
    },
    "Vault": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Password Overview", "Security Score", "Recent Activities", "Alerts"]
        },
        {
          title: "Passwords",
          icon: <Key className="w-4 h-4" />,
          items: ["All Passwords", "Favorites", "Weak Passwords", "Duplicate Passwords", "Recently Used"]
        },
        {
          title: "Secure Notes",
          icon: <Lock className="w-4 h-4" />,
          items: ["Personal Notes", "Business Notes", "Credit Cards", "Bank Accounts", "Documents"]
        },
        {
          title: "Sharing",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Shared Items", "Emergency Access", "Team Sharing", "Secure Sharing"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Two-Factor Auth", "Security Audit", "Breach Monitoring", "Password Generator"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Account Settings", "Security Settings", "Backup & Sync", "Browser Extensions"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Password generator",
            "Browser autofill extensions",
            "Secure notes",
            "Folders for organization",
            "Mobile app access"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Secure password sharing",
            "Emergency access",
            "Security dashboard",
            "Data breach monitoring",
            "Two-factor authentication support"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Stopping use of weak passwords",
            "Ending the cycle of forgotten passwords",
            "Sharing passwords securely",
            "Planning for emergency access",
            "Discovering if passwords are breached",
            "Storing sensitive notes securely",
            "Accessing passwords on the go",
            "Assessing overall password health",
            "Preventing phishing attacks",
            "Managing passwords for a team"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI password strength analysis",
            "Smart phishing website alerts",
            "AI-driven password categorization",
            "Predictive password breach alerts",
            "AI-powered password importer",
            "Automated password changer",
            "AI-based personalized security tips",
            "Natural language password search",
            "AI detection of weak passwords",
            "Smart grouping of related accounts",
            "AI-driven security posture summary",
            "Automated email scanning for new accounts",
            "AI-based 2FA code organization",
            "Predictive analysis of critical accounts",
            "AI guidance for emergency access setup",
            "Smart public Wi-Fi warnings",
            "AI-generated secure security questions",
            "Automated compromised password checks",
            "AI-powered digital legacy planning",
            "Smart login anomaly detection"
          ]
        }
      ]
    },
    "OneAuth": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Authentication Overview", "Login Analytics", "Security Alerts", "Recent Activities"]
        },
        {
          title: "Multi-Factor Auth",
          icon: <Shield className="w-4 h-4" />,
          items: ["Authenticator Apps", "SMS Verification", "Email Verification", "Hardware Tokens"]
        },
        {
          title: "Applications",
          icon: <Grid className="w-4 h-4" />,
          items: ["Connected Apps", "SSO Applications", "App Directory", "Custom Apps"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["User Management", "User Groups", "Access Policies", "Login History"]
        },
        {
          title: "Security",
          icon: <Lock className="w-4 h-4" />,
          items: ["Security Policies", "Risk Assessment", "Compliance Reports", "Audit Logs"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Organization Settings", "Authentication Policies", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Time-based one-time passwords",
            "One-tap push notifications",
            "QR code account setup",
            "Secure account backup",
            "Support for multiple services"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Single Sign-On (SSO)",
            "Passwordless login",
            "Offline TOTP access",
            "Centralized admin policies",
            "Active Directory integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Strengthening password security",
            "Reducing password fatigue with SSO",
            "Simplifying the login process",
            "Recovering from a lost phone",
            "Getting 2FA codes while offline",
            "Managing employee app access",
            "Protecting against phishing",
            "Eliminating daily login hassles",
            "Streamlining user provisioning",
            "Securing cloud and on-premise apps"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI risk-based authentication",
            "Behavioral biometrics",
            "AI-driven suspicious login alerts",
            "Smart phishing attempt detection",
            "AI security policy recommendations",
            "Automated user provisioning suggestions",
            "Natural language admin queries",
            "AI analysis of auth logs",
            "Predictive user compromise risk",
            "Smart application grouping",
            "AI-powered organization security score",
            "Automated credential stuffing detection",
            "AI guidance for MFA setup",
            "Smart session timeout reminders",
            "AI 'identity guardian' for dark web",
            "Context-aware authentication",
            "AI passwordless adoption analysis",
            "Automated SSO usage analysis",
            "AI chatbot for user support",
            "Smart account recovery options"
          ]
        }
      ]
    },
    "Directory": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Organization Overview", "User Activity", "Device Status", "Security Summary"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["All Users", "User Profiles", "User Groups", "Organizational Units", "User Import"]
        },
        {
          title: "Devices",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["All Devices", "Device Groups", "Device Policies", "Device Compliance"]
        },
        {
          title: "Applications",
          icon: <Grid className="w-4 h-4" />,
          items: ["App Management", "App Deployment", "App Policies", "App Usage Analytics"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Access Control", "Security Policies", "Threat Detection", "Compliance Monitoring"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["User Reports", "Device Reports", "Security Reports", "Compliance Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central user directory",
            "User password self-service",
            "Basic user provisioning",
            "Company app launcher",
            "Login audit logs"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Single Sign-On (SSO)",
            "Multi-Factor Authentication (MFA)",
            "Security policy enforcement",
            "Mobile Device Management (MDM)",
            "Automated HR integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing user accounts everywhere",
            "Solving employee password fatigue",
            "Automating new hire account setup",
            "Instantly revoking ex-employee access",
            "Enforcing strong password policies",
            "Securing lost or stolen devices",
            "Granting role-based app access",
            "Auditing 'who has access to what'",
            "Simplifying access to work apps",
            "Syncing users from an HR system"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered risk-based access",
            "Behavioral analytics for security",
            "AI user-to-group recommendations",
            "Smart 'shadow IT' detection",
            "AI analysis of audit logs",
            "Predictive user risk scoring",
            "Automated access review campaigns",
            "AI security policy recommendations",
            "Natural language admin search",
            "AI-powered access request approvals",
            "Smart dormant account identification",
            "AI insights for license optimization",
            "Impossible travel login detection",
            "AI chatbot for user self-service",
            "Predictive access needs modeling",
            "AI 'least privilege' recommendations",
            "Smart user behavior grouping",
            "AI phishing simulation integration",
            "Automated compliance report generation",
            "AI insights on identity lifecycle"
          ]
        }
      ]
    },
    "MDM": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Device Overview", "Enrollment Stats", "Compliance Status", "Recent Activities"]
        },
        {
          title: "Devices",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["All Devices", "iOS Devices", "Android Devices", "Windows Devices", "Device Groups"]
        },
        {
          title: "Enrollment",
          icon: <UserCheck className="w-4 h-4" />,
          items: ["Device Enrollment", "Enrollment Policies", "Enrollment Templates", "Bulk Enrollment"]
        },
        {
          title: "Policies",
          icon: <FileText className="w-4 h-4" />,
          items: ["Device Policies", "App Policies", "Security Policies", "Compliance Policies"]
        },
        {
          title: "Applications",
          icon: <Package className="w-4 h-4" />,
          items: ["App Management", "App Distribution", "App Store", "Enterprise Apps"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Device Security", "Remote Actions", "Location Tracking", "Threat Protection"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Device Reports", "Compliance Reports", "Security Reports", "Usage Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Device inventory view",
            "Enforce passcode policy",
            "Distribute Wi-Fi profiles",
            "View device info",
            "Remotely lock a device"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Remote device wipe",
            "Enterprise app store",
            "Kiosk mode",
            "Automated device enrollment",
            "Compliance rule enforcement"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Securing lost or stolen phones",
            "Managing 'Bring Your Own Device' (BYOD)",
            "Setting up new company phones in bulk",
            "Distributing required apps to devices",
            "Securing Wi-Fi connections",
            "Preventing malicious app installs",
            "Tracking company-owned devices",
            "Locking down single-purpose devices",
            "Proving device security compliance",
            "Retiring a device securely"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered malware detection",
            "Predictive battery health analysis",
            "AI security policy recommendations",
            "Behavioral analytics for threat detection",
            "Smart compliance alerts",
            "AI-powered geofencing suggestions",
            "Automated app risk classification",
            "Natural language admin search",
            "AI optimization of app updates",
            "Predictive data usage analysis",
            "AI-powered device troubleshooting",
            "Smart device grouping",
            "AI analysis of app permissions",
            "Automated enrollment workflow suggestions",
            "AI-powered 'lost device' mode",
            "Predictive device failure analysis",
            "AI recommendations for app blacklists",
            "Automated executive security reports",
            "AI chatbot for employee self-service",
            "Smart SIM card change detection"
          ]
        }
      ]
    },
    "Learn": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Learning Overview", "Progress Tracking", "Course Analytics", "Recent Activities"]
        },
        {
          title: "Courses",
          icon: <GraduationCap className="w-4 h-4" />,
          items: ["All Courses", "My Courses", "Course Catalog", "Course Creation", "Course Library"]
        },
        {
          title: "Learning Paths",
          icon: <Map className="w-4 h-4" />,
          items: ["Learning Paths", "Skill Tracks", "Certification Programs", "Custom Paths"]
        },
        {
          title: "Assessments",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Quizzes", "Assignments", "Exams", "Certifications", "Skill Assessments"]
        },
        {
          title: "Social Learning",
          icon: <Users className="w-4 h-4" />,
          items: ["Discussion Forums", "Study Groups", "Peer Reviews", "Knowledge Sharing"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Learning Analytics", "Progress Reports", "Performance Metrics", "ROI Analysis"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create courses with lessons",
            "Central course catalog",
            "Track course completion",
            "Course discussion forums",
            "Completion certificates"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Structured learning paths",
            "Blended learning support",
            "Advanced skills reporting",
            "HR system integration",
            "Customizable learning portal"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Organizing scattered training content",
            "Standardizing new hire onboarding",
            "Tracking compliance training",
            "Increasing employee engagement",
            "Measuring training impact",
            "Creating employee development plans",
            "Training a remote workforce",
            "Assessing knowledge retention",
            "Managing online & classroom training",
            "Keeping training content updated"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI course recommendations",
            "AI-driven learning path generation",
            "Automated quiz generation",
            "AI analysis of discussion forums",
            "Predictive 'at-risk' learner analysis",
            "AI chatbot for course discovery",
            "Smart external content curation",
            "AI-based skill gap analysis",
            "Natural language content search",
            "AI video transcription & summarization",
            "Personalized adaptive learning",
            "AI recommendations for course improvement",
            "Automated course-to-competency mapping",
            "AI 'learning coach' for motivation",
            "Predictive analysis of training ROI",
            "Smart plagiarism detection",
            "AI-powered course outline generation",
            "Automated course material translation",
            "AI analysis of assessment results",
            "Smart scheduling for blended learning"
          ]
        }
      ]
    },
    "TeamInbox": {
      sections: [
        {
          title: "Inbox",
          icon: <Inbox className="w-4 h-4" />,
          items: ["Shared Inbox", "Unassigned", "My Messages", "High Priority", "Archived"]
        },
        {
          title: "Channels",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Email Channels", "Social Channels", "Chat Channels", "Custom Channels"]
        },
        {
          title: "Team Management",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Members", "Assignment Rules", "Workload Distribution", "Performance Tracking"]
        },
        {
          title: "Templates",
          icon: <Copy className="w-4 h-4" />,
          items: ["Response Templates", "Email Templates", "Canned Responses", "Signature Templates"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Auto-assignment", "Auto-responses", "Workflow Rules", "Escalation Rules"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Response Time", "Team Performance", "Volume Analytics", "Customer Satisfaction"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Shared inboxes",
            "Assign conversations",
            "Internal comments",
            "Collision detection",
            "Snooze conversations"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated assignment rules",
            "Team performance analytics",
            "CRM & help desk integration",
            "SLA management",
            "Shared email drafts"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Preventing duplicate replies",
            "Ensuring no email is missed",
            "Discussing emails without leaving the inbox",
            "Understanding team performance",
            "Automating email sorting",
            "Answering common questions faster",
            "Meeting reply time goals (SLAs)",
            "Onboarding new team members",
            "Tracking who did what",
            "Collaborating on important replies"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered email assignment",
            "Email sentiment analysis",
            "AI-generated smart replies",
            "Automated conversation tagging",
            "AI-based thread summarization",
            "Predictive SLA breach analysis",
            "AI-powered spam filtering",
            "Natural language conversation search",
            "AI insights into team performance",
            "Smart duplicate conversation detection",
            "AI recommendations for new templates",
            "Automated key information extraction",
            "AI-powered communication tone checker",
            "Predictive escalation analysis",
            "AI-based language detection",
            "Smart @mention suggestions",
            "AI knowledge base assistant",
            "Automated follow-up reminders",
            "AI analysis of customer satisfaction",
            "Smart alerts for VIP emails"
          ]
        }
      ]
    },
    "Sprints": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Sprint Overview", "Team Velocity", "Burndown Charts", "Sprint Progress"]
        },
        {
          title: "Backlog",
          icon: <List className="w-4 h-4" />,
          items: ["Product Backlog", "Sprint Backlog", "Epic Management", "Story Mapping"]
        },
        {
          title: "Sprints",
          icon: <Timer className="w-4 h-4" />,
          items: ["Active Sprints", "Sprint Planning", "Sprint Review", "Sprint Retrospective"]
        },
        {
          title: "Scrum Board",
          icon: <Grid className="w-4 h-4" />,
          items: ["Kanban Board", "Task Management", "Workflow Stages", "Custom Workflows"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Velocity Reports", "Burndown Reports", "Sprint Reports", "Team Performance"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Project Settings", "Team Configuration", "Workflow Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Product backlog",
            "Sprint planning board",
            "Scrum board",
            "Burndown chart",
            "Story point estimation"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Epic management",
            "Release planner",
            "Team velocity charts",
            "Code repository integration",
            "Stakeholder portal"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing feature requests",
            "Avoiding sprint overcommitment",
            "Gaining visibility into team's work",
            "Knowing if a sprint is on track",
            "Estimating tasks accurately",
            "Connecting work to business goals",
            "Reducing context switching for devs",
            "Planning future releases",
            "Improving team performance",
            "Keeping stakeholders informed"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered user story splitting",
            "Predictive sprint completion analysis",
            "AI-based story point estimation",
            "Smart alerts for blocked tasks",
            "AI-driven sprint planning recommendations",
            "Automated scope creep detection",
            "AI analysis of retrospective feedback",
            "Natural language user story creation",
            "AI suggestions for workflow improvement",
            "Predictive risk and dependency analysis",
            "Automated sprint review generation",
            "AI-powered 'sprint health' score",
            "Smart task allocation",
            "AI recommendations for backlog grooming",
            "Automated commit-to-story linking",
            "Comment sentiment analysis",
            "AI-powered release date forecasting",
            "Smart technical debt suggestions",
            "AI 'what-if' analysis for planning",
            "Automated identification of related bugs"
          ]
        }
      ]
    },
    "Bookings": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Booking Overview", "Today's Appointments", "Revenue Summary", "Customer Insights"]
        },
        {
          title: "Calendar",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Appointment Calendar", "Availability Settings", "Time Slots", "Recurring Appointments"]
        },
        {
          title: "Services",
          icon: <Package className="w-4 h-4" />,
          items: ["Service Catalog", "Service Pricing", "Service Duration", "Service Categories"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Directory", "Customer History", "Customer Communications", "Customer Feedback"]
        },
        {
          title: "Staff",
          icon: <UserCheck className="w-4 h-4" />,
          items: ["Staff Management", "Staff Schedules", "Staff Assignments", "Staff Performance"]
        },
        {
          title: "Payments",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Payment Processing", "Payment Methods", "Invoicing", "Payment Reports"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Booking Analytics", "Revenue Reports", "Customer Analytics", "Performance Metrics"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable booking page",
            "Set availability",
            "Automated email reminders",
            "Appointment calendar view",
            "Embed on your website"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Two-way calendar sync",
            "Accept online payments",
            "Group & class scheduling",
            "Multi-staff management",
            "Custom intake forms"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Eliminating email back-and-forth",
            "Reducing client no-shows",
            "Preventing double-bookings",
            "Collecting payment upfront",
            "Managing a team's schedule",
            "Scheduling different service types",
            "Gathering info before a meeting",
            "Allowing clients to self-reschedule",
            "Scheduling classes or workshops",
            "Integrating booking into a website"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI suggestions for optimal meeting times",
            "Smart scheduling to minimize calendar gaps",
            "AI analysis of booking patterns",
            "Automated follow-up email suggestions",
            "AI booking chatbot for websites",
            "Predictive no-show analysis",
            "AI recommendations for service pricing",
            "Natural language booking creation",
            "AI-powered 'buffer time' suggestions",
            "Automated timezone detection",
            "AI reminders for appointment preparation",
            "Smart routing of booking requests",
            "AI-generated booking activity summaries",
            "Predictive analysis of busy periods",
            "AI suggestions for new service offerings",
            "Automated analysis of cancellation reasons",
            "AI-driven lead scoring for bookings",
            "Smart duplicate client detection",
            "AI-powered waitlist management",
            "Automated testimonial requests"
          ]
        }
      ]
    },
    "Thrive": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Partner Overview", "Relationship Health", "Performance Metrics", "Recent Activities"]
        },
        {
          title: "Partners",
          icon: <Users className="w-4 h-4" />,
          items: ["All Partners", "Partner Profiles", "Partner Hierarchy", "Partner Onboarding"]
        },
        {
          title: "Opportunities",
          icon: <Target className="w-4 h-4" />,
          items: ["Deal Registration", "Partner Opportunities", "Pipeline Management", "Revenue Tracking"]
        },
        {
          title: "Programs",
          icon: <GraduationCap className="w-4 h-4" />,
          items: ["Partner Programs", "Certification Programs", "Training Materials", "Program Analytics"]
        },
        {
          title: "Marketing",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Co-marketing", "Marketing Resources", "Campaign Management", "Brand Guidelines"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Partner Performance", "Revenue Analytics", "Program Effectiveness", "ROI Reports"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Partner directory",
            "Marketing content library",
            "Partner communication tools",
            "Lead submission form",
            "Activity dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Deal registration system",
            "Partner portal",
            "Commission management",
            "Joint business planning",
            "CRM integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Preventing channel conflict",
            "Onboarding new partners efficiently",
            "Providing partners with marketing assets",
            "Tracking partner-sourced leads",
            "Calculating partner commissions",
            "Measuring partner performance",
            "Keeping partners engaged",
            "Training partners on products",
            "Collaborating on co-marketing",
            "Fostering a partner community"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered partner recruitment",
            "Predictive partner performance analysis",
            "AI-based lead scoring",
            "Smart marketing content recommendations",
            "AI analysis of partner performance",
            "Automated channel conflict detection",
            "AI chatbot for partner FAQs",
            "Partner communication sentiment analysis",
            "AI-generated QBR presentations",
            "Natural language resource search",
            "Predictive partner churn analysis",
            "AI recommendations for incentives",
            "Smart alerts for high-value deals",
            "AI-driven training recommendations",
            "Automated partner newsletter generation",
            "AI-powered 'partner health' score",
            "Smart partner-to-market matching",
            "AI analysis of top partner habits",
            "Predictive channel sales forecasting",
            "AI-powered co-marketing suggestions"
          ]
        }
      ]
    },
    "LandingPage": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Page Overview", "Conversion Analytics", "Traffic Stats", "Performance Summary"]
        },
        {
          title: "Pages",
          icon: <Globe className="w-4 h-4" />,
          items: ["All Pages", "Published Pages", "Draft Pages", "Page Templates", "Mobile Pages"]
        },
        {
          title: "Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Page Builder", "Design Elements", "Layout Templates", "Custom Code", "Media Library"]
        },
        {
          title: "Forms",
          icon: <FileText className="w-4 h-4" />,
          items: ["Lead Forms", "Contact Forms", "Subscription Forms", "Custom Forms", "Form Analytics"]
        },
        {
          title: "A/B Testing",
          icon: <Target className="w-4 h-4" />,
          items: ["Create Tests", "Running Tests", "Test Results", "Winner Selection", "Test History"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Conversion Analytics", "Traffic Sources", "Visitor Behavior", "Performance Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Domain Settings", "SEO Settings", "Integration Settings", "Publishing Options"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Landing page templates",
            "Drag-and-drop builder",
            "Built-in lead forms",
            "Stock image gallery",
            "Mobile-responsive designs"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "A/B testing",
            "Analytics integration",
            "Dynamic text replacement",
            "CRM & email integration",
            "Fast page hosting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Building landing pages without code",
            "Optimizing low conversion rates",
            "Matching ad copy to page content",
            "Automating lead export",
            "Fixing slow page load times",
            "Designing pages from scratch",
            "Ensuring pages are mobile-friendly",
            "Creating campaign pages quickly",
            "Understanding user behavior on page",
            "Reducing form abandonment"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered copy generation",
            "AI design & layout suggestions",
            "Predictive conversion analysis",
            "AI recommendations for A/B tests",
            "Smart A/B test traffic allocation",
            "AI-powered content personalization",
            "Automated image suggestions",
            "AI-generated trust signals",
            "Natural language page building",
            "AI competitor page analysis",
            "Predictive form abandonment analysis",
            "AI suggestions for speed improvement",
            "Automated meta description generation",
            "AI copy 'persuasiveness' score",
            "Embeddable smart chatbot",
            "AI page generation from URL",
            "Predictive lead scoring",
            "AI insights from visitor data",
            "Automated broken element detection",
            "AI recommendations for form length"
          ]
        }
      ]
    },
    "Commerce": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Store Overview", "Sales Dashboard", "Analytics Dashboard", "Performance Metrics", "Quick Actions"]
        },
        {
          title: "Products",
          icon: <Package className="w-4 h-4" />,
          items: ["All Products", "Add Product", "Categories", "Brands", "Variants", "Bulk Import", "Product Reviews", "Digital Products"]
        },
        {
          title: "Orders",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Orders", "Pending Orders", "Processing Orders", "Shipped Orders", "Delivered Orders", "Cancelled Orders", "Returns", "Refunds"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["All Customers", "Customer Groups", "Customer Reviews", "Wishlist", "Customer Analytics", "Loyalty Program"]
        },
        {
          title: "Inventory",
          icon: <Database className="w-4 h-4" />,
          items: ["Stock Management", "Low Stock Alerts", "Inventory Reports", "Stock Adjustments", "Warehouses", "Transfers"]
        },
        {
          title: "Marketing",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Campaigns", "Coupons & Discounts", "Email Marketing", "SEO Tools", "Social Media", "Abandoned Cart Recovery"]
        },
        {
          title: "Payments",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Payment Methods", "Transaction History", "Payment Reports", "Gateway Settings", "Refund Management"]
        },
        {
          title: "Shipping",
          icon: <Truck className="w-4 h-4" />,
          items: ["Shipping Methods", "Shipping Zones", "Shipping Labels", "Tracking", "Shipping Reports", "Carriers"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Sales Reports", "Product Reports", "Customer Reports", "Inventory Reports", "Financial Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Store Settings", "Payment Settings", "Shipping Settings", "Tax Settings", "Theme Customization", "Integrations"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "E-commerce website builder",
            "Product management",
            "Built-in shopping cart",
            "Order management dashboard",
            "Discount code creation"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multiple payment gateways",
            "Real-time shipping calculation",
            "Multi-warehouse inventory",
            "Abandoned cart recovery",
            "Back-office app integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Building an online store easily",
            "Managing inventory automatically",
            "Calculating accurate shipping rates",
            "Recovering abandoned carts",
            "Marketing an online store",
            "Handling e-commerce accounting",
            "Providing customer support",
            "Processing orders efficiently",
            "Accepting various payment types",
            "Analyzing store performance"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI product recommendations",
            "AI-generated product descriptions",
            "Dynamic pricing optimization",
            "AI-powered store search",
            "Predictive customer LTV analysis",
            "AI-driven order fraud detection",
            "Smart customer churn prediction",
            "AI personalization of shopping",
            "Automated marketing copy generation",
            "AI demand forecasting",
            "Product review sentiment analysis",
            "AI customer service chatbot",
            "Smart upsell/cross-sell suggestions",
            "AI-driven audience segmentation",
            "Automated product image tagging",
            "AI-powered 'visual search'",
            "Predictive return rate analysis",
            "AI optimization of store layout",
            "Smart sales trend alerts",
            "AI-generated insights from analytics"
          ]
        }
      ]
    },
    "BugTracker": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Project Overview", "My Dashboard", "Team Dashboard", "Bug Statistics", "Recent Activity"]
        },
        {
          title: "Bugs",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["All Bugs", "Open Bugs", "Assigned to Me", "Recently Added", "Critical Bugs", "Resolved Bugs", "Closed Bugs"]
        },
        {
          title: "Projects",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Projects", "Active Projects", "My Projects", "Project Templates", "Archived Projects"]
        },
        {
          title: "Categories",
          icon: <Tag className="w-4 h-4" />,
          items: ["Bug Categories", "Severity Levels", "Priority Levels", "Custom Categories"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Bug Reports", "Project Reports", "User Activity Reports", "Custom Reports", "Analytics"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["All Users", "User Groups", "User Roles", "User Activity", "Permissions"]
        },
        {
          title: "Forums",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Discussion Forums", "Topics", "My Posts", "Popular Discussions"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Email Settings", "Custom Fields", "Workflow Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Simple bug submission form",
            "Customizable fields",
            "Assign bugs to team members",
            "Attach screenshots and files",
            "Email notifications"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable workflows",
            "Advanced bug reporting",
            "Code repository integration",
            "Help desk integration",
            "Time tracking on bugs"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Centralizing scattered bug reports",
            "Getting enough info to fix bugs",
            "Defining a clear bug-fixing process",
            "Prioritizing the most important bugs",
            "Preventing releases with critical bugs",
            "Linking customer tickets to bugs",
            "Understanding project health",
            "Syncing developers and QA",
            "Finding old bug reports",
            "Estimating time spent on bug fixes"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered duplicate bug detection",
            "Automated bug assignment",
            "AI suggestions for severity/priority",
            "Predictive time-to-fix analysis",
            "AI root cause analysis",
            "Smart suggestions for related bugs",
            "Automated bug categorization",
            "Natural language bug reporting",
            "AI analysis of code commits",
            "Sentiment analysis of bug reports",
            "AI 'reproducibility score'",
            "Automated bug report summaries",
            "Predictive analysis of buggy code areas",
            "AI recommendations for release planning",
            "Smart alerts for aging bugs",
            "AI chatbot for bug reporting guidance",
            "Automated translation of bug reports",
            "AI suggestions for test cases",
            "Predictive re-open analysis",
            "AI analysis of linked session recordings"
          ]
        }
      ]
    },
    "Wiki": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Wiki Home", "Recent Changes", "Popular Pages", "My Contributions", "Getting Started"]
        },
        {
          title: "Pages",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Pages", "Create Page", "Page Templates", "Draft Pages", "My Pages", "Recently Viewed"]
        },
        {
          title: "Categories",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Categories", "Create Category", "Category Tree", "Manage Categories"]
        },
        {
          title: "Search",
          icon: <Search className="w-4 h-4" />,
          items: ["Advanced Search", "Search Results", "Search History"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["User Contributions", "Page Comments", "Change History", "User Activity", "Team Wikis"]
        },
        {
          title: "Administration",
          icon: <Settings className="w-4 h-4" />,
          items: ["User Management", "Permissions", "Wiki Settings", "Templates", "Import/Export"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Simple page editor",
            "Page categories",
            "Search bar",
            "Internal page linking",
            "Version history"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Fine-grained permissions",
            "WYSIWYG editor",
            "Content embedding",
            "Page template system",
            "Team collaboration tools"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Centralizing scattered knowledge",
            "Standardizing employee onboarding",
            "Answering recurring questions",
            "Keeping documentation updated",
            "Finding the current version of a doc",
            "Restricting access to sensitive info",
            "Enabling non-technical users to contribute",
            "Organizing meeting minutes",
            "Standardizing document formats",
            "Fostering a knowledge-sharing culture"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered natural language search",
            "AI suggestions for interlinking pages",
            "Automated content summarization",
            "AI recommendations for new articles",
            "Smart detection of stale content",
            "AI grammar and style checking",
            "Automated table of contents generation",
            "AI suggestions for page structure",
            "AI chatbot for answering questions",
            "Automated duplicate content detection",
            "AI-powered page translation",
            "Smart, automated page tagging",
            "AI-based expert finder",
            "Automated content generation",
            "AI 'knowledge graph' visualization",
            "Page comment sentiment analysis",
            "AI recommendations for related reading",
            "Automated broken link checker",
            "AI-assisted content migration",
            "Smart alerts for relevant content updates"
          ]
        }
      ]
    },
    "Calendar": {
      sections: [
        {
          title: "Calendar Views",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Month View", "Week View", "Day View", "Agenda View", "Year View"]
        },
        {
          title: "Events",
          icon: <Clock className="w-4 h-4" />,
          items: ["All Events", "Create Event", "Recurring Events", "My Events", "Upcoming Events", "Past Events"]
        },
        {
          title: "Calendars",
          icon: <Grid className="w-4 h-4" />,
          items: ["My Calendars", "Shared Calendars", "Public Calendars", "Subscribed Calendars", "Calendar Settings"]
        },
        {
          title: "Tasks",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Tasks", "Today's Tasks", "Overdue Tasks", "Completed Tasks", "Task Lists"]
        },
        {
          title: "Meetings",
          icon: <Users className="w-4 h-4" />,
          items: ["Schedule Meeting", "Meeting Rooms", "Video Conferences", "Meeting History"]
        },
        {
          title: "Reminders",
          icon: <Bell className="w-4 h-4" />,
          items: ["All Reminders", "Email Reminders", "SMS Reminders", "Desktop Notifications"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Notification Settings", "Sharing Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create & manage events",
            "Multiple calendar views",
            "Invite attendees",
            "Event reminders",
            "Recurring events"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Shared team calendars",
            "Group calendars",
            "Video conferencing integration",
            "Resource (meeting room) booking",
            "Two-way sync with other calendars"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Finding a meeting time for a group",
            "Managing work and personal schedules",
            "Forgetting appointments",
            "Booking an available meeting room",
            "Keeping a team aware of deadlines",
            "Scheduling with external parties",
            "Adding video call links to invites",
            "Accessing your schedule on mobile",
            "Syncing multiple calendar services",
            "Simplifying RSVP responses"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered smart scheduling",
            "Natural language event creation",
            "AI suggestions for attendees",
            "Automated meeting agenda creation",
            "AI 'time to leave' traffic alerts",
            "Smart event categorization",
            "AI analysis of your time usage",
            "Predictive meeting acceptance rates",
            "AI resolution of scheduling conflicts",
            "Smart recurring event suggestions",
            "AI recommendations for meeting rooms",
            "Automated action item follow-ups",
            "AI-powered 'focus time' blocking",
            "Smart alerts for back-to-back meetings",
            "AI insights into meeting habits",
            "Automated room booking",
            "AI suggestions for invitees",
            "Smart parsing of event details from email",
            "AI 'best time' suggestions for teams",
            "Automated rescheduling assistant"
          ]
        }
      ]
    },
    "Contacts": {
      sections: [
        {
          title: "Contacts",
          icon: <Users className="w-4 h-4" />,
          items: ["All Contacts", "Add Contact", "My Contacts", "Recent Contacts", "Favorites", "Duplicates"]
        },
        {
          title: "Groups",
          icon: <Users className="w-4 h-4" />,
          items: ["Contact Groups", "Create Group", "Smart Groups", "Group Management"]
        },
        {
          title: "Lists",
          icon: <List className="w-4 h-4" />,
          items: ["Mailing Lists", "Distribution Lists", "Custom Lists", "List Management"]
        },
        {
          title: "Communication",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Send Email", "Send SMS", "Communication History", "Templates"]
        },
        {
          title: "Import/Export",
          icon: <Upload className="w-4 h-4" />,
          items: ["Import Contacts", "Export Contacts", "Sync Settings", "Data Sources"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Custom Fields", "Privacy Settings", "Sync Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central address book",
            "Custom fields",
            "Notes on profiles",
            "Search and filter",
            "Import from CSV/Google"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Find and merge duplicates",
            "360-degree view integration",
            "Mailing list creation",
            "Team contact sharing",
            "Business card scanner"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Centralizing scattered contacts",
            "Fixing duplicate contact records",
            "Remembering details about contacts",
            "Reducing manual data entry",
            "Emailing specific groups",
            "Sharing contacts with a team",
            "Keeping contact info updated",
            "Finding a specific contact easily",
            "Migrating contacts from other systems",
            "Storing extra, non-standard info"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered data enrichment",
            "Automated duplicate detection",
            "AI follow-up suggestions",
            "Smart contact grouping",
            "AI parsing of email signatures",
            "Predictive contact value analysis",
            "AI 'relationship health' score",
            "Natural language contact search",
            "AI data standardization",
            "Automated activity logging",
            "AI identification of decision-makers",
            "Smart alerts for job changes",
            "AI-powered photo recognition",
            "Automated contact tagging",
            "AI social connection suggestions",
            "Predictive lead scoring",
            "AI chatbot for contact lookups",
            "Smart 'keep in touch' reminders",
            "AI insights into your network",
            "Automated profile creation"
          ]
        }
      ]
    },
    "Tasks": {
      sections: [
        {
          title: "My Tasks",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Tasks", "Today's Tasks", "This Week", "Overdue", "Completed", "Deleted"]
        },
        {
          title: "Projects",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Projects", "Active Projects", "My Projects", "Shared Projects", "Templates"]
        },
        {
          title: "Lists",
          icon: <List className="w-4 h-4" />,
          items: ["Task Lists", "Create List", "Shared Lists", "List Templates"]
        },
        {
          title: "Calendar",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Task Calendar", "Timeline View", "Gantt View", "Due Dates"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Shared Tasks", "Team Tasks", "Comments", "Attachments", "Activity Feed"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Task Reports", "Progress Reports", "Time Tracking", "Productivity Analytics"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Notification Settings", "Integration Settings", "Custom Fields"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create to-do lists",
            "Set due dates & reminders",
            "Add sub-tasks",
            "Add notes & attachments",
            "Prioritize tasks"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Share & assign tasks",
            "Project-based management",
            "Recurring tasks",
            "Calendar view",
            "Task-from-email integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Forgetting what you need to do",
            "Breaking down overwhelming tasks",
            "Clarifying task ownership",
            "Juggling personal and team tasks",
            "Missing important deadlines",
            "Remembering to do routine tasks",
            "Consolidating task information",
            "Visualizing your weekly workload",
            "Losing action items from emails",
            "Tracking project progress"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered task breakdown",
            "Smart task scheduling",
            "AI-based task prioritization",
            "Natural language task creation",
            "AI task duration estimation",
            "Automated task assignment",
            "Predictive productivity analysis",
            "AI-based adaptive reminders",
            "Smart 'at-risk' task alerts",
            "AI suggestions for recurring tasks",
            "Automated 'daily digest' creation",
            "AI-powered 'focus mode'",
            "Smart dependency detection",
            "AI suggestions for task delegation",
            "Automated project status reports",
            "AI-powered 'undo' for completion",
            "Smart task parsing from notes",
            "AI insights on work-life balance",
            "Predictive goal completion",
            "AI-powered celebration messages"
          ]
        }
      ]
    },
    "Reports": {
      sections: [
        {
          title: "Folders",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Reports", "My Reports", "Favorites", "Recently Viewed", "Scheduled Reports", "Recently Deleted"]
        },
        {
          title: "Account and Contact Reports",
          icon: <Users className="w-4 h-4" />,
          items: ["Account Reports", "Contact Reports", "Account Contact Relationships", "Contact Activity Reports"]
        },
        {
          title: "Deal Reports",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["Deal Performance", "Deal Pipeline", "Deal Conversion", "Deal Activity", "Deal Forecast"]
        },
        {
          title: "Lead Reports",
          icon: <ArrowRight className="w-4 h-4" />,
          items: ["Lead Generation", "Lead Conversion", "Lead Source Analysis", "Lead Activity", "Lead Performance"]
        },
        {
          title: "Campaign Reports",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Campaign Performance", "Campaign ROI", "Campaign Analytics", "Email Campaign Reports"]
        },
        {
          title: "Case and Solution Reports",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["Case Reports", "Solution Reports", "Case Resolution", "Support Analytics"]
        },
        {
          title: "Product Reports",
          icon: <Package className="w-4 h-4" />,
          items: ["Product Performance", "Product Analytics", "Inventory Reports", "Product Catalog"]
        },
        {
          title: "Vendor Reports",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Vendor Performance", "Vendor Analysis", "Purchase Reports", "Vendor Analytics"]
        },
        {
          title: "Quote Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Quote Performance", "Quote Analysis", "Quote Conversion", "Quote Activity"]
        },
        {
          title: "Sales Order Reports",
          icon: <Truck className="w-4 h-4" />,
          items: ["Sales Order Performance", "Order Analysis", "Delivery Reports", "Order Tracking"]
        },
        {
          title: "Purchase Order Reports",
          icon: <Truck className="w-4 h-4" />,
          items: ["Purchase Order Performance", "Purchase Analysis", "Procurement Reports", "Purchase Tracking"]
        },
        {
          title: "Invoice Reports",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Invoice Performance", "Invoice Analysis", "Payment Reports", "Revenue Reports"]
        },
        {
          title: "Sales Metrics Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Sales Performance", "Sales Analytics", "Revenue Analytics", "Sales Forecasting"]
        },
        {
          title: "Email Reports",
          icon: <Mail className="w-4 h-4" />,
          items: ["Email Performance", "Email Analytics", "Email Campaign Reports", "Email Tracking"]
        },
        {
          title: "Meeting Reports",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Meeting Performance", "Meeting Analytics", "Meeting Activity", "Meeting Scheduling"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Pre-built report templates",
            "Create tabular reports",
            "Export to CSV/PDF",
            "Basic charts",
            "Scheduled email reports"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Drag-and-drop report builder",
            "Custom dashboards",
            "Advanced filtering",
            "Calculated fields & formulas",
            "Secure report sharing"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Building a custom report",
            "Automating weekly reporting",
            "Getting insights from raw data",
            "Sharing data with management",
            "Analyzing specific data segments",
            "Calculating custom metrics",
            "Getting a business health overview",
            "Analyzing data in Excel",
            "Creating different views of data",
            "Presenting data effectively"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered report generation",
            "AI-driven data insights",
            "Automated anomaly detection",
            "AI chart type suggestions",
            "Predictive forecasting in reports",
            "AI-generated report summaries",
            "Smart metric threshold alerts",
            "AI-powered root cause analysis",
            "Automated data clustering",
            "AI recommendations for new reports",
            "Smart data cleansing suggestions",
            "AI-powered 'what-if' analysis",
            "Automated metric correlation detection",
            "AI-based filter suggestions",
            "Smart data blending",
            "AI-powered 'goal seek' analysis",
            "Automated KPI dashboard generation",
            "AI dashboard design suggestions",
            "Predictive lead scoring in reports",
            "AI-powered trend analysis"
          ]
        }
      ]
    },
    "MarketingHub": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Marketing Dashboard", "Campaign Performance", "Lead Overview", "ROI Analytics"]
        },
        {
          title: "Campaigns",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["All Campaigns", "Email Campaigns", "SMS Campaigns", "Social Campaigns", "Multi-channel Campaigns"]
        },
        {
          title: "Lead Management",
          icon: <Users className="w-4 h-4" />,
          items: ["All Leads", "Lead Scoring", "Lead Nurturing", "Lead Qualification", "Lead Distribution"]
        },
        {
          title: "Content",
          icon: <FileText className="w-4 h-4" />,
          items: ["Content Library", "Email Templates", "Landing Pages", "Forms", "Social Content"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Marketing Workflows", "Lead Nurturing", "Drip Campaigns", "Behavioral Triggers", "A/B Testing"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Campaign Analytics", "Lead Analytics", "Revenue Analytics", "Attribution Analysis", "Custom Reports"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["CRM Integration", "Social Media", "Web Analytics", "Email Services", "Third-party Apps"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Account Settings", "Team Management", "Brand Settings", "API Configuration"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Drag-and-drop builders",
            "Website lead capture forms",
            "Email A/B testing",
            "Basic lead scoring",
            "Website visitor tracking"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Visual journey builder",
            "Multi-channel communication",
            "Advanced lead nurturing",
            "Behavior-triggered campaigns",
            "Revenue attribution reporting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automating lead follow-up",
            "Sending targeted messages",
            "Identifying sales-ready leads",
            "Proving marketing ROI",
            "Creating a consistent multi-channel experience",
            "Converting website visitors",
            "Aligning marketing and sales",
            "Improving email engagement",
            "Generating high-quality leads",
            "Understanding the customer journey"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered predictive segmentation",
            "AI 'next best action' recommendations",
            "AI-generated email copy",
            "Predictive lead scoring",
            "AI-powered send time optimization",
            "Automated journey optimization",
            "AI-driven content recommendations",
            "Predictive churn analysis",
            "AI-assisted campaign creation",
            "Natural language analytics queries",
            "AI anomaly detection in campaigns",
            "Automated A/B test winner selection",
            "AI-driven website personalization",
            "Smart channel recommendations",
            "AI analysis of competitor campaigns",
            "Predictive lead generation forecasting",
            "AI-powered 'lookalike' audiences",
            "Automated asset suggestions",
            "AI insights into customer behavior",
            "Smart marketing budget allocation"
          ]
        }
      ]
    },
    "Finances": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Financial Dashboard", "Cash Flow", "P&L Overview", "Key Metrics", "Budget vs Actual"]
        },
        {
          title: "Transactions",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Transactions", "Income", "Expenses", "Transfers", "Recurring Transactions"]
        },
        {
          title: "Accounts",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Chart of Accounts", "Bank Accounts", "Credit Cards", "Assets", "Liabilities"]
        },
        {
          title: "Budgeting",
          icon: <Target className="w-4 h-4" />,
          items: ["Budget Planning", "Budget vs Actual", "Variance Analysis", "Budget Categories", "Forecasting"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Financial Reports", "P&L Statement", "Balance Sheet", "Cash Flow Statement", "Custom Reports"]
        },
        {
          title: "Reconciliation",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Bank Reconciliation", "Credit Card Reconciliation", "Account Matching", "Reconciliation History"]
        },
        {
          title: "Tax Management",
          icon: <Calculator className="w-4 h-4" />,
          items: ["Tax Categories", "Tax Reports", "Tax Filing", "Deductions", "Tax Planning"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "Account Setup", "Currency Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Unified financial dashboard",
            "Create and send invoices",
            "Track expenses & receipts",
            "Connect bank accounts",
            "Simple chart of accounts"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Double-entry accounting",
            "Automated bank reconciliation",
            "Sales & purchase orders",
            "Integrated inventory tracking",
            "Comprehensive financial reporting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Getting a clear view of financial health",
            "Automating bank transaction entry",
            "Getting paid by clients on time",
            "Managing inventory and COGS",
            "Preparing statements for tax time",
            "Tracking employee expenses",
            "Creating and tracking budgets",
            "Managing the full quote-to-cash process",
            "Complying with sales tax laws",
            "Collaborating with an accountant"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered cash flow forecasting",
            "Automated expense categorization",
            "AI transaction anomaly detection",
            "Smart reconciliation suggestions",
            "AI recommendations for financial health",
            "Predictive customer payment analysis",
            "AI chatbot for financial questions",
            "Automated vendor bill data extraction",
            "AI-driven spending pattern insights",
            "Natural language report generation",
            "AI-powered audit assistance",
            "Smart alerts for low balances",
            "AI inventory reorder point suggestions",
            "Predictive budgeting and forecasting",
            "AI analysis of profitability",
            "Automated duplicate bill detection",
            "AI chart of accounts optimization",
            "Smart payment-to-invoice matching",
            "AI-generated financial summaries",
            "Predictive analysis of late payments"
          ]
        }
      ]
    },
    "Payroll": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Payroll Dashboard", "Monthly Overview", "Employee Summary", "Compliance Status"]
        },
        {
          title: "Employees",
          icon: <Users className="w-4 h-4" />,
          items: ["Employee Directory", "Add Employee", "Employee Profiles", "Salary Details", "Employment History"]
        },
        {
          title: "Payroll Processing",
          icon: <Calculator className="w-4 h-4" />,
          items: ["Run Payroll", "Payroll History", "Draft Payrolls", "Payroll Calendar", "Bulk Updates"]
        },
        {
          title: "Salary Components",
          icon: <DollarSign className="w-4 h-4" />,
          items: ["Basic Salary", "Allowances", "Deductions", "Benefits", "Bonuses", "Overtime"]
        },
        {
          title: "Time & Attendance",
          icon: <Clock className="w-4 h-4" />,
          items: ["Time Tracking", "Attendance Reports", "Leave Management", "Overtime Tracking", "Shift Management"]
        },
        {
          title: "Tax & Compliance",
          icon: <Shield className="w-4 h-4" />,
          items: ["Tax Settings", "Statutory Compliance", "Tax Reports", "Form Generation", "Audit Trail"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Payroll Reports", "Employee Reports", "Tax Reports", "Compliance Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Organization Settings", "Payroll Settings", "Tax Configuration", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Employee self-service portal",
            "Direct deposit",
            "Calculate salaries & overtime",
            "Central employee directory",
            "Run payroll in a few clicks"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated payroll tax filing",
            "Benefits administration",
            "Accounting software integration",
            "Time tracking integration",
            "Labor law compliance"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Calculating payroll taxes correctly",
            "Reducing time spent running payroll",
            "Staying compliant with labor laws",
            "Fielding employee pay stub requests",
            "Managing benefit deductions",
            "Tracking employee hours accurately",
            "Automating accounting journal entries",
            "Generating year-end W-2s",
            "Handling different pay schedules",
            "Paying both employees and contractors"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI payroll anomaly detection",
            "Predictive future payroll costs",
            "AI tax withholding optimization",
            "Payroll question chatbot",
            "Automated worker classification",
            "AI-driven compliance alerts",
            "Natural language reporting",
            "AI-powered timesheet validation",
            "Smart payroll deadline reminders",
            "AI salary benchmarking",
            "Automated journal entry generation",
            "AI 'what-if' salary analysis",
            "Predictive turnover analysis",
            "Smart out-of-state work detection",
            "AI insights into labor costs",
            "Automated benefits document parsing",
            "AI assistance for tax setup",
            "Smart alerts for expiring documents",
            "AI payroll process optimization",
            "Automated wage garnishment responses"
          ]
        }
      ]
    },
    "Webinar": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Webinar Overview", "Analytics Dashboard", "Upcoming Events", "Performance Metrics"]
        },
        {
          title: "Webinars",
          icon: <Video className="w-4 h-4" />,
          items: ["All Webinars", "Live Webinars", "Scheduled Events", "Recurring Webinars", "Practice Sessions"]
        },
        {
          title: "Registrations",
          icon: <Users className="w-4 h-4" />,
          items: ["Attendee Management", "Registration Forms", "Approval Workflows", "Bulk Registration"]
        },
        {
          title: "Recordings",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["All Recordings", "Cloud Storage", "Download Center", "Sharing Settings"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Attendance Reports", "Engagement Analytics", "Registration Analytics", "Performance Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Webinar Settings", "Branding", "Email Templates", "Integration"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Customizable registration pages",
            "Automated reminder emails",
            "In-webinar polls & Q&A",
            "Screen sharing",
            "Basic attendance analytics"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Live video broadcasting",
            "On-demand webinars",
            "Marketing & CRM integration",
            "Co-organizers and panelists",
            "Lead source tracking"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Presenting to a large audience",
            "Generating leads from webinars",
            "Keeping the audience engaged",
            "Increasing show-up rates",
            "Making content available on-demand",
            "Understanding webinar performance",
            "Following up with attendees",
            "Managing audience questions",
            "Handling multiple speakers",
            "Getting people to register"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI suggestions for best webinar time",
            "AI-generated promotional copy",
            "Predictive attendance rate analysis",
            "AI topic suggestions",
            "Automated webinar transcription",
            "AI-powered content summarization",
            "Live chat sentiment analysis",
            "AI recommendations for slide improvement",
            "Smart 'engagement drop' alerts",
            "AI chatbot for technical support",
            "Automated 'key moments' highlighting",
            "AI analysis of Q&A themes",
            "Predictive lead scoring of attendees",
            "AI-generated poll questions",
            "Natural language transcript search",
            "AI 'practice mode' with feedback",
            "Smart background noise cancellation",
            "AI recommendations for related content",
            "Automated social media clip creation",
            "AI analysis of success factors"
          ]
        }
      ]
    },
    "RouteIQ": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Route Overview", "Sales Performance", "Territory Analytics", "Team Status"]
        },
        {
          title: "Routes",
          icon: <Navigation className="w-4 h-4" />,
          items: ["Route Planning", "Optimized Routes", "Route History", "Multi-day Routes"]
        },
        {
          title: "Territories",
          icon: <Map className="w-4 h-4" />,
          items: ["Territory Management", "Territory Assignment", "Coverage Analysis", "Boundary Settings"]
        },
        {
          title: "Maps",
          icon: <MapPin className="w-4 h-4" />,
          items: ["Interactive Maps", "Location Tracking", "Geofencing", "Map Layers"]
        },
        {
          title: "Check-ins",
          icon: <Clock className="w-4 h-4" />,
          items: ["Visit Tracking", "Check-in History", "Location Verification", "Time Tracking"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Route Reports", "Territory Reports", "Performance Analytics", "Distance Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Route Settings", "Map Configuration", "Team Management", "Integration"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Visualize CRM data on a map",
            "Create optimized daily routes",
            "Mobile app for navigation",
            "View nearby prospects",
            "Log meeting notes"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated territory management",
            "Multi-day route planning",
            "Real-time rep location tracking",
            "Detailed travel reports",
            "Automatic CRM record updates"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Reducing drive time for sales reps",
            "Creating balanced sales territories",
            "Knowing where field reps are",
            "Finding nearby opportunities",
            "Automating CRM data entry after visits",
            "Planning multi-day sales trips",
            "Understanding field team efficiency",
            "Ensuring high-priority clients are visited",
            "Guiding new reps in their territory",
            "Visualizing sales data geographically"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered route optimization",
            "Predictive 'best time to visit' analysis",
            "AI-based territory suggestions",
            "Smart route deviation alerts",
            "AI 'fill my day' scheduling",
            "Automated route profitability analysis",
            "AI-based territory balancing",
            "Natural language route planning",
            "AI-powered check-in analysis",
            "Predictive fuel cost analysis",
            "Smart client clustering",
            "AI recommendations for next visits",
            "Automated daily performance summaries",
            "AI-based appointment scheduling",
            "Meeting note sentiment analysis",
            "AI 'what-if' territory analysis",
            "Smart route overlap detection",
            "AI recommendations for rep assignments",
            "Predictive geographic lead generation",
            "Automated voice-to-text note logging"
          ]
        }
      ]
    },
    "FSM": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Field Service Overview", "Technician Performance", "Job Analytics", "Revenue Metrics"]
        },
        {
          title: "Work Orders",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Work Orders", "Open Orders", "Scheduled Orders", "Completed Orders", "Recurring Orders", "Emergency Orders"]
        },
        {
          title: "Scheduling",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Dispatch Board", "Technician Calendar", "Auto-scheduling", "Route Optimization", "Appointment Booking"]
        },
        {
          title: "Technicians",
          icon: <Users className="w-4 h-4" />,
          items: ["Technician Management", "Skills Matrix", "Availability", "Performance Tracking", "Mobile App"]
        },
        {
          title: "Inventory",
          icon: <Package className="w-4 h-4" />,
          items: ["Parts Management", "Stock Levels", "Purchase Orders", "Supplier Management", "Inventory Tracking"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Database", "Service History", "Equipment Records", "Contracts", "Customer Portal"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Service Reports", "Technician Reports", "Revenue Reports", "Inventory Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Service Types", "SLA Configuration", "Mobile Settings", "Integration", "Billing Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create work orders",
            "Technician schedule board",
            "Technician mobile app",
            "Capture customer signatures",
            "Customer database"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Intelligent scheduling & dispatch",
            "Route optimization",
            "Inventory management",
            "Service contract management",
            "Accounting integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Inefficient technician scheduling",
            "Technicians arriving late",
            "Not having the right parts for a job",
            "Losing paper-based work orders",
            "Poor communication with field techs",
            "Providing accurate arrival times",
            "Slow, manual invoicing process",
            "Managing recurring maintenance",
            "Proving a job was completed",
            "Understanding service profitability"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered predictive scheduling",
            "Predictive maintenance alerts",
            "AI-based technician recommendations",
            "Smart problem diagnosis",
            "AI-driven parts recommendations",
            "Natural language work order creation",
            "AI analysis of service reports",
            "Predictive job completion times",
            "AI-based technician safety alerts",
            "Automated customer feedback analysis",
            "AI-powered inventory forecasting",
            "Smart, traffic-adaptive routing",
            "AI-generated customer service reports",
            "Automated parts validation",
            "AI-powered upsell suggestions",
            "Customer communication sentiment analysis",
            "AI-based service request triage",
            "Smart scheduling of filler tasks",
            "AI analysis of technician performance",
            "Automated voice-to-text for updates"
          ]
        }
      ]
    },
    "Billing": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Billing Overview", "Revenue Metrics", "Subscription Analytics", "Payment Status", "MRR Tracking"]
        },
        {
          title: "Subscriptions",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["All Subscriptions", "Active Subscriptions", "Trials", "Cancelled", "Subscription Plans", "Upgrades & Downgrades"]
        },
        {
          title: "Invoices",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Invoices", "Draft Invoices", "Pending Invoices", "Paid Invoices", "Overdue Invoices", "Credit Notes"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Management", "Billing Contacts", "Payment Methods", "Customer Portal", "Dunning Management"]
        },
        {
          title: "Payments",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Payment History", "Failed Payments", "Refunds", "Payment Gateways", "Payment Links"]
        },
        {
          title: "Revenue Recognition",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["Revenue Schedules", "Deferred Revenue", "Revenue Reports", "ASC 606 Compliance"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Revenue Analytics", "Churn Analysis", "Cohort Analysis", "Subscription Metrics", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Billing Settings", "Tax Settings", "Payment Settings", "Dunning Settings", "Integration"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create subscription plans",
            "Automated recurring invoicing",
            "Prorated billing",
            "Self-service customer portal",
            "Multiple payment gateways"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Dunning management",
            "Usage-based billing",
            "Revenue recognition compliance",
            "Advanced subscription analytics",
            "Consolidated invoicing"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automating monthly invoicing",
            "Reducing churn from failed payments",
            "Handling plan changes correctly",
            "Letting customers manage their own accounts",
            "Recognizing revenue properly",
            "Tracking key metrics like MRR & churn",
            "Billing based on customer usage",
            "Managing sales tax for subscriptions",
            "Allowing customers to pause service",
            "Communicating billing events to customers"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered churn prediction",
            "AI-driven pricing recommendations",
            "Smart, adaptive dunning management",
            "Predictive customer LTV analysis",
            "AI-based upsell suggestions",
            "Automated revenue forecasting",
            "AI analysis of cancellation reasons",
            "Natural language billing analytics",
            "AI-driven retention offers",
            "Smart payment-to-invoice matching",
            "AI-powered revenue recovery insights",
            "Automated fraudulent sign-up detection",
            "AI suggestions for payment retry timing",
            "Billing support sentiment analysis",
            "AI 'what-if' analysis for pricing",
            "Smart alerts for metric changes",
            "AI-generated customer billing summaries",
            "Automated cohort analysis with insights",
            "AI recommendations for new plans",
            "Predictive analysis of customer upgrades"
          ]
        }
      ]
    },
    "Practice": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Practice Overview", "Client Portfolio", "Revenue Metrics", "Team Performance", "Deadline Tracking"]
        },
        {
          title: "Clients",
          icon: <Users className="w-4 h-4" />,
          items: ["Client Management", "Client Onboarding", "Client Portal", "Client Communications", "Entity Management"]
        },
        {
          title: "Jobs",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Jobs", "Tax Preparation", "Bookkeeping", "Audit & Review", "Advisory Services", "Job Templates"]
        },
        {
          title: "Time Tracking",
          icon: <Clock className="w-4 h-4" />,
          items: ["Time Entry", "Timesheet Approval", "Billable Hours", "Time Reports", "Timer Integration"]
        },
        {
          title: "Documents",
          icon: <Folder className="w-4 h-4" />,
          items: ["Document Management", "Client Documents", "Templates", "E-signatures", "Document Sharing"]
        },
        {
          title: "Billing",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["Invoice Generation", "Fee Management", "Payment Tracking", "Recurring Billing", "Collections"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Financial Reports", "Time Reports", "Productivity Reports", "Client Reports", "Tax Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Practice Settings", "Team Management", "Fee Structure", "Tax Settings", "Integration"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central client database",
            "Time tracking",
            "Deadline dashboard",
            "Task management",
            "Secure document management"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Workflow automation for jobs",
            "Secure client portal",
            "Integrated billing & invoicing",
            "Accounting software integration",
            "Firm productivity reporting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing client deadlines",
            "Standardizing accounting processes",
            "Sharing documents securely with clients",
            "Ensuring all time is billed",
            "Tracking staff productivity",
            "Centralizing client communication",
            "Automating client onboarding",
            "Ensuring compliance and accuracy",
            "Understanding firm profitability",
            "Getting documents from clients on time"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered bookkeeping automation",
            "Predictive deadline risk analysis",
            "AI suggestions for workflow optimization",
            "Smart job allocation to staff",
            "AI review of financial documents",
            "Automated client communication generation",
            "AI insights into firm profitability",
            "Natural language search for clients/jobs",
            "AI chatbot for client FAQs",
            "Predictive revenue forecasting",
            "AI-based suggestions for service pricing",
            "Automated client document categorization",
            "AI-powered 'practice health' score",
            "Smart alerts for job budget overruns",
            "AI recommendations for upselling services",
            "Client communication sentiment analysis",
            "AI-powered time tracking suggestions",
            "Automated engagement letter generation",
            "AI-based compliance checks",
            "Predictive client churn analysis"
          ]
        }
      ]
    },
    "Payments": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Payment Overview", "Transaction Volume", "Success Rates", "Revenue Analytics", "Gateway Performance"]
        },
        {
          title: "Transactions",
          icon: <CreditCard className="w-4 h-4" />,
          items: ["All Transactions", "Successful Payments", "Failed Payments", "Pending Payments", "Refunds"]
        },
        {
          title: "Payment Gateways",
          icon: <Server className="w-4 h-4" />,
          items: ["Gateway Management", "Multi-gateway Setup", "Failover Configuration", "Gateway Analytics"]
        },
        {
          title: "Customers",
          icon: <Users className="w-4 h-4" />,
          items: ["Customer Management", "Payment Methods", "Transaction History", "Customer Insights"]
        },
        {
          title: "Fraud Protection",
          icon: <Shield className="w-4 h-4" />,
          items: ["Fraud Detection", "Risk Rules", "Blocked Transactions", "Whitelist Management"]
        },
        {
          title: "Reconciliation",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Settlement Reports", "Bank Reconciliation", "Dispute Management", "Chargeback Handling"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Payment Analytics", "Revenue Reports", "Gateway Performance", "Customer Analytics"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Payment Configuration", "Security Settings", "Webhook Management", "API Keys"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Accept credit cards",
            "Create simple payment links",
            "Transaction dashboard",
            "Multi-currency support",
            "PCI-compliant processing"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Multi-gateway routing",
            "Fraud & risk management",
            "Automated reconciliation",
            "Recurring billing engine",
            "Unified payments API"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Accepting payments without a store",
            "Reducing high transaction fees",
            "Handling payment gateway outages",
            "Fighting fraudulent transactions",
            "Reconciling payments with deposits",
            "Simplifying payment integrations",
            "Ensuring PCI compliance",
            "Managing subscription payments",
            "Accepting international payments",
            "Getting a clear view of transactions"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered fraud detection",
            "Smart transaction routing",
            "AI recommendations for fee reduction",
            "Predictive payment success analysis",
            "AI-driven chargeback prevention",
            "Automated sales trend analysis",
            "Natural language transaction search",
            "AI-powered 'smart retry' logic",
            "Chargeback reason sentiment analysis",
            "AI-based customer risk scoring",
            "Smart transaction pattern alerts",
            "AI 'what-if' gateway analysis",
            "Automated reconciliation suggestions",
            "AI insights into payment trends",
            "Predictive cash flow forecasting",
            "AI chatbot for transaction support",
            "Smart currency conversion advice",
            "AI checkout conversion recommendations",
            "Automated detection of linked fraud",
            "AI-generated daily activity summaries"
          ]
        }
      ]
    },
    "ZeptoMail": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Email Analytics", "Delivery Dashboard", "Bounce Analytics", "Performance Overview", "Recent Activity"]
        },
        {
          title: "Email Management",
          icon: <Mail className="w-4 h-4" />,
          items: ["Compose Email", "Email Templates", "Scheduled Emails", "Draft Emails", "Sent Emails", "Bounced Emails"]
        },
        {
          title: "Templates",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Templates", "Email Templates", "Custom Templates", "Template Categories", "Shared Templates"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Email Performance", "Delivery Reports", "Open Rates", "Click Rates", "Bounce Reports", "Spam Reports"]
        },
        {
          title: "Domain Management",
          icon: <Globe className="w-4 h-4" />,
          items: ["Verified Domains", "Domain Authentication", "SPF Records", "DKIM Settings", "Domain Reputation"]
        },
        {
          title: "API Integration",
          icon: <Code className="w-4 h-4" />,
          items: ["API Documentation", "API Keys", "Webhooks", "Integration Guide", "SDK Downloads"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Account Settings", "Email Configuration", "Security Settings", "Team Management", "Billing"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Send via API or SMTP",
            "Email activity dashboard",
            "Transactional email templates",
            "Real-time delivery tracking",
            "Bounce & complaint handling"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "High email deliverability",
            "Domain authentication guides",
            "Open & click rate analytics",
            "Real-time event webhooks",
            "Email archiving & search"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Emails going to spam",
            "Knowing if emails are delivered",
            "Setting up SPF & DKIM",
            "Avoiding hard-coded email content",
            "Handling bounced emails",
            "Triggering actions from email events",
            "Sending high-volume emails",
            "Troubleshooting delivery failures",
            "Protecting sender reputation",
            "Searching for a specific sent email"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI content optimization for deliverability",
            "Predictive email engagement analytics",
            "AI potential spam detection",
            "Smart template design suggestions",
            "AI analysis of bounce messages",
            "Automated A/B testing for content",
            "AI-powered IP reputation management",
            "Predictive spam complaint analysis",
            "AI recommendations for send times",
            "Natural language log search",
            "AI-generated subject lines",
            "Smart alerts for delivery anomalies",
            "AI-powered inbound email parsing",
            "Automated email categorization",
            "AI insights into sending patterns",
            "Predictive deliverability forecasting",
            "AI-based domain setup assistance",
            "Smart sending-rate throttling",
            "AI-powered inbox placement testing",
            "Automated weekly deliverability reports"
          ]
        }
      ]
    },
    "Office Integrator": {
      sections: [
        {
          title: "Documents",
          icon: <FileText className="w-4 h-4" />,
          items: ["Recent Documents", "All Documents", "Shared Documents", "Favorites", "Document Templates"]
        },
        {
          title: "Editor",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Word Processor", "Spreadsheet Editor", "Presentation Editor", "Form Builder", "Document Viewer"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Real-time Editing", "Comments & Reviews", "Version History", "Share Settings", "Team Workspaces"]
        },
        {
          title: "Templates",
          icon: <Bookmark className="w-4 h-4" />,
          items: ["Document Templates", "Form Templates", "Report Templates", "Letter Templates", "Custom Templates"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["API Integration", "Embed Options", "Third-party Apps", "Webhooks", "Developer Tools"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Editor Preferences", "Format Settings", "Security Options", "Export Options", "Admin Panel"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Embeddable document viewer",
            "Document creation API",
            "Real-time collaboration API",
            "Import/Export APIs",
            "Formatting APIs"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "White-labeled embedded editor",
            "Co-branding options",
            "Custom authentication integration",
            "Document merge API",
            "Secure, isolated customer environments"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Adding document editing to your app",
            "Keeping users within your application",
            "Generating bulk documents",
            "Enabling real-time collaboration",
            "Handling multiple document formats",
            "Maintaining a consistent brand experience",
            "Managing user access to documents",
            "Providing a 'view-only' mode",
            "Automating report creation",
            "Using your own file storage"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI writing assistant API",
            "AI document summarization API",
            "AI grammar check API",
            "Smart template filling API",
            "AI document comparison API",
            "Automated document classification API",
            "AI-powered data extraction API",
            "Document sentiment analysis API",
            "AI readability analysis API",
            "Sensitive data (PII) detection API",
            "AI document translation API",
            "Automated presentation generation API",
            "AI chart generation API",
            "Smart form autofill API",
            "AI-powered document search API",
            "Predictive text API",
            "AI template recommendation API",
            "Automated keyword extraction API",
            "AI spreadsheet anomaly detection API",
            "Smart document Q&A API"
          ]
        }
      ]
    },
    "Tables": {
      sections: [
        {
          title: "Tables",
          icon: <Table className="w-4 h-4" />,
          items: ["All Tables", "Recent Tables", "Shared Tables", "Templates", "Archived Tables"]
        },
        {
          title: "Forms",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Forms", "Form Builder", "Form Responses", "Published Forms", "Form Analytics"]
        },
        {
          title: "Workflows",
          icon: <Zap className="w-4 h-4" />,
          items: ["All Workflows", "Workflow Builder", "Automation Rules", "Triggered Actions", "Workflow History"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Data Reports", "Visual Reports", "Custom Reports", "Scheduled Reports", "Report Builder"]
        },
        {
          title: "Data Management",
          icon: <Database className="w-4 h-4" />,
          items: ["Import Data", "Export Data", "Data Validation", "Bulk Operations", "Data Backup"]
        },
        {
          title: "Team Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Members", "Permissions", "Comments", "Activity Log", "Notifications"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Table Settings", "Access Control", "Integrations", "API Settings", "Account Preferences"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Spreadsheet-like interface",
            "Multiple data views",
            "Link records between tables",
            "Form view for data collection",
            "Pre-built templates"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "No-code custom applications",
            "Workflow automation",
            "Role-based permissions",
            "API & webhook integrations",
            "Customizable dashboards"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Replacing complex spreadsheets",
            "Creating simple project trackers",
            "Managing simple inventories",
            "Building a simple CRM",
            "Automating simple approval processes",
            "Collecting structured data from a team",
            "Collaborating on a dataset",
            "Visualizing a workflow",
            "Building a quick, custom app",
            "Connecting data to other services"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI app generation from spreadsheets",
            "AI suggestions for table relationships",
            "Automated data cleansing",
            "AI suggestions for new data views",
            "Natural language data querying",
            "AI-driven workflow suggestions",
            "Smart data validation rules",
            "AI-powered data summarization",
            "Predictive analytics on your data",
            "AI pattern recognition for new fields",
            "Automated data entry from email",
            "AI image recognition for attachments",
            "Smart alerts for data changes",
            "AI suggestions for base design",
            "Automated dashboard generation",
            "Sentiment analysis of text fields",
            "AI-powered 'what-if' analysis",
            "Smart data import & mapping",
            "AI-based formula assistance",
            "Predictive sorting and filtering"
          ]
        }
      ]
    },
    "Office Suite": {
      sections: [
        {
          title: "Home",
          icon: <Home className="w-4 h-4" />,
          items: ["Dashboard", "Recent Files", "Quick Access", "Team Activity", "Getting Started"]
        },
        {
          title: "Documents",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Documents", "Word Documents", "Text Files", "Document Templates", "Shared Documents"]
        },
        {
          title: "Spreadsheets",
          icon: <Table className="w-4 h-4" />,
          items: ["All Spreadsheets", "Excel Files", "CSV Files", "Data Analysis", "Spreadsheet Templates"]
        },
        {
          title: "Presentations",
          icon: <Monitor className="w-4 h-4" />,
          items: ["All Presentations", "PowerPoint Files", "Slide Templates", "Presentation Themes", "Shared Presentations"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Workspaces", "Real-time Editing", "Comments & Reviews", "Version Control", "Share Settings"]
        },
        {
          title: "Storage",
          icon: <Cloud className="w-4 h-4" />,
          items: ["File Manager", "Recent Files", "Shared Files", "Storage Usage", "File Recovery"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Suite Preferences", "Account Settings", "Security Options", "Integration Settings", "Admin Panel"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create docs, sheets, & slides",
            "Unified recent files dashboard",
            "Templates for all apps",
            "Consistent user interface",
            "Export to MS Office/PDF"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time collaboration suite",
            "Integrated cloud storage",
            "Suite-wide AI assistant",
            "Team workspaces",
            "Deep integration between apps"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Avoiding multiple software subscriptions",
            "Solving compatibility issues",
            "Collaborating on different document types",
            "Finding files in one place",
            "Using spreadsheet data in presentations",
            "Getting intelligent help while working",
            "Managing file permissions consistently",
            "Onboarding users to fewer tools",
            "Editing documents on any device",
            "Creating branded company documents"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "Unified AI assistant (Zia)",
            "AI-powered cross-suite search",
            "Smart content repurposing",
            "AI suggestions for linking documents",
            "Automated cross-app workflows",
            "AI insights from combined files",
            "Natural language suite commands",
            "AI-powered brand kit",
            "Unified predictive text",
            "AI template recommendations",
            "Automated data extraction between apps",
            "Smart project workspace creation",
            "AI 'what-if' analysis across apps",
            "Automated meeting minute generation",
            "AI suggestions for consistent design",
            "Smart file organization suggestions",
            "AI-powered cross-file fact-checking",
            "Automated dashboard creation",
            "AI-driven collaboration suggestions",
            "Predictive file usage analysis"
          ]
        }
      ]
    },
    "ToDo": {
      sections: [
        {
          title: "Tasks",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Tasks", "My Tasks", "Today's Tasks", "Overdue Tasks", "Completed Tasks", "Recurring Tasks"]
        },
        {
          title: "Projects",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Projects", "Active Projects", "My Projects", "Shared Projects", "Project Templates", "Archived Projects"]
        },
        {
          title: "Teams",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Tasks", "Team Projects", "Team Members", "Task Assignment", "Team Activity", "Permissions"]
        },
        {
          title: "Calendar",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Task Calendar", "Due Dates", "Schedule View", "Calendar Integration", "Timeline View"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Task Reports", "Project Reports", "Team Performance", "Time Tracking", "Productivity Analytics"]
        },
        {
          title: "Labels & Filters",
          icon: <Tag className="w-4 h-4" />,
          items: ["Task Labels", "Custom Filters", "Smart Lists", "Saved Searches", "Priority Levels"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Task Preferences", "Notification Settings", "Integration Settings", "Team Settings", "Account Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Create to-do lists",
            "Set due dates & reminders",
            "Add sub-tasks",
            "Prioritize tasks",
            "\"My Day\" view"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Share lists & assign tasks",
            "Recurring tasks",
            "Cross-device sync",
            "Add notes & attachments",
            "Calendar integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Forgetting daily tasks",
            "Losing paper to-do lists",
            "Breaking down big tasks",
            "Collaborating on simple lists",
            "Remembering to do chores",
            "Focusing on what to do today",
            "Adding context to a task",
            "Juggling tasks and events",
            "Capturing ideas on the go",
            "Organizing different life areas"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI suggestions for task scheduling",
            "Natural language task input",
            "AI-based adaptive reminders",
            "Smart sub-task suggestions",
            "AI daily planning assistant",
            "Automated task prioritization",
            "AI suggestions for recurring tasks",
            "Predictive 'at-risk' task alerts",
            "AI-powered 'focus mode'",
            "Smart grouping of similar tasks",
            "AI-driven celebration messages",
            "Automated task import from email",
            "AI suggestions for task delegation",
            "Smart task duration estimation",
            "AI-powered weekly review",
            "Automated task creation from photos",
            "AI suggestions for task labels",
            "Predictive productivity analysis",
            "AI suggestions for calendar-related tasks",
            "Smart 'undo' for completed tasks"
          ]
        }
      ]
    },
    "PDF Editor": {
      sections: [
        {
          title: "Editor",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Edit PDF", "Text Editing", "Image Editing", "Page Management", "Annotation Tools"]
        },
        {
          title: "Forms",
          icon: <FileText className="w-4 h-4" />,
          items: ["Create Forms", "Fill Forms", "Form Templates", "Interactive Forms", "Form Fields"]
        },
        {
          title: "Convert",
          icon: <RefreshCw className="w-4 h-4" />,
          items: ["PDF to Word", "PDF to Excel", "PDF to Image", "Word to PDF", "HTML to PDF"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Share Documents", "Comments & Reviews", "Version Control", "Team Collaboration", "Document History"]
        },
        {
          title: "Security",
          icon: <Lock className="w-4 h-4" />,
          items: ["Password Protection", "Digital Signatures", "Encryption", "Watermarks", "Permission Settings"]
        },
        {
          title: "Templates",
          icon: <Bookmark className="w-4 h-4" />,
          items: ["Document Templates", "Form Templates", "Letter Templates", "Report Templates", "Custom Templates"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Editor Preferences", "Export Settings", "Security Options", "Integration Settings", "Account Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Edit text and images",
            "Add comments & annotations",
            "Highlight & underline text",
            "Draw shapes",
            "Fill out PDF forms"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Convert PDF to Office formats",
            "Merge multiple PDFs",
            "Split a PDF",
            "Compress PDF file size",
            "Add password protection"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Fixing a typo in a PDF",
            "Collaborating on a PDF review",
            "Reducing a large PDF file size",
            "Reusing PDF content in Word",
            "Combining PDFs into one file",
            "Securing a sensitive document",
            "Filling out non-interactive forms",
            "Signing a PDF digitally",
            "Reordering pages in a PDF",
            "Making a scanned PDF searchable"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered OCR",
            "AI suggestions for layout improvement",
            "Automated sensitive data redaction",
            "AI-powered document summarization",
            "Smart form field creation",
            "AI 'readability score' analysis",
            "Automated table extraction to Excel",
            "AI 'ask your document' feature",
            "Natural language editing commands",
            "AI recommendations for compression",
            "Smart broken link detection",
            "AI-powered document translation",
            "Automated table of contents generation",
            "AI-based document comparison",
            "Smart accessibility suggestions",
            "AI-powered mobile reflow",
            "Automated document categorization",
            "AI suggestions for splitting documents",
            "Predictive text for form filling",
            "AI-powered format conversion"
          ]
        }
      ]
    },
    "Shifts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Today's Schedule", "Team Overview", "Shift Statistics", "Quick Actions", "Recent Activity", "Shifts Overview", "Staff Status"]
        },
        {
          title: "Schedule",
          icon: <Calendar className="w-4 h-4" />,
          items: ["View Schedule", "Create Schedule", "Shift Templates", "Recurring Shifts", "Schedule Conflicts", "Weekly Schedule", "Monthly Schedule", "Daily Schedule", "Schedule Planning", "Shift Swaps"]
        },
        {
          title: "Employees",
          icon: <Users className="w-4 h-4" />,
          items: ["All Employees", "Shift Assignments", "Employee Availability", "Skill Sets", "Employee Profiles"]
        },
        {
          title: "Time Tracking",
          icon: <Clock className="w-4 h-4" />,
          items: ["Clock In/Out", "Time Logs", "Break Management", "Overtime Tracking", "Time Corrections", "Timesheet", "Attendance", "Overtime"]
        },
        {
          title: "Attendance",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Attendance Reports", "Absence Management", "Late Arrivals", "Early Departures", "Attendance Policies"]
        },
        {
          title: "Requests",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Shift Requests", "Time Off Requests", "Swap Requests", "Overtime Requests", "Request Approvals"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Schedule Reports", "Attendance Reports", "Labor Cost Reports", "Productivity Reports", "Custom Reports", "Time Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Shift Settings", "Employee Settings", "Notification Settings", "Integration Settings", "Company Settings"]
        },
        {
          title: "Staff",
          icon: <Users className="w-4 h-4" />,
          items: ["All Staff", "Available Staff", "Staff Schedules", "Staff Performance", "Time Off Requests"]
        },
        {
          title: "Locations",
          icon: <MapPin className="w-4 h-4" />,
          items: ["All Locations", "Location Schedules", "Location Staff", "Geofencing", "Location Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Publish employee schedules",
            "Employee mobile app",
            "Mobile clock-in/out",
            "Set employee availability",
            "Today's schedule view"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Shift swapping",
            "Automated scheduling",
            "Geofenced time tracking",
            "Labor cost forecasting",
            "Payroll integration"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Time-consuming manual scheduling",
            "Handling last-minute shift changes",
            "Fielding 'what's my schedule?' calls",
            "Covering sick leave easily",
            "Preventing inaccurate time tracking",
            "Staying within a labor budget",
            "Ensuring adequate staff coverage",
            "Automating payroll data entry",
            "Accommodating availability requests",
            "Communicating schedule updates"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered auto-scheduling",
            "Predictive staffing forecasts",
            "AI suggestions for shift coverage",
            "Smart overtime alerts",
            "AI analysis of shift patterns",
            "Automated shift swap approvals",
            "AI-based time clock fraud detection",
            "Natural language schedule queries",
            "AI recommendations for fair schedules",
            "Predictive burnout/flight risk analysis",
            "Smart shift reminders",
            "AI chatbot for scheduling questions",
            "Automated labor law compliance",
            "AI suggestions for shift templates",
            "Schedule communication sentiment analysis",
            "Predictive analysis of shift acceptance",
            "AI 'what-if' staffing scenarios",
            "Smart skill-to-shift matching",
            "AI insights into attendance patterns",
            "Automated voice-to-text notes for managers"
          ]
        }
      ]
    },
    "Contracts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Contract Overview", "Recent Activity", "Pending Actions", "Contract Analytics", "Quick Stats", "Contract Metrics"]
        },
        {
          title: "Contracts",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Contracts", "Active Contracts", "Draft Contracts", "Expired Contracts", "Archived Contracts", "Executed Contracts", "Templates", "My Contracts", "Recently Created", "Recently Modified"]
        },
        {
          title: "Templates",
          icon: <Bookmark className="w-4 h-4" />,
          items: ["Contract Templates", "Clause Library", "Standard Terms", "Custom Templates", "Template Categories", "Template Builder"]
        },
        {
          title: "Workflow",
          icon: <Zap className="w-4 h-4" />,
          items: ["Approval Workflows", "Review Process", "Signature Workflows", "Automated Actions", "Workflow Builder"]
        },
        {
          title: "Compliance",
          icon: <Shield className="w-4 h-4" />,
          items: ["Compliance Tracking", "Regulatory Requirements", "Audit Trail", "Risk Assessment", "Compliance Reports"]
        },
        {
          title: "Reporting",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Contract Reports", "Performance Analytics", "Renewal Reports", "Compliance Reports", "Custom Reports", "Performance Reports", "Risk Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Contract Settings", "Workflow Settings", "User Management", "Integration Settings", "Security Settings"]
        },
        {
          title: "Approval",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Approval Workflows", "Pending Approvals", "Approved Contracts", "Rejected Contracts", "Approval History"]
        },
        {
          title: "Legal Review",
          icon: <Scale className="w-4 h-4" />,
          items: ["Legal Review Queue", "Review Comments", "Legal Approved", "Legal Rejected", "Review History"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Central contract repository",
            "Contract templates",
            "Version control",
            "Status dashboard",
            "Full-text search"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated approval workflows",
            "E-signature integration",
            "Automated key date reminders",
            "Pre-approved clause library",
            "Advanced risk analytics"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Finding contracts easily",
            "Speeding up contract approvals",
            "Never missing a renewal date",
            "Using correct legal language",
            "Understanding contract risks",
            "Automating contract creation",
            "Collaborating on drafts",
            "Getting signatures efficiently",
            "Ensuring policy compliance",
            "Onboarding new team members"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered contract review",
            "Automated key term extraction",
            "AI suggestions for clauses",
            "Predictive negotiation time analysis",
            "Natural language contract search",
            "AI-powered document summarization",
            "Smart compliance alerts",
            "AI-driven draft comparison",
            "Automated approval routing",
            "AI chatbot for contract status",
            "Predictive renewal likelihood analysis",
            "AI recommendations for negotiation",
            "Smart detection of ambiguous language",
            "Automated renewal document generation",
            "AI-powered contract 'risk score'",
            "Negotiation comment sentiment analysis",
            "AI suggestions for language improvement",
            "Automated obligation-to-task mapping",
            "AI 'what-if' analysis for terms",
            "Smart discovery of related contracts"
          ]
        }
      ]
    },
    "Catalyst": {
      sections: [
        {
          title: "Functions",
          icon: <Code className="w-4 h-4" />,
          items: ["All Functions", "HTTP Functions", "Cron Functions", "Event Functions", "Function Templates", "Function Logs", "Cloud Functions", "Function Metrics", "Event Triggers", "Cron Jobs"]
        },
        {
          title: "Database",
          icon: <Database className="w-4 h-4" />,
          items: ["Tables", "Data Browser", "Query Builder", "Database Backup", "Migrations", "Database Analytics", "Data Store", "File Store", "Cache", "Search"]
        },
        {
          title: "Deployments",
          icon: <Upload className="w-4 h-4" />,
          items: ["Project Deployments", "Version History", "Build Logs", "Environment Variables", "Custom Domains"]
        },
        {
          title: "File Storage",
          icon: <Folder className="w-4 h-4" />,
          items: ["File Manager", "Upload Files", "Download Files", "File Permissions", "Storage Analytics"]
        },
        {
          title: "Authentication",
          icon: <Lock className="w-4 h-4" />,
          items: ["User Management", "Auth Settings", "Social Login", "Custom Authentication", "Security Rules", "Authentication Methods", "User Roles", "Security Settings"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Function Analytics", "Database Analytics", "Performance Metrics", "Error Tracking", "Usage Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Project Settings", "Environment Settings", "API Settings", "Team Settings", "Billing"]
        },
        {
          title: "Projects",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Projects", "Web Apps", "Mobile Apps", "Microservices", "Project Templates"]
        },
        {
          title: "API Management",
          icon: <Code className="w-4 h-4" />,
          items: ["API Gateway", "API Documentation", "Rate Limiting", "API Analytics", "Webhooks"]
        },
        {
          title: "DevOps",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["CI/CD Pipeline", "Git Integration", "Environment Management", "Build Logs", "Deployment History"]
        },
        {
          title: "Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Application Logs", "Performance Monitoring", "Error Tracking", "Uptime Monitoring", "Alerts"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Deploy serverless functions",
            "Simple key-value data store",
            "Host static web assets",
            "CLI for local development",
            "Function & API logs"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Fully managed infrastructure",
            "Built-in user authentication",
            "Scheduled cron jobs",
            "API gateway",
            "User file storage"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Avoiding server management",
            "Building a scalable backend",
            "Implementing user authentication",
            "Storing data without a DB admin",
            "Running scheduled background tasks",
            "Building and securing APIs",
            "Matching dev and prod environments",
            "Storing user-uploaded files",
            "Monitoring a serverless app",
            "Getting an app to market quickly"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered code suggestions",
            "Smart performance bottleneck detection",
            "AI security vulnerability scanning",
            "Predictive cost analysis",
            "Natural language deployment commands",
            "AI optimization of function settings",
            "Automated API documentation",
            "AI-powered log analysis",
            "Smart data modeling suggestions",
            "AI architecture recommendations",
            "Automated code refactoring",
            "AI 'what-if' cost analysis",
            "Smart alerts for unusual activity",
            "AI-assisted platform migration",
            "Predictive autoscaling advice",
            "AI developer support chatbot",
            "Automated unit test generation",
            "Smart infinite loop detection",
            "AI insights into API usage",
            "Automated security policy generation"
          ]
        }
      ]
    },
    "RPA": {
      sections: [
        {
          title: "Bots",
          icon: <Bot className="w-4 h-4" />,
          items: ["All Bots", "Active Bots", "Scheduled Bots", "Bot Templates", "Bot Library", "Failed Bots", "Bot Builder"]
        },
        {
          title: "Workflows",
          icon: <Zap className="w-4 h-4" />,
          items: ["All Workflows", "Workflow Builder", "Workflow Templates", "Automated Workflows", "Workflow History"]
        },
        {
          title: "Schedule",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Scheduled Tasks", "Recurring Jobs", "Job Calendar", "Schedule Management", "Time Triggers", "Task Queue", "Execution History", "Schedule Templates"]
        },
        {
          title: "Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Bot Performance", "Execution Logs", "Error Monitoring", "Real-time Status", "System Health"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Execution Analytics", "Performance Reports", "Success Rates", "Error Analysis", "Time Savings", "Execution Reports", "ROI Analysis", "Process Efficiency"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["API Integration", "Third-party Apps", "Database Connections", "Web Services", "Custom Connectors"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Bot Settings", "Security Settings", "Notification Settings", "Team Management", "License Management"]
        },
        {
          title: "Processes",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["Business Processes", "Process Library", "Process Designer", "Process Recorder", "Process Analytics"]
        },
        {
          title: "Resources",
          icon: <Server className="w-4 h-4" />,
          items: ["Bot Runners", "Resource Pool", "License Management", "System Requirements", "Performance Monitor"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Visual workflow recorder",
            "Drag-and-drop builder",
            "Library of pre-built actions",
            "Scheduled bot runs",
            "Execution history dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Unattended bots",
            "Attended bots (digital assistants)",
            "API integration",
            "Advanced error handling",
            "Centralized bot management"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Automating repetitive data entry",
            "Connecting spreadsheets to legacy apps",
            "Automating invoice processing",
            "Generating daily reports automatically",
            "Migrating data without APIs",
            "Automating new employee setup",
            "Reducing human errors in processes",
            "Handling high-volume, rule-based tasks",
            "Automating tasks on your own desktop",
            "Auditing automated processes"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered process discovery",
            "Smart OCR for documents",
            "AI computer vision for UI automation",
            "Natural language bot building",
            "AI-powered adaptive error handling",
            "Predictive analytics on bot performance",
            "AI suggestions for workflow optimization",
            "Sentiment analysis for process triggers",
            "AI-powered 'self-healing' bots",
            "Automated process documentation",
            "AI-driven bot workload management",
            "Smart bot scheduling",
            "AI 'what-if' analysis for processes",
            "Automated exception categorization",
            "AI insights into automation ROI",
            "Predictive bot failure alerts",
            "AI chatbot for building bots",
            "Smart data validation in bots",
            "AI recommendations for automation candidates",
            "Automated test case generation for bots"
          ]
        }
      ]
    },
    "QEngine": {
      sections: [
        {
          title: "Tests",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Tests", "Test Cases", "Test Scripts", "Manual Tests", "Automated Tests", "Test Templates"]
        },
        {
          title: "Test Suites",
          icon: <List className="w-4 h-4" />,
          items: ["All Suites", "Regression Suites", "Smoke Tests", "Integration Tests", "Performance Tests"]
        },
        {
          title: "Execution",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["Test Execution", "Test Runs", "Scheduled Runs", "Parallel Execution", "Test Results", "Execution History", "Cross-browser Testing", "Mobile Testing"]
        },
        {
          title: "Results",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Test Results", "Failed Tests", "Passed Tests", "Test History", "Result Analysis"]
        },
        {
          title: "Defects",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["All Defects", "Open Defects", "Defect Tracking", "Bug Reports", "Defect Analysis", "Bug Lifecycle", "Integration with Bug Tools"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Test Reports", "Coverage Reports", "Quality Reports", "Performance Reports", "Custom Reports", "Trend Analysis"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Test Configuration", "Environment Settings", "Integration Settings", "Team Settings", "Project Settings"]
        },
        {
          title: "Test Management",
          icon: <FolderOpen className="w-4 h-4" />,
          items: ["Test Suites", "Test Plans", "Test Environments", "Test Configurations", "Version Control"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Test case repository",
            "Organize tests into suites",
            "Execute test runs",
            "Capture screenshots",
            "Test run status dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Web application test automation",
            "CI/CD pipeline integration",
            "Bug tracker integration",
            "Cross-browser testing",
            "Advanced test reporting"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Reducing slow, manual testing",
            "Managing test cases in spreadsheets",
            "Gaining visibility into test progress",
            "Reporting bugs with sufficient detail",
            "Ensuring cross-browser compatibility",
            "Removing testing as a bottleneck",
            "Understanding application quality",
            "Onboarding new QA testers",
            "Improving developer-tester collaboration",
            "Reusing test cases effectively"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered 'self-healing' tests",
            "AI test case generation",
            "Smart 'impacted test' identification",
            "AI-powered visual testing",
            "Predictive 'flaky test' analysis",
            "AI analysis of test results",
            "Automated root cause analysis",
            "AI suggestions for test case design",
            "Natural language test script writing",
            "AI-powered test data generation",
            "Smart test execution optimization",
            "AI-based defect clustering",
            "Predictive release readiness analysis",
            "AI-powered exploratory testing",
            "Automated test summary reports",
            "AI-based risk-based testing",
            "Smart duplicate test case detection",
            "AI performance testing suggestions",
            "Automated accessibility testing",
            "AI-based test environment management"
          ]
        }
      ]
    },
    "eProtect": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Security Overview", "Threat Dashboard", "Email Analytics", "Protection Status", "Recent Activity", "Threat Summary", "Email Statistics", "Quick Actions"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Threat Protection", "Anti-spam", "Anti-virus", "Email Encryption", "Security Policies", "Spam Filter", "Phishing Protection", "Malware Detection"]
        },
        {
          title:. "Archive",
          icon: <Archive className="w-4 h-4" />,
          items: ["Email Archive", "Archived Messages", "Search Archive", "Archive Policies", "Data Retention", "Legal Hold"]
        },
        {
          title: "Policies",
          icon: <FileText className="w-4 h-4" />,
          items: ["Security Policies", "Compliance Policies", "Content Filtering", "Data Loss Prevention", "Policy Management"]
        },
        {
          title: "Compliance",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["Compliance Reports", "Audit Logs", "Regulatory Compliance", "Legal Hold", "eDiscovery"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Security Reports", "Archive Reports", "Compliance Reports", "Threat Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Security Settings", "Archive Settings", "Policy Settings", "User Management", "Integration Settings", "Filter Settings", "Admin Settings"]
        },
        {
          title: "Quarantine",
          icon: <XCircle className="w-4 h-4" />,
          items: ["Quarantined Emails", "Spam Quarantine", "Virus Quarantine", "Release Queue", "False Positives"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Anti-spam & anti-virus",
            "Email quarantine",
            "Allow/block lists",
            "Email traffic dashboard",
            "Content filtering"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Advanced Threat Protection",
            "Searchable email archive",
            "Data Loss Prevention (DLP)",
            "Email encryption",
            "eDiscovery"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Stopping spam from flooding inboxes",
            "Preventing employees from clicking phishing links",
            "Retaining all emails for compliance",
            "Finding specific emails for legal cases",
            "Preventing sensitive data leaks",
            "Handling legitimate emails marked as spam",
            "Sending sensitive information securely",
            "Understanding email-based threats",
            "Stopping business email compromise attacks",
            "Recovering deleted emails for audits"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered phishing detection",
            "Behavioral analysis for account compromise",
            "AI-based malicious image detection",
            "Predictive email threat analytics",
            "AI security policy recommendations",
            "Natural language eDiscovery search",
            "AI-powered email classification",
            "Smart alerts for unusual email activity",
            "AI sentiment analysis for threat detection",
            "Automated sensitive data redaction",
            "AI-powered impersonation detection",
            "Smart suggestions for DLP rules",
            "AI-driven email header analysis",
            "Automated security incident reports",
            "AI-powered user risk scoring",
            "Admin support chatbot for incidents",
            "Predictive analysis of phishing targets",
            "AI-based quarantine management",
            "Smart grouping of related threat events",
            "AI-powered threat intelligence"
          ]
        }
      ]
    },
    "Toolkit": {
      sections: [
        {
          title: "Queries",
          icon: <Search className="w-4 h-4" />,
          items: ["Database Queries", "Custom Queries", "Saved Queries", "Query Builder", "Query History"]
        },
        {
          title: "Tools",
          icon: <Settings className="w-4 h-4" />,
          items: ["Admin Tools", "Database Tools", "System Tools", "Diagnostic Tools", "Maintenance Tools"]
        },
        {
          title: "Data Analysis",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Data Explorer", "Data Reports", "Performance Analysis", "Usage Statistics", "Data Insights"]
        },
        {
          title: "System Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["System Status", "Performance Monitoring", "Resource Usage", "Error Logs", "Health Checks"]
        },
        {
          title: "Administration",
          icon: <User className="w-4 h-4" />,
          items: ["User Management", "Permission Management", "System Configuration", "Backup Management", "Security Settings"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["System Reports", "Usage Reports", "Performance Reports", "Security Reports", "Custom Reports"]
        },
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Admin Overview", "System Health", "Usage Statistics", "Quick Tools"]
        },
        {
          title: "User Management",
          icon: <Users className="w-4 h-4" />,
          items: ["User Lookup", "Account Information", "User Activities", "Permission Check", "User Analytics"]
        },
        {
          title: "Organization",
          icon: <Building2 className="w-4 h-4" />,
          items: ["Org Information", "Org Settings", "License Details", "Feature Usage", "Billing Information"]
        },
        {
          title: "Data Tools",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Export", "Data Import", "Data Migration", "Data Validation", "Bulk Operations"]
        },
        {
          title: "System Tools",
          icon: <Settings className="w-4 h-4" />,
          items: ["System Diagnostics", "Performance Monitor", "Log Analyzer", "Cache Management", "API Tools"]
        },
        {
          title: "Audit",
          icon: <Eye className="w-4 h-4" />,
          items: ["Audit Logs", "Access Logs", "Change History", "Compliance Check", "Security Audit"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "User lookup tool",
            "Permission checker",
            "View audit logs",
            "Service status checker",
            "View organization details"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Database query tool",
            "System diagnostics",
            "Bulk data management tool",
            "Centralized user management",
            "Comprehensive audit trail"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Looking up customer account details",
            "Troubleshooting system performance",
            "Performing bulk data updates",
            "Auditing system changes",
            "Running custom database queries",
            "Managing user permissions",
            "Checking system health status",
            "Answering questions about licenses",
            "Recovering deleted data",
            "Granting temporary user access"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered log analysis",
            "Natural language query interface",
            "AI query optimization suggestions",
            "Predictive system performance analytics",
            "AI root cause analysis for errors",
            "Smart alerts for activity anomalies",
            "AI security configuration recommendations",
            "Automated system health reports",
            "AI troubleshooting assistant chatbot",
            "Predictive resource needs modeling",
            "AI-based user grouping suggestions",
            "Smart detection of unused permissions",
            "AI 'what-if' analysis for changes",
            "Automated alert categorization",
            "AI insights into feature adoption",
            "Smart data migration suggestions",
            "AI 'least privilege' access recommendations",
            "Automated performance regression detection",
            "AI-based license usage forecasting",
            "Smart log event correlation"
          ]
        }
      ]
    },
    "ManageEngine": {
      sections: [
        {
          title: "Assets",
          icon: <Package className="w-4 h-4" />,
          items: ["IT Assets", "Hardware Assets", "Software Assets", "Asset Discovery", "Asset Lifecycle", "Asset Reports"]
        },
        {
          title: "Network",
          icon: <Wifi className="w-4 h-4" />,
          items: ["Network Monitoring", "Device Management", "Network Topology", "Performance Monitoring", "Network Reports"]
        },
        {
          title: "Help Desk",
          icon: <MessageSquare className="w-4 h-4" />,
          items: ["Tickets", "Incident Management", "Problem Management", "Change Management", "Knowledge Base"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Security Monitoring", "Vulnerability Assessment", "Patch Management", "Compliance Management", "Security Reports"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["IT Analytics", "Performance Analytics", "Cost Analytics", "Usage Analytics", "Custom Dashboards"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["IT Automation", "Workflow Automation", "Scheduled Tasks", "Policy Automation", "Process Automation"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["System Settings", "User Management", "Integration Settings", "Notification Settings", "License Management"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "IT help desk",
            "IT asset inventory",
            "Network monitoring",
            "IT knowledge base",
            "Status dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Automated patch management",
            "Active Directory management",
            "SIEM for threat detection",
            "Application performance monitoring",
            "Mobile Device Management"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing employee IT support tickets",
            "Tracking all company hardware/software",
            "Knowing when critical servers are down",
            "Keeping computers patched and secure",
            "Detecting network security threats",
            "Managing Active Directory users",
            "Troubleshooting slow applications",
            "Securing company mobile devices",
            "Answering repetitive IT questions",
            "Proving IT security compliance"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered IT ticket routing",
            "Predictive hardware failure",
            "AI root cause analysis for outages",
            "Smart knowledge base suggestions",
            "AI-driven threat detection",
            "Automated password reset chatbot",
            "AI recommendations for app optimization",
            "Behavioral analytics for security",
            "AI-based patch deployment suggestions",
            "Natural language IT data search",
            "AI-powered asset discovery",
            "Predictive IT ticket volume analysis",
            "Smart event correlation",
            "AI recommendations for security posture",
            "Automated IT performance reports",
            "AI 'what-if' infrastructure analysis",
            "Smart 'shadow IT' detection",
            "AI-based capacity planning",
            "Automated compliance checking",
            "AI insights into IT efficiency"
          ]
        }
      ]
    },
    "IoT": {
      sections: [
        {
          title: "Devices",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["All Devices", "Device Registry", "Device Status", "Device Groups", "Device Configuration", "Device Logs", "Online Devices", "Offline Devices", "Device Management", "Firmware Updates"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Device Analytics", "Data Visualization", "Performance Metrics", "Usage Analytics", "Predictive Analytics", "Custom Dashboards"]
        },
        {
          title: "Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Real-time Monitoring", "Device Health", "Performance Monitoring", "Alert Management", "System Status"]
        },
        {
          title: "Data Management",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Streams", "Data Storage", "Data Processing", "Data Export", "Data Quality", "Live Data", "Historical Data"]
        },
        {
          title: "Alerts & Rules",
          icon: <Bell className="w-4 h-4" />,
          items: ["Alert Rules", "Notifications", "Threshold Settings", "Automated Actions", "Escalation Rules", "Active Alerts", "Alert History"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["API Integration", "Third-party Connectors", "Data Export", "Webhook Configuration", "Custom Integration"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Device Settings", "Data Settings", "Security Settings", "User Management", "Account Settings"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Automation Rules", "Triggers", "Actions", "Workflows", "Scenarios"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Device registry",
            "Device status dashboard",
            "Simple alerts",
            "Send commands to devices",
            "View real-time data streams"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Over-the-air (OTA) firmware updates",
            "Data-driven rules engine",
            "Time-series data storage",
            "IoT data dashboards",
            "API & webhook integrations"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Managing thousands of remote devices",
            "Updating software on devices in the field",
            "Reacting instantly to sensor thresholds",
            "Storing and querying time-series data",
            "Making sense of device data",
            "Securing device communication",
            "Integrating IoT data with business apps",
            "Monitoring device fleet health",
            "Building a custom IoT backend",
            "Remotely controlling devices"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered predictive maintenance",
            "Anomaly detection in sensor data",
            "AI optimization of device battery life",
            "Predictive device failure analysis",
            "AI-driven root cause analysis",
            "Natural language data queries",
            "AI-powered sensor calibration",
            "Smart alerts with reduced false positives",
            "AI suggestions for new IoT use cases",
            "Automated device classification",
            "AI-powered 'digital twin' modeling",
            "Predictive resource consumption forecasting",
            "AI insights into operational efficiency",
            "Self-learning automation rules",
            "AI-powered IoT network security",
            "Automated device performance reports",
            "AI pattern recognition in sensor data",
            "Smart data transmission optimization",
            "AI troubleshooting chatbot",
            "Automated firmware update scheduling"
          ]
        }
      ]
    },
    "Embedded BI": {
      sections: [
        {
          title: "Embeds",
          icon: <Code className="w-4 h-4" />,
          items: ["All Embeds", "Dashboard Embeds", "Report Embeds", "Chart Embeds", "Widget Embeds", "Custom Embeds"]
        },
        {
          title: "APIs",
          icon: <Link2 className="w-4 h-4" />,
          items: ["API Documentation", "REST APIs", "JavaScript APIs", "SDK Downloads", "API Testing", "Authentication"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Usage Analytics", "Performance Metrics", "User Analytics", "Embed Analytics", "API Analytics"]
        },
        {
          title: "White-label",
          icon: <Palette className="w-4 h-4" />,
          items: ["Branding Options", "Custom Themes", "Logo Management", "Color Schemes", "UI Customization"]
        },
        {
          title: "Data Sources",
          icon: <Database className="w-4 h-4" />,
          items: ["Connect Data", "Database Connections", "File Uploads", "Cloud Connectors", "Data Refresh"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Access Control", "Domain Management", "User Authentication", "Encryption Settings", "Security Policies"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Embed Settings", "API Settings", "Integration Settings", "Account Settings", "Billing"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Embed a single chart",
            "JavaScript API",
            "Embedding management dashboard",
            "Pass filters to dashboards",
            "White-labeling"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Fully re-branded BI portal",
            "Robust API set",
            "Single Sign-On (SSO) integration",
            "Secure multi-tenant framework",
            "Embeddable report creator"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Avoiding building analytics from scratch",
            "Keeping users inside your app",
            "Providing secure analytics to customers",
            "Allowing users to create own reports",
            "Maintaining a consistent brand",
            "Managing users for embedded BI",
            "Controlling dashboards programmatically",
            "Adding value to a SaaS product",
            "Visualizing your application's data",
            "Scaling analytics as you grow"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "Expose 'Ask Zia' via API",
            "AI suggestions for reports to embed",
            "Automated insight narratives via API",
            "AI anomaly detection with webhooks",
            "Embeddable predictive analytics",
            "AI recommendations for end-users",
            "Embedded natural language querying",
            "AI-powered data preparation for users",
            "Smart UI design suggestions",
            "AI-based usage analytics",
            "Automated API code generation",
            "Embeddable 'what-if' analysis",
            "Smart security recommendations",
            "Embeddable forecasting",
            "Automated personalized dashboards",
            "AI-powered embedded support chatbot",
            "Smart performance caching",
            "AI insights into user interaction",
            "Automated broken report detection",
            "AI-based data storytelling"
          ]
        }
      ]
    },
    "Domains": {
      sections: [
        {
          title: "Domains",
          icon: <Globe className="w-4 h-4" />,
          items: ["All Domains", "Active Domains", "Expired Domains", "Pending Domains", "Domain Search", "Domain Transfer"]
        },
        {
          title: "DNS Management",
          icon: <Server className="w-4 h-4" />,
          items: ["DNS Records", "A Records", "CNAME Records", "MX Records", "TXT Records", "DNS Analytics"]
        },
        {
          title: "SSL Certificates",
          icon: <Lock className="w-4 h-4" />,
          items: ["SSL Certificates", "Certificate Installation", "Certificate Renewal", "Wildcard SSL", "SSL Analytics"]
        },
        {
          title: "Website Builder",
          icon: <Edit3 className="w-4 h-4" />,
          items: ["Build Website", "Website Templates", "Landing Pages", "Website Analytics", "Mobile Optimization"]
        },
        {
          title: "Email Setup",
          icon: <Mail className="w-4 h-4" />,
          items: ["Email Accounts", "Email Forwarding", "Email Hosting", "Email Security", "Email Analytics"]
        },
        {
          title: "WHOIS & Privacy",
          icon: <Eye className="w-4 h-4" />,
          items: ["WHOIS Information", "Domain Privacy", "Contact Information", "Privacy Protection", "Domain Lock"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Domain Settings", "DNS Settings", "Security Settings", "Billing Settings", "Renewal Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Domain name search",
            "DNS record management",
            "Domain forwarding",
            "WHOIS privacy",
            "Domain dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Domain transfers",
            "Bulk domain management",
            "Integrated email setup",
            "Integrated website builder",
            "SSL certificate management"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Getting a custom domain name",
            "Pointing a domain to a host",
            "Getting a professional email address",
            "Protecting personal info",
            "Avoiding domain expiration",
            "Managing many domains",
            "Securing a website with SSL",
            "Connecting a domain to any platform",
            "Moving a domain from another provider",
            "Creating subdomains"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-powered domain name suggestions",
            "Predictive domain value analysis",
            "AI trademark infringement detection",
            "Smart domain extension suggestions",
            "AI-powered DNS configuration checker",
            "Automated DNS record generation",
            "AI monitoring for domain spoofing",
            "Natural language DNS management",
            "AI recommendations for portfolio buys",
            "Smart expiration alerts",
            "AI-powered brand protection",
            "Automated email forwarding suggestions",
            "AI insights into domain traffic",
            "Smart DNS misconfiguration detection",
            "AI 'domain portfolio' health score",
            "Automated email deliverability suggestions",
            "AI negotiation assistant",
            "Predictive domain popularity analysis",
            "AI chatbot for domain support",
            "Smart alerts for desired domains"
          ]
        }
      ]
    },
    "CommunitySpaces": {
      sections: [
        {
          title: "Communities",
          icon: <Users className="w-4 h-4" />,
          items: ["All Communities", "My Communities", "Public Communities", "Private Communities", "Community Templates"]
        },
        {
          title: "Members",
          icon: <User className="w-4 h-4" />,
          items: ["All Members", "Member Profiles", "Member Roles", "Member Analytics", "Member Invitations"]
        },
        {
          title: "Posts & Content",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Posts", "Popular Posts", "Recent Posts", "Content Categories", "Content Moderation"]
        },
        {
          title: "Forums",
          icon: <MessageCircle className="w-4 h-4" />,
          items: ["Discussion Forums", "Forum Topics", "Forum Categories", "Forum Moderation", "Forum Analytics"]
        },
        {
          title: "Engagement",
          icon: <Heart className="w-4 h-4" />,
          items: ["Member Engagement", "Community Events", "Gamification", "Rewards System", "Engagement Analytics"]
        },
        {
          title: "Moderation",
          icon: <Shield className="w-4 h-4" />,
          items: ["Content Moderation", "User Management", "Community Guidelines", "Reporting System", "Moderation Tools"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Community Analytics", "Member Analytics", "Content Analytics", "Engagement Metrics", "Growth Analytics"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Community Settings", "Privacy Settings", "Notification Settings", "Integration Settings", "Theme Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Discussion forums",
            "User profiles",
            "Likes and comments",
            "Moderation tools",
            "Event calendar"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Public and private groups",
            "Knowledge base",
            "Gamification system",
            "App integrations",
            "Advanced analytics"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Providing a space for customer Q&A",
            "Building brand loyalty",
            "Keeping community members engaged",
            "Managing spam and bad actors",
            "Understanding trending topics",
            "Creating focused discussion areas",
            "Welcoming new members effectively",
            "Rewarding top contributors",
            "Integrating a community with a product",
            "Sharing important resources"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI suggestions for new topics",
            "Automated content moderation",
            "AI-based member matchmaking",
            "Community sentiment analysis",
            "AI chatbot for community FAQs",
            "Automated discussion summarization",
            "AI identification of community leaders",
            "Predictive member churn analysis",
            "AI content recommendations",
            "Smart duplicate post detection",
            "AI-powered 'icebreaker' questions",
            "Natural language community search",
            "AI insights into community health",
            "Automated post tagging",
            "AI-powered 'expert finder'",
            "Smart alerts for trending topics",
            "AI recommendations for event ideas",
            "Automated 'weekly digest' generation",
            "Predictive content engagement analysis",
            "AI-powered content translation"
          ]
        }
      ]
    },
    "Publish": {
      sections: [
        {
          title: "Listings",
          icon: <MapPin className="w-4 h-4" />,
          items: ["All Listings", "Google My Business", "Bing Places", "Apple Maps", "Local Directories", "Industry Listings"]
        },
        {
          title: "Reviews",
          icon: <Star className="w-4 h-4" />,
          items: ["All Reviews", "Google Reviews", "Facebook Reviews", "Yelp Reviews", "Review Monitoring", "Review Responses"]
        },
        {
          title: "Local SEO",
          icon: <Search className="w-4 h-4" />,
          items: ["SEO Performance", "Keyword Tracking", "Local Rankings", "Citation Building", "SEO Analytics"]
        },
        {
          title: "Social Posts",
          icon: <Share2 className="w-4 h-4" />,
          items: ["Social Media Posts", "Google Posts", "Facebook Posts", "Post Scheduling", "Social Analytics"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Listing Analytics", "Review Analytics", "SEO Analytics", "Social Analytics", "Performance Reports"]
        },
        {
          title: "Reputation Management",
          icon: <ThumbsUp className="w-4 h-4" />,
          items: ["Reputation Monitoring", "Review Management", "Response Templates", "Sentiment Analysis", "Reputation Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Business Information", "Listing Settings", "Review Settings", "Notification Settings", "Integration Settings"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Update business information",
            "Monitor online reviews",
            "Review response templates",
            "Post to Google Business Profile",
            "Track local keyword rankings"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Sync listings across directories",
            "Centralized review response inbox",
            "Brand reputation monitoring",
            "Local SEO analytics",
            "Social media scheduling"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Fixing inconsistent business info",
            "Managing negative online reviews",
            "Updating dozens of listings",
            "Monitoring brand mentions",
            "Improving local search rankings",
            "Responding to reviews quickly",
            "Generating more positive reviews",
            "Keeping a Google profile active",
            "Understanding local SEO ROI",
            "Managing multiple business locations"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI-generated review responses",
            "Review sentiment analysis",
            "AI suggestions for local SEO",
            "Automated duplicate listing detection",
            "AI recommendations for directories",
            "Predictive ranking change analysis",
            "AI-generated Google Post content",
            "Smart alerts for negative mentions",
            "AI analysis of competitor reviews",
            "Natural language analytics queries",
            "AI insights from review data",
            "Automated review topic tagging",
            "AI recommendations for keywords",
            "Smart social posting time suggestions",
            "AI-powered 'reputation score'",
            "Automated performance report generation",
            "AI-based image suggestions for posts",
            "Predictive analysis of review impact",
            "AI-powered response chatbot",
            "Smart detection of review spam"
          ]
        }
      ]
    },
    "Apptics": {
      sections: [
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["App Analytics", "User Analytics", "Performance Analytics", "Custom Analytics", "Real-time Analytics", "Event Analytics", "Funnel Analysis", "Cohort Analysis"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["User Behavior", "User Segments", "User Journey", "User Retention", "User Acquisition"]
        },
        {
          title: "Performance",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["App Performance", "Load Times", "Crash Reports", "Error Tracking", "Performance Optimization", "ANR Reports", "Performance Monitoring", "Memory Usage"]
        },
        {
          title: "Events",
          icon: <Target className="w-4 h-4" />,
          items: ["Custom Events", "Event Tracking", "Conversion Events", "Event Analytics", "Event Funnels"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Standard Reports", "Custom Reports", "Scheduled Reports", "Export Reports", "Report Builder", "Export Data"]
        },
        {
          title: "Integration",
          icon: <Link2 className="w-4 h-4" />,
          items: ["SDK Integration", "API Integration", "Third-party Tools", "Data Export", "Custom Integration"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["App Settings", "Analytics Settings", "Privacy Settings", "Team Settings", "Account Settings"]
        },
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["App Overview", "Key Metrics", "Real-time Data", "Performance Summary"]
        },
        {
          title: "User Behavior",
          icon: <Users className="w-4 h-4" />,
          items: ["User Sessions", "User Journey", "Heatmaps", "User Feedback", "A/B Testing"]
        },
        {
          title: "Custom Events",
          icon: <Tag className="w-4 h-4" />,
          items: ["Event Tracking", "Custom Metrics", "Goal Tracking", "Conversion Events", "Event Funnels"]
        },
        {
          title: "Small Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Real-time user analytics",
            "Crash reporting",
            "Custom event tracking",
            "Audience segmentation",
            "Key metrics dashboard"
          ]
        },
        {
          title: "Big Problem Solvers",
          icon: <Zap className="w-4 h-4" />,
          items: [
            "Funnel analysis",
            "In-app feedback & surveys",
            "Performance monitoring",
            "Push notification campaigns",
            "A/B testing"
          ]
        },
        {
          title: "Top Real-World Problems & Solutions",
          icon: <CheckCircle className="w-4 h-4" />,
          items: [
            "Understanding app usage",
            "Diagnosing app crashes",
            "Tracking user navigation",
            "Pinpointing performance bottlenecks",
            "Getting feedback from users",
            "Announcing new features",
            "Improving key workflows",
            "Identifying popular features",
            "Increasing user retention",
            "Targeting specific user groups"
          ]
        },
        {
          title: "AI-Generated Ideas",
          icon: <Bot className="w-4 h-4" />,
          items: [
            "AI root cause analysis for crashes",
            "Predictive user churn analysis",
            "AI suggestions for funnel optimization",
            "Smart performance anomaly alerts",
            "AI-driven behavioral segmentation",
            "Natural language analytics queries",
            "AI recommendations for A/B tests",
            "In-app feedback sentiment analysis",
            "Predictive app usage forecasting",
            "AI insights into power users",
            "Automated performance reports",
            "AI suggestions for push notifications",
            "Smart 'rage click' detection",
            "AI 'what-if' analysis for features",
            "Automated release health correlation",
            "AI-powered user journey mapping",
            "Predictive conversion analysis",
            "Smart industry benchmark comparison",
            "AI recommendations for app store ratings",
            "Automated user feedback tagging"
          ]
        }
      ]
    },
    // Default navigation for apps without specific structure
    "Default": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Overview", "Recent Activity", "Quick Stats", "Performance Metrics"]
        },
        {
          title: "Main Features",
          icon: <Zap className="w-4 h-4" />,
          items: ["Core Features", "Advanced Tools", "Automation", "Workflows", "Templates"]
        },
        {
          title: "Data Management",
          icon: <Database className="w-4 h-4" />,
          items: ["All Records", "Import/Export", "Data Views", "Search", "Bulk Operations", "Data Quality"]
        },
        {
          title: "Collaboration",
          icon: <Users className="w-4 h-4" />,
          items: ["Team Workspace", "Sharing", "Comments", "Notifications", "User Activity"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Standard Reports", "Custom Reports", "Analytics", "Export", "Scheduled Reports", "Dashboards"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["General Settings", "User Management", "Preferences", "Integrations", "API Access", "Security"]
        }
      ]
    }
  };

  // Return specific navigation or default for any unmapped apps
  return navigationMap[appName] || navigationMap["Default"];
};
