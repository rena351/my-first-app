from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5000/apps")

        # Find the SalesInbox app card and click it
        # Use a longer timeout to be safe
        salesinbox_card = page.locator(".app-card", has_text="SalesInbox")
        expect(salesinbox_card).to_be_visible(timeout=10000)
        salesinbox_card.click()

        # Wait for the app page to load and the sidebar to be visible
        expect(page.locator("div[data-sidebar='sidebar']")).to_be_visible(timeout=10000)

        # Take a screenshot
        page.screenshot(path="jules-scratch/verification/verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
