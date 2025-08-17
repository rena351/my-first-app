export type AppData = {
  sidebar: any;
  apps: { [key: string]: any };
};

export const allAppsData: AppData = {
  sidebar: `
1. Zoho CRM
Home: Dashboard, Today's Activities, Recent Items
Leads: All Leads, New Lead, Converted Leads, Unqualified Leads
Contacts: All Contacts, New Contact, My Contacts
Accounts: All Accounts, New Account, My Accounts
Deals: All Deals, New Deal, Pipeline View, Won Deals, Lost Deals
Tasks: All Tasks, My Tasks, Overdue Tasks
Meetings: Calendar, All Events, New Event
Calls: All Calls, Log Call, Scheduled Calls
Campaigns: All Campaigns, New Campaign, Active Campaigns
Reports: All Reports, Sales Reports, Activity Reports, Custom Reports
Dashboards: Sales Dashboard, Marketing Dashboard, CEO Dashboard
Forecasts: Forecasts, Territory Forecasts
Products: All Products, New Product, Price Books
Quotes: All Quotes, New Quote, Accepted Quotes
Sales Orders: All Sales Orders, New Order, Delivered Orders
Purchase Orders: All Purchase Orders, New Order
Invoices: All Invoices, New Invoice, Paid Invoices, Overdue Invoices
Cases: All Cases, Open Cases, Closed Cases
Solutions: All Solutions, Published Solutions
Vendors: All Vendors, New Vendor
Documents: All Documents, Folders, Upload
Feeds: Company Updates, My Posts
Recycle Bin: Deleted Records
2. Zoho Projects
Home: Project Dashboard, My Overview
Projects: All Projects, New Project, Project Templates
Tasks: All Tasks, My Tasks, Task Lists, Kanban Board
Gantt Chart: Project Timeline, Dependencies, Critical Path
Timesheets: My Timesheets, Log Time, Approvals
Issues / Bugs: All Issues, Report Issue, My Issues
Documents: Files, Folders, Upload File
Reports: Task Reports, Time Reports, Issue Reports, Project Reports
Users: All Users, User Groups
Calendar: Project Calendar, Deadlines
3. Zoho Books (Finance)
Dashboard: Financial Overview, Cash Flow, Income & Expense
Sales: Customers, Quotes, Sales Orders, Invoices, Payments Received
Purchases: Vendors, Bills, Purchase Orders, Expenses
Items: All Items, New Item, Price Lists, Inventory Adjustments
Banking: Bank Accounts, Bank Feeds, Reconciliation
Accountant: Chart of Accounts, Manual Journals
Time Tracking: Projects, Timesheets
Reports: P&L, Balance Sheet, Cash Flow Statement, Sales Reports
Documents: All Documents, Upload Receipt
4. Zoho Desk (Support)
Home: Agent Dashboard, Team Dashboard, The HQ
Tickets: All Tickets, My Tickets, Ticket Views (Open, Overdue, etc.)
Knowledge Base: Articles, Categories, Community Forums
Customers: Contacts, Accounts
Reports: Ticket Reports, Agent Performance, CSAT Reports
Analytics: Dashboards, Time Tracking Reports
Channels: Email, Chat, Phone, Social Media
Setup: Departments, Automation, SLAs, Templates
5. Zoho People (HR)
Home: My Space, Company Dashboard, Announcements
Employee Self-Service: My Profile, Leave Tracker, Timesheets, My Reviews
Leave Management: Leave Calendar, Apply Leave, Approvals
Time & Attendance: Attendance, Timesheets, Shift Management
Performance: Appraisals, Goals (KRA), Skill Sets
Files: HR Files, Company Documents, Employee Documents
Recruitment: Job Openings, Candidates
Reports: Employee Reports, Leave Reports, Attendance Reports
6. Zoho Mail
Inbox: All Mail, Unread, Starred
Drafts: Saved Drafts
Sent: Sent Mail
Spam: Spam Folder
Trash: Deleted Mail
Folders: My Folders, Shared Folders
Streams (Collaboration): My Groups, Unread Messages
Calendar: My Calendar, Shared Calendars
Tasks: My Tasks, Assigned Tasks
Notes: My Notes
Contacts: All Contacts, My Contacts
7. Zoho Social
Home: Brand Dashboard, Live Stream
Publish: New Post, Publishing Calendar, Content Queue
Monitor: Columns (Mentions, Keywords, etc.), Advanced Search
Messages: Unified Inbox, Direct Messages
Connections: Audience, CRM Connections
Reports: Standard Reports, Custom Reports, Analytics
Collaborate: Team Members, Approvals
8. Zoho Campaigns (Marketing)
Dashboard: Campaign Overview, Performance
Campaigns: Email Campaigns, A/B Tests, Social Campaigns
Contacts: Lists & Segments, Signup Forms, Sync Services
Automation: Workflows, Drip Campaigns, Autoresponders
Library: Templates, Images
Reports: Campaign Reports, List Reports, Automation Reports
9. Zoho Inventory
Dashboard: Inventory Summary, Sales Activity, Purchase Orders
Items: All Items, Item Groups, Composite Items, New Item
Inventory: Warehouses, Stock Adjustments, Stock Transfers
Sales Orders: All Sales Orders, New Order, Pack Slips, Shipments
Purchase Orders: All Purchase Orders, New Order, Bills
Contacts: Customers, Vendors
Integrations: E-commerce (Shopify, etc.), Shipping Carriers
Reports: Inventory Reports, Sales Reports, Purchase Reports
10. Zoho Recruit
Home: Hiring Dashboard, Today's Interviews, Active Openings
Job Openings: All Openings, New Opening, Published Openings
Candidates: All Candidates, Add Candidate, Candidate Pool
Interviews: Scheduled Interviews, My Interviews, Request Feedback
Clients & Contacts: Client Accounts, Hiring Managers
Reports: Candidate Source Report, Time to Fill Report
Careers Website: Customize Page, Job Board
11. Zoho Expense
Dashboard: Expense Overview, My Unreported Expenses, Pending Approvals
Expenses: All Expenses, New Expense, Mileage
Receipts: My Receipts, Upload Receipt, Auto-Scan
Reports: My Reports, New Report, Awaiting Approval, Approved
Cards: My Corporate Cards, Reconcile, Pending Transactions
Approvals: Reports for Approval, Expenses for Approval
Payments: Reimbursements, Advance Payments
Analytics: Expense Analytics, Policy Violations
12. Zoho Subscriptions
Home: Dashboard, MRR, Churn Rate, Active Subscriptions
Products: All Products, Plans, Add-ons, Coupons
Customers: All Customers, New Customer
Subscriptions: All Subscriptions, New Subscription, Trialing, Active, Canceled
Invoices: All Invoices, Paid, Overdue
Payments: Transactions, Failed Payments
Reports: Subscription Reports, Revenue Reports, Churn Reports
13. Zoho Connect (Internal Social Network)
Feeds: All Feeds, Company Wall, My Feed
Groups: All Groups, My Groups, Create Group
Channels: All Channels, My Channels
Manuals (Wiki): Knowledge Base, Articles
Files: All Files, My Files, Shared Files
Events: Company Calendar, My Events
Forums: Discussion Topics, Q&A
Tasks: My Tasks, Group Tasks
14. Zoho WorkDrive (File Management)
My Folders: All Files & Folders, Recent, Starred, Offline
Team Folders: All Team Folders, My Teams
Shared With Me: Files and Folders shared with you
Public/External Links: Manage shared links
Trash: Deleted Files
WorkDrive Go (Office Suite): Writer (Documents), Sheet (Spreadsheets), Show (Presentations)
15. Zoho Creator (Low-Code App Builder)
Home: My Applications, Shared with Me, Marketplace
Application Builder: Design, Workflows, Settings
Environments: Development, Staging, Production
Data Sources: Connections, Picklists
Reports: All Reports, Create Report
Pages: All Pages, Create Page (Dashboards)
Workflows: All Workflows, Create Workflow (Schedules, Triggers)
16. Zoho Writer (Word Processor)
Documents: My Documents, Recent, Shared with Me, Templates, Trash
Editor Tools:
Format: Text Styles, Paragraph, Lists & Bullets, Table, Columns
Insert: Image, Chart, Special Characters, Table of Contents, Hyperlink
Review: Track Changes, Comments, Spell Check, Grammar Check
Automation (Zia AI):
Writing Assistant: Readability Suggestions, Tone Analysis, Sentence Completion
Ask Zia: Summarize Document, Ask Questions about Content
Collaboration: Share Document, Real-time Cursors, Lock Content
Mail Merge: Create Template, Select Data Source, Generate Documents
Signatures: Add Digital Signature Field, Send for Signing (Zoho Sign)
Publish & Export: Publish to Web, Export as Word (.docx), Export as PDF, Print
17. Zoho Sheet (Spreadsheet)
Sheets: My Spreadsheets, Recent, Shared with Me, Templates, Trash
Data:
Import/Export: Import from Excel/CSV, Export as Excel/CSV/PDF
Data Tools: Data Validation, Text to Columns, Remove Duplicates, Data Cleaning
Analysis:
Pivot Tables: Create Pivot Table, Manage Pivot Tables
Charts: All Chart Types (Bar, Line, Pie), Create Chart
Insights (Zia AI): Ask Zia (Natural Language Query), Get Insights, Automated Charting
Formulas: Insert Function, Formula Auditing, Name Manager
Automation:
Macros: Record Macro, Run Macro
Custom Scripts (Deluge): Script Editor, Scheduled Scripts
Collaboration: Share Sheet, Comments, Version History, Protect Sheet/Range
View: Freeze Panes, Gridlines, Formula Bar
18. Zoho Show (Presentation)
Presentations: My Presentations, Recent, Shared with Me, Templates
Design:
Themes: Apply Theme, Customize Theme
Master Slides: Edit Master, New Master Layout
Layouts: Apply Layout, Reset Slide
Insert: Text Box, Image, Video, Audio, Chart, Table, Shape, Icon
Animations & Transitions:
Animations: Entrance, Emphasis, Exit effects
Transitions: Slide Transitions, Timing
Present:
Slideshow: From Beginning, From Current Slide
Presenter View: See Notes, Timer, Next Slide
Broadcast: Share Live Presentation, Remote Control
Collaboration: Share Presentation, Comments, Review Mode
19. Zoho Cliq (Team Chat)
Chats: Recent Conversations, Direct Messages, Group Chats, Starred
Channels: All Channels, My Channels, Unread, Browse Channels
Contacts: All Contacts, Teams, Departments
History: Search History, Files, Links, Mentions
Calendar: My Meetings, Team Calendar
Calls: Start Audio Call, Start Video Call, Call History
Apps & Bots:
Bots: My Bots, Bot Store
Integrations: Installed Apps, App Store
My Profile: Status, Do Not Disturb, Settings
20. Zoho Meeting (Video Conferencing)
Home: Dashboard, Start a Meeting Now
Meetings:
My Meetings: Upcoming, Past Meetings
Schedule Meeting: New Meeting, Recurring Meeting
Webinars:
My Webinars: Upcoming, Past Webinars
Schedule Webinar: New Webinar, Registration Settings, Polls, Q&A
Recordings: My Recordings (Cloud), Local Recordings
Reports: Meeting Reports, Webinar Reports, Attendee Analytics
Settings: My Profile, Audio/Video Settings, Security, Integrations
21. Zoho Forms
Dashboard: Forms Overview, Recent Submissions, Analytics
Forms: All Forms, New Form, My Forms, Shared Forms, Templates
Builder (for a selected form):
Fields: Add Fields, Field Types (Text, Choice, etc.)
Rules: Field Rules, Form Rules, Page Rules
Themes: Apply Theme, Customize Theme
Submissions: All Entries, Reports, Analytics
Share: Public Link, Embed on Website, Email Campaign
Integrations: Zoho CRM, Mailchimp, Payment Gateways (Stripe, etc.)
Settings: Notifications, Form Confirmation, Security22. Zoho Analytics (Business Intelligence)
Home: My Home, Recent Views, Favorites, Shared with Me
Explorer: All Workspaces, My Workspaces, Shared Workspaces
Data Sources:
Import Data: From Files, From Databases, From Cloud Storage, From Business Apps
Manage Data Sources: Sync Settings, Data Refresh History
Builder (within a Workspace):
Create: New Report, New Dashboard, New Table
Data Modeling: Edit Table Design, Formulas, Query Tables
Ask Zia (AI): Ask a Question, Zia Insights, What-if Analysis
Reports: All Reports, My Reports, Shared Reports, Report Folders
Dashboards: All Dashboards, My Dashboards, Shared Dashboards, Slideshows
Alerts & Schedules: Manage Alerts, Schedule Emails
Publish & Embed: Share Views, Embed in Website/App, API Management
Settings: Workspace Settings, User Management, Data Backup
23. Zoho Inventory
Dashboard: Inventory Summary, Sales Activity, Product Details, Low Stock Items
Items:
Item Management: All Items, Item Groups, Composite Items
Inventory: Price Lists, Inventory Adjustments
Sales:
Customers: All Customers, New Customer
Sales Orders: All Sales Orders, New Order
Packages & Shipments: Create Package, Create Shipment, Delivery Tracking
Purchases:
Vendors: All Vendors, New Vendor
Purchase Orders: All Purchase Orders, New Order
Bills: All Bills, New Bill
Warehouses: Warehouse List, Stock Transfers, Bin Locations
Integrations:
Marketplaces: Amazon, eBay, Shopify
Shipping: Shipping Carrier Integrations
Accounting: Zoho Books Integration
Reports: Inventory Reports, Sales Reports, Purchase Reports, Activity Log
24. Zoho Subscriptions
Home: Dashboard, MRR, Churn Rate, LTV, Key Metrics
Products:
All Products: Product Catalog
Plans & Addons: Create Plan, Create Addon, Coupons
Customers: All Customers, New Customer, Customer Portal
Subscriptions: All Subscriptions, New Subscription, Active, Trialing, Canceled
Billing:
Invoices: All Invoices, Paid, Overdue
Payments: Transactions, Failed Payments (Dunning), Refunds
Revenue Recognition: Revenue Schedules, Deferred Revenue Reports
Analytics: Subscription Metrics, Revenue Analytics, Churn Analytics, Cohort Analysis
Settings: Hosted Payment Pages, Email Notifications, Taxes, Payment Gateways
25. Zoho Sign (Digital Signatures)
Dashboard: Documents Overview, Waiting for My Signature, In Progress, Completed
Send for Signatures: Upload Document, Add Recipients, Add Fields, Send
Sign Documents: Documents to Sign
Documents:
My Documents: All, In Progress, Completed, Declined, Recalled
Shared With Me: Documents shared with you
Templates: All Templates, Create Template, My Templates
Reports: Document Status Report, Audit Trail
Settings: My Profile, Manage Templates, Legal Disclosure, Integrations
26. Zoho Backstage (Event Management)
Dashboard: Event Overview, Registrations, Ticket Sales, Live Analytics
Events: All Events, Create Event, Past Events
Website:
Site Builder: Home Page, Agenda, Speakers, Sponsors
Design: Themes, Custom CSS
Attendees:
Manage: All Attendees, Check-in, Send Email
Registration: Ticket Types, Registration Form, Discount Codes
Speakers & Sessions:
Speakers: All Speakers, Invite Speaker
Agenda: Manage Agenda, Create Session
Sponsors: All Sponsors, Add Sponsor, Sponsorship Tiers
Onstage (Virtual Event Hub): Main Stage, Sessions, Networking, Expo
Reports: Attendee Reports, Sales Reports, Engagement Reports
27. Zoho Commerce
Dashboard: Store Overview, Sales, Top Products, Abandoned Carts
Products: All Products, New Product, Categories, Brands, Inventory
Orders: All Orders, Unfulfilled, Fulfilled, Shipped
Customers: All Customers, Customer Groups
Marketing:
Promotions: Coupons, Discounts, Gift Cards
Campaigns: Email Marketing, SEO, Social Media
Website:
Store Customizer: Themes, Page Builder, Menus
Content: Blog, Pages
Payments: Payment Gateways, Transaction History
Shipping: Shipping Methods, Carriers, Shipping Labels
Reports: Sales Reports, Product Reports, Customer Reports
Settings: Store Details, Taxes, Checkout Settings, Domains28. Zoho Forms
Dashboard: Forms Overview, Recent Submissions, Conversion Rates, Partial Submissions
Forms: All Forms, My Forms, Shared With Me, Create Form, Templates
Builder (for a selected form):
Add Fields: Drag-and-Drop Fields (Text, Number, Choice, File Upload, etc.)
Rules: Field Rules, Form Rules (e.g., redirect on submit), Page Rules
Themes: Apply Theme, Customize Branding (Logo, Colors, Fonts)
Settings: Notifications, Form Confirmation Message, Security (CAPTCHA)
Analytics & Reports:
Entries: All Entries, Partial Entries, View/Edit Entry
Reports: Summary Report, Create Custom Report, Export Data (CSV, PDF)
Share: Public Link, Embed on Website, Email Campaign, QR Code
Integrations: Zoho CRM, Zoho Campaigns, Payment Gateways, Webhooks
29. Zoho Creator (Low-Code Platform)
Home: My Applications, Shared Apps, Marketplace, Create Application
Builder (within an application):
Design:
Forms: Create Form, Form Layouts, Form Fields
Reports: Create Report (List, Kanban, Calendar, etc.), Custom Filters
Pages: Create Page, Page Builder, Add Elements (Panels, Buttons, Charts)
Workflows: Create Workflow, On Add, On Edit, Scheduled Scripts, Approvals
Settings: Application Settings, User Permissions, Custom Domain
Environments: Development, Staging, Production
Data Sources: Connections (to external services), Picklists
Mobile: Preview on Mobile, Configure Mobile Layouts, Push Notifications
AI Models (Zia): Prediction Models, OCR, Object Detection
BI & Analytics: Create Dashboard, Add Reports to Dashboard
Settings (Global): My Account, Developer Tools, API Keys
30. Zoho Cliq (Team Communication)
Home: My Activity, Recent Mentions, Pinned Chats
Chats: All Conversations, Direct Messages (1-to-1), Group Chats
Channels: All Channels, My Channels, Unread, Browse Public Channels
Contacts: All Contacts, My Teams, Departments
Calls: Start Audio/Video Call, Call History, Screen Sharing
Files: Files Shared with Me, Files I Shared, Search Files
Apps, Bots & Tools:
Bots: My Bots, Bot Store, Create Bot
Integrations: Installed Apps, Marketplace
Commands: Create Custom Slash Command
My Profile: Set Status, Do Not Disturb, Preferences, Settings
31. Zoho WorkDrive (Cloud File Management)
My Folders: All Files & Folders, Recent, Starred, My Edits
Team Folders: All Team Folders, My Teams
Shared With Me: Files and Folders shared with you
Public Links: Manage external share links
Trash: Deleted Files & Folders
WorkDrive Go (Online Office Suite):
New: Writer Document, Sheet Spreadsheet, Show Presentation
Admin Console (for Admins):
Dashboard: Storage Overview, User Activity
Members: Manage Users, User Groups
Security: Access Policies, Audit Logs, Data Loss Prevention (DLP)
Reports: Storage Reports, Activity Reports
32. Zoho Meeting (Video Conferencing)
Home: Dashboard, Start a Meeting, Join a Meeting
Meetings:
My Meetings: Upcoming, Past Meetings
Schedule Meeting: New Meeting, Recurring Meeting, Meeting Templates
Webinars:
My Webinars: Upcoming, Past Webinars
Schedule Webinar: New Webinar, Registration Form, Polls, Q&A, Handouts
Recordings: My Recordings, Cloud Recordings, Local Recordings
Reports: Meeting Reports, Webinar Reports (Attendance, Engagement)
Settings: My Profile, Audio/Video Settings, Security, Integrations, Branding
33. Zoho Sprints (Agile Project Management)
Home: My Dashboard, Project Overview, My Work Items
Backlog:
Product Backlog: All Items, Create User Story, Create Epic
Story Mapping: Visualize User Journey
Sprints:
Active Sprint: Scrum Board, Task Board
Sprint Planning: Add Items to Sprint, Set Sprint Goal
All Sprints: Upcoming, Completed Sprints
Releases: Manage Releases, Associate Sprints
Epics: All Epics, Epic Progress
Reports: Velocity Chart, Burndown Chart, Burnup Chart, Cumulative Flow
Timesheet: Log Time, My Timesheets, Timesheet Reports
Users: All Users, Team Roles34. Zoho Recruit (Applicant Tracking System)
34. Zoho Recruit (Applicant Tracking System)
Home: Hiring Dashboard, My Activities, Openings Pipeline, Recent Candidates
Job Openings: All Openings, Create Opening, My Openings, Published, Internal, On Hold
Candidates: All Candidates, Add Candidate, My Candidates, Candidate Pool, Search Resumes
Interviews: My Interviews, Schedule Interview, All Interviews, Awaiting Feedback
Clients & Contacts: Client Accounts, Hiring Managers
Vendors: Staffing Agencies, Vendor Portals
Reports: Candidate Source Report, Time to Fill Report, Interview Reports, Job Opening Analytics
Careers Website: Customize Page, Manage Job Board, Embed Options
Automation (AI): Resume Parser, Zia Candidate Matching, Workflow Rules
Settings: Hiring Pipeline Stages, Email Templates, User Management, Job Boards Integration
35. Zoho Expense
Dashboard: My Expenses Overview, Reports Awaiting Approval, Unsubmitted Expenses
Receipts: My Receipts, Upload Receipt, Auto-Scan, Bulk Import, Unmatched Receipts
Expenses: All Expenses, New Expense, New Mileage, Recurring Expenses
Reports: My Reports, Create Report, Awaiting Approval, Approved, Reimbursed
Cards: My Corporate Cards, Reconcile, Pending Transactions
Approvals: Reports for My Approval, Trips for My Approval
Payments: Reimbursements to be Paid, Reimbursement History
Analytics: Expense Analytics, Policy Violations, Spending by Category
Settings: Policies, Categories, Per Diems, Approval Workflows, Corporate Cards
36. Zoho Books (Accounting)
Dashboard: Financial Overview, Cash Flow, Income & Expenses, Top Expenses
Sales:
Customers: All Customers, New Customer
Estimates/Quotes: All Quotes, New Quote
Sales Orders: All Sales Orders, New Order
Invoices: All Invoices, New Invoice, Recurring Invoices
Payments Received: All Payments, Record Payment
Purchases:
Vendors: All Vendors, New Vendor
Expenses: All Expenses, New Expense
Bills: All Bills, New Bill, Recurring Bills
Payments Made: All Payments, Record Payment
Items: All Items, New Item, Price Lists, Inventory Adjustments
Banking: Bank Accounts, Bank Feeds, Reconciliation, Categorize Transactions
Time Tracking: Projects, Timesheets, Billable Hours
Accountant: Chart of Accounts, Manual Journals, Tax Payments
Reports: Profit & Loss, Balance Sheet, Cash Flow, Sales Tax Report, All Reports
Documents: My Documents, Upload Document, Auto-scan Receipts
37. Zoho Subscriptions
Home: Dashboard, MRR, Churn Rate, LTV, Key Metrics
Products:
All Products: Product Catalog
Plans & Addons: Create Plan, Create Addon, Coupons
Customers: All Customers, New Customer, Customer Portal
Subscriptions: All Subscriptions, New Subscription, Active, Trialing, Canceled
Billing:
Invoices: All Invoices, Paid, Overdue
Payments: Transactions, Failed Payments (Dunning), Refunds
Revenue Recognition: Revenue Schedules, Deferred Revenue Reports
Analytics: Subscription Metrics, Revenue Analytics, Churn Analytics, Cohort Analysis
Settings: Hosted Payment Pages, Email Notifications, Taxes, Payment Gateways
38. Zoho Inventory
Dashboard: Inventory Summary, Sales Activity, Product Details, Low Stock Items
Items: All Items, Item Groups, Composite Items, New Item, Price Lists
Inventory: Warehouses, Stock Adjustments, Stock Transfers
Sales: Customers, Sales Orders, Packages, Shipments
Purchases: Vendors, Purchase Orders, Bills
Integrations: Marketplaces (Shopify, etc.), Shipping Carriers, Accounting
Reports: Inventory Reports, Sales Reports, Purchase Reports, Activity Log
39. Zoho Commerce
Dashboard: Store Overview, Sales, Top Products, Abandoned Carts
Products: All Products, New Product, Categories, Brands, Inventory
Orders: All Orders, Unfulfilled, Fulfilled, Shipped
Customers: All Customers, Customer Groups
Marketing: Promotions (Coupons), Email Marketing, SEO
Website: Store Customizer (Themes), Page Builder, Blog, Menus
Payments: Payment Gateways, Transaction History
Shipping: Shipping Methods, Carriers, Shipping Labels
Reports: Sales Reports, Product Reports, Customer Reports
Settings: Store Details, Taxes, Checkout Settings, Domains
40. Zoho Sign (Digital Signatures)
Dashboard: Document Status Overview, Waiting for My Signature, In Progress, Nearing Expiry
Send for Signature:
Upload Document: From Computer, From Cloud (WorkDrive, etc.)
Add Recipients: Set Signing Order, Assign Roles (Signer, Approver)
Add Fields: Drag & Drop (Signature, Initials, Text, Date, Checkbox)
Review & Send: Customize Email Message, Set Reminders & Deadline
Sign Documents: Awaiting My Signature
Documents:
My Documents: All, In Progress, Completed, Declined, Recalled
Shared With Me: Documents shared for my review/signature
Templates:
All Templates: My Templates, Shared Templates
Create Template: Upload and prepare a reusable document
Reports & Audit:
Reports: Document Status Report, Completion Rate
Audit Trail: Search and view detailed history for any document
Settings:
My Profile: Manage My Signatures & Initials
Account Settings: Legal Disclosure, Branding, Date/Time Format
Integrations: Zoho CRM, WorkDrive, etc.
41. Zoho Survey
Home: Dashboard, Recent Surveys, Response Rate Overview
Surveys: All Surveys, My Surveys, Shared With Me, Create Survey
Builder (for a selected survey):
Design: Add Questions (Multiple Choice, Rating, Text, etc.), Logic & Branching (Skip Logic)
Themes: Apply Theme, Customize Branding
Options: Survey Language, Closing Date, Anonymity
Distribution:
Web Link: Get Public URL
Email Campaign: Send to a List
Embed: Embed on Website
Social Media: Share on Social Channels
Reports & Analytics:
All Responses: View Individual Responses, Filter Responses
Summary Report: Charts for each question
Cross-Tab Report: Compare answers between questions
Sentiment Analysis (AI): Analyze open-ended text feedback
Settings: User Management, Integrations, API Access
42. Zoho Flow (Integration Platform)
Dashboard: My Flows, Task Usage, Execution History, Popular Apps
My Flows: All Flows, Active Flows, Inactive Flows, Create Flow
Flow Builder:
Trigger: Choose App and Trigger Event (e.g., "New Email in Gmail")
Actions: Add Logic (Decisions, Loops), Add App Actions (e.g., "Create record in Zoho CRM")
Test & Debug: Test the workflow with sample data
Connections: My Connections, Add New Connection (to apps like Gmail, Slack, etc.)
History: All Executions, Successful Runs, Failed Runs, View Logs
Gallery: Pre-built Flow Templates, My Templates
Settings: My Profile, Organization Settings, Task Usage
43. Zoho Creator (Low-Code Application Builder)
Home: My Applications, Shared Apps, Marketplace, Create Application
Builder (within an application):
Design:
Forms: Create Form, Form Layouts, Form Fields
Reports: Create Report (List, Kanban, Calendar, etc.), Custom Filters
Pages: Create Page, Page Builder, Add Elements (Panels, Buttons, Charts)
Workflows: Create Workflow, On Add, On Edit, Scheduled Scripts, Approvals
Settings: Application Settings, User Permissions, Custom Domain
Environments: Development, Staging, Production
Data Sources: Connections (to external services), Picklists
Mobile: Preview on Mobile, Configure Mobile Layouts, Push Notifications
AI Models (Zia): Prediction Models, OCR, Object Detection
BI & Analytics: Create Dashboard, Add Reports to Dashboard
Settings (Global): My Account, Developer Tools, API Keys
44. Zoho Backstage (Event Management)
Dashboard: Event Overview, Registrations, Ticket Sales, Live Analytics
Events: All Events, Create Event, Past Events
Website:
Site Builder: Home Page, Agenda, Speakers, Sponsors
Design: Themes, Custom CSS
Attendees:
Manage: All Attendees, Check-in, Send Email
Registration: Ticket Types, Registration Form, Discount Codes
Speakers & Sessions:
Speakers: All Speakers, Invite Speaker
Agenda: Manage Agenda, Create Session
Sponsors: All Sponsors, Add Sponsor, Sponsorship Tiers
Onstage (Virtual Event Hub): Main Stage, Sessions, Networking, Expo
Reports: Attendee Reports, Sales Reports, Engagement Reports
45. Zoho Sites (Website Builder)
Dashboard: Site Overview, Traffic Stats, Form Submissions, Recent Blog Comments
Builder (Visual Editor):
Pages: Manage Pages (Add, Reorder, Delete), Page Settings (SEO, etc.)
Elements: Add Elements (Text, Image, Forms, Buttons, etc.)
Sections: Add Pre-built Sections (Header, Footer, Testimonials, Gallery)
Design: Global Styles (Fonts, Colors), Themes
Blog: All Posts, New Post, Categories, Comments
Forms: Form Submissions, Form Analytics
Settings:
General: Site Name, Favicon
Domains: Manage Custom Domain, SSL Certificate
SEO: Global SEO Settings, Sitemaps, Redirects
Integrations: Zoho CRM, SalesIQ (Chat), etc.
Portal (for Members): Manage Members, Access Control, Member Pages
46. Zoho Vault (Password Manager for Teams)
Dashboard: My Secrets, Shared with Me, Security Score, Recent Activity
Secrets:
All Secrets: Search Vault
My Secrets: Personal Passwords & Notes
Team Secrets: Shared Team Passwords & Notes
Chambers: Secure, shared folders for specific teams or projects
Security:
Password Generator: Create Strong Passwords
Security Dashboard: Weak Passwords, Reused Passwords, Breached Passwords
Emergency Access: Set up trusted contacts
Audit & Reports:
Audit Trail: View all actions (who accessed what, when)
Reports: User Access Reports, Secret Usage Reports
Admin:
User Management: Add Users, User Groups
Policies: Enforce Password Complexity, MFA
Tools: Browser Extensions, Mobile Apps, Import/Export
47. Zoho Mail Admin Console
Dashboard: Mail Server Status, User Count, Storage Usage
Domains: Domain Setup, DKIM, SPF, DMARC records
Users: All Users, Add User, User Groups, Import/Export Users
Mail Settings:
Policies: Spam Control, Email Policies (sending limits, etc.)
Routing: Email Forwarding, Split Delivery
Security: Two-Factor Authentication (TFA), Data Encryption
Migration: Migrate from Google Workspace, Office 365, etc.
Archive & eDiscovery: Email Retention Policies, Search Archived Mail
Reports: Mail Traffic Reports, Spam Reports, User Activity Reports
48. Zoho Calendar
View: Day, Week, Month, Agenda
My Calendars: Personal Calendar, Work Calendar, Create New Calendar
Shared Calendars: Team Calendars, Colleague Calendars
Appointments:
Booking Page: Set up your public booking link
Appointment Types: Define services and durations
Meetings:
New Event: Create Event, Invite Attendees
Smart Scheduling (AI): Find a time that works for everyone
Integrations: Zoho Meeting, Zoho CRM, Google Calendar Sync
Settings: My Profile, Notification Settings, Sharing Permissions
49. Zoho Notebook
All Notes: View All Notes, Recent Notes
Notebooks: My Notebooks, Create Notebook, Shared Notebooks
Note Types (Cards):
Text Card: Create a written note
Checklist Card: Create a to-do list
Audio Card: Record a voice note
Photo Card: Add images
Sketch Card: Draw a sketch
Favorites: Starred Notes
Reminders: Notes with reminders set
Search: Search all content (including text in images)
Collaboration: Share Note, Share Notebook
Trash: Deleted Notes
50. Zoho People (Human Resources)
Home/Dashboard: My Space, Company Dashboard, Announcements, Quick Actions (Check-in, Apply Leave)
Employee Self-Service:
My Profile: View & Edit Personal Info, Documents, Skills
Leave Tracker: My Leave Balance, Apply Leave, Holiday Calendar
Timesheets: My Timesheets, Log Time, Approvals
Attendance: My Attendance Log, Regularize Entries
Leave Management:
Leave Calendar: Team & Company Leave View
Approvals: Leave Requests for My Approval
Reports: Leave Balance Reports, Leave History
Time & Attendance:
Attendance: Live Feed, Today's Attendance, Shift Roster
Timesheets: All Timesheets, Approvals, Project Time Tracking
Performance:
Appraisals: My Reviews, Team Reviews, Performance Cycles
Goals / KRAs: My Goals, Team Goals, Goal Alignment
Skill Sets: Company Skill Matrix, My Skills
Files:
HR Files: Company Policies, Employee Handbooks
My Files: My Documents (Payslips, etc.)
Cases (HR Helpdesk): My Cases, Submit a Case, All Cases, Case Categories
Reports & Analytics:
All Reports: Employee Reports, Headcount Reports, Attrition Reports
Custom Reports: Report Builder
Admin Console:
Organization: Company Profile, Departments, Locations
Settings: Leave Settings, Attendance Settings, Performance Settings
Onboarding/Offboarding: Create Onboarding Flow, Manage Offboarding
51. Zoho Social
Home: Brand Health Dashboard, Live Stream of Mentions, Performance Stats
Publish:
New Post: Compose for Multiple Networks
Publishing Calendar: Visual Content Calendar, Drag & Drop Scheduling
Content Queue: Manage Queued Posts, SmartQ (AI-based timing)
Drafts & Approvals: My Drafts, Awaiting My Approval
Monitor:
Columns: Create Custom Feeds (Mentions, Keywords, Competitors)
Social Listening: Advanced Keyword/Hashtag Search
Messages: Unified Inbox for DMs and Private Messages
Connections: Audience Demographics, CRM Contacts, Follower Growth
Reports:
Standard Reports: Performance by Network, Post Analytics
Custom Reports: Build Your Own Report
Collaborate: Team Members, Roles & Permissions, Discussion Threads
Settings: Manage Brands, Connect Social Channels, URL Shorteners
52. Zoho Campaigns (Email & Marketing Automation)
Dashboard: Campaign Overview, List Growth, Automation Performance
Campaigns:
Email Campaigns: All Campaigns, Create Campaign (Regular, A/B Test)
SMS Campaigns: All SMS Campaigns, Create SMS Campaign
Contacts:
Manage Lists: All Lists, Create List, Import Contacts
Segments: Create Dynamic Segments, View Segments
Signup Forms: Create Form, Embed Form
Automation:
Workflows: Create Workflow, Pre-built Templates (Welcome Series, etc.)
Autoresponders: Create Autoresponder
Library:
Templates: My Templates, Template Gallery, Create Template
Images: My Images, Stock Images
Reports & Analytics:
Campaign Reports: Open Rates, Click Rates, Bounces
Automation Reports: Workflow Performance
E-commerce: Connect Store (Shopify, etc.), Sales Tracking, Abandoned Cart Automation
Settings: Domain Authentication (SPF/DKIM), User Management, Integrations
53. Zoho BugTracker
Dashboard: Project Overview, My Bugs, Bug Statistics, Recent Activity
Projects: All Projects, My Projects, Create Project
Bugs: All Bugs, My Bugs, Report Bug, Kanban View, List View
Milestones: All Milestones, Create Milestone, Track Progress
Timesheets: Log Time on Bugs, Timesheet Reports
Forums: Project Discussions, Q&A
Reports: Bug Reports by Status/Severity, Milestone Reports, Velocity Charts
Settings:
Project Settings: Users & Roles, Custom Fields, Workflows
Global Settings: My Account, Integrations (GitHub, Bitbucket, etc.)
54. Zoho Assist (Remote Support)
Home: Dashboard, Start Remote Session, Access Unattended Device
Remote Support:
Start Session: Initiate On-Demand Session
Scheduled Sessions: My Sessions, Schedule a Session
Session History: View Past Session Logs & Recordings
Unattended Access:
All Devices: List of managed computers
Deployment: Add New Device, Bulk Deployment
Device Groups: Manage groups of computers
Screen Sharing: Start Screen Share (View only)
Reports: Session Reports, Technician Reports, Unattended Access Log
Settings:
General: My Profile, Branding (Custom Logo/URL)
Technician Management: Add/Manage Technicians
Integrations: Zoho Desk, ServiceNow, Zendesk
Security: Two-Factor Authentication, Session Policies
55. Zoho Lens (AR Remote Assistance)
Home: Dashboard, Start an AR Session
Sessions:
My Sessions: Upcoming, Past Sessions
Session History: View Session Recordings & Snapshots
AR Tools (in-session):
Live Camera Stream: View remote camera feed
3D Annotations: Place 3D arrows and markers
Freeze Frame: Pause the video to draw on a still image
OCR (Text Recognition): Scan and copy text from the video stream
In-session Chat & VoIP: Communicate with the remote user
Reports: Session Duration Reports, Technician Performance
Settings: My Profile, User Management, Branding
56. Zoho Bookings (Appointment Scheduling)
Home: Dashboard, Today's Appointments, Recent Bookings
Calendar:
My Calendar: View all appointments
Team Calendar: See schedules for all staff
Booking Page:
Customize: Edit your public booking page URL, logo, and instructions
View Live Page: See what your customers see
Services: All Services, Create Service (1-on-1, Group Class)
Staff: All Staff, Add Staff Member, Set Working Hours & Breaks
Customers: My Customer List, View Booking History
Reports: Booking Reports, Revenue Reports, Staff Utilization
Settings:
Workspace Settings: Timezone, Date Format
Calendar Sync: Google Calendar, Office 365, Zoho Calendar
Online Meetings: Zoho Meeting, Zoom, GoToMeeting
Payments: Stripe, PayPal, etc.
57. Zoho Learn (Learning Management System)
For Learners (My View):
Dashboard: My Courses, My Learning Paths, Recently Viewed
Course Catalog: Browse and enroll in courses
My Learning: View my progress, certificates
For Admins/Authors (Admin View):
Dashboard: Learning Analytics, Course Completion Rates, User Activity
Courses: All Courses, Create Course, Import Course
Course Builder: Add Lessons (Text, Video, Quiz), Create Assessments
Users: Manage Learners, User Groups, Assign Courses
Learning Paths: Create structured learning journeys
Reports: Course Reports, Learner Reports, Assessment Results
Settings: Branding, Gamification (Points/Badges), Certificates
58. Zoho Contracts
Dashboard: Contracts Overview, Expiring Soon, Awaiting My Action
Contracts: All Contracts, My Contracts, Shared with Me, Create Contract
Contract Types: Manage templates for different contract types (NDA, MSA, etc.)
Clause Library: Pre-approved legal clauses
Workflow (for a selected contract):
Drafting: Edit Contract, Collaborate with Comments
Approval: Send for Internal Approval, View Approval Status
Negotiation: Share with Counterparty, Track Changes
Signatures: Send for e-Signature (Zoho Sign)
Post-Signature: Track Obligations, Set Renewal Reminders
Reports: Contract Status Reports, Renewal Pipeline, Clause Usage
Admin Settings: User Roles, Approval Workflows, Custom Fields
59. Zoho TeamInbox (Shared Inbox Management)
Inboxes: All Inboxes, Create Inbox
My View (within an Inbox):
Unassigned: New messages for the team to claim
Assigned to Me: Conversations I am responsible for
Open: All active conversations
Snoozed: Conversations to revisit later
Closed: Resolved conversations
Team View: View conversations assigned to other team members
Collaboration:
Internal Comments: Discuss an email privately with the team (@mention colleagues)
Shared Drafts: Write a reply together before sending
Automation:
Rules: Automatically assign, tag, or close emails based on criteria
Templates: Canned responses for common questions
Analytics: Team Performance, Response Times, Conversation Volume
Settings: Manage Inboxes, Team Members, Tags, Rules
60. Zoho Workerly (Temporary Staffing Management)
Dashboard: Today's Jobs, Available Temps, Timesheet Approvals, Sales Overview
Jobs: All Jobs, Create Job, Active Jobs, Past Jobs
Temps: All Temps, Add Temp, Available Temps, Skill Search
Clients: All Clients, Client Contacts, Job Requests
Scheduling:
Scheduler: Visual drag-and-drop calendar
Unfilled Shifts: View and assign open shifts
Timesheets:
Pending Approval: Review and approve temp timesheets
Approved Timesheets: View processed hours
Invoices & Pay:
Generate Invoices: Create invoices for clients from timesheets
Generate Payslips: Prepare payments for temps
Reports: Job Reports, Sales Reports, Temp Performance Reports
Settings: My Agency Details, Job Templates, Invoice Settings
61. Zoho Shifts (Employee Scheduling)
Dashboard: Today's Schedule, Open Shifts, My Shifts, Pending Requests
Scheduler:
View Schedule: By Day, Week, Month; By Position or Employee
Build Schedule: Create Shifts, Use Schedule Templates
Requests:
Shift Swaps: View and approve swap requests
Time Off: View and approve leave requests
Open Shifts: Manage employee claims for open shifts
Timesheets:
My Timesheets: View my clocked hours
Team Timesheets: Review and approve team hours, Edit Entries
Reports: Labor Cost Reports, Schedule vs. Actual Hours, Attendance Reports
Employees: All Employees, Add Employee, Set Availability & Positions
Settings: Locations, Positions, General Schedule Settings, Time Clock Options (Geofencing)
62. Zoho FSM (Field Service Management)
Home: Dashboard, Today's Jobs, Technician Status Map, Unscheduled Work Orders
Work Orders: All Work Orders, Create Work Order, Dispatch, Completed
Scheduling & Dispatch:
Dispatch Board: Visual schedule of all technicians and jobs
Map View: See technician locations and job sites
Suggest Technicians (AI): Find the best tech for the job
Customers: All Customers, Service Locations, Asset History
Inventory: Parts & Services, Warehouse Stock, Purchase Orders
Billing:
Generate Invoice: Create invoice from a completed work order
Payments: Record payments
Technician Portal (Mobile View): My Jobs, My Route, Parts Needed, Service Reports, Capture Signature
Reports: Work Order Reports, Technician Performance, Inventory Reports
Settings: Service Templates, Work Order Customization, User Management
63. Zoho PageSense (Conversion Rate Optimization)
Dashboard: All Experiments, Project Overview, Recent Results
Experiments:
A/B Testing: Create A/B Test, View Reports
Split URL Testing: Create Split Test
Funnel Analysis: Create Funnel, View Drop-off Reports
Analysis:
Heatmaps: View Click, Scroll, and Attention maps
Session Recording: Watch recordings of user sessions
Personalization: Create Personalized Experiences for different audience segments
Website Tools:
Polls: Create on-page polls
Push Notifications: Set up and send web push notifications
Goals: All Goals, Create Goal (e.g., button click, page visit)
Audiences: All Audiences, Create Audience Segment
Settings: Project Settings, Install Snippet, Integrations
64. Zoho Tables (Online Database & Work Management)
Workspaces: My Workspaces, Shared With Me, Create Workspace
Bases (within a Workspace): All Bases, Create Base (from scratch, template, or import)
Views (within a Base):
Grid View: Classic spreadsheet-style view
Form View: Create forms to collect data
Kanban View: Organize records as cards in a pipeline
Calendar View: Plot records on a calendar
Gallery View: Display records as visual cards
Data:
Fields: Manage Columns (Text, Number, Attachments, Linked Records)
Relationships: Link tables together
Automations: Create Automation (e.g., "When a new row is added, send a notification")
Interfaces: Create custom, interactive dashboards for your data
Reports & Dashboards: Create charts and graphs from your data
Settings: Base Settings, User Permissions, API Keys
65. Zoho Payroll
Home: Payroll Dashboard, Payday Countdown, To-Do List, Employee Summary
Pay Runs: Run Payroll, Past Pay Runs, Draft Pay Runs
Employees:
All Employees: Employee List
Onboarding: Add New Employee
Offboarding: Terminate Employee
Time & Attendance: Approve Timesheets, Manage Leave
Taxes & Filings:
Tax Filings: View and manage tax payments and forms
Tax Withholding: Manage employee tax details
Benefits & Deductions: Manage Benefits (Health, etc.), Manage Deductions
Reports: Payroll Summary, Employee Reports, Tax Reports
Settings: Organization Profile, Pay Schedule, Bank Accounts, Statutory Components
66. Zoho Checkout (Payment Pages)
Dashboard: Payments Overview, Recent Transactions, Revenue
Payment Pages: All Pages, Create New Page (One-time or Recurring)
Transactions: All Transactions, Successful, Failed, Refunds
Customers: My Customer List, View Purchase History
Products: My Product List, Create New Product
Coupons: All Coupons, Create New Coupon
Reports: Sales Reports, Transaction Reports
Settings: Branding, Payment Gateways, Taxes, Email Notifications
67. Zoho Thrive (Loyalty & Affiliate Management)
Dashboard: Loyalty Program Overview, New Members, Points Redeemed
Loyalty Program:
Setup: Tiers & Rewards, Earning Rules, Redemption Rules
Members: All Members, Search Members
Affiliate Program:
Setup: Commission Rules, Marketing Assets (Links, Banners)
Affiliates: All Affiliates, Pending Approval, Payouts
Referral Program:
Setup: Referral Rewards (for referrer and friend)
Reports: Loyalty Reports, Affiliate Performance, Referral Traffic
Settings: Program Branding, Integrations (Commerce, Subscriptions)
68. Zoho LandingPage
Dashboard: All Landing Pages, Performance Overview (Views, Conversions)
Landing Pages: All Pages, Create New Page
Builder (for a selected page):
Sections: Add Pre-built Sections
Elements: Add Text, Images, Forms, Timers
Design: Global Styles, Fonts, Colors
Settings: SEO Settings, Form Settings
Leads: View all leads collected from forms
A/B Testing: Create A/B Test, View Results
Integrations: Zoho CRM, Google Analytics, etc.
Domains: Connect Custom Domain
69. Zoho Domains
Dashboard: My Domains, Domain Health Overview
Domains: All Domains, Register New Domain, Transfer Domain
DNS Management (for a selected domain): Manage Records (A, CNAME, MX, TXT)
Email Forwarding: Set up email forwards
WHOIS & Privacy: Manage Contact Info, Enable Privacy Protection
SSL Certificates: Manage SSL
Billing: My Invoices, Renewal Settings
70. Zoho CommunitySpaces (Online Community Platform)
Dashboard: Community Overview, New Members, Top Contributors, Unanswered Questions
Channels: Different topic-based discussion areas
Discussions: All Posts, My Posts, Following, Create Post
Knowledge Base: Articles, Categories, Create Article
Events: Upcoming Events, Create Event
Members: Member Directory, Search Members
Moderation:
Queue: Posts & Comments Awaiting Approval
Reported Content: View and act on reported items
Gamification: Leaderboards, Badges, Points System
Analytics: Engagement Reports, Member Growth, Content Performance
Settings: Community Branding, User Roles, Moderation Rules, Integrations
71. Zoho Publish (Local SEO & Listings Management)
Dashboard: Listings Overview, Review Score, Search Rankings
Listings:
Manage Listings: Update Business Info (Hours, Address, etc.)
Sync Status: View status across connected directories (Google, Bing, Yelp)
Reviews:
All Reviews: Unified inbox for all reviews
Respond to Reviews: Use templates to reply
Local SEO:
Rankings: Track local keyword performance
Citations: Monitor and build business citations
Posts: Create and schedule posts for Google Business Profile
Reports: Listing Accuracy Report, Review Performance, Ranking Reports
Settings: Connect Listings, Business Profile, User Management
72. Zoho Apptics (Application Analytics)
Dashboard: App Overview, Real-time Users, Crash Rate, Key Metrics
Audience: User Demographics, Devices, User Journeys
Behavior:
Events: Track custom in-app events
Funnels: Analyze user conversion through key steps
Screen Flow: Visualize how users navigate your app
Quality:
Crashes: Crash Reports, Symbolication
Performance: App Start Time, API Latency, Screen Load Time
Engagement:
Push Notifications: Send targeted push campaigns
In-App Feedback: Collect user feedback and ratings
A/B Testing: Create and manage A/B tests for your app
Settings: App Settings, Install SDK, Data Management, Alerts
73. Zoho eProtect (Email Security & Archiving)
Dashboard: Security Overview, Threats Detected, Mail Flow Status
Threat Protection:
Quarantine: View and manage quarantined emails (Spam, Malware)
Policies: Anti-Spam, Anti-Phishing, Anti-Malware policies
Data Loss Prevention (DLP): Create rules to prevent sensitive data leaks
Encryption: Manage email encryption policies
Archive:
Search Archive: Perform eDiscovery searches
Retention Policies: Define how long to keep emails
Legal Hold: Place holds on mailboxes for legal cases
Reports: Threat Reports, Mail Flow Reports, Archive Reports
Settings: Domain Configuration, User Management, Policy Settings
74. Zoho Directory (Identity & Access Management)
Dashboard: Organization Overview, User Logins, App Usage
Directory:
Users: All Users, Add User, User Groups
Devices: Managed Devices
Applications:
My Apps: User's personal app dashboard
App Catalog: Add and configure apps for the organization
Security:
Single Sign-On (SSO): Configure SSO for apps
Multi-Factor Authentication (MFA): Manage MFA policies
Policies: Password Policies, Access Policies
Reports: Audit Logs, App Usage Reports, Security Reports
Settings: Directory Settings, Custom Branding, User Provisioning
75. Zoho RPA (Robotic Process Automation)
Dashboard: Bot Overview, Recent Runs, Success/Failure Rate
Studio (Bot Builder):
Recorder: Record actions to create a bot
Workflow Designer: Drag-and-drop workflow builder
Actions Library: Pre-built actions (Open App, Click Button, etc.)
Bots: My Bots, Create Bot, Bot Schedules
Executions: Execution History, Logs, Real-time Monitoring
Connections: Manage credentials and connections to applications
Settings: Agent (Bot Runner) Management, User Roles
76. Zoho QEngine (Test Automation)
Dashboard: Project Quality Overview, Recent Test Runs, Defect Summary
Test Cases:
Test Repository: All Test Cases, Create Test Case
Test Suites: Group test cases into suites
Execution:
Test Runs: Plan and execute test runs
CI/CD Integration: Connect to Jenkins, Bamboo, etc.
Defects: Log Defects, Defect List, Integration with BugTrackers
Automation Studio:
Record & Play: Record web interactions
Script Editor: Write custom test scripts
Reports: Test Execution Reports, Code Coverage, Defect Reports
77. Zoho ServiceDesk Plus (IT Help Desk)
Dashboard: IT Help Desk Overview, Ticket Volume, SLA Status
Requests: All Requests, New Incident, Service Catalog
Problems: Log Problem, Problem List, Root Cause Analysis
Changes: Log Change, Change Calendar, CAB (Change Advisory Board)
Assets: All Assets, Scan Assets, Manage Software & Hardware
Knowledge Base: All Solutions, Add Solution
Reports: IT Help Desk Reports, Asset Reports, SLA Reports
78. Zoho Site24x7 (All-in-one Monitoring)
Home: Global Monitoring Dashboard
Web: Website Monitoring, Web Page Speed, REST API
Server: Server Monitoring, Processes, Services
Network: Network Devices, Firewalls, Routers
Cloud: AWS, Azure, GCP Monitoring
APM (Application Performance): App Transaction Tracing
Logs: Log Management, Search Logs
Alerts: Current Alarms, Alert History, Alert Configuration
79. Zoho Embedded BI (Embedded Analytics)
Home: Dashboard, Analytics Overview, Usage Statistics
Solutions:
Create Solution: Start a new embedded analytics project
My Solutions: List of all your embedded BI projects
Designer (within a Solution):
Data Sources: Connect to your application's database or API
Report Builder: Create charts, pivot tables, and tabular reports
Dashboard Designer: Drag-and-drop to build interactive dashboards
Deployment:
Embed Settings: Get embed URL/code snippet
Theming: Customize the look and feel to match your app (white-labeling)
Security: Configure Single Sign-On (SSO) and data security rules
API & SDKs: API Keys, API Documentation, Web & Mobile SDKs
Settings: User Management, White-Label Settings, Billing
80. Zoho DataPrep (Data Preparation & Cleansing)
Home: Dashboard, Recent Datasets, Data Quality Overview
Data Sources: Import Data (from files, databases, cloud apps)
Workspace:
My Datasets: List of all imported datasets
Prepare Data: Open a dataset to clean and transform it
Transform (within the preparation view):
Cleanse: Remove duplicates, handle missing values, correct data types
Transform: Split columns, merge columns, create formula-based columns
Enrich: Join with other datasets
Recipes: Save a sequence of transformation steps to reuse later
Export: Export cleaned data to a destination (Zoho Analytics, database, etc.)
Settings: My Account, Connections, Schedules
81. Zoho Apptics (Application Analytics)
Dashboard: App Overview, Real-time Users, Crash Rate, Key Metrics
Audience: User Demographics, Devices, User Journeys
Behavior:
Events: Track custom in-app events
Funnels: Analyze user conversion through key steps
Screen Flow: Visualize how users navigate your app
Quality:
Crashes: Crash Reports, Symbolication
Performance: App Start Time, API Latency, Screen Load Time
Engagement:
Push Notifications: Send targeted push campaigns
In-App Feedback: Collect user feedback and ratings
A/B Testing: Create and manage A/B tests for your app
Settings: App Settings, Install SDK, Data Management, Alerts
82. Zoho Marketing Automation
Dashboard: Marketing Funnel Overview, Lead Generation, Revenue Attribution
Journeys:
Journey Builder: Visual workflow builder for customer journeys
My Journeys: All active and draft journeys
Leads: All Leads, Lead Scoring, Lead Stages
Content:
Emails: Email Templates, A/B Testing
Landing Pages: Page Builder, Page Analytics
Forms: Signup Forms, Form Analytics
Channels: Email Campaigns, SMS, Social Media Campaigns
Website: Web Assistant (pop-ups, banners), Web Behavior Tracking
Analytics: Journey Reports, Lead Source Analytics, Revenue Reports
Settings: Domain Authentication, Integrations (CRM, etc.), User Management
83. Zoho Payroll
Home: Payroll Dashboard, Payday Countdown, To-Do List, Employee Summary
Pay Runs: Run Payroll, Past Pay Runs, Draft Pay Runs
Employees: All Employees, Onboarding, Offboarding
Time & Attendance: Approve Timesheets, Manage Leave
Taxes & Filings: View and manage tax payments and forms
Benefits & Deductions: Manage Benefits, Manage Deductions
Reports: Payroll Summary, Employee Reports, Tax Reports
Settings: Organization Profile, Pay Schedule, Bank Accounts, Statutory Components
The Suites (Conceptual Bundles)
These are not single apps but bundles of the apps listed above. Their "pages" are simply the dashboards that link to the individual applications.
84. Zoho CRM Plus: (Links to CRM, Campaigns, Desk, Social, etc.)
85. Zoho Finance Plus: (Links to Books, Invoice, Expense, Inventory, etc.)
86. Zoho Workplace: (Links to Mail, Cliq, WorkDrive, Writer, Sheet, Show, etc.)
87. Zoho People Plus: (Links to People, Recruit, Expense, Cliq, etc.)
88. Zoho Marketing Plus: (Links to Marketing Automation, Campaigns, Social, Survey, etc.)
89. Zoho Service Plus: (Links to Desk, Assist, Lens, etc.)
90. Zoho Projects Plus: (Links to Projects, Sprints, BugTracker, etc.)
91. Zoho Catalyst (Pro-Code Serverless Platform)
Home: Project Dashboard, Usage Metrics, Recent Deployments
Develop: Functions, Web Client
Data Store: Data Store, File Store, Cache
AI Services: Zia (OCR, Object Detection, etc.)
Amplify: Authentication, Push Notifications
Monitor: Logs, Metrics, API Gateway Analytics
Settings: Environments, Custom Domains, API Keys
92. Zoho Office Integrator (Embedded Editors)
Dashboard: API Usage, Document Sessions
API Keys: Manage your API credentials
Co-branding: Customize the look of the embedded editors
Documentation: API Reference, SDKs
Settings: My Account, Security, Webhooks
 `,
  apps: {
    "Analytics": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Analytics"
Global Search Bar: A powerful search that can find workspaces, dashboards, or reports. Placeholder: "Search analytics..."
Quick Create Button (+ Icon):
New Report
New Dashboard
Import Data
Notifications Bell Icon: Alerts for "Your scheduled report is ready," "A dashboard has been shared with you," "Zia has found a new insight," etc.
Settings Gear Icon: Links to the main Analytics administration settings.
User Profile Icon: Profile, Logout.
2. Aura Analytics Internal Sidebar
This sidebar is focused on navigating your data workspaces and assets.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A personalized view showing "My Favorite Dashboards," "Recently Viewed Reports," and a feed of "Zia Insights" (AI-generated observations).
Section: Explorer
Icon: Folder
Pages:
Workspaces: The primary organizational unit. A "Workspace" is a container for a specific project or department's data and reports (e.g., "Sales Analytics," "Marketing Funnel Analysis"). This page shows a list of all workspaces.
Shared with Me: A list of all reports and dashboards shared with you by others.
Section: Data
Icon: Database
Pages:
Data Sources: A central place to manage connections to all your data sources. This includes direct connections to other AURA apps (Aura CRM, Aura Books), databases, and uploaded files.
Section: AI Assistant
Icon: Bot
Pages:
Ask Zia: The core AI feature. A chat-like interface where a user can type a question in plain English (e.g., "Show me the total sales by country for the last quarter as a bar chart"), and the AI will automatically generate the report.
3. Page-Level Toolbars & Main Interface (The Report/Dashboard Builder)
The core of the app is the visual, drag-and-drop builder for creating reports and dashboards.
When inside a Workspace, the sidebar changes to show the contents of that workspace:
Dashboards: A list of all dashboards in this workspace.
Reports: A list of all reports.
Data: A list of all data tables available for building reports.
The Report Builder:
Left Panel (Data): A list of all the tables and columns (fields) available.
Center Panel (The Canvas): A live preview of the chart or table you are building.
Right Panel (Configuration): A set of shelves or boxes. The user drags a field from the left panel and drops it onto a shelf in the right panel. For example:
X-Axis Shelf: Drop "Month" here.
Y-Axis Shelf: Drop "Sales Amount" here.
Color Shelf: Drop "Region" here.
The chart on the canvas instantly updates to a bar chart showing sales by month, with a different colored bar for each region.
The Dashboard Builder:
A drag-and-drop canvas.
The Left Panel shows a list of all the reports you have already built. You drag these reports onto the canvas and resize them to create your dashboard layout.
Toolbar: Buttons to Add Text, Add Image, and Add Filters that apply to the whole dashboard.
4. Data Entry & Modals
Importing Data (Wizard): A multi-step wizard that guides the user through connecting to a new data source, whether it's uploading a CSV file or entering database credentials.
Formula Editor (Modal): A powerful pop-up for creating custom calculated fields and metrics using a familiar, spreadsheet-like formula language.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Sales Dashboard" Flow: A sales manager wants a new dashboard. They go to the "Sales Analytics" Workspace. First, they use the Report Builder to create several individual reports: a "Sales by Rep" bar chart, a "Deals Pipeline" funnel chart, and a "Sales by Region" map. Once the reports are saved, they go to the Dashboard Builder. They drag these three reports onto the canvas, add a "Date Range" Filter at the top, and add a Text widget with the title "Q3 Sales Performance." They then Share this interactive dashboard with their entire team.
The "Quick Question" Flow (AI): An executive is in a meeting and needs a number fast. They open Aura Analytics on their phone and go to Ask Zia. They type, "What was our total revenue from India last month?" The AI processes the request, searches the connected Aura Books data, and instantly displays a single, large number: "$50,000."
The "Automated Reporting" Flow: A user needs to send a "Weekly Leads" report to their team every Monday morning. They create the report once in the Report Builder. They then use the Schedule Emails feature. They set the schedule to "Weekly, on Monday at 9:00 AM," select the recipients from a list, and save. Now, every Monday, Aura Analytics will automatically run the report with the latest data and email a PDF copy to the team without the user having to do anything.
`,
    "Apptics": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Apptics"
Global Search Bar: Placeholder: "Search by app name, event, or user ID..."
Quick Create Button (+ Icon) (Admin/Dev only):
Add New App
Notifications Bell Icon: Alerts for "A new critical crash has been detected," "Your app's performance has degraded," "A conversion funnel has a high drop-off rate," etc.
Settings Gear Icon: Links to the main Apptics account settings.
User Profile Icon: Profile, Logout.
2. Aura Apptics Internal Sidebar
This sidebar is organized by the different facets of application analytics.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview for the selected application. Customizable widgets for "Real-time Users," "Crash-Free Users %," "Session Duration," "Top Events," and "Top Crashes."
Section: Audience
Icon: Users
Pages:
Demographics: Charts showing user distribution by country, device, OS version, etc.
User Journeys: A tool to visualize the common paths users take through your application.
Retention: Cohort analysis charts showing how many users return to your app over time.
Section: Behavior
Icon: MousePointer
Pages:
Events: The core of behavior tracking. A list of all the custom events you are tracking in your app (e.g., "button_clicked," "level_completed," "item_purchased").
Funnels: A tool to build and analyze conversion funnels to see where users drop off in a multi-step process.
Screen Flow: A visual diagram showing how users navigate between different screens in your app.
Section: Quality
Icon: Shield
Pages:
Crashes: A detailed list of all crashes, intelligently grouped by the root cause. This is a critical page for developers.
Performance: A section to monitor technical performance metrics, such as App Start Time, API Latency, and Screen Load Time.
Section: Engagement
Icon: Megaphone
Pages:
Push Notifications: A composer to send targeted push notification campaigns to different user segments.
In-App Feedback: A tool to create and manage in-app surveys and "Rate My App" prompts.
A/B Testing: A platform to run A/B tests on features and UI changes within your app.
3. Page-Level Toolbars & Main Interface
On the "Crashes" Page:
A list of crash groups, prioritized by the number of users affected.
Each item shows the error message, the file where it occurred, and the number of occurrences.
The "Crash Detail" View:
Clicking a crash group opens a detailed view.
Stack Trace: The most important part. A detailed, line-by-line code trace that shows the exact sequence of function calls that led to the crash.
Context: Information about the device, OS, and user activity at the time of the crash.
Action Toolbar: Buttons to Change Status (Open, In Progress, Fixed), Assign to Developer, and Link to Bug (integrates with Aura BugTracker).
The "Funnel Builder":
A simple, step-by-step interface where a user selects a sequence of Events to define their funnel (e.g., Step 1: "app_launched", Step 2: "viewed_product", Step 3: "added_to_cart", Step 4: "completed_purchase"). The tool then automatically generates the visualization.
4. Data Entry & Modals
This application is primarily for viewing data that is sent from your live application via the Apptics SDK.
Creating a Push Notification Campaign (Wizard): A multi-step wizard to define the Audience (user segment), write the Message, and Schedule the notification.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Developer" Flow: A developer releases a new version of their mobile app. The next morning, they open Aura Apptics and go to the Crashes page. They see a new, critical crash affecting 5% of users on the latest version. They click on it to view the full Stack Trace, which points them to the exact line of code that is causing the problem. They link the crash to a new bug in Aura BugTracker and begin working on a fix.
The "Product Manager" Flow: A product manager wants to know if people are using the new "Advanced Search" feature. They go to the Events page and look at the count for the "advanced_search_used" event they asked the developers to add. They see that very few people are using it. They then create a Funnel to see where users are dropping off. They discover that most users are not even finding the button.
The "Marketing" Flow (Engagement): The product manager wants to encourage users to try the new feature. They go to Push Notifications. They create a new Audience segment: "Users who have been active in the last 30 days but have NOT used the Advanced Search feature." They write a push notification message: "Did you know? You can now use Advanced Search to find exactly what you're looking for!" and send it to that specific segment.`,
    "Assist": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Assist"
Global Search Bar: Placeholder: "Search by session ID, technician, or device name..."
Quick Create Button (+ Icon):
Start Support Session
Notifications Bell Icon: Alerts for "New unattended device came online," "Software installation complete," etc.
Settings Gear Icon: Links to the main Assist administration settings.
User Profile Icon: Profile, Logout.
2. Aura Assist Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows "Active Sessions," a list of "My Unattended Devices," and stats on "Total Sessions Today."
Section: Support
Icon: Monitor
Pages:
Start Session: The main page for technicians. It displays a large, 9-digit session code to give to a customer over the phone.
Scheduled Sessions: A list of pre-scheduled remote support sessions.
Section: Unattended Access
Icon: Server
Pages:
All Devices: The main list of all company-owned computers that can be accessed at any time without the end-user being present. Shows their online/offline status.
Deployment: A page to get the installer link to deploy the unattended access agent on new computers.
Device Groups: A page to organize unattended computers into groups (e.g., "Sales Laptops," "Server Room").
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Session History," "Technician Performance" (average session duration, etc.), and "Unattended Access Logs."
Section: Administration
Icon: Settings
Pages:
Technician Management: A page to add or remove support technicians.
Settings: General settings for branding, security, and session policies.
3. Page-Level Toolbars & Main Interface (The Technician Console)
The core of the application is the Technician Console, which is the window that opens when a remote session starts.
Main View:
A live, real-time view of the customer's desktop. The technician can move their mouse and type as if they were sitting in front of the computer.
Toolbar (at the top or side of the console):
Session Controls: Start/Stop Session, Start/Stop Recording.
View Controls: Select Monitor (if the customer has multiple screens), Actual Size / Scale to Fit, Color Quality.
Action Tools:
File Transfer: Opens a two-panel file explorer to move files between the technician's and the customer's computer.
Chat: Opens a chat window to communicate with the customer.
Reboot: A button to restart the customer's computer. Includes a "Reboot in Safe Mode" option.
Run as Administrator: Tools to run programs with admin rights.
Diagnostic Tools: Task Manager, System Information.
4. Data Entry & Modals
The Customer's Experience: The customer goes to a simple website (e.g., join.aura.com). They enter the 9-digit session code given to them by the technician. A small, secure application downloads and runs. The customer must click "Allow" to grant the technician screen control.
File Transfer (Modal): The file transfer tool is a modal pop-up that shows the technician's file system on the left and the customer's on the right, with arrow buttons to move files between them.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "On-Demand Support" Flow: A customer calls support with a problem. The support agent in Aura Desk says, "Let me take a look." The agent opens Aura Assist, clicks Start Session, and reads the 9-digit code to the customer. The customer enters the code, downloads the applet, and clicks "Allow." The agent can now see the customer's screen, diagnose the problem, and fix it directly. At the end of the session, a recording is automatically saved and a link to it is added to the ticket in Aura Desk.
The "Unattended Maintenance" Flow: It is midnight. A system administrator needs to install a critical security patch on all the company's servers. They log into Aura Assist, go to Unattended Access, and select the "Servers" group. They connect to each server, one by one, without needing anyone to be physically present. They run the updates, reboot the servers, and log off. The entire process is logged in the Reports section.
The "Integration with Desk" Flow: A support ticket comes into Aura Desk. The agent sees it's a complex technical issue. Directly inside the Aura Desk ticket, there is an "Initiate Remote Session" button. The agent clicks it. This automatically opens Aura Assist and generates a session link. The agent pastes this link into the ticket reply. The customer clicks the link, and the remote session starts, already linked to the correct support ticket.`,
    "Backstage": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Backstage"
Global Search Bar: Placeholder: "Search by event name, attendee, or speaker..."
Quick Create Button (+ Icon):
New Event
Notifications Bell Icon: Alerts for "New ticket sale," "A speaker has confirmed," etc.
Settings Gear Icon: Links to the main Backstage settings page.
User Profile Icon: Profile, Logout.
2. Aura Backstage Internal Sidebar
The sidebar is contextual. When you are managing an event, the sidebar shows pages for that specific event.
Main Navigation (Top Level)
Icon: Home
Pages:
Dashboard: An overview of all your events, with a calendar and key stats.
All Events: A list of all your created events (upcoming, past, drafts).
Event-Specific Sidebar (Appears after selecting an event)
Section: Planning
Icon: ClipboardList
Pages:
Event Dashboard: The main control panel for this event, showing total registrations, ticket sales, and a to-do checklist.
Website: The visual builder for the event's public landing page. Includes sub-pages for Agenda, Speakers, and Sponsors.
Agenda: A dedicated page to build the event's schedule, session by session. Create Session, Add Track, Assign Speaker.
Speakers: A list of all speakers for the event. Invite Speaker, Manage Profiles.
Sponsors: A list of all sponsors. Add Sponsor, Manage Sponsorship Tiers.
Section: Attendees
Icon: Users
Pages:
Manage Attendees: A searchable list of everyone who has registered.
Registration: A page to set up Ticket Types (e.g., "Early Bird," "VIP"), pricing, and customize the Registration Form.
Check-in: A tool for checking in attendees at a physical event (often used on a tablet or phone).
Communications: A tool to send targeted emails to attendees (e.g., "Event Reminder," "Thank You for Attending").
Section: Onstage (For Virtual/Hybrid Events)
Icon: Monitor
Pages:
Broadcast Studio: The "backstage" control room for the live event. Here the host can start/stop the broadcast, manage speakers, and switch between sessions.
Sessions: A list of all live or pre-recorded video sessions.
Networking: Tools to manage virtual networking, like breakout rooms or 1-on-1 video calls.
Expo: A section to manage virtual booths for sponsors.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Detailed reports on Ticket Sales, Attendee Demographics, Session Popularity, and Engagement (polls, Q&A).
3. Page-Level Toolbars & Main Interface
On the "All Events" Page:
Title: "Events"
Primary Button: + New Event
Filters: "Filter by Status (Upcoming, Past)," "Filter by Type (Virtual, In-Person)."
The Website Builder:
A drag-and-drop interface similar to Aura Sites, but with special, pre-built sections for "Agenda," "Speaker Profiles," and "Sponsor Logos."
4. Data Entry & Modals
Creating a New Event (Multi-step Wizard):
A full-page wizard guides the user: 1. Basic Info (Name, Date, Location), 2. Website & Branding, 3. Tickets & Registration.
Adding a Session (Modal):
A pop-up form inside the Agenda page to add a new session with fields for "Title," "Description," "Time," and a dropdown to assign a "Speaker."
5. Bottom Bar
Non-existent. The focus is on the event management tools.
6. Task Info & Key Workflows
The "Event Creation" Flow: An event manager starts by clicking + New Event. They go through the wizard to set up the basics. Then, they use the event-specific sidebar to work through the checklist: they build the Website, add the Agenda, Invite Speakers, and set up Ticket Types. Finally, they publish the website and start promoting the event.
The "Attendee Registration" Flow: A potential attendee lands on the public event website. They review the agenda and speakers. They click "Register," choose their ticket type, fill out the registration form, and pay (if it's a paid event). They automatically receive a confirmation email and a calendar invite. Their name is automatically added to the Manage Attendees list inside Aura Backstage.
The "Virtual Event Day" Flow: The event manager opens the Broadcast Studio. They can see the live feed and the upcoming session. They bring a speaker "on stage" from the virtual green room. They start the broadcast. While the session is live, they use the Onstage tools to manage audience Q&A and polls. When the session is over, they end the broadcast and start the next one.`,
    "Bigin": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Bigin"
Global Search Bar: Placeholder: "Search deals, contacts, companies..."
Quick Create Button (+ Icon):
New Deal
New Contact
New Company
New Activity
Notifications Bell Icon: Alerts for new activities or deal updates.
Settings Gear Icon: Links to the main Bigin settings page.
User Profile Icon: Profile, Logout.
2. Aura Bigin Internal Sidebar
This sidebar is much simpler than the full CRM, focusing only on the core elements.
Section: Main
Icon: Home
Pages:
Pipelines: The default and most important page. A full-screen Kanban board showing all deals in their stages. Allows for switching between different pipelines (e.g., "Sales Pipeline," "Onboarding Pipeline").
Contacts: A simple list/table of all people.
Companies: A simple list/table of all companies.
Activities: A master list of all Tasks, Events, and Calls, filterable by type.
Section: Tools
Icon: Zap
Pages:
Products: A list of products or services that can be associated with deals.
Dashboards: A page with simple, visual charts for "Deals Won vs. Lost," "Sales by Rep," and "Pipeline Stages."
Messages: A unified view of communications linked to deals (emails, chat history, etc.).
Section: Administration
Icon: Settings
Pages:
Import Data: A wizard to import contacts or deals from a spreadsheet.
Workflow Automation: A simple builder to create rules like "When a deal moves to the 'Proposal' stage, automatically create a task to follow up."
Integrations: A page to connect to other tools like Aura Mail or a telephony system.
3. Page-Level Toolbars
On the "Pipelines" Page (The Main Page):
Title: "Sales Pipeline" (with a dropdown to switch to other pipelines).
Primary Button: + New Deal
View Switcher: Kanban View icon (default), List View icon.
Filters: "Filter by Owner," "Filter by Stage," "Filter by Closing Date."
On a "Single Deal Detail" View (often a pop-up or side panel):
Title: The Deal's Name (e.g., "AURA Website Project").
Key Info: Shows associated Contact, Company, Deal Value, and current Stage.
Action Buttons: Add Activity, Add Note, Edit Deal.
Timeline: A chronological feed of all activities related to this deal (emails, calls, stage changes).
4. Data Entry & Modals
Creating a New Deal (Quick Modal):
A simple pop-up form with essential fields: "Deal Name," "Contact Name," "Company Name," "Value," and "Pipeline Stage." Designed for very fast entry.
Adding an Activity (Modal Pop-up):
A simple form to add a Task, Event, or Call, directly linked to the current Deal, Contact, or Company.
5. Bottom Bar
Minimal or Non-existent: To keep the interface clean and focused, this app would likely have no persistent bottom bar. Information like record counts would be shown in the Page-Level Toolbar.
6. Task Info & Key Workflows
The Pipeline Flow: The user's entire life is on the Pipelines page. The main job is to move deal cards from left to right, from "New" to "Won." Every other feature exists to support this one core workflow.
The "Activity-Driven" Workflow: For each Deal card, the user's job is to ensure there is always a "Next Activity" scheduled. If a deal has no upcoming tasks, it is at risk. The user clicks a deal, clicks Add Activity, and schedules the next follow-up.
The "Quick-Create" Flow: A user gets a new lead from a phone call. They click the global + button, select New Deal, fill in 4-5 fields, and in 30 seconds, a new deal card appears in the first stage of their pipeline, ready to be worked on.`,
    "Bookings": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Bookings"
Global Search Bar: Placeholder: "Search by customer name, service, or staff..."
Quick Create Button (+ Icon):
New Appointment (for internal booking)
New Service
New Customer
Notifications Bell Icon: Alerts for "New booking received," "Appointment canceled by customer," etc.
Settings Gear Icon: Links to the main Bookings settings page.
User Profile Icon: Profile, Logout.
2. Aura Bookings Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "Today's Appointments," a summary of "Bookings this Month," "Total Revenue," and a feed of recent booking activity.
Section: Schedule
Icon: Calendar
Pages:
Calendar: The main page. A visual calendar showing all booked appointments. Can be viewed by Day, Week, or Month. Can be filtered to show the calendar for a specific staff member or the entire team.
Availability: A page where staff can set their regular working hours, add special hours, or block off time for vacations.
Section: Management
Icon: Briefcase
Pages:
Services: A list of all bookable services. Users can Create Service here, defining its name, duration, price, and which staff members can perform it. (e.g., "30-Minute Consultation," "1-Hour Group Workshop").
Staff: A list of all team members who can be booked. Each staff profile has its own availability settings and connected calendar.
Customers: A list of all customers who have booked appointments, with a history of their past and upcoming bookings.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Reports on "Bookings by Service," "Revenue by Staff Member," "No-show Rates," and "Most Popular Times."
3. Page-Level Toolbars & Main Interface
On the "Calendar" Page:
Title: "Team Calendar" (with a dropdown to select individual staff calendars).
Primary Button: + New Appointment (opens a modal for booking on behalf of a customer).
View Switcher: Day, Week, Month buttons.
Today Button: Instantly jumps the calendar view to the current day.
The Public Booking Page (What the Customer Sees):
A clean, simple, multi-step interface.
Step 1: Choose a Service: The customer sees a list of available services and clicks one.
Step 2: Choose a Staff Member (Optional): If multiple staff offer the service, the customer can choose a specific person or select "Any Available."
Step 3: Choose a Date & Time: A calendar is displayed showing only the available dates. When a date is clicked, a list of available time slots for that day appears.
Step 4: Enter Details: A simple form to enter their Name, Email, and Phone Number.
Step 5: Payment (Optional): If the service requires payment, a payment form appears (integrated with Stripe, etc.).
Step 6: Confirmation: A "Thank You" screen confirming the appointment details. An email confirmation is automatically sent to both the customer and the staff member.
4. Data Entry & Modals
Creating a New Service (Full Page Form):
Fields for "Service Name," "Duration," "Buffer Time" (time between appointments), "Price," and checkboxes to assign which staff members can be booked for this service.
Staff Availability (Interface):
A visual weekly calendar where a user can click and drag to define their working hours for each day (e.g., "Monday 9 AM - 5 PM").
5. Bottom Bar
Non-existent. All focus is on the calendar and management lists.
6. Task Info & Key Workflows
The "Setup" Flow: The user's first job is to set up their workshop. They go to Services to define what they offer. Then they go to Staff to add their team and set their individual working hours in the Availability section. Finally, they go to the Booking Page settings to customize its look and get the public URL.
The "Customer Booking" Flow: A customer receives the public booking link. They go through the simple steps of choosing a service and time and fill in their details. The appointment is automatically added to the company's calendar and the staff member's calendar (via two-way sync). Automated reminder emails are scheduled to be sent to the customer before the appointment.
The "Internal Booking" Flow: A staff member is on the phone with a customer who wants to book. The staff member clicks the + New Appointment button on their internal Calendar page. A modal pops up where they can select the service, customer (or create a new one), and time slot on behalf of the customer, and the booking is confirmed instantly.`,
    "Books": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Books"
Global Search Bar: Placeholder: "Search by transaction, invoice #, customer, vendor..."
Quick Create Button (+ Icon):
New Invoice
New Expense
New Bill
New Customer / Vendor
Notifications Bell Icon: Alerts for "An invoice is overdue," "Bank feed needs attention," etc.
Settings Gear Icon: Links to the main accounting settings.
User Profile Icon: Profile, Logout.
2. Aura Books Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main financial control center. Widgets for "Total Cash Flow," "Income vs. Expense" chart, "Profit & Loss" summary, "Bank Account Balances," and "Overdue Invoices/Bills."
Section: Sales
Icon: TrendingUp
Pages:
Customers: A list of all your customers.
Estimates / Quotes: Create and send quotes to potential customers.
Sales Orders: Track sales orders before they become invoices.
Invoices: The main hub for creating, sending, and tracking all customer invoices.
Payments Received: A log of all payments made by customers.
Recurring Invoices: Set up automatic invoicing for subscription clients.
Section: Purchases
Icon: TrendingDown
Pages:
Vendors: A list of all your suppliers and vendors.
Expenses: A log of all money spent, often categorized for tax purposes.
Bills: Track bills you have received from vendors and their due dates.
Payments Made: A log of all payments you have made to vendors.
Purchase Orders: Create and send purchase orders to vendors.
Section: Core Accounting
Icon: BookOpen
Pages:
Banking: The hub for connecting to your real-world bank accounts. Shows a feed of all transactions that need to be categorized.
Chart of Accounts: The foundational list of all your accounting categories (Assets, Liabilities, Income, Equity, Expenses).
Accountant: A special section with tools for professional accountants, including Manual Journals.
Section: Business Tools
Icon: Briefcase
Pages:
Items: A catalog of all products and services you sell.
Time Tracking: A section to track time spent on projects, which can then be billed to customers (integrates with Aura Projects).
Documents: A secure place to upload and store financial documents like receipts and contracts.
Section: Analytics
Icon: BarChart3
Pages:
Reports: The most critical section. A library of dozens of financial reports, including:
Profit and Loss
Balance Sheet
Cash Flow Statement
Sales by Customer
Expenses by Category
3. Page-Level Toolbars & Main Interface
On the "Invoices" List Page:
Title: "Invoices"
Primary Button: + New Invoice
Filters: "Filter by Status (Draft, Sent, Paid, Overdue)," "Filter by Customer."
Visual Summary: Often includes colorful "cards" at the top showing "Total Overdue," "Total Drafts," etc.
The "Banking / Reconciliation" Screen:
A two-panel view.
Left Panel: Shows a list of transactions downloaded from your real bank account.
Right Panel: Shows transactions you have already recorded in Aura Books.
The user's job is to "Match" them. The system uses AI to suggest matches. The user clicks "Confirm" to reconcile the account.
4. Data Entry & Modals
Creating a New Invoice (Full Page): A professional-looking invoice template that the user fills out. A "Lookup Field" lets them select an existing customer, which auto-fills their address. Another lookup lets them select items from their product list.
Categorizing a Bank Transaction (Inline): In the Banking feed, each transaction has a dropdown menu next to it, allowing the user to quickly assign it to an accounting category (e.g., "Office Supplies," "Fuel," "Software Subscriptions").
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Quote-to-Cash" Flow: A user creates a new Estimate for a customer. The customer accepts it. The user converts the Estimate into an Invoice with one click. They email the Invoice to the customer. The customer clicks a "Pay Now" link in the email and pays with a credit card. The payment is automatically recorded in Payments Received, and the Invoice status changes to Paid.
The "Expense Management" Flow: A user takes a photo of a lunch receipt with their phone. The Aura Books mobile app uses OCR (Text Recognition) to automatically read the vendor, date, and amount. It creates a new Expense record. The user just has to select the correct category ("Meals & Entertainment") and save.
The "End of Month" Flow: An accountant logs in. They go to the Banking tab and reconcile all the transactions for the month. Then, they go to the Reports tab and run the "Profit and Loss" and "Balance Sheet" reports. They export these as PDFs to send to the business owner.`,
    "BugTracker": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura BugTracker"
Global Search Bar: A powerful search that can find bugs by ID, title, or content. Placeholder: "Search all bugs..."
Quick Create Button (+ Icon):
Report a New Bug
Notifications Bell Icon: Alerts for "A new bug has been assigned to you," "A bug you reported has been fixed," "A comment was added to a bug," etc.
Settings Gear Icon: Links to the main BugTracker project settings.
User Profile Icon: Profile, Logout.
2. Aura BugTracker Internal Sidebar
This sidebar is focused on different views of the bug database.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Widgets for "My Open Bugs," "Unassigned Bugs," "Bugs by Severity," and "Recent Activity."
Section: Projects
Icon: Folder
Pages:
All Projects: A list of all the different software projects you are tracking bugs for (e.g., "AURA Web App," "AURA Mobile App").
Section: Bug Views (Contextual to the selected project)
Icon: AlertCircle
Pages:
All Bugs: The master list of all bugs for the current project.
My Bugs: A filtered list of bugs assigned to me.
Unassigned: The triage queue for new, unassigned bugs.
Kanban Board: A visual workflow board with columns like "New," "In Progress," "Ready for QA," "Closed."
Custom Views: A user-created list of saved filters (e.g., "Critical Bugs in Login Module," "Bugs Reported by VIP Customers").
Section: Planning
Icon: Target
Pages:
Milestones / Releases: A page to group bugs and plan which release they will be fixed in.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Bug Resolution Time," "Bugs by Component," "Bug Recurrence Rate," and "Team Performance."
3. Page-Level Toolbars & Main Interface (The Bug Detail View)
The most important interface is the Bug Detail View, which is a comprehensive page for a single bug.
Header:
Shows the unique Bug ID (e.g., AURA-123), the bug Title, and its current Status.
Left Panel (The Main Content):
Description: The original report of the bug, including "Steps to Reproduce," "Expected Behavior," and "Actual Behavior."
Attachments: Screenshots and video recordings of the bug.
Comments: A chronological thread of all discussions, updates, and analysis from the team.
Right Panel (Properties & Metadata):
A panel with key details that can be updated.
Dropdowns: Status (New, Confirmed, In Progress, Resolved, Closed), Priority (High, Medium, Low), Severity (Critical, Major, Minor).
Fields: Assignee (the developer working on it), Reporter, Component (e.g., "Login," "Sidebar"), Labels / Tags.
Integrations: A special section that shows linked information from other apps.
Linked Support Tickets (from Aura Desk)
Linked Code Branch / Pull Request (from GitHub)
Related User Story (from Aura Sprints)
4. Data Entry & Modals
Reporting a New Bug (Full Page Form): A structured form designed to capture all the necessary information. It uses a rich text editor for the description and has a drag-and-drop area for attaching screenshots.
The Triage Process (Inline Editing): A manager looks at the Unassigned queue. They read a new bug report. Directly from the list view or the detail view's right panel, they set the Priority and Severity, and assign it to a Developer.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Support to Dev" Flow (Integration): A support agent in Aura Desk confirms that a customer's problem is a real software bug. Directly from the support ticket, they click a "Create Bug" button. This automatically opens Aura BugTracker, creates a new bug report, pre-fills it with the customer's description, and automatically links the bug back to the support ticket.
The "Developer" Flow: A developer starts their day by looking at their My Bugs list. They pick a high-priority bug. They open its detail view and click a "Create Branch" button. This automatically creates a new code branch in Git named bugfix/AURA-123. The developer writes the code to fix the bug.
The "QA" Flow: After the developer pushes their fix and merges the code, an automation rule (or the developer manually) moves the bug's Status to "Ready for QA." The bug now appears in the Quality Assurance team's queue. A QA tester follows the "Steps to Reproduce" and confirms that the bug is gone. They then move the bug's Status to "Closed."
The "Customer Notification" Flow (Automation): The bug's status is changed to "Closed." Because the bug was linked to a support ticket in Aura Desk, the system automatically sends a notification back to Aura Desk. The support agent is alerted, and they can now reply to the customer: "Good news! The bug you reported has been fixed in our latest release."`,
    "CRM": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura CRM"
Global Search Bar: Placeholder: "Search leads, contacts, accounts, deals..."
Quick Create Button (+ Icon):
New Lead
New Contact
New Account
New Deal
New Task
New Meeting
New Call
Notifications Bell Icon: Alerts for new lead assignments, task reminders, etc.
Settings Gear Icon: Links to the main CRM settings page.
User Profile Icon: Profile, Logout.
2. Aura CRM Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview with widgets for "Deals Pipeline," "Leads by Source," "Today's Tasks," "Today's Meetings."
My Activities: A real-time feed of all my recent actions (calls logged, emails sent, notes added).
Section: Sales Funnel
Icon: Filter
Pages:
Leads: A list/table of all potential customers.
Contacts: A list/table of all confirmed people.
Accounts: A list/table of all companies.
Deals: The visual sales pipeline (Kanban board view with draggable cards).
Section: Activities
Icon: ClipboardList
Pages:
Tasks: A master list of all to-do items with due dates and priorities.
Meetings: A calendar view of all scheduled events.
Calls: A log of all phone calls made.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A library of pre-built and custom reports (Sales Reports, Activity Reports, Lead Conversion Reports).
Dashboards: A gallery of visual dashboards that can be customized.
Section: Tools
Icon: Zap
Pages:
Import Data: A step-by-step wizard to import leads or contacts from a CSV file.
Export Data: A tool to export data from any module.
Recycle Bin: View and restore deleted records from the last 30 days.
3. Page-Level Toolbars
On the "All Contacts" Page:
Title: "All Contacts"
Primary Button: + New Contact
Secondary Buttons: Import, Export
More Actions (...): Mass Delete, Mass Update, Send Mass Email
View Switcher: List View icon, Kanban View icon
Filters: "Filter by Owner," "Filter by Tag"
On a "Single Contact Detail" Page:
Title: The Contact's Name (e.g., "Rohan Kumar")
Primary Buttons: Send Email, Log a Call, Schedule Meeting
More Actions (...): Edit, Delete, Clone, Add to Campaign
4. Data Entry & Modals
Creating a New Contact (Full Page Form):
Sections for "Contact Information" (Name, Email, Phone), "Address Information," and "Description."
A "Save" button that is always visible.
Logging a Call (Modal Pop-up):
Fields for "Subject," "Call Type (Inbound/Outbound)," "Call Duration," and a large text area for "Notes."
Converting a Lead (Special Modal):
A pop-up that appears when you convert a Lead.
It shows the Contact, Account, and Deal that will be created.
Allows you to assign an owner for the new records.
5. Bottom Bar
On List Pages: "Showing 1-50 of 1,234 records" with pagination controls (<, 1, 2, 3, >).
Universal: A link to "Keyboard Shortcuts" for power users.
6. Task Info & Key Workflows
The Lead-to-Sale Flow: A user's main job is to take a Lead, qualify it, and Convert it. This action automatically creates a linked Contact, Account, and a new Deal.
The Deal Pipeline Flow: A user's next job is to open the Deals page and visually drag the new Deal card from the "Qualification" stage to "Negotiation," "Proposal Sent," and finally to "Closed Won" or "Closed Lost."
The Activity Management Flow: For every Contact or Deal, the user's job is to continuously add activities: Log a Call, Schedule a Meeting, or Create a Task to ensure they are following up. All these activities appear on the main dashboard.`,
    "CRMPlus": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: This is the primary navigation. It shows a special, curated list of the apps included in this suite.
Current App Name: "Aura CRM Plus"
Global Search Bar: A "super-search" that can find a contact, deal, ticket, or campaign across ALL connected apps at once.
Quick Create Button (+ Icon): A unified dropdown with the most common actions: New Lead, New Ticket, New Campaign.
Notifications Bell Icon: An aggregated feed of notifications from all connected apps.
Settings Gear Icon: Links to the main settings page for the entire suite, managing integrations and user permissions across apps.
User Profile Icon: Profile, Logout.
2. Aura CRM Plus Sidebar (The "Suite" Sidebar)
A suite does not have a massive, merged sidebar. It has a simple, high-level sidebar focused on cross-functional views.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard. This is the core of the experience.
Section: Customer 360°
Icon: UserCheck
Pages:
Customers: A unified list of all customers. Clicking on a customer takes you to a special "Customer 360" page that shows their sales deals from Aura CRM, support tickets from Aura Desk, and marketing campaigns from Aura Campaigns, all on one screen.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of special cross-functional reports that combine data from multiple apps (e.g., "How do marketing campaigns affect support ticket volume?").
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura CRM, Aura Desk, Aura Campaigns, etc.).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly customizable, widget-based dashboard.
Default Widgets:
Sales Funnel: A live funnel chart from Aura CRM.
New Tickets Today: A number and list from Aura Desk.
Ongoing Campaigns: A summary of active email campaigns from Aura Campaigns.
Live Visitors on Site: A real-time number from Aura SalesIQ.
Recent Social Mentions: A feed from Aura Social.
Recent Survey Responses: A feed from Aura Survey.
The "Customer 360°" Page:
This is the most powerful page.
Header: Shows the customer's name and key details from CRM.
Main View: A multi-column or tabbed layout showing:
A column for their Sales history (deals, quotes).
A column for their Marketing history (emails received, links clicked).
A column for their Support history (all past tickets).
4. Data Entry & Modals
This application is primarily for viewing combined data. Most data entry happens within the individual applications. The only exception is the unified Quick Create button.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Morning Huddle" Flow: A sales manager starts their day by opening the Aura CRM Plus Dashboard. They can see in a single glance how many new leads came in overnight, how many new support tickets were created, and how the latest email campaign is performing. They don't need to open three different apps.
The "Pre-Call Prep" Flow: A salesperson has a call with a major client. Before the call, they go to the Customers section of Aura CRM Plus and open the client's "360° View." They instantly see that the client has an open, high-priority support ticket in Aura Desk. The salesperson now knows not to start the call with a sales pitch, but instead to ask, "I see you're having an issue with... How can I help?" This turns a potential conflict into a relationship-building moment.
The "Marketing to Support" Flow (Data-Driven): The Head of Marketing is looking at the Reports in Aura CRM Plus. They run a report that combines data from Aura Campaigns and Aura Desk. They discover that customers who receive the "Advanced Tips" email series submit 50% fewer support tickets. They now have proof that their marketing content is successfully educating customers and reducing the load on the support team.`,
    "Calendar": `
 Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Calendar"
Global Search Bar: Placeholder: "Search by event title, attendee, or location..."
Quick Create Button (+ Icon):
New Event
Notifications Bell Icon: Alerts for "You have a new event invitation," "An event has been updated," etc.
Settings Gear Icon: Links to the main Calendar settings.
User Profile Icon: Profile, Logout.
2. Aura Calendar Internal Sidebar
This sidebar is focused on managing different calendars and views.
Section: Main
Icon-less:
Create: A large button that opens the "New Event" form.
Section: Mini Calendar
Icon: Calendar
View: A small, month-view calendar that allows the user to quickly jump to any date. The current day is highlighted.
Section: My Calendars
Icon: User
Pages:
A list of all the user's personal calendars, each with a colored checkbox to toggle its visibility on the main calendar view. (e.g., My Work Calendar, Personal, Family).
A + button to Create New Calendar.
Section: Team & Shared Calendars
Icon: Users
Pages:
A list of all team or colleague calendars that have been shared with the user. Each has a checkbox to overlay their schedule on the main view. (e.g., Marketing Team Calendar, Manager's Calendar).
Section: Other Calendars
Icon: Grid
Pages:
A list of other calendars integrated from different AURA apps, such as Project Deadlines from Aura Projects or Company Holidays from Aura People.
An option to Subscribe to Calendar from an external URL.
3. Page-Level Toolbars & Main Interface (The Calendar Grid)
The core of the application is the large, interactive Calendar Grid.
Top Toolbar (above the grid):
Today Button: Instantly brings the view back to the current day.
Navigation Arrows (< and >): Move to the previous or next day/week/month.
Current Date Display: Shows the current month and year (e.g., "August 2025").
View Switcher: Buttons to change the main grid view between Day, Week, Month, and Agenda (a simple list).
The Grid Itself:
Events are displayed as colored blocks.
The user can click on an empty time slot to instantly open a "quick create" pop-up for a new event.
The user can drag and drop events to reschedule them.
The user can drag the bottom edge of an event block to change its duration.
4. Data Entry & Modals
Quick Create Event (Pop-up): Clicking on an empty time slot opens a small pop-over. It has a single field for "Event Title, Time, and Location" that uses AI to parse the text (e.g., typing "Team Meeting at 3pm at Main Office" automatically fills in the details).
Full Event Editor (Full Page Form or Large Modal):
Opens when you click "More Options" on the quick create pop-up or Create in the sidebar.
Fields: Title, Date & Time, Attendees (integrates with Aura Contacts), Location, Video Conferencing (a button to add an Aura Meeting link), Description, Attachments (from Aura WorkDrive), and Reminders.
Find a Time (AI Feature): A powerful tool that looks at the calendars of all invited attendees and suggests time slots when everyone is free.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Team Meeting" Flow: A manager needs to schedule a meeting. They click Create. They add the five members of their team to the Attendees list. They click the "Find a Time" button. The AI shows them three time slots tomorrow when everyone is available. The manager picks one. They click the "Add Video Conferencing" button, which instantly generates and adds an Aura Meeting link. They click Save. The event is automatically added to everyone's calendar, and they all receive an email invitation.
The "Project Deadline" Flow (Integration): A project manager in Aura Projects sets a deadline for a major task. This deadline automatically appears as an "all-day event" in the Aura Calendar for everyone on that project, ensuring the whole team is aware of the timeline.
The "Customer Booking" Flow (Integration): A customer uses the public Aura Bookings page to schedule a demo. The appointment automatically appears on the salesperson's "Work Calendar" in Aura Calendar, preventing them from being double-booked.`,
    "Campaigns": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Campaigns"
Global Search Bar: Placeholder: "Search by campaign name, contact email..."
Quick Create Button (+ Icon):
New Email Campaign
New Contact
New Segment
Notifications Bell Icon: Alerts for "Campaign has been sent," "A/B test winner selected," etc.
Settings Gear Icon: Links to the main Campaigns settings page.
User Profile Icon: Profile, Logout.
2. Aura Campaigns Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing key metrics like "Total Contacts," "Recent Campaign Performance" (Open/Click rates), and "List Growth" over time.
Section: Campaigns
Icon: Send
Pages:
Email Campaigns: A list of all your one-time email campaigns (sent, scheduled, drafts).
A/B Tests: A dedicated page to manage and view the results of A/B test campaigns.
Social Campaigns: A tool to create and schedule posts that link to your email campaigns.
Section: Contacts
Icon: Users
Pages:
Lists: Manage your main contact lists. Create List or Import Contacts from a file or from Aura CRM.
Segments: Create dynamic, rule-based segments of your lists (e.g., "Contacts who opened the last email but did not click").
Signup Forms: Design and get the code for forms to embed on your website to grow your lists.
Section: Automation
Icon: Zap
Pages:
Workflows: The most powerful feature. A visual, drag-and-drop builder to create automated journeys (e.g., "When a user signs up, wait 1 day, then send a welcome email. If they click a link, add a 'Hot Lead' tag...").
Autoresponders: A simpler tool for creating a pre-set sequence of emails (e.g., a 5-day email course).
Section: Library
Icon: BookOpen
Pages:
Templates: A gallery of your saved email templates and pre-built templates.
Image Library: A place to upload and manage all the images you use in your emails.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Detailed reports on campaign performance, link clicks, contact engagement, and automation workflows.
3. Page-Level Toolbars & Main Interface (The Campaign Builder)
The core of this application is the Campaign Builder, a multi-step wizard.
Step 1: Setup:
Fields for "Campaign Name," "Subject Line," "Sender Name," and "Sender Email."
Step 2: Design:
Options to choose a Template, import HTML, or use a Drag-and-Drop Editor.
The editor is a visual canvas where you can drag in content blocks (Text, Image, Button, Spacer).
Step 3: Audience:
Checkboxes to select which Lists or Segments will receive the campaign.
Step 4: Send:
Options to "Send Immediately" or "Schedule for Later" (with a date and time picker).
A final "Send" button.
4. Data Entry & Modals
Creating a Segment (Modal):
A powerful pop-up for building rules. It uses dropdowns: [Contact Field] [Condition] [Value]. For example: [Tag] [is] [Hot Lead]. You can add multiple AND/OR conditions.
Viewing a Report (Full Page):
A visual page with large numbers for Open Rate and Click Rate, a pie chart showing opens vs. unopens, and a clickable map showing where people opened the email.
5. Bottom Bar
Non-existent. All focus is on the campaign data and builder.
6. Task Info & Key Workflows
The "Newsletter" Flow: A user's most common task. They go through the 4-step Campaign Builder wizard. They design their email, choose their "All Subscribers" list, schedule it to send on Tuesday morning, and then come back on Wednesday to the Reports page to see how many people opened it.
The "Welcome Series" Flow (Automation): A user wants to automatically welcome new subscribers. They go to Automation -> Workflows. They create a new workflow. The Trigger is "When a contact is added to the list 'New Subscribers'." The first Action is "Wait 1 hour." The second Action is "Send Email 'Welcome Email #1'." They add another "Wait 2 days" and another "Send Email" action to create a whole series. They click "Activate," and now every new subscriber will automatically receive this series of emails without any more work.
The "CRM Integration" Flow: Inside Aura CRM, a user creates a list of all contacts who have a "Deal" in the "Proposal Sent" stage. They click a button "Sync to Aura Campaigns." This list of hot leads is now available in Aura Campaigns. The user then sends a special, targeted email to just this segment with a final offer to close the deal.`,
    "Catalyst": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Catalyst"
Global Search Bar: Placeholder: "Search by project, function, or data table..."
Quick Create Button (+ Icon):
New Project
Notifications Bell Icon: Alerts for "Deployment successful," "A function has crashed," "Cron job executed," etc.
Settings Gear Icon: Links to the main Catalyst account settings (billing, API keys).
User Profile Icon: Profile, Logout.
2. Aura Catalyst Internal Sidebar
This sidebar is for the developer. It is organized by the different backend components they can use.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview for the selected project. Shows "API Call Volume," "Function Executions," "Data Storage Usage," and a feed of "Recent Deployments."
Section: Develop
Icon: Code
Pages:
Functions: The core of the platform. A list of all your serverless functions. You can create different types:
HTTP Functions: Code that runs when you visit a specific URL (for building APIs).
Event Functions: Code that runs automatically when something happens in another AURA app (e.g., a new user signs up in Aura Directory).
Cron Functions: Code that runs on a schedule (e.g., every night at midnight).
Web Client: A place to host the static files for your frontend (your compiled React app from npm run build).
Section: Data
Icon: Database
Pages:
Data Store: A simple, managed database. Users can Create Tables and Browse Data here.
File Store: A secure place to store user-uploaded files, like profile pictures or documents.
Cache: A tool for high-speed, temporary data storage.
Section: Amplify (User-Facing Services)
Icon: Users
Pages:
Authentication: A pre-built user login and signup system. You can enable different sign-in methods like Email/Password, Google, Facebook, etc.
Push Notifications: A service to send push notifications to your web or mobile app.
Section: Monitor
Icon: Activity
Pages:
Logs: A real-time, searchable feed of all logs from your functions and applications.
Metrics: A dashboard with detailed performance graphs for function execution time, memory usage, and error rates.
Section: Administration
Icon: Settings
Pages:
Environments: Manage your different deployment environments, like Development and Production.
Custom Domains: Connect a custom domain to your hosted web client or API.
API Gateway: Manage your public-facing API endpoints.
3. Page-Level Toolbars & Main Interface
The Main Interface is a Local Development Experience: While you can manage things on the web, the primary workflow for Aura Catalyst is for a developer to use the Catalyst CLI (Command Line Interface) on their own computer.
The "Function Editor" (on the web):
For quick edits, the web interface provides a simple code editor where you can write and save function code directly in the browser.
The "Data Store Browser":
A clean, spreadsheet-like interface for viewing and manually editing the data in your tables.
4. Data Entry & Modals
Creating a New Function (Modal): A pop-up that asks for the "Function Name," the "Function Type" (HTTP, Event, Cron), and the programming language (Node.js, Java, Python).
Configuring Authentication (Interface): A settings page with simple toggles to turn different login providers (Google, etc.) on or off.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Developer Setup" Flow: A developer wants to build a new app. They go to their own computer's terminal. They type catalyst init. The CLI asks them which features they want to use (Functions, Web Client, Data Store). It then creates a new project folder on their computer with all the correct configuration files.
The "API Backend" Flow: The developer writes code for an HTTP Function on their local computer. This function connects to the Data Store to get a list of products. They test it locally. When it's ready, they go to their terminal and type catalyst deploy. The Catalyst CLI automatically packages up their code, uploads it to the cloud, and deploys it. The developer is given a live, public URL for their new API endpoint, all without ever configuring a server.
The "Scheduled Report" Flow (Automation): A business needs to generate a complex report every night. A developer writes a Cron Function in Aura Catalyst. They set the schedule to "run every day at 1:00 AM." The function's code queries the main Aura CRM database, aggregates the data, and then uses the Aura Mail API to email the final report to the CEO. This entire process is serverless and runs automatically.
The "Full Stack App" Flow: A developer builds their React frontend locally. They run npm run build to create the final, optimized files. They then use the command catalyst deploy to push both their backend Functions and their frontend Web Client files to the cloud at the same time. Aura Catalyst hosts the website and powers its API, providing a complete, full-stack solution.`,
    "Checkout": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Checkout"
Global Search Bar: Placeholder: "Search by page name or transaction ID..."
Quick Create Button (+ Icon):
New Payment Page
Notifications Bell Icon: Alerts for "New payment received," "A payment has failed," etc.
Settings Gear Icon: Links to the main Checkout settings (gateways, branding).
User Profile Icon: Profile, Logout.
2. Aura Checkout Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "Total Revenue," "Successful Transactions Today," and a list of your most active payment pages.
Section: Payments
Icon: CreditCard
Pages:
Payment Pages: The main page. A list of all the checkout pages you have created. Each item shows the page name and its public URL.
Transactions: A complete log of every transaction processed through all your pages, filterable by status (Success, Failed).
Customers: A list of all customers who have made a payment.
Section: Management
Icon: Package
Pages:
Products: A simple catalog of the products or services you are selling through your checkout pages.
Coupons: A page to create and manage discount codes for your checkout pages.
Section: Administration
Icon: Settings
Pages:
Settings: The main settings page, with tabs for Branding (to add your logo), Payment Gateways (to connect Stripe, PayPal), and Email Notifications.
3. Page-Level Toolbars & Main Interface (The Page Builder)
The core of the app is the Payment Page Builder, a simple, single-page interface.
Left Panel (Page Configuration):
Pricing: Set the price. Choose "One-Time" or "Recurring" payment.
Fields: Checkboxes to decide which customer information to collect (e.g., "Collect Shipping Address," "Add a Custom Field").
Design: Options to change colors, add a logo, and customize the button text.
Right Panel (Live Preview):
A live, real-time preview of what the final checkout page will look like to your customers.
4. Data Entry & Modals
The primary data entry is the checkout page itself (what the customer sees). It's a clean, single page focused on securely capturing payment information.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Digital Product" Flow: A user has written an ebook. They go to Aura Checkout and click New Payment Page. They set the price to "$19" (one-time). In the settings, they configure an automatic email to be sent after a successful payment, which contains the download link for the ebook. They get a public URL for their new checkout page and put it on their website.
The "Consulting Retainer" Flow: A consultant agrees to a monthly retainer with a client. They create a new payment page, set the price to "$500," and select the "Recurring" option with a "Monthly" frequency. They send the unique link to their client. The client enters their card details once, and now Aura Checkout will automatically charge them $500 every month, saving the consultant from having to send manual invoices.
The "Quick Invoice" Flow: A user in Aura Books creates an invoice for a customer. They click a "Generate Payment Link" button. This automatically creates a temporary, pre-filled Aura Checkout page with the exact invoice amount. The user includes this link in the invoice email, giving the customer an instant, easy way to pay online.
`,
    "Cliq": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Cliq"
Global Search Bar: A powerful search bar that can find messages, files, and channels across all conversations. Placeholder: "Search in Cliq..."
Quick Create Button (+ Icon):
New Chat
New Channel
Start a Call
Notifications Bell Icon: This is less prominent, as notifications happen in real-time within the app itself.
Settings Gear Icon: Links to the main Cliq settings.
User Profile Icon: Shows user's status (Active, Away, Do Not Disturb), Profile, Logout.
2. Aura Cliq Internal Sidebar (The Main Navigation)
The entire application is typically a two or three-panel layout. The leftmost panel is the main sidebar.
Section: Main Views
Icon: MessageCircle
Pages:
Chats: The primary view. A list of all your recent conversations (direct messages and channels), ordered by the most recent activity. Unread messages are bolded.
Mentions: A dedicated feed that shows only the messages where someone has specifically @mentioned you.
Starred: A list of all the messages you have starred for quick access.
Section: Collaboration Spaces
Icon: Hash
Pages:
Channels: A collapsible directory of all the channels you are a member of.
Contacts: A searchable directory of all the people in your organization.
Teams: A way to organize contacts and channels by department or project team.
Section: Productivity
Icon: Zap
Pages:
Files: A central gallery of all files that have been shared in your chats and channels.
Reminders: A list of all reminders you have set from messages.
Bots & Tools: A directory of all installed bots and integrations.
3. Page-Level Toolbars & Main Interface (The Chat View)
The main interface is a multi-panel chat client.
Left Panel: The Internal Sidebar described above.
Center Panel (The Conversation):
This panel displays the selected chat or channel.
Header: Shows the channel name or the other person's name and status. Includes icons for starting an Audio Call or Video Call.
Message History: The main, scrollable history of the conversation.
Message Composer (at the bottom): The text box where you type your message.
Action Icons: Buttons to Attach File (from computer or Aura WorkDrive), Use Emoji, Record Audio Clip, Start a Poll, and Format Text.
Right Panel (Contextual Info - Optional):
A third panel can be opened to show more details about the current conversation.
Tabs: Channel Members, Pinned Messages, Shared Files, Apps & Integrations.
4. Data Entry & Modals
The Message Composer: The primary data entry is typing messages. Using @ mentions a person and notifies them. Using / opens a list of "slash commands" for bots and integrations (e.g., /poll "What should we have for lunch?" "Pizza" "Salad").
Creating a New Channel (Modal): A pop-up asks for the Channel Name, an optional Description, and a toggle to make it Public (anyone can join) or Private (invite only).
The Video Call Window: Starting a call opens a new window or modal with video feeds of the participants and controls for Mute, Start/Stop Video, and Share Screen.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Quick Question" Flow: A developer has a quick question for a designer. Instead of writing a formal email, they open Aura Cliq, find the designer in their Contacts, and send a direct message: "Hey, what is the hex code for our primary blue color?" The designer sees the message pop up and replies instantly: "#3B82F6." The conversation takes 10 seconds instead of 10 minutes.
The "Project Update" Flow: A project manager needs to give an update to the whole team. They go to the #project-phoenix Channel and post a message: "@here Quick update: The client has approved the mockups! We are clear to start development." Every member of the channel gets a notification.
The "Urgent Alert" Flow (Automation): An error is detected on the company's server by Aura's monitoring tools. An automated Bot instantly posts a message into the #dev-ops-alerts channel: "🚨 CRITICAL ERROR: Server CPU is at 99%! @on-call-engineer please investigate." The on-call engineer is immediately notified on their phone and can start working on the problem.
The "Message to Action" Flow: A manager posts in a channel: "Rohan, can you please prepare the sales report by Friday?" Rohan hovers over the message, clicks the "More Actions" (...) menu, and selects Create Task. This automatically creates a new task in Aura Projects titled "Prepare the sales report," with a due date of Friday, and a link back to the original Cliq message for context.`,
    "Commerce": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Commerce"
Global Search Bar: Placeholder: "Search by order number, product, or customer..."
Quick Create Button (+ Icon):
New Product
New Order (for manual/phone orders)
New Coupon
Notifications Bell Icon: Alerts for "New order received," "Product is low on stock," etc.
Settings Gear Icon: Links to the main Commerce settings page.
User Profile Icon: Profile, Logout.
2. Aura Commerce Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main store overview. Widgets for "Total Sales Today," "Live Visitors," "Top Selling Products," a sales graph, and a feed of recent orders.
Section: Store Management
Icon: ShoppingCart
Pages:
Orders: The central hub for order fulfillment. A list of all orders, with statuses like "Pending," "Awaiting Shipment," "Shipped," "Completed."
Products: A list of all products in the store. Includes sub-pages for Categories, Brands, and Product Reviews.
Customers: A list of all registered customers and their order history.
Inventory: A dedicated section to manage stock levels for all products and variants (integrates with Aura Inventory).
Section: Marketing
Icon: Megaphone
Pages:
Promotions: A page to create and manage Coupons, Discounts, and Gift Cards.
Campaigns: A section for marketing tools, including Abandoned Cart Recovery emails and integrations with Aura Campaigns.
SEO & Social: Tools to manage SEO settings for product pages and connect social media accounts.
Section: Online Store
Icon: Globe
Pages:
Theme Customizer: A visual, drag-and-drop builder to customize the look and feel of the storefront (similar to Aura Sites but with e-commerce sections).
Navigation: A tool to manage the main menus of the online store.
Blog: A built-in blogging platform for content marketing.
Pages: A tool to create static pages like "About Us" or "Contact Us."
Domains: A page to connect a custom domain to the store.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Sales by Product," "Traffic Sources," "Conversion Rate," and "Customer Lifetime Value."
3. Page-Level Toolbars & Main Interface
On the "Orders" Page:
Title: "Orders"
Primary Button: + New Order
Filters: "Filter by Status," "Filter by Date," "Filter by Customer."
Bulk Actions: Checkboxes to select multiple orders and then Print Packing Slips or Mark as Shipped.
On a "Single Order Detail" Page:
Shows all order details: customer info, shipping address, products ordered, and a timeline of the order's history.
Action Buttons: Print Invoice, Create Shipping Label, Fulfill Order, Issue Refund.
On a "New Product" Page (Full Page Form):
A detailed form with sections for "Product Title & Description," "Images & Videos," "Pricing," "Inventory & SKU," and "Variants" (e.g., Size, Color).
4. Data Entry & Modals
Fulfilling an Order (Modal): When a user clicks "Fulfill Order," a modal pops up to confirm the items, enter the shipping carrier, and input a tracking number.
Creating a Coupon (Modal): A pop-up form to define a new discount code, with options for "Percentage Discount" vs. "Fixed Amount," usage limits, and expiration dates.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Product" Flow: A store owner wants to add a new t-shirt. They go to Products -> New Product. They fill out the title, write a description, and upload photos. In the "Variants" section, they add options for "Size" (Small, Medium, Large) and "Color" (Red, Blue), and the system automatically creates all the combinations. They set the price and initial stock quantity for each variant and click Save. The new t-shirt is now live on their online store.
The "Order Fulfillment" Flow: A new order notification appears. The owner goes to the Orders page and clicks on the new order. They see the customer's details and the product ordered. They click Print Packing Slip. They physically pack the product in a box, then come back and click Create Shipping Label. They enter the package weight and dimensions, buy the postage, and print the label. Finally, they click Fulfill Order and enter the tracking number. The customer automatically receives an email saying, "Your order has shipped!" and the order status updates to "Shipped."
The "Abandoned Cart" Flow (Automation): A visitor adds a product to their cart but leaves the website without buying. Aura Commerce automatically detects this. After 3 hours, an automated email is sent to the visitor from the Abandoned Cart Recovery campaign, saying "Did you forget something?" and includes a picture of the item and a direct link to complete their checkout.`,
    "CommunitySpaces": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura CommunitySpaces"
Global Search Bar: Placeholder: "Search for posts, topics, or members..."
Quick Create Button (+ Icon):
New Post
New Event
Notifications Bell Icon: Alerts for "Someone replied to your post," "You have a new direct message," etc.
Settings Gear Icon: Links to the main community administration settings.
User Profile Icon: Links to the user's public community profile, direct messages, and logout.
2. Aura CommunitySpaces Internal Sidebar
This sidebar is focused on navigation within the community.
Section: Home
Icon: Home
Pages:
Home Feed: The main page. A personalized feed showing the latest and most popular posts from all the channels the user follows.
Section: Content
Icon: FileText
Pages:
Channels: A list of all topic-based discussion channels (e.g., "General Discussion," "Product Feedback," "Feature Requests"). Users can browse and join channels.
Knowledge Base: A dedicated area with official articles and guides written by the company.
Events: A calendar of upcoming community events, like webinars or user group meetups.
Section: People
Icon: Users
Pages:
Member Directory: A searchable list of all community members.
Leaderboard: A page showcasing the most active and helpful members, based on a gamification system.
Section: Personal
Icon: User
Pages:
My Profile: The user's public profile page within the community.
My Posts: A list of all the discussions the user has started.
Direct Messages: A private inbox for 1-on-1 conversations with other members.
Section: Admin Tools (Visible only to moderators/admins)
Icon: Shield
Pages:
Moderation Queue: A queue of posts and comments that have been flagged for review.
Analytics: A dashboard with community health metrics (new members, active users, popular topics).
Settings: The main administration panel to manage channels, user roles, and gamification rules.
3. Page-Level Toolbars & Main Interface
On a "Channel" Page:
Title: The Channel Name (e.g., "# Product Feedback").
Primary Button: + New Post
Filters: "Sort by Latest," "Sort by Most Popular."
The Post/Discussion View:
The main content is the original post at the top.
Below are the threaded replies and comments from other users.
Each post and comment has action buttons: Reply, Like, and a "More Actions" (...) menu with options like Report or Bookmark.
4. Data Entry & Modals
Creating a New Post (Modal or Page):
A rich text editor for writing the post.
Fields to add a "Title" and a dropdown to select the Channel.
Buttons to attach images or files.
Editing a Profile (Page):
A dedicated settings page where a user can upload a profile picture, write a bio, and add links to their social media.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Ask a Question" Flow: A user has a question about a product. They go to the Aura Community, find the "# Q&A" Channel, and click New Post. They write their question. A few hours later, another, more experienced user (a "power user") replies with a helpful answer. The original user marks the reply as the "Best Answer," which helps future users with the same question. This workflow reduces the burden on the official support team in Aura Desk.
The "Feedback" Flow: A product manager wants to get feedback on a new feature idea. They create a new post in the "# Feature Requests" channel explaining the idea and adding a Poll to gauge interest. Community members vote and leave detailed comments with their thoughts. The product manager now has valuable, real-world feedback to guide their development.
The "Engagement" Flow (Gamification): A user consistently provides helpful answers to questions. The system automatically awards them points for each "Best Answer" they receive. When they reach 1,000 points, they are automatically awarded the "Community Expert" Badge, which appears on their profile, and they move up the Leaderboard. This encourages positive and helpful behavior.`,
    "Connect": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Connect"
Global Search Bar: Placeholder: "Search posts, groups, files, or people..."
Quick Create Button (+ Icon):
New Post
New Group
New Event
Notifications Bell Icon: Alerts for "You were mentioned in a post," "Someone liked your comment," "New company-wide announcement," etc.
Settings Gear Icon: Links to the main Connect settings.
User Profile Icon: Links to the user's detailed Connect profile.
2. Aura Connect Internal Sidebar
This sidebar is designed for easy navigation through different types of content and collaboration spaces.
Section: Home
Icon: Home
Pages:
Feed: The main, central page. A personalized feed of posts from the groups you are in, the people you follow, and company-wide announcements.
Section: Collaboration Spaces
Icon: Users
Pages:
Groups: A directory of all public and private groups within the company (e.g., "#Marketing-Team," "#Social-Committee," "#Project-Phoenix"). Users can browse and join groups.
Channels: A simpler, chat-focused space for real-time team discussions (integrates with Aura Cliq).
Forums: A dedicated section for structured, long-form Q&A and discussions.
Section: Knowledge
Icon: BookOpen
Pages:
Manuals (Wiki): A collaborative knowledge base where teams can create and edit articles and company documentation.
Files: A central library of all files shared within Connect groups and posts.
Section: Company
Icon: Building2
Pages:
Events: A company-wide calendar of events, from town halls to team outings.
People: The employee directory, with rich profiles showing each person's department, role, skills, and recent posts.
Town Halls: A special section for live video broadcasts from leadership.
Section: Personal
Icon: User
Pages:
My Profile: Your personal page to manage your profile information.
My Bookmarks: A list of all the posts and articles you have saved.
3. Page-Level Toolbars & Main Interface (The Feed)
The core of the app is the Feed, which looks and feels like a modern social network.
At the top of the Feed:
A "What's on your mind?" composer box, allowing users to quickly write a new post. It includes buttons to Attach File, Create Poll, or Tag People.
Each Post in the Feed:
Shows the author's name and picture, the content of the post, and any attached images or files.
Action buttons at the bottom of each post: Like, Comment, Share.
A "More Actions" (...) menu with options like Bookmark, Edit Post (if it's yours), or Report Post.
The Group Page:
Has its own internal navigation with tabs for Feed, Files, Tasks, and Events specific to that group.
4. Data Entry & Modals
Creating a New Post (Inline Composer or Modal): The primary data entry is the post composer, which is a rich text editor.
Creating a Poll (Modal): Clicking the poll option opens a simple modal to type a question and the multiple-choice answers.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Company Announcement" Flow: The CEO wants to make an important announcement. An HR manager goes to Aura Connect, writes a post in the special, company-wide "Announcements" feed. Every employee receives a notification. Employees can "Like" the post to acknowledge they have seen it and ask questions in the comments, creating a two-way dialogue.
The "Project Collaboration" Flow: A new project begins. The project manager creates a new, private Group called "#Project-Phoenix." They invite all the team members. Inside this group, they share files, post updates, and use the integrated Tasks module to manage their work. All project communication is now centralized in one place, instead of being scattered across emails and chat messages.
The "Knowledge Sharing" Flow: A senior developer discovers a new, better way to write a piece of code. They go to the Manuals (Wiki) section and write a short article explaining the new technique. They share a link to this article in the "#Developers" group. Now, all other developers in the company can learn from this new best practice, and the knowledge is saved permanently for future new hires.
`,
    "Contracts": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Contracts"
Global Search Bar: A powerful search that can find contracts by title, counterparty, or even by searching the full text within the document. Placeholder: "Search all contracts..."
Quick Create Button (+ Icon):
New Contract (from a template or blank)
Notifications Bell Icon: Alerts for "A contract is awaiting your approval," "A contract is nearing its renewal date," "A counterparty has added comments," etc.
Settings Gear Icon: Links to the main Contracts administration settings.
User Profile Icon: Profile, Logout.
2. Aura Contracts Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Contracts Awaiting My Action," "Recently Executed Contracts," "Contracts Expiring in 90 Days," and a chart showing "Contracts by Stage."
Section: Contracts
Icon: FileText
Pages:
All Contracts: The master repository of every contract in the organization, filterable by status, type, or counterparty.
My Contracts: Contracts that I own or am a key stakeholder in.
Shared with Me: Contracts shared for my review or approval.
Section: Library
Icon: BookOpen
Pages:
Templates: A library of pre-approved, reusable contract templates (e.g., "Standard NDA," "Master Service Agreement").
Clause Library: A critical feature. A collection of pre-approved, standardized legal clauses (e.g., "Limitation of Liability," "Confidentiality") that can be inserted into contracts to ensure consistency and reduce risk.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Contract Cycle Time" (how long it takes to get a contract signed), "Risk Analysis" (which contracts have non-standard clauses), and "Renewal Pipeline."
Section: Administration (Admin only)
Icon: Settings
Pages:
Approval Workflows: A visual builder to create multi-step approval chains (e.g., "First, it must be approved by the Sales Manager, then by the Legal Department").
User Roles & Permissions: Define who can create, view, or approve different types of contracts.
3. Page-Level Toolbars & Main Interface (The Contract Workflow View)
The core of the application is the Contract Detail View, which shows a contract's progress through its lifecycle.
Top Bar: Displays the contract title and its current Status (e.g., Drafting, Internal Approval, Negotiation, Signature, Active). A visual "progress bar" often shows the stages.
Left Panel (The Document):
A view of the contract document itself, often using an embedded Aura Writer editor.
Right Panel (The Control Panel):
A tabbed interface with all the metadata and collaboration tools.
Tab: Details: Shows key information like "Counterparty," "Effective Date," "Renewal Date," and "Contract Value."
Tab: Approvals: Shows the approval workflow, indicating whose approval is pending.
Tab: Collaboration: A threaded view of all Comments and a Version History of the document.
Tab: Signatures: Shows the status of the e-signature process (integrates with Aura Sign).
4. Data Entry & Modals
Creating a New Contract (Wizard): A user clicks New Contract. A modal asks them to choose a Template. The system then generates a new draft, and the user fills in the variable fields (like the client's name and the dollar amount).
Starting an Approval Workflow (Action): When a user finishes drafting, they click a prominent "Submit for Approval" button. This automatically sends notifications to the first person in the pre-defined approval workflow.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Sales Contract" Flow: A salesperson in Aura CRM closes a deal. They click a "Generate Contract" button. This automatically opens Aura Contracts, selects the "Sales Agreement" Template, and pre-fills the client's information from CRM. The salesperson reviews the draft and clicks Submit for Approval. The contract is automatically sent to their manager.
The "Legal Review" Flow: The sales manager receives a notification and approves the contract. The workflow automatically sends it to the Legal Department queue. A lawyer opens the contract. They notice a risky clause, so they use the Clause Library to replace it with the company's standard, pre-approved version. They then approve the contract.
The "Execution" Flow: Once all internal approvals are complete, the system automatically sends the contract to the client for signature via the Aura Sign integration. After the client signs, the system automatically countersigns and distributes the final, executed copy to all parties. The contract Status updates to "Active."
The "Renewal" Flow (Automation): 90 days before the contract's expiration date, the system automatically creates a Task in Aura CRM and assigns it to the salesperson, reminding them to start the renewal conversation with the client.`,
    "Creator": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Creator"
Global Search Bar: Placeholder: "Search by application, form, or report name..."
Quick Create Button (+ Icon):
New Application
Notifications Bell Icon: Alerts for "Your new app has been published," "A workflow has failed," etc.
Settings Gear Icon: Links to the main Creator account settings (API keys, etc.).
User Profile Icon: Profile, Logout.
2. Aura Creator Internal Sidebar
This sidebar is contextual. The main dashboard has a simple sidebar. Once you open a specific application to edit it, a much more detailed builder sidebar appears.
Main Dashboard Sidebar
Icon: Home
Pages:
Dashboard: An overview showing a grid of all your created applications.
All Applications: A list view of your applications.
Marketplace: A gallery of pre-built applications and extensions.
Templates: A list of application templates to start from.
Application Builder Sidebar (Appears after selecting an application)
Section: Design
Icon: Palette
Pages:
Forms: The core of data collection. A list of all forms in your application. You can Create New Form here.
Reports: The core of data display. A list of all reports (lists, calendars, Kanban boards). You can Create New Report here.
Pages: The core of the UI. A list of all custom dashboard pages. You can Create New Page here using a page builder.
Section: Automation
Icon: Zap
Pages:
Workflows: The most powerful feature. A list of all automation rules. You can Create New Workflow to run code on events like "On Form Submit" or "On a Schedule."
Connections: A page to manage connections to other AURA apps and external services (e.g., connect to the Aura CRM API).
Section: Administration
Icon: Settings
Pages:
Users & Permissions: A page to manage who can access and use your custom application.
Settings: General settings for your application, like its name, icon, and custom domain.
Mobile: A section to configure and get the installable files for the native mobile version of your app.
3. Page-Level Toolbars & Main Interface (The Builders)
The application consists of several powerful visual builders.
The Form Builder:
A drag-and-drop interface.
Left Panel: A library of field types (Text, Number, Date, Image Upload, Lookup to link to other forms).
Center Panel: A canvas where you build the form.
The Page Builder:
A drag-and-drop interface for creating custom dashboards.
Left Panel: A library of widgets (Chart, Panel, Button, Embed Form, Embed Report).
Center Panel: A canvas where you arrange the widgets to build your UI.
The Workflow Builder:
A code editor for writing business logic using a simplified, powerful scripting language (like Zoho's Deluge).
It has a drag-and-drop builder for simple "if-then" logic and a full code editor for advanced tasks.
4. Data Entry & Modals
The data entry happens in the live version of the custom application you build.
The "Lookup" Field: This is a key feature. When building a form, you can add a "Lookup" field that links to another form. In the live app, this field becomes a searchable dropdown that lets you connect records (e.g., linking an "Invoice" record to a "Customer" record).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Simple App" Flow: An HR manager needs a simple app to track company-owned laptops. They go to Aura Creator and Create a New Application. They use the Form Builder to create a "Laptops" form with fields for "Serial Number," "Model," and a Lookup field to connect to an "Employees" form. They then create a Report to show a list of all laptops. In 15 minutes, they have built a custom asset tracking app.
The "Automation" Flow: In their new asset tracking app, the HR manager wants an email to be sent to the IT department when a laptop's "Status" is changed to "Needs Repair." They go to the Workflows section and create a new rule. The Trigger is "On User Edit" of a laptop record. They add a Condition: IF "Status" is changed to "Needs Repair". The Action is "Send Email" to it-support@aura.com. The automation is now live.
The "Professional App" Flow (Integration): A developer is building a complex logistics application. They use Aura Creator to build the entire frontend and business logic. They use the Connections feature to make secure API calls to Aura Maps for route optimization and to Aura Sign for signing delivery confirmations. They are using Aura Creator as a powerful "backend-as-a-service" to build a complex system much faster than with traditional coding.`,
    "DataPrep": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura DataPrep"
Global Search Bar: Placeholder: "Search by dataset, data source, or recipe..."
Quick Create Button (+ Icon):
Import Data
Notifications Bell Icon: Alerts for "Scheduled data sync complete," "Data quality rule failed," etc.
Settings Gear Icon: Links to the main DataPrep administration settings.
User Profile Icon: Profile, Logout.
2. Aura DataPrep Internal Sidebar
This sidebar is focused on managing data sources and preparation projects.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows "Recent Datasets," "Active Data Syncs," and a summary of "Data Quality Scores."
Section: Data Management
Icon: Database
Pages:
Projects: The primary workspace. A "Project" is a container for a data preparation workflow. This page shows a list of all projects.
Data Sources: A central place to manage all your connections to databases, cloud apps (like Aura CRM), and cloud storage (like Aura WorkDrive).
Datasets: A master catalog of all the data that has been imported into the system.
Section: Automation
Icon: Zap
Pages:
Schedules: A page to manage and monitor scheduled data preparation jobs.
Section: Administration
Icon: Settings
Pages:
Settings: General account and security settings.
Connections: Manage credentials for all your data sources.
3. Page-Level Toolbars & Main Interface (The Data Prep Studio)
The core of the application is the Data Prep Studio, which opens when you select a dataset to work on.
Top Bar: Displays the name of the dataset.
Main View (The Data Grid):
A large, spreadsheet-like grid showing a preview of your data.
Crucial Feature: Above each column header is a Data Quality Bar that visually shows what percentage of the data in that column is valid, invalid, or missing.
Right Panel (Transformations & Recipe):
This is the main control panel.
AI Suggestions: At the top, the AI (Zia) automatically suggests cleaning operations based on its analysis of the data (e.g., "This column looks like a date but is formatted as text. Convert to Date?").
Transformations Library: A searchable list of hundreds of pre-built data transformations, grouped by category:
Cleanse: Remove Duplicates, Fill Missing Values, Trim Whitespace.
Transform: Split Column, Merge Columns, Format Date, Extract Text.
Enrich: Join with another dataset.
Recipe: As you apply transformations, each step is automatically added to a "Recipe" list at the bottom. This creates a reusable, editable workflow. You can undo, reorder, or delete steps from the recipe.
4. Data Entry & Modals
Import Data (Wizard): A multi-step wizard to connect to a new data source. It provides a live preview of the data and allows you to select which tables or sheets to import.
Transformation Configuration (Modal): Clicking on a transformation (e.g., "Split Column") opens a modal pop-up with specific options (e.g., "Split by which delimiter?", "How many new columns to create?").
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Messy CSV" Flow: A user uploads a CSV file of sales leads. They open it in the Data Prep Studio. The Data Quality Bar for the "Phone Number" column is mostly red, showing many invalid entries. The AI Suggests a transformation to "Standardize Phone Numbers to a consistent format." The user clicks "Apply." Next, they see the "Full Name" column. They use the "Split Column" transformation to split it into "First Name" and "Last Name" columns. They see that many "Country" fields are misspelled. They use the "Cluster and Merge" tool to group similar values (like "U.S.A." and "United States") and merge them into one consistent value. Once the data is clean, they click "Export" and send the prepared dataset directly to Aura CRM.
The "Automated ETL" Flow (Advanced): A data engineer needs to combine sales data from Aura Commerce with support data from Aura Desk every night. They create a new Project. They connect to both data sources. They build a Recipe that joins the two datasets, calculates a new "Customer Health Score" column, and removes unneeded columns. They then go to the Schedules page and set this recipe to run every night at 2:00 AM. The final, cleaned dataset is automatically exported to a "Master Customer Table" in Aura Analytics for the executive team to view in their dashboards the next morning.`,
    "Desk": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Desk"
Global Search Bar: Placeholder: "Search by ticket ID, customer email, or keyword..."
Quick Create Button (+ Icon):
New Ticket (for creating a ticket on behalf of a customer)
Notifications Bell Icon: Alerts for "New ticket assigned to you," "Customer has replied," "SLA is about to be breached," etc.
Settings Gear Icon: Links to the main Desk administration settings.
User Profile Icon: Shows agent online/offline/break status, Profile, Logout.
2. Aura Desk Internal Sidebar
Section: Home
Icon: Home
Pages:
Agent Dashboard: The main landing page for support agents. Shows widgets for "My Open Tickets," "My Overdue Tickets," "My CSAT Score" (Customer Satisfaction), and a feed of recent activity.
Team Dashboard: A view for managers showing overall team performance, "Unassigned Tickets," and "Tickets by Channel."
Section: Tickets
Icon: MessageSquare
Pages:
All Tickets: The central view. A list/table of all tickets in the helpdesk.
Ticket Views: The most important part of the sidebar. A list of pre-defined and custom filters to see specific sets of tickets. Examples:
My Open Tickets
Unassigned Tickets
All Open Tickets
Overdue Tickets
Tickets Closing Today
(Users can Create New View with custom rules)
Section: Knowledge
Icon: BookOpen
Pages:
Knowledge Base: A library of all internal and public help articles. All Articles, New Article, Categories.
Community Forums: A space for user-to-user support and discussions.
Section: Customers
Icon: Users
Pages:
Contacts: A list of all customers who have submitted tickets.
Accounts: A list of all companies, showing all tickets associated with that company.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "First Response Time," "Ticket Resolution Time," "Agent Performance," and "Busiest Times of Day."
3. Page-Level Toolbars & Main Interface (The Ticket View)
The primary interface is the Ticket Detail View.
Left Panel (Ticket List):
A list of tickets based on the current "View" selected in the sidebar. The currently selected ticket is highlighted.
Center Panel (The Conversation):
The main area. It shows the entire conversation history of the ticket in a threaded, chronological view.
At the top, there is a Reply Editor where the agent can type their response, apply Templates (canned responses), and attach files.
The Reply button has a dropdown with options like Reply and Set as Resolved.
Right Panel (Ticket Properties):
A panel showing all the metadata for the ticket.
Dropdowns: Status (Open, In Progress, Closed), Priority (High, Medium, Low), Assignee (which agent is working on it).
Customer Info: Shows details about the customer who submitted the ticket, pulled directly from Aura CRM. Includes their name, email, and a list of their recent tickets.
Time Tracking: A section to log time spent working on the ticket.
4. Data Entry & Modals
Creating a New Article (Full Page): A rich text editor for writing knowledge base articles, with options to publish them internally (for agents only) or publicly.
Merging Tickets (Modal): If a customer sends two emails about the same issue, the agent can select both tickets in the list and click a "Merge" button. A modal pops up to confirm which ticket will be the primary one.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Ticket" Flow: A new email comes into support@aura.com. Aura Desk automatically creates a new ticket and places it in the Unassigned Tickets view. An automation rule might automatically assign it to a specific team based on keywords in the subject line.
The "Agent Workflow": An agent starts their day. They open the My Open Tickets view. They click on the oldest ticket. They read the customer's question. In the Right Panel, they see the customer's history from Aura CRM. The agent realizes this is a common question, so in the Center Panel, they use a Template to insert a pre-written answer. They add a personal touch, click Reply and Set as Resolved, and then move to the next ticket in their queue.
The "Escalation" Flow (Automation): A high-priority ticket has not been answered for 2 hours, which is a violation of its SLA (Service Level Agreement). Aura Desk automatically reassigns the ticket to a senior support manager and sends them a notification in Aura Cliq, ensuring the customer gets a response.
The "Self-Service" Flow: A customer has a simple question. Instead of emailing support, they go to the company's website and open the "Help Center" (powered by the Aura Desk Knowledge Base). They type their question into a search bar, find the relevant article, and solve their own problem without ever creating a ticket.
`,
    "Directory": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Directory"
Global Search Bar: Placeholder: "Search by user, group, or application..."
Quick Create Button (+ Icon) (Admin only):
New User
New Group
Add Application
Notifications Bell Icon: Alerts for "Suspicious login detected," "New user has been successfully provisioned," etc.
Settings Gear Icon: Links to the main Directory settings.
User Profile Icon: Profile, Logout.
2. Aura Directory Internal Sidebar
This sidebar is for the IT administrator. Regular users interact with the Directory through a simplified "My Apps" dashboard.
Section: Home
Icon: Home
Pages:
Dashboard: The main security and identity overview. Widgets for "Total Users," "Total Apps," "Recent Login Activity" (with a map), and "Security Health" score.
Section: Directory
Icon: Users
Pages:
Users: The master list of all user accounts in the organization.
Groups: A list of all user groups (e.g., "Sales Team," "Developers," "Admins"). Users can be added to groups to manage permissions in bulk.
Devices: A list of all devices (laptops, phones) that are managed by the directory.
Section: Applications
Icon: Grid
Pages:
Applications: The core feature. A list of all the applications (both AURA apps and external apps like Salesforce or Office 365) that are connected to the directory.
App Catalog: A gallery of pre-built integrations to easily add new applications.
Section: Security
Icon: Shield
Pages:
Authentication: A page to manage login policies. Includes sub-pages for Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Password Policies (e.g., password length, complexity).
Access Policies: Create advanced, conditional access rules (e.g., "Block logins from outside our home country," "Require MFA if a user logs in from a new device").
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of security and usage reports.
Audit Logs: A detailed, unchangeable log of every single event that has occurred (who logged in, who was granted access to an app, who changed a policy, etc.).
3. Page-Level Toolbars & Main Interface
The User's View ("My Apps" Dashboard):
When a regular user logs in, they see a simple, clean dashboard with large, clickable icons for all the applications they have been granted access to. This is their personal launchpad.
On the "Applications" Page (Admin View):
A grid of all connected applications.
Clicking on an application opens its detail page.
On a "Single Application Detail" Page:
A tabbed interface.
Tab: Assignments: A page to assign this application to specific Users or Groups.
Tab: Sign-On: A technical page to configure the SSO settings (SAML, OpenID Connect).
Tab: Provisioning: A page to set up automatic user creation/deactivation (e.g., "When I add a user to the 'Sales' group, automatically create an account for them in Salesforce").
4. Data Entry & Modals
Assigning an App to a Group (Modal): An admin clicks "Assign" on an application. A pop-up appears where they can search for and select user groups.
Configuring MFA (Wizard): A step-by-step wizard to help the admin enable and configure different MFA options for the organization.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Hire" Flow (Automation): An HR manager creates a new employee in Aura People. This automatically triggers a workflow in Aura Directory. A new user account is created. The user is added to the "New Hires" group. This group membership automatically grants them access to a pre-defined set of applications: Aura Mail, Aura Cliq, and Aura Connect. The new hire receives one welcome email with one password. When they log into their "My Apps" dashboard for the first time, all the tools they need are already there.
The "Single Sign-On" Flow: A user wants to access Aura CRM. They go to the CRM login page. The page redirects them to the Aura Directory login page. They enter their single username and password. The system then instantly and securely logs them into Aura CRM without them having to remember a separate password.
The "Offboarding" Flow (Security): An employee leaves the company. The HR manager marks them as "Terminated" in Aura People. This automatically triggers a workflow in Aura Directory. The user's account is instantly deactivated. This one single action immediately revokes their access to all connected applications (Aura apps, Salesforce, Office 365, etc.), securing the company's data in seconds.
`,
    "Domains": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Domains"
Global Search Bar: This is the primary feature. A large, prominent search bar with the placeholder: "Find your perfect domain name..."
Quick Create Button (+ Icon): This would be less prominent, perhaps just a link to the main dashboard.
Notifications Bell Icon: Alerts for "Domain is expiring soon," "Domain transfer complete," etc.
Settings Gear Icon: Links to the main Domains settings page (billing, account info).
User Profile Icon: Profile, Logout.
2. Aura Domains Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main page after logging in. It features the prominent "Search for a new domain" bar at the top and a list of "My Domains" below it.
Section: Domains
Icon: Globe
Pages:
My Domains: A complete list of all domains you own through Aura Domains. Each domain in the list shows its status (Active, Expiring Soon) and its renewal date.
Register a Domain: The main search interface for finding and buying a new domain.
Transfer a Domain: A step-by-step wizard to transfer a domain you already own from another registrar (like GoDaddy) into Aura Domains.
Section: Administration
Icon: Settings
Pages:
Billing: Manage payment methods and view your billing history for domain purchases and renewals.
Account Settings: Manage your contact information, which is used for domain registration (WHOIS).
3. Page-Level Toolbars & Main Interface (The Domain Management Panel)
The core of the application is the management panel you see after clicking on a specific domain in your My Domains list. This is a tabbed interface.
Top Bar for a Selected Domain: Shows the domain name (my-aura-empire.com) and its expiration date.
Tabs within the Management Panel:
DNS Records: The most important tab. A table-like interface to manage your DNS records.
Buttons to + Add New Record.
A list of existing records (A, CNAME, MX, TXT) with options to Edit or Delete each one.
Often includes pre-set templates to easily connect the domain to other AURA apps (e.g., a "Connect to Aura Sites" button that automatically adds the correct records).
Email Forwarding: A simple interface to create email forwards (e.g., forward contact@my-aura-empire.com to your personal Gmail).
SSL Certificates: A page to manage the SSL certificate that provides the "https" security for your domain.
WHOIS & Privacy: A page to view and edit the public contact information for your domain, with a toggle to turn on "WHOIS Privacy Protection."
Security: A page to manage the "Domain Lock," which prevents unauthorized transfers.
Renewal & Billing: A page to manage auto-renewal settings for the domain.
4. Data Entry & Modals
The Domain Search Experience: When a user searches for a domain, the interface shows a results page. The exact domain they searched for is at the top with a price and a "Buy" button. Below, it provides a long list of alternative suggestions with different endings (.net, .io, .co) and creative variations.
Adding a DNS Record (Modal): Clicking + Add New Record opens a simple pop-up form with dropdowns to select the record Type (A, CNAME, etc.) and text boxes for the Host (e.g., "www") and Value (e.g., an IP address).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Website" Flow: A user has just built a site in Aura Sites. They come to Aura Domains, search for my-new-business.com, and see that it is available. They buy it. Then, they go to the DNS Records tab for their new domain, click a pre-set button that says "Point to Aura Sites," and the system automatically configures all the records. An hour later, their new website is live at their custom domain.
The "Professional Email" Flow: A user wants a professional email address. In the DNS Records tab for their domain, they click another pre-set button, "Configure for Aura Mail." The system automatically adds the correct MX records. They can now go to the Aura Mail app and create an account for rohan@my-new-business.com.
The "Domain Transfer" Flow: A user is tired of their old domain registrar. They start the "Transfer a Domain" wizard in Aura Domains. The wizard gives them a checklist: 1. Unlock the domain at your current registrar. 2. Get the "Authorization Code." 3. Enter the code here. After they enter the code, the transfer process begins, which can take several days to complete.
`,
    "EmbeddedBI": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Embedded BI"
Global Search Bar: Placeholder: "Search by solution, dashboard, or user..."
Quick Create Button (+ Icon) (Admin/Dev only):
New Solution
Notifications Bell Icon: Alerts for "API usage is nearing its limit," "A new user has been provisioned," etc.
Settings Gear Icon: Links to the main Embedded BI administration settings.
User Profile Icon: Profile, Logout.
2. Aura Embedded BI Internal Sidebar
This sidebar is for the developer or product manager who is building the embedded analytics experience.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows "Active Embedded Solutions," "API Call Volume," "Total End Users," and links to developer documentation.
Section: Management
Icon: Folder
Pages:
Solutions: The primary workspace. A "Solution" is a container for a complete embedded analytics project for one of your applications. This page lists all your solutions.
Data Sources: A central place to manage the data sources that your embedded analytics will use.
Section: Development
Icon: Code
Pages:
API & SDKs: The most critical page. Contains API Keys, detailed API Documentation, and links to download JavaScript SDKs and other developer tools.
Security: A page to manage the security rules, including setting up Single Sign-On (SSO) so your application's users are seamlessly logged into the analytics.
Section: Branding
Icon: Palette
Pages:
White-Labeling: A page to customize the embedded experience. You can Upload Your Logo, set custom Color Schemes, and manage other branding elements to make the analytics look like a native part of your own application.
3. Page-Level Toolbars & Main Interface (The Solution Builder)
The core of the app is the Solution Builder, which is a powerful, embedded version of the Aura Analytics builder.
When you open a "Solution," the interface looks very much like Aura Analytics:
Sidebar: Shows the Dashboards, Reports, and Data tables for this specific solution.
Main View: The Report Builder or Dashboard Builder canvas.
The Key Difference: The top toolbar has a prominent Embed button.
The "Embed" Modal:
Clicking the Embed button on a dashboard opens a modal.
It provides a secure, signed Embed URL.
It also provides ready-to-use code snippets (e.g., for an <iframe> or using the JavaScript SDK) that a developer can copy and paste directly into their own application's code.
4. Data Entry & Modals
Data entry is primarily about configuration.
White-Labeling Interface: A visual editor where you can upload a logo and use color pickers to define the branding for your embedded dashboards.
SSO Configuration (Wizard): A technical, multi-step wizard to configure the security connection between your main application and the Aura Embedded BI platform.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "SaaS Company" Flow: Imagine a company that sells a project management app. They want to add a beautiful "Analytics" tab to their app for their customers. Instead of spending a year building it themselves, they use Aura Embedded BI.
Their developer creates a Solution.
They connect it to their application's database (Data Sources).
They use the Dashboard Builder to create a "Project Progress Dashboard."
They use the White-Labeling tools to make the dashboard's colors and fonts match their app's branding perfectly.
They set up SSO so their users are automatically and securely logged in.
Finally, they click the Embed button, copy the code snippet, and paste it into their own application's code.
The "End User" Flow: A customer logs into the project management app. They click on the new "Analytics" tab. They instantly see the beautiful, interactive "Project Progress Dashboard," showing charts of their own data. It looks and feels like a native part of the app. The customer has no idea it is secretly being powered by Aura Embedded BI.
The "Data Security" Flow: The project management app has thousands of customers. The developer uses the powerful security features of Aura Embedded BI to ensure that when a user from "Company A" logs in, they can only see the data for Company A's projects. The data is completely segregated and secure for each customer.`,
    "Expense": `
Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Expense"
Global Search Bar: Placeholder: "Search by report name, employee, or vendor..."
Quick Create Button (+ Icon):
New Expense
New Report
Notifications Bell Icon: Alerts for "Your expense report has been approved," "A report is awaiting your approval," "An expense violates company policy," etc.
Settings Gear Icon: Links to the main Expense administration settings.
User Profile Icon: Profile, Logout.
2. Aura Expense Internal Sidebar
This sidebar is role-based, showing different options for Employees versus Approvers/Admins.
A) Employee Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main employee view. Widgets for "Unreported Expenses," "Reports in Draft," "Reports Awaiting Approval," and "Recent Reimbursements."
Section: Actions
Icon: Plus
Pages:
Add Expense: Opens the quick expense creation form.
Create Report: Starts a new expense report to group expenses.
Section: Management
Icon: Briefcase
Pages:
My Expenses: A list of all individual expense entries.
My Reports: A list of all expense reports, with their status (Draft, Submitted, Approved, Reimbursed).
My Cards: A view of corporate card transactions that need to be expensed.
B) Admin/Approver Sidebar (Includes all of the above, plus...)
Section: Approvals
Icon: CheckCircle
Pages:
Reports for Approval: The primary workspace for managers. A queue of all expense reports waiting for their review.
Section: Financial Control
Icon: DollarSign
Pages:
Reimbursements: A page for the finance team to process payments for approved reports.
Corporate Cards: A dashboard to manage the company's corporate card program and reconcile transactions.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Spending by Category," "Top Spenders," "Policy Violations," and "Expense by Project."
Section: Administration
Icon: Settings
Pages:
Policies: The core of the automation. A page to create and manage expense policies (e.g., "Lunch cannot exceed $25," "Flights must be booked in Economy").
Categories: Manage the list of expense categories.
Approval Workflows: Create multi-level approval chains.
3. Page-Level Toolbars & Main Interface
The Employee's Mobile App Experience: This is the most critical interface.
A large + button on the home screen.
Tapping it gives two options: Scan Receipt or Add Expense Manually.
Scan Receipt opens the phone's camera. The user takes a picture. The app uses AI-powered OCR to automatically read the vendor, date, and amount, creating a new expense in seconds.
On the "Reports for Approval" Page (Manager's View):
A list of reports. Each report automatically has a red flag next to any expense that violates a company policy.
The manager can click on a report to see a clean summary of all expenses. They can approve or reject individual line items or the entire report.
4. Data Entry & Modals
Creating a New Expense (Modal): A simple pop-up form with fields for Date, Vendor, Category, Amount, and a drag-and-drop area to attach the receipt.
Creating a Policy (Wizard): A step-by-step wizard to build a policy rule: IF Category is "Flights" AND Amount is greater than "$500" THEN flag this expense and require additional manager approval.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Business Trip" Flow: An employee goes on a trip. Every time they pay for something, they take a photo of the receipt with the Aura Expense mobile app. At the end of the trip, they open the app, select all their "Unreported Expenses," and click Create Report. The system automatically groups them into a new report, which they can name "Trip to Mumbai" and submit.
The "Manager Approval" Flow (Automation): The manager receives a notification that a new expense report has been submitted. They open it. The system has automatically flagged one hotel expense because it was slightly over the per-diem policy limit. The manager reviews it, decides it's acceptable, leaves a comment, and clicks Approve.
The "Accounting" Flow (Integration): Once the manager approves the report, two things happen automatically:
The report moves to the finance team's Reimbursements queue to be paid out in the next payment cycle.
The expense data is automatically synced to Aura Books, where it is correctly categorized and recorded in the company's financial statements, with a digital copy of the receipt attached.
`,
    "FSM": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura FSM"
Global Search Bar: Placeholder: "Search by work order, customer, or technician..."
Quick Create Button (+ Icon):
New Work Order
New Customer
New Appointment
Notifications Bell Icon: Alerts for "Job completed," "Technician is running late," "Low inventory for Part XYZ," etc.
Settings Gear Icon: Links to the main FSM administration settings.
User Profile Icon: Profile, Logout.
2. Aura FSM Internal Sidebar
This sidebar is for the dispatcher or manager in the office. Technicians in the field will use a simplified mobile app.
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Unscheduled Work Orders," "Ongoing Jobs," "Technician Status" (on a map), and "Jobs Completed Today."
Section: Service Operations
Icon: Truck
Pages:
Work Orders: A list of all service jobs, filterable by status (New, Scheduled, In Progress, On Hold, Completed).
Scheduling & Dispatch: The core page. A multi-view interface with a Calendar View and a Map View to see all technicians and their assigned jobs. Allows for drag-and-drop scheduling.
Appointments: A list of all scheduled customer appointments.
Section: Management
Icon: Users
Pages:
Customers: A list of all service customers, with their addresses, contact info, and service history.
Assets: A list of customer equipment being serviced, with a full maintenance history for each asset.
Technicians: A list of all field technicians, including their skills, certifications, and current location.
Section: Financials & Inventory
Icon: Package
Pages:
Inventory: Manage a catalog of parts and supplies. Includes Warehouses and Purchase Orders (integrates with Aura Inventory).
Invoices & Billing: A list of all invoices generated from completed work orders (integrates with Aura Books).
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "First-Time Fix Rate," "Technician Utilization," "Travel Time vs. Work Time," and "Service Profitability."
3. Page-Level Toolbars & Main Interface
On the "Scheduling & Dispatch" Page:
A large map on one side and a timeline/calendar on the other.
Unscheduled work orders are listed in a side panel. The dispatcher drags a work order and drops it onto a technician's timeline to assign and schedule the job.
AI Feature: An "Optimize Routes" button that looks at all of a technician's jobs for the day and automatically calculates the most efficient travel route.
The Technician's Mobile App:
A simplified, task-focused interface.
Home Screen: Shows "My Jobs for Today" as a simple list.
Job Detail View: Tapping a job shows customer info, the reported problem, and a "Navigate" button (opens Google/Apple Maps).
Workflow Buttons: Large, easy-to-tap buttons for Start Travel, Check-in (on arrival), Add Parts Used, Log Time, Take Photos, Capture Signature, and Complete Job.
4. Data Entry & Modals
Creating a Work Order (Full Page Form): A detailed form with sections for Customer Information, Problem Description, Service Location, and required skills or parts.
Completing a Job (in Mobile App): The technician is guided through a final checklist. A modal pops up for the customer to sign on the screen with their finger. Once signed, a PDF "Service Report" is automatically generated and emailed to the customer.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Service Call" Flow: A customer calls with a broken machine. A support agent in Aura Desk creates a Work Order in Aura FSM. The dispatcher sees the new, unscheduled work order on their Scheduling & Dispatch dashboard. They see that "Technician A" is nearby and has the right skills. They drag the work order onto Technician A's schedule for 2:00 PM.
The "Technician's Day" Flow: Technician A gets a notification on their mobile app about the new job. They finish their current job and tap "Start Travel" for the next one. The app gives them directions. They arrive and tap "Check-in." They diagnose the problem, use the app to see which parts they need from their truck's inventory, and complete the repair. They take a photo of the finished work, have the customer sign on their screen, and tap "Complete Job."
The "Automated Invoicing" Flow: As soon as the technician taps "Complete Job," the system automatically takes the parts used, the time logged, and the service fee, and generates a professional invoice in Aura Books. The invoice is then automatically emailed to the customer. This turns a process that used to take days into something that happens instantly.`,
    "FinancePlus": `
. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Shows a curated list of the apps in the Finance Plus suite.
Current App Name: "Aura Finance Plus"
Global Search Bar: A "super-search" that can find any transaction, invoice, bill, customer, or vendor across ALL connected finance apps.
Quick Create Button (+ Icon): A unified dropdown with the most common actions: New Invoice, New Expense, New Bill, New Purchase Order.
Notifications Bell Icon: An aggregated feed of critical financial alerts: "An invoice is 30 days overdue," "A large bill is due tomorrow," "Corporate card expense needs approval."
Settings Gear Icon: Links to the main settings page for the entire suite, managing integrations, tax settings, and currencies.
User Profile Icon: Profile, Logout.
2. Aura Finance Plus Sidebar (The "Suite" Sidebar)
This is a simple, high-level sidebar focused on cross-functional financial views.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard. This is the core of the experience.
Section: Financial 360°
Icon: TrendingUp
Pages:
Cash Flow: A powerful, dedicated page that provides a real-time and projected view of all cash moving in and out of the business, combining data from invoices, bills, and payroll.
Vendors: A unified list of all vendors. Clicking a vendor shows a "360° View" with their contact info, all Purchase Orders from Aura Inventory, and all Bills and Payments Made from Aura Books.
Customers: A unified list of all customers, showing their sales history and payment status.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of special cross-functional reports that provide a holistic view of the business, such as "Profitability by Project" (combining timesheet data with invoicing) or "Inventory to Sales Ratio."
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura Books, Aura Inventory, Aura Expense, etc.).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly customizable, widget-based dashboard for the CFO or business owner.
Default Widgets:
Cash Flow Forecast (AI-Powered): A predictive chart showing your projected cash balance over the next 90 days.
Income vs. Expense: A live chart from Aura Books.
Accounts Receivable vs. Payable: A side-by-side comparison of money you are owed vs. money you owe.
Expense Hotspots: A chart showing the top spending categories from Aura Expense.
Inventory Summary: Key numbers on "Stock Value" and "Items to Reorder" from Aura Inventory.
Subscription Metrics: Live MRR and Churn data from Aura Subscriptions.
4. Data Entry & Modals
This application is primarily for viewing and analyzing combined data. Most data entry happens within the individual applications.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "CFO's Morning Briefing" Flow: A business owner starts their day by opening the Aura Finance Plus Dashboard. In a single glance, they can see their current bank balance, their projected cash flow for the month, how much money is overdue from customers, and which bills they need to pay this week. They see that "Expenses" are higher than usual, click on the widget, and are taken directly to the relevant report in Aura Expense to investigate.
The "Purchase-to-Pay" Flow (Integrated): A manager approves a Purchase Order in Aura Inventory. When the goods arrive, the warehouse manager marks the PO as "Received." This automatically creates a Bill in Aura Books. The accountant can then see this bill in their "Bills to be Paid" list on the Finance Plus dashboard, and they can schedule the payment. The entire process is seamless and tracked from start to finish.
The "Profitability Analysis" Flow: A manager wants to know if their biggest project is actually profitable. They go to the Reports section in Aura Finance Plus. They run the "Profitability by Project" report. This report automatically:
Pulls all the Invoices for that project from Aura Books.
Pulls all the employee Timesheets (and thus salary costs) for that project from Aura People.
Pulls all the direct Expenses logged against that project from Aura Expense.
It then presents a single, simple report showing Total Revenue - Total Costs = Net Profit for that project.`,
    "Flow": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Flow"
Global Search Bar: Placeholder: "Search by flow name or app..."
Quick Create Button (+ Icon):
New Flow
Notifications Bell Icon: Alerts for "A flow has run successfully," "A flow has failed with an error," etc.
Settings Gear Icon: Links to the main Flow settings (connections, billing).
User Profile Icon: Profile, Logout.
2. Aura Flow Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows "My Total Flows," "Task Usage this Month," a feed of "Recent Flow Executions," and a list of your most active flows.
Section: Automation
Icon: GitBranch
Pages:
My Flows: The main page. A list of all the automated workflows you have built. Each item shows the flow's name, the apps it connects, and a toggle to turn it On/Off.
Gallery / Templates: A library of pre-built, ready-to-use flow templates for common use cases (e.g., "When I get a new lead in Aura CRM, send a notification to a channel in Aura Cliq").
Section: Administration
Icon: Link2
Pages:
Connections: A critical page. A list of all the applications you have authorized Aura Flow to access. You can Add New Connection here.
History: A detailed log of every single time a flow has run, showing whether it was a success or a failure.
3. Page-Level Toolbars & Main Interface (The Flow Builder)
The core of the application is the visual Flow Builder.
Main Interface: A simple, linear, top-to-bottom canvas.
Trigger (The "When"): At the very top, a box where you configure the starting event. The user clicks it and a side panel opens.
Actions (The "Then"): Below the trigger, a series of boxes representing the steps in the workflow. The user clicks a + button to add a new action.
Side Panel (Configuration):
When the user clicks on the Trigger or any Action box, a right-side panel slides open.
For a Trigger: It asks you to Choose an App and then Choose a Trigger Event from a dropdown (e.g., App: "Aura CRM", Trigger Event: "New Lead Created").
For an Action: It asks you to Choose an App and Choose an Action (e.g., App: "Aura Cliq", Action: "Send Message to Channel"). It then shows fields that you can fill in.
The Magic - Data Mapping: When filling in the fields for an action, you can click a button to insert "pills" of data from the previous steps. For example, in the "Send Message to Channel" action, you can write: New lead created: [Lead First Name pill] [Lead Last Name pill] from [Lead Company pill]. This dynamically inserts the data from the CRM trigger into the chat message.
4. Data Entry & Modals
Connecting an App (Modal): Clicking "Add New Connection" opens a pop-up that guides the user through a secure OAuth process to grant Aura Flow permission to access their account in another app (like their Google or Twitter account).
Testing a Flow: The builder has a "Test" button. When clicked, it runs the flow once with sample data and shows the user the input and output of every single step, making it easy to find and fix problems.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Sales Alert" Flow: A salesperson wants to be instantly notified of new leads. They create a new flow.
Trigger: App = Aura CRM, Event = New Lead.
Action 1: App = Aura Cliq, Action = Send Message to User. They select themselves as the user and map the lead's name and company into the message.
They turn the flow on. Now, every time a new lead is created in the CRM, they get an instant chat message.
The "Social Media to Task" Flow: A social media manager wants to turn important tweets into tasks.
Trigger: App = Twitter, Event = New Tweet from Search (they search for mentions of their brand).
Logic: Add a Decision block. IF the Tweet's text contains "help" or "problem".
Action (if true): App = Aura Projects, Action = Create a Task. They map the Tweet's text into the task description and assign it to the support team.
Now, only tweets that seem like support requests are automatically turned into tasks for the team to handle.
The "Invoice to Spreadsheet" Flow: An accountant wants to keep a backup of all new invoices in a spreadsheet.
Trigger: App = Aura Books, Event = New Invoice.
Action: App = Aura Sheet (or Google Sheets), Action = Add a Row. They map the Invoice Number, Customer Name, Amount, and Due Date from the invoice trigger to the correct columns in their spreadsheet.
The entire process of logging invoices is now automated.`,
    "Forms": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Forms"
Global Search Bar: Placeholder: "Search by form name or field label..."
Quick Create Button (+ Icon):
New Form
Notifications Bell Icon: Alerts for "New form submission," "A form has reached its submission limit," etc.
Settings Gear Icon: Links to the main Forms settings page.
User Profile Icon: Profile, Logout.
2. Aura Forms Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing total forms, total submissions today, and a list of recently updated forms.
Section: Forms
Icon: FileText
Pages:
All Forms: The main page, showing a grid or list of all created forms. Each form "card" shows its name, number of submissions, and quick links to View, Edit, or Share.
My Forms: Forms created by me.
Shared With Me: Forms that other team members have shared with me.
Templates: A gallery of pre-built form templates (Contact Us, Event Registration, Customer Feedback, etc.).
Section: Analytics
Icon: BarChart3
Pages:
All Entries: A master, searchable log of every single submission from all forms.
Reports: A list of all saved reports. Users can create custom reports from form data here.
3. Page-Level Toolbars & Main Interface (The Form Builder)
The core of this application is the Form Builder, which is a three-panel interface.
Left Panel (Add Fields):
A drag-and-drop library of all available form fields.
Basic Fields: Single Line Text, Multi-Line Text, Number, Dropdown, Radio Buttons, Checkboxes.
Advanced Fields: Name, Address, Email, Phone, Date/Time, File Upload, Digital Signature, Payment.
Layout Fields: Section Break, Page Break.
Center Panel (The Canvas):
A live, visual preview of the form as you are building it.
You drag fields from the left panel and drop them here.
You can click on any field to open its settings in the right panel.
Right Panel (Field Settings):
When you click a field on the canvas, this panel appears.
Properties: Change the Field Label, Placeholder Text, make it a Required field.
Validation: Set rules (e.g., "Must be a valid email," "Number must be between 1 and 100").
Top Tabs within the Builder:
Builder: The main design canvas.
Rules: A screen to create conditional logic (e.g., "If the user selects 'USA' in the Country field, then show the 'State' field").
Themes: A tool to customize the form's appearance (colors, fonts, background image).
Integrations: A page to connect the form to other AURA apps. This is critical. For example: "When a form is submitted, create a new Lead in Aura CRM." or "When a payment is made, create a new Invoice in Aura Books."
Share: A page that gives you the public link to the form and the code to embed it on a website.
4. Data Entry & Modals
The primary data entry is the form itself (what the end-user sees).
Viewing an Entry (Modal): On the "All Entries" page, clicking on a submission opens a clean, read-only modal pop-up showing all the data submitted for that specific entry.
5. Bottom Bar
Non-existent. The focus is entirely on the builder and the form data.
6. Task Info & Key Workflows
The "Create a Contact Form" Flow: The user's most basic job. They click New Form, drag on "Name," "Email," and "Message" fields. They go to the "Share" tab, copy the link, and send it to someone.
The "Event Registration" Flow (Advanced): The user creates a multi-page form. Page 1 collects personal info. Page 2 asks for session choices. Page 3 is a Payment field to collect the registration fee. They set up an Integration so that when the form is submitted, a new Contact is created in Aura CRM and an Invoice is created in Aura Books.
The "Analyze Feedback" Flow: The user has a "Customer Satisfaction" form. After 100 people have filled it out, the user goes to the Reports section, creates a new report, and builds a pie chart to visualize the answers to the "How would you rate our service?" question.`,
    "Inventory": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Inventory"
Global Search Bar: Placeholder: "Search by item SKU, order #, or customer..."
Quick Create Button (+ Icon):
New Sales Order
New Purchase Order
New Item
Notifications Bell Icon: Alerts for "Item is below reorder point," "New order from Shopify," "Shipment has been delivered," etc.
Settings Gear Icon: Links to the main Inventory settings.
User Profile Icon: Profile, Logout.
2. Aura Inventory Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Sales Activity," "Top Selling Items," "Purchase Order Summary," "Items to be Packed," and "Low Stock Items."
Section: Items
Icon: Package
Pages:
All Items: A master list of all products, showing their SKU, stock on hand, and committed stock.
Item Groups: For items with variants (e.g., a T-shirt group with different sizes and colors).
Composite Items: A tool to create "bundles" or "kits" made up of other items.
Price Lists: Create different price lists for different types of customers (e.g., retail vs. wholesale).
Section: Sales
Icon: ShoppingCart
Pages:
Customers: A list of all sales customers.
Sales Orders: The main hub for all incoming sales orders from all channels.
Packages: A list of all packages that are ready to be shipped.
Shipments: A list of all shipments in transit, with tracking information.
Invoices: A list of all invoices generated from sales orders (integrates with Aura Books).
Section: Purchases
Icon: Truck
Pages:
Vendors: A list of all suppliers.
Purchase Orders: Create and send purchase orders to vendors to replenish stock.
Bills: Track bills received against purchase orders.
Section: Warehouses
Icon: Building2
Pages:
Manage Warehouses: A list of all physical storage locations.
Stock Transfers: A tool to manage the movement of inventory between warehouses.
Stock Adjustments: A page to record changes in stock due to damage, loss, or physical counts.
Section: Integrations
Icon: Link2
Pages:
Marketplaces: Connect to e-commerce platforms like Aura Commerce, Shopify, Amazon, etc.
Shipping Carriers: Connect to shipping providers like FedEx, UPS, etc.
Accounting: Manage the deep integration with Aura Books.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of inventory-specific reports, including "Inventory Valuation," "Stock Aging," "Sales by Item," and "Purchase History."
3. Page-Level Toolbars & Main Interface
On the "Sales Orders" Page:
Title: "Sales Orders"
Primary Button: + New Sales Order
Filters: "Filter by Status (Confirmed, Packed, Shipped)," "Filter by Channel (Online Store, Amazon)."
Order Card: Each order shows the customer, order number, and fulfillment status.
On a "Single Sales Order Detail" Page:
Shows all order details.
Action Buttons: A workflow of buttons that change as the order progresses:
Mark as Confirmed
Create Package (opens a modal to choose items to pack)
Create Shipment (opens a modal to choose a carrier and print a label)
Create Invoice (sends the data to Aura Books)
4. Data Entry & Modals
Creating a New Item (Full Page Form): A detailed form with fields for "Item Name," SKU (Stock Keeping Unit), Cost, Selling Price, Weight & Dimensions, and initial stock levels for each warehouse.
Stock Adjustment (Modal): A simple pop-up to increase or decrease the quantity of an item, with a required "Reason for Adjustment" field.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Online Order" Flow (Automation): A customer places an order on the Aura Commerce store. Aura Inventory automatically receives the order. The stock level for that item is immediately reduced in the "Committed Stock" count, preventing it from being oversold on another channel. The new order appears in the Sales Orders list, ready to be processed.
The "Warehouse Fulfillment" Flow: A warehouse worker logs in. They see a new Sales Order. They click Create Package. The system generates a "Pick List" showing them exactly where to find the item in the warehouse (Aisle 5, Bin 3). They pick the item, pack it in a box, and then click Create Shipment. The system, integrated with the shipping carrier, automatically generates and prints a shipping label.
The "Low Stock" Flow (Automation): An item's "Stock on Hand" drops below its pre-set "Reorder Point." Aura Inventory automatically adds the item to a draft Purchase Order for its primary vendor. At the end of the day, the purchasing manager reviews the draft PO, confirms the quantities, and sends it to the vendor with one click.`,
    "Invoice": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Invoice"
Global Search Bar: Placeholder: "Search by invoice #, customer, or item..."
Quick Create Button (+ Icon):
New Invoice
New Estimate / Quote
New Customer
Notifications Bell Icon: Alerts for "Invoice viewed by customer," "Payment received," "Invoice is now overdue," etc.
Settings Gear Icon: Links to the main Invoice settings.
User Profile Icon: Profile, Logout.
2. Aura Invoice Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: A financial overview focused on receivables. Widgets for "Total Overdue," "Total Drafts," "Recent Payments," and a chart of sales over time.
Section: Sales
Icon: TrendingUp
Pages:
Customers: A list of all your clients.
Estimates / Quotes: A list of all quotes you have sent. You can convert an accepted quote into an invoice with one click.
Invoices: The main page. A list of all invoices, with clear status labels (Draft, Sent, Viewed, Paid, Overdue).
Recurring Invoices: A page to set up invoices that are sent automatically on a schedule.
Payments Received: A log of all payments.
Credit Notes: A tool to issue refunds or credits to customers.
Section: Management
Icon: Briefcase
Pages:
Items: A catalog of the services and products you sell, with their rates.
Time Tracking: A page to log hours worked on different projects, which can then be easily added to an invoice.
Expenses: A log of expenses that can be marked as "billable" to a customer and added to an invoice.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports like "Sales by Customer," "Tax Summary," and "Invoice Aging" (which shows how long invoices have been overdue).
3. Page-Level Toolbars & Main Interface (The Invoice Editor)
The core of the app is the Invoice Editor.
Interface:
A clean, visual representation of a professional invoice.
Fields at the top to select a Customer (which auto-fills their details).
A table in the middle to add Items from your catalog or enter them manually.
The system automatically calculates subtotals, taxes, and the final total.
A toolbar at the top with buttons for Save as Draft, Send (which emails the invoice), and a "More" (...) menu with options like Print, Download as PDF, or Clone.
4. Data Entry & Modals
The Customer Portal: When a customer receives an invoice email, it contains a link to a secure web page. On this page, they can view the invoice, download a PDF, and most importantly, click a Pay Now button to pay instantly with a credit card (integrated with Aura Payments/Checkout).
Payment Reminders (Automated): In the settings, a user can set up automated reminder emails (e.g., "Send a reminder 3 days before the due date," "Send another reminder 7 days after the due date if still unpaid").
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Freelancer" Flow: A user finishes a project. They open Aura Invoice, click + New Invoice, select their client, and add a line item for "Web Design Services" with the agreed-upon price. They click Send. The client receives the professional PDF invoice via email.
The "Payment" Flow: The client clicks the Pay Now button in the email. They are taken to the secure Customer Portal where they enter their credit card details. The payment is processed. The invoice status in Aura Invoice automatically changes from Sent to Paid, and the user receives a notification.
The "Follow-up" Flow (Automation): An invoice is 7 days overdue. The automated reminder system, which the user set up once, automatically sends a polite but firm follow-up email to the client without the user having to do anything.`,
    "IoT": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura IoT"
Global Search Bar: Placeholder: "Search by device ID, location, or metric..."
Quick Create Button (+ Icon) (Admin/Dev only):
Register New Device
New Dashboard
Notifications Bell Icon: Alerts for "Device XYZ has gone offline," "Temperature has exceeded the safe threshold," "A rule has been triggered," etc.
Settings Gear Icon: Links to the main IoT platform settings.
User Profile Icon: Profile, Logout.
2. Aura IoT Internal Sidebar
This sidebar is for the administrator, developer, or operations manager.
Section: Home
Icon: Home
Pages:
Dashboard: The main operations dashboard. A customizable, map-based view showing the real-time status and location of all connected devices. Widgets for "Online vs. Offline Devices," "Active Alerts," and key performance indicator (KPI) gauges.
Section: Device Management
Icon: Cpu
Pages:
Devices: The master inventory of all connected hardware devices. Each device has a detailed profile showing its unique ID, status, last-heard-from time, and current data readings.
Device Groups: A page to organize devices by type, location, or customer.
Firmware Updates (OTA): A powerful tool to remotely send software updates "over-the-air" to the entire fleet of devices.
Section: Data & Analytics
Icon: Database
Pages:
Data Streams: A real-time log viewer showing the raw data flowing in from all devices.
Dashboards: A visual, drag-and-drop builder to create custom dashboards with charts, gauges, and maps to visualize the IoT data (integrates with Aura Analytics).
Section: Automation
Icon: Zap
Pages:
Rules Engine: The core of the automation. A page to create "if-this-then-that" rules based on incoming device data.
Alerts: A log of all alerts that have been triggered by the rules engine.
Actions: A list of the actions that can be triggered (e.g., "Send an Email," "Send an SMS," "Make an API Call" to another AURA app).
Section: Developer Tools
Icon: Code
Pages:
API & SDKs: A page with API keys, documentation, and software development kits (SDKs) to help hardware engineers connect their devices to the Aura IoT platform.
3. Page-Level Toolbars & Main Interface
On the "Device Details" Page:
A dashboard for a single device.
Tabs: Live Data, Historical Data (with charts), Configuration, Logs, Commands.
Action Toolbar: Buttons to Reboot Device, Send Command, Update Firmware.
The "Rule Builder" (Wizard):
A multi-step, form-based wizard to create a new automation rule.
Step 1: Condition (The "IF"): IF a Device from Group 'Factory Sensors' sends a Metric 'Temperature' that is Greater Than Value '100'.
Step 2: Action (The "THEN"): THEN Send an SMS to +91... with the message "Warning: Factory temperature is critical!" AND Create a new Ticket in Aura Desk.
4. Data Entry & Modals
Sending a Command (Modal): A secure pop-up where an admin can type a specific command string to send to a remote device. Requires confirmation.
The Dashboard Builder: A drag-and-drop canvas where users can add widgets (Line Chart, Gauge, Map, Indicator Light) and configure them to display specific data from their devices.
5. Bottom Bar
A thin status bar showing the total number of connected devices and the rate of incoming messages.
6. Task Info & Key Workflows
The "Cold Storage Monitoring" Flow: A company has temperature sensors in its refrigerated trucks. The sensors are registered as Devices in Aura IoT. An operations manager creates a Rule: "If the temperature from any truck sensor goes above 5°C, trigger a high-priority Alert." One day, a truck's refrigeration fails. Aura IoT instantly detects the temperature rise, triggers the rule, and sends an SMS to the driver and an email to the manager, allowing them to save the cargo before it spoils.
The "Predictive Maintenance" Flow: A factory connects vibration sensors to its heavy machinery. The data is streamed to Aura IoT. An analyst uses the Dashboards to create a chart of the vibration levels over time. They notice that a specific machine's vibrations are slowly but consistently increasing. This is a sign of a future breakdown. They create a Work Order in Aura FSM to schedule maintenance before the machine fails, preventing costly downtime.
The "Smart Agriculture" Flow (Integration): A farm has soil moisture sensors in its fields. The data is sent to Aura IoT. A rule is set up that connects to Aura Flow. When the moisture level in a field drops below a certain point, the rule triggers a workflow in Aura Flow that sends an API command to the farm's smart irrigation system, automatically turning on the sprinklers for that specific field for 30 minutes.
`,
    "LandingPage": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura LandingPage"
Global Search Bar: Placeholder: "Search by page name or campaign..."
Quick Create Button (+ Icon):
New Landing Page
Notifications Bell Icon: Alerts for "New lead from your 'Summer Sale' page," "A/B test is complete," etc.
Settings Gear Icon: Links to the main LandingPage settings.
User Profile Icon: Profile, Logout.
2. Aura LandingPage Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing a grid of all created landing pages. Each card displays a small preview, the page's name, and key stats: "Views," "Conversions," and "Conversion Rate."
Section: Pages
Icon: Globe
Pages:
All Pages: A list view of all landing pages, sortable by performance.
Create New Page: This starts the builder process, usually beginning with the template gallery.
Templates: A gallery of pre-built landing page templates, categorized by industry and goal (e.g., "Lead Generation," "Webinar Signup," "Ebook Download").
Section: Analytics & Leads
Icon: Users
Pages:
Leads: A central list of all leads collected from all landing page forms.
Analytics: A page with charts and reports to compare the performance of different landing pages over time.
Section: Administration
Icon: Settings
Pages:
Domains: A page to connect custom domains or subdomains for your landing pages.
Integrations: A critical page to connect your landing pages to other AURA apps (e.g., "Send all new leads to Aura CRM," "Add new signups to a list in Aura Campaigns").
3. Page-Level Toolbars & Main Interface (The Visual Builder)
The core of the application is the Visual Page Builder, which is very similar to the Aura Sites builder but more streamlined.
Center Panel (The Canvas):
A live, visual preview of your single landing page.
Left Panel (Add Elements & Sections):
Add Sections: A library of pre-designed sections optimized for conversion, such as Hero with Form, Feature List, Testimonials, Pricing Table, FAQ, and Call to Action.
Add Elements: Basic elements like Headline, Image, Button, Form.
Top Bar within the Builder:
Device Switcher: Icons for Desktop and Mobile to ensure the page looks perfect on both.
A/B Testing: A toggle or button to create a new "Variant" of the page for A/B testing.
Page Settings: A button to open a modal for the page's SEO title, description, and social sharing image.
Save & Publish: A single dropdown button with options to Save Draft or Publish the page to make it live.
4. Data Entry & Modals
The Form Builder (Modal or Inline): Clicking on a form on the canvas opens its settings. This is a simplified version of the Aura Forms builder, focused on creating quick lead capture forms. It has a dedicated tab for Integrations to send the data where it needs to go.
A/B Test Results (Modal/Page): After a test is complete, a pop-up appears declaring the winner. Clicking it takes you to a dedicated report page that visually compares the performance of the two versions with charts and conversion numbers.
5. Bottom Bar
Non-existent. All focus is on the builder canvas.
6. Task Info & Key Workflows
The "Ad Campaign" Flow: A user is running a Google Ad for a new ebook. They go to Aura LandingPage and click Create New Page. They choose an "Ebook Download" template. They use the builder to change the headline to match their ad copy and upload a picture of the ebook. They configure the form to send new leads to a specific list in Aura Campaigns. They click Publish and get a unique URL. They then use this URL as the destination for their Google Ad.
The "Optimization" Flow: The user sees that their landing page has a low conversion rate (only 2% of visitors are filling out the form). They decide to run an A/B test. They open the page in the builder and click the A/B Testing button. In the Variation, they change the headline from "Download Our Ebook" to "Get Your Free Marketing Guide." They run the test for a week. Aura LandingPage automatically directs 50% of traffic to each version. At the end of the week, it shows that the new headline increased the conversion rate to 5%. The user can then click a button to "Apply this variation" and make it permanent.
The "Dynamic Text" Flow (Advanced): A user is running ads with different keywords. They set up "Dynamic Text Replacement" on their landing page. Now, if a user clicks an ad for the keyword "small business accounting," the headline on the landing page automatically changes to "Accounting Software for Small Businesses." This personalization dramatically increases conversion rates.
`,
    "Learn": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Learn"
Global Search Bar: Placeholder: "Search for courses, lessons, or topics..."
Quick Create Button (+ Icon) (Admin only):
New Course
New Learning Path
Notifications Bell Icon: Alerts for "You have been enrolled in a new course," "Your assignment is due," etc.
Settings Gear Icon: Links to the main Learn administration settings.
User Profile Icon: Shows user's learning progress, Profile, Logout.
2. Aura Learn Internal Sidebar
This application has two distinct sidebars depending on the user's role: one for Learners and one for Admins/Authors.
A) Learner Sidebar (What most employees see)
Section: My Learning
Icon: GraduationCap
Pages:
Dashboard: The main page for learners. Shows "Courses in Progress," "My Learning Paths," "Upcoming Deadlines," and "Completed Certificates."
My Courses: A list of all courses the user is currently enrolled in.
My Learning Paths: A view of structured, multi-course programs the user is enrolled in.
My Transcripts & Certificates: A record of all completed courses and downloadable certificates.
Section: Explore
Icon: Compass
Pages:
Course Catalog: A searchable and filterable library of all available courses in the company that the user can self-enroll in.
Social Learning: A feed or forum for learners to discuss course content and ask questions.
B) Admin/Author Sidebar
Section: Content
Icon: BookOpen
Pages:
Courses: The main library of all courses in the system. Admins can Create Course, Edit Course, or manage categories.
Learning Paths: A page to create and manage structured learning programs by combining multiple courses.
Assessments: A central bank of all quizzes and assignments.
Section: People
Icon: Users
Pages:
Users: Manage all learners.
Groups: Create user groups (e.g., "New Sales Hires," "Engineering Department") to assign training in bulk.
Enrollments: A master log of which users are enrolled in which courses.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Course Completion Rates," "Assessment Scores," "Learner Progress," and "Most Popular Courses."
Section: Administration
Icon: Settings
Pages:
Settings: General settings for the learning portal, including Branding, Gamification (points/badges), and Certificate templates.
3. Page-Level Toolbars & Main Interface
The Course Player (Learner's View):
Left Panel: A collapsible table of contents showing all the Modules and Lessons in the course. The current lesson is highlighted.
Center Panel: The main content area. Displays the current lesson's content, which could be a Video, a Text Document (from Aura Writer), a Presentation (from Aura Show), or an embedded Quiz.
Top Bar: Shows the course title and a progress bar. Next Lesson and Previous Lesson buttons are prominent.
The Course Builder (Admin's View):
A drag-and-drop interface.
The admin can Add Module and then drag different lesson types (Video, Text, Quiz, Assignment) into each module.
Clicking on a lesson opens a modal to upload a video, write text, or build a quiz.
4. Data Entry & Modals
Quiz Builder (Modal/Page): A form-based interface for creating questions (Multiple Choice, True/False, Fill-in-the-Blank) and setting the correct answers and point values.
Enrolling Users (Modal): A pop-up where an admin can search for users or groups and assign them to a course with a specific due date.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Hire Onboarding" Flow (Automation): A new employee is added to the "New Hires" Group in Aura People. This automatically triggers an enrollment in the "New Hire Onboarding" Learning Path in Aura Learn. The new employee receives a welcome email with a link to their dashboard. They see a structured path of courses they need to complete in their first week, such as "Company History," "Code of Conduct," and "IT Security Basics."
The "Authoring" Flow: A department expert needs to create a new training course. They go to the Admin view, click Create Course. They use the Course Builder to structure their course into modules and lessons. They upload a video they recorded in Aura Meeting, write a text summary in an embedded Aura Writer, and create a 10-question Quiz to test understanding. Once finished, they publish the course to the Course Catalog for others to take.
The "Compliance Training" Flow: A compliance officer needs to ensure every employee completes the annual "Data Privacy" training. They go to Aura Learn, select the course, and enroll the "All Employees" group with a deadline of December 31st. The system sends out initial and reminder emails. The officer can then go to the Reports page to see a real-time list of who has and has not completed the mandatory training.`,
    "Lens": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Lens"
Global Search Bar: Placeholder: "Search by session ID, customer, or notes..."
Quick Create Button (+ Icon):
Start AR Session
Notifications Bell Icon: Alerts for "A customer has joined your session," "New snapshot saved," etc.
Settings Gear Icon: Links to the main Lens settings page.
User Profile Icon: Profile, Logout.
2. Aura Lens Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "Total Sessions this Month," "Average Session Duration," and a list of recent session recordings.
Section: Sessions
Icon: Camera
Pages:
Start Session: The main page for the expert. It provides a link or a code to send to the customer via SMS or email.
Session History: A searchable log of all past AR sessions, with links to recordings and saved notes.
Section: Knowledge
Icon: BookOpen
Pages:
AR Guides: A library of pre-recorded, step-by-step AR instructions that can be sent to users for self-service.
Snapshots: A gallery of all the images that have been captured during live sessions.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Reports on "Technician Performance," "Common Issues" (based on session tags), and "First-Call Resolution Rate."
3. Page-Level Toolbars & Main Interface (The Expert Console)
The core of the application is the Expert Console, which is the web interface the remote expert uses during a live session.
Main View:
A large, real-time video stream from the customer's phone camera.
Toolbar (at the bottom or side of the video stream):
Annotation Tools:
3D Arrow: Click and drag on the screen to place a persistent 3D arrow that "sticks" to a real-world object.
Draw Tool: Free-hand draw on the screen.
Text Tool: Add text labels onto the video.
Communication Tools:
VoIP Audio: Buttons to mute/unmute the microphone for talking to the customer.
Chat: A small text chat window for noisy environments.
Session Tools:
Freeze Frame: Pauses the live video, allowing the expert to draw on a still image with more precision.
Take Snapshot: Saves a high-resolution picture of the current view to the session log.
Flashlight: A button to remotely turn on the customer's phone flashlight.
Start Recording: A button to record the entire session.
AI Tools:
Scan Text (OCR): A button that tells the AI to read and copy any text visible in the video stream (like a serial number on a machine).
4. Data Entry & Modals
The Customer's Experience: The customer receives an SMS with a link. Tapping the link opens a webpage that asks for permission to use their camera and microphone. No app installation is required. Once permission is granted, their camera feed starts streaming to the expert.
Session Summary (Modal): When the expert ends the session, a modal pops up asking them to add Notes and Tags (e.g., "router-reset," "faulty-cable") to categorize the session for future reporting.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "IT Support" Flow: A customer calls because their Wi-Fi isn't working. The support agent in Aura Desk realizes they can't solve it over the phone. They initiate an Aura Lens session and send the link to the customer. The customer points their phone camera at their router. The remote expert says, "I see the problem." Using the Draw Tool, the expert circles the correct port on the router and says, "Unplug the yellow cable from here." Then, using a 3D Arrow, they point to a different port and say, "And plug it in right here." The customer follows the visual instructions, and the problem is solved in seconds.
The "Field Technician" Flow: A junior technician is on-site trying to repair a complex machine but is stuck. They start an Aura Lens session with a senior expert back at the head office. The junior tech points their phone camera inside the machine. The senior expert uses 3D annotations to guide the junior tech through the entire repair process, step by step, as if they were standing right there. The entire session is recorded and later added to the AR Guides library for training other new technicians.
The "Insurance Claim" Flow: An insurance agent needs to assess damage to a car after an accident. They send an Aura Lens link to the customer. The customer walks around their car, showing the damage through their phone's camera. The agent uses the Take Snapshot tool to capture high-quality evidence and uses the Scan Text (OCR) tool to instantly read the car's VIN and license plate number. The entire assessment is done in 5 minutes without the agent having to travel.`,
    "MDM": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura MDM"
Global Search Bar: Placeholder: "Search by device serial #, user, or app name..."
Quick Create Button (+ Icon) (Admin only):
Enroll Device
New Policy
Notifications Bell Icon: Alerts for "A device has fallen out of compliance," "A new malicious app was detected," etc.
Settings Gear Icon: Links to the main MDM administration settings.
User Profile Icon: Profile, Logout.
2. Aura MDM Internal Sidebar
This sidebar is for the IT administrator.
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Device Compliance Status," "Total Managed Devices," "Devices by Platform (iOS/Android)," and a map showing the last known location of devices.
Section: Device Management
Icon: Smartphone
Pages:
Devices: The master inventory of all enrolled mobile devices.
Groups: A page to create groups of devices to apply policies in bulk (e.g., "Sales Team iPhones," "Executive iPads").
Enrollment: A page to manage device enrollment methods (e.g., sending an enrollment link via SMS, using Apple Business Manager).
Section: Policies & Security
Icon: Shield
Pages:
Policies: The core of the app. A list of all security and configuration policies.
Compliance Rules: A page to set up automated rules (e.g., "If a device has a blacklisted app installed, automatically remove its access to company email").
Geofencing: A tool to create virtual boundaries and apply policies when a device enters or leaves an area (e.g., "Disable the camera when a device is at the office").
Section: Content & Apps
Icon: Package
Pages:
App Management: A catalog of approved company apps. Admins can silently push these apps to devices or create a private "Enterprise App Store."
Content Management: A tool to securely distribute documents and media to managed devices.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Device Inventory," "App Usage," "Security Incidents," and "Compliance Status."
3. Page-Level Toolbars & Main Interface
On the "Devices" List Page:
A list of all devices. Each row shows the device model, user, OS version, and compliance status.
On a "Single Device Detail" Page:
Shows all information about a single device: serial number, storage, installed apps, location history.
Action Toolbar at the top: A set of powerful remote commands: Lock Device, Wipe Device, Clear Passcode, Send Message, Restart.
The "Policy Builder" (Wizard):
A multi-step, checkbox-based wizard to create a new policy.
Sections: Passcode (enforce a strong passcode), Restrictions (disable camera, app store, etc.), Wi-Fi (automatically configure company Wi-Fi), Email (automatically set up Aura Mail).
4. Data Entry & Modals
The Enrollment Experience (on the User's Phone): The user receives a link or a QR code. This guides them through a system-level process on their phone to install a "management profile," which gives the Aura MDM system control over the device.
Sending a Message (Modal): The Send Message action opens a simple pop-up where the admin can type a message that will be instantly pushed to the device's lock screen.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Employee" Flow: A new employee receives their company iPhone. The IT admin uses the Enrollment feature to add the device's serial number. When the employee turns on the phone for the first time, it automatically enrolls itself in Aura MDM. The system then automatically pushes all the necessary apps (Aura Mail, Aura Cliq), configures the company Wi-Fi, and applies the standard security policy, all without the IT admin ever touching the physical device.
The "Lost Phone" Flow (Security): An employee reports that their phone has been lost or stolen. The IT admin immediately goes to that device's detail page in Aura MDM. First, they click Lock Device to secure it with a passcode and display a "Please return to..." message on the screen. They also check its last known location on the map. If it seems unrecoverable, they click the Wipe Device button. This sends a command to remotely erase all data on the phone, protecting the company's sensitive information.
The "App Deployment" Flow: The company develops a new internal app. The IT admin uploads the app file to the App Management catalog in Aura MDM. They then assign the app to the "Sales Team" Group. The new app is automatically and silently installed on every salesperson's phone, without the users having to do anything.`,
    "Mail": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Mail"
Global Search Bar: A powerful search bar with advanced filters (from, to, subject, has attachment, date). Placeholder: "Search mail..."
Quick Create Button (+ Icon):
New Email (Compose)
Notifications Bell Icon: Alerts for "You have a new mention in a shared draft," etc. (distinct from unread email count).
Settings Gear Icon: Links to the main Mail settings.
User Profile Icon: Shows user's online/offline status, Profile, Logout.
2. Aura Mail Internal Sidebar
This sidebar follows a classic email client layout but is enhanced with productivity tools.
Section: Main Actions
Icon-less:
Compose: A large, prominent button to start a new email.
Section: Mailbox
Icon: Inbox
Pages:
Inbox: The main view of incoming mail, with tabs for "Priority Inbox" (AI-sorted) and "All Mail."
Drafts: Saved, unsent emails.
Sent: A log of all sent emails.
Snoozed: Emails you have temporarily hidden from your inbox.
Scheduled: Emails you have written that are scheduled to be sent later.
Spam: The spam/junk folder.
Trash: Deleted emails.
Section: Organization
Icon: Folder
Pages:
Folders: A user-created list of folders for organizing emails.
Tags / Labels: A list of colored tags that can be applied to emails.
Section: Collaboration (The "Aura" Difference)
Icon: Users
Pages:
Streams / Groups: A revolutionary feature. A hybrid between an email thread and a chat room. An email can be shared to a "Stream" (e.g., "#Sales-Team"), where the team can discuss it in a chat-like interface without creating a messy "Reply All" chain.
Shared Drafts: A view of emails that you are co-writing with team members.
Section: Productivity Suite
Icon: Grid
Pages:
Calendar: A full calendar view (integrates with Aura Calendar).
Tasks: Your personal to-do list (integrates with Aura Projects/ToDo).
Notes: Your personal notes (integrates with Aura Notebook).
Contacts: Your address book (integrates with Aura CRM).
3. Page-Level Toolbars & Main Interface (The Three-Panel View)
The main interface is a classic, three-panel email client.
Left Panel: The Internal Sidebar we just described.
Center Panel (The Message List):
A list of emails in the selected folder.
Toolbar at the top: Buttons for Archive, Delete, Mark as Spam, Move to Folder, Add Tag. A "More Actions" (...) menu includes Snooze, Create Task from Email.
Right Panel (The Reading Pane):
Displays the content of the selected email.
Header: Shows sender, recipient, and subject.
Body: The email content.
AURA Integration Panel: A special, powerful section below the header. It automatically detects if the sender is a Contact in Aura CRM and displays a mini-profile with links to their recent Deals and Tickets.
Action Buttons: Reply, Reply All, Forward. A "More Actions" (...) menu includes Create Event from Email, Share to Stream.
4. Data Entry & Modals
The Compose Window (Modal Pop-up): A rich text editor for writing emails.
AI Features: "Smart Compose" (suggests the rest of your sentence) and a "Tone Analyzer."
Special Buttons: Attach from Aura WorkDrive, Request Read Receipt, Send Later.
Creating a Task from an Email (Modal): Clicking this opens a small pop-up pre-filled with the email's subject as the task title, allowing the user to set a due date and add it to a project.
5. Bottom Bar
A thin status bar showing "Storage Used" and a quick link to the other productivity apps (Calendar, Tasks, Notes).
6. Task Info & Key Workflows
The "Triage" Flow: A user starts their day. They open their Inbox. They quickly archive non-important emails. For an important email from a client, they Snooze it until the afternoon when they have time to reply. For an email that requires a follow-up action, they click the "More Actions" menu and select Create Task, instantly turning the email into a to-do item in Aura Projects.
The "Team Collaboration" Flow: A user receives a critical email from a major client with a complex question. Instead of forwarding it and starting a confusing chain, the user clicks Share to Stream and selects the "#Project-A-Team" stream. The whole team is instantly notified in Aura Cliq. They can then have a chat conversation about the email, right next to it. Once they decide on a response, one person writes a reply.
The "CRM-Integrated" Flow: An email arrives from an unknown person. The AURA Integration Panel on the right says, "This person is not in your CRM." It provides a + Add as Lead button. With one click, a new lead is created in Aura CRM, and the email is automatically logged as the first activity on that lead's timeline.`,
    "MarketingAutomation": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Marketing Automation"
Global Search Bar: Placeholder: "Search by journey, lead, or campaign name..."
Quick Create Button (+ Icon):
New Journey
New Email Campaign
New Segment
Notifications Bell Icon: Alerts for "A lead has completed the 'Welcome' journey," "A/B test winner found," etc.
Settings Gear Icon: Links to the main automation settings page.
User Profile Icon: Profile, Logout.
2. Aura Marketing Automation Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main marketing overview. Widgets for "Lead Funnel" (showing leads at each stage), "Active Journeys," "Revenue Attribution," and "Top Performing Campaigns."
Section: Lead Management
Icon: Users
Pages:
All Leads: A master list of all leads in the system.
Lead Scoring: A page to set up rules for scoring leads based on their properties and behavior (e.g., "+10 points for opening an email," "+50 points for visiting the pricing page").
Segments: Create dynamic lists of leads based on complex criteria.
Section: Engagement
Icon: Send
Pages:
Journeys: The core of the app. A list of all automated customer journeys.
Email Campaigns: A tool to build the individual emails that will be used inside your journeys.
SMS Campaigns: A tool to build SMS messages.
Web Push: A tool to create browser push notifications.
Section: Content
Icon: FileText
Pages:
Landing Pages: A builder to create landing pages for your campaigns.
Forms: A tool to create lead capture forms (integrates with Aura Forms).
Image Library: A central place to manage marketing images.
Section: Website
Icon: Globe
Pages:
Website Tracking: A page to get the tracking code for your website and see live visitor activity.
Web Assistant: A tool to create and manage on-site messages like pop-ups and banners.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Journey Performance," "Lead Source ROI," "Email Analytics," and "Website Engagement."
3. Page-Level Toolbars & Main Interface (The Journey Builder)
The most important interface is the Journey Builder, a large, visual, full-screen canvas.
Components of the Journey Builder:
Left Panel (Triggers & Actions):
Triggers (The "Start"): A list of events that can start a journey. (e.g., Fills out a Form, Is added to a List, Visits a Webpage). The user drags a trigger onto the canvas to begin.
Actions (The "Do"): A list of actions the system can take. (e.g., Send Email, Send SMS, Add a Tag, Update a Field in CRM).
Logic (The "Decide"): A list of logic controls. (e.g., Wait for a period of time, Check a Condition like "did they open the last email?", Split the path for an A/B test).
Center Panel (The Canvas):
The user drags triggers, actions, and logic from the left panel onto the canvas and connects them with lines to visually map out the entire customer journey.
Top Bar: Buttons to Save the journey, Test the journey, and Activate the journey.
4. Data Entry & Modals
Configuring an Action (Modal): When a user drags an action (like Send Email) onto the canvas, a modal pops up. It will have a dropdown to select the specific email campaign they want to send from their library.
Viewing Lead Activity (Side Panel): Clicking on a lead in the All Leads list opens a side panel showing a complete chronological timeline of every action that lead has ever taken: every email they've opened, every page they've visited, and every journey they have entered.
5. Bottom Bar
Non-existent. All focus is on the journey builder canvas.
6. Task Info & Key Workflows
The "Welcome Series" Flow: A user wants to create a 3-email welcome series for new subscribers. They open the Journey Builder. They drag the Fills out a Form trigger onto the canvas and select their "Newsletter Signup" form. They connect it to a Send Email action and choose their "Welcome Email #1". They connect that to a Wait action set to "2 days." They connect that to another Send Email action for "Welcome Email #2," and so on. Finally, they click Activate. The entire process is now automated.
The "Lead Nurturing" Flow (Advanced): A user wants to nurture leads who download an ebook. They create a journey triggered by a form submission. The journey sends a series of educational emails. It uses a Check a Condition logic block to see if a lead has visited the pricing page. If they have, the journey automatically adds a "Hot Lead" tag, updates their Lead Score to 100, and sends a notification to a sales rep in Aura CRM to follow up personally. If they haven't, the journey continues sending them more educational content.
The "Sales & Marketing Alignment" Flow: The Lead Scoring rules are set up. A lead from a marketing journey reaches a score of 100. This high score acts as a trigger in a workflow that automatically creates a new Deal in Aura CRM and assigns it to a sales representative, bridging the gap between marketing and sales.`,
    "MarketingPlus": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Shows a curated list of the apps in the Marketing Plus suite.
Current App Name: "Aura Marketing Plus"
Global Search Bar: A "super-search" that can find any campaign, landing page, social post, or lead across ALL connected marketing apps.
Quick Create Button (+ Icon): A unified dropdown with the most common marketing actions: New Campaign, New Social Post, New Landing Page, New Survey.
Notifications Bell Icon: An aggregated feed of marketing alerts: "A new lead has been generated from the webinar," "Your social media post is getting high engagement," "An A/B test has a winner."
Settings Gear Icon: Links to the main settings page for the entire suite, managing brand assets, tracking codes, and integrations.
User Profile Icon: Profile, Logout.
2. Aura Marketing Plus Sidebar (The "Suite" Sidebar)
This is a simple, high-level sidebar focused on the different stages of the marketing process.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard. This is the core of the experience.
Section: Planning
Icon: Calendar
Pages:
Marketing Calendar: A unified, cross-app calendar that shows everything the marketing team is doing. It displays scheduled Email Campaigns, Social Posts, Webinars, and Blog Posts all in one view.
Section: Execution
Icon: Megaphone
Pages:
Campaigns: A unified list of all marketing campaigns, regardless of the channel.
Content: A central library for all marketing assets (email templates, landing page templates, social media images).
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of special cross-functional reports, such as "Full Funnel Analytics" (tracking a lead from a social post, to a landing page, to a CRM deal) and "Campaign ROI."
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura Campaigns, Aura Social, Aura LandingPage, Aura Survey, etc.).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly customizable, widget-based dashboard for the CMO or marketing manager.
Default Widgets:
Marketing Funnel: A live, visual funnel showing Website Visitors (from SalesIQ/Sites), Leads Generated (from Forms/LandingPage), Marketing Qualified Leads (MQLs) (from Marketing Automation), and Sales Qualified Leads (SQLs) (from CRM).
Lead Generation by Source: A pie chart showing where new leads are coming from (Organic Search, Social Media, Paid Ads, etc.).
Active Journeys: A summary of leads currently in automated nurturing flows from Aura Marketing Automation.
Recent Social Media Engagement: A feed from Aura Social showing top-performing posts.
Ongoing Email Campaigns: A summary of recent email campaign performance from Aura Campaigns.
Website Performance: Key metrics like "Conversion Rate" from Aura PageSense.
4. Data Entry & Modals
This application is primarily for viewing and analyzing combined data. Most data entry happens within the individual applications.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "CMO's Daily Briefing" Flow: A marketing director starts their day by opening the Aura Marketing Plus Dashboard. In a single view, they see how many new leads were generated yesterday, which channels they came from, and how the main "Welcome Series" journey is performing. They can see the entire marketing engine's health without logging into 5 different apps.
The "Campaign Planning" Flow: A marketing team is planning their Q4 product launch. They use the unified Marketing Calendar to schedule all their activities. They drag and drop to plan the launch day blog post, the week-long social media teaser campaign, the announcement email blast, and the follow-up webinar. Everyone on the team can see the entire campaign timeline in one place.
The "Full Funnel ROI" Flow (Integrated): A user wants to know if their social media efforts are actually making money. They go to the Reports section in Marketing Plus. They run the "Full Funnel Analytics" report. This report automatically:
Pulls "Ad Spend" data from their ad platform integration.
Pulls "Clicks and Engagement" data from Aura Social.
Pulls "Leads Generated" data from Aura LandingPage.
Pulls "Leads Nurtured" data from Aura Marketing Automation.
Pulls "Deals Won and Revenue" data from Aura CRM.
It then presents a single, clear report showing the exact ROI of their social media campaign.`,
    "Meeting": `
 Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Meeting"
Global Search Bar: Placeholder: "Search by meeting title, attendee, or date..."
Quick Create Button (+ Icon):
Start an Instant Meeting
Schedule a Meeting
Notifications Bell Icon: Alerts for "Your meeting is starting in 5 minutes," "A new recording is ready," etc.
Settings Gear Icon: Links to the main Meeting settings.
User Profile Icon: Profile, Logout.
2. Aura Meeting Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A clean interface showing "Today's Meetings," a large button to Start a Meeting, and a field to Join a Meeting with an ID.
Section: Meetings
Icon: Video
Pages:
My Meetings: A list of all your upcoming and past meetings.
Schedule Meeting: This opens the full-page scheduler to create a new, future meeting.
Meeting Templates: A place to save settings for recurring meeting types (e.g., "Weekly Team Sync," "Client Discovery Call").
Section: Library
Icon: PlayCircle
Pages:
Recordings: A searchable list of all your cloud recordings of past meetings. Each recording can be played, shared, or downloaded.
Transcripts: If enabled, this page shows the automatically generated text transcripts of your recorded meetings.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Meeting Usage" (how many meetings, total minutes), "Attendance Reports" (who attended and for how long), and "Engagement Analytics."
Section: Administration
Icon: Settings
Pages:
Settings: The main settings page with tabs for My Profile (to set your virtual background), Audio/Video devices, Recording settings, and Security (waiting rooms, passcodes).
Integrations: A page to manage connections with Aura Calendar, Aura CRM, and other apps.
3. Page-Level Toolbars & Main Interface (The In-Meeting Experience)
The most critical interface is the In-Meeting Window.
Main View: A dynamic grid that shows the video feeds of all participants. The layout automatically adjusts, often highlighting the person who is currently speaking.
Bottom Toolbar (The Main Controls - visible on hover):
Mute / Unmute: Controls your microphone.
Start / Stop Video: Controls your camera.
Participants: Opens a side panel listing all attendees.
Chat: Opens a side panel for in-meeting text chat.
Share Screen: The most important button. Opens a menu to let you share your entire screen, a specific application window, or a browser tab.
Record: A button to start recording the meeting to the cloud.
Reactions: A button to send emoji reactions (like 👍 or 🎉).
More Actions (...): A menu with advanced features like Breakout Rooms, Polls, and Virtual Backgrounds.
Leave: A red button to exit the meeting.
Participants Panel (Side Panel):
A list of everyone in the meeting. The host has controls next to each name to Mute, Stop Video, or Make Host.
Includes non-verbal feedback buttons like Raise Hand.
4. Data Entry & Modals
Scheduling a Meeting (Full Page Form): A detailed form with fields for "Meeting Title," "Date & Time," a list to invite Attendees (integrates with Aura Contacts), and security options like "Enable Waiting Room" and "Require Passcode."
Choosing a Virtual Background (Modal): A pop-up that shows your camera feed and allows you to select a pre-set background image, upload your own, or apply a blur effect.
5. Bottom Bar
Non-existent. All controls are in the in-meeting toolbar.
6. Task Info & Key Workflows
The "Instant Sync" Flow: A user in Aura Cliq is chatting with two colleagues about a complex problem. The text chat is too slow. The user clicks a /meet slash command in the chat. Aura Meeting instantly creates a new meeting and posts the join link directly into the chat. All three colleagues click the link and are in a video call within 10 seconds.
The "Scheduled Client Call" Flow: A user needs to schedule a demo for a client in Aura CRM. They go to Aura Meeting and click Schedule Meeting. They give it a title and time. In the "Attendees" field, they start typing the client's name, and it auto-suggests the contact from Aura CRM. They schedule the meeting. The system automatically creates an event in Aura Calendar, sends a professional email invitation with the join link to the client, and logs the upcoming meeting on the client's timeline in Aura CRM.
The "Project Huddle" Flow: A developer is working in their GitHub Codespace and needs to show their screen to a teammate. They start an instant meeting, share their screen, and walk through the code. The teammate uses the Annotation tools (part of screen sharing) to draw a circle around a bug in the code. The problem is identified and solved in minutes. After the meeting, the host finds the session in their Recordings library and shares a link with the rest of the team so they can see the solution.`,
    "Notebook": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Notebook"
Global Search Bar: A very powerful search bar. It searches not only the text of notes but also the text inside images and PDFs (using OCR). Placeholder: "Search all notes..."
Quick Create Button (+ Icon): This is a special "multi-action" button.
Clicking it opens a new Text Note.
Holding it or clicking a dropdown reveals other options: New Checklist, New Audio Note, New Photo Note, New Sketch.
Notifications Bell Icon: Alerts for "A note has been shared with you," "Reminder for 'Buy Groceries' note," etc.
Settings Gear Icon: Links to the main Notebook settings.
User Profile Icon: Profile, Logout.
2. Aura Notebook Internal Sidebar
This sidebar is focused on organization and filtering.
Section: Main
Icon: BookOpen
Pages:
All Notes: The default view. A visual, card-based grid of all your most recent notes.
Notebooks: This is the primary organizational tool. It shows a list of all your notebooks. Clicking a notebook filters the main view to show only the notes inside it.
Favorites: A filtered view showing only the notes you have starred.
Section: Quick Filters
Icon: Filter
Pages:
Reminders: Shows only the notes that have a reminder set.
Audio Notes: Shows only your voice recordings.
Photos: Shows only your photo notes.
Checklists: Shows only your to-do lists.
Files: Shows only notes with file attachments.
Sketches: Shows only your drawings.
Section: Collaboration
Icon: Users
Pages:
Shared with Me: A list of all notes and notebooks that other people have shared with you.
Section: Administration
Icon: Archive
Pages:
Trash: A list of all deleted notes, which can be restored.
3. Page-Level Toolbars & Main Interface (The Note Cards)
The main interface is a visual grid of "Note Cards." Each card has a different color and a preview of its content.
Top Toolbar (above the grid):
View Switcher: Icons to toggle between Card View (the visual default) and List View (a more compact, simple list).
Sort Controls: A dropdown to sort notes by Date Modified, Date Created, or Title.
The Note Editor (when you click on a card):
A clean, distraction-free editor opens, focused on the content.
The type of editor changes based on the note type (a text editor, a checklist interface, an image viewer, an audio player, a drawing canvas).
Toolbar at the bottom of the editor:
Actions: Set Reminder, Share Note, Add to Favorites (Star), Info (shows created date, word count), Move to Notebook.
Color Palette: A row of colors to change the background color of the note card.
More Actions (...): Version History, Lock Note (with a passcode), Delete.
4. Data Entry & Modals
Creating a Note: The primary interaction. On mobile, the user opens the app and is immediately presented with buttons to start a new text, audio, or photo note, designed for capturing ideas instantly.
The Web Clipper: A browser extension that allows a user to "clip" an entire webpage or a simplified, text-only version of it, which is then saved as a new note card in their Notebook.
Setting a Reminder (Modal): Clicking the reminder icon opens a simple pop-up with a date and time picker.
5. Bottom Bar
On the main dashboard, the + button is often a large, floating action button at the bottom of the screen for quick access.
6. Task Info & Key Workflows
The "Quick Idea" Flow: A user is walking and has a great idea. They pull out their phone, open Aura Notebook, and tap the Audio Note button. They speak their idea. The app records the audio and, using AI, also provides an automatic text transcription of their words. The note is now searchable by text.
The "Meeting Notes" Flow: A user is in a meeting. They open a new Text Note. They type the meeting notes. Another team member takes a picture of the whiteboard with their phone and adds it to the same note as a Photo Card. The note now contains both the typed text and the image, all in one place.
The "Shopping List" Flow: A user creates a Checklist Card for their groceries. They add items like "Milk," "Eggs," "Bread." They share this note with their spouse. At the store, they both open the same note on their phones. As one person puts an item in the cart, they check it off the list, and the list updates in real-time on the other person's phone.
The "Research" Flow: A user is researching a topic online. They use the Web Clipper browser extension to save three important articles to their "Research" notebook. Later, they open Aura Notebook, go to that notebook, and use the search bar to find a specific keyword. The search results show that keyword not only in the text of the articles but also in a screenshot they had taken and saved as a photo note, thanks to the AI-powered OCR.
`,
    "OfficeIntegrator": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Office Integrator"
Global Search Bar: Placeholder: "Search API logs, documentation, or API keys..."
Quick Create Button (+ Icon):
New API Key
Notifications Bell Icon: Alerts for "API usage nearing limit," "New SDK version available," "Webhook is failing," etc.
Settings Gear Icon: Links to the main administration and billing settings.
User Profile Icon: Profile, Logout.
2. Aura Office Integrator Internal Sidebar
This sidebar is a Developer Portal, designed for the software engineers who will be using the service.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Widgets for "API Call Volume," "Active Document Sessions," "Top Used APIs," and a feed of "Product Updates."
Section: Development
Icon: Code
Pages:
API Keys: The most critical page. A list of all generated API keys. Users can Create New Key, set permissions (scopes), and Revoke old keys.
Documentation: A comprehensive, interactive API reference guide.
SDKs: A page to download Software Development Kits (SDKs) for different programming languages (JavaScript, Python, etc.).
Webhooks: A page to configure webhooks to receive real-time notifications about events (e.g., "document saved," "collaboration session ended").
Section: Customization
Icon: Palette
Pages:
Branding (White-Label): A visual editor to customize the embedded office suite. Users can Upload their Logo, set a custom Color Scheme, and toggle UI elements to make the editors match their own application's brand.
Section: Analytics
Icon: BarChart3
Pages:
Usage Reports: Detailed reports on API usage, active users, and document creation trends.
Audit Logs: A searchable log of all API calls and administrative actions.
Section: Administration
Icon: Settings
Pages:
Billing: Manage subscription plan and view payment history.
Team: Invite other developers from your organization to the account.
3. Page-Level Toolbars & Main Interface
The API Documentation Page:
A classic, three-panel documentation interface.
Left Panel: A searchable navigation tree of all available API endpoints.
Center Panel: A detailed description of the selected endpoint, its parameters, and expected responses.
Right Panel: Interactive code snippets in various programming languages that developers can copy and paste.
The Branding Customizer:
A live, interactive preview of the embedded Aura Writer editor.
A right-side panel with color pickers and upload buttons allows the developer to see their branding changes in real-time.
4. Data Entry & Modals
Creating an API Key (Modal): A secure pop-up that asks for a "Key Name" and has a series of checkboxes to define its "Scopes" (permissions), such as Read Documents, Write Documents, Access Collaboration Features.
The primary "data entry" for this app is code, written by developers in their own applications, that calls the Aura Office Integrator API.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "SaaS Integration" Flow: A developer for another company (e.g., a Legal Tech startup) wants to add contract editing to their app. They sign up for Aura Office Integrator. They go to the API Keys page and generate a new key with Read and Write permissions. They read the Documentation to understand the API. In their own application's code, they use the API to create a new document session. When their user clicks "Edit Contract," their application displays the fully-featured Aura Writer editor inside their own UI, using the branding they configured in the White-Labeling section.
The "Collaborative Session" Flow: Two users are in the Legal Tech app, looking at the same contract. The app's backend uses the Office Integrator API to place both users into the same collaborative session. They can now see each other's cursors and type in real-time, all within the embedded Aura Writer, without ever knowing they are using an AURA product.
The "Document Generation" Flow (Automation): An insurance company needs to generate 1,000 personalized policy documents. A developer writes a script that calls the Office Integrator API. The script uses a Template from the company's account, loops through a list of customers, merges each customer's data into the template, and uses the Download as PDF API endpoint to generate a final, non-editable PDF for each customer, which is then saved to Aura WorkDrive.`,
    "OfficeSuite": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Office Suite"
Global Search Bar: A very powerful search bar that searches across the content of all your Writer documents, Sheet spreadsheets, and Show presentations at once. Placeholder: "Search all your files..."
Quick Create Button (+ Icon):
New Document (launches Aura Writer)
New Spreadsheet (launches Aura Sheet)
New Presentation (launches Aura Show)
Notifications Bell Icon: Aggregates notifications from all three apps (new comments, new shares, etc.).
Settings Gear Icon: Links to the main settings page for the Office Suite.
User Profile Icon: Profile, Logout.
2. Aura Office Suite Internal Sidebar
This sidebar is focused on providing a unified view of all files, regardless of their type.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A clean, visual interface.
Top Section: Large "New Document," "New Spreadsheet," "New Presentation" buttons.
Main Section: A single, mixed feed of "Recent Files," showing your most recently opened documents, sheets, and presentations all together.
Section: Files
Icon: Files
Pages:
All Files: The central file explorer. This is a unified view of your entire Aura WorkDrive, showing all folders and files together. Icons clearly distinguish between Writer, Sheet, and Show file types.
My Files: Your personal files.
Shared with Me: All files (docs, sheets, presentations) shared with you.
Recent: A more detailed list of recent files.
Trash: A unified trash for all deleted office files.
Section: File Types (Quick Filters)
Icon: Filter
Pages:
Documents: A filtered view showing only your Aura Writer documents.
Spreadsheets: A filtered view showing only your Aura Sheet spreadsheets.
Presentations: A filtered view showing only your Aura Show presentations.
Section: Library
Icon: BookOpen
Pages:
Templates: A unified gallery of all templates for Writer, Sheet, and Show, categorized by type.
3. Page-Level Toolbars & Main Interface
On the "All Files" Page:
Title: "All Files"
Toolbar: Buttons for + New (dropdown for file type), New Folder, Upload File.
Main View: A list or grid of files and folders. Each file has a clear icon indicating its type (Writer, Sheet, or Show). Clicking on a file does not open it in a modal. Instead, it navigates the user away from the Office Suite dashboard and opens the full, dedicated application (Aura Writer, Aura Sheet, or Aura Show) in the browser.
4. Data Entry & Modals
This application has very little data entry itself. Its primary job is to launch the other applications.
Creating a New Folder (Modal): A simple pop-up that just asks for the folder name.
5. Bottom Bar
A thin bar at the bottom might show the user's total storage usage from Aura WorkDrive.
6. Task Info & Key Workflows
The "Start the Day" Flow: A user's first action is to open the Aura Office Suite. They land on the Dashboard. In the "Recent Files" feed, they see the "Quarterly Report" spreadsheet they were working on yesterday. They click it. The browser navigates them directly into the full Aura Sheet application, with the spreadsheet open and ready to edit.
The "New Project" Flow: A user needs to create three new files for a project: a proposal, a budget, and a presentation. They go to the Aura Office Suite. They navigate to the correct project folder within the All Files view. They click the + New button and select Document to create the proposal in Aura Writer. They come back to the Office Suite tab, click + New again, and select Spreadsheet to create the budget in Aura Sheet. All files are automatically saved in the correct project folder.
The "Find Anything" Flow: A user remembers they wrote about "Project Phoenix" somewhere, but they can't remember if it was in a document, a spreadsheet, or a presentation. They go to the Aura Office Suite and use the Global Search Bar. They type "Project Phoenix." The search results appear in a unified list, showing a Writer document named "Project Phoenix Proposal," a Sheet named "Project Phoenix Budget," and a Show presentation that mentions the project in its slide notes.`,
    "PDFEditor": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura PDF Editor"
Global Search Bar: Placeholder: "Search by document name..."
Quick Create Button (+ Icon): Not a primary feature. Actions are tool-based.
Notifications Bell Icon: Alerts for "Your PDF conversion is complete," "A document has been shared with you for comments," etc.
Settings Gear Icon: Links to the main PDF Editor settings.
User Profile Icon: Profile, Logout.
2. Aura PDF Editor Internal Sidebar
This sidebar is tool-focused. It is a list of all the different actions you can perform on a PDF.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A grid of large, iconic buttons for the most popular tools (Edit PDF, Merge PDFs, Compress PDF). Also shows a list of "Recent Files."
Section: Edit & Convert
Icon: Edit3
Pages:
Edit PDF: The main editor for adding text, images, and shapes.
Convert to PDF: A tool to convert Word, Excel, PowerPoint, or JPG files into a PDF.
Convert from PDF: A tool to convert a PDF into an editable Word, Excel, or PowerPoint file.
Section: Organize
Icon: Layers
Pages:
Merge PDFs: Combine multiple PDF files into one single document.
Split PDF: Extract specific pages from a PDF into a new file.
Reorder & Delete Pages: A visual tool to drag and drop page thumbnails to reorder them or delete unwanted pages.
Rotate Pages: Rotate specific pages.
Section: Optimize & Secure
Icon: Shield
Pages:
Compress PDF: Reduce the file size of a large PDF.
Password Protect: Add a password to a PDF to restrict opening.
Unlock PDF: Remove a password if you know it.
Add Watermark: Place a text or image watermark on every page.
Section: Sign & Fill
Icon: PenTool
Pages:
Fill & Sign: A tool to fill out form fields and add your digital signature (integrates with Aura Sign).
3. Page-Level Toolbars & Main Interface (The Tool View)
The core of the app is a simple, workflow-based interface for each tool.
Typical Workflow:
Upload Screen: A large, friendly drag-and-drop area that says "Drop your PDF here" or a "Select File" button.
Tool Interface: After the file is uploaded, the specific tool's interface appears.
Download Screen: After the action is complete, a confirmation screen appears with a large "Download Your New PDF" button and a preview of the file.
Example: The "Merge PDFs" Interface:
After uploading multiple files, they appear as large thumbnails.
The user can drag and drop the thumbnails to get them in the correct order.
A large Merge PDFs button is on the right.
Example: The "Edit PDF" Interface:
The uploaded PDF is shown in a viewer.
A toolbar appears at the top with simple tools: Add Text, Add Image, Draw, Highlight. The user clicks a tool and then clicks on the PDF to apply the change.
4. Data Entry & Modals
Data entry is minimal and highly contextual to the tool being used (e.g., typing text in the "Add Text" tool, setting a password in the "Password Protect" modal).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Combine Reports" Flow: A user has three separate weekly reports saved as PDFs. They need to combine them into a single monthly report. They go to Aura PDF Editor, choose the Merge PDFs tool, and upload the three files. They drag them into the correct weekly order and click "Merge." They can then download the single, combined monthly report PDF.
The "Fix a Typo" Flow: A user receives a final PDF contract from a client but notices a small typo. Instead of asking the client to resend it, they use the Edit PDF tool. They upload the PDF, click the Add Text tool, draw a white box over the typo to hide it, and then use the text tool again to type the correct word on top. They download the corrected version.
The "Secure Document" Flow: An HR manager needs to send a sensitive employee document. They use the Password Protect tool. They upload the PDF, and a modal asks them to set and confirm a password. They download the new, encrypted PDF. They then send the PDF in one email and the password in a separate, secure message (like an Aura Cliq chat).
The "File Size" Flow (Integration): A user is trying to attach a large PDF to an email in Aura Mail, but it's over the 25MB attachment limit. Aura Mail automatically shows a pop-up: "This file is too large. Would you like to compress it with Aura PDF Editor?" The user clicks "Yes." The file is sent to the Compress PDF tool, a smaller version is created, and it is automatically attached to the email.
`,
    "PageSense": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura PageSense"
Global Search Bar: Placeholder: "Search by experiment name, page URL..."
Quick Create Button (+ Icon):
New Experiment (opens a dropdown to choose the type)
Notifications Bell Icon: Alerts for "A/B test has reached statistical significance," "New session recording available," etc.
Settings Gear Icon: Links to the main PageSense settings page.
User Profile Icon: Profile, Logout.
2. Aura PageSense Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "All Active Experiments," a summary of recent test results, and key conversion metrics across all monitored websites ("Projects").
Section: Projects
Icon: Folder
Pages:
All Projects: A list of all the websites you are tracking. A "Project" is a single website.
Section: Analysis Tools
Icon: Eye
Pages:
Heatmaps: A list of all created heatmaps. Users can view click maps, scroll maps, and attention maps for any page on their site.
Session Recordings: A searchable and filterable list of video recordings of real user sessions on your website.
Form Analytics: A list of all forms being tracked, showing detailed reports on form completion rates, drop-off points, and time spent on each field.
Funnels: A list of all conversion funnels, showing a visual representation of how users move through a multi-step process (like a checkout flow) and where they drop off.
Section: Optimization Tools
Icon: Target
Pages:
A/B Testing: A list of all A/B tests. Users can create tests to compare two or more versions of a webpage to see which one performs better.
Split URL Testing: A list of tests where traffic is split between two completely different URLs.
Personalization: A tool to create custom experiences for different segments of your audience (e.g., "Show a special offer to visitors from India").
Section: Feedback Tools
Icon: MessageSquare
Pages:
Polls: Create and manage simple, on-page polls.
Push Notifications: Create and manage web push notification campaigns.
Section: Core Components
Icon: CheckCircle
Pages:
Goals: A list of all conversion goals. A "Goal" is a specific action you want users to take (e.g., "Clicked the 'Buy Now' button," "Signed up for the newsletter").
Audiences: Create and manage different user segments for targeting in experiments and personalization.
3. Page-Level Toolbars & Main Interface
The Heatmap Viewer:
Displays a screenshot of your webpage with a colorful overlay showing where users click the most (from red for "hot" to blue for "cold").
A toolbar at the top allows switching between Click Map, Scroll Map, and Move Map, and also switching between Desktop, Tablet, and Mobile views.
The Session Recording Player:
A video player interface.
A timeline below the video shows user events like clicks, scrolls, and rage clicks.
A side panel shows information about the user (country, device, pages visited).
The A/B Test Builder (Visual Editor):
Loads your webpage in a special editor.
You can click on any element (like a button or headline) and a pop-up appears allowing you to Change Text, Change Color, Hide Element, etc., for your "Variation."
You then set a Goal for the test and click Launch.
4. Data Entry & Modals
Creating a New Experiment (Wizard): A multi-step process: 1. Enter the URL of the page to test. 2. Use the Visual Editor to create your variation. 3. Select the Goal to measure. 4. Launch.
Filtering Session Recordings (Interface): A powerful filtering sidebar allows you to find specific recordings, e.g., "Show me all recordings from mobile users in India who visited the pricing page but did not convert."
5. Bottom Bar
Non-existent. All focus is on the data visualization and experiment setup.
6. Task Info & Key Workflows
The "Why Aren't People Clicking?" Flow: A user wonders why nobody is clicking their "Request a Demo" button. They create a Heatmap for their homepage. The heatmap visually shows that users are clicking on a non-clickable image right next to the button. The user realizes the design is confusing and uses this insight to improve the page.
The "Improve Conversions" Flow: A user wants to improve their pricing page. They go to A/B Testing and create a new experiment. In the Original version, the button says "Sign Up." In the Variation, they use the Visual Editor to change the button text to "Start Your Free Trial." They set the Goal to be a click on that button. After running the test for a week, Aura PageSense tells them that "Start Your Free Trial" resulted in a 30% increase in conversions, and they can confidently make that change permanent.
The "Find a Bug" Flow: A customer emails support saying they can't complete a form. The developer goes to Session Recordings and filters for users who encountered an error on that form page. They watch a recording and see the user's mouse repeatedly clicking a broken button, visually identifying a bug that was hard to reproduce.`,
    "Payments": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Payments"
Global Search Bar: Placeholder: "Search by transaction ID, customer email, or last 4 digits..."
Quick Create Button (+ Icon): Not typically present, as actions are initiated from other apps.
Notifications Bell Icon: Alerts for "Chargeback filed," "Gateway connection error," "Large refund processed," etc.
Settings Gear Icon: Links to the main Payments settings.
User Profile Icon: Profile, Logout.
2. Aura Payments Internal Sidebar
This sidebar is for the administrator or finance team to manage the flow of money.
Section: Home
Icon: Home
Pages:
Dashboard: The main financial transaction overview. Widgets for "Total Volume Today," "Transaction Success Rate," "Active Payment Gateways," and a live feed of recent transactions.
Section: Transactions
Icon: CreditCard
Pages:
All Transactions: A master, searchable log of every single payment attempt, successful or failed, from every AURA app.
Payments: A filtered list of only successful payments.
Refunds: A list of all refunds processed.
Disputes & Chargebacks: A critical section to manage and respond to customer payment disputes.
Section: Gateways
Icon: Server
Pages:
Gateway Management: A page to connect and manage relationships with different payment processors (Stripe, PayPal, Adyen, etc.).
Routing Rules: An advanced feature to create rules for which gateway to use for certain transactions (e.g., "Use Stripe for all international cards," "If Stripe fails, automatically retry with PayPal").
Section: Security
Icon: Shield
Pages:
Fraud Protection: A page to configure rules to automatically block suspicious transactions (e.g., "Block transactions over $1000 from a new country").
PCI Compliance: A dashboard that shows the compliance status and provides necessary documentation.
Section: Customers
Icon: Users
Pages:
Customer Vault: A secure, tokenized list of all customer payment methods (credit cards, bank accounts) saved across the AURA suite.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Reports on "Transaction Volume by Gateway," "Payment Success Rates," "Refund Rates," and "Chargeback Trends."
3. Page-Level Toolbars & Main Interface
On the "All Transactions" Page:
Title: "Transactions"
Filters: Powerful filters for "Date Range," "Amount," "Currency," "Payment Gateway," "Status," and the "Source App" (e.g., show me all successful payments from Aura Commerce).
On a "Single Transaction Detail" Page (often a modal):
Shows all details of a single transaction: amount, customer, gateway used, a timeline of its status (authorized, captured, settled), and the raw response data from the gateway.
Action Button: A Refund button is the primary action.
4. Data Entry & Modals
Connecting a Gateway (Wizard): A secure, multi-step wizard that asks the user to enter their API keys and credentials for an external payment processor like Stripe.
Issuing a Refund (Modal): Clicking the Refund button opens a modal. The user can choose a "Full Refund" or "Partial Refund" (where they enter a specific amount). They must type a reason for the refund before confirming.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Behind-the-Scenes Payment" Flow (Automation): A customer is on the Aura Checkout page and clicks "Pay Now." The Checkout app sends a secure request to the Aura Payments app. Aura Payments looks at its Routing Rules, chooses the best gateway (e.g., Stripe), securely sends the payment information to Stripe, gets a "Success" response, records the transaction in its Transactions log, and then tells the Checkout app that the payment was successful. The customer sees a "Thank You" message. This entire process happens in under 2 seconds.
The "Dispute Management" Flow: A customer files a chargeback with their credit card company. The payment gateway notifies Aura Payments. A new item appears in the Disputes & Chargebacks list. The finance manager gets a notification. They click on the dispute, which shows them the original transaction and order details from Aura Commerce. They use the interface to upload evidence (like a shipping confirmation) to fight the chargeback.
The "Gateway Failover" Flow (Automation): A customer tries to pay, but the primary gateway (Stripe) is temporarily down. Aura Payments receives an error. The Routing Rules automatically tell it to retry the same transaction with the secondary gateway (PayPal). The payment succeeds. The customer experiences no interruption, and the business does not lose the sale.`,
    "Payroll": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Payroll"
Global Search Bar: Placeholder: "Search by employee name or pay run..."
Quick Create Button (+ Icon):
Add Employee
Notifications Bell Icon: Alerts for "Payroll is due in 3 days," "Tax filing deadline is approaching," "Timesheets are ready for approval," etc.
Settings Gear Icon: Links to the main Payroll settings.
User Profile Icon: Profile, Logout.
2. Aura Payroll Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main payroll control center. Shows a "To-Do" list (e.g., "Run Payroll," "Approve Timesheets"), a countdown to the next payday, and a summary of the last payroll run (total cost, number of employees paid).
Section: Payroll
Icon: Calculator
Pages:
Run Payroll: The primary, multi-step wizard for processing payroll.
Pay Runs: A history of all past payrolls, with links to detailed reports for each.
Contractors: A separate section to manage and pay independent contractors.
Section: Employees
Icon: Users
Pages:
All Employees: A list of all employees in the payroll system. Clicking an employee opens their detailed profile.
Onboarding: A wizard to add a new employee, gathering their personal info, tax forms, and bank details.
Offboarding: A checklist and process for an employee's final paycheck.
Section: Benefits & Deductions
Icon: Heart
Pages:
Benefits: A page to set up and manage company benefits, like health insurance or retirement plans, and their corresponding deductions.
Deductions: A list of all other pre-tax and post-tax deductions.
Section: Taxes & Filings
Icon: Shield
Pages:
Tax Filings: A dashboard showing all federal and state payroll tax forms that have been filed automatically by the system.
Tax Payments: A log of all tax payments made on the company's behalf.
Year-End Forms: A section to generate and distribute year-end tax forms to employees (like W-2s).
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of payroll reports, including "Payroll Summary," "Labor Cost by Department," and "Tax Liability."
3. Page-Level Toolbars & Main Interface (The "Run Payroll" Wizard)
The most critical interface is the Run Payroll Wizard, a secure, step-by-step process.
Step 1: Timesheets & Hours:
Imports approved hours from Aura People (Time & Attendance module).
Allows for manual entry of special hours like overtime or vacation pay.
Step 2: Review Payroll:
A detailed table showing each employee, their gross pay, deductions, taxes, and final net pay.
The user must carefully review this screen. Totals are displayed at the bottom.
Step 3: Submit Payroll:
A final confirmation screen. The user clicks a large, green "Submit Payroll" button. They may be asked to enter a 2FA code for security.
The Employee View (Employee Self-Service Portal):
A separate, secure portal that employees can log into.
Pages: Paystubs (view and download all past paystubs), Tax Forms, My Profile (update bank account or address).
4. Data Entry & Modals
Adding an Employee (Full Page Wizard): A secure, multi-step form to collect sensitive information: legal name, address, tax filing information, and bank account details for direct deposit.
Previewing a Paystub (Modal): In the "Review Payroll" step, clicking on an employee's name opens a modal pop-up showing a preview of what their exact paystub will look like.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Bi-weekly Payroll" Flow: Two days before payday, the payroll admin gets a reminder. They log into Aura Payroll and click Run Payroll. The system automatically pulls in all the approved hours from Aura People. The admin reviews the summary, checks for any anomalies, and clicks Submit. On payday, the system automatically processes the direct deposits to all employees and debits the company bank account.
The "New Hire" Flow: A manager hires a new employee in Aura Recruit. This automatically triggers the Onboarding workflow in Aura Payroll. The new employee receives a secure link to a self-service portal where they can fill out all their personal and tax information themselves, reducing administrative work and errors.
The "Tax Filing" Flow (Automated): After each payroll run, Aura Payroll automatically calculates the company's federal and state tax liabilities. At the end of the quarter, the system automatically files the necessary tax forms and makes the tax payments electronically. The admin simply receives a notification that the filing is complete.`,
    "People": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura People"
Global Search Bar: Placeholder: "Search for an employee, policy, or report..."
Quick Create Button (+ Icon) (Admin only):
Add Employee
New Announcement
Notifications Bell Icon: Alerts for "Your leave request was approved," "A new company policy was published," "Performance review is due," etc.
Settings Gear Icon: Links to the main HR administration settings.
User Profile Icon: Quick link to the user's own detailed profile.
2. Aura People Internal Sidebar
This sidebar is role-based. A regular employee sees a simple "Self-Service" view, while an HR Manager sees the full, powerful administrative sidebar.
A) Employee Self-Service Sidebar
Section: Home
Icon: Home
Pages:
My Space: The main dashboard for an employee. Widgets for "My Leave Balance," "Upcoming Holidays," "Company Announcements," and quick links to check in/out.
Section: My Profile
Icon: User
Pages:
My Profile: View and update personal information, emergency contacts, etc.
My Documents: A secure place to view personal documents like payslips and offer letters.
Section: Time & Attendance
Icon: Clock
Pages:
Leave Tracker: Apply for leave, view leave history, and see the company holiday calendar.
Attendance: View your attendance log and regularize any missed check-ins.
Timesheets: Fill out and submit your timesheets for approval.
Section: Performance
Icon: Target
Pages:
My Reviews: View past performance reviews and complete current ones.
My Goals: Set and track your personal goals (KRAs/OKRs).
Section: Company
Icon: Building2
Pages:
Employee Directory: A searchable directory of all employees in the company.
Organization Chart: A visual chart showing the company's reporting structure.
B) HR Admin Sidebar (Includes all of the above, plus...)
Section: Employee Management
Icon: Users
Pages:
All Employees: The master list of all employee records.
Onboarding: A wizard to manage the new hire onboarding process.
Offboarding: A checklist and workflow for exiting employees.
Section: Leave Management (Admin)
Icon: Calendar
Pages:
Leave Approvals: A queue of all leave requests awaiting approval.
Leave Reports: Detailed reports on leave balances across the company.
Leave Settings: Configure different leave types (Vacation, Sick, etc.) and policies.
Section: Time & Attendance (Admin)
Icon: Clock
Pages:
Attendance Reports: View attendance data for all employees.
Timesheet Approvals: A queue of all submitted timesheets awaiting approval.
Section: Performance (Admin)
Icon: Target
Pages:
Appraisal Cycles: Set up and manage company-wide performance review cycles.
Goal Management: A dashboard to track goal alignment and progress across the organization.
Section: HR Helpdesk
Icon: MessageSquare
Pages:
Cases: Manage all HR-related employee queries in a centralized, confidential system.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of HR reports on "Headcount," "Attrition Rate," "Diversity," and "Compensation."
3. Page-Level Toolbars & Main Interface
On the "Employee Directory" Page:
A grid of employee "cards," each with a photo, name, title, and department.
A search bar and filters at the top to find people by name, department, or skill.
On a "Single Employee Profile" Page (Admin View):
A comprehensive, tabbed interface showing everything about an employee: Personal Info, Job Details, Leave History, Performance Reviews, Documents, Assets Assigned.
4. Data Entry & Modals
Applying for Leave (Modal): A simple pop-up where an employee selects the Leave Type from a dropdown, chooses the dates from a Date Picker, and enters a Reason. The request is then sent to their manager for approval.
The Onboarding Wizard (Full Page): A multi-step process for HR admins. 1. Enter basic info. 2. Create their AURA account. 3. Assign them to an onboarding Learning Path in Aura Learn. 4. Add them to the correct Pay Run in Aura Payroll.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Leave Request" Flow: An employee wants to take a vacation. They go to their Leave Tracker, see they have 10 days of vacation available, and submit a request for next month. Their manager receives a notification in Aura Mail and Aura Cliq. The manager clicks a link, sees the team's shared Leave Calendar to ensure there are no conflicts, and clicks "Approve." The employee is notified, and their leave balance is automatically updated.
The "Performance Review" Flow: At the start of a quarter, the HR admin initiates a new Appraisal Cycle. Every employee and manager in the company receives a task to complete their self-assessment and review, respectively. The system automatically sends reminders as the deadline approaches.
The "New Hire" Flow (Integration): A candidate accepts an offer in Aura Recruit. This automatically triggers the Onboarding workflow in Aura People. An AURA account is created for them, they are automatically enrolled in training in Aura Learn, and their details are sent to Aura Payroll to be included in the next pay run. This seamless automation saves the HR team hours of manual work for every new hire.
`,
    "PeoplePlus": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Shows a curated list of the apps in the People Plus suite.
Current App Name: "Aura People Plus"
Global Search Bar: A "super-search" that can find any employee, job opening, leave request, or expense report.
Quick Create Button (+ Icon): A unified dropdown with common HR actions: Add Employee, New Job Opening, Submit Expense.
Notifications Bell Icon: An aggregated feed of HR-related alerts: "A new candidate has applied," "Your leave request has been approved," "A new expense report needs your approval."
Settings Gear Icon: Links to the main settings page for the entire suite, managing integrations and company-wide policies.
User Profile Icon: Profile, Logout.
2. Aura People Plus Sidebar (The "Suite" Sidebar)
This is a simple, high-level sidebar focused on different stages of the employee journey.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard, with different widgets visible for Employees, Managers, and HR Admins.
Section: Talent
Icon: Award
Pages:
Hiring: A high-level view of the recruitment pipeline, showing "Open Positions" and "Candidates in Final Stages" from Aura Recruit.
Onboarding: A dashboard to track the progress of new hires through their onboarding process.
Performance: A view of the current company-wide performance review cycle.
Section: Operations
Icon: Briefcase
Pages:
My Team (for Managers): A dashboard showing the manager's direct reports, with quick links to approve leave, timesheets, and expenses.
Company Directory: The searchable, visual organization chart.
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura People, Aura Recruit, Aura Expense, Aura Cliq, etc.).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly role-based, customizable dashboard.
Employee Dashboard Widgets:
My Profile Summary: Shows their photo, title, and a link to their full profile in Aura People.
My Leave Balance: Shows available vacation and sick days.
My Open Requests: A list of their pending leave or expense requests.
Company Announcements: A feed from Aura Connect.
Manager Dashboard Widgets:
Team Overview: A list of their direct reports.
Pending Approvals: The most important widget. A single, unified queue of all items waiting for their approval: Leave Requests, Timesheets, and Expense Reports.
Team Calendar: A view showing who on their team is out of the office today.
HR Admin Dashboard Widgets:
Company Headcount: Total number of employees.
Hiring Funnel: A high-level view of the pipeline from Aura Recruit.
Attrition Rate: A chart showing employee turnover.
Compliance Alerts: Warnings for any pending compliance tasks.
4. Data Entry & Modals
This application is primarily for viewing combined data and approving requests. Most data entry happens within the individual apps.
The Unified Approval Modal: When a manager clicks "Approve" on a leave request in their dashboard, a simple modal pops up showing the key details of the request and "Approve" / "Reject" buttons. They can approve items from three different apps without ever leaving their dashboard.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Manager's Daily Review" Flow: A manager starts their day by opening the Aura People Plus Dashboard. They look at the "Pending Approvals" widget and see they have two leave requests and one expense report to review. They approve them all directly from the dashboard in under a minute.
The "Hiring to Onboarding" Flow (Integrated): A hiring manager in Aura Recruit marks a candidate as "Hired." This action is the start of a massive, cross-app workflow managed by People Plus. It automatically:
Creates an employee profile in Aura People.
Provisions a new user account in Aura Directory.
Assigns the "New Hire Onboarding" course in Aura Learn.
Adds the new employee to the next pay run in Aura Payroll.
The "Employee Self-Service" Flow: A new employee wants to check how many vacation days they have left. They log into Aura People Plus. They see their leave balance directly on their dashboard widget. They click it and are taken directly to the Leave Tracker page within the full Aura People application to submit a request.`,
    "Practice": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Practice"
Global Search Bar: Placeholder: "Search by client name, job, or task..."
Quick Create Button (+ Icon):
New Client
New Job
Log Time
Notifications Bell Icon: Alerts for "A client has uploaded a document," "A tax deadline is approaching," "A task is overdue," etc.
Settings Gear Icon: Links to the main practice settings.
User Profile Icon: Profile, Logout.
2. Aura Practice Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main control center for the firm. Widgets for "Upcoming Deadlines," "Jobs in Progress," "Unbilled Hours," and "Team Workload."
Section: Client Management
Icon: Users
Pages:
All Clients: A master list of all the firm's clients. Each client has a detailed profile with contact info, associated jobs, and documents.
Client Portal: A page to manage the secure portal where clients can upload documents and communicate with the firm.
Section: Work Management
Icon: Briefcase
Pages:
Jobs: A list of all client jobs (e.g., "2024 Tax Return," "Monthly Bookkeeping"). Can be viewed as a list or a Kanban board.
Tasks: A master list of all tasks across all jobs, which can be assigned to team members.
Deadlines: A calendar view showing all important compliance and job deadlines.
Templates: A library of reusable job templates with pre-defined task lists for common services (e.g., a "New Client Onboarding" template).
Section: Financials
Icon: DollarSign
Pages:
Time Tracking: A page for team members to log time spent on different jobs and tasks.
Billing: A hub to review all unbilled work and generate invoices for clients (integrates deeply with Aura Invoice/Books).
Section: Documents
Icon: Folder
Pages:
Document Management: A secure, centralized repository for all client documents, organized by client and job.
E-Signatures: A tool to send documents like engagement letters to clients for digital signature (integrates with Aura Sign).
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Firm Profitability," "Staff Utilization," "Job Turnaround Time," and "Client Revenue."
3. Page-Level Toolbars & Main Interface
On the "Jobs" Kanban Board:
Title: "Job Workflow"
Columns: Customizable stages like "To Do," "In Progress," "In Review," "Waiting on Client," "Completed."
Job Cards: Each card represents a job. It is draggable between columns and shows the job name, client name, and assigned team member.
On a "Single Client Detail" Page:
Shows all client details.
Tabs: A tabbed interface to switch between Details, Jobs, Tasks, Documents, and Notes. This provides a 360-degree view of all work for that client.
Action Buttons: New Job, Send Document Request, Log Time.
4. Data Entry & Modals
Creating a Job from a Template (Wizard): When a user clicks "New Job," they can select a Template. This automatically creates the job and populates it with a standard checklist of tasks, each with pre-set due dates calculated from the job's start date.
Client Document Request (Feature): A user can create a secure request for documents from a client. The client receives an email with a secure link to upload their files directly into the correct folder in the Document Management system.
5. Bottom Bar
A persistent "Timer" widget might be present at the bottom, allowing team members to easily start and stop a timer for any job they are working on.
6. Task Info & Key Workflows
The "New Client Onboarding" Flow: A new client signs up. A manager in Aura Practice clicks New Job and selects the "New Client Onboarding" Template. This automatically creates 10 tasks, such as "Send Engagement Letter," "Request Prior Year Tax Docs," and assigns them to the appropriate team members with due dates. The engagement letter is sent for e-signature through the Aura Sign integration.
The "Tax Season" Flow: The firm is managing hundreds of tax returns. The Jobs Kanban board gives the partners a high-level view of where every single return is in the process. A tax preparer finishes a return and drags the job card from "In Progress" to "In Review." This automatically notifies the reviewing manager that the return is ready for their review.
The "Monthly Billing" Flow: At the end of the month, the firm admin goes to the Billing page. They see a summary of all unbilled hours and expenses for every client. They can review the time logs, and with a few clicks, generate and send professional invoices for all the work done that month, pulling the data directly from the Time Tracking module.`,
    "Projects": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Projects"
Global Search Bar: A powerful search that can find projects, tasks, or issues. Placeholder: "Search across all projects..."
Quick Create Button (+ Icon):
New Project
New Task
Notifications Bell Icon: Alerts for "You have been assigned a new task," "A task you assigned is now overdue," "A new comment was added to a task," etc.
Settings Gear Icon: Links to the main Projects administration settings.
User Profile Icon: Profile, Logout.
2. Aura Projects Internal Sidebar
This sidebar has two levels: a top-level navigation for the whole app, and a contextual sidebar that appears when you are inside a specific project.
Main (Global) Sidebar
Icon: Home
Pages:
Dashboard: The main landing page. A personalized "My Overview" with widgets for "My Tasks," "My Milestones," and "Recent Projects."
All Projects: A portfolio view of all projects, showing their status, owner, and a high-level progress bar.
Global Calendar: A master calendar showing all tasks and milestones from all projects.
Global Reports: A dashboard with reports that span across all projects (e.g., "Team Workload," "Resource Utilization").
Project-Specific Sidebar (Appears after selecting a project)
This sidebar appears below the project's name and allows you to navigate within that project.
Section: Planning & Execution
Icon: ClipboardList
Pages:
Tasks: The core of the project. A view of all tasks, which can be displayed as a List, a Kanban Board, or grouped by Milestone.
Milestones: A list of the major phases or deadlines for the project.
Gantt Chart: A powerful timeline view that shows all tasks, their durations, and the dependencies between them.
Section: Collaboration
Icon: Users
Pages:
Discussions: A forum-like space for long-form discussions related to the project.
Files: A central repository for all project-related documents (integrates with Aura WorkDrive).
Team: A list of all the members of this project.
Section: Financials & Time
Icon: Clock
Pages:
Timesheets: A log of all time spent on the project's tasks.
Invoices & Expenses: A tool to track project expenses and create invoices for clients (integrates with Aura Books).
Section: Issues
Icon: AlertCircle
Pages:
Issues / Bugs: A dedicated section to track and manage problems or bugs related to the project.
3. Page-Level Toolbars & Main Interface
On the "Tasks" Kanban Board:
Title: "Project Phoenix - Tasks"
Columns: Customizable columns representing the workflow (e.g., "To Do," "In Progress," "In Review," "Done").
Task Cards: Each task is a draggable card. The card shows the task name, assignee, and due date.
Action: Clicking + Add Task at the bottom of a column opens a quick-add field.
The "Task Detail" View (opens when you click a card):
A full-screen or large modal view showing all details for a single task.
Fields: Assignee, Due Date, Priority, Status, Estimated Hours.
Sub-sections: A checklist for Sub-tasks, an Attachments area, a Comments thread, and a Time Log.
4. Data Entry & Modals
Creating a Project (Wizard): A multi-step wizard that asks for the "Project Name," "Start/End Dates," and allows you to choose a Project Template (e.g., "Software Development," "Marketing Campaign") which automatically creates standard task lists and milestones.
Logging Time (Modal): A simple pop-up where a user can select a task, enter the hours worked, and add a note. Often includes a "Start/Stop Timer" button for real-time tracking.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Project Kickoff" Flow: A manager clicks New Project and chooses the "Marketing Campaign" Template. This automatically creates the project with standard Milestones like "Planning," "Execution," and "Launch," and populates it with common Task Lists and tasks. The manager then goes to the Team section and invites the members of the marketing team to the project.
The "Daily Standup" Flow: A developer starts their day. They open their Dashboard in Aura Projects and look at the "My Tasks" widget to see their priorities. They open the Kanban Board for their current project, drag a task from "To Do" to "In Progress," and start a Timer to track their work on that task.
The "Client Billing" Flow (Integration): At the end of the week, the project manager goes to the Timesheets section. They can see all the hours logged by the team for a specific client's project. They select all the unbilled hours and click a "Generate Invoice" button. This automatically sends the detailed time log data to Aura Books, which creates a professional invoice ready to be sent to the client.`,
    "ProjectsPlus": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Shows a curated list of the apps in the Projects Plus suite.
Current App Name: "Aura Projects Plus"
Global Search Bar: A "super-search" that can find any project, task, bug, or milestone across ALL connected project apps.
Quick Create Button (+ Icon): A unified dropdown with the most common actions: New Project, New Task, New Bug Report.
Notifications Bell Icon: An aggregated feed of project-related alerts: "A milestone is at risk," "A critical bug has been reported," "You have been assigned a new task."
Settings Gear Icon: Links to the main settings page for the entire suite, managing project templates, user roles, and integrations.
User Profile Icon: Profile, Logout.
2. Aura Projects Plus Sidebar (The "Suite" Sidebar)
This is a simple, high-level sidebar focused on different views of the project portfolio.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard. This is the core of the experience for a project manager or executive.
Section: Portfolio
Icon: Folder
Pages:
All Projects: A high-level list of every single project in the organization, showing its health (On Track, At Risk, Off Track), completion percentage, and owner.
Portfolio Gantt: A master Gantt chart that shows the timelines of all major projects in a single, visual view.
Resource Management: A dashboard showing the workload of all employees across all projects to identify who is over-allocated or under-utilized.
Section: My Work
Icon: User
Pages:
My Tasks: A unified list of all tasks assigned to me from Aura Projects, Aura Sprints, and Aura BugTracker, all in one place.
My Timesheets: A single place to view and submit all my timesheets.
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura Projects, Aura Sprints, Aura BugTracker).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly customizable, widget-based dashboard for a Program Manager or Executive.
Default Widgets:
Project Health Summary: A pie chart showing the percentage of projects that are On Track, At Risk, or Off Track.
Upcoming Milestones: A list of the next 5 major milestones due across all projects.
My Overdue Tasks: A personal to-do list of my late tasks from all projects.
Critical Bugs: A list of all open, high-severity bugs from Aura BugTracker.
Team Velocity: A chart showing the velocity trend for the main agile team from Aura Sprints.
Budget vs. Actuals: A summary chart pulling financial data from linked projects in Aura Books.
4. Data Entry & Modals
This application is primarily for viewing and analyzing combined data. Most data entry happens within the individual applications.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Executive's Weekly Review" Flow: A CTO starts their week by opening the Aura Projects Plus Dashboard. They can instantly see the health of all 20 active projects. They notice one project is "Off Track." They click on it and are taken directly to that project's detailed dashboard within the full Aura Projects app to investigate the cause.
The "Developer's Daily Standup" Flow: A developer starts their day. Instead of opening three different apps, they go to the My Tasks page in Projects Plus. This single page shows them:
The two user stories assigned to them in the current sprint from Aura Sprints.
The one critical bug they need to fix from Aura BugTracker.
A general project task assigned to them from Aura Projects.
They have a single, prioritized to-do list for their entire day.
The "Resource Planning" Flow: A manager is planning a new project but doesn't know if their team has the capacity to work on it. They go to the Resource Management dashboard in Projects Plus. They see a visual chart of every person on their team and how many hours they are allocated to for the next three months. They see that their lead developer is 120% allocated, while a junior developer is only 50% allocated. They can now make an informed decision about project timelines and staffing.`,
    "Publish": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Publish"
Global Search Bar: Placeholder: "Search by business location or review keyword..."
Quick Create Button (+ Icon):
New Post (for Google Business Profile)
Add Location
Notifications Bell Icon: Alerts for "New review on Google," "Listing information is inconsistent," etc.
Settings Gear Icon: Links to the main Publish settings page.
User Profile Icon: Profile, Logout.
2. Aura Publish Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows key metrics like "Average Star Rating," "Total Reviews," "Listing Accuracy Score," and a feed of the latest reviews that need a response.
Section: Presence
Icon: MapPin
Pages:
Listings: The core feature. A list of all connected online directories (Google Business Profile, Bing Places, Yelp, Apple Maps, etc.). It shows a "Sync Status" for each, indicating if the business information is consistent across all of them.
Business Information: A central form where the user enters their business Name, Address, Phone Number, Website, and Hours of Operation once. This information is then "published" to all connected listings.
Section: Reputation
Icon: Star
Pages:
Reviews: A unified inbox showing all customer reviews from all connected sites in a single stream.
Review Requests: A tool to send automated emails or SMS messages to recent customers, asking them to leave a review.
Section: Engagement
Icon: Send
Pages:
Posts: A composer to create and schedule "Google Posts" (updates, offers, events) for your Google Business Profile.
Q&A: A page to monitor and answer questions that customers ask on your Google and Yelp listings.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Review Volume & Rating Trends," "Local Search Rankings" (how you rank on Google Maps), and "Listing Traffic" (how many people found you, called you, or asked for directions).
3. Page-Level Toolbars & Main Interface
On the "Reviews" Page:
Title: "All Reviews"
Filters: "Filter by Source (Google, Yelp)," "Filter by Rating (1-5 stars)," "Filter by 'Hasn't been replied to'."
Review Card: Each review in the list shows the star rating, the text, the source, and a Reply button. Clicking Reply opens a text box directly below it.
On the "Business Information" Page:
A single, master form with all the core business details.
A prominent, green Publish Updates button at the top. When clicked, it pushes any changes out to all connected listings.
4. Data Entry & Modals
Responding to a Review (Inline Textbox): The primary interaction is typing a reply directly into the review feed. The interface often provides Response Templates for common situations.
Editing Business Hours (Modal): Clicking to edit hours opens a user-friendly modal with dropdowns for each day of the week to set opening and closing times.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Initial Setup" Flow: A business owner signs up for Aura Publish. They go to the Business Information page and fill out their details once. Then, they go to the Listings page and follow a wizard to connect their Google Business Profile, Facebook Page, etc. Once connected, Aura Publish scans for inconsistencies and prompts them to "Sync All Listings."
The "Reputation Management" Flow: The business owner starts their day by opening the Reviews tab. They see a new 2-star review. They click Reply and use a template to write a polite, professional response to address the customer's issue. They then see a new 5-star review and quickly reply with a "Thank you!"
The "Holiday Hours" Flow: A holiday is approaching. The owner goes to the Business Information page, clicks to edit their hours, and sets special hours for the holiday. They click Publish Updates. Aura Publish automatically updates their hours on Google, Yelp, and all other connected directories, saving them hours of manual work.`,
    "QEngine": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura QEngine"
Global Search Bar: Placeholder: "Search by test case ID, suite, or defect..."
Quick Create Button (+ Icon):
New Test Case
New Test Run
Notifications Bell Icon: Alerts for "A scheduled test run has completed," "A critical defect was found," "A test case has been assigned to you for review," etc.
Settings Gear Icon: Links to the main QEngine project settings.
User Profile Icon: Profile, Logout.
2. Aura QEngine Internal Sidebar
This sidebar is organized around the lifecycle of software testing.
Section: Home
Icon: Home
Pages:
Dashboard: The main quality overview for a selected project. Widgets for "Latest Test Run Status" (pass/fail chart), "Open Defects by Severity," and "Test Case Coverage."
Section: Test Planning
Icon: ClipboardList
Pages:
Test Cases: The core repository. A hierarchical folder structure containing all manual and automated test cases.
Test Suites: A page to create and manage collections of test cases that are run together (e.g., "Login Regression Suite," "Smoke Test Suite").
Section: Test Execution
Icon: PlayCircle
Pages:
Test Runs: A page to plan and initiate a new test run. A user selects a Test Suite and the Environment (e.g., "Staging Server," "Chrome Browser").
Execution History: A log of all past test runs, showing their overall pass/fail status.
Section: Automation
Icon: Code
Pages:
Automation Studio: The interface for creating automated tests. This includes a "Record & Play" tool and a script editor.
CI/CD Integration: A settings page to connect QEngine to developer pipelines (like GitHub Actions), so tests can be run automatically when new code is committed.
Section: Defects
Icon: AlertCircle
Pages:
Defect List: A list of all bugs found during testing. This section integrates deeply with Aura BugTracker.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Test Execution Trends," "Defect Density," and "Requirement Coverage."
3. Page-Level Toolbars & Main Interface
The "Test Case Editor":
A structured form for writing a manual test case.
Fields: Title, Pre-conditions.
Main Section: A step-by-step table with columns for Step Number, Action to Perform, and Expected Result.
The "Manual Test Run" Interface:
A clean, focused view for a QA tester.
It shows one test case step at a time.
For each step, there are large Pass, Fail, and Skip buttons.
If a tester clicks Fail, a modal pop-up appears, prompting them to enter the "Actual Result" and attach a screenshot. This automatically creates a new, linked defect in Aura BugTracker.
The "Test Run Result" Page:
A detailed summary of a completed test run.
A prominent pie chart showing the Pass/Fail percentage.
A list of all the test cases that were run, with a clear status icon for each. Any new defects created during the run are linked directly.
4. Data Entry & Modals
The "Record & Play" Automation Tool: A developer can launch a special browser window. They click Record, and then they perform the actions on their website (click a button, fill a form). QEngine watches and automatically generates the automation script steps.
Creating a Defect (Modal): When a test fails, a "Create Defect" modal pops up. It is pre-filled with the test case details, and the tester just needs to add the details of the failure and attach evidence.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Manual Regression Testing" Flow: A new version of the AURA app is ready for testing. The QA Lead goes to Test Runs and starts a new run of the "Full Regression" Test Suite. All the QA testers get a notification. They open the test run, and each is assigned a set of Test Cases to execute. They go through the steps one by one, clicking Pass or Fail.
The "Automated Smoke Test" Flow (Integration): A developer pushes a new piece of code to the main branch on GitHub. This automatically triggers a webhook. The webhook tells Aura QEngine to start a new Test Run of the "Smoke Test" Test Suite on the staging server. The automated tests run. If any test fails, QEngine automatically sends a failure notification to the #dev-alerts channel in Aura Cliq. This prevents a bad code change from ever reaching production.
The "Bug Found" Flow: During a manual test run, a QA tester finds a bug. They click the Fail button. The "Create Defect" modal opens, already linked to the test case. The tester describes the bug and attaches a screenshot. A new, detailed bug report is instantly created in Aura BugTracker and assigned to the correct development team, with a link back to the exact test step that failed.`,
    "RPA": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura RPA"
Global Search Bar: Placeholder: "Search by bot, process, or schedule name..."
Quick Create Button (+ Icon):
New Process
Notifications Bell Icon: Alerts for "A bot run has completed successfully," "A bot has failed with an error," etc.
Settings Gear Icon: Links to the main RPA administration settings.
User Profile Icon: Profile, Logout.
2. Aura RPA Internal Sidebar
This sidebar is for the developer or business analyst who builds and manages the bots.
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Bot Status," "Recent Bot Runs," "Success vs. Failure Rate," and a queue of "Scheduled Jobs."
Section: Automation
Icon: Bot
Pages:
Processes: The primary workspace. A "Process" is the blueprint for a single automated task. This page lists all the processes you have built.
Bots: A list of the actual software "bots" or "agents" that run on specific computers.
Section: Execution
Icon: PlayCircle
Pages:
Jobs: A detailed log of every single time a process has been run (a "job"). Shows the start time, end time, status, and a link to the detailed logs.
Schedules: A calendar-like view to create and manage schedules for your bots to run automatically.
Section: Administration
Icon: Database
Pages:
Credentials: A secure vault (integrates with Aura Vault) to store the usernames and passwords that the bots will need to log into different applications.
Agents: A page to manage the RPA agent software installed on different machines.
3. Page-Level Toolbars & Main Interface (The RPA Studio)
The core of the application is the RPA Studio, which is a separate, downloadable desktop application for building the bots. The web interface is for managing and monitoring them.
The RPA Studio Interface (Desktop App):
Main Panel (The Workflow): A visual, flowchart-like canvas where the developer drags and drops actions to build the bot's logic.
Left Panel (Actions Library): A library of hundreds of pre-built actions, grouped by category:
Desktop Automation: Open Application, Click UI Element, Type Text, Get Text.
Web Automation: Open Browser, Click Link, Extract Data from Table.
Excel Automation: Open Spreadsheet, Read Cell, Write Cell.
Logic: If/Else conditions, Loops.
Top Toolbar: A "Record" button.
The Recorder: The magic feature. The developer clicks Record, then performs the task manually on their computer. The RPA Studio watches them and automatically creates the workflow steps on the canvas.
4. Data Entry & Modals
Configuring an Action (in the Studio): When a developer drags an action (like "Click UI Element") onto the canvas, a properties panel opens. They use a special "selector" tool to click on the button they want the bot to click in the target application, and the Studio automatically captures its unique identifier.
Scheduling a Job (on the Web): The Schedules page has a "New Schedule" button that opens a modal with options to run a process "Daily," "Weekly," or "On a Trigger," and to select which Bot should run it.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Legacy System" Flow: A company has an old accounting application that runs on a Windows desktop and has no API. Every day, an employee has to manually run a report in this app, save it as an Excel file, and then email it to the manager. To automate this, a developer uses the RPA Studio Recorder. They click Record, perform all the manual steps, and then stop the recording. The Studio creates a complete workflow. They publish this Process to the cloud. In the web interface, they Schedule it to run every morning at 8:00 AM on a specific computer in the office. The entire daily reporting task is now fully automated.
The "Data Scraping" Flow: A marketing team needs to get a list of all the vendors from a public website. The website has no "Export" button. A developer builds a bot in the RPA Studio. The bot's workflow is: 1. Open Browser and go to the website. 2. Loop through each page of the vendor directory. 3. Inside the loop, use the Extract Data from Table action to scrape the vendor names and websites. 4. Write the data to a new row in an Aura Sheet spreadsheet. The bot runs and builds a complete list of 1,000 vendors in 10 minutes.
The "Attended Bot" Flow: A customer service agent frequently has to copy a customer's ID from Aura Desk, switch to an old mainframe application, paste the ID to look up their order history, and then copy the history back into the Aura Desk ticket. The company provides them with an "Attended Bot." Now, when they are on a ticket, they can click a button on their desktop. The bot instantly performs all those copy-paste-switch steps for them in under a second, saving them time and reducing errors on every single ticket.`,
    "Recruit": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Recruit"
Global Search Bar: Placeholder: "Search by job title, candidate name, or skill..."
Quick Create Button (+ Icon):
New Job Opening
Add a Candidate
Notifications Bell Icon: Alerts for "New candidate applied," "Interview feedback is due," "An offer was accepted," etc.
Settings Gear Icon: Links to the main Recruit administration settings.
User Profile Icon: Profile, Logout.
2. Aura Recruit Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main hiring manager's dashboard. Widgets for "Active Job Openings," "New Candidates Today," "Upcoming Interviews," and a visual "Hiring Pipeline" funnel.
Section: Recruitment
Icon: Briefcase
Pages:
Job Openings: The main list of all job openings, filterable by status (Open, On Hold, Filled, Canceled).
Candidates: A master, searchable database of all candidates who have ever applied.
Interviews: A calendar or list view of all scheduled interviews across all job openings.
Section: Talent Sourcing
Icon: Users
Pages:
Careers Site: A tool to build and customize your public careers page (integrates with Aura Sites).
Job Boards: A page to manage integrations and post job openings to external job boards like LinkedIn, Indeed, etc.
Employee Referrals: A portal for current employees to refer candidates for open positions.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Time to Hire," "Source of Hire" (where the best candidates come from), "Interview Feedback Analysis," and "Offer Acceptance Rate."
3. Page-Level Toolbars & Main Interface (The Hiring Pipeline)
The most important interface is the Hiring Pipeline for a specific job opening.
Top Bar for a Selected Job Opening:
Displays the job title (e.g., "Senior Software Engineer").
Tabs to switch between different views for this job: Candidates, Details, Hiring Team, Analytics.
The "Candidates" View (Kanban Board):
A visual pipeline with columns for each stage of the hiring process.
Default Stages: New Applicant, Screening, Interview, Offer, Hired. These stages are customizable.
Candidate Cards: Each candidate is a draggable card. The card shows their name, photo, and key info.
The user's job is to drag these cards from left to right as a candidate progresses through the hiring process.
The "Candidate Profile" View (opens when you click a card):
A detailed, 360-degree view of a single candidate.
Left Panel: The candidate's resume/CV is displayed.
Center Panel: A timeline of all activities related to this candidate (emails, interview notes, feedback).
Right Panel: The candidate's contact information, current pipeline stage, and a star rating from the hiring team.
Action Buttons: Schedule Interview, Send Email, Reject Candidate, Move to Offer Stage.
4. Data Entry & Modals
Adding a Candidate (AI Feature): The user can upload a resume (PDF or Word doc). Aura Recruit uses an AI Resume Parser to automatically read the resume and fill in the candidate's name, email, phone, work experience, and skills, saving a huge amount of manual data entry.
Scheduling an Interview (Modal): Clicking "Schedule Interview" opens a modal that integrates with the hiring team's Aura Calendars. It allows the recruiter to see when everyone is free, select a time slot, and send a professional interview invitation to both the candidate and the interviewers.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Job" Flow: A manager needs to hire a new person. They go to Aura Recruit and click + New Job Opening. They fill out a form with the job title and description. This new job appears on the company's public Careers Site and is automatically posted to linked Job Boards.
The "Application" Flow (Automation): A candidate sees the job on LinkedIn and applies. Their application, including their resume, automatically appears as a new Candidate Card in the "New Applicant" stage of the hiring pipeline for that job. The AI Resume Parser runs automatically, and the recruiter is notified.
The "Hiring" Flow: The recruiter reviews the new candidate's profile. They like what they see, so they drag the card to the "Interview" stage. This triggers an automated email to the candidate asking them to schedule a time. After the interviews, the team leaves feedback on the candidate's profile. The team decides to hire the candidate, and the recruiter drags their card to the "Offer" stage. This opens a wizard to create and send a formal offer letter (using Aura Sign for e-signature).
The "Onboarding" Flow (Integration): The candidate accepts the offer. The recruiter drags their card to the final "Hired" stage. This is the magic step. This action automatically triggers the onboarding workflow in Aura People, creating an employee profile, sending them their welcome documents, and notifying the IT and payroll departments.`,
    "RouteIQ": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura RouteIQ"
Global Search Bar: Placeholder: "Search by address, contact name, or city..."
Quick Create Button (+ Icon):
New Route
Log a Check-in
Notifications Bell Icon: Alerts for "Route for today is ready," "You are near a high-priority client," etc.
Settings Gear Icon: Links to the main RouteIQ settings page.
User Profile Icon: Shows user's current location status, Profile, Logout.
2. Aura RouteIQ Internal Sidebar
This application's UI is dominated by the map, so the sidebar is simple and tool-focused.
Section: Planning
Icon: Navigation
Pages:
Map View: The default and main screen. An interactive map showing pins for all CRM records.
Routes: A list of all saved routes (e.g., "Tuesday's Route," "Downtown Prospecting Route").
Territories: A view to see sales territories drawn as shapes on the map.
Section: Activity
Icon: ClipboardList
Pages:
My Check-ins: A chronological log of all my past visits (check-ins).
My Schedule: A calendar view showing my scheduled routes and appointments for the week.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Reports on "Miles Traveled," "Visits per Day," "Time Spent with Clients," etc.
3. Page-Level Toolbars & Main Interface (The Map)
The main screen is a large, interactive map. The key toolbars are overlaid on top of it.
Left Panel (Map Layers & Filters):
Show on Map: Checkboxes to toggle the visibility of Leads, Contacts, and Deals pins.
Filters: Powerful filters to narrow down what is shown on the map, e.g., "Show me all Leads in the 'New' stage with a rating of 'Hot'," or "Show me all Contacts I haven't visited in 90 days."
A list of all records that match the current filters.
Right Panel (Route Builder):
This panel appears when a user is creating a new route.
Stops: A list of the locations added to the current route.
Optimize Route Button: The magic button. After adding several stops, the user clicks this, and the app rearrates the stops into the most efficient driving order.
Settings: Options for "Start/End Location," "Avoid Tolls," etc.
Save Route Button: Saves the planned route for future use.
4. Data Entry & Modals
Clicking a Pin on the Map (Info Pop-up):
When a user clicks a pin, a small pop-up appears showing the Contact/Account name, address, and a button to + Add to Route.
The "Check-in" Experience (on Mobile):
When a sales rep arrives at a location, they open the mobile app.
They tap a large "Check-in" button. The app uses GPS to confirm their location.
A modal pop-up appears where they can Log Notes from the meeting.
When they tap "Check-out," the app automatically calculates the visit duration.
This entire check-in record (time, duration, notes) is automatically saved as a completed Meeting or Task on that Contact's timeline back in the main Aura CRM.
5. Bottom Bar
Non-existent. All controls are in the sidebars and toolbars overlaid on the map to maximize map visibility.
6. Task Info & Key Workflows
The "Plan My Day" Flow: A sales rep starts their morning. They open Aura RouteIQ. They use the filters to show "All 'Hot' Leads and 'High-Value' Contacts in my territory." They click on 10 pins on the map to add them to their route for the day. They click "Optimize Route." The app gives them the perfect driving plan. They click "Start Route," and it sends the directions to their phone's map app.
The "Prospecting on the Go" Flow: A rep finishes a meeting early. They open the mobile app and see their current location on the map. They tap a "Near Me" button. The app shows them three other potential leads within a 2-kilometer radius that they could visit.
The "Automated Logging" Flow: A rep completes a visit and does a "Check-in" on their phone. They do not need to do anything else. Aura RouteIQ automatically creates a record in Aura CRM that says, "Rohan visited XYZ Corp on August 11th from 2:00 PM to 2:45 PM," and includes the notes he typed. This saves hours of manual data entry.`,
    "SalesIQ": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura SalesIQ"
Global Search Bar: Placeholder: "Search visitors, chat history, contacts..."
Quick Create Button (+ Icon):
Start Proactive Chat
Add Contact
Notifications Bell Icon: Alerts for "New incoming chat," "Visitor returned to site," etc.
Settings Gear Icon: Links to the main SalesIQ settings page.
User Profile Icon: Shows agent online/offline status, Profile, Logout.
2. Aura SalesIQ Internal Sidebar
Section: Real-Time
Icon: Globe
Pages:
Visitor Ring View: The main, default page. A visual representation of visitors currently on your website, shown in concentric rings based on their engagement level. Clicking a visitor opens their details.
Visitor List View: A simple list/table of all current website visitors.
Map View: A world map showing the geographic location of current visitors.
Section: Engagement
Icon: MessageCircle
Pages:
My Chats: A list of all active chat conversations assigned to me.
All Chats: A view for managers to see all ongoing chats.
Chat History: A searchable archive of all past chat conversations.
Section: Automation
Icon: Bot
Pages:
Chatbots: A list of all your chatbots (e.g., "Welcome Bot," "Lead Qualification Bot").
Bot Builder (Zobot): A visual, no-code editor to build and customize chatbot conversation flows.
Answer Bot: A specific bot that automatically answers common questions by searching your knowledge base.
Section: Intelligence
Icon: Users
Pages:
Leads: A list of all visitors who have been identified as leads.
Contacts: A list of all known contacts from Aura CRM who are visiting the site.
Lead Scoring: A page to set up rules to automatically score visitors based on their actions (e.g., "+10 points for visiting the pricing page").
Section: Reports
Icon: BarChart3
Pages:
Agent Performance: Reports on agent response time, chat ratings, etc.
Chatbot Performance: Reports on how many chats the bots handled, conversion rates, etc.
Visitor Analytics: Reports on website traffic sources, popular pages, etc.
3. Page-Level Toolbars
On the "Visitor Ring View" (The Main Page):
Title: "Live Visitors"
Filters: "Filter by Country," "Filter by Source (e.g., Google, Direct)," "Filter by Lead Score."
Inside the "Chat Window" (The Operator's View):
Left Panel: A list of incoming and active chats.
Center Panel: The main chat conversation with the visitor.
Right Panel: A detailed "Visitor Info" panel showing their location, pages visited, lead score, and a direct link to their profile in Aura CRM.
Action Buttons: Transfer Chat, End Chat, Ban Visitor, Send File, Use Canned Response.
4. Data Entry & Modals
The Chat Widget (What the Visitor Sees):
A small chat bubble in the corner of the website.
Can be configured to pop up automatically with a welcome message (a "proactive trigger").
Often starts with a "Pre-Chat Form" to ask for the visitor's name and email.
Canned Responses (Modal Pop-up for the Agent):
While chatting, the agent can click a button to open a searchable list of pre-written answers to common questions, allowing them to respond very quickly.
5. Bottom Bar
Generally non-existent. The main focus is on the real-time activity and chat windows.
6. Task Info & Key Workflows
The Engagement Flow: A user (sales/support agent) keeps the "Visitor Ring View" open on their screen. When they see a highly engaged visitor (someone in the inner rings), they can click on them and proactively start a chat by typing a message like, "Hello! I see you are looking at our pricing page. Can I help you with anything?"
The Chatbot-to-Human Handoff Flow: A new visitor is first greeted by the "Lead Qualification Bot." The bot asks a few questions ("Are you interested in sales or support?"). If the visitor's answers indicate they are a hot lead, the bot automatically transfers the chat to a live human agent, who sees the entire conversation history and can take over seamlessly.
The CRM Integration Flow: While chatting with a visitor, the agent sees their info on the right. If the visitor is not yet in the CRM, the agent can click a + Add to CRM button. This opens a small form, pre-filled with the visitor's name and email, and with one click, creates a new Lead record in Aura CRM.`,
    "ServiceDeskPlus": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura ServiceDesk Plus"
Global Search Bar: A powerful search for tickets, assets, users, or solutions. Placeholder: "Search IT..."
Quick Create Button (+ Icon) (Technician view):
New Incident
New Service Request
Notifications Bell Icon: Alerts for "New high-priority ticket assigned," "A server is down," "A change is pending approval," etc.
Settings Gear Icon: Links to the main ServiceDesk administration.
User Profile Icon: Shows technician's online/offline status, Profile, Logout.
2. Aura ServiceDesk Plus Internal Sidebar
This sidebar is organized according to the ITIL (Information Technology Infrastructure Library) framework.
Section: Home
Icon: Home
Pages:
Dashboard: The main control center for IT technicians. Customizable widgets for "My Open Tickets," "Overdue Tickets," "SLA Violations," and "Recent Announcements."
Section: Service Desk
Icon: Headphones
Pages:
Requests: The core of the helpdesk. A unified list of all incoming support requests, which are automatically categorized as either Incidents (something is broken) or Service Requests (user needs something new).
Problems: A page to manage the underlying root cause of recurring incidents.
Changes: A formal system to plan and manage major changes to IT infrastructure (e.g., "Upgrade the email server").
Service Catalog: A "menu" of all the IT services that employees can request (e.g., "Request a New Laptop," "Request Software Installation").
Section: Asset Management
Icon: Laptop
Pages:
All Assets: A complete inventory (CMDB - Configuration Management Database) of all IT assets, including workstations, servers, printers, and software.
Asset Discovery: A tool to automatically scan the network and discover all connected hardware and software.
Software Asset Management: A dedicated section to manage software licenses and ensure compliance.
Section: Knowledge
Icon: BookOpen
Pages:
Solutions: A knowledge base of articles and solutions for common IT problems.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of ITSM reports like "First Call Resolution Rate," "Technician Performance," and "Asset Inventory Reports."
Section: Administration
Icon: Settings
Pages:
Admin: The main settings panel to configure Business Rules, SLAs, Automation, Users, and Helpdesk Settings.
3. Page-Level Toolbars & Main Interface
The "Request List" View:
A powerful table view of all tickets, with advanced filtering and sorting.
Color-coding is used to indicate priority and SLA status.
The "Request Detail" View:
A comprehensive, tabbed view of a single ticket.
Tabs: Details, Resolution, Tasks, Time Log, Approvals, History.
Right Panel: Shows details about the Requester and the Asset associated with the ticket.
Action Toolbar: Buttons to Assign, Reply, Add Note, Merge Request, and Resolve.
4. Data Entry & Modals
The Self-Service Portal (Employee's View): A simple web portal where employees can Submit a New Ticket, browse the Knowledge Base to solve their own problems, or choose an item from the Service Catalog.
Creating a Change (Wizard): A formal, multi-step wizard to create a "Change Request." It requires the user to detail the Reason, Impact, Rollout Plan, and Backout Plan. The change cannot be implemented until it is approved by the CAB (Change Advisory Board).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Broken Laptop" Flow (Incident Management): An employee's laptop breaks. They go to the self-service portal and submit a New Incident. The ticket is automatically assigned to the "Hardware Support" team. A technician picks up the ticket, sees the employee's assigned laptop in the Asset details, and finds a solution in the Knowledge Base. They reply to the user with instructions.
The "New Employee" Flow (Service Request Management): An HR manager goes to the Service Catalog and clicks "Onboard New Employee." This is a single service request that automatically creates and assigns a series of linked tasks to different teams:
A task for IT to "Prepare a Laptop."
A task for Facilities to "Set up a Desk."
A task for HR to "Conduct Orientation."
The "Recurring Server Patch" Flow (Change Management): The IT team needs to apply security patches to a server every month. They create a new Change request. They detail the plan and schedule it for the weekend. The change is automatically sent to the CAB for approval. Once approved, the change is added to the IT calendar, ensuring the work is done in a planned and controlled manner, minimizing risk.
`,
    "Sheet": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Sheet"
Global Search Bar: Placeholder: "Search by spreadsheet title or cell content..."
Quick Create Button (+ Icon):
New Spreadsheet
Notifications Bell Icon: Alerts for "A new spreadsheet has been shared with you," "You have new comments to review," etc.
Settings Gear Icon: Links to the main Sheet settings.
User Profile Icon: Profile, Logout.
2. Aura Sheet Internal Sidebar
This sidebar is focused on file management, similar to Aura Writer and Show.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A grid of "Recent Spreadsheets" and quick links to start a New Spreadsheet from a template or from scratch.
Section: Spreadsheets
Icon: Table
Pages:
All Spreadsheets: A file explorer view of all your spreadsheet files and folders.
My Spreadsheets: Spreadsheets you own.
Shared with Me: Spreadsheets other people have shared with you.
Recent: A quick list of recently opened spreadsheets.
Trash: Deleted spreadsheets.
Section: Library
Icon: BookOpen
Pages:
Templates: A gallery of pre-built templates (e.g., "Monthly Budget," "Project Plan," "Sales Tracker").
3. Page-Level Toolbars & Main Interface (The Spreadsheet Editor)
The core of the application is the Spreadsheet Editor, a feature-rich, grid-based interface.
Top Bar (Formula Bar):
A dedicated bar that shows the contents or formula of the currently selected cell.
Main Toolbar (The "Ribbon"):
A familiar, feature-rich toolbar with tabs for different functions.
Tab: File: Save, Download as (XLSX, CSV, PDF), Print, Version History.
Tab: Format: Text formatting (Bold, Font Size), Cell formatting (Currency, Percentage, Date), Conditional Formatting.
Tab: Insert: Chart, Pivot Table, Image, Checkbox, Dropdown.
Tab: Data: Sort, Filter, Data Validation, Remove Duplicates, Text to Columns.
Tab: AI (Zia):
Insights: The AI automatically analyzes your data and suggests charts and pivot tables.
Ask Zia: A chat window where you can ask questions in plain English (e.g., "What is the total sales for each region?") and the AI will generate the answer.
Right-Side Collaboration Panel:
A collapsible panel with tabs for Comments (where you can @mention colleagues on specific cells) and Sharing (to manage who has access).
Bottom Bar (Sheet Tabs):
Tabs at the bottom to switch between different sheets within the same spreadsheet file. A + button allows you to add a new sheet.
4. Data Entry & Modals
The Grid: The primary data entry is typing directly into the cells. Typing = starts a formula, and the application provides formula suggestions.
Chart Builder (Modal/Side Panel): Clicking "Insert Chart" opens a powerful builder. The AI often suggests a chart type, but the user can customize everything from the data range to the colors and labels.
Data Validation (Modal): A pop-up that allows a user to set strict rules for a cell or range of cells (e.g., "Must be a number greater than 0," "Must be a valid date," "Must be from a list").
5. Bottom Bar
A thin status bar at the very bottom can show quick calculations for a selected range of cells, such as Sum, Average, and Count.
6. Task Info & Key Workflows
The "Budgeting" Flow: A user starts from the "Monthly Budget" Template. They enter their income and expenses in the designated cells. The spreadsheet's pre-built formulas automatically calculate the totals and show them if they are over or under budget in different categories. They use Conditional Formatting to automatically turn any negative number red.
The "Data Analysis" Flow: A user imports a large CSV file of sales data. It's messy. They use the Data Cleaning tools to remove duplicates and fix inconsistencies. Then, they select all the data and click the Insights button. The Zia AI instantly generates a dashboard of charts and pivot tables, showing them "Sales by Country" and "Top Performing Products," insights that would have taken hours to create manually.
The "Collaborative Planning" Flow: A project manager creates a new spreadsheet to plan a product launch. They Share it with the marketing, sales, and development teams, giving them all "Edit" access. Each team fills in their respective tasks and timelines in different sections. The manager can see all the updates happening in real-time. They use the Comments feature to ask questions and resolve issues directly within the sheet, creating a single source of truth for the entire plan.`,
    "Shifts": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Shifts"
Global Search Bar: Placeholder: "Search by employee name or position..."
Quick Create Button (+ Icon) (Manager view):
New Shift
Notifications Bell Icon: Alerts for "New schedule has been published," "Your time off request was approved," "You have a new shift swap request," etc.
Settings Gear Icon: Links to the main Shifts settings.
User Profile Icon: Profile, Logout.
2. Aura Shifts Internal Sidebar
This sidebar is role-based, showing different options for Managers versus Employees.
A) Manager Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Today's Schedule," "Pending Requests" (swaps, time off), "Who's Clocked In," and a "Labor Cost vs. Sales Forecast" chart.
Section: Scheduling
Icon: Calendar
Pages:
Scheduler: The primary page. A visual, grid-based calendar for building the weekly schedule.
Templates: A library of saved weekly schedule templates for easy reuse.
Open Shifts: A list of unfilled shifts that employees can claim.
Section: Time & Attendance
Icon: Clock
Pages:
Timesheets: A page to review, edit, and approve employee timesheets.
Time Clock: A live view of who is currently clocked in, on break, or late.
Section: Management
Icon: Users
Pages:
Employees: A list of all employees, with their positions and availability.
Requests: A central inbox to approve or deny all Time Off and Shift Swap requests.
Reports: Reports on "Scheduled vs. Actual Hours," "Labor Costs," and "Attendance."
B) Employee Sidebar (Simpler View)
Section: My Schedule
Icon: Calendar
Pages:
My Schedule: A clean, simple view of the employee's personal shifts for the week.
Team Schedule: A view of the full team schedule.
Open Shifts: A list of available shifts the employee can request to pick up.
Section: My Time
Icon: Clock
Pages:
My Timesheets: A view of the employee's own recorded hours.
Time Off: A page to view leave balances and Request Time Off.
Section: Actions
Icon: Send
Pages:
Shift Swap: A page to offer up one of their shifts for a colleague to take.
3. Page-Level Toolbars & Main Interface (The Scheduler)
The core of the app for managers is the Scheduler.
Main View: A large grid.
Rows: A list of all employees.
Columns: The days of the week.
Toolbar at the top:
View Switcher: By Employee (default) or By Position (e.g., see all "Cashier" shifts).
Copy & Paste: A button to copy the previous week's schedule to use as a starting point.
Publish Schedule: The most important button. When clicked, it sends a notification to all employees that the new schedule is live.
Labor Cost Bar (at the bottom): A dynamic bar that updates in real-time as the manager adds shifts, showing the projected labor cost for the week and comparing it against the budget.
4. Data Entry & Modals
Creating a Shift (Modal): A manager clicks on an empty cell in the scheduler grid. A pop-up appears where they can set the Start Time, End Time, Position (e.g., "Server"), and any Notes.
Requesting a Shift Swap (in the Employee mobile app): An employee taps on one of their upcoming shifts. They tap "Offer Shift." A screen appears where they can send a request to a specific colleague or offer it to all eligible colleagues.
5. Bottom Bar
The dynamic Labor Cost Bar in the Scheduler view.
6. Task Info & Key Workflows
The "Schedule Creation" Flow: A manager starts the week by clicking Copy Last Week's Schedule. The grid populates with the old schedule. They make a few drag-and-drop adjustments for time-off requests. They see the Labor Cost Bar is slightly over budget, so they shorten one shift by an hour. Once the budget looks good, they click Publish Schedule.
The "Employee" Flow: Every employee receives a push notification on their phone: "The schedule for next week has been published!" They open the Aura Shifts mobile app and can see all their assigned shifts.
The "Shift Swap" Flow: Rohan sees he is scheduled for a shift he can't work. He opens the app, taps the shift, and selects "Offer Shift to Team." Priya gets a notification: "Rohan is offering his Tuesday shift." Priya needs extra hours, so she taps "Accept." The manager gets a final notification: "Priya has accepted Rohan's shift. Approve?" The manager clicks Approve, and the schedule is automatically updated for everyone.
The "Time Clock & Payroll" Flow (Integration): Employees use a tablet in the break room (or their phones with geofencing) to Clock-in and Clock-out via Aura Shifts. At the end of the pay period, the manager goes to Timesheets, reviews all the hours, and clicks "Approve All." This approved timesheet data is then automatically sent to Aura Payroll to be processed for payment.
`,
    "Show": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Show"
Global Search Bar: Placeholder: "Search by presentation title or slide content..."
Quick Create Button (+ Icon):
New Presentation
Notifications Bell Icon: Alerts for "A new presentation has been shared with you," "You have new comments to review," etc.
Settings Gear Icon: Links to the main Show settings.
User Profile Icon: Profile, Logout.
2. Aura Show Internal Sidebar
This sidebar is focused on presentation management.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A grid of "Recent Presentations" and quick links to start a New Presentation from a template or from scratch.
Section: Presentations
Icon: Monitor
Pages:
All Presentations: A file explorer view of all your presentation files and folders.
My Presentations: Presentations you own.
Shared with Me: Presentations other people have shared with you.
Recent: A quick list of recently opened presentations.
Trash: Deleted presentations.
Section: Library
Icon: BookOpen
Pages:
Templates: A gallery of pre-built presentation templates (e.g., "Sales Pitch," "Quarterly Review," "Project Proposal") and your own saved custom templates.
3. Page-Level Toolbars & Main Interface (The Presentation Editor)
The core of the application is the Presentation Editor, a three-panel interface.
Left Panel (Slide Sorter):
A vertical list of thumbnails for all the slides in your presentation.
You can click to jump to a slide, drag and drop to reorder slides, or right-click for options like New Slide, Duplicate Slide, Delete Slide.
Center Panel (The Canvas):
A large, "what you see is what you get" (WYSIWYG) view of the currently selected slide.
You can click on any element (text box, image, shape) to edit it directly.
Top Toolbar (The "Ribbon"):
A feature-rich toolbar with tabs for different functions.
Tab: File: Save, Download as (PPTX, PDF), Print.
Tab: Insert: Text Box, Image, Video, Chart (integrates with Aura Sheet), Table, Shape, Icon.
Tab: Design: Apply Theme, Master Slides (to edit the main template), Slide Layouts.
Tab: Transitions: A gallery of effects for how one slide changes to the next.
Tab: Animations: A panel to add entrance, emphasis, and exit effects to individual elements on a slide.
Right-Side Contextual Panel:
A panel that changes based on what you have selected.
If you select text, it shows formatting options (font, size, color).
If you select an image, it shows image options (crop, filters, borders).
It also has a dedicated tab for Collaboration (Comments) and another for Presenter Notes.
Top Right Buttons:
Share: Opens the sharing modal to invite collaborators.
Present: A prominent button with a dropdown: Start Slideshow, Presenter View, Broadcast Live.
4. Data Entry & Modals
Presenter View: When you start a slideshow, this special view opens on your screen (while the audience sees only the main slide). It shows the current slide, a preview of the next slide, your private Presenter Notes, and a timer.
Broadcasting (Modal): Starting a live broadcast generates a unique, public link that you can share with a remote audience, allowing them to watch your slideshow live in their web browser.
5. Bottom Bar
A thin status bar showing the current slide number (e.g., "Slide 7 of 25") and a field for Presenter Notes.
6. Task Info & Key Workflows
The "Sales Pitch" Flow: A salesperson needs to create a pitch deck. They go to Aura Show and start from the "Sales Pitch" Template. They use the Master Slides to add their company logo to every slide at once. They go to Aura Analytics, take a screenshot of a key performance chart, and paste it into a slide. They then Share the presentation with their manager, who leaves Comments with feedback.
The "Team Meeting" Flow: For a weekly team meeting, the manager opens a presentation. They click Present and then Share Screen in Aura Meeting. The whole team can see the slides.
The "Live Webinar" Flow (Integration): A marketer is hosting a webinar. They start the broadcast in Aura Webinar. Inside the webinar studio, they click a "Share" button and select their Aura Show presentation. The presentation is streamed directly to the audience. The marketer uses the Presenter View on their own screen to see their notes and guide the presentation.`,
    "Sign": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Sign"
Global Search Bar: Placeholder: "Search by document name or signer email..."
Quick Create Button (+ Icon): This is the primary action in this app.
Send for Signatures
Create New Template
Notifications Bell Icon: Alerts for "A document has been viewed," "A document has been signed," etc.
Settings Gear Icon: Links to the main Sign settings page.
User Profile Icon: Profile, Logout.
2. Aura Sign Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview showing a count of documents "Waiting for My Signature," "In Progress," "Completed," and "Nearing Expiry." Also shows a feed of recent activity.
Section: Actions
Icon: Send
Pages:
Send for Signatures: This starts the main workflow for sending a new document.
Sign a Document: A page for documents that only require your signature, not sending to others.
Section: Documents
Icon: FileText
Pages:
All Documents: A master list of every document, filterable by status.
Waiting for My Signature: A focused list of documents that you need to sign.
In Progress: Documents you have sent that are waiting for others to sign.
Completed: All fully signed and executed documents.
Declined / Recalled: Documents that were rejected by a signer or recalled by you.
Section: Library
Icon: BookOpen
Pages:
Templates: A list of reusable documents (like contracts or NDAs). Users can Create Template or Use Template from here.
Section: Administration
Icon: Shield
Pages:
Reports & Audit: A page to view detailed audit trails for any document (who viewed it, when, from what IP address).
My Profile: A page to manage your saved signature and initials.
3. Page-Level Toolbars
On the "All Documents" List Page:
Title: "All Documents"
Primary Button: + Send for Signatures
Filters: "Filter by Status," "Filter by Date Sent"
Inside the "Send for Signatures" Workflow (a multi-step wizard):
Step 1: Upload: A large drag-and-drop area to upload a PDF or Word document.
Step 2: Recipients: A section to add signers by name and email, and an option to "Set Signing Order."
Step 3: Prepare Document: The document is displayed in an editor. A right-side panel has draggable fields like Signature, Initials, Date Signed, Text Box, Checkbox. The user drags these fields onto the document for each signer.
Step 4: Review & Send: A final screen to customize the email subject and message before sending.
4. Data Entry & Modals
The Signing Experience (What the recipient sees):
The recipient gets an email with a "Review & Sign" button.
This opens a simple, guided view of the document.
Arrows guide the user to each required field.
When they click a signature field, a modal pops up allowing them to Draw their signature, Type it, or Upload an image of it.
A "Finish" button at the end completes the process and sends a copy to all parties.
5. Bottom Bar
Generally minimal. It might contain links to "Legal Information" or "Terms of Service."
6. Task Info & Key Workflows
The Sender Workflow: The user's primary job is the "Send for Signatures" wizard. They upload a document, add people, place fields, and send. Their secondary job is to monitor the Dashboard to see which documents are still "In Progress" and may require a follow-up.
The Signer Workflow: The user's primary job is to check their Waiting for My Signature list, open documents, and follow the guided process to apply their signature to the required fields.
The Template Workflow: For repetitive documents, a power user will go to Templates, upload a standard contract, place all the fields, and save it. Now, instead of starting from scratch, they can just click "Use Template," which skips directly to the "Add Recipients" step, saving a huge amount of time.`,
    "Site24x7": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Site24x7"
Global Search Bar: Placeholder: "Search for a monitor, server, or log entry..."
Quick Create Button (+ Icon) (Admin only):
Add a New Monitor
Notifications Bell Icon: This is replaced by a more prominent "Alarms" or "Alerts" section within the app.
Settings Gear Icon: Links to the main administration settings.
User Profile Icon: Profile, Logout.
2. Aura Site24x7 Internal Sidebar
This sidebar is organized by the different layers of the technology stack.
Section: Home
Icon: Home
Pages:
Dashboard: The main Network Operations Center (NOC) view. A fully customizable dashboard with maps, status widgets, and performance graphs showing the real-time health of the entire infrastructure.
Section: Monitoring
Icon: Activity
Pages: This is a hierarchical menu.
Web:
Website Monitoring: Track uptime and performance of websites from global locations.
Web Page Speed: Detailed breakdown of page load times.
REST API: Monitor the health and response time of your APIs.
Server:
Server Monitoring: Track CPU, memory, disk, and network usage for Windows and Linux servers.
Processes & Services: Monitor specific processes running on servers.
Cloud:
AWS: Monitor Amazon Web Services resources.
Azure: Monitor Microsoft Azure resources.
GCP: Monitor Google Cloud Platform resources.
Network:
Network Devices: Monitor routers, switches, and firewalls.
APM (Application Performance Monitoring):
App Transaction Tracing: Deep-dive into the performance of your custom application code.
Section: Logs
Icon: FileText
Pages:
Log Management: A central place to collect, search, and analyze log files from all your servers and applications.
Section: Alarms & Alerts
Icon: Bell
Pages:
Alarms: The main alarm console. A real-time list of all current problems and outages.
Alert History: A log of all past alerts.
Alert Configuration: A page to set up notification rules (who to notify, and how - via email, SMS, or Aura Cliq).
Section: Reports
Icon: BarChart3
Pages:
Reports: A gallery of performance reports, including Uptime Reports, SLA Reports, and Top N Reports (e.g., "Top 10 Servers by CPU Usage").
3. Page-Level Toolbars & Main Interface
The "Monitor Detail" Page:
This is the view you get when you click on any monitored item (like a specific website or server).
Top Bar: Shows the current status ("Up" or "Down") and key metrics.
Main View: A series of detailed performance charts and graphs over time.
Tabs: Tabs to switch between different views like Summary, Outages, Inventory, and Logs.
The "Log Search" Interface:
A powerful, search-engine-like interface for searching through massive amounts of log data. Uses a special query language.
4. Data Entry & Modals
Adding a New Monitor (Wizard): A multi-step wizard to add a new item to monitor.
Step 1: Choose the Monitor Type (Website, Server, etc.).
Step 2: Enter the details (e.g., the URL for a website, the IP address for a server).
Step 3: Configure thresholds (e.g., "Alert me if the response time is over 3 seconds").
Step 4: Set up notification profiles.
Configuring an Alert (Modal): A pop-up for setting up notification rules, with checkboxes for different notification methods (Email, SMS, Phone Call, Push Notification).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Website Down" Flow (Automation): The Aura Commerce website suddenly goes offline. Within 60 seconds, Aura Site24x7's global monitoring locations detect the outage. The system automatically triggers a "Down" Alarm. Based on the Alert Configuration, it immediately sends a high-priority message to the #dev-ops channel in Aura Cliq and starts making phone calls to the on-call engineers. The team is aware of the problem before the first customer even notices.
The "Slow Server" Flow: An IT admin notices on the Dashboard that the CPU usage for the main database server is consistently high. They click on the server to go to its Monitor Detail page. They look at the Processes tab and identify a specific process that is consuming all the resources. They can then use Aura Assist to securely connect to that server and fix the problem.
The "Root Cause Analysis" Flow: After an outage, a manager wants to know what happened. They go to Aura Site24x7. They look at the Outages tab for the website to see the exact timeline. Then they go to the Log Management section and search for all error logs from the web servers during that exact time period. They are able to correlate the outage with a specific error in the logs, identifying the root cause of the problem.
`,
    "Sites": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Sites"
Global Search Bar: Placeholder: "Search by site name or page title..."
Quick Create Button (+ Icon):
New Site
Notifications Bell Icon: Alerts for "New blog comment," "New form submission," etc.
Settings Gear Icon: Links to the main Sites settings page.
User Profile Icon: Profile, Logout.
2. Aura Sites Internal Sidebar
The sidebar is contextual. The main dashboard has a simple sidebar. Once you open a specific site to edit it, a more detailed builder sidebar appears.
Main Dashboard Sidebar
Icon: Home
Pages:
Dashboard: An overview showing a grid of all your created websites. Each site card shows a small preview, its name, and a link to its live URL.
All Sites: A list view of all your websites.
Site Builder Sidebar (Appears after selecting a site)
Section: Main
Icon: Layout
Pages:
Pages: The most important page. A list of all pages in your website (Home, About Us, Contact). You can Add New Page, Reorder pages (which updates the site's menu), and access Page Settings (like SEO title and description).
Blog: A dedicated area to manage blog posts. All Posts, New Post, Categories.
Store: If an e-commerce plan is active, this section appears to manage products and orders (integrating with Aura Commerce).
Portal: A section to manage members-only pages and member access.
Section: Design
Icon: Palette
Pages:
Templates: A gallery of pre-built website templates to choose from.
Global Styles: A page to set the website's overall Fonts, Colors, and Button Styles to ensure a consistent design.
Section: Administration
Icon: Settings
Pages:
Settings: The main settings for this specific website, including Site Name, Favicon, and connecting to Google Analytics.
Domains: A page to connect a custom domain name (e.g., www.mycompany.com) to the site.
SEO Tools: A toolkit for managing global SEO settings, submitting sitemaps, and setting up redirects.
3. Page-Level Toolbars & Main Interface (The Visual Builder)
The core of the application is the Visual Page Builder.
Center Panel (The Canvas):
A large, live, "what you see is what you get" (WYSIWYG) preview of your webpage.
You can click directly on any text to edit it, or on any image to replace it.
Left Panel (Add Elements & Sections):
Add Elements: A tab with draggable elements like Headline, Text Block, Image, Button, Form, Map.
Add Sections: A tab with pre-designed, full-width page sections like Hero Banners, Testimonials, Image Galleries, Pricing Tables. The user can click to add an entire beautiful section to their page instantly.
Top Bar within the Builder:
Device Switcher: Icons for Desktop, Tablet, and Mobile, allowing the user to preview how their site looks on different screen sizes.
Undo/Redo Buttons.
Save Button.
Publish Button: The final button to make the website live on the internet.
4. Data Entry & Modals
Image Library (Modal): Clicking to add or change an image opens a modal pop-up. This shows images the user has already uploaded and often includes a tab to search a library of free stock photos.
Form Settings (Modal): Clicking on a form element opens a modal to configure it, including where to send email notifications for new submissions (integrates with Aura Forms).
5. Bottom Bar
Non-existent. The focus is on the visual builder.
6. Task Info & Key Workflows
The "First Website" Flow: A new user clicks New Site. They are first shown the Templates gallery and choose a design they like. The Builder opens, pre-filled with the template content. The user clicks on the text to change it to their company's name and clicks on the images to replace them with their own. They go to the Pages section, create a new "Contact Us" page, and drag a Form and a Map element onto it. Finally, they click the Publish button. Aura Sites gives them a temporary URL (like my-site.aurasites.com), and their new website is live.
The "Write a Blog Post" Flow: The user goes to the Blog section in the sidebar. They click New Post. This opens a simpler, more focused editor designed for writing articles. They write their post, add images, assign it to a category, and click Publish. The new post automatically appears on their website's main blog page.
The "Connect a Domain" Flow: After building their site, the user goes to the Domains section. They follow a step-by-step wizard that tells them the exact DNS records they need to add at their domain registrar (like GoDaddy) to point their custom domain to their new Aura Site.`,
    "Social": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Social"
Global Search Bar: Placeholder: "Search posts, mentions, or users..."
Quick Create Button (+ Icon):
New Post (This is the primary action)
Notifications Bell Icon: Alerts for "New mention," "Post needs approval," "A post has failed to publish," etc.
Settings Gear Icon: Links to the main Social settings page.
User Profile Icon: Profile, Logout.
2. Aura Social Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. A customizable dashboard with widgets for "Recent Mentions," "Post Performance," "Follower Growth," and a live feed of brand activity.
Section: Publishing
Icon: Send
Pages:
New Post: Opens the main composer window to create a new post.
Calendar: A visual, drag-and-drop calendar showing all scheduled and published posts for all channels. Can be viewed by Week or Month.
Content Queue: A list of posts that are scheduled to be published automatically at the best times, based on AI.
Drafts & Approvals: A section for teams where posts can be saved as drafts and sent for approval before scheduling.
Section: Engagement
Icon: MessageCircle
Pages:
Monitor: The "social listening" hub. A multi-column view (like TweetDeck) where users can create custom feeds to track brand mentions, keywords, hashtags, or competitors.
Messages: A unified inbox for all direct messages and private messages from all connected social channels.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of pre-built and custom reports on "Audience Growth," "Post Engagement," "Best Time to Post," and "Hashtag Performance."
Section: Administration
Icon: Users
Pages:
Brands: If managing multiple brands, this page lists them.
Social Channels: A page to connect or disconnect social media profiles (Facebook Pages, Instagram Accounts, etc.).
Team Members: Manage team roles and permissions (e.g., who can publish vs. who can only create drafts).
3. Page-Level Toolbars & Main Interface (The Post Composer)
The most important interface is the New Post Composer, which is often a large modal pop-up.
Components of the Composer:
Channel Selector: Checkboxes at the top to select which social networks this post will go to.
Text Area: A large box to write the main text of the post. It shows a character count for networks like Twitter.
Media Uploader: Buttons to upload images or videos.
Link Shortener: Automatically shortens any links you paste.
Live Previews: On the right side, it shows a live, accurate preview of how the post will look on each selected social network (e.g., how it will look on Facebook vs. how it will look on LinkedIn).
Publishing Options (at the bottom): Buttons for Publish Now, Schedule for Later (opens a calendar), or Add to Queue.
4. Data Entry & Modals
Adding a Stream in "Monitor" (Modal): A pop-up asks the user what they want to track (e.g., "Mentions of my brand," "Posts with the hashtag #AuraLaunch") and for which network. This then creates a new column in their Monitor dashboard.
Responding to a Mention (Action): In the Monitor view, each incoming mention has buttons directly on it to Reply, Like, or Retweet. Clicking "Reply" opens a small text box to type a response.
5. Bottom Bar
Non-existent, to maximize screen space for content feeds and calendars.
6. Task Info & Key Workflows
The "Content Scheduling" Flow: A social media manager plans their content for the week. They open the New Post composer, write a post, upload an image, and select to post it to Facebook, Instagram, and LinkedIn. They click Schedule for Later and choose Wednesday at 10:00 AM. The post then appears on their Calendar view.
The "Community Management" Flow: The user spends their day in the Monitor tab. They have a column that tracks all mentions of "Aura." When a new tweet appears from a customer asking a question, they click the Reply button directly from within Aura Social and answer the question. This reply is then posted publicly on Twitter.
The "Reporting" Flow: At the end of the month, the manager goes to the Reports page. They run a report on "Post Engagement" to see which of their posts got the most likes and comments. They discover that posts with videos perform best, and they use this information to plan next month's content.`,
    "Sprints": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Sprints"
Global Search Bar: Placeholder: "Search by story ID, epic, or keyword..."
Quick Create Button (+ Icon):
New User Story
Notifications Bell Icon: Alerts for "A new sprint has started," "A story was moved to 'Done'," etc.
Settings Gear Icon: Links to the main Sprints project settings.
User Profile Icon: Profile, Logout.
2. Aura Sprints Internal Sidebar
This sidebar is focused on the core components of the Scrum framework.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview for the team. Widgets for "Current Sprint Progress" (burndown chart), "My Work Items," and "Team Velocity."
Section: Planning
Icon: List
Pages:
Backlog: The most important page. A prioritized list of all "Work Items" (User Stories, Tasks, Bugs) for the entire project.
Epics: A high-level view of large features or initiatives, showing all the user stories that belong to them.
Releases: A page to plan and track major product releases by grouping sprints together.
Section: Execution
Icon: PlayCircle
Pages:
Sprints: A list of all sprints (Active, Upcoming, Completed).
Scrum Board: The primary workspace for the active sprint. A visual Kanban board with columns like "To Do," "In Progress," "In Review," "Done."
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of agile-specific reports, including the Velocity Chart (how much work the team completes per sprint), Burndown Chart (sprint progress), and Cumulative Flow Diagram.
Section: Team
Icon: Users
Pages:
Members: A list of all team members and their roles (Product Owner, Scrum Master, Developer).
3. Page-Level Toolbars & Main Interface
On the "Backlog" Page:
A prioritized, vertical list of work items.
Users can drag and drop items to change their priority.
A "Sprint Planning" panel is on the right. The team drags items from the backlog and drops them into the "Next Sprint" panel until they have planned the work.
On the "Scrum Board" Page:
A Kanban board showing the tasks for the current sprint only.
Each team member can see cards assigned to them.
The primary action is dragging a card from one column to the next to show progress.
The "Work Item Detail" View (opens when you click an item):
A full-screen or large modal view.
Fields: Title, Description, Acceptance Criteria, Story Points (for estimation), Assignee, Epic.
Sub-sections: A checklist for Sub-tasks, Attachments, a Comments thread, and a Git Integration panel that shows linked code branches and pull requests.
4. Data Entry & Modals
Sprint Planning Meeting (Interface): The whole team looks at the Backlog page. The Product Owner explains the highest priority items. The team discusses them and assigns Story Points to estimate the effort. They then drag items into the "Sprint" panel until the total story points match their team's known Velocity.
Creating a User Story (Modal): A clean form focused on agile principles, with large text areas for "As a [user type], I want [an action] so that [a benefit]."
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Sprint Kickoff" Flow: The team finishes their Sprint Planning meeting. The Scrum Master clicks the "Start Sprint" button. The system automatically creates the new Scrum Board, populates it with all the planned stories, and the sprint is now active.
The "Daily Standup" Flow: A developer starts their day. They open the Scrum Board. They see the tasks assigned to them in the "To Do" column. They pick one, drag it to "In Progress." They click the task to open its details and click a "Create Branch" button. This automatically creates a new code branch in the connected Git repository (e.g., on GitHub), named after the story ID.
The "Developer" Flow (Integration): The developer finishes their code. When they create a "Pull Request" on GitHub and include the story ID in its title, Aura Sprints automatically detects this. It moves the corresponding task card on the Scrum Board from "In Progress" to "In Review" and adds a link to the pull request directly on the card.
The "Sprint End" Flow (Automation): At the end of the two-week sprint, the Scrum Master clicks "End Sprint." The system automatically moves any unfinished stories back to the Backlog. It then calculates the total Story Points for all the "Done" items and updates the team's Velocity Chart, providing data for the next sprint planning meeting.`,
    "Subscriptions": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Subscriptions"
Global Search Bar: Placeholder: "Search by customer, subscription ID, or plan name..."
Quick Create Button (+ Icon):
New Subscription
New Customer
New Plan
Notifications Bell Icon: Alerts for "New subscription started," "Payment failed," "Subscription is about to renew," etc.
Settings Gear Icon: Links to the main Subscriptions settings.
User Profile Icon: Profile, Logout.
2. Aura Subscriptions Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: The main metrics control center. Widgets for key subscription metrics: MRR (Monthly Recurring Revenue), ARR (Annual Recurring Revenue), Churn Rate, LTV (Customer Lifetime Value), and Active Subscribers. Also shows a feed of recent activities.
Section: Core Management
Icon: Package
Pages:
Products: The top-level container for your offerings.
Plans: The main page for creating and managing your subscription plans (e.g., "Basic Plan," "Pro Plan," "Enterprise Plan"). Here you define pricing, billing cycles (monthly/yearly), and included features.
Add-ons: A list of optional, recurring add-ons that customers can add to their base plan (e.g., "Extra User Seat," "Premium Support").
Coupons: Create and manage discount codes for your subscription plans.
Section: Customers & Billing
Icon: Users
Pages:
Customers: A list of all your subscribers.
Subscriptions: A master list of all individual subscriptions, showing their status (Trialing, Active, Paused, Canceled).
Invoices: A log of every recurring invoice that has been generated (integrates with Aura Books).
Transactions: A log of all payment gateway transactions (successful and failed).
Section: Churn Prevention
Icon: Shield
Pages:
Dunning Management: The automated process for handling failed payments. This page shows you the rules and email templates used to retry charges and notify customers.
Section: Frontend Tools
Icon: Globe
Pages:
Hosted Pages: A tool to get links to secure, pre-built "checkout" pages and a "customer portal" where subscribers can manage their own subscriptions.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of subscription-specific reports, including "MRR Growth," "Churn by Plan," "Trial Conversion Rate," and "Cohort Analysis."
3. Page-Level Toolbars & Main Interface
On the "Plans" Page:
Title: "Subscription Plans"
Primary Button: + New Plan
Plan Cards: Each plan is shown as a card with its name, price, and billing cycle, with quick links to Edit or get its unique Checkout Link.
On a "Single Customer Detail" Page:
Shows the customer's contact info and payment methods.
A large section displays their active subscriptions. Each subscription has action buttons like Change Plan, Pause Subscription, Cancel Subscription, or Add Add-on.
A timeline view shows the complete history of their subscription, including every renewal, payment, and plan change.
4. Data Entry & Modals
Creating a New Plan (Full Page Form): A detailed form with fields for "Plan Name," "Price," "Billing Cycle," a description, and a checklist of features to display on the checkout page.
Changing a Subscription (Modal): When a user clicks "Change Plan" for a customer, a modal pops up. It shows the customer's current plan and a dropdown to select the new plan. The system automatically calculates any prorated charges for the upgrade and displays them for confirmation.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Subscriber" Flow: A potential customer on your website clicks "Subscribe to Pro Plan." They are taken to a secure Hosted Checkout Page powered by Aura Subscriptions. They enter their credit card details. The system processes the payment, creates a new Customer and a new Subscription record, and automatically sends a welcome email. Their MRR on the Dashboard instantly increases.
The "Automatic Renewal" Flow: On the first day of the month, Aura Subscriptions automatically looks at all subscriptions that are due for renewal. It generates an Invoice for each one and automatically charges the customer's saved payment method. A receipt is automatically emailed to the customer. This happens for thousands of customers with zero manual work.
The "Failed Payment" Flow (Dunning): A customer's credit card expires. The automatic renewal charge fails. The Dunning Management system automatically kicks in. It sends an email to the customer: "Your payment failed. Please update your payment method." It will then automatically retry the charge every 3 days. If it still fails after 4 attempts, the system will automatically cancel the subscription to prevent revenue loss.
The "Self-Service Upgrade" Flow: A customer on the "Basic Plan" decides they need more features. They log into the Customer Portal. They see their current subscription and click a button that says "Upgrade Plan." They select the "Pro Plan" from a list. The system shows them the prorated charge for the rest of the month. They confirm, and their plan is instantly upgraded, and they get access to the new features.`,
    "Survey": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Survey"
Global Search Bar: Placeholder: "Search by survey name or question..."
Quick Create Button (+ Icon):
New Survey
Notifications Bell Icon: Alerts for "New survey response received," "Survey has reached its response goal," etc.
Settings Gear Icon: Links to the main Survey settings page.
User Profile Icon: Profile, Logout.
2. Aura Survey Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "Total Surveys," "Total Responses," and a list of recently active surveys with their response rates.
Section: Surveys
Icon: MessageSquare
Pages:
All Surveys: The main page, a list or grid of all created surveys. Each survey card shows its name, number of responses, and status (Draft, Published, Closed).
My Surveys: Surveys created by me.
Shared With Me: Surveys shared by team members.
Templates: A gallery of pre-built survey templates (Customer Satisfaction, Net Promoter Score (NPS), Employee Engagement, etc.).
Section: Analytics
Icon: BarChart3
Pages:
All Responses: A master log of all individual responses from all surveys.
Reports: A list of all generated reports.
3. Page-Level Toolbars & Main Interface (The Survey Builder)
The core of the application is the Survey Builder, a powerful editor for a selected survey.
Top Tabs within the Builder:
Builder: The main canvas for designing the survey.
Distribution: A page to get links and methods for sharing the survey.
Reports: A page to view the analytics for this specific survey.
Builder Interface (three-panel design):
Left Panel (Add Questions):
A library of all available question types.
Choice Questions: Multiple Choice, Checkboxes, Dropdown.
Rating Questions: Star Rating, Net Promoter Score (NPS), Slider.
Text Questions: Single Line Text, Comment Box.
Other: File Upload, Contact Information, Matrix.
Center Panel (The Canvas):
A live, visual preview of the survey.
Users drag question types from the left and drop them here.
They can reorder questions by dragging them up and down.
Right Panel (Question Settings):
When a question is clicked on the canvas, this panel appears.
Properties: Edit the question text, add a description, add choices (for multiple-choice questions).
Options: Make the question required, add "Other" as an option.
Logic: Set up "Skip Logic" or "Branching" (e.g., "If the user answers 'Yes' to this question, then jump to Question 5").
4. Data Entry & Modals
The Survey Experience (What the respondent sees):
A clean, simple, mobile-friendly interface showing one or more questions per page.
A progress bar at the bottom shows how far they are through the survey.
A final "Submit" button and a customizable "Thank You" page.
Viewing a Report (Full Page):
A dedicated analytics page for each survey.
It automatically generates charts (pie charts, bar charts) for every question.
It includes a "Text Analytics" section that uses AI to find common themes and sentiment in open-ended text answers.
5. Bottom Bar
Non-existent. All focus is on the survey builder and its analytics.
6. Task Info & Key Workflows
The "Create a Feedback Survey" Flow: A user clicks New Survey. They use the Builder to drag and drop questions. They add a Star Rating question and a Comment Box. They go to the Distribution tab, copy the public link, and email it to their customers.
The "Analyze Results" Flow: After a week, the user comes back and goes to the Reports tab for their survey. They see that the average rating is 4.2 stars. They look at the "Text Analytics" section and see that the AI has identified "Fast Delivery" as a positive theme and "Customer Support" as a negative theme, giving them instant, actionable insights.
The "Conditional Logic" Flow (Advanced): A user creates a survey. The first question is "Have you used our product?" They add Logic to this question. If the user answers "Yes," they are taken to a page of detailed questions about the product. If they answer "No," they are taken directly to the final "Thank You" page, skipping all the irrelevant questions. This creates a smarter, more respectful survey experience.
`,
    "Tables": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Tables"
Global Search Bar: Placeholder: "Search across all your bases and tables..."
Quick Create Button (+ Icon):
New Base
Notifications Bell Icon: Alerts for "@mentions in a record," "An automation has run," etc.
Settings Gear Icon: Links to the main Tables settings.
User Profile Icon: Profile, Logout.
2. Aura Tables Internal Sidebar
This sidebar is focused on navigating your different databases ("Bases") and workspaces.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page. A grid of all your "Bases," color-coded and with icons. Shows recently accessed bases.
Section: Workspaces
Icon: Users
Pages:
This is a collapsible list of all the Workspaces you are a part of (e.g., "Marketing Team," "Personal Projects"). Clicking a workspace reveals the Bases inside it.
Section: Library
Icon: BookOpen
Pages:
Templates: A gallery of pre-built base templates for common use cases (Project Tracker, Simple CRM, Content Calendar, etc.).
Marketplace: A place to find and install community-built extensions and apps.
3. Page-Level Toolbars & Main Interface (The Base)
The core of the application is the Base, which is a single database that can contain multiple tables. The interface is highly interactive.
Top Bar within a Base:
Table Tabs: Tabs at the top to switch between the different tables within the base (e.g., "Tasks," "Projects," "Team Members").
View Tabs: Next to the table tabs, another set of tabs to switch between different Views of the current table's data.
The Main View (The Data Grid):
The default view is a powerful spreadsheet-like grid.
Columns are "Fields" with specific data types (Single line text, Date, Attachment, Checkbox, Single select, Link to another record).
Rows are individual "Records."
Toolbar above the Grid:
View Name: Shows the name of the current view.
View Controls: Buttons to Hide fields, Filter, Group, and Sort the records.
Collaboration: Icons showing the profile pictures of other team members currently viewing the base.
Automations: A button to open the automation panel.
Interfaces: A button to switch to the custom dashboard view.
4. Data Entry & Modals
Data Entry: Users can type directly into the grid cells, just like a spreadsheet.
Expanding a Record (Modal): Clicking on a row opens a modal pop-up that shows all the fields for that single record in a clean, vertical form. This is where users can see long text fields, view attachments, and have conversations in a "Comments" section.
The View Switcher: This is a key feature. A user can create a new View of their data without changing the underlying table. Common views include:
Form View: Instantly creates a shareable web form to collect new records.
Kanban View: Visualizes records as cards in a pipeline, grouped by a "Single select" field (like "Status").
Calendar View: Plots records on a calendar based on a "Date" field.
Gallery View: Displays records as large visual cards, perfect for image-heavy tables.
5. Bottom Bar
A thin status bar showing the number of records in the current view and summary calculations (like Sum or Average) for number fields.
6. Task Info & Key Workflows
The "Project Tracker" Flow: A user starts with the "Project Tracker" Template. This creates a Base with two linked tables: "Projects" and "Tasks." In the "Tasks" table, they create a Link to another record field that connects each task to a project. They create a Kanban View for their Tasks table, grouped by the "Status" field (To Do, In Progress, Done). As the team works, they drag task cards across the board.
The "Content Calendar" Flow: A marketing team creates a Base to manage their blog. They have a table with fields for "Article Title," "Author," "Status" (Draft, In Review, Published), and "Publish Date." They create a Calendar View based on the "Publish Date" field. This gives them a visual overview of their entire content schedule for the month. When an article is ready for review, they change its Status to "In Review."
The "Automation" Flow: In their Content Calendar, the team creates an Automation. The Trigger is "When a record's Status is updated to 'Published'." The Action is to "Send a message in the #marketing channel in Aura Cliq." Now, every time a new article goes live, the entire team is automatically notified.
`,
    "TeamInbox": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura TeamInbox"
Global Search Bar: Placeholder: "Search all inboxes by subject, sender, or content..."
Quick Create Button (+ Icon):
New Conversation (to start a new email thread from a shared address)
Notifications Bell Icon: Alerts for "A new conversation has been assigned to you," "You were @mentioned in a comment," etc.
Settings Gear Icon: Links to the main TeamInbox administration settings.
User Profile Icon: Shows agent's online/offline status, Profile, Logout.
2. Aura TeamInbox Internal Sidebar
This sidebar is focused on different views of the conversations.
Section: My Work
Icon: User
Pages:
Assigned to Me: The most important view. A list of all conversations that you are personally responsible for.
Mentions: A feed of all internal comments where a teammate has @mentioned you.
Following: A list of conversations you are not assigned to, but have chosen to follow.
Section: Team Inboxes
Icon: Inbox
Pages:
This section lists all the shared inboxes you are a member of. Clicking one opens its specific views. For example:
Support Inbox
Unassigned: The main pool of new, incoming emails for the team to claim.
Open: All active conversations in this inbox.
Snoozed: Conversations that are temporarily hidden.
Closed: All resolved and archived conversations.
Sales Inbox (with the same sub-pages)
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Team Performance" (response times, conversations per agent), "Busiest Times," and "Common Topics" (based on tags).
3. Page-Level Toolbars & Main Interface (The Three-Panel View)
The main interface is a powerful, three-panel view, similar to a modern email or helpdesk client.
Left Panel (The Conversation List):
A list of email conversations based on the view selected in the sidebar (e.g., Unassigned). Each item shows the sender, subject, and the agent it's assigned to.
Center Panel (The Conversation Thread):
Displays the full history of the selected email conversation.
At the bottom: A rich text editor for writing a reply.
Tabs at the top of the editor: Reply (to the customer), and Comment (to write a private, internal note for your team).
Right Panel (Context & Properties):
A panel showing all the important details about the conversation.
Assignee: A dropdown to assign the conversation to a specific team member.
Tags: A field to add tags for categorization (e.g., "Urgent," "Billing-Issue").
Snooze: A button to temporarily hide the conversation.
Customer Info: A powerful section that automatically pulls in data from Aura CRM, showing the customer's details and their recent sales deals or support tickets.
4. Data Entry & Modals
Writing an Internal Comment: The primary "collaboration" action. An agent can @mention a colleague in a private comment to ask a question without the customer seeing it.
Creating a Rule (in Settings): A wizard-like interface to create automation rules. For example: IF an email subject contains the word "Urgent," THEN automatically ASSIGN it to the "Senior Support" team and ADD the "Urgent" tag.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Triage" Flow: A new email arrives in the Support Inbox. It appears in the Unassigned view. A team lead looks at it, sees it's a technical question, and in the Right Panel, Assigns it to Rohan, a technical expert.
The "Collaboration" Flow: Rohan receives a notification that a conversation has been assigned to him. He opens it in his Assigned to Me view. He reads the question but is not sure of the answer. In the Center Panel, he clicks the Comment tab and types, "@manager, I need your approval for this refund." The manager gets a notification, opens the same conversation, and types a reply in the comments: "@Rohan, approved. Please proceed." Rohan can now confidently reply to the customer.
The "Collision Detection" Flow: Two agents, Rohan and Priya, both open the same unassigned ticket at the same time. At the top of the conversation, a small yellow warning appears: "Priya is also viewing this conversation," with her profile picture. This prevents them from accidentally sending two different replies to the same customer.`,
    "Thrive": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Thrive"
Global Search Bar: Placeholder: "Search by member, affiliate, or coupon code..."
Quick Create Button (+ Icon):
New Affiliate
Add Loyalty Points
Notifications Bell Icon: Alerts for "New affiliate signed up," "Loyalty tier upgrade," etc.
Settings Gear Icon: Links to the main Thrive settings page.
User Profile Icon: Profile, Logout.
2. Aura Thrive Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing key metrics like "Total Loyalty Members," "Points Redeemed," "Top Affiliates by Revenue," and "Referral Traffic."
Section: Loyalty Program
Icon: Star
Pages:
Setup & Rules: The main configuration page. Here you define Earning Rules (e.g., "1 point for every $1 spent," "50 points for a product review") and Tiers (e.g., Bronze, Silver, Gold) with their unique rewards.
Rewards: A list of all available rewards that customers can redeem with points (e.g., "$10 Off Coupon," "Free Shipping," "Exclusive Product").
Members: A searchable list of all customers enrolled in the loyalty program, showing their current tier and point balance.
Section: Affiliate Program
Icon: Users
Pages:
Setup & Commissions: The main configuration page. Here you set the commission structure (e.g., "10% of every sale," "Flat $5 per new customer").
Affiliates: A list of all your registered affiliates. You can Approve new affiliates, view their performance, and see how much commission you owe them.
Marketing Assets: A library of banners, links, and email copy that you provide to your affiliates to help them promote your business.
Payouts: A page to manage and track commission payments to your affiliates.
Section: Referral Program
Icon: Share2
Pages:
Setup & Rewards: The configuration page for a simpler, customer-to-customer referral program. You define the rewards for both the Referrer (the existing customer) and the Friend (the new customer).
Referrals: A log of all successful referrals.
Section: Analytics
Icon: BarChart3
Pages:
Reports: Detailed reports on "Loyalty Program ROI," "Top Performing Affiliates," "Most Redeemed Rewards," and "Referral Conversion Rates."
3. Page-Level Toolbars & Main Interface
On the "Members" (Loyalty) Page:
Title: "Loyalty Members"
Primary Button: + Adjust Points (opens a modal to manually add or remove points from a member).
Filters: "Filter by Tier," "Filter by Points Balance."
The Customer's View (Loyalty Widget on the main website):
A small pop-up or dedicated page on your e-commerce site.
Shows the logged-in customer their current point balance and tier.
Displays a list of available rewards and a "Redeem" button.
Provides their unique referral link to share with friends.
The Affiliate's View (Affiliate Portal):
A special, separate dashboard that affiliates log into.
Shows their unique affiliate link.
Displays their stats: "Clicks," "Conversions," and "Earned Commissions."
Gives them access to the Marketing Assets you uploaded.
4. Data Entry & Modals
Creating a Reward (Modal):
A pop-up form to define a new loyalty reward. Fields for "Reward Name," "Points Cost," and "Reward Type" (e.g., Coupon, Free Product).
Approving an Affiliate (Action):
On the Affiliates list, each pending affiliate has an "Approve" and "Reject" button next to their name.
5. Bottom Bar
Non-existent, to maintain a clean, data-focused interface.
6. Task Info & Key Workflows
The "Loyalty Loop" Flow: A customer makes a purchase on your Aura Commerce site. Aura Thrive automatically sees this, and based on the Earning Rules, it adds points to the customer's account. The customer receives an email: "Congratulations! You've earned 100 points." Later, the customer logs in, sees they have enough points for a "$10 Off" reward, and clicks "Redeem." Aura Thrive automatically generates a unique coupon code and displays it to the customer, encouraging them to make another purchase.
The "Affiliate Onboarding" Flow: A blogger signs up for your affiliate program. You receive a notification in Aura Thrive and go to the Affiliates page. You review their website and click Approve. The blogger automatically receives a welcome email containing their unique affiliate link and a link to their Affiliate Portal.
The "Affiliate Sale" Flow: The blogger writes a post and includes their unique affiliate link. A reader clicks the link, comes to your Aura Commerce site, and buys a product. Aura Thrive tracks this click. After the purchase is complete, it automatically calculates the 10% commission and adds it to the blogger's "Unpaid Commissions" total in their portal.
`,
    "ToDo": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura ToDo"
Global Search Bar: Placeholder: "Search for a task..."
Quick Create Button (+ Icon):
New Task
Notifications Bell Icon: Alerts for "A task was assigned to you," "A task is due today," etc.
Settings Gear Icon: Links to the main ToDo settings.
User Profile Icon: Profile, Logout.
2. Aura ToDo Internal Sidebar
This sidebar is focused on different views and filters for your tasks.
Section: Smart Lists (AI-Powered)
Icon: Zap
Pages:
My Day: The main landing page. A clean, focused view that shows only the tasks you have decided to work on today.
Important: A filtered list of all tasks you have marked with a star.
Planned: A list of all tasks that have a specific due date, grouped by date.
Assigned to Me: All tasks that other people have assigned to you.
All Tasks: A master list of every single task.
Section: My Lists
Icon: List
Pages:
A user-created list of all your task lists. Each list is a separate project or category (e.g., Shopping, AURA Project - Frontend, Personal Goals).
A + New List button at the bottom.
Section: Shared Lists
Icon: Users
Pages:
A list of all the task lists that have been shared with you by other team members.
3. Page-Level Toolbars & Main Interface (The Task List)
The core of the application is the Task List View.
Top Bar (above the list):
List Title: Shows the name and an icon for the current list (e.g., "AURA Project - Frontend").
"More Actions" (...) Menu: Options to Rename List, Share List, Sort tasks (by due date, priority, etc.).
The Main List:
A clean list of tasks.
At the top: An + Add a task input field for quickly adding a new item to the current list.
Each Task Item:
A Checkbox on the left to mark the task as complete. Completed tasks are grayed out and moved to a "Completed" section at the bottom.
The Task Title.
A Star icon on the right to mark the task as important.
The Task Detail Panel (opens when you click on a task):
A right-side panel slides open, showing all the details for the selected task.
Fields:
Steps / Sub-tasks: A checklist of smaller steps within the main task.
Add to My Day: A button to add this task to your focused "My Day" view.
Remind Me: Opens a date/time picker for a reminder.
Add Due Date: Opens a calendar to set a deadline.
Repeat: A dropdown to set recurring tasks (daily, weekly, etc.).
Add File: Attach a file from your computer or Aura WorkDrive.
Notes: A text area for detailed notes.
4. Data Entry & Modals
Quick Add Task: The primary data entry is the + Add a task field at the top of each list, designed for rapid capture of ideas.
Smart Date Parsing (AI): When adding a task, the user can type natural language. For example, typing "Write the project report tomorrow at 5pm" will automatically create the task and set the due date and reminder for the correct time.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Daily Planning" Flow: A user starts their day. They look at their Planned and Assigned to Me lists. For each important task they want to work on, they open its detail panel and click Add to My Day. They then switch to the My Day view, which now shows a clean, focused list of 5-7 tasks, helping them avoid feeling overwhelmed.
The "Shared Shopping List" Flow: A user creates a new list called Groceries and shares it with their family members. Everyone can add items to the list from their phone. When one person is at the store, they open the shared list and can see everything that needs to be bought.
The "Email to Task" Flow (Integration): A user receives an important email in Aura Mail that requires an action. They flag the email. An automation rule (set up in Aura Flow) automatically creates a new task in their Aura ToDo Inbox list, with the email's subject as the task title and a link back to the original email in the notes.`,
    "Vault": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Vault"
Global Search Bar: The primary feature. A powerful, encrypted search bar to find any saved "Secret." Placeholder: "Search your vault..."
Quick Create Button (+ Icon):
New Secret (opens a dropdown to choose the type)
Notifications Bell Icon: Alerts for "A new secret has been shared with you," "Your Security Score has changed," "A password has been found in a known data breach," etc.
Settings Gear Icon: Links to the main Vault settings.
User Profile Icon: Shows lock/unlock status, Profile, Logout.
2. Aura Vault Internal Sidebar
This sidebar is focused on organizing different types of secrets and access levels.
Section: My Vault
Icon: Lock
Pages:
All Secrets: The main view, showing a list of all secrets you have access to.
Passwords: A filtered view showing only website and application logins.
Secure Notes: A place for storing sensitive text information (e.g., server configurations, license keys).
Identities: A place to store personal information for auto-filling forms (name, address, etc.).
Payment Cards: Securely store credit card information for auto-fill.
Section: Team Collaboration
Icon: Users
Pages:
Chambers: The core team feature. "Chambers" are secure, shared folders. A user can create a chamber (e.g., "Marketing Team Passwords," "Server Credentials"), add secrets to it, and then share the entire chamber with specific team members or groups.
Shared with Me: A view of individual secrets that have been shared with you directly.
Section: Security Tools
Icon: Shield
Pages:
Security Dashboard: A critical page showing your overall "Security Score," with widgets for Weak Passwords, Reused Passwords, and Old Passwords.
Breach Watch: A tool that monitors the dark web and alerts you if any of your saved passwords have been exposed in a known data breach.
Password Generator: A tool to create strong, random passwords.
Section: Administration (Admin only)
Icon: Settings
Pages:
User Management: Add or remove users from the team vault.
Policies: Enforce security rules for the entire team (e.g., "Minimum password length is 12 characters," "MFA is required for all users").
Audit Trail: A detailed, unchangeable log of every action taken in the vault (who accessed what secret, when, and from where).
3. Page-Level Toolbars & Main Interface
On the "Passwords" List Page:
A list of all your saved logins. Each item shows the website/app name and your username. The password is hidden by default.
Action Icons on each item: A Copy Username button, a Copy Password button, and an Edit button.
The Secret Detail View (when you click on an item):
Shows all fields for that secret (URL, Username, Password with a "Reveal" button).
Includes a Password History tab.
Action buttons for Share, Move to Chamber, Delete.
4. Data Entry & Modals
The Browser Extension: This is the most important part of the user experience. A browser extension that:
Automatically detects login forms and offers to auto-fill your saved credentials.
When you sign up for a new website, it automatically offers to generate and save a new, strong password for you.
Creating a New Secret (Modal): A clean form with fields for "Name," "URL," "Username," "Password," and "Notes." It has an integrated "Generate Password" button.
Sharing a Secret (Modal): A pop-up where you can type a team member's name and choose their permission level (View Only or Can Edit).
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Daily Login" Flow: A user needs to log into a website. They go to the login page. The Aura Vault Browser Extension automatically detects the page, shows a small icon in the username field, and when clicked, auto-fills their username and password. The user just has to click "Login."
The "New Team Member" Flow: A new developer joins the team. The IT manager adds them to the "Developers" group in Aura Vault. This action automatically gives the new developer access to the "Server Credentials" and "Database Passwords" Chambers. The developer can now do their job without ever having to ask someone to send them a password in a chat message.
The "Security Audit" Flow: A manager wants to improve the team's security. They go to the Security Dashboard. They see that 5 users are reusing the same password across multiple sites. They can then send a notification to those users, asking them to update their weak passwords.
The "Offboarding" Flow (Security): An employee leaves the company. The admin deactivates their Aura Vault account. This instantly revokes their access to all shared Chambers and secrets, securing the company's data.
`,
    "Webinar": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Webinar"
Global Search Bar: Placeholder: "Search by webinar name, presenter, or attendee..."
Quick Create Button (+ Icon):
Schedule a New Webinar
Notifications Bell Icon: Alerts for "New registration," "15 minutes until your webinar starts," etc.
Settings Gear Icon: Links to the main Webinar settings page.
User Profile Icon: Profile, Logout.
2. Aura Webinar Internal Sidebar
Section: Home
Icon: Home
Pages:
Dashboard: An overview showing "Upcoming Webinars," key stats from the last webinar (attendees, engagement rate), and a list of recent recordings.
Section: Webinars
Icon: Monitor
Pages:
All Webinars: The main page, a list of all your webinars. Each item shows the title, date, number of registrants, and status (Upcoming, Live, Completed).
Schedule Webinar: This starts the multi-step wizard to create a new webinar.
Webinar Series: A page to manage a series of recurring webinars.
Section: Library
Icon: BookOpen
Pages:
Recordings: A list of all your past webinar recordings. You can get a public sharing link or download the video file here.
Handouts: A central place to upload PDFs or other files that you want to share with attendees during a live webinar.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Registration vs. Attendance Rate," "Audience Engagement" (polls, Q&A), "Performance by Source" (where registrants came from).
3. Page-Level Toolbars & Main Interface
The UI is split between the Webinar Setup interface and the Live Broadcast Studio.
Webinar Setup Interface (after clicking on a scheduled webinar):
A tabbed interface to manage all aspects of the event before it goes live.
Tab: Overview: Shows key details and the public registration link.
Tab: Registration: Customize the Registration Form and set up Email Notifications (confirmation, reminder, and follow-up emails).
Tab: Engagement: Create Polls and Q&A questions that you plan to launch during the webinar. Upload Handouts.
Tab: Presenters: Invite co-presenters and panelists.
The Live Broadcast Studio (The "On-Air" Control Room):
Main Window: Shows the live video feed of the active speaker.
Control Panel (for the host):
Buttons to Start Broadcast, End Broadcast, and Start Recording.
A "Layouts" button to switch between showing only the speaker, only the screen share, or both side-by-side.
Side Panel Tabs:
Chat: View and manage public chat from attendees.
Q&A: View incoming questions. The host can choose which questions to answer live.
Polls: Launch pre-made polls and see the results in real-time.
Attendees: See a list of who is currently watching.
4. Data Entry & Modals
Scheduling a Webinar (Wizard): A full-page, multi-step process to define the "Title," "Date & Time," "Description," and add "Presenters."
Creating a Poll (Modal): A simple pop-up where the host types a question and the multiple-choice answers for a poll they want to launch during the live event.
5. Bottom Bar
Non-existent. The focus is on the setup and live broadcast interfaces.
6. Task Info & Key Workflows
The "Webinar Creation & Promotion" Flow: A user clicks Schedule Webinar. They fill out the details. The system automatically creates a public Registration Page. The user copies the link to this page and promotes it using Aura Campaigns and Aura Social.
The "Attendee" Flow: A person clicks the registration link, fills out a simple form, and clicks "Register." They automatically receive a confirmation email with a unique link to join the webinar and a calendar invite. They later receive a reminder email one hour before the event starts.
The "Live Event" Flow: 10 minutes before the start time, the host and presenters join a private "Green Room" from the webinar's page. They test their cameras and microphones. At the start time, the host clicks Start Broadcast. They share their screen to show a presentation. During the presentation, they launch a Poll to engage the audience. At the end, they look at the Q&A tab and answer the most popular questions. When finished, they click End Broadcast.
The "Post-Webinar" Flow: After the event, the recording automatically appears in the Recordings library. The system automatically sends a follow-up email to everyone who attended, with a link to the recording. The host goes to the Reports page to analyze who attended and how long they stayed, using this data to identify hot leads for the sales team in Aura CRM.`,
    "WorkDrive": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura WorkDrive"
Global Search Bar: A very powerful search bar that can search not only by filename but also inside the content of documents and spreadsheets (using OCR for images/PDFs). Placeholder: "Search all files and folders..."
Quick Create Button (+ Icon):
New Document (opens Aura Writer)
New Spreadsheet (opens Aura Sheet)
New Presentation (opens Aura Show)
New Folder
Upload File / Folder
Notifications Bell Icon: Alerts for "A new file has been shared with you," "You have a new comment on 'Project Plan.docx'," etc.
Settings Gear Icon: Links to the main WorkDrive administration settings.
User Profile Icon: Shows storage usage, Profile, Logout.
2. Aura WorkDrive Internal Sidebar
This sidebar is focused on navigating different file collections and access levels.
Section: My Space
Icon: Folder
Pages:
My Folders: The default view. The root folder for all of your personal work files and private folders.
Recent: A quick-access list of the last 20 files you have viewed or edited.
Starred: A filtered list of all files and folders you have marked as a favorite.
Shared with Me: A list of all individual files and folders that other people have shared directly with you.
Section: Team Collaboration
Icon: Users
Pages:
Team Folders: The most important feature. A list of shared, centralized folders for different departments or projects (e.g., "Marketing Team," "Project Alpha"). Everyone on the team has access.
Shared by Me: A log of all the files and folders you have shared with others.
Section: Administration
Icon: Shield
Pages:
Public Links: A central place to manage and revoke all publicly shared links.
Trash: A repository for all deleted files, with the option to restore them.
Labels: A page to create and manage custom labels (e.g., "Confidential," "Final Version") that can be applied to files.
Section: Desktop Sync
Icon: RefreshCw
Pages:
Desktop App: A page with a download link for the desktop sync client and a status view of your synced files.
3. Page-Level Toolbars & Main Interface (The File Explorer)
The main interface is a clean, powerful file explorer.
Main View: A list or grid of all files and folders in the currently selected location. Each item shows its name, owner, last modified date, and size.
Toolbar at the top of the list:
Primary Buttons: + New (same as the global quick create), Upload.
View Switcher: Icons to toggle between List View and Grid View (with thumbnails).
Sort Controls: A dropdown to sort the list by Name, Last Modified, etc.
When a file or folder is selected:
A Contextual Right Panel appears.
For a Folder: It shows details about the folder and a list of all team members who have access.
For a File: It shows a large Preview of the document, a list of its Versions, and an Activity feed showing who has viewed or edited it.
Action Buttons in the Right Panel: Share, Download, Rename, Move, Add Label, View in Aura Writer/Sheet/Show.
4. Data Entry & Modals
The "Share" Modal (Very Important):
When a user clicks "Share," a powerful modal pops up.
Internal Sharing: They can type the names of team members and choose their permission level from a dropdown: View, Comment, or Edit.
External Sharing: A tab to create a public link. It has security options like Set a password, Set an expiration date, and Disable download.
Uploading Files: A large, friendly drag-and-drop area appears when you are in a folder and click the Upload button.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "New Project" Flow: A manager starts a new project. They go to Team Folders and create a new folder called "Project Phoenix." They click on the folder, and in the right panel, they add the 5 team members who will be working on it, giving them all "Edit" access. Now, the entire team has a single, centralized place to store all their project files.
The "Collaborative Document" Flow: A user opens the "Project Phoenix" folder and clicks + New -> Document. Aura Writer opens in a new tab, and the new document is automatically saved inside this shared folder. The user starts writing the project plan. They @mention a colleague in a comment. That colleague gets a notification in Aura Cliq with a direct link to the document. The colleague clicks the link, opens the document, and they can both edit it at the same time, seeing each other's cursors.
The "Secure Sharing" Flow: A user finishes a proposal document. They need to send it to an external client for review, but they don't want the client to be able to edit or download it. They click Share on the document. In the modal, they go to the "External Link" tab. They set the permission to View Only, set an Expiration Date for 7 days, and Set a password. They then copy this secure link and send it to the client.`,
    "Workerly": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Workerly"
Global Search Bar: Placeholder: "Search by temp name, client, or job ID..."
Quick Create Button (+ Icon):
New Job
New Temp
New Client
Notifications Bell Icon: Alerts for "A client has approved a timesheet," "A temp has clocked in," "An urgent job needs to be filled," etc.
Settings Gear Icon: Links to the main Workerly agency settings.
User Profile Icon: Profile, Logout.
2. Aura Workerly Internal Sidebar
This sidebar is for the staffing agent or manager in the office. Temps in the field will use a simplified mobile app.
Section: Home
Icon: Home
Pages:
Dashboard: The main control center. Widgets for "Jobs to be Filled Today," "Available Temps," "Timesheets Awaiting Approval," and a summary of "Sales and Gross Margin."
Section: Core Operations
Icon: Briefcase
Pages:
Jobs: A list of all job requests from clients, filterable by status (Open, Filled, In Progress, Completed).
Temps: A master database of all available temporary workers.
Clients: A list of all client companies and their contact people.
Scheduler: A visual, calendar-based drag-and-drop board to assign temps to jobs.
Section: Financials
Icon: DollarSign
Pages:
Timesheets: The hub for managing all submitted timesheets from temps. Divided into tabs for Pending Approval, Approved, and Rejected.
Invoices: A list of all invoices sent to clients for completed work.
Payrolls: A section to prepare and export payroll data for the temps.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Job Fill Rate," "Client Profitability," "Temp Performance," and "Sales Analytics."
3. Page-Level Toolbars & Main Interface
On the "Scheduler" Page:
A visual calendar or timeline view.
Unfilled Jobs are listed in a side panel.
The dispatcher can see the availability of all their Temps.
The main action is dragging an available temp and dropping them onto an unfilled job to make the assignment.
The "Temp Profile" Page:
Shows all details for a single temp, including their contact info, Skills (tags), Availability Calendar, and Work History.
The Temp's Mobile App:
A very simple, focused interface.
Home Screen: Shows "My Upcoming Jobs."
Job Detail View: Tapping a job shows the client's name, address, job description, and a "Navigate" button.
Time Tracking: Large, easy-to-tap buttons for Clock-in, Start Break, End Break, and Clock-out. Often uses GPS geofencing to ensure they are at the correct job site.
Timesheets: A simple view to see their hours for the week and a button to "Submit for Approval."
4. Data Entry & Modals
Creating a Job (Modal): A client calls with a request. The agent clicks + New Job. A pop-up form appears with fields for "Client Name," "Job Title," "Required Skills," "Start/End Time," and the "Pay Rate" (for the temp) and "Bill Rate" (for the client).
AI Feature - Temp Matching: When viewing an open job, there is a "Find Best Match" button. Clicking this uses AI to scan the Temps database and suggests the top 3 available temps who have the right skills and are located closest to the job site.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Urgent Job" Flow: A client calls at 8 AM needing a worker for a 9 AM start. The agent creates a New Job in Aura Workerly. They use the AI Temp Matching feature to instantly find available temps. The system sends an automated SMS blast to the top 5 matches: "Urgent job available at 9 AM. First to accept gets it." A temp accepts via their mobile app. The job is filled, and the client is notified, all within minutes.
The "Timesheet to Invoice" Flow (Automation): A temp finishes their week and submits their Timesheet through the mobile app. The client receives an email with a link to a simple portal where they can review the hours and click "Approve." As soon as the client approves, two things happen automatically:
The approved hours are moved to the Payrolls section, ready to be paid to the temp.
A professional Invoice is automatically generated and sent to the client, billing them for the approved hours at the agreed-upon rate.
The "Availability" Flow: A temp knows they are unavailable next week. They open their mobile app, go to their Availability Calendar, and mark themselves as unavailable. Now, when the staffing agent is using the Scheduler, that temp will not appear as an option for jobs during that week, preventing scheduling conflicts.`,
    "Workplace": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Shows a curated list of the apps in the Workplace suite.
Current App Name: "Aura Workplace"
Global Search Bar: A "super-search" that can find a message in Cliq, an email in Mail, a file in WorkDrive, or a document in Writer, all from one search bar.
Quick Create Button (+ Icon): A unified dropdown with the most common actions: New Email, New Chat, New Document, New Spreadsheet.
Notifications Bell Icon: An aggregated feed of notifications from all connected productivity apps.
Settings Gear Icon: Links to the main settings page for the entire suite, managing user preferences and integrations.
User Profile Icon: Shows user's online status, Profile, Logout.
2. Aura Workplace Sidebar (The "Suite" Sidebar)
This is a simple, high-level sidebar focused on different modes of work and communication.
Section: Home
Icon: Home
Pages:
Dashboard: The main suite dashboard. This is the core of the experience.
Section: My Work
Icon: User
Pages:
My Day: An AI-powered, unified view of everything on your plate today: your upcoming Meetings from Calendar, your Tasks from ToDo, and your @Mentions from Cliq and Mail.
Recent Files: A combined list of all the documents, sheets, and presentations you have recently worked on.
Section: Communication
Icon: MessageCircle
Pages:
Unified Inbox: A powerful, experimental view that combines your unread emails from Aura Mail and unread direct messages from Aura Cliq into a single, prioritized list.
Company Announcements: A feed of all official announcements from Aura Connect.
Section: Applications
Icon: Grid
Pages:
Applications: A simple page with large, clickable icons to launch the individual, full-featured applications (Aura Mail, Aura Cliq, Aura WorkDrive, Aura Writer, etc.).
3. Page-Level Toolbars & Main Interface (The Main Dashboard)
The main interface is a highly customizable, widget-based dashboard designed to be the user's personal start page.
Default Widgets:
My Unread Mail: A small widget showing the subject lines of your 5 most recent unread emails from Aura Mail.
My Unread Chats: A widget showing your unread channels and DMs from Aura Cliq.
My Calendar Today: A widget showing your schedule for the day from Aura Calendar.
My Tasks Due Today: A checklist of your tasks from Aura ToDo.
Recent Company Files: A widget showing the latest files uploaded to your main Team Folder in Aura WorkDrive.
Company Announcements: The latest announcement from Aura Connect.
4. Data Entry & Modals
This application is primarily for viewing and navigating. Most data entry happens within the individual applications. The only exception is the unified search bar.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Start of the Day" Flow: An employee arrives at work (or opens their laptop at home). The first page they open is the Aura Workplace Dashboard. In a single, 30-second scan, they know everything they need to for the day: they see they have 2 new emails, 1 unread chat message from their manager, a meeting at 10 AM, and 3 tasks due. They are fully prepared for their day without having to open 5 different applications.
The "Find That File" Flow: A user remembers a conversation about the "Q3 Marketing Budget" but can't remember if it was in an email, a chat, or a spreadsheet. They use the Global Search Bar in Aura Workplace. The search results appear in a unified, categorized list:
Mail: 3 emails with that subject.
Cliq: 1 channel conversation where it was mentioned.
WorkDrive: 1 spreadsheet file named "Q3 Marketing Budget.xlsx".
The user can find what they need in seconds.
The "Seamless Creation" Flow: While looking at their dashboard, a user realizes they need to write a quick document. They click the global + button, select New Document. This opens the full Aura Writer application in a new tab, ready to go.`,
    "Writer": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura Writer"
Global Search Bar: Placeholder: "Search by document title or content..."
Quick Create Button (+ Icon):
New Document
Notifications Bell Icon: Alerts for "A new document has been shared with you," "You have a new comment to review," etc.
Settings Gear Icon: Links to the main Writer settings.
User Profile Icon: Profile, Logout.
2. Aura Writer Internal Sidebar
This sidebar is focused on document management and organization.
Section: Home
Icon: Home
Pages:
Dashboard: The main landing page, showing a grid of "Recent Documents," "My Templates," and quick links to create a new document.
Section: Documents
Icon: FileText
Pages:
All Documents: The main file explorer view, showing all your folders and documents.
My Documents: Documents you own.
Shared with Me: Documents other people have shared with you.
Recent: A quick list of recently opened documents.
Trash: Deleted documents.
Section: Library
Icon: BookOpen
Pages:
Templates: A gallery of pre-built templates (Business Letter, Resume, Project Proposal) and your own saved templates.
3. Page-Level Toolbars & Main Interface (The Document Editor)
The core of the application is the Document Editor, which is a clean, "what you see is what you get" (WYSIWYG) interface.
Top Toolbar (The "Ribbon"):
A familiar, feature-rich toolbar with tabs for different functions.
Tab: File: Save, Download as (PDF, .docx), Print, Version History.
Tab: Format: All text formatting options - Font, Size, Bold, Italics, Color, Paragraph Styles (Heading 1, etc.), Lists.
Tab: Insert: Image (from computer or Aura WorkDrive), Table, Chart, Table of Contents, Hyperlink, Comment.
Tab: Review: Spell Check, Grammar Check, Track Changes. The Track Changes button toggles a mode where all edits are highlighted.
Tab: Automation: Mail Merge (to generate personalized documents from a data source), Send for e-Signature (integrates with Aura Sign).
Right-Side Collaboration Panel:
A collapsible panel with tabs for:
Comments: A threaded view of all comments in the document.
Zia (AI Assistant): An AI-powered panel that provides Readability scores, grammar suggestions, and can Summarize the document.
Sharing: A panel to manage who has access to the document (View, Comment, or Edit permissions).
4. Data Entry & Modals
The Main Canvas: The primary data entry is typing directly into the document.
Inserting a Table (Modal): Clicking "Insert Table" opens a small grid where the user can visually select the number of rows and columns.
Sharing a Document (Modal): The "Share" button opens a powerful modal where the user can invite collaborators by email or generate a shareable link with specific permissions.
5. Bottom Bar
A thin status bar at the bottom shows the current Page Count, Word Count, and Language. It also has a Zoom slider.
6. Task Info & Key Workflows
The "Collaborative Report" Flow: A manager starts a new document for a "Quarterly Report" using a Template. They Share the document with their team, giving them "Comment" access. Team members go through the document and add comments and suggestions. The manager reviews the comments, accepts or rejects the changes, and finalizes the document.
The "Mail Merge" Flow (Automation): The HR team needs to send personalized offer letters to 100 new candidates. They create one master Template in Aura Writer. They use the Mail Merge feature to connect it to a spreadsheet of candidate data (from Aura Sheet). With one click, Aura Writer generates 100 unique, personalized letters.
The "Contract" Flow (Integration): A salesperson finalizes a contract in Aura Writer. They use the Send for e-Signature button. This automatically sends the document to Aura Sign. Once the client signs the document, the legally binding, completed PDF is automatically saved back into Aura WorkDrive and attached to the customer's record in Aura CRM.
The "AI-Powered Writing" Flow: A user has written a long, complex blog post. They open the Zia panel. The AI assistant gives the document a poor Readability score and highlights several sentences that are too long. It suggests simpler phrasing. The user accepts the suggestions, and the document becomes much clearer and easier to read.`,
    "ZeptoMail": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura ZeptoMail"
Global Search Bar: Placeholder: "Search by recipient email or subject..."
Quick Create Button (+ Icon): Not typically present. Actions are managed within "Mail Agents."
Notifications Bell Icon: Alerts for "Sending reputation has dropped," "Daily sending limit approaching," etc.
Settings Gear Icon: Links to the main account and security settings.
User Profile Icon: Profile, Logout.
2. Aura ZeptoMail Internal Sidebar
This sidebar is for developers and administrators to manage their email-sending infrastructure.
Section: Home
Icon: Home
Pages:
Dashboard: The main overview. Shows "Emails Sent Today," a graph of "Delivery vs. Bounces" over the last week, and the current "Sender Reputation" score.
Section: Sending
Icon: Send
Pages:
Mail Agents: The core concept. A "Mail Agent" is a container for a specific type of transactional email (e.g., "AURA Welcome Emails," "AURA Invoice Receipts," "AURA Password Resets"). This is the main list of all your transactional email streams.
Domains: A critical page to verify the domains you are sending email from. This is where you get the SPF and DKIM records to add to your DNS, which proves to other email servers that you are not a spammer.
Section: Analytics
Icon: BarChart3
Pages:
Processed Logs: A real-time, searchable log of every single email that has been processed by the system.
Bounces: A filtered list showing only the emails that have failed to deliver, with the reason for the bounce.
Rejects & Spam: A list of emails that were rejected or marked as spam.
Section: Development
Icon: Code
Pages:
API & SMTP: The most important page for a developer. It contains the API Keys and SMTP Credentials needed to send emails from another application's code.
Webhooks: A page to set up webhooks, which are automated notifications sent to your server when an email event happens (e.g., "notify my app when an email is opened").
Templates: A library of email templates that can be triggered via the API.
3. Page-Level Toolbars & Main Interface
On the "Mail Agents" Page:
Title: "Mail Agents"
Primary Button: + New Mail Agent
Agent Card: Each Mail Agent is shown as a card with its name, stats (sent, delivered, bounced), and a link to its settings.
On a "Single Mail Agent Detail" Page:
Tabs: A tabbed interface to view Processed Logs, Templates, and Settings for just this one Mail Agent.
On the "Processed Logs" Page:
A table view of emails. Each row shows the Recipient, Subject, Status (Delivered, Bounced), and the Time. Clicking a row opens a detailed view.
4. Data Entry & Modals
Creating a New Mail Agent (Modal): A simple pop-up asking for a name and description.
Viewing an Email's Details (Modal): Clicking a log entry opens a pop-up showing the full email content and a detailed event timeline (Processed -> Delivered -> Opened -> Clicked).
Adding a Domain (Wizard): A step-by-step wizard that shows the user the exact DNS records (SPF, DKIM) they need to copy and paste into their domain registrar. It includes a "Verify" button to check if the records have been set up correctly.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Welcome Email" Flow (Developer's Task): A developer is building the signup feature for the AURA suite. They go to Aura ZeptoMail, create a new Mail Agent called "AURA Onboarding Emails." They go to the API & SMTP page and copy the API key. In their backend code for the signup process, they add a few lines of code that use this API key to send an email through the "AURA Onboarding Emails" agent to the new user's email address.
The "Password Reset" Flow (Automated): A user on the AURA login page clicks "Forgot Password." The AURA backend code receives this request. It generates a secure, one-time reset link. It then makes an API call to the "AURA Password Resets" Mail Agent in Aura ZeptoMail, telling it to send an email containing this link to the user. The email is delivered in under 2 seconds.
The "Troubleshooting" Flow: A user complains that they are not receiving invoice receipts. The support agent goes to Aura ZeptoMail, opens the Processed Logs, and searches for the user's email address. They find the log entry for the invoice email. It says Bounced with the reason "Mailbox full." The agent can now tell the user the exact reason their email is not being delivered.
`,
    "eProtect": `
1. Universal Top Bar (Consistent Across All AURA Apps)
AURA Logo / App Switcher: Clicking shows other AURA apps.
Current App Name: "Aura eProtect"
Global Search Bar: This is a powerful eDiscovery search. Placeholder: "Search all archived mail by keyword, date, or user..."
Quick Create Button (+ Icon): Not typically present. Actions are policy-based.
Notifications Bell Icon: Alerts for "A critical threat was blocked," "A DLP policy was triggered," "A new legal hold has been placed," etc.
Settings Gear Icon: Links to the main eProtect administration settings.
User Profile Icon: Profile, Logout.
2. Aura eProtect Internal Sidebar
This sidebar is for the IT administrator or compliance officer. Regular users do not interact with this app directly.
Section: Home
Icon: Home
Pages:
Dashboard: The main security overview. Widgets for "Threats Detected Today," "Mail Flow Status," "Top Blocked Senders," and a summary of "Archived Data Size."
Section: Threat Protection
Icon: Shield
Pages:
Quarantine: A secure area to review emails that have been automatically blocked. Filterable by reason (Spam, Malware, Phishing). Admins can Release, Delete, or Allowlist messages.
Policies: A page to create and manage security rules.
Sub-pages: Anti-Spam, Anti-Phishing (with URL scanning), Anti-Malware (with attachment scanning).
Allow/Block Lists: Manage lists of trusted and blocked senders and domains.
Section: Data Protection
Icon: Lock
Pages:
Data Loss Prevention (DLP): A critical feature. Create rules to prevent sensitive data from leaving the company. (e.g., "Block any outbound email that contains a credit card number").
Content Filtering: Create rules to block emails based on keywords or attachments.
Encryption: Set up policies to automatically encrypt outbound emails.
Section: Archive & Compliance
Icon: Archive
Pages:
Search (eDiscovery): The powerful, full-text search interface for the entire email archive.
Retention Policies: Define how long emails must be kept (e.g., "Retain all emails for 7 years").
Legal Hold: A tool to place a "hold" on a specific user's mailbox, preventing any emails from being deleted, for legal purposes.
Section: Analytics
Icon: BarChart3
Pages:
Reports: A gallery of reports on "Threat Trends," "Mail Flow Volume," "DLP Incidents," and "Archive Growth."
3. Page-Level Toolbars & Main Interface
On the "Quarantine" Page:
A list of blocked emails. Each row shows the sender, recipient, subject, and reason for quarantine.
Action buttons on each row: Release to Inbox, Delete, View Content.
The "DLP Policy Builder" (Wizard):
A multi-step wizard to create a new data loss prevention rule.
Step 1: Define Conditions (e.g., "If sender is an internal user AND recipient is external").
Step 2: Define Content Match (e.g., "If email body contains 'Confidential' OR contains a pattern matching a 'Credit Card Number'").
Step 3: Define Action (e.g., Block the email, Encrypt the email, or Redirect to a manager for approval).
4. Data Entry & Modals
eDiscovery Search: A search interface with advanced fields for Date Range, From, To, Subject, Body Contains, and Has Attachment.
Placing a Legal Hold (Modal): A simple pop-up where a compliance officer can search for an employee and enter a "Case Name" or reason for the hold.
5. Bottom Bar
Non-existent.
6. Task Info & Key Workflows
The "Phishing Attack" Flow (Automated): A phishing email is sent to 100 employees. Aura eProtect's gateway scans the incoming email. Its Anti-Phishing engine recognizes the malicious link. The system automatically blocks all 100 emails and places them in the Quarantine. The IT admin receives a single alert about the blocked attack. No employees are ever put at risk.
The "Data Leak Prevention" Flow (Automated): An employee accidentally tries to email a spreadsheet containing a list of customer credit card numbers to their personal Gmail account. The DLP policy engine scans the outbound email and its attachment. It detects the credit card number pattern. It automatically blocks the email from being sent and sends a notification to both the employee ("This email was blocked due to a DLP policy violation") and the security manager.
The "Legal Discovery" Flow: The company is involved in a legal case. The legal team needs to find all emails sent by a specific employee about "Project Phoenix" in the last year. The compliance officer goes to Aura eProtect, opens the Search (eDiscovery) page, and enters the search criteria. The system searches the entire, unchangeable archive and produces a list of all relevant emails, which can then be exported and provided to the legal team.`,
  }
};
