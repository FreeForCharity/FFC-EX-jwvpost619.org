import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | JWV Post 619',
  description:
    'How the Jewish War Veterans Post 619 website uses cookies and similar technologies, and how you can opt out of analytics.',
}

// Update this date when the policy changes
const LAST_UPDATED = 'July 8, 2026'

export default function CookiePolicy() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] mx-auto">
        <div>
          <h1 className="text-[30px] text-[#333] pb-[10px] leading-[1em] font-[500]">
            <strong>Cookie Policy</strong>
          </h1>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <em>Last Updated: {LAST_UPDATED}</em>
          </p>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            This policy explains how the Jewish War Veterans Post 619 website (jwvpost619.org) uses
            cookies and similar technologies, and how you can control them.
          </p>

          {/* Section 1 */}
          <ol className="list-decimal list-inside pb-[1em]">
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>What Are Cookies?</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Cookies are small text files that are placed on your device when you visit a website.
            They help websites function, remember your preferences, and measure how a site is used.
            Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies
            remain on your device after you close your browser, while session cookies are deleted
            when you close your browser.
          </p>

          {/* Section 2 */}
          <ol className="list-decimal list-inside pb-[1em]" start={2}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Types of Cookies We Use</strong>
              </h2>
            </li>
          </ol>

          {/* 2.1 Necessary + Functional */}
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <strong>2.1 Necessary and Functional Cookies (Always Active)</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            A small amount of information is stored to make the site work and to remember your
            cookie choices. These are set regardless of consent because the site cannot function
            properly without them, and they do not track you across other sites.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 text-[#333]">Cookie Name</th>
                  <th className="text-left py-2 pr-4 text-[#333]">Purpose</th>
                  <th className="text-left py-2 text-[#333]">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-[#666]">cookie-consent</td>
                  <td className="py-2 pr-4 text-[#666]">Stores your cookie preferences</td>
                  <td className="py-2 text-[#666]">12 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 2.2 Analytics (opt-out) */}
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500] mt-[1em]">
            <strong>2.2 Analytics Cookies (On by default — you can opt out)</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We use Google Tag Manager and Google Analytics 4 (GA4) to understand aggregate,
            non-identifying site usage so we can improve the site. Analytics runs by default, but
            you can decline at any time through our cookie-consent banner. Declining stops analytics
            on this browser and deletes the analytics cookies listed below.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-[#333]">Google Analytics 4</h4>
            <p className="text-sm mb-2 text-[#666]">
              Google Analytics is a web analytics service offered by Google that reports aggregate
              website traffic. GA4 loads through our Google Tag Manager container.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 text-[#333]">Cookie Name</th>
                    <th className="text-left py-2 pr-4 text-[#333]">Purpose</th>
                    <th className="text-left py-2 text-[#333]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-[#666]">_ga</td>
                    <td className="py-2 pr-4 text-[#666]">Distinguishes unique visitors</td>
                    <td className="py-2 text-[#666]">2 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-mono text-[#666]">_ga_*</td>
                    <td className="py-2 pr-4 text-[#666]">Maintains session state</td>
                    <td className="py-2 text-[#666]">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-mono text-[#666]">_gid</td>
                    <td className="py-2 pr-4 text-[#666]">Distinguishes visitors</td>
                    <td className="py-2 text-[#666]">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2 text-gray-600">
              Privacy Policy:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </div>

          {/* 2.3 Third-party embedded services */}
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500] mt-[1em]">
            <strong>2.3 Third-Party Services</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Some pages embed outside services. When you use them, those services may set their own
            cookies, which are controlled by the third party rather than by JWV Post 619.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-[#333]">Microsoft Forms</h4>
            <p className="text-sm mb-2 text-[#666]">
              Used for our application/contact form. Microsoft Forms may load additional
              Microsoft-controlled services when the form is opened.
            </p>
            <p className="text-xs mt-2 text-gray-600">
              Privacy Policy:{' '}
              <a
                href="https://privacy.microsoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://privacy.microsoft.com/
              </a>
            </p>
          </div>

          {/* Section 3 */}
          <ol className="list-decimal list-inside pb-[1em]" start={3}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Managing Your Choices</strong>
              </h2>
            </li>
          </ol>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            <strong>3.1 Cookie Consent Banner</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Analytics runs by default so we can measure aggregate usage, but you are always free to
            opt out. Our cookie-consent banner lets you:
          </p>
          <ul className="list-disc list-inside space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Accept All:</strong> Keep analytics enabled.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Decline All:</strong> Turn analytics off on this browser and delete analytics
              cookies such as <code>_ga</code>. Only necessary and functional cookies remain.
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Customize:</strong> Choose whether to allow analytics cookies.
            </li>
          </ul>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500] mt-[1em]">
            <strong>3.2 Browser Settings</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Most web browsers let you view, delete, and block cookies through their settings.
            Clearing this site&apos;s cookies and stored data brings the consent banner back on your
            next visit so you can choose differently. Please note that if you block all cookies, you
            may not be able to use all features of our website.
          </p>

          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500] mt-[1em]">
            <strong>3.3 Google Analytics Opt-Out</strong>
          </p>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            You can also opt out of Google Analytics across all sites using the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          {/* Section 4 */}
          <ol className="list-decimal list-inside pb-[1em]" start={4}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Do Not Track Signals</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that
            you do not want to have your online activities tracked. At this time, we do not respond
            to browser &quot;Do Not Track&quot; signals. However, you can turn off analytics through
            our cookie consent banner.
          </p>

          {/* Section 5 */}
          <ol className="list-decimal list-inside pb-[1em]" start={5}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Updates to This Cookie Policy</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            We may update this Cookie Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. Please review this policy
            periodically for changes.
          </p>

          {/* Section 6 */}
          <ol className="list-decimal list-inside pb-[1em]" start={6}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>Contact Us</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            If you have questions about our use of cookies, please contact us:
          </p>
          <ul className="list-inside list-disc space-y-[4px] pb-[1em]">
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Email:</strong>{' '}
              <a href="mailto:jwvpost619@gmail.com" className="text-blue-600 hover:underline">
                jwvpost619@gmail.com
              </a>
            </li>
            <li className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Phone:</strong>{' '}
              <a href="tel:6038180115" className="text-blue-600 hover:underline">
                (603) 818-0115
              </a>
            </li>
          </ul>

          {/* Section 7 */}
          <ol className="list-decimal list-inside pb-[1em]" start={7}>
            <li>
              <h2 className="text-[26px] leading-[26px] font-[700] text-[#333] mb-[10px]">
                <strong>More Information</strong>
              </h2>
            </li>
          </ol>
          <p className="text-[14px] text-[#666] pb-[10px] leading-[24px] font-[500]">
            For more information about how we handle your personal data, please see our{' '}
            <a href="/privacy-policy/" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
