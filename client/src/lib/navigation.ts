import { AlertCircle, AppWindow, BarChart2, BarChart3, BarChart4, Book, BookOpen, BookUser, Bot, Boxes, BrainCircuit, Briefcase, Bug, Calendar, CalendarCheck, CalendarClock, CalendarDays, CheckCircle2, CheckSquare, ClipboardList, Clock, Component, Contact, CreditCard, Database, DollarSign, File, FileEdit, FileQuestion, FileSignature, FileText, Focus, Folder, GanttChart, GitMerge, Globe, Globe2, GraduationCap, HardDrive, Headset, Heart, HelpCircle, Home, Inbox, Key, LandingPage, Landmark, LayoutDashboard, LifeBuoy, Lightbulb, List, Lock, Mail, Megaphone, MessageCircle, MessageSquare, Mic, Monitor, Notebook, Package, Phone, Plane, Plug, Presentation, Radio, Receipt, Repeat, Rocket, Rss, Send, Server, Settings, Share2, Shield, ShieldAlert, ShieldCheck, ShoppingCart, Signal, Sparkles, Star, Table, Table2, Tag, TestTube2, Ticket, Trash2, TrendingDown, TrendingUp, Trophy, Truck, User, UserCog, UserPlus, UserSearch, Users, Volume2, Warehouse, Zap } from 'lucide-react';

const crmNavigation = {
  sections: [
    
};

const projectsNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Project Dashboard', 'My Overview'] },
    { title: 'Projects', icon: GanttChart, items: ['All Projects', 'New Project', 'Project Templates'] },
    { title: 'Tasks', icon: CheckSquare, items: ['All Tasks', 'My Tasks', 'Task Lists', 'Kanban Board'] },
    { title: 'Gantt Chart', icon: GanttChart, items: ['Project Timeline', 'Dependencies', 'Critical Path'] },
    { title: 'Timesheets', icon: Clock, items: ['My Timesheets', 'Log Time', 'Approvals'] },
    { title: 'Issues / Bugs', icon: Bug, items: ['All Issues', 'Report Issue', 'My Issues'] },
    { title: 'Documents', icon: File, items: ['Files', 'Folders', 'Upload File'] },
    { title: 'Reports', icon: BarChart2, items: ['Task Reports', 'Time Reports', 'Issue Reports', 'Project Reports'] },
    { title: 'Users', icon: User, items: ['All Users', 'User Groups'] },
    { title: 'Calendar', icon: Calendar, items: ['Project Calendar', 'Deadlines'] },
  ],
};

const booksNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Financial Overview', 'Cash Flow', 'Income & Expense'] },
    { title: 'Sales', icon: TrendingUp, items: ['Customers', 'Quotes', 'Sales Orders', 'Invoices', 'Payments Received'] },
    { title: 'Purchases', icon: TrendingDown, items: ['Vendors', 'Bills', 'Purchase Orders', 'Expenses'] },
    { title: 'Items', icon: Package, items: ['All Items', 'New Item', 'Price Lists', 'Inventory Adjustments'] },
    { title: 'Banking', icon: Landmark, items: ['Bank Accounts', 'Bank Feeds', 'Reconciliation'] },
    { title: 'Accountant', icon: BookUser, items: ['Chart of Accounts', 'Manual Journals'] },
    { title: 'Time Tracking', icon: Clock, items: ['Projects', 'Timesheets'] },
    { title: 'Reports', icon: BarChart2, items: ['P&L', 'Balance Sheet', 'Cash Flow Statement', 'Sales Reports'] },
    { title: 'Documents', icon: File, items: ['All Documents', 'Upload Receipt'] },
  ],
};

const deskNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Agent Dashboard', 'Team Dashboard', 'The HQ'] },
    { title: 'Tickets', icon: Ticket, items: ['All Tickets', 'My Tickets', 'Ticket Views (Open', 'Overdue', 'etc.)'] },
    { title: 'Knowledge Base', icon: BookOpen, items: ['Articles', 'Categories', 'Community Forums'] },
    { title: 'Customers', icon: Users, items: ['Contacts', 'Accounts'] },
    { title: 'Reports', icon: BarChart2, items: ['Ticket Reports', 'Agent Performance', 'CSAT Reports'] },
    { title: 'Analytics', icon: BarChart3, items: ['Dashboards', 'Time Tracking Reports'] },
    { title: 'Channels', icon: Radio, items: ['Email', 'Chat', 'Phone', 'Social Media'] },
    { title: 'Setup', icon: Settings, items: ['Departments', 'Automation', 'SLAs', 'Templates'] },
  ],
};

const peopleNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Space', 'Company Dashboard', 'Announcements'] },
    { title: 'Employee Self-Service', icon: User, items: ['My Profile', 'Leave Tracker', 'Timesheets', 'My Reviews'] },
    { title: 'Leave Management', icon: Plane, items: ['Leave Calendar', 'Apply Leave', 'Approvals'] },
    { title: 'Time & Attendance', icon: Clock, items: ['Attendance', 'Timesheets', 'Shift Management'] },
    { title: 'Performance', icon: Star, items: ['Appraisals', 'Goals (KRA)', 'Skill Sets'] },
    { title: 'Files', icon: File, items: ['HR Files', 'Company Documents', 'Employee Documents'] },
    { title: 'Recruitment', icon: UserPlus, items: ['Job Openings', 'Candidates'] },
    { title: 'Reports', icon: BarChart2, items: ['Employee Reports', 'Leave Reports', 'Attendance Reports'] },
  ],
};

const mailNavigation = {
  sections: [
    { title: 'Inbox', icon: Inbox, items: ['All Mail', 'Unread', 'Starred'] },
    { title: 'Drafts', icon: FileEdit, items: ['Saved Drafts'] },
    { title: 'Sent', icon: Send, items: ['Sent Mail'] },
    { title: 'Spam', icon: ShieldAlert, items: ['Spam Folder'] },
    { title: 'Trash', icon: Trash2, items: ['Deleted Mail'] },
    { title: 'Folders', icon: Folder, items: ['My Folders', 'Shared Folders'] },
    { title: 'Streams (Collaboration)', icon: Share2, items: ['My Groups', 'Unread Messages'] },
    { title: 'Calendar', icon: Calendar, items: ['My Calendar', 'Shared Calendars'] },
    { title: 'Tasks', icon: CheckSquare, items: ['My Tasks', 'Assigned Tasks'] },
    { title: 'Notes', icon: Notebook, items: ['My Notes'] },
    { title: 'Contacts', icon: Contact, items: ['All Contacts', 'My Contacts'] },
  ],
};

const socialNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Brand Dashboard', 'Live Stream'] },
    { title: 'Publish', icon: Megaphone, items: ['New Post', 'Publishing Calendar', 'Content Queue'] },
    { title: 'Monitor', icon: Monitor, items: ['Columns (Mentions', 'Keywords', 'etc.)', 'Advanced Search'] },
    { title: 'Messages', icon: MessageSquare, items: ['Unified Inbox', 'Direct Messages'] },
    { title: 'Connections', icon: Plug, items: ['Audience', 'CRM Connections'] },
    { title: 'Reports', icon: BarChart2, items: ['Standard Reports', 'Custom Reports', 'Analytics'] },
    { title: 'Collaborate', icon: Users, items: ['Team Members', 'Approvals'] },
  ],
};

const campaignsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Campaign Overview', 'Performance'] },
    { title: 'Campaigns', icon: Megaphone, items: ['Email Campaigns', 'A/B Tests', 'Social Campaigns'] },
    { title: 'Contacts', icon: Contact, items: ['Lists & Segments', 'Signup Forms', 'Sync Services'] },
    { title: 'Automation', icon: Zap, items: ['Workflows', 'Drip Campaigns', 'Autoresponders'] },
    { title: 'Library', icon: BookOpen, items: ['Templates', 'Images'] },
    { title: 'Reports', icon: BarChart2, items: ['Campaign Reports', 'List Reports', 'Automation Reports'] },
  ],
};

const inventoryNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Inventory Summary', 'Sales Activity', 'Purchase Orders'] },
    { title: 'Items', icon: Package, items: ['All Items', 'Item Groups', 'Composite Items', 'New Item'] },
    { title: 'Inventory', icon: Boxes, items: ['Warehouses', 'Stock Adjustments', 'Stock Transfers'] },
    { title: 'Sales Orders', icon: ShoppingCart, items: ['All Sales Orders', 'New Order', 'Pack Slips', 'Shipments'] },
    { title: 'Purchase Orders', icon: ShoppingCart, items: ['All Purchase Orders', 'New Order', 'Bills'] },
    { title: 'Contacts', icon: Contact, items: ['Customers', 'Vendors'] },
    { title: 'Integrations', icon: GitMerge, items: ['E-commerce (Shopify', 'etc.)', 'Shipping Carriers'] },
    { title: 'Reports', icon: BarChart2, items: ['Inventory Reports', 'Sales Reports', 'Purchase Reports'] },
  ],
};

const recruitNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Hiring Dashboard', 'Today\'s Interviews', 'Active Openings'] },
    { title: 'Job Openings', icon: Briefcase, items: ['All Openings', 'New Opening', 'Published Openings'] },
    { title: 'Candidates', icon: Users, items: ['All Candidates', 'Add Candidate', 'Candidate Pool'] },
    { title: 'Interviews', icon: Mic, items: ['Scheduled Interviews', 'My Interviews', 'Request Feedback'] },
    { title: 'Clients & Contacts', icon: Briefcase, items: ['Client Accounts', 'Hiring Managers'] },
    { title: 'Reports', icon: BarChart2, items: ['Candidate Source Report', 'Time to Fill Report'] },
    { title: 'Careers Website', icon: Globe, items: ['Customize Page', 'Job Board'] },
  ],
};

const expenseNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Expense Overview', 'My Unreported Expenses', 'Pending Approvals'] },
    { title: 'Expenses', icon: CreditCard, items: ['All Expenses', 'New Expense', 'Mileage'] },
    { title: 'Receipts', icon: Receipt, items: ['My Receipts', 'Upload Receipt', 'Auto-Scan'] },
    { title: 'Reports', icon: BarChart2, items: ['My Reports', 'New Report', 'Awaiting Approval', 'Approved'] },
    { title: 'Cards', icon: CreditCard, items: ['My Corporate Cards', 'Reconcile', 'Pending Transactions'] },
    { title: 'Approvals', icon: CheckCircle2, items: ['Reports for Approval', 'Expenses for Approval'] },
    { title: 'Payments', icon: DollarSign, items: ['Reimbursements', 'Advance Payments'] },
    { title: 'Analytics', icon: BarChart3, items: ['Expense Analytics', 'Policy Violations'] },
  ],
};

const subscriptionsNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'MRR', 'Churn Rate', 'Active Subscriptions'] },
    { title: 'Products', icon: Package, items: ['All Products', 'Plans', 'Add-ons', 'Coupons'] },
    { title: 'Customers', icon: Users, items: ['All Customers', 'New Customer'] },
    { title: 'Subscriptions', icon: Repeat, items: ['All Subscriptions', 'New Subscription', 'Trialing', 'Active', 'Canceled'] },
    { title: 'Invoices', icon: FileText, items: ['All Invoices', 'Paid', 'Overdue'] },
    { title: 'Payments', icon: DollarSign, items: ['Transactions', 'Failed Payments'] },
    { title: 'Reports', icon: BarChart2, items: ['Subscription Reports', 'Revenue Reports', 'Churn Reports'] },
  ],
};

const connectNavigation = {
  sections: [
    { title: 'Feeds', icon: Rss, items: ['All Feeds', 'Company Wall', 'My Feed'] },
    { title: 'Groups', icon: Users, items: ['All Groups', 'My Groups', 'Create Group'] },
    { title: 'Channels', icon: Radio, items: ['All Channels', 'My Channels'] },
    { title: 'Manuals (Wiki)', icon: BookOpen, items: ['Knowledge Base', 'Articles'] },
    { title: 'Files', icon: File, items: ['All Files', 'My Files', 'Shared Files'] },
    { title: 'Events', icon: Calendar, items: ['Company Calendar', 'My Events'] },
    { title: 'Forums', icon: MessageSquare, items: ['Discussion Topics', 'Q&A'] },
    { title: 'Tasks', icon: CheckSquare, items: ['My Tasks', 'Group Tasks'] },
  ],
};

