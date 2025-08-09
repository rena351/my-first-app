import { type App, type Category } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";
import { 
  ChevronDown, 
  ChevronRight, 
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
import { useState } from "react";

interface AppSidebarProps {
  app: App;
  category: Category;
  currentPage?: string;
}

// App-specific navigation structure based on Zoho.com
const getAppNavigation = (appName: string) => {
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
        }
      ]
    },
    "Shifts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Today's Schedule", "Team Overview", "Shift Statistics", "Quick Actions", "Recent Activity"]
        },
        {
          title: "Schedule",
          icon: <Calendar className="w-4 h-4" />,
          items: ["View Schedule", "Create Schedule", "Shift Templates", "Recurring Shifts", "Schedule Conflicts"]
        },
        {
          title: "Employees",
          icon: <Users className="w-4 h-4" />,
          items: ["All Employees", "Shift Assignments", "Employee Availability", "Skill Sets", "Employee Profiles"]
        },
        {
          title: "Time Tracking",
          icon: <Clock className="w-4 h-4" />,
          items: ["Clock In/Out", "Time Logs", "Break Management", "Overtime Tracking", "Time Corrections"]
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
          items: ["Schedule Reports", "Attendance Reports", "Labor Cost Reports", "Productivity Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Shift Settings", "Employee Settings", "Notification Settings", "Integration Settings", "Company Settings"]
        }
      ]
    },
    "Contracts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Contract Overview", "Recent Activity", "Pending Actions", "Contract Analytics", "Quick Stats"]
        },
        {
          title: "Contracts",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Contracts", "Active Contracts", "Draft Contracts", "Expired Contracts", "Archived Contracts"]
        },
        {
          title: "Templates",
          icon: <Bookmark className="w-4 h-4" />,
          items: ["Contract Templates", "Clause Library", "Standard Terms", "Custom Templates", "Template Categories"]
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
          items: ["Contract Reports", "Performance Analytics", "Renewal Reports", "Compliance Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Contract Settings", "Workflow Settings", "User Management", "Integration Settings", "Security Settings"]
        }
      ]
    },
    "Catalyst": {
      sections: [
        {
          title: "Functions",
          icon: <Code className="w-4 h-4" />,
          items: ["All Functions", "HTTP Functions", "Cron Functions", "Event Functions", "Function Templates", "Function Logs"]
        },
        {
          title: "Database",
          icon: <Database className="w-4 h-4" />,
          items: ["Tables", "Data Browser", "Query Builder", "Database Backup", "Migrations", "Database Analytics"]
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
          items: ["User Management", "Auth Settings", "Social Login", "Custom Authentication", "Security Rules"]
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
        }
      ]
    },
    "RPA": {
      sections: [
        {
          title: "Bots",
          icon: <Bot className="w-4 h-4" />,
          items: ["All Bots", "Active Bots", "Scheduled Bots", "Bot Templates", "Bot Library", "Failed Bots"]
        },
        {
          title: "Workflows",
          icon: <Zap className="w-4 h-4" />,
          items: ["All Workflows", "Workflow Builder", "Workflow Templates", "Automated Workflows", "Workflow History"]
        },
        {
          title: "Schedule",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Scheduled Tasks", "Recurring Jobs", "Job Calendar", "Schedule Management", "Time Triggers"]
        },
        {
          title: "Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Bot Performance", "Execution Logs", "Error Monitoring", "Real-time Status", "System Health"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Execution Analytics", "Performance Reports", "Success Rates", "Error Analysis", "Time Savings"]
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
          items: ["Test Execution", "Test Runs", "Scheduled Runs", "Parallel Execution", "Test Results"]
        },
        {
          title: "Results",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Test Results", "Failed Tests", "Passed Tests", "Test History", "Result Analysis"]
        },
        {
          title: "Defects",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["All Defects", "Open Defects", "Defect Tracking", "Bug Reports", "Defect Analysis"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Test Reports", "Coverage Reports", "Quality Reports", "Performance Reports", "Custom Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Test Configuration", "Environment Settings", "Integration Settings", "Team Settings", "Project Settings"]
        }
      ]
    },
    "eProtect": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Security Overview", "Threat Dashboard", "Email Analytics", "Protection Status", "Recent Activity"]
        },
        {
          title: "Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Threat Protection", "Anti-spam", "Anti-virus", "Email Encryption", "Security Policies"]
        },
        {
          title: "Archive",
          icon: <Archive className="w-4 h-4" />,
          items: ["Email Archive", "Archived Messages", "Search Archive", "Archive Policies", "Data Retention"]
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
          items: ["Security Settings", "Archive Settings", "Policy Settings", "User Management", "Integration Settings"]
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
        }
      ]
    },
    "IoT": {
      sections: [
        {
          title: "Devices",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["All Devices", "Device Registry", "Device Status", "Device Groups", "Device Configuration", "Device Logs"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Device Analytics", "Data Visualization", "Performance Metrics", "Usage Analytics", "Predictive Analytics"]
        },
        {
          title: "Monitoring",
          icon: <Monitor className="w-4 h-4" />,
          items: ["Real-time Monitoring", "Device Health", "Performance Monitoring", "Alert Management", "System Status"]
        },
        {
          title: "Data Management",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Streams", "Data Storage", "Data Processing", "Data Export", "Data Quality"]
        },
        {
          title: "Alerts & Rules",
          icon: <Bell className="w-4 h-4" />,
          items: ["Alert Rules", "Notifications", "Threshold Settings", "Automated Actions", "Escalation Rules"]
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
        }
      ]
    },
    "Apptics": {
      sections: [
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["App Analytics", "User Analytics", "Performance Analytics", "Custom Analytics", "Real-time Analytics"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["User Behavior", "User Segments", "User Journey", "User Retention", "User Acquisition"]
        },
        {
          title: "Performance",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["App Performance", "Load Times", "Crash Reports", "Error Tracking", "Performance Optimization"]
        },
        {
          title: "Events",
          icon: <Target className="w-4 h-4" />,
          items: ["Custom Events", "Event Tracking", "Conversion Events", "Event Analytics", "Event Funnels"]
        },
        {
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Standard Reports", "Custom Reports", "Scheduled Reports", "Export Reports", "Report Builder"]
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
        }
      ]
    },
    "Contracts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Contract Overview", "Contract Metrics", "Recent Activity", "Pending Actions", "Quick Stats"]
        },
        {
          title: "Contracts",
          icon: <FileText className="w-4 h-4" />,
          items: ["All Contracts", "Active Contracts", "Draft Contracts", "Executed Contracts", "Expired Contracts", "Templates", "My Contracts", "Recently Created", "Recently Modified"]
        },
        {
          title: "Templates",
          icon: <Copy className="w-4 h-4" />,
          items: ["Contract Templates", "Clause Library", "Template Builder", "Standard Templates", "Custom Templates", "Template Categories"]
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
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Contract Reports", "Performance Reports", "Compliance Reports", "Renewal Reports", "Risk Reports"]
        }
      ]
    },
    "Shifts": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Shifts Overview", "Today's Schedule", "Staff Status", "Quick Actions"]
        },
        {
          title: "Schedule",
          icon: <Calendar className="w-4 h-4" />,
          items: ["Weekly Schedule", "Monthly Schedule", "Daily Schedule", "Shift Templates", "Schedule Planning", "Shift Swaps"]
        },
        {
          title: "Staff",
          icon: <Users className="w-4 h-4" />,
          items: ["All Staff", "Available Staff", "Staff Schedules", "Staff Performance", "Time Off Requests"]
        },
        {
          title: "Time Tracking",
          icon: <Clock className="w-4 h-4" />,
          items: ["Clock In/Out", "Timesheet", "Attendance", "Overtime", "Break Management"]
        },
        {
          title: "Locations",
          icon: <MapPin className="w-4 h-4" />,
          items: ["All Locations", "Location Schedules", "Location Staff", "Geofencing", "Location Settings"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Time Reports", "Attendance Reports", "Schedule Reports", "Labor Cost Reports"]
        }
      ]
    },
    "eProtect": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Security Overview", "Threat Summary", "Email Statistics", "Quick Actions"]
        },
        {
          title: "Email Security",
          icon: <Shield className="w-4 h-4" />,
          items: ["Threat Protection", "Spam Filter", "Phishing Protection", "Malware Detection", "Email Encryption"]
        },
        {
          title: "Archiving",
          icon: <Archive className="w-4 h-4" />,
          items: ["Email Archive", "Search Archive", "Archive Policies", "Retention Settings", "Legal Hold"]
        },
        {
          title: "Quarantine",
          icon: <XCircle className="w-4 h-4" />,
          items: ["Quarantined Emails", "Spam Quarantine", "Virus Quarantine", "Release Queue", "False Positives"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Security Reports", "Threat Reports", "Archive Reports", "Compliance Reports"]
        },
        {
          title: "Settings",
          icon: <Settings className="w-4 h-4" />,
          items: ["Security Policies", "Filter Settings", "Archive Settings", "Admin Settings"]
        }
      ]
    },
    "Directory": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Identity Overview", "User Statistics", "Access Analytics", "Security Alerts"]
        },
        {
          title: "Users",
          icon: <Users className="w-4 h-4" />,
          items: ["All Users", "Active Users", "Inactive Users", "User Groups", "Bulk Actions", "User Import"]
        },
        {
          title: "Groups",
          icon: <Users className="w-4 h-4" />,
          items: ["All Groups", "Security Groups", "Distribution Groups", "Dynamic Groups", "Group Management"]
        },
        {
          title: "Applications",
          icon: <Grid className="w-4 h-4" />,
          items: ["All Applications", "SAML Apps", "OAuth Apps", "Custom Apps", "App Gallery"]
        },
        {
          title: "Access Control",
          icon: <Shield className="w-4 h-4" />,
          items: ["Access Policies", "Conditional Access", "Multi-factor Auth", "Single Sign-On", "Password Policy"]
        },
        {
          title: "Audit",
          icon: <Eye className="w-4 h-4" />,
          items: ["Audit Logs", "Login Logs", "Access Reports", "Security Events", "Compliance Reports"]
        }
      ]
    },
    "Catalyst": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Project Overview", "Resource Usage", "Recent Deployments", "Performance Metrics"]
        },
        {
          title: "Projects",
          icon: <Folder className="w-4 h-4" />,
          items: ["All Projects", "Web Apps", "Mobile Apps", "Microservices", "Project Templates"]
        },
        {
          title: "Functions",
          icon: <Zap className="w-4 h-4" />,
          items: ["Cloud Functions", "Function Logs", "Function Metrics", "Event Triggers", "Cron Jobs"]
        },
        {
          title: "Database",
          icon: <Database className="w-4 h-4" />,
          items: ["Data Store", "File Store", "Cache", "Search", "Database Analytics"]
        },
        {
          title: "Authentication",
          icon: <Key className="w-4 h-4" />,
          items: ["User Management", "Authentication Methods", "User Roles", "Security Settings"]
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
        }
      ]
    },
    "RPA": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Automation Overview", "Bot Performance", "Process Analytics", "Recent Activities"]
        },
        {
          title: "Bots",
          icon: <Bot className="w-4 h-4" />,
          items: ["All Bots", "Active Bots", "Scheduled Bots", "Failed Bots", "Bot Templates", "Bot Builder"]
        },
        {
          title: "Processes",
          icon: <GitBranch className="w-4 h-4" />,
          items: ["Business Processes", "Process Library", "Process Designer", "Process Recorder", "Process Analytics"]
        },
        {
          title: "Scheduler",
          icon: <Clock className="w-4 h-4" />,
          items: ["Scheduled Tasks", "Task Queue", "Execution History", "Schedule Templates", "Calendar View"]
        },
        {
          title: "Resources",
          icon: <Server className="w-4 h-4" />,
          items: ["Bot Runners", "Resource Pool", "License Management", "System Requirements", "Performance Monitor"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Execution Reports", "Performance Analytics", "ROI Analysis", "Process Efficiency", "Error Analysis"]
        }
      ]
    },
    "QEngine": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["Testing Overview", "Test Execution Stats", "Quality Metrics", "Recent Activities"]
        },
        {
          title: "Test Cases",
          icon: <CheckCircle className="w-4 h-4" />,
          items: ["All Test Cases", "Manual Tests", "Automated Tests", "Test Scripts", "Test Data Management"]
        },
        {
          title: "Test Execution",
          icon: <PlayCircle className="w-4 h-4" />,
          items: ["Test Runs", "Execution History", "Parallel Execution", "Cross-browser Testing", "Mobile Testing"]
        },
        {
          title: "Test Management",
          icon: <FolderOpen className="w-4 h-4" />,
          items: ["Test Suites", "Test Plans", "Test Environments", "Test Configurations", "Version Control"]
        },
        {
          title: "Defects",
          icon: <AlertCircle className="w-4 h-4" />,
          items: ["Bug Tracking", "Defect Reports", "Bug Lifecycle", "Defect Analytics", "Integration with Bug Tools"]
        },
        {
          title: "Reports",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Test Reports", "Coverage Reports", "Quality Reports", "Trend Analysis", "Custom Reports"]
        }
      ]
    },
    "Toolkit": {
      sections: [
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
        }
      ]
    },
    "IoT": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["IoT Overview", "Device Status", "Data Insights", "Alert Summary", "Real-time Monitoring"]
        },
        {
          title: "Devices",
          icon: <Smartphone className="w-4 h-4" />,
          items: ["All Devices", "Online Devices", "Offline Devices", "Device Groups", "Device Management", "Firmware Updates"]
        },
        {
          title: "Data Streams",
          icon: <Database className="w-4 h-4" />,
          items: ["Live Data", "Historical Data", "Data Processing", "Data Storage", "Data Export"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["Device Analytics", "Performance Analytics", "Usage Analytics", "Predictive Analytics", "Custom Dashboards"]
        },
        {
          title: "Alerts",
          icon: <Bell className="w-4 h-4" />,
          items: ["Alert Rules", "Active Alerts", "Alert History", "Notifications", "Escalations"]
        },
        {
          title: "Automation",
          icon: <Zap className="w-4 h-4" />,
          items: ["Automation Rules", "Triggers", "Actions", "Workflows", "Scenarios"]
        }
      ]
    },
    "Apptics": {
      sections: [
        {
          title: "Dashboard",
          icon: <Home className="w-4 h-4" />,
          items: ["App Overview", "Key Metrics", "Real-time Data", "Performance Summary"]
        },
        {
          title: "Analytics",
          icon: <BarChart3 className="w-4 h-4" />,
          items: ["User Analytics", "Event Analytics", "Custom Analytics", "Funnel Analysis", "Cohort Analysis"]
        },
        {
          title: "Performance",
          icon: <TrendingUp className="w-4 h-4" />,
          items: ["App Performance", "Crash Reports", "ANR Reports", "Performance Monitoring", "Memory Usage"]
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
          title: "Reports",
          icon: <FileText className="w-4 h-4" />,
          items: ["Standard Reports", "Custom Reports", "Scheduled Reports", "Export Data", "Report Builder"]
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

export default function AppSidebar({ app, category, currentPage = "Dashboard" }: AppSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Dashboard"]);
  const navigation = getAppNavigation(app.name);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  return (
    <div className="w-64 bg-aura-dark-secondary border-r border-aura-gray h-full flex flex-col">
      {/* App Header */}
      <div className="p-4 border-b border-aura-gray">
        <div className="flex items-center space-x-3">
          <div 
            className="p-2 rounded-lg"
            style={{ 
              backgroundColor: `${category.color}20`,
              color: category.color 
            }}
          >
            <i className={`${app.icon} text-lg`}></i>
          </div>
          <div>
            <h2 className="font-bold text-lg">{app.name}</h2>
            <p className="text-xs text-gray-400">{category.name}</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ScrollArea className="flex-1 p-2">
        <nav className="space-y-1">
          {navigation.sections.map((section: any, sectionIndex: number) => {
            const isExpanded = expandedSections.includes(section.title);
            
            return (
              <div key={sectionIndex} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.title)}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${section.title === "Dashboard" && currentPage === "Dashboard" 
                      ? `text-black` 
                      : "text-gray-300 hover:text-white hover:bg-aura-gray/50"
                    }
                  `}
                  style={section.title === "Dashboard" && currentPage === "Dashboard" ? {
                    backgroundColor: category.color,
                    color: '#000'
                  } : {}}
                >
                  <div className="flex items-center space-x-2">
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {isExpanded && (
                  <div className="ml-6 space-y-1">
                    {section.items.map((item: string, itemIndex: number) => (
                      <Link 
                        key={itemIndex}
                        href={`/app/${app.id}/${section.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <div
                          className={`
                            block px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer
                            ${currentPage === item
                              ? `text-black font-medium`
                              : "text-gray-400 hover:text-white hover:bg-aura-gray/30"
                            }
                          `}
                          style={currentPage === item ? {
                            backgroundColor: `${category.color}40`,
                            color: category.color
                          } : {}}
                        >
                          {item}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Quick Actions Footer */}
      <div className="p-4 border-t border-aura-gray">
        <div className="space-y-2">
          <Button 
            size="sm" 
            className="w-full justify-start text-xs"
            style={{ 
              backgroundColor: `${category.color}20`,
              color: category.color,
              border: `1px solid ${category.color}40`
            }}
          >
            <Zap className="w-3 h-3 mr-2" />
            Quick Add
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full justify-start text-xs text-gray-400 hover:text-white"
          >
            <Settings className="w-3 h-3 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
}