import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            # Navigate to the home page on the correct port
            await page.goto("http://localhost:5000")

            # Wait for the main content to load
            await expect(page.locator("text=Discover Your Perfect App")).to_be_visible(timeout=10000)

            # Find and click on the "Wiki" app card
            wiki_card_locator = page.get_by_role("link", name="Wiki", exact=True)
            await expect(wiki_card_locator).to_be_visible(timeout=5000)
            await wiki_card_locator.click()

            # Now on the app page, wait for the app-specific content to load
            await expect(page.locator("h1:text('Dashboard')")).to_be_visible(timeout=10000)
            await expect(page.locator("p:text('Welcome back! Here\\'s what\\'s happening with your Wiki.')")).to_be_visible()

            # Check if the sidebar is there.
            sidebar_locator = page.locator("div.w-64 nav")
            await expect(sidebar_locator).to_be_visible()

            # Check for a specific item in the Wiki sidebar
            await expect(sidebar_locator.locator("text=All Pages")).to_be_visible()

            print("Successfully verified that the Wiki app page loads with its sidebar.")

            # Take a screenshot
            await page.screenshot(path="jules-scratch/verification/wiki_app_page.png")
            print("Screenshot taken successfully.")

        except Exception as e:
            print(f"An error occurred during verification: {e}")
            await page.screenshot(path="jules-scratch/verification/verification_error.png")

        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