const workDriveNavigation = {
  sections: [
    { title: 'My Folders', icon: Folder, items: ['All Files & Folders', 'Recent', 'Starred', 'Offline'] },
    { title: 'Team Folders', icon: Folder, items: ['All Team Folders', 'My Teams'] },
    { title: 'Shared With Me', icon: Users, items: ['Files and Folders shared with you'] },
    { title: 'Public/External Links', icon: Globe, items: ['Manage shared links'] },
    { title: 'Trash', icon: Trash2, items: ['Deleted Files'] },
    { title: 'WorkDrive Go (Office Suite)', icon: Briefcase, items: ['Writer (Documents)', 'Sheet (Spreadsheets)', 'Show (Presentations)'] },
  ],
};

const creatorNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Applications', 'Shared with Me', 'Marketplace'] },
    { title: 'Application Builder', icon: AppWindow, items: ['Design', 'Workflows', 'Settings'] },
    { title: 'Environments', icon: Server, items: ['Development', 'Staging', 'Production'] },
    { title: 'Data Sources', icon: Database, items: ['Connections', 'Picklists'] },
    { title: 'Reports', icon: BarChart2, items: ['All Reports', 'Create Report'] },
    { title: 'Pages', icon: File, items: ['All Pages', 'Create Page (Dashboards)'] },
    { title: 'Workflows', icon: GitMerge, items: ['All Workflows', 'Create Workflow (Schedules', 'Triggers)'] },
  ],
};

const writerNavigation = {
  sections: [
    { title: 'Documents', icon: File, items: ['My Documents', 'Recent', 'Shared with Me', 'Templates', 'Trash'] },
    { title: 'Editor Tools', icon: Settings, items: [] },
    { title: 'Format', icon: HelpCircle, items: ['Text Styles', 'Paragraph', 'Lists & Bullets', 'Table', 'Columns'] },
    { title: 'Insert', icon: HelpCircle, items: ['Image', 'Chart', 'Special Characters', 'Table of Contents', 'Hyperlink'] },
    { title: 'Review', icon: HelpCircle, items: ['Track Changes', 'Comments', 'Spell Check', 'Grammar Check'] },
    { title: 'Automation (Zia AI)', icon: Zap, items: [] },
    { title: 'Writing Assistant', icon: User, items: ['Readability Suggestions', 'Tone Analysis', 'Sentence Completion'] },
    { title: 'Ask Zia', icon: Bot, items: ['Summarize Document', 'Ask Questions about Content'] },
    { title: 'Collaboration', icon: Users, items: ['Share Document', 'Real-time Cursors', 'Lock Content'] },
    { title: 'Mail Merge', icon: Mail, items: ['Create Template', 'Select Data Source', 'Generate Documents'] },
    { title: 'Signatures', icon: FileSignature, items: ['Add Digital Signature Field', 'Send for Signing (Zoho Sign)'] },
    { title: 'Publish & Export', icon: Megaphone, items: ['Publish to Web', 'Export as Word (.docx)', 'Export as PDF', 'Print'] },
  ],
};

const sheetNavigation = {
  sections: [
    { title: 'Sheets', icon: Table, items: ['My Spreadsheets', 'Recent', 'Shared with Me', 'Templates', 'Trash'] },
    { title: 'Data', icon: Database, items: [] },
    { title: 'Import/Export', icon: HelpCircle, items: ['Import from Excel/CSV', 'Export as Excel/CSV/PDF'] },
    { title: 'Data Tools', icon: Settings, items: ['Data Validation', 'Text to Columns', 'Remove Duplicates', 'Data Cleaning'] },
    { title: 'Analysis', icon: BarChart3, items: [] },
    { title: 'Pivot Tables', icon: Table, items: ['Create Pivot Table', 'Manage Pivot Tables'] },
    { title: 'Charts', icon: BarChart2, items: ['All Chart Types (Bar', 'Line', 'Pie)', 'Create Chart'] },
    { title: 'Insights (Zia AI)', icon: Lightbulb, items: ['Ask Zia (Natural Language Query)', 'Get Insights', 'Automated Charting'] },
    { title: 'Formulas', icon: HelpCircle, items: ['Insert Function', 'Formula Auditing', 'Name Manager'] },
    { title: 'Automation', icon: Zap, items: [] },
    { title: 'Macros', icon: HelpCircle, items: ['Record Macro', 'Run Macro'] },
    { title: 'Custom Scripts (Deluge)', icon: File, items: ['Script Editor', 'Scheduled Scripts'] },
    { title: 'Collaboration', icon: Users, items: ['Share Sheet', 'Comments', 'Version History', 'Protect Sheet/Range'] },
    { title: 'View', icon: HelpCircle, items: ['Freeze Panes', 'Gridlines', 'Formula Bar'] },
  ],
};

const showNavigation = {
  sections: [
    { title: 'Presentations', icon: Presentation, items: ['My Presentations', 'Recent', 'Shared with Me', 'Templates'] },
    { title: 'Design', icon: HelpCircle, items: [] },
    { title: 'Themes', icon: HelpCircle, items: ['Apply Theme', 'Customize Theme'] },
    { title: 'Master Slides', icon: File, items: ['Edit Master', 'New Master Layout'] },
    { title: 'Layouts', icon: LayoutDashboard, items: ['Apply Layout', 'Reset Slide'] },
    { title: 'Insert', icon: HelpCircle, items: ['Text Box', 'Image', 'Video', 'Audio', 'Chart', 'Table', 'Shape', 'Icon'] },
    { title: 'Animations & Transitions', icon: Zap, items: [] },
    { title: 'Animations', icon: Zap, items: ['Entrance', 'Emphasis', 'Exit effects'] },
    { title: 'Transitions', icon: Zap, items: ['Slide Transitions', 'Timing'] },
    { title: 'Present', icon: Presentation, items: [] },
    { title: 'Slideshow', icon: Presentation, items: ['From Beginning', 'From Current Slide'] },
    { title: 'Presenter View', icon: User, items: ['See Notes', 'Timer', 'Next Slide'] },
    { title: 'Broadcast', icon: Radio, items: ['Share Live Presentation', 'Remote Control'] },
    { title: 'Collaboration', icon: Users, items: ['Share Presentation', 'Comments', 'Review Mode'] },
  ],
};

const cliqNavigation = {
  sections: [
    { title: 'Chats', icon: MessageCircle, items: ['Recent Conversations', 'Direct Messages', 'Group Chats', 'Starred'] },
    { title: 'Channels', icon: Radio, items: ['All Channels', 'My Channels', 'Unread', 'Browse Channels'] },
    { title: 'Contacts', icon: Contact, items: ['All Contacts', 'Teams', 'Departments'] },
    { title: 'History', icon: Clock, items: ['Search History', 'Files', 'Links', 'Mentions'] },
    { title: 'Calendar', icon: Calendar, items: ['My Meetings', 'Team Calendar'] },
    { title: 'Calls', icon: Phone, items: ['Start Audio Call', 'Start Video Call', 'Call History'] },
    { title: 'Apps & Bots', icon: Bot, items: [] },
    { title: 'Bots', icon: Bot, items: ['My Bots', 'Bot Store'] },
    { title: 'Integrations', icon: GitMerge, items: ['Installed Apps', 'App Store'] },
    { title: 'My Profile', icon: User, items: ['Status', 'Do Not Disturb', 'Settings'] },
  ],
};

const meetingNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Start a Meeting Now'] },
    { title: 'Meetings', icon: CalendarDays, items: [] },
    { title: 'My Meetings', icon: CalendarDays, items: ['Upcoming', 'Past Meetings'] },
    { title: 'Schedule Meeting', icon: Calendar, items: ['New Meeting', 'Recurring Meeting'] },
    { title: 'Webinars', icon: Presentation, items: [] },
    { title: 'My Webinars', icon: Presentation, items: ['Upcoming', 'Past Webinars'] },
    { title: 'Schedule Webinar', icon: Presentation, items: ['New Webinar', 'Registration Settings', 'Polls', 'Q&A'] },
    { title: 'Recordings', icon: Monitor, items: ['My Recordings (Cloud)', 'Local Recordings'] },
    { title: 'Reports', icon: BarChart2, items: ['Meeting Reports', 'Webinar Reports', 'Attendee Analytics'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'Audio/Video Settings', 'Security', 'Integrations'] },
  ],
};

const formsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Forms Overview', 'Recent Submissions', 'Analytics'] },
    { title: 'Forms', icon: ClipboardList, items: ['All Forms', 'New Form', 'My Forms', 'Shared Forms', 'Templates'] },
    { title: 'Builder (for a selected form)', icon: AppWindow, items: [] },
    { title: 'Fields', icon: List, items: ['Add Fields', 'Field Types (Text', 'Choice', 'etc.)'] },
    { title: 'Rules', icon: GitMerge, items: ['Field Rules', 'Form Rules', 'Page Rules'] },
    { title: 'Themes', icon: HelpCircle, items: ['Apply Theme', 'Customize Theme'] },
    { title: 'Submissions', icon: Inbox, items: ['All Entries', 'Reports', 'Analytics'] },
    { title: 'Share', icon: Share2, items: ['Public Link', 'Embed on Website', 'Email Campaign'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho CRM', 'Mailchimp', 'Payment Gateways (Stripe', 'etc.)'] },
    { title: 'Settings', icon: Settings, items: ['Notifications', 'Form Confirmation', 'Security'] },
  ],
};

const analyticsNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Home', 'Recent Views', 'Favorites', 'Shared with Me'] },
    { title: 'Explorer', icon: Folder, items: ['All Workspaces', 'My Workspaces', 'Shared Workspaces'] },
    { title: 'Data Sources', icon: Database, items: [] },
    { title: 'Import Data', icon: Database, items: ['From Files', 'From Databases', 'From Cloud Storage', 'From Business Apps'] },
    { title: 'Manage Data Sources', icon: Database, items: ['Sync Settings', 'Data Refresh History'] },
    { title: 'Builder (within a Workspace)', icon: AppWindow, items: [] },
    { title: 'Create', icon: HelpCircle, items: ['New Report', 'New Dashboard', 'New Table'] },
    { title: 'Data Modeling', icon: Database, items: ['Edit Table Design', 'Formulas', 'Query Tables'] },
    { title: 'Ask Zia (AI)', icon: Bot, items: ['Ask a Question', 'Zia Insights', 'What-if Analysis'] },
    { title: 'Reports', icon: BarChart2, items: ['All Reports', 'My Reports', 'Shared Reports', 'Report Folders'] },
    { title: 'Dashboards', icon: LayoutDashboard, items: ['All Dashboards', 'My Dashboards', 'Shared Dashboards', 'Slideshows'] },
    { title: 'Alerts & Schedules', icon: Calendar, items: ['Manage Alerts', 'Schedule Emails'] },
    { title: 'Publish & Embed', icon: Megaphone, items: ['Share Views', 'Embed in Website/App', 'API Management'] },
    { title: 'Settings', icon: Settings, items: ['Workspace Settings', 'User Management', 'Data Backup'] },
  ],
};

const signNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Documents Overview', 'Waiting for My Signature', 'In Progress', 'Completed'] },
    { title: 'Send for Signatures', icon: Send, items: ['Upload Document', 'Add Recipients', 'Add Fields', 'Send'] },
    { title: 'Sign Documents', icon: FileSignature, items: ['Documents to Sign'] },
    { title: 'Documents', icon: File, items: [] },
    { title: 'My Documents', icon: File, items: ['All', 'In Progress', 'Completed', 'Declined', 'Recalled'] },
    { title: 'Shared With Me', icon: Users, items: ['Documents shared with you'] },
    { title: 'Templates', icon: FileText, items: ['All Templates', 'Create Template', 'My Templates'] },
    { title: 'Reports', icon: BarChart2, items: ['Document Status Report', 'Audit Trail'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'Manage Templates', 'Legal Disclosure', 'Integrations'] },
  ],
};

const backstageNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Event Overview', 'Registrations', 'Ticket Sales', 'Live Analytics'] },
    { title: 'Events', icon: Calendar, items: ['All Events', 'Create Event', 'Past Events'] },
    { title: 'Website', icon: Globe, items: [] },
    { title: 'Site Builder', icon: AppWindow, items: ['Home Page', 'Agenda', 'Speakers', 'Sponsors'] },
    { title: 'Design', icon: HelpCircle, items: ['Themes', 'Custom CSS'] },
    { title: 'Attendees', icon: Users, items: [] },
    { title: 'Manage', icon: Settings, items: ['All Attendees', 'Check-in', 'Send Email'] },
    { title: 'Registration', icon: Ticket, items: ['Ticket Types', 'Registration Form', 'Discount Codes'] },
    { title: 'Speakers & Sessions', icon: Mic, items: [] },
    { title: 'Speakers', icon: Mic, items: ['All Speakers', 'Invite Speaker'] },
    { title: 'Agenda', icon: List, items: ['Manage Agenda', 'Create Session'] },
    { title: 'Sponsors', icon: Star, items: ['All Sponsors', 'Add Sponsor', 'Sponsorship Tiers'] },
    { title: 'Onstage (Virtual Event Hub)', icon: Monitor, items: ['Main Stage', 'Sessions', 'Networking', 'Expo'] },
    { title: 'Reports', icon: BarChart2, items: ['Attendee Reports', 'Sales Reports', 'Engagement Reports'] },
  ],
};

const commerceNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Store Overview', 'Sales', 'Top Products', 'Abandoned Carts'] },
    { title: 'Products', icon: Package, items: ['All Products', 'New Product', 'Categories', 'Brands', 'Inventory'] },
    { title: 'Orders', icon: ShoppingCart, items: ['All Orders', 'Unfulfilled', 'Fulfilled', 'Shipped'] },
    { title: 'Customers', icon: Users, items: ['All Customers', 'Customer Groups'] },
    { title: 'Marketing', icon: Megaphone, items: [] },
    { title: 'Promotions', icon: Tag, items: ['Coupons', 'Discounts', 'Gift Cards'] },
    { title: 'Campaigns', icon: Megaphone, items: ['Email Marketing', 'SEO', 'Social Media'] },
    { title: 'Website', icon: Globe, items: [] },
    { title: 'Store Customizer', icon: Settings, items: ['Themes', 'Page Builder', 'Menus'] },
    { title: 'Content', icon: FileText, items: ['Blog', 'Pages'] },
    { title: 'Payments', icon: DollarSign, items: ['Payment Gateways', 'Transaction History'] },
    { title: 'Shipping', icon: Truck, items: ['Shipping Methods', 'Carriers', 'Shipping Labels'] },
    { title: 'Reports', icon: BarChart2, items: ['Sales Reports', 'Product Reports', 'Customer Reports'] },
    { title: 'Settings', icon: Settings, items: ['Store Details', 'Taxes', 'Checkout Settings', 'Domains'] },
  ],
};

const creatorLowCodePlatformNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Applications', 'Shared Apps', 'Marketplace', 'Create Application'] },
    { title: 'Builder (within an application)', icon: AppWindow, items: [] },
    { title: 'Design', icon: HelpCircle, items: [] },
    { title: 'Forms', icon: ClipboardList, items: ['Create Form', 'Form Layouts', 'Form Fields'] },
    { title: 'Reports', icon: BarChart2, items: ['Create Report (List', 'Kanban', 'Calendar', 'etc.)', 'Custom Filters'] },
    { title: 'Pages', icon: File, items: ['Create Page', 'Page Builder', 'Add Elements (Panels', 'Buttons', 'Charts)'] },
    { title: 'Workflows', icon: GitMerge, items: ['Create Workflow', 'On Add', 'On Edit', 'Scheduled Scripts', 'Approvals'] },
    { title: 'Settings', icon: Settings, items: ['Application Settings', 'User Permissions', 'Custom Domain'] },
    { title: 'Environments', icon: Server, items: ['Development', 'Staging', 'Production'] },
    { title: 'Data Sources', icon: Database, items: ['Connections (to external services)', 'Picklists'] },
    { title: 'Mobile', icon: Monitor, items: ['Preview on Mobile', 'Configure Mobile Layouts', 'Push Notifications'] },
    { title: 'AI Models (Zia)', icon: Bot, items: ['Prediction Models', 'OCR', 'Object Detection'] },
    { title: 'BI & Analytics', icon: BarChart3, items: ['Create Dashboard', 'Add Reports to Dashboard'] },
    { title: 'Settings (Global)', icon: Settings, items: ['My Account', 'Developer Tools', 'API Keys'] },
  ],
};

const cliqTeamCommunicationNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Activity', 'Recent Mentions', 'Pinned Chats'] },
    { title: 'Chats', icon: MessageCircle, items: ['All Conversations', 'Direct Messages (1-to-1)', 'Group Chats'] },
    { title: 'Channels', icon: Radio, items: ['All Channels', 'My Channels', 'Unread', 'Browse Public Channels'] },
    { title: 'Contacts', icon: Contact, items: ['All Contacts', 'My Teams', 'Departments'] },
    { title: 'Calls', icon: Phone, items: ['Start Audio/Video Call', 'Call History', 'Screen Sharing'] },
    { title: 'Files', icon: File, items: ['Files Shared with Me', 'Files I Shared', 'Search Files'] },
    { title: 'Apps, Bots & Tools', icon: Bot, items: [] },
    { title: 'Bots', icon: Bot, items: ['My Bots', 'Bot Store', 'Create Bot'] },
    { title: 'Integrations', icon: GitMerge, items: ['Installed Apps', 'Marketplace'] },
    { title: 'Commands', icon: HelpCircle, items: ['Create Custom Slash Command'] },
    { title: 'My Profile', icon: User, items: ['Set Status', 'Do Not Disturb', 'Preferences', 'Settings'] },
  ],
};

const workDriveCloudFileManagementNavigation = {
  sections: [
    { title: 'My Folders', icon: Folder, items: ['All Files & Folders', 'Recent', 'Starred', 'My Edits'] },
    { title: 'Team Folders', icon: Folder, items: ['All Team Folders', 'My Teams'] },
    { title: 'Shared With Me', icon: Users, items: ['Files and Folders shared with you'] },
    { title: 'Public Links', icon: Globe, items: ['Manage external share links'] },
    { title: 'Trash', icon: Trash2, items: ['Deleted Files & Folders'] },
    { title: 'WorkDrive Go (Online Office Suite)', icon: Briefcase, items: [] },
    { title: 'New', icon: HelpCircle, items: ['Writer Document', 'Sheet Spreadsheet', 'Show Presentation'] },
    { title: 'Admin Console (for Admins)', icon: Shield, items: [] },
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Storage Overview', 'User Activity'] },
    { title: 'Members', icon: Users, items: ['Manage Users', 'User Groups'] },
    { title: 'Security', icon: Shield, items: ['Access Policies', 'Audit Logs', 'Data Loss Prevention (DLP)'] },
    { title: 'Reports', icon: BarChart2, items: ['Storage Reports', 'Activity Reports'] },
  ],
};

const meetingVideoConferencingNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Start a Meeting', 'Join a Meeting'] },
    { title: 'Meetings', icon: CalendarDays, items: [] },
    { title: 'My Meetings', icon: CalendarDays, items: ['Upcoming', 'Past Meetings'] },
    { title: 'Schedule Meeting', icon: Calendar, items: ['New Meeting', 'Recurring Meeting', 'Meeting Templates'] },
    { title: 'Webinars', icon: Presentation, items: [] },
    { title: 'My Webinars', icon: Presentation, items: ['Upcoming', 'Past Webinars'] },
    { title: 'Schedule Webinar', icon: Presentation, items: ['New Webinar', 'Registration Form', 'Polls', 'Q&A', 'Handouts'] },
    { title: 'Recordings', icon: Monitor, items: ['My Recordings', 'Cloud Recordings', 'Local Recordings'] },
    { title: 'Reports', icon: BarChart2, items: ['Meeting Reports', 'Webinar Reports (Attendance', 'Engagement)'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'Audio/Video Settings', 'Security', 'Integrations', 'Branding'] },
  ],
};

const sprintsNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Dashboard', 'Project Overview', 'My Work Items'] },
    { title: 'Backlog', icon: List, items: [] },
    { title: 'Product Backlog', icon: Package, items: ['All Items', 'Create User Story', 'Create Epic'] },
    { title: 'Story Mapping', icon: Map, items: ['Visualize User Journey'] },
    { title: 'Sprints', icon: Rocket, items: [] },
    { title: 'Active Sprint', icon: Rocket, items: ['Scrum Board', 'Task Board'] },
    { title: 'Sprint Planning', icon: List, items: ['Add Items to Sprint', 'Set Sprint Goal'] },
    { title: 'All Sprints', icon: Rocket, items: ['Upcoming', 'Completed Sprints'] },
    { title: 'Releases', icon: Tag, items: ['Manage Releases', 'Associate Sprints'] },
    { title: 'Epics', icon: Trophy, items: ['All Epics', 'Epic Progress'] },
    { title: 'Reports', icon: BarChart2, items: ['Velocity Chart', 'Burndown Chart', 'Burnup Chart', 'Cumulative Flow'] },
    { title: 'Timesheet', icon: Clock, items: ['Log Time', 'My Timesheets', 'Timesheet Reports'] },
    { title: 'Users', icon: User, items: ['All Users', 'Team Roles'] },
  ],
};

const recruitApplicantTrackingSystemNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Hiring Dashboard', 'My Activities', 'Openings Pipeline', 'Recent Candidates'] },
    { title: 'Job Openings', icon: Briefcase, items: ['All Openings', 'Create Opening', 'My Openings', 'Published', 'Internal', 'On Hold'] },
    { title: 'Candidates', icon: Users, items: ['All Candidates', 'Add Candidate', 'My Candidates', 'Candidate Pool', 'Search Resumes'] },
    { title: 'Interviews', icon: Mic, items: ['My Interviews', 'Schedule Interview', 'All Interviews', 'Awaiting Feedback'] },
    { title: 'Clients & Contacts', icon: Briefcase, items: ['Client Accounts', 'Hiring Managers'] },
    { title: 'Vendors', icon: Truck, items: ['Staffing Agencies', 'Vendor Portals'] },
    { title: 'Reports', icon: BarChart2, items: ['Candidate Source Report', 'Time to Fill Report', 'Interview Reports', 'Job Opening Analytics'] },
    { title: 'Careers Website', icon: Globe, items: ['Customize Page', 'Manage Job Board', 'Embed Options'] },
    { title: 'Automation (AI)', icon: Zap, items: ['Resume Parser', 'Zia Candidate Matching', 'Workflow Rules'] },
    { title: 'Settings', icon: Settings, items: ['Hiring Pipeline Stages', 'Email Templates', 'User Management', 'Job Boards Integration'] },
  ],
};

const booksAccountingNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Financial Overview', 'Cash Flow', 'Income & Expenses', 'Top Expenses'] },
    { title: 'Sales', icon: TrendingUp, items: [] },
    { title: 'Customers', icon: Users, items: ['All Customers', 'New Customer'] },
    { title: 'Estimates/Quotes', icon: FileText, items: ['All Quotes', 'New Quote'] },
    { title: 'Sales Orders', icon: ShoppingCart, items: ['All Sales Orders', 'New Order'] },
    { title: 'Invoices', icon: FileText, items: ['All Invoices', 'New Invoice', 'Recurring Invoices'] },
    { title: 'Payments Received', icon: DollarSign, items: ['All Payments', 'Record Payment'] },
    { title: 'Purchases', icon: TrendingDown, items: [] },
    { title: 'Vendors', icon: Truck, items: ['All Vendors', 'New Vendor'] },
    { title: 'Expenses', icon: CreditCard, items: ['All Expenses', 'New Expense'] },
    { title: 'Bills', icon: FileText, items: ['All Bills', 'New Bill', 'Recurring Bills'] },
    { title: 'Payments Made', icon: DollarSign, items: ['All Payments', 'Record Payment'] },
    { title: 'Items', icon: Package, items: ['All Items', 'New Item', 'Price Lists', 'Inventory Adjustments'] },
    { title: 'Banking', icon: Landmark, items: ['Bank Accounts', 'Bank Feeds', 'Reconciliation', 'Categorize Transactions'] },
    { title: 'Time Tracking', icon: Clock, items: ['Projects', 'Timesheets', 'Billable Hours'] },
    { title: 'Accountant', icon: BookUser, items: ['Chart of Accounts', 'Manual Journals', 'Tax Payments'] },
    { title: 'Reports', icon: BarChart2, items: ['Profit & Loss', 'Balance Sheet', 'Cash Flow', 'Sales Tax Report', 'All Reports'] },
    { title: 'Documents', icon: File, items: ['My Documents', 'Upload Document', 'Auto-scan Receipts'] },
  ],
};

