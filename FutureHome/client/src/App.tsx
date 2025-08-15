import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Category from "@/pages/category";
import AllApps from "@/pages/all-apps";
import CrmLandingPage from "@/pages/crm-landing";
import App from "@/pages/app";
import Layout from "@/components/ui/layout";
import GlobalShell from "./components/GlobalShell";

function Router() {
  return (
    <Switch>
      <Route path="/app/:appId">
        {params => <App />}
      </Route>
      <Route path="*">
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/crm-landing" component={CrmLandingPage} />
            <Route path="/category/:categoryId" component={Category} />
            <Route path="/apps" component={AllApps} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function AppComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GlobalShell>
          <Toaster />
          <Router />
        </GlobalShell>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppComponent;
