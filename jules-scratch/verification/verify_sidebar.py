import re
import time
from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=False)
    context = browser.new_context()
    page = context.new_page()

    try:
        # 1. Navigate directly to the /apps page
        page.goto("http://localhost:5000/apps", timeout=60000)
        expect(page).to_have_url(re.compile(r".*/apps"), timeout=10000)
        print("Successfully navigated to /apps page.")

        # 2. Find the "Analytics" app link.
        analytics_app_link = page.get_by_role("link", name="Analytics", exact=True)

        # 3. Scroll to the link and click it.
        analytics_app_link.scroll_into_view_if_needed()
        expect(analytics_app_link).to_be_visible(timeout=15000)
        print("Analytics app link is visible.")

        analytics_app_link.click()
        print("Clicked Analytics app link.")

        # 4. Assert that the URL changes to /app/Analytics.
        expect(page).to_have_url(re.compile(r".*/app/Analytics"), timeout=10000)
        print(f"Successfully navigated to {page.url}")

        # 5. Assert that the sidebar is now visible and contains the correct data.
        sidebar_nav = page.locator('aside').first
        expect(sidebar_nav).to_be_visible()
        print("Sidebar is visible.")

        # Check for a specific item that should be in the Analytics sidebar from our new data
        expect(sidebar_nav.get_by_text("Ask Zia (AI)", exact=True)).to_be_visible()
        print("Found 'Ask Zia (AI)' in the sidebar.")

        # 6. Take the final screenshot for verification.
        page.screenshot(path="jules-scratch/verification/final_verification.png", full_page=True)
        print("Screenshot of Analytics app with sidebar taken successfully.")
        page.pause()

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error_screenshot.png")
        page.pause()

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
