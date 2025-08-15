import { Home, Users, Briefcase, Mail, CheckSquare, BarChart2 } from 'lucide-react';

const crmNavigation = {
  sections: [
    { title: 'Dashboard', icon: Home, items: ['Overview', 'Sales Analytics', 'Performance'] },
    { title: 'Leads', icon: Users, items: ['All Leads', 'New Leads', 'Converted'] },
    { title: 'Deals', icon: Briefcase, items: ['Pipeline', 'Closed Won', 'Closed Lost'] },
    { title: 'Contacts', icon: Users, items: ['All Contacts', 'New Contacts'] },
    { title: 'Reports', icon: BarChart2, items: ['Sales Reports', 'Lead Reports'] },
  ],
};

const mailNavigation = {
  sections: [
    { title: 'Inbox', icon: Mail, items: ['Primary', 'Social', 'Promotions'] },
    { title: 'Sent', icon: Mail, items: [] },
    { title: 'Drafts', icon: Mail, items: [] },
  ],
};

const projectsNavigation = {
  sections: [
    { title: 'Dashboard', icon: Home, items: ['My Overview', 'Team Overview'] },
    { title: 'Projects', icon: Briefcase, items: ['All Projects', 'Active Projects', 'Completed'] },
    { title: 'Tasks', icon: CheckSquare, items: ['My Tasks', 'All Tasks', 'Overdue'] },
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
    default:
      return defaultNavigation;
  }
}
