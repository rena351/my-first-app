from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5000")

        # Take a screenshot of the home page for debugging
        page.screenshot(path="jules-scratch/verification/debug_restarted_homepage.png")

        # Find the SalesInbox app card and click it
        salesinbox_card = page.locator(".app-card", has_text="SalesInbox")
        expect(salesinbox_card).to_be_visible()
        salesinbox_card.click()

        # Wait for the app page to load and the sidebar to be visible
        expect(page.locator(".app-sidebar")).to_be_visible()

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
