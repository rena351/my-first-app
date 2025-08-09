import { type Category, type App, type Suite, type InsertCategory, type InsertApp, type InsertSuite } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Categories
  getCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Apps
  getApps(): Promise<App[]>;
  getAppsByCategory(categoryId: string): Promise<App[]>;
  getAppById(id: string): Promise<App | undefined>;
  createApp(app: InsertApp): Promise<App>;
  searchApps(query: string): Promise<App[]>;

  // Suites
  getSuites(): Promise<Suite[]>;
  getSuiteById(id: string): Promise<Suite | undefined>;
  createSuite(suite: InsertSuite): Promise<Suite>;
}

export class MemStorage implements IStorage {
  private categories: Map<string, Category>;
  private apps: Map<string, App>;
  private suites: Map<string, Suite>;

  constructor() {
    this.categories = new Map();
    this.apps = new Map();
    this.suites = new Map();
    this.initializeData();
  }

  private initializeData() {
    // Initialize categories with accurate app counts
    const categoriesData: Array<Omit<Category, 'id'>> = [
      { name: "Sales", description: "Complete sales automation and CRM solutions", icon: "fas fa-chart-line", color: "#00d4ff", appCount: 8 },
      { name: "Marketing", description: "Comprehensive marketing automation suite", icon: "fas fa-bullhorn", color: "#8b5cf6", appCount: 16 },
      { name: "Commerce", description: "Complete eCommerce platform solution", icon: "fas fa-shopping-cart", color: "#06ffa5", appCount: 1 },
      { name: "Service", description: "Customer service and support tools", icon: "fas fa-headset", color: "#eab308", appCount: 6 },
      { name: "Finance", description: "Complete financial management suite", icon: "fas fa-calculator", color: "#22c55e", appCount: 10 },
      { name: "Email & Collaboration", description: "Complete collaboration and productivity suite", icon: "fas fa-envelope", color: "#3b82f6", appCount: 20 },
      { name: "Human Resources", description: "Complete HR management platform", icon: "fas fa-users", color: "#ec4899", appCount: 7 },
      { name: "Legal", description: "Legal and contract management tools", icon: "fas fa-gavel", color: "#f97316", appCount: 2 },
      { name: "Security & IT", description: "Enterprise security and IT management", icon: "fas fa-shield-alt", color: "#ef4444", appCount: 12 },
      { name: "BI & Analytics", description: "Business intelligence and analytics platform", icon: "fas fa-chart-bar", color: "#6366f1", appCount: 4 },
      { name: "Project Management", description: "Complete project management suite", icon: "fas fa-tasks", color: "#14b8a6", appCount: 3 },
      { name: "Developer Platforms", description: "Development tools and platforms", icon: "fas fa-code", color: "#a855f7", appCount: 12 }
    ];

    categoriesData.forEach(cat => {
      const id = randomUUID();
      this.categories.set(id, { ...cat, id });
    });

    // Initialize apps for each category
    this.initializeApps();
    this.initializeSuites();
  }

  private initializeApps() {
    const categories = Array.from(this.categories.values());
    
    const appsData: Array<Omit<App, 'id'>> = [
      // Sales Apps (8 Apps)
      { name: "CRM", description: "Comprehensive CRM platform", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-users", features: ["Lead Management", "Contact Management", "Deal Tracking", "Sales Analytics"], shortcuts: ["Dashboard", "Leads", "Contacts", "Deals", "Activities", "Reports", "Settings"] },
      { name: "Bigin", description: "Simple CRM for small businesses", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-seedling", features: ["Pipeline Management", "Contact Organization", "Deal Insights"], shortcuts: ["Pipeline", "Contacts", "Deals", "Reports"] },
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "SalesIQ", description: "Live chat and visitor engagement", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-comments", features: ["Live Chat", "Visitor Tracking", "Lead Scoring"], shortcuts: ["Chat", "Visitors", "Analytics", "Settings"] },
      { name: "Forms", description: "Online form builder", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-clipboard-list", features: ["Form Builder", "Response Collection", "Data Analysis"], shortcuts: ["Forms", "Responses", "Analytics", "Settings"] },
      { name: "RouteIQ", description: "Sales map visualization and route planning", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-route", features: ["Route Optimization", "Territory Management", "Sales Mapping"], shortcuts: ["Routes", "Territories", "Maps", "Reports"] },
      { name: "Bookings", description: "Appointment scheduling", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-calendar-alt", features: ["Online Scheduling", "Calendar Integration", "Automated Reminders"], shortcuts: ["Calendar", "Bookings", "Services", "Settings"] },
      { name: "Thrive", description: "Loyalty and affiliate management", categoryId: categories.find(c => c.name === "Sales")!.id, icon: "fas fa-trophy", features: ["Loyalty Programs", "Affiliate Tracking", "Reward Management"], shortcuts: ["Programs", "Affiliates", "Rewards", "Analytics"] },

      // Marketing Apps (16 Apps)
      { name: "Campaigns", description: "Email campaign creator", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-mail-bulk", features: ["Email Templates", "Campaign Management", "A/B Testing"], shortcuts: ["Campaigns", "Templates", "Analytics", "Settings"] },
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "SalesIQ", description: "Live chat and visitor engagement", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-comments", features: ["Live Chat", "Visitor Tracking", "Lead Scoring"], shortcuts: ["Chat", "Visitors", "Analytics", "Settings"] },
      { name: "Forms", description: "Online form builder", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-clipboard-list", features: ["Form Builder", "Response Collection", "Data Analysis"], shortcuts: ["Forms", "Responses", "Analytics", "Settings"] },
      { name: "Backstage", description: "Event management software", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-calendar-check", features: ["Event Planning", "Registration Management", "Ticketing"], shortcuts: ["Events", "Registrations", "Tickets", "Analytics"] },
      { name: "Social", description: "Social media management", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-share-alt", features: ["Multi-platform Publishing", "Content Scheduling", "Social Analytics"], shortcuts: ["Posts", "Calendar", "Analytics", "Settings"] },
      { name: "Survey", description: "Survey design and distribution", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-poll", features: ["Survey Builder", "Response Collection", "Data Visualization"], shortcuts: ["Surveys", "Responses", "Reports", "Settings"] },
      { name: "Marketing Automation", description: "All-in-one marketing automation", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-robot", features: ["Workflow Automation", "Lead Nurturing", "Behavioral Triggers"], shortcuts: ["Workflows", "Leads", "Analytics", "Settings"] },
      { name: "Sites", description: "Website builder", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-globe", features: ["Drag & Drop Builder", "Responsive Templates", "SEO Optimization"], shortcuts: ["Sites", "Templates", "SEO", "Analytics"] },
      { name: "Webinar", description: "Webinar platform", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-video", features: ["Live Streaming", "Registration Management", "Recording"], shortcuts: ["Webinars", "Registrations", "Recordings", "Analytics"] },
      { name: "PageSense", description: "Website conversion optimization", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-chart-line", features: ["A/B Testing", "Heatmaps", "Conversion Tracking"], shortcuts: ["Tests", "Heatmaps", "Analytics", "Settings"] },
      { name: "LandingPage", description: "Landing page builder", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-window-maximize", features: ["Template Library", "Conversion Optimization", "Lead Capture"], shortcuts: ["Pages", "Templates", "Analytics", "Settings"] },
      { name: "Domains", description: "Domain registration and DNS management", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-server", features: ["Domain Registration", "DNS Management", "SSL Certificates"], shortcuts: ["Domains", "DNS", "SSL", "Settings"] },
      { name: "CommunitySpaces", description: "Online community platform", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-users", features: ["Forum Management", "Member Engagement", "Content Moderation"], shortcuts: ["Communities", "Members", "Posts", "Settings"] },
      { name: "Publish", description: "Local business listings management", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-map-marked-alt", features: ["Listing Management", "Review Monitoring", "Local SEO"], shortcuts: ["Listings", "Reviews", "Analytics", "Settings"] },
      { name: "Thrive", description: "Loyalty and affiliate management", categoryId: categories.find(c => c.name === "Marketing")!.id, icon: "fas fa-trophy", features: ["Loyalty Programs", "Affiliate Tracking", "Reward Management"], shortcuts: ["Programs", "Affiliates", "Rewards", "Analytics"] },

      // Commerce and POS (1 App)
      { name: "Commerce", description: "eCommerce platform", categoryId: categories.find(c => c.name === "Commerce")!.id, icon: "fas fa-store", features: ["Online Store", "Inventory Management", "Payment Processing"], shortcuts: ["Store", "Products", "Orders", "Analytics", "Settings"] },

      // Service Apps (6 Apps)
      { name: "Desk", description: "Helpdesk software", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-life-ring", features: ["Ticket Management", "Knowledge Base", "Customer Support"], shortcuts: ["Tickets", "Knowledge Base", "Reports", "Settings"] },
      { name: "Assist", description: "Remote support and access", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-hands-helping", features: ["Remote Desktop", "Screen Sharing", "File Transfer"], shortcuts: ["Sessions", "Computers", "Reports", "Settings"] },
      { name: "SalesIQ", description: "Live chat and visitor engagement", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-comments", features: ["Live Chat", "Visitor Tracking", "Lead Scoring"], shortcuts: ["Chat", "Visitors", "Analytics", "Settings"] },
      { name: "Bookings", description: "Appointment scheduling", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-calendar-alt", features: ["Online Scheduling", "Calendar Integration", "Automated Reminders"], shortcuts: ["Calendar", "Bookings", "Services", "Settings"] },
      { name: "FSM", description: "Field Service Management platform for service businesses", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-tools", features: ["Work Order Management", "Technician Scheduling", "Inventory Tracking"], shortcuts: ["Work Orders", "Schedule", "Inventory", "Reports"] },
      { name: "Lens", description: "Remote assistance with augmented reality", categoryId: categories.find(c => c.name === "Service")!.id, icon: "fas fa-eye", features: ["AR Support", "Visual Assistance", "Real-time Collaboration"], shortcuts: ["Sessions", "Contacts", "Analytics", "Settings"] },

      // Finance Apps (10 Apps)
      { name: "Books", description: "Accounting platform", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-book", features: ["Double-entry Accounting", "Financial Reports", "Tax Management"], shortcuts: ["Dashboard", "Transactions", "Reports", "Settings"] },
      { name: "Payroll", description: "Payroll processing software", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-money-check-alt", features: ["Salary Processing", "Tax Calculations", "Compliance Management"], shortcuts: ["Employees", "Payroll", "Reports", "Settings"] },
      { name: "Expense", description: "Expense reporting", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-receipt", features: ["Expense Tracking", "Receipt Management", "Approval Workflows"], shortcuts: ["Expenses", "Reports", "Approvals", "Settings"] },
      { name: "Inventory", description: "Stock and inventory control", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-boxes", features: ["Stock Management", "Warehouse Tracking", "Order Fulfillment"], shortcuts: ["Items", "Warehouses", "Orders", "Reports"] },
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "Billing", description: "End-to-end billing solution", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-file-invoice-dollar", features: ["Recurring Billing", "Payment Processing", "Revenue Recognition"], shortcuts: ["Subscriptions", "Invoices", "Payments", "Analytics"] },
      { name: "Invoice", description: "Free invoicing solution", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-file-invoice", features: ["Invoice Creation", "Payment Tracking", "Client Management"], shortcuts: ["Invoices", "Clients", "Payments", "Reports"] },
      { name: "Practice", description: "Practice management for accounting firms", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-briefcase", features: ["Client Management", "Time Tracking", "Workflow Management"], shortcuts: ["Clients", "Projects", "Time", "Reports"] },
      { name: "Checkout", description: "Online payment page collector", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-credit-card", features: ["Payment Pages", "Checkout Flows", "Payment Analytics"], shortcuts: ["Pages", "Payments", "Analytics", "Settings"] },
      { name: "Payments", description: "Unified payment solution", categoryId: categories.find(c => c.name === "Finance")!.id, icon: "fas fa-wallet", features: ["Payment Gateway", "Multi-currency Support", "Fraud Protection"], shortcuts: ["Transactions", "Gateways", "Analytics", "Settings"] },

      // Email, Storage, and Collaboration Apps (20 Apps)
      { name: "Mail", description: "Secure email service", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-envelope", features: ["Secure Email", "Calendar Integration", "Contact Management"], shortcuts: ["Inbox", "Calendar", "Contacts", "Settings"] },
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "WorkDrive", description: "Online file management", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-cloud", features: ["File Storage", "Team Collaboration", "Version Control"], shortcuts: ["Files", "Shared", "Recent", "Settings"] },
      { name: "Connect", description: "Employee experience platform", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-network-wired", features: ["Social Networking", "Employee Engagement", "Communication"], shortcuts: ["Feed", "Groups", "Events", "Settings"] },
      { name: "Cliq", description: "Team chat", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-comment-dots", features: ["Team Messaging", "File Sharing", "Video Calls"], shortcuts: ["Chats", "Channels", "Calls", "Settings"] },
      { name: "ZeptoMail", description: "Transactional email sending service", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-paper-plane", features: ["Email API", "Delivery Analytics", "Template Management"], shortcuts: ["Emails", "Templates", "Analytics", "Settings"] },
      { name: "Meeting", description: "Online meeting and webinar software", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-video", features: ["Video Conferencing", "Screen Sharing", "Recording"], shortcuts: ["Meetings", "Schedule", "Recordings", "Settings"] },
      { name: "Bookings", description: "Appointment scheduling", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-calendar-alt", features: ["Online Scheduling", "Calendar Integration", "Automated Reminders"], shortcuts: ["Calendar", "Bookings", "Services", "Settings"] },
      { name: "Learn", description: "Knowledge and learning management", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-graduation-cap", features: ["Course Creation", "Learning Paths", "Progress Tracking"], shortcuts: ["Courses", "Progress", "Reports", "Settings"] },
      { name: "TeamInbox", description: "Shared inboxes for teams", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-inbox", features: ["Shared Email Management", "Team Collaboration", "Ticket Assignment"], shortcuts: ["Inbox", "Teams", "Reports", "Settings"] },
      { name: "Office Integrator", description: "Built-in document editors", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-file-alt", features: ["Document Editing", "Real-time Collaboration", "Format Support"], shortcuts: ["Documents", "Recent", "Shared", "Settings"] },
      { name: "Writer", description: "Word processor", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-pen", features: ["Document Creation", "Collaboration", "Templates"], shortcuts: ["Documents", "Templates", "Recent", "Settings"] },
      { name: "Tables", description: "Work management tool", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-table", features: ["Database Management", "Workflow Automation", "Team Collaboration"], shortcuts: ["Tables", "Forms", "Workflows", "Reports"] },
      { name: "Notebook", description: "Note-taking app", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-sticky-note", features: ["Note Organization", "Collaboration", "Cross-platform Sync"], shortcuts: ["Notes", "Notebooks", "Tags", "Search"] },
      { name: "Show", description: "Presentation software", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-presentation", features: ["Slide Creation", "Collaboration", "Templates"], shortcuts: ["Presentations", "Templates", "Shared", "Settings"] },
      { name: "Sheet", description: "Spreadsheet software", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-file-excel", features: ["Spreadsheet Creation", "Data Analysis", "Collaboration"], shortcuts: ["Sheets", "Templates", "Charts", "Settings"] },
      { name: "Office Suite", description: "Collaborative work platform", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-briefcase", features: ["Integrated Office Tools", "Team Collaboration", "Document Management"], shortcuts: ["Documents", "Spreadsheets", "Presentations", "Settings"] },
      { name: "Calendar", description: "Online business calendar", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-calendar", features: ["Event Scheduling", "Team Calendars", "Meeting Integration"], shortcuts: ["Calendar", "Events", "Meetings", "Settings"] },
      { name: "ToDo", description: "Collaborative task management", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-tasks", features: ["Task Management", "Project Organization", "Team Collaboration"], shortcuts: ["Tasks", "Projects", "Teams", "Reports"] },
      { name: "PDF Editor", description: "Online PDF editing tool", categoryId: categories.find(c => c.name === "Email & Collaboration")!.id, icon: "fas fa-file-pdf", features: ["PDF Editing", "Annotation", "Form Creation"], shortcuts: ["Editor", "Forms", "Convert", "Settings"] },

      // Human Resources Apps (7 Apps)
      { name: "People", description: "HR process management", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-user-tie", features: ["Employee Management", "Performance Reviews", "Onboarding"], shortcuts: ["Employees", "Performance", "Onboarding", "Reports"] },
      { name: "Payroll", description: "Payroll processing software", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-money-check-alt", features: ["Salary Processing", "Tax Calculations", "Compliance Management"], shortcuts: ["Employees", "Payroll", "Reports", "Settings"] },
      { name: "Expense", description: "Expense reporting", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-receipt", features: ["Expense Tracking", "Receipt Management", "Approval Workflows"], shortcuts: ["Expenses", "Reports", "Approvals", "Settings"] },
      { name: "Recruit", description: "Recruiting and hiring platform", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-search", features: ["Job Posting", "Candidate Management", "Interview Scheduling"], shortcuts: ["Jobs", "Candidates", "Interviews", "Reports"] },
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "Workerly", description: "Temporary staffing management", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-clock", features: ["Staff Scheduling", "Time Tracking", "Payroll Integration"], shortcuts: ["Staff", "Schedule", "Time", "Payroll"] },
      { name: "Shifts", description: "Employee scheduling and time tracking", categoryId: categories.find(c => c.name === "Human Resources")!.id, icon: "fas fa-clock", features: ["Shift Scheduling", "Time Tracking", "Attendance Management"], shortcuts: ["Shifts", "Schedule", "Attendance", "Reports"] },

      // Legal Apps (2 Apps)
      { name: "Sign", description: "Digital signature app", categoryId: categories.find(c => c.name === "Legal")!.id, icon: "fas fa-signature", features: ["Digital Signatures", "Document Templates", "Workflow Management"], shortcuts: ["Documents", "Templates", "Workflows", "Settings"] },
      { name: "Contracts", description: "Contract lifecycle management", categoryId: categories.find(c => c.name === "Legal")!.id, icon: "fas fa-file-contract", features: ["Contract Creation", "Lifecycle Management", "Compliance Tracking"], shortcuts: ["Contracts", "Templates", "Approvals", "Reports"] },

      // Security and IT Management Apps (12 Apps)
      { name: "Creator", description: "Custom business app platform", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-code", features: ["App Development", "Workflow Automation", "Database Management"], shortcuts: ["Apps", "Forms", "Workflows", "Database"] },
      { name: "Assist", description: "Remote support and access", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-hands-helping", features: ["Remote Desktop", "Screen Sharing", "File Transfer"], shortcuts: ["Sessions", "Computers", "Reports", "Settings"] },
      { name: "Vault", description: "Online password manager", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-lock", features: ["Password Management", "Secure Storage", "Team Sharing"], shortcuts: ["Passwords", "Secure Notes", "Settings", "Reports"] },
      { name: "eProtect", description: "Email security and archiving", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-shield-alt", features: ["Email Security", "Archiving", "Compliance"], shortcuts: ["Security", "Archive", "Policies", "Reports"] },
      { name: "Directory", description: "Workforce identity and access management", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-users-cog", features: ["Identity Management", "Access Control", "Single Sign-On"], shortcuts: ["Users", "Groups", "Policies", "Reports"] },
      { name: "Catalyst", description: "Pro-code app deployment platform", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-rocket", features: ["Application Deployment", "Serverless Functions", "Database Management"], shortcuts: ["Functions", "Database", "Deployments", "Logs"] },
      { name: "RPA", description: "Robotic Process Automation task automation", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-robot", features: ["Process Automation", "Task Scheduling", "Bot Management"], shortcuts: ["Bots", "Workflows", "Schedule", "Analytics"] },
      { name: "QEngine", description: "Test automation software", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-vial", features: ["Automated Testing", "Test Management", "Quality Assurance"], shortcuts: ["Tests", "Suites", "Results", "Reports"] },
      { name: "Lens", description: "Remote assistance with augmented reality", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-eye", features: ["AR Support", "Visual Assistance", "Real-time Collaboration"], shortcuts: ["Sessions", "Contacts", "Analytics", "Settings"] },
      { name: "OneAuth", description: "Multi-factor authenticator", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-key", features: ["Multi-factor Authentication", "Token Generation", "Security Management"], shortcuts: ["Tokens", "Accounts", "Security", "Settings"] },
      { name: "Toolkit", description: "Admin lookup queries", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-toolbox", features: ["Database Queries", "Admin Tools", "Data Analysis"], shortcuts: ["Queries", "Tools", "Reports", "Settings"] },
      { name: "ManageEngine", description: "Enterprise IT management solutions", categoryId: categories.find(c => c.name === "Security & IT")!.id, icon: "fas fa-server", features: ["IT Asset Management", "Network Monitoring", "Help Desk"], shortcuts: ["Assets", "Network", "Tickets", "Reports"] },

      // BI and Analytics Apps (4 Apps)
      { name: "Analytics", description: "Self-service BI and analytics", categoryId: categories.find(c => c.name === "BI & Analytics")!.id, icon: "fas fa-chart-bar", features: ["Data Visualization", "Report Generation", "Dashboard Creation"], shortcuts: ["Dashboards", "Reports", "Data Sources", "Settings"] },
      { name: "IoT", description: "IoT analytics for operational intelligence", categoryId: categories.find(c => c.name === "BI & Analytics")!.id, icon: "fas fa-wifi", features: ["Device Management", "Data Analytics", "Real-time Monitoring"], shortcuts: ["Devices", "Analytics", "Monitoring", "Settings"] },
      { name: "DataPrep", description: "ETL tool for data integration", categoryId: categories.find(c => c.name === "BI & Analytics")!.id, icon: "fas fa-database", features: ["Data Preparation", "ETL Processes", "Data Integration"], shortcuts: ["Sources", "Flows", "Jobs", "Settings"] },
      { name: "Embedded BI", description: "Embedded and white-label BI solutions", categoryId: categories.find(c => c.name === "BI & Analytics")!.id, icon: "fas fa-chart-pie", features: ["Embedded Analytics", "White-label Solutions", "API Integration"], shortcuts: ["Embeds", "APIs", "Analytics", "Settings"] },

      // Project Management Apps (3 Apps)
      { name: "Projects", description: "Project management and tracking", categoryId: categories.find(c => c.name === "Project Management")!.id, icon: "fas fa-project-diagram", features: ["Project Planning", "Task Management", "Time Tracking"], shortcuts: ["Projects", "Tasks", "Time", "Reports"] },
      { name: "Sprints", description: "Planning tool for scrum teams", categoryId: categories.find(c => c.name === "Project Management")!.id, icon: "fas fa-running", features: ["Sprint Planning", "Backlog Management", "Scrum Boards"], shortcuts: ["Sprints", "Backlog", "Board", "Reports"] },
      { name: "BugTracker", description: "Bug tracking software", categoryId: categories.find(c => c.name === "Project Management")!.id, icon: "fas fa-bug", features: ["Bug Tracking", "Issue Management", "Quality Assurance"], shortcuts: ["Bugs", "Issues", "Projects", "Reports"] },

      // Developer Platforms Apps (12 Apps)
      { name: "Creator", description: "Custom business app platform", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-code", features: ["App Development", "Workflow Automation", "Database Management"], shortcuts: ["Apps", "Forms", "Workflows", "Database"] },
      { name: "ZeptoMail", description: "Transactional email sending service", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-paper-plane", features: ["Email API", "Delivery Analytics", "Template Management"], shortcuts: ["Emails", "Templates", "Analytics", "Settings"] },
      { name: "IoT", description: "IoT platform for connected businesses", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-wifi", features: ["Device Management", "Data Analytics", "Real-time Monitoring"], shortcuts: ["Devices", "Analytics", "Monitoring", "Settings"] },
      { name: "Flow", description: "Workflow automation and integration", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-sitemap", features: ["Workflow Automation", "API Integration", "Process Management"], shortcuts: ["Flows", "Integrations", "Triggers", "Settings"] },
      { name: "Catalyst", description: "Pro-code app deployment platform", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-rocket", features: ["Application Deployment", "Serverless Functions", "Database Management"], shortcuts: ["Functions", "Database", "Deployments", "Logs"] },
      { name: "DataPrep", description: "ETL tool for data integration", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-database", features: ["Data Preparation", "ETL Processes", "Data Integration"], shortcuts: ["Sources", "Flows", "Jobs", "Settings"] },
      { name: "Office Integrator", description: "Built-in document editors", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-file-alt", features: ["Document Editing", "Real-time Collaboration", "Format Support"], shortcuts: ["Documents", "Recent", "Shared", "Settings"] },
      { name: "Tables", description: "Work management tool", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-table", features: ["Database Management", "Workflow Automation", "Team Collaboration"], shortcuts: ["Tables", "Forms", "Workflows", "Reports"] },
      { name: "RPA", description: "Robotic Process Automation task automation", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-robot", features: ["Process Automation", "Task Scheduling", "Bot Management"], shortcuts: ["Bots", "Workflows", "Schedule", "Analytics"] },
      { name: "QEngine", description: "Test automation software", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-vial", features: ["Automated Testing", "Test Management", "Quality Assurance"], shortcuts: ["Tests", "Suites", "Results", "Reports"] },
      { name: "Apptics", description: "Application analytics", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-mobile-alt", features: ["App Analytics", "User Behavior", "Performance Monitoring"], shortcuts: ["Analytics", "Users", "Performance", "Reports"] },
      { name: "Embedded BI", description: "Embedded and white-label BI solutions", categoryId: categories.find(c => c.name === "Developer Platforms")!.id, icon: "fas fa-chart-pie", features: ["Embedded Analytics", "White-label Solutions", "API Integration"], shortcuts: ["Embeds", "APIs", "Analytics", "Settings"] }
    ];

    appsData.forEach(app => {
      const id = randomUUID();
      this.apps.set(id, { 
        ...app, 
        id,
        features: [...app.features] as string[],
        shortcuts: [...app.shortcuts] as string[]
      });
    });
  }

  private initializeSuites() {
    const apps = Array.from(this.apps.values());
    
    const suitesData: Array<Omit<Suite, 'id'>> = [
      { name: "CRM Plus", description: "Unified customer experience platform", color: "#00d4ff", appIds: apps.filter(app => ["CRM", "SalesIQ", "Desk", "Campaigns", "Social"].includes(app.name)).map(app => app.id) },
      { name: "Service Plus", description: "Unified customer service platform", color: "#eab308", appIds: apps.filter(app => ["Desk", "Assist", "SalesIQ", "Lens", "FSM"].includes(app.name)).map(app => app.id) },
      { name: "Finance Plus", description: "All-in-one finance and operations suite", color: "#22c55e", appIds: apps.filter(app => ["Books", "Payroll", "Expense", "Inventory", "Billing", "Invoice"].includes(app.name)).map(app => app.id) },
      { name: "People Plus", description: "Comprehensive HR platform", color: "#ec4899", appIds: apps.filter(app => ["People", "Recruit", "Payroll", "Expense", "Shifts"].includes(app.name)).map(app => app.id) },
      { name: "Workplace", description: "Team productivity and collaboration suite", color: "#3b82f6", appIds: apps.filter(app => ["Mail", "Cliq", "WorkDrive", "Connect", "Writer", "Sheet", "Show"].includes(app.name)).map(app => app.id) },
      { name: "Marketing Plus", description: "Unified marketing platform", color: "#8b5cf6", appIds: apps.filter(app => ["Campaigns", "Social", "Sites", "PageSense", "Survey", "Webinar"].includes(app.name)).map(app => app.id) },
      { name: "Projects Plus", description: "Unified project management platform", color: "#14b8a6", appIds: apps.filter(app => ["Projects", "Sprints", "BugTracker"].includes(app.name)).map(app => app.id) }
    ];

    suitesData.forEach(suite => {
      const id = randomUUID();
      this.suites.set(id, { 
        ...suite, 
        id,
        appIds: [...suite.appIds] as string[]
      });
    });
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const newCategory: Category = { ...category, id, appCount: category.appCount || 0 };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  // Apps
  async getApps(): Promise<App[]> {
    return Array.from(this.apps.values());
  }

  async getAppsByCategory(categoryId: string): Promise<App[]> {
    return Array.from(this.apps.values()).filter(app => app.categoryId === categoryId);
  }

  async getAppById(id: string): Promise<App | undefined> {
    return this.apps.get(id);
  }

  async createApp(app: InsertApp): Promise<App> {
    const id = randomUUID();
    const newApp: App = { 
      ...app, 
      id,
      features: app.features as string[],
      shortcuts: app.shortcuts as string[]
    };
    this.apps.set(id, newApp);
    return newApp;
  }

  async searchApps(query: string): Promise<App[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.apps.values()).filter(app => 
      app.name.toLowerCase().includes(lowercaseQuery) ||
      app.description.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Suites
  async getSuites(): Promise<Suite[]> {
    return Array.from(this.suites.values());
  }

  async getSuiteById(id: string): Promise<Suite | undefined> {
    return this.suites.get(id);
  }

  async createSuite(suite: InsertSuite): Promise<Suite> {
    const id = randomUUID();
    const newSuite: Suite = { 
      ...suite, 
      id,
      appIds: suite.appIds as string[]
    };
    this.suites.set(id, newSuite);
    return newSuite;
  }
}

export const storage = new MemStorage();