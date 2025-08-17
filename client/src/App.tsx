import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Category from "@/pages/category";
import AllApps from "@/pages/all-apps";
import App from "@/pages/app";
import NewApp from "@/pages/new-app";
import Layout from "@/components/ui/layout";

function Router() {
  return (
    <Switch>
      <Route path="/app/:appName" component={NewApp} />
      <Route path="/old-app/:appId">
        {params => <App />}
      </Route>
      <Route path="*">
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
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
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default AppComponent;