const inventoryNavigation2 = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Inventory Summary', 'Sales Activity', 'Product Details', 'Low Stock Items'] },
    { title: 'Items', icon: Package, items: ['All Items', 'Item Groups', 'Composite Items', 'New Item', 'Price Lists'] },
    { title: 'Inventory', icon: Boxes, items: ['Warehouses', 'Stock Adjustments', 'Stock Transfers'] },
    { title: 'Sales', icon: TrendingUp, items: ['Customers', 'Sales Orders', 'Packages', 'Shipments'] },
    { title: 'Purchases', icon: TrendingDown, items: ['Vendors', 'Purchase Orders', 'Bills'] },
    { title: 'Integrations', icon: GitMerge, items: ['Marketplaces (Shopify', 'etc.)', 'Shipping Carriers', 'Accounting'] },
    { title: 'Reports', icon: BarChart2, items: ['Inventory Reports', 'Sales Reports', 'Purchase Reports', 'Activity Log'] },
  ],
};

const signDigitalSignaturesNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Document Status Overview', 'Waiting for My Signature', 'In Progress', 'Nearing Expiry'] },
    { title: 'Send for Signature', icon: Send, items: [] },
    { title: 'Upload Document', icon: File, items: ['From Computer', 'From Cloud (WorkDrive', 'etc.)'] },
    { title: 'Add Recipients', icon: Users, items: ['Set Signing Order', 'Assign Roles (Signer', 'Approver)'] },
    { title: 'Add Fields', icon: List, items: ['Drag & Drop (Signature', 'Initials', 'Text', 'Date', 'Checkbox)'] },
    { title: 'Review & Send', icon: Send, items: ['Customize Email Message', 'Set Reminders & Deadline'] },
    { title: 'Sign Documents', icon: FileSignature, items: ['Awaiting My Signature'] },
    { title: 'Documents', icon: File, items: [] },
    { title: 'My Documents', icon: File, items: ['All', 'In Progress', 'Completed', 'Declined', 'Recalled'] },
    { title: 'Shared With Me', icon: Users, items: ['Documents shared for my review/signature'] },
    { title: 'Templates', icon: FileText, items: [] },
    { title: 'All Templates', icon: FileText, items: ['My Templates', 'Shared Templates'] },
    { title: 'Create Template', icon: FileText, items: ['Upload and prepare a reusable document'] },
    { title: 'Reports & Audit', icon: BarChart2, items: [] },
    { title: 'Reports', icon: BarChart2, items: ['Document Status Report', 'Completion Rate'] },
    { title: 'Audit Trail', icon: List, items: ['Search and view detailed history for any document'] },
    { title: 'Settings', icon: Settings, items: [] },
    { title: 'My Profile', icon: User, items: ['Manage My Signatures & Initials'] },
    { title: 'Account Settings', icon: Settings, items: ['Legal Disclosure', 'Branding', 'Date/Time Format'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho CRM', 'WorkDrive', 'etc.'] },
  ],
};

const surveyNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Recent Surveys', 'Response Rate Overview'] },
    { title: 'Surveys', icon: FileQuestion, items: ['All Surveys', 'My Surveys', 'Shared With Me', 'Create Survey'] },
    { title: 'Builder (for a selected survey)', icon: AppWindow, items: [] },
    { title: 'Design', icon: HelpCircle, items: ['Add Questions (Multiple Choice', 'Rating', 'Text', 'etc.)', 'Logic & Branching (Skip Logic)'] },
    { title: 'Themes', icon: HelpCircle, items: ['Apply Theme', 'Customize Branding'] },
    { title: 'Options', icon: Settings, items: ['Survey Language', 'Closing Date', 'Anonymity'] },
    { title: 'Distribution', icon: Share2, items: [] },
    { title: 'Web Link', icon: Globe, items: ['Get Public URL'] },
    { title: 'Email Campaign', icon: Mail, items: ['Send to a List'] },
    { title: 'Embed', icon: Code, items: ['Embed on Website'] },
    { title: 'Social Media', icon: Share2, items: ['Share on Social Channels'] },
    { title: 'Reports & Analytics', icon: BarChart3, items: [] },
    { title: 'All Responses', icon: Inbox, items: ['View Individual Responses', 'Filter Responses'] },
    { title: 'Summary Report', icon: BarChart2, items: ['Charts for each question'] },
    { title: 'Cross-Tab Report', icon: Table, items: ['Compare answers between questions'] },
    { title: 'Sentiment Analysis (AI)', icon: Bot, items: ['Analyze open-ended text feedback'] },
    { title: 'Settings', icon: Settings, items: ['User Management', 'Integrations', 'API Access'] },
  ],
};

const flowNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['My Flows', 'Task Usage', 'Execution History', 'Popular Apps'] },
    { title: 'My Flows', icon: Zap, items: ['All Flows', 'Active Flows', 'Inactive Flows', 'Create Flow'] },
    { title: 'Flow Builder', icon: AppWindow, items: [] },
    { title: 'Trigger', icon: Zap, items: ['Choose App and Trigger Event (e.g.', '"New Email in Gmail")'] },
    { title: 'Actions', icon: Zap, items: ['Add Logic (Decisions', 'Loops)', 'Add App Actions (e.g.', '"Create record in Zoho CRM")'] },
    { title: 'Test & Debug', icon: TestTube2, items: ['Test the workflow with sample data'] },
    { title: 'Connections', icon: Plug, items: ['My Connections', 'Add New Connection (to apps like Gmail', 'Slack', 'etc.)'] },
    { title: 'History', icon: Clock, items: ['All Executions', 'Successful Runs', 'Failed Runs', 'View Logs'] },
    { title: 'Gallery', icon: BookOpen, items: ['Pre-built Flow Templates', 'My Templates'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'Organization Settings', 'Task Usage'] },
  ],
};

const sitesNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Site Overview', 'Traffic Stats', 'Form Submissions', 'Recent Blog Comments'] },
    { title: 'Builder (Visual Editor)', icon: AppWindow, items: [] },
    { title: 'Pages', icon: File, items: ['Manage Pages (Add', 'Reorder', 'Delete)', 'Page Settings (SEO', 'etc.)'] },
    { title: 'Elements', icon: List, items: ['Add Elements (Text', 'Image', 'Forms', 'Buttons', 'etc.)'] },
    { title: 'Sections', icon: LayoutDashboard, items: ['Add Pre-built Sections (Header', 'Footer', 'Testimonials', 'Gallery)'] },
    { title: 'Design', icon: HelpCircle, items: ['Global Styles (Fonts', 'Colors)', 'Themes'] },
    { title: 'Blog', icon: Book, items: ['All Posts', 'New Post', 'Categories', 'Comments'] },
    { title: 'Forms', icon: ClipboardList, items: ['Form Submissions', 'Form Analytics'] },
    { title: 'Settings', icon: Settings, items: [] },
    { title: 'General', icon: Settings, items: ['Site Name', 'Favicon'] },
    { title: 'Domains', icon: Globe2, items: ['Manage Custom Domain', 'SSL Certificate'] },
    { title: 'SEO', icon: HelpCircle, items: ['Global SEO Settings', 'Sitemaps', 'Redirects'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho CRM', 'SalesIQ (Chat)', 'etc.'] },
    { title: 'Portal (for Members)', icon: Users, items: ['Manage Members', 'Access Control', 'Member Pages'] },
  ],
};

const vaultNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['My Secrets', 'Shared with Me', 'Security Score', 'Recent Activity'] },
    { title: 'Secrets', icon: Key, items: [] },
    { title: 'All Secrets', icon: Key, items: ['Search Vault'] },
    { title: 'My Secrets', icon: Key, items: ['Personal Passwords & Notes'] },
    { title: 'Team Secrets', icon: Users, items: ['Shared Team Passwords & Notes'] },
    { title: 'Chambers', icon: Folder, items: ['Secure', 'shared folders for specific teams or projects'] },
    { title: 'Security', icon: Shield, items: [] },
    { title: 'Password Generator', icon: Key, items: ['Create Strong Passwords'] },
    { title: 'Security Dashboard', icon: Shield, items: ['Weak Passwords', 'Reused Passwords', 'Breached Passwords'] },
    { title: 'Emergency Access', icon: LifeBuoy, items: ['Set up trusted contacts'] },
    { title: 'Audit & Reports', icon: BarChart2, items: [] },
    { title: 'Audit Trail', icon: List, items: ['View all actions (who accessed what', 'when)'] },
    { title: 'Reports', icon: BarChart2, items: ['User Access Reports', 'Secret Usage Reports'] },
    { title: 'Admin', icon: Shield, items: [] },
    { title: 'User Management', icon: Users, items: ['Add Users', 'User Groups'] },
    { title: 'Policies', icon: Shield, items: ['Enforce Password Complexity', 'MFA'] },
    { title: 'Tools', icon: Settings, items: ['Browser Extensions', 'Mobile Apps', 'Import/Export'] },
  ],
};

const mailAdminConsoleNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Mail Server Status', 'User Count', 'Storage Usage'] },
    { title: 'Domains', icon: Globe2, items: ['Domain Setup', 'DKIM', 'SPF', 'DMARC records'] },
    { title: 'Users', icon: User, items: ['All Users', 'Add User', 'User Groups', 'Import/Export Users'] },
    { title: 'Mail Settings', icon: Mail, items: [] },
    { title: 'Policies', icon: Shield, items: ['Spam Control', 'Email Policies (sending limits', 'etc.)'] },
    { title: 'Routing', icon: Route, items: ['Email Forwarding', 'Split Delivery'] },
    { title: 'Security', icon: Shield, items: ['Two-Factor Authentication (TFA)', 'Data Encryption'] },
    { title: 'Migration', icon: Server, items: ['Migrate from Google Workspace', 'Office 365', 'etc.'] },
    { title: 'Archive & eDiscovery', icon: Archive, items: ['Email Retention Policies', 'Search Archived Mail'] },
    { title: 'Reports', icon: BarChart2, items: ['Mail Traffic Reports', 'Spam Reports', 'User Activity Reports'] },
  ],
};

