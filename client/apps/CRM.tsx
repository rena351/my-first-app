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