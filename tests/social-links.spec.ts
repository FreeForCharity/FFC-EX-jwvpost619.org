import { test, expect } from '@playwright/test'

/**
 * Social Links Tests
 *
 * Verifies that defunct platform links (Google+) are absent.
 * Note: JWV Post 619 does not include footer social media icons.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')

    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })
})