const calendarNavigation = {
  sections: [
    { title: 'View', icon: HelpCircle, items: ['Day', 'Week', 'Month', 'Agenda'] },
    { title: 'My Calendars', icon: Calendar, items: ['Personal Calendar', 'Work Calendar', 'Create New Calendar'] },
    { title: 'Shared Calendars', icon: Users, items: ['Team Calendars', 'Colleague Calendars'] },
    { title: 'Appointments', icon: CalendarCheck, items: [] },
    { title: 'Booking Page', icon: Calendar, items: ['Set up your public booking link'] },
    { title: 'Appointment Types', icon: List, items: ['Define services and durations'] },
    { title: 'Meetings', icon: CalendarDays, items: [] },
    { title: 'New Event', icon: Calendar, items: ['Create Event', 'Invite Attendees'] },
    { title: 'Smart Scheduling (AI)', icon: Bot, items: ['Find a time that works for everyone'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho Meeting', 'Zoho CRM', 'Google Calendar Sync'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'Notification Settings', 'Sharing Permissions'] },
  ],
};

const notebookNavigation = {
  sections: [
    { title: 'All Notes', icon: Notebook, items: ['View All Notes', 'Recent Notes'] },
    { title: 'Notebooks', icon: Book, items: ['My Notebooks', 'Create Notebook', 'Shared Notebooks'] },
    { title: 'Note Types (Cards)', icon: List, items: [] },
    { title: 'Text Card', icon: FileText, items: ['Create a written note'] },
    { title: 'Checklist Card', icon: CheckSquare, items: ['Create a to-do list'] },
    { title: 'Audio Card', icon: Mic, items: ['Record a voice note'] },
    { title: 'Photo Card', icon: Image, items: ['Add images'] },
    { title: 'Sketch Card', icon: Pen, items: ['Draw a sketch'] },
    { title: 'Favorites', icon: Star, items: ['Starred Notes'] },
    { title: 'Reminders', icon: Bell, items: ['Notes with reminders set'] },
    { title: 'Search', icon: Search, items: ['Search all content (including text in images)'] },
    { title: 'Collaboration', icon: Users, items: ['Share Note', 'Share Notebook'] },
    { title: 'Trash', icon: Trash2, items: ['Deleted Notes'] },
  ],
};

const humanResourcesNavigation = {
  sections: [
    { title: 'Home/Dashboard', icon: LayoutDashboard, items: ['My Space', 'Company Dashboard', 'Announcements', 'Quick Actions (Check-in', 'Apply Leave)'] },
    { title: 'Employee Self-Service', icon: User, items: [] },
    { title: 'My Profile', icon: User, items: ['View & Edit Personal Info', 'Documents', 'Skills'] },
    { title: 'Leave Tracker', icon: Plane, items: ['My Leave Balance', 'Apply Leave', 'Holiday Calendar'] },
    { title: 'Timesheets', icon: Clock, items: ['My Timesheets', 'Log Time', 'Approvals'] },
    { title: 'Attendance', icon: Clock, items: ['My Attendance Log', 'Regularize Entries'] },
    { title: 'Leave Management', icon: Plane, items: [] },
    { title: 'Leave Calendar', icon: Calendar, items: ['Team & Company Leave View'] },
    { title: 'Approvals', icon: CheckCircle2, items: ['Leave Requests for My Approval'] },
    { title: 'Reports', icon: BarChart2, items: ['Leave Balance Reports', 'Leave History'] },
    { title: 'Time & Attendance', icon: Clock, items: [] },
    { title: 'Attendance', icon: Clock, items: ['Live Feed', 'Today\'s Attendance', 'Shift Roster'] },
    { title: 'Timesheets', icon: Clock, items: ['All Timesheets', 'Approvals', 'Project Time Tracking'] },
    { title: 'Performance', icon: Star, items: [] },
    { title: 'Appraisals', icon: Star, items: ['My Reviews', 'Team Reviews', 'Performance Cycles'] },
    { title: 'Goals / KRAs', icon: Target, items: ['My Goals', 'Team Goals', 'Goal Alignment'] },
    { title: 'Skill Sets', icon: Star, items: ['Company Skill Matrix', 'My Skills'] },
    { title: 'Files', icon: File, items: [] },
    { title: 'HR Files', icon: File, items: ['Company Policies', 'Employee Handbooks'] },
    { title: 'My Files', icon: File, items: ['My Documents (Payslips', 'etc.)'] },
    { title: 'Cases (HR Helpdesk)', icon: Shield, items: ['My Cases', 'Submit a Case', 'All Cases', 'Case Categories'] },
    { title: 'Reports & Analytics', icon: BarChart3, items: [] },
    { title: 'All Reports', icon: BarChart2, items: ['Employee Reports', 'Headcount Reports', 'Attrition Reports'] },
    { title: 'Custom Reports', icon: BarChart2, items: ['Report Builder'] },
    { title: 'Admin Console', icon: Shield, items: [] },
    { title: 'Organization', icon: Users, items: ['Company Profile', 'Departments', 'Locations'] },
    { title: 'Settings', icon: Settings, items: ['Leave Settings', 'Attendance Settings', 'Performance Settings'] },
    { title: 'Onboarding/Offboarding', icon: Users, items: ['Create Onboarding Flow', 'Manage Offboarding'] },
  ],
};

const emailMarketingAutomationNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Campaign Overview', 'List Growth', 'Automation Performance'] },
    { title: 'Campaigns', icon: Megaphone, items: [] },
    { title: 'Email Campaigns', icon: Mail, items: ['All Campaigns', 'Create Campaign (Regular', 'A/B Test)'] },
    { title: 'SMS Campaigns', icon: MessageSquare, items: ['All SMS Campaigns', 'Create SMS Campaign'] },
    { title: 'Contacts', icon: Contact, items: [] },
    { title: 'Manage Lists', icon: List, items: ['All Lists', 'Create List', 'Import Contacts'] },
    { title: 'Segments', icon: Users, items: ['Create Dynamic Segments', 'View Segments'] },
    { title: 'Signup Forms', icon: ClipboardList, items: ['Create Form', 'Embed Form'] },
    { title: 'Automation', icon: Zap, items: [] },
    { title: 'Workflows', icon: GitMerge, items: ['Create Workflow', 'Pre-built Templates (Welcome Series', 'etc.)'] },
    { title: 'Autoresponders', icon: Mail, items: ['Create Autoresponder'] },
    { title: 'Library', icon: BookOpen, items: [] },
    { title: 'Templates', icon: FileText, items: ['My Templates', 'Template Gallery', 'Create Template'] },
    { title: 'Images', icon: Image, items: ['My Images', 'Stock Images'] },
    { title: 'Reports & Analytics', icon: BarChart3, items: [] },
    { title: 'Campaign Reports', icon: BarChart2, items: ['Open Rates', 'Click Rates', 'Bounces'] },
    { title: 'Automation Reports', icon: BarChart2, items: ['Workflow Performance'] },
    { title: 'E-commerce', icon: ShoppingCart, items: ['Connect Store (Shopify', 'etc.)', 'Sales Tracking', 'Abandoned Cart Automation'] },
    { title: 'Settings', icon: Settings, items: ['Domain Authentication (SPF/DKIM)', 'User Management', 'Integrations'] },
  ],
};

const bugTrackerNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Project Overview', 'My Bugs', 'Bug Statistics', 'Recent Activity'] },
    { title: 'Projects', icon: GanttChart, items: ['All Projects', 'My Projects', 'Create Project'] },
    { title: 'Bugs', icon: Bug, items: ['All Bugs', 'My Bugs', 'Report Bug', 'Kanban View', 'List View'] },
    { title: 'Milestones', icon: Flag, items: ['All Milestones', 'Create Milestone', 'Track Progress'] },
    { title: 'Timesheets', icon: Clock, items: ['Log Time on Bugs', 'Timesheet Reports'] },
    { title: 'Forums', icon: MessageSquare, items: ['Project Discussions', 'Q&A'] },
    { title: 'Reports', icon: BarChart2, items: ['Bug Reports by Status/Severity', 'Milestone Reports', 'Velocity Charts'] },
    { title: 'Settings', icon: Settings, items: [] },
    { title: 'Project Settings', icon: GanttChart, items: ['Users & Roles', 'Custom Fields', 'Workflows'] },
    { title: 'Global Settings', icon: Settings, items: ['My Account', 'Integrations (GitHub', 'Bitbucket', 'etc.)'] },
  ],
};

const assistNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Start Remote Session', 'Access Unattended Device'] },
    { title: 'Remote Support', icon: Monitor, items: [] },
    { title: 'Start Session', icon: Play, items: ['Initiate On-Demand Session'] },
    { title: 'Scheduled Sessions', icon: Calendar, items: ['My Sessions', 'Schedule a Session'] },
    { title: 'Session History', icon: Clock, items: ['View Past Session Logs & Recordings'] },
    { title: 'Unattended Access', icon: Server, items: [] },
    { title: 'All Devices', icon: Monitor, items: ['List of managed computers'] },
    { title: 'Deployment', icon: Upload, items: ['Add New Device', 'Bulk Deployment'] },
    { title: 'Device Groups', icon: Folder, items: ['Manage groups of computers'] },
    { title: 'Screen Sharing', icon: Monitor, items: ['Start Screen Share (View only)'] },
    { title: 'Reports', icon: BarChart2, items: ['Session Reports', 'Technician Reports', 'Unattended Access Log'] },
    { title: 'Settings', icon: Settings, items: [] },
    { title: 'General', icon: Settings, items: ['My Profile', 'Branding (Custom Logo/URL)'] },
    { title: 'Technician Management', icon: Users, items: ['Add/Manage Technicians'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho Desk', 'ServiceNow', 'Zendesk'] },
    { title: 'Security', icon: Shield, items: ['Two-Factor Authentication', 'Session Policies'] },
  ],
};

const lensNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Start an AR Session'] },
    { title: 'Sessions', icon: Camera, items: [] },
    { title: 'My Sessions', icon: Camera, items: ['Upcoming', 'Past Sessions'] },
    { title: 'Session History', icon: Clock, items: ['View Session Recordings & Snapshots'] },
    { title: 'AR Tools (in-session)', icon: Settings, items: [] },
    { title: 'Live Camera Stream', icon: Camera, items: ['View remote camera feed'] },
    { title: '3D Annotations', icon: Pen, items: ['Place 3D arrows and markers'] },
    { title: 'Freeze Frame', icon: Pause, items: ['Pause the video to draw on a still image'] },
    { title: 'OCR (Text Recognition)', icon: ScanText, items: ['Scan and copy text from the video stream'] },
    { title: 'In-session Chat & VoIP', icon: MessageSquare, items: ['Communicate with the remote user'] },
    { title: 'Reports', icon: BarChart2, items: ['Session Duration Reports', 'Technician Performance'] },
    { title: 'Settings', icon: Settings, items: ['My Profile', 'User Management', 'Branding'] },
  ],
};

const bookingsNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Today\'s Appointments', 'Recent Bookings'] },
    { title: 'Calendar', icon: Calendar, items: [] },
    { title: 'My Calendar', icon: Calendar, items: ['View all appointments'] },
    { title: 'Team Calendar', icon: Calendar, items: ['See schedules for all staff'] },
    { title: 'Booking Page', icon: Calendar, items: [] },
    { title: 'Customize', icon: Settings, items: ['Edit your public booking page URL', 'logo', 'and instructions'] },
    { title: 'View Live Page', icon: Globe, items: ['See what your customers see'] },
    { title: 'Services', icon: List, items: ['All Services', 'Create Service (1-on-1', 'Group Class)'] },
    { title: 'Staff', icon: Users, items: ['All Staff', 'Add Staff Member', 'Set Working Hours & Breaks'] },
    { title: 'Customers', icon: Users, items: ['My Customer List', 'View Booking History'] },
    { title: 'Reports', icon: BarChart2, items: ['Booking Reports', 'Revenue Reports', 'Staff Utilization'] },
    { title: 'Settings', icon: Settings, items: [] },
    { title: 'Workspace Settings', icon: Settings, items: ['Timezone', 'Date Format'] },
    { title: 'Calendar Sync', icon: Calendar, items: ['Google Calendar', 'Office 365', 'Zoho Calendar'] },
    { title: 'Online Meetings', icon: CalendarDays, items: ['Zoho Meeting', 'Zoom', 'GoToMeeting'] },
    { title: 'Payments', icon: DollarSign, items: ['Stripe', 'PayPal', 'etc.'] },
  ],
};

const learnNavigation = {
  sections: [
    { title: 'For Learners (My View)', icon: User, items: [] },
    { title: 'Dashboard', icon: LayoutDashboard, items: ['My Courses', 'My Learning Paths', 'Recently Viewed'] },
    { title: 'Course Catalog', icon: Book, items: ['Browse and enroll in courses'] },
    { title: 'My Learning', icon: GraduationCap, items: ['View my progress', 'certificates'] },
    { title: 'For Admins/Authors (Admin View)', icon: Shield, items: [] },
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Learning Analytics', 'Course Completion Rates', 'User Activity'] },
    { title: 'Courses', icon: Book, items: ['All Courses', 'Create Course', 'Import Course'] },
    { title: 'Course Builder', icon: AppWindow, items: ['Add Lessons (Text', 'Video', 'Quiz)', 'Create Assessments'] },
    { title: 'Users', icon: User, items: ['Manage Learners', 'User Groups', 'Assign Courses'] },
    { title: 'Learning Paths', icon: Route, items: ['Create structured learning journeys'] },
    { title: 'Reports', icon: BarChart2, items: ['Course Reports', 'Learner Reports', 'Assessment Results'] },
    { title: 'Settings', icon: Settings, items: ['Branding', 'Gamification (Points/Badges)', 'Certificates'] },
  ],
};

const contractsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Contracts Overview', 'Expiring Soon', 'Awaiting My Action'] },
    { title: 'Contracts', icon: FileSignature, items: ['All Contracts', 'My Contracts', 'Shared with Me', 'Create Contract'] },
    { title: 'Contract Types', icon: List, items: ['Manage templates for different contract types (NDA', 'MSA', 'etc.)'] },
    { title: 'Clause Library', icon: Book, items: ['Pre-approved legal clauses'] },
    { title: 'Workflow (for a selected contract)', icon: GitMerge, items: [] },
    { title: 'Drafting', icon: FileEdit, items: ['Edit Contract', 'Collaborate with Comments'] },
    { title: 'Approval', icon: CheckCircle2, items: ['Send for Internal Approval', 'View Approval Status'] },
    { title: 'Negotiation', icon: Users, items: ['Share with Counterparty', 'Track Changes'] },
    { title: 'Signatures', icon: FileSignature, items: ['Send for e-Signature (Zoho Sign)'] },
    { title: 'Post-Signature', icon: FileSignature, items: ['Track Obligations', 'Set Renewal Reminders'] },
    { title: 'Reports', icon: BarChart2, items: ['Contract Status Reports', 'Renewal Pipeline', 'Clause Usage'] },
    { title: 'Admin Settings', icon: Shield, items: ['User Roles', 'Approval Workflows', 'Custom Fields'] },
  ],
};

const teamInboxNavigation = {
  sections: [
    { title: 'Inboxes', icon: Inbox, items: ['All Inboxes', 'Create Inbox'] },
    { title: 'My View (within an Inbox)', icon: User, items: [] },
    { title: 'Unassigned', icon: HelpCircle, items: ['New messages for the team to claim'] },
    { title: 'Assigned to Me', icon: User, items: ['Conversations I am responsible for'] },
    { title: 'Open', icon: HelpCircle, items: ['All active conversations'] },
    { title: 'Snoozed', icon: Clock, items: ['Conversations to revisit later'] },
    { title: 'Closed', icon: CheckSquare, items: ['Resolved conversations'] },
    { title: 'Team View', icon: Users, items: ['View conversations assigned to other team members'] },
    { title: 'Collaboration', icon: Users, items: [] },
    { title: 'Internal Comments', icon: MessageSquare, items: ['Discuss an email privately with the team (@mention colleagues)'] },
    { title: 'Shared Drafts', icon: FileEdit, items: ['Write a reply together before sending'] },
    { title: 'Automation', icon: Zap, items: [] },
    { title: 'Rules', icon: GitMerge, items: ['Automatically assign', 'tag', 'or close emails based on criteria'] },
    { title: 'Templates', icon: FileText, items: ['Canned responses for common questions'] },
    { title: 'Analytics', icon: BarChart3, items: ['Team Performance', 'Response Times', 'Conversation Volume'] },
    { title: 'Settings', icon: Settings, items: ['Manage Inboxes', 'Team Members', 'Tags', 'Rules'] },
  ],
};

const workerlyNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Today\'s Jobs', 'Available Temps', 'Timesheet Approvals', 'Sales Overview'] },
    { title: 'Jobs', icon: Briefcase, items: ['All Jobs', 'Create Job', 'Active Jobs', 'Past Jobs'] },
    { title: 'Temps', icon: Users, items: ['All Temps', 'Add Temp', 'Available Temps', 'Skill Search'] },
    { title: 'Clients', icon: Briefcase, items: ['All Clients', 'Client Contacts', 'Job Requests'] },
    { title: 'Scheduling', icon: Calendar, items: [] },
    { title: 'Scheduler', icon: Calendar, items: ['Visual drag-and-drop calendar'] },
    { title: 'Unfilled Shifts', icon: List, items: ['View and assign open shifts'] },
    { title: 'Timesheets', icon: Clock, items: [] },
    { title: 'Pending Approval', icon: CheckCircle2, items: ['Review and approve temp timesheets'] },
    { title: 'Approved Timesheets', icon: CheckSquare, items: ['View processed hours'] },
    { title: 'Invoices & Pay', icon: FileText, items: [] },
    { title: 'Generate Invoices', icon: FileText, items: ['Create invoices for clients from timesheets'] },
    { title: 'Generate Payslips', icon: FileText, items: ['Prepare payments for temps'] },
    { title: 'Reports', icon: BarChart2, items: ['Job Reports', 'Sales Reports', 'Temp Performance Reports'] },
    { title: 'Settings', icon: Settings, items: ['My Agency Details', 'Job Templates', 'Invoice Settings'] },
  ],
};

const shiftsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Today\'s Schedule', 'Open Shifts', 'My Shifts', 'Pending Requests'] },
    { title: 'Scheduler', icon: Calendar, items: [] },
    { title: 'View Schedule', icon: Calendar, items: ['By Day', 'Week', 'Month; By Position or Employee'] },
    { title: 'Build Schedule', icon: Calendar, items: ['Create Shifts', 'Use Schedule Templates'] },
    { title: 'Requests', icon: MessageSquare, items: [] },
    { title: 'Shift Swaps', icon: Repeat, items: ['View and approve swap requests'] },
    { title: 'Time Off', icon: Plane, items: ['View and approve leave requests'] },
    { title: 'Open Shifts', icon: List, items: ['Manage employee claims for open shifts'] },
    { title: 'Timesheets', icon: Clock, items: [] },
    { title: 'My Timesheets', icon: Clock, items: ['View my clocked hours'] },
    { title: 'Team Timesheets', icon: Clock, items: ['Review and approve team hours', 'Edit Entries'] },
    { title: 'Reports', icon: BarChart2, items: ['Labor Cost Reports', 'Schedule vs. Actual Hours', 'Attendance Reports'] },
    { title: 'Employees', icon: Users, items: ['All Employees', 'Add Employee', 'Set Availability & Positions'] },
    { title: 'Settings', icon: Settings, items: ['Locations', 'Positions', 'General Schedule Settings', 'Time Clock Options (Geofencing)'] },
  ],
};

const fsmNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Today\'s Jobs', 'Technician Status Map', 'Unscheduled Work Orders'] },
    { title: 'Work Orders', icon: ShoppingCart, items: ['All Work Orders', 'Create Work Order', 'Dispatch', 'Completed'] },
    { title: 'Scheduling & Dispatch', icon: Calendar, items: [] },
    { title: 'Dispatch Board', icon: List, items: ['Visual schedule of all technicians and jobs'] },
    { title: 'Map View', icon: Map, items: ['See technician locations and job sites'] },
    { title: 'Suggest Technicians (AI)', icon: Bot, items: ['Find the best tech for the job'] },
    { title: 'Customers', icon: Users, items: ['All Customers', 'Service Locations', 'Asset History'] },
    { title: 'Inventory', icon: Boxes, items: ['Parts & Services', 'Warehouse Stock', 'Purchase Orders'] },
    { title: 'Billing', icon: DollarSign, items: [] },
    { title: 'Generate Invoice', icon: FileText, items: ['Create invoice from a completed work order'] },
    { title: 'Payments', icon: DollarSign, items: ['Record payments'] },
    { title: 'Technician Portal (Mobile View)', icon: Monitor, items: ['My Jobs', 'My Route', 'Parts Needed', 'Service Reports', 'Capture Signature'] },
    { title: 'Reports', icon: BarChart2, items: ['Work Order Reports', 'Technician Performance', 'Inventory Reports'] },
    { title: 'Settings', icon: Settings, items: ['Service Templates', 'Work Order Customization', 'User Management'] },
  ],
};

const pageSenseNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['All Experiments', 'Project Overview', 'Recent Results'] },
    { title: 'Experiments', icon: TestTube2, items: [] },
    { title: 'A/B Testing', icon: TestTube2, items: ['Create A/B Test', 'View Reports'] },
    { title: 'Split URL Testing', icon: TestTube2, items: ['Create Split Test'] },
    { title: 'Funnel Analysis', icon: BarChart3, items: ['Create Funnel', 'View Drop-off Reports'] },
    { title: 'Analysis', icon: BarChart3, items: [] },
    { title: 'Heatmaps', icon: Map, items: ['View Click', 'Scroll', 'and Attention maps'] },
    { title: 'Session Recording', icon: Monitor, items: ['Watch recordings of user sessions'] },
    { title: 'Personalization', icon: User, items: ['Create Personalized Experiences for different audience segments'] },
    { title: 'Website Tools', icon: Settings, items: [] },
    { title: 'Polls', icon: MessageSquare, items: ['Create on-page polls'] },
    { title: 'Push Notifications', icon: Bell, items: ['Set up and send web push notifications'] },
    { title: 'Goals', icon: Target, items: ['All Goals', 'Create Goal (e.g.', 'button click', 'page visit)'] },
    { title: 'Audiences', icon: Users, items: ['All Audiences', 'Create Audience Segment'] },
    { title: 'Settings', icon: Settings, items: ['Project Settings', 'Install Snippet', 'Integrations'] },
  ],
};

const tablesNavigation = {
  sections: [
    { title: 'Workspaces', icon: Briefcase, items: ['My Workspaces', 'Shared With Me', 'Create Workspace'] },
    { title: 'Bases (within a Workspace)', icon: Database, items: ['All Bases', 'Create Base (from scratch', 'template', 'or import)'] },
    { title: 'Views (within a Base)', icon: List, items: [] },
    { title: 'Grid View', icon: Table, items: ['Classic spreadsheet-style view'] },
    { title: 'Form View', icon: ClipboardList, items: ['Create forms to collect data'] },
    { title: 'Kanban View', icon: LayoutDashboard, items: ['Organize records as cards in a pipeline'] },
    { title: 'Calendar View', icon: Calendar, items: ['Plot records on a calendar'] },
    { title: 'Gallery View', icon: Image, items: ['Display records as visual cards'] },
    { title: 'Data', icon: Database, items: [] },
    { title: 'Fields', icon: List, items: ['Manage Columns (Text', 'Number', 'Attachments', 'Linked Records)'] },
    { title: 'Relationships', icon: GitMerge, items: ['Link tables together'] },
    { title: 'Automations', icon: Zap, items: ['Create Automation (e.g.', '"When a new row is added', 'send a notification")'] },
    { title: 'Interfaces', icon: AppWindow, items: ['Create custom', 'interactive dashboards for your data'] },
    { title: 'Reports & Dashboards', icon: BarChart2, items: ['Create charts and graphs from your data'] },
    { title: 'Settings', icon: Settings, items: ['Base Settings', 'User Permissions', 'API Keys'] },
  ],
};

const payrollNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Payroll Dashboard', 'Payday Countdown', 'To-Do List', 'Employee Summary'] },
    { title: 'Pay Runs', icon: Banknote, items: ['Run Payroll', 'Past Pay Runs', 'Draft Pay Runs'] },
    { title: 'Employees', icon: Users, items: [] },
    { title: 'All Employees', icon: Users, items: ['Employee List'] },
    { title: 'Onboarding', icon: UserPlus, items: ['Add New Employee'] },
    { title: 'Offboarding', icon: User, items: ['Terminate Employee'] },
    { title: 'Time & Attendance', icon: Clock, items: ['Approve Timesheets', 'Manage Leave'] },
    { title: 'Taxes & Filings', icon: Shield, items: [] },
    { title: 'Tax Filings', icon: Shield, items: ['View and manage tax payments and forms'] },
    { title: 'Tax Withholding', icon: Shield, items: ['Manage employee tax details'] },
    { title: 'Benefits & Deductions', icon: Heart, items: ['Manage Benefits (Health', 'etc.)', 'Manage Deductions'] },
    { title: 'Reports', icon: BarChart2, items: ['Payroll Summary', 'Employee Reports', 'Tax Reports'] },
    { title: 'Settings', icon: Settings, items: ['Organization Profile', 'Pay Schedule', 'Bank Accounts', 'Statutory Components'] },
  ],
};

const checkoutNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Payments Overview', 'Recent Transactions', 'Revenue'] },
    { title: 'Payment Pages', icon: File, items: ['All Pages', 'Create New Page (One-time or Recurring)'] },
    { title: 'Transactions', icon: DollarSign, items: ['All Transactions', 'Successful', 'Failed', 'Refunds'] },
    { title: 'Customers', icon: Users, items: ['My Customer List', 'View Purchase History'] },
    { title: 'Products', icon: Package, items: ['My Product List', 'Create New Product'] },
    { title: 'Coupons', icon: Tag, items: ['All Coupons', 'Create New Coupon'] },
    { title: 'Reports', icon: BarChart2, items: ['Sales Reports', 'Transaction Reports'] },
    { title: 'Settings', icon: Settings, items: ['Branding', 'Payment Gateways', 'Taxes', 'Email Notifications'] },
  ],
};

const thriveNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Loyalty Program Overview', 'New Members', 'Points Redeemed'] },
    { title: 'Loyalty Program', icon: Star, items: [] },
    { title: 'Setup', icon: Settings, items: ['Tiers & Rewards', 'Earning Rules', 'Redemption Rules'] },
    { title: 'Members', icon: Users, items: ['All Members', 'Search Members'] },
    { title: 'Affiliate Program', icon: Users, items: [] },
    { title: 'Setup', icon: Settings, items: ['Commission Rules', 'Marketing Assets (Links', 'Banners)'] },
    { title: 'Affiliates', icon: Users, items: ['All Affiliates', 'Pending Approval', 'Payouts'] },
    { title: 'Referral Program', icon: Share2, items: [] },
    { title: 'Setup', icon: Settings, items: ['Referral Rewards (for referrer and friend)'] },
    { title: 'Reports', icon: BarChart2, items: ['Loyalty Reports', 'Affiliate Performance', 'Referral Traffic'] },
    { title: 'Settings', icon: Settings, items: ['Program Branding', 'Integrations (Commerce', 'Subscriptions)'] },
  ],
};

const landingPageNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['All Landing Pages', 'Performance Overview (Views', 'Conversions)'] },
    { title: 'Landing Pages', icon: LandingPage, items: ['All Pages', 'Create New Page'] },
    { title: 'Builder (for a selected page)', icon: AppWindow, items: [] },
    { title: 'Sections', icon: LayoutDashboard, items: ['Add Pre-built Sections'] },
    { title: 'Elements', icon: List, items: ['Add Text', 'Images', 'Forms', 'Timers'] },
    { title: 'Design', icon: HelpCircle, items: ['Global Styles', 'Fonts', 'Colors'] },
    { title: 'Settings', icon: Settings, items: ['SEO Settings', 'Form Settings'] },
    { title: 'Leads', icon: Users, items: ['View all leads collected from forms'] },
    { title: 'A/B Testing', icon: TestTube2, items: ['Create A/B Test', 'View Results'] },
    { title: 'Integrations', icon: GitMerge, items: ['Zoho CRM', 'Google Analytics', 'etc.'] },
    { title: 'Domains', icon: Globe2, items: ['Connect Custom Domain'] },
  ],
};

const domainsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['My Domains', 'Domain Health Overview'] },
    { title: 'Domains', icon: Globe2, items: ['All Domains', 'Register New Domain', 'Transfer Domain'] },
    { title: 'DNS Management (for a selected domain)', icon: Settings, items: ['Manage Records (A', 'CNAME', 'MX', 'TXT)'] },
    { title: 'Email Forwarding', icon: Mail, items: ['Set up email forwards'] },
    { title: 'WHOIS & Privacy', icon: Shield, items: ['Manage Contact Info', 'Enable Privacy Protection'] },
    { title: 'SSL Certificates', icon: ShieldCheck, items: ['Manage SSL'] },
    { title: 'Billing', icon: DollarSign, items: ['My Invoices', 'Renewal Settings'] },
  ],
};

const communitySpacesNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Community Overview', 'New Members', 'Top Contributors', 'Unanswered Questions'] },
    { title: 'Channels', icon: Radio, items: ['Different topic-based discussion areas'] },
    { title: 'Discussions', icon: MessageSquare, items: ['All Posts', 'My Posts', 'Following', 'Create Post'] },
    { title: 'Knowledge Base', icon: BookOpen, items: ['Articles', 'Categories', 'Create Article'] },
    { title: 'Events', icon: Calendar, items: ['Upcoming Events', 'Create Event'] },
    { title: 'Members', icon: Users, items: ['Member Directory', 'Search Members'] },
    { title: 'Moderation', icon: Shield, items: [] },
    { title: 'Queue', icon: List, items: ['Posts & Comments Awaiting Approval'] },
    { title: 'Reported Content', icon: AlertCircle, items: ['View and act on reported items'] },
    { title: 'Gamification', icon: Star, items: ['Leaderboards', 'Badges', 'Points System'] },
    { title: 'Analytics', icon: BarChart3, items: ['Engagement Reports', 'Member Growth', 'Content Performance'] },
    { title: 'Settings', icon: Settings, items: ['Community Branding', 'User Roles', 'Moderation Rules', 'Integrations'] },
  ],
};

const publishNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Listings Overview', 'Review Score', 'Search Rankings'] },
    { title: 'Listings', icon: List, items: [] },
    { title: 'Manage Listings', icon: List, items: ['Update Business Info (Hours', 'Address', 'etc.)'] },
    { title: 'Sync Status', icon: Repeat, items: ['View status across connected directories (Google', 'Bing', 'Yelp)'] },
    { title: 'Reviews', icon: Star, items: [] },
    { title: 'All Reviews', icon: Star, items: ['Unified inbox for all reviews'] },
    { title: 'Respond to Reviews', icon: MessageSquare, items: ['Use templates to reply'] },
    { title: 'Local SEO', icon: Globe, items: [] },
    { title: 'Rankings', icon: TrendingUp, items: ['Track local keyword performance'] },
    { title: 'Citations', icon: List, items: ['Monitor and build business citations'] },
    { title: 'Posts', icon: Megaphone, items: ['Create and schedule posts for Google Business Profile'] },
    { title: 'Reports', icon: BarChart2, items: ['Listing Accuracy Report', 'Review Performance', 'Ranking Reports'] },
    { title: 'Settings', icon: Settings, items: ['Connect Listings', 'Business Profile', 'User Management'] },
  ],
};

const appticsNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['App Overview', 'Real-time Users', 'Crash Rate', 'Key Metrics'] },
    { title: 'Audience', icon: Users, items: ['User Demographics', 'Devices', 'User Journeys'] },
    { title: 'Behavior', icon: Zap, items: [] },
    { title: 'Events', icon: Calendar, items: ['Track custom in-app events'] },
    { title: 'Funnels', icon: Filter, items: ['Analyze user conversion through key steps'] },
    { title: 'Screen Flow', icon: Zap, items: ['Visualize how users navigate your app'] },
    { title: 'Quality', icon: Shield, items: [] },
    { title: 'Crashes', icon: AlertCircle, items: ['Crash Reports', 'Symbolication'] },
    { title: 'Performance', icon: Star, items: ['App Start Time', 'API Latency', 'Screen Load Time'] },
    { title: 'Engagement', icon: Megaphone, items: [] },
    { title: 'Push Notifications', icon: Bell, items: ['Send targeted push campaigns'] },
    { title: 'In-App Feedback', icon: MessageSquare, items: ['Collect user feedback and ratings'] },
    { title: 'A/B Testing', icon: TestTube2, items: ['Create and manage A/B tests for your app'] },
    { title: 'Settings', icon: Settings, items: ['App Settings', 'Install SDK', 'Data Management', 'Alerts'] },
  ],
};

const eProtectNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Security Overview', 'Threats Detected', 'Mail Flow Status'] },
    { title: 'Threat Protection', icon: Shield, items: [] },
    { title: 'Quarantine', icon: Shield, items: ['View and manage quarantined emails (Spam', 'Malware)'] },
    { title: 'Policies', icon: Shield, items: ['Anti-Spam', 'Anti-Phishing', 'Anti-Malware policies'] },
    { title: 'Data Loss Prevention (DLP)', icon: Shield, items: ['Create rules to prevent sensitive data leaks'] },
    { title: 'Encryption', icon: Lock, items: ['Manage email encryption policies'] },
    { title: 'Archive', icon: Archive, items: [] },
    { title: 'Search Archive', icon: Search, items: ['Perform eDiscovery searches'] },
    { title: 'Retention Policies', icon: Shield, items: ['Define how long to keep emails'] },
    { title: 'Legal Hold', icon: Shield, items: ['Place holds on mailboxes for legal cases'] },
    { title: 'Reports', icon: BarChart2, items: ['Threat Reports', 'Mail Flow Reports', 'Archive Reports'] },
    { title: 'Settings', icon: Settings, items: ['Domain Configuration', 'User Management', 'Policy Settings'] },
  ],
};

const directoryNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Organization Overview', 'User Logins', 'App Usage'] },
    { title: 'Directory', icon: BookUser, items: [] },
    { title: 'Users', icon: User, items: ['All Users', 'Add User', 'User Groups'] },
    { title: 'Devices', icon: Monitor, items: ['Managed Devices'] },
    { title: 'Applications', icon: AppWindow, items: [] },
    { title: 'My Apps', icon: AppWindow, items: ['User\'s personal app dashboard'] },
    { title: 'App Catalog', icon: AppWindow, items: ['Add and configure apps for the organization'] },
    { title: 'Security', icon: Shield, items: [] },
    { title: 'Single Sign-On (SSO)', icon: Lock, items: ['Configure SSO for apps'] },
    { title: 'Multi-Factor Authentication (MFA)', icon: Shield, items: ['Manage MFA policies'] },
    { title: 'Policies', icon: Shield, items: ['Password Policies', 'Access Policies'] },
    { title: 'Reports', icon: BarChart2, items: ['Audit Logs', 'App Usage Reports', 'Security Reports'] },
    { title: 'Settings', icon: Settings, items: ['Directory Settings', 'Custom Branding', 'User Provisioning'] },
  ],
};

const rpaNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Bot Overview', 'Recent Runs', 'Success/Failure Rate'] },
    { title: 'Studio (Bot Builder)', icon: AppWindow, items: [] },
    { title: 'Recorder', icon: Monitor, items: ['Record actions to create a bot'] },
    { title: 'Workflow Designer', icon: GitMerge, items: ['Drag-and-drop workflow builder'] },
    { title: 'Actions Library', icon: Book, items: ['Pre-built actions (Open App', 'Click Button', 'etc.)'] },
    { title: 'Bots', icon: Bot, items: ['My Bots', 'Create Bot', 'Bot Schedules'] },
    { title: 'Executions', icon: Play, items: ['Execution History', 'Logs', 'Real-time Monitoring'] },
    { title: 'Connections', icon: Plug, items: ['Manage credentials and connections to applications'] },
    { title: 'Settings', icon: Settings, items: ['Agent (Bot Runner) Management', 'User Roles'] },
  ],
};

const qEngineNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Project Quality Overview', 'Recent Test Runs', 'Defect Summary'] },
    { title: 'Test Cases', icon: TestTube2, items: [] },
    { title: 'Test Repository', icon: Folder, items: ['All Test Cases', 'Create Test Case'] },
    { title: 'Test Suites', icon: List, items: ['Group test cases into suites'] },
    { title: 'Execution', icon: Play, items: [] },
    { title: 'Test Runs', icon: Play, items: ['Plan and execute test runs'] },
    { title: 'CI/CD Integration', icon: GitMerge, items: ['Connect to Jenkins', 'Bamboo', 'etc.'] },
    { title: 'Defects', icon: Bug, items: ['Log Defects', 'Defect List', 'Integration with BugTrackers'] },
    { title: 'Automation Studio', icon: Zap, items: [] },
    { title: 'Record & Play', icon: Monitor, items: ['Record web interactions'] },
    { title: 'Script Editor', icon: FileEdit, items: ['Write custom test scripts'] },
    { title: 'Reports', icon: BarChart2, items: ['Test Execution Reports', 'Code Coverage', 'Defect Reports'] },
  ],
};

const serviceDeskPlusNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['IT Help Desk Overview', 'Ticket Volume', 'SLA Status'] },
    { title: 'Requests', icon: MessageSquare, items: ['All Requests', 'New Incident', 'Service Catalog'] },
    { title: 'Problems', icon: AlertCircle, items: ['Log Problem', 'Problem List', 'Root Cause Analysis'] },
    { title: 'Changes', icon: Repeat, items: ['Log Change', 'Change Calendar', 'CAB (Change Advisory Board)'] },
    { title: 'Assets', icon: Package, items: ['All Assets', 'Scan Assets', 'Manage Software & Hardware'] },
    { title: 'Knowledge Base', icon: BookOpen, items: ['All Solutions', 'Add Solution'] },
    { title: 'Reports', icon: BarChart2, items: ['IT Help Desk Reports', 'Asset Reports', 'SLA Reports'] },
  ],
};

const site24x7Navigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Global Monitoring Dashboard'] },
    { title: 'Web', icon: Globe, items: ['Website Monitoring', 'Web Page Speed', 'REST API'] },
    { title: 'Server', icon: Server, items: ['Server Monitoring', 'Processes', 'Services'] },
    { title: 'Network', icon: Radio, items: ['Network Devices', 'Firewalls', 'Routers'] },
    { title: 'Cloud', icon: Cloud, items: ['AWS', 'Azure', 'GCP Monitoring'] },
    { title: 'APM (Application Performance)', icon: Star, items: ['App Transaction Tracing'] },
    { title: 'Logs', icon: FileText, items: ['Log Management', 'Search Logs'] },
    { title: 'Alerts', icon: AlertCircle, items: ['Current Alarms', 'Alert History', 'Alert Configuration'] },
  ],
};

const embeddedBINavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Analytics Overview', 'Usage Statistics'] },
    { title: 'Solutions', icon: Lightbulb, items: [] },
    { title: 'Create Solution', icon: Lightbulb, items: ['Start a new embedded analytics project'] },
    { title: 'My Solutions', icon: Lightbulb, items: ['List of all your embedded BI projects'] },
    { title: 'Designer (within a Solution)', icon: AppWindow, items: [] },
    { title: 'Data Sources', icon: Database, items: ['Connect to your application\'s database or API'] },
    { title: 'Report Builder', icon: BarChart2, items: ['Create charts', 'pivot tables', 'and tabular reports'] },
    { title: 'Dashboard Designer', icon: LayoutDashboard, items: ['Drag-and-drop to build interactive dashboards'] },
    { title: 'Deployment', icon: Upload, items: [] },
    { title: 'Embed Settings', icon: Settings, items: ['Get embed URL/code snippet'] },
    { title: 'Theming', icon: Palette, items: ['Customize the look and feel to match your app (white-labeling)'] },
    { title: 'Security', icon: Shield, items: ['Configure Single Sign-On (SSO) and data security rules'] },
    { title: 'API & SDKs', icon: Code, items: ['API Keys', 'API Documentation', 'Web & Mobile SDKs'] },
    { title: 'Settings', icon: Settings, items: ['User Management', 'White-Label Settings', 'Billing'] },
  ],
};

const dataPrepNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Dashboard', 'Recent Datasets', 'Data Quality Overview'] },
    { title: 'Data Sources', icon: Database, items: ['Import Data (from files', 'databases', 'cloud apps)'] },
    { title: 'Workspace', icon: Briefcase, items: [] },
    { title: 'My Datasets', icon: Database, items: ['List of all imported datasets'] },
    { title: 'Prepare Data', icon: Database, items: ['Open a dataset to clean and transform it'] },
    { title: 'Transform (within the preparation view)', icon: Zap, items: [] },
    { title: 'Cleanse', icon: CheckSquare, items: ['Remove duplicates', 'handle missing values', 'correct data types'] },
    { title: 'Transform', icon: Zap, items: ['Split columns', 'merge columns', 'create formula-based columns'] },
    { title: 'Enrich', icon: Plus, items: ['Join with other datasets'] },
    { title: 'Recipes', icon: List, items: ['Save a sequence of transformation steps to reuse later'] },
    { title: 'Export', icon: Send, items: ['Export cleaned data to a destination (Zoho Analytics', 'database', 'etc.)'] },
    { title: 'Settings', icon: Settings, items: ['My Account', 'Connections', 'Schedules'] },
  ],
};

const marketingAutomationNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['Marketing Funnel Overview', 'Lead Generation', 'Revenue Attribution'] },
    { title: 'Journeys', icon: Route, items: [] },
    { title: 'Journey Builder', icon: AppWindow, items: ['Visual workflow builder for customer journeys'] },
    { title: 'My Journeys', icon: Route, items: ['All active and draft journeys'] },
    { title: 'Leads', icon: Users, items: ['All Leads', 'Lead Scoring', 'Lead Stages'] },
    { title: 'Content', icon: FileText, items: [] },
    { title: 'Emails', icon: Mail, items: ['Email Templates', 'A/B Testing'] },
    { title: 'Landing Pages', icon: LandingPage, items: ['Page Builder', 'Page Analytics'] },
    { title: 'Forms', icon: ClipboardList, items: ['Signup Forms', 'Form Analytics'] },
    { title: 'Channels', icon: Radio, items: ['Email Campaigns', 'SMS', 'Social Media Campaigns'] },
    { title: 'Website', icon: Globe, items: ['Web Assistant (pop-ups', 'banners)', 'Web Behavior Tracking'] },
    { title: 'Analytics', icon: BarChart3, items: ['Journey Reports', 'Lead Source Analytics', 'Revenue Reports'] },
    { title: 'Settings', icon: Settings, items: ['Domain Authentication', 'Integrations (CRM', 'etc.)', 'User Management'] },
  ],
};

const crmPlusNavigation = {
  sections: [
  ],
};

const financePlusNavigation = {
  sections: [
  ],
};

const workplaceNavigation = {
  sections: [
  ],
};

const peoplePlusNavigation = {
  sections: [
  ],
};

const marketingPlusNavigation = {
  sections: [
  ],
};

const servicePlusNavigation = {
  sections: [
  ],
};

const projectsPlusNavigation = {
  sections: [
  ],
};

const catalystNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['Project Dashboard', 'Usage Metrics', 'Recent Deployments'] },
    { title: 'Develop', icon: Code, items: ['Functions', 'Web Client'] },
    { title: 'Data Store', icon: Database, items: ['Data Store', 'File Store', 'Cache'] },
    { title: 'AI Services', icon: Bot, items: ['Zia (OCR', 'Object Detection', 'etc.)'] },
    { title: 'Amplify', icon: Megaphone, items: ['Authentication', 'Push Notifications'] },
    { title: 'Monitor', icon: Monitor, items: ['Logs', 'Metrics', 'API Gateway Analytics'] },
    { title: 'Settings', icon: Settings, items: ['Environments', 'Custom Domains', 'API Keys'] },
  ],
};

const officeIntegratorNavigation = {
  sections: [
    { title: 'Dashboard', icon: LayoutDashboard, items: ['API Usage', 'Document Sessions'] },
    { title: 'API Keys', icon: Key, items: ['Manage your API credentials'] },
    { title: 'Co-branding', icon: Palette, items: ['Customize the look of the embedded editors'] },
    { title: 'Documentation', icon: Book, items: ['API Reference', 'SDKs'] },
    { title: 'Settings', icon: Settings, items: ['My Account', 'Security', 'Webhooks'] },
  ],
};

const defaultNavigation = {
  sections: [
    { title: 'Dashboard', icon: Home, items: ['Overview'] },
    { title: 'Items', icon: Briefcase, items: ['All Items', 'New Item'] },
  ],
};

export function getAppNavigation(appName: string) {
  switch (appName) {
    case 'CRM':
      return crmNavigation;
    case 'Projects':
      return projectsNavigation;
    case 'Books':
      return booksNavigation;
    case 'Desk':
      return deskNavigation;
    case 'People':
      return peopleNavigation;
    case 'Mail':
      return mailNavigation;
    case 'Social':
      return socialNavigation;
    case 'Campaigns':
      return campaignsNavigation;
    case 'Inventory':
      return inventoryNavigation;
    case 'Recruit':
      return recruitNavigation;
    case 'Expense':
      return expenseNavigation;
    case 'Subscriptions':
      return subscriptionsNavigation;
    case 'Connect':
      return connectNavigation;
    case 'WorkDrive':
      return workDriveNavigation;
    case 'Creator':
      return creatorNavigation;
    case 'Writer':
      return writerNavigation;
    case 'Sheet':
      return sheetNavigation;
    case 'Show':
      return showNavigation;
    case 'Cliq':
      return cliqNavigation;
    case 'Meeting':
      return meetingNavigation;
    case 'Forms':
      return formsNavigation;
    case 'Analytics':
      return analyticsNavigation;
    case 'Sign':
      return signNavigation;
    case 'Backstage':
      return backstageNavigation;
    case 'Commerce':
      return commerceNavigation;
    case 'Creator(Low-CodePlatform)':
      return creatorLowCodePlatformNavigation;
    case 'Cliq(TeamCommunication)':
      return cliqTeamCommunicationNavigation;
    case 'WorkDrive(CloudFileManagement)':
      return workDriveCloudFileManagementNavigation;
    case 'Meeting(VideoConferencing)':
      return meetingVideoConferencingNavigation;
    case 'Sprints':
      return sprintsNavigation;
    case 'Recruit(ApplicantTrackingSystem)':
      return recruitApplicantTrackingSystemNavigation;
    case 'Books(Accounting)':
      return booksAccountingNavigation;
    case 'Inventory2':
      return inventoryNavigation2;
    case 'Sign(DigitalSignatures)':
      return signDigitalSignaturesNavigation;
    case 'Survey':
      return surveyNavigation;
    case 'Flow':
      return flowNavigation;
    case 'Creator(Low-CodeApplicationBuilder)':
      return creatorLowCodeApplicationBuilderNavigation;
    case 'Sites':
      return sitesNavigation;
    case 'Vault':
      return vaultNavigation;
    case 'MailAdminConsole':
      return mailAdminConsoleNavigation;
    case 'Calendar':
      return calendarNavigation;
    case 'Notebook':
      return notebookNavigation;
    case 'People(HumanResources)':
      return humanResourcesNavigation;
    case 'Campaigns(Email&MarketingAutomation)':
      return emailMarketingAutomationNavigation;
    case 'BugTracker':
      return bugTrackerNavigation;
    case 'Assist':
      return assistNavigation;
    case 'Lens':
      return lensNavigation;
    case 'Bookings':
      return bookingsNavigation;
    case 'Learn':
      return learnNavigation;
    case 'Contracts':
      return contractsNavigation;
    case 'TeamInbox':
      return teamInboxNavigation;
    case 'Workerly':
      return workerlyNavigation;
    case 'Shifts':
      return shiftsNavigation;
    case 'FSM':
      return fsmNavigation;
    case 'PageSense':
      return pageSenseNavigation;
    case 'Tables':
      return tablesNavigation;
    case 'Payroll':
      return payrollNavigation;
    case 'Checkout':
      return checkoutNavigation;
    case 'Thrive':
      return thriveNavigation;
    case 'LandingPage':
      return landingPageNavigation;
    case 'Domains':
      return domainsNavigation;
    case 'CommunitySpaces':
      return communitySpacesNavigation;
    case 'Publish':
      return publishNavigation;
    case 'Apptics':
      return appticsNavigation;
    case 'eProtect':
      return eProtectNavigation;
    case 'Directory':
      return directoryNavigation;
    case 'RPA':
      return rpaNavigation;
    case 'QEngine':
      return qEngineNavigation;
    case 'ServiceDeskPlus':
      return serviceDeskPlusNavigation;
    case 'Site24x7':
      return site24x7Navigation;
    case 'EmbeddedBI':
      return embeddedBINavigation;
    case 'DataPrep':
      return dataPrepNavigation;
    case 'MarketingAutomation':
      return marketingAutomationNavigation;
    case 'CRMPlus':
      return crmPlusNavigation;
    case 'FinancePlus':
      return financePlusNavigation;
    case 'Workplace':
      return workplaceNavigation;
    case 'PeoplePlus':
      return peoplePlusNavigation;
    case 'MarketingPlus':
      return marketingPlusNavigation;
    case 'ServicePlus':
      return servicePlusNavigation;
    case 'ProjectsPlus':
      return projectsPlusNavigation;
    case 'Catalyst':
      return catalystNavigation;
    case 'OfficeIntegrator':
      return officeIntegratorNavigation;
    default:
      return defaultNavigation;
  }
}

