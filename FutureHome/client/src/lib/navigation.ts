import { Home, Users, Briefcase, Mail, CheckSquare, BarChart2, Book, LifeBuoy, GanttChart } from 'lucide-react';

const crmNavigation = {
  sections: [
    { title: 'Home', icon: Home, items: ['My Home', 'Dashboards'] },
    { title: 'Leads', icon: Users, items: ['All Leads', 'New Leads', 'My Leads'] },
    { title: 'Accounts', icon: Briefcase, items: ['All Accounts', 'My Accounts'] },
    { title: 'Contacts', icon: Users, items: ['All Contacts', 'My Contacts'] },
    { title: 'Deals', icon: Briefcase, items: ['All Deals', 'My Deals', 'Pipeline'] },
    { title: 'Activities', icon: CheckSquare, items: ['Tasks', 'Events', 'Calls'] },
    { title: 'Reports', icon: BarChart2, items: ['All Reports', 'My Reports'] },
    { title: 'Forecasts', icon: BarChart2, items: [] },
    { title: 'Campaigns', icon: BarChart2, items: [] },
  ],
};

const mailNavigation = {
  sections: [
    { title: 'Inbox', icon: Mail, items: ['Primary', 'Social', 'Promotions'] },
    { title: 'Sent', icon: Mail, items: [] },
    { title: 'Drafts', icon: Mail, items: [] },
    { title: 'Spam', icon: Mail, items: [] },
    { title: 'Trash', icon: Mail, items: [] },
    { title: 'Templates', icon: Mail, items: [] },
    { title: 'Outbox', icon: Mail, items: [] },
  ],
};

const projectsNavigation = {
  sections: [
    { title: 'Dashboard', icon: Home, items: ['Project Overview', 'My Work'] },
    { title: 'Tasks', icon: CheckSquare, items: ['All Tasks', 'My Tasks', 'Task Lists'] },
    { title: 'Gantt Chart', icon: GanttChart, items: ['Project Timeline', 'Dependencies'] },
    { title: 'Milestones', icon: Briefcase, items: [] },
    { title: 'Timesheets', icon: Book, items: ['Log Time', 'My Timesheets'] },
    { title: 'Issues', icon: LifeBuoy, items: ['All Issues', 'My Issues'] },
    { title: 'Reports', icon: BarChart2, items: ['Task Reports', 'Project Reports'] },
    { title: 'Users', icon: Users, items: [] },
  ],
};

const booksNavigation = {
  sections: [
    { title: 'Dashboard', icon: Home, items: ['Main Dashboard', 'Financial Overview'] },
    { title: 'Sales', icon: Briefcase, items: ['Estimates', 'Invoices', 'Payments Received'] },
    { title: 'Purchases', icon: Briefcase, items: ['Bills', 'Expenses', 'Payments Made'] },
    { title: 'Time Tracking', icon: Book, items: ['Projects', 'Timesheets'] },
    { title: 'Accountant', icon: Book, items: ['Chart of Accounts', 'Manual Journals'] },
    { title: 'Reports', icon: BarChart2, items: ['P&L', 'Balance Sheet', 'Cash Flow'] },
  ],
};

const deskNavigation = {
  sections: [
    { title: 'Tickets', icon: LifeBuoy, items: ['All Tickets', 'My Tickets', 'New Ticket'] },
    { title: 'Contacts', icon: Users, items: ['All Contacts', 'New Contact'] },
    { title: 'Articles', icon: Book, items: ['Knowledge Base', 'New Article'] },
    { title: 'Tasks', icon: CheckSquare, items: ['My Tasks', 'All Tasks'] },
    { title: 'Reports', icon: BarChart2, items: ['Ticket Reports', 'Agent Reports'] },
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
    case 'Mail':
      return mailNavigation;
    case 'Projects':
      return projectsNavigation;
    case 'Books':
      return booksNavigation;
    case 'Desk':
      return deskNavigation;
    default:
      return defaultNavigation;
  }
}
