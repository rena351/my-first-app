import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const category = await storage.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  // Apps
  app.get("/api/apps", async (req, res) => {
    try {
      const { category, search } = req.query;
      
      let apps;
      if (search) {
        apps = await storage.searchApps(search as string);
      } else if (category) {
        apps = await storage.getAppsByCategory(category as string);
      } else {
        apps = await storage.getApps();
      }
      
      res.json(apps);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch apps" });
    }
  });

  app.get("/api/apps/:id", async (req, res) => {
    try {
      const app = await storage.getAppById(req.params.id);
      if (!app) {
        return res.status(404).json({ message: "App not found" });
      }
      res.json(app);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch app" });
    }
  });

  // Suites
  app.get("/api/suites", async (req, res) => {
    try {
      const suites = await storage.getSuites();
      res.json(suites);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch suites" });
    }
  });

  app.get("/api/suites/:id", async (req, res) => {
    try {
      const suite = await storage.getSuiteById(req.params.id);
      if (!suite) {
        return res.status(404).json({ message: "Suite not found" });
      }
      res.json(suite);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch suite" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
