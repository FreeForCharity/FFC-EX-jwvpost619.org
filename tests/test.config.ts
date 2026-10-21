/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 */

export const testConfig = {
  /**
   * Mission Video Configuration
   * Note: JWV Post 619 does not have a mission video; these tests will be skipped.
   */
  missionVideo: {
    ariaLabel: 'JWV Post 619 mission video',
    title: 'Learn about JWV Post 619 mission to support veterans',
  },

  /**
   * Application Form Configuration
   * Note: JWV Post 619 does not have an application form; these tests will be skipped.
   */
  applicationForm: {
    buttonText: 'Get Involved',
    modalTitle: 'Contact Form',
    loadingText: 'Loading form...',
    closeButtonAriaLabel: 'Close form',
  },

  /**
   * Events Section Configuration
   * Note: JWV Post 619 events are listed on the home page, not embedded Facebook.
   */
  events: {
    sectionId: 'events',
    heading: 'Events',
    footerLinkText: 'Who We Are',
    iframeTitle: 'Facebook Events',
    facebookLinkText: 'Join Us on Facebook',
    facebookUrl: 'https://www.facebook.com/groups/471639085511224',
    descriptionText: 'veterans',
  },

  /**
   * Social Media Links Configuration
   * Note: JWV Post 619 does not include social media links in the footer.
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/groups/471639085511224',
      ariaLabel: 'Facebook',
    },
  },

  /**
   * Copyright Configuration
   */
  copyright: {
    text: 'Jewish War Veterans Post 619',
    searchText: 'Jewish War Veterans Post 619',
  },

  /**
   * Animated Numbers Configuration
   * Note: JWV Post 619 does not have animated numbers; these tests will be skipped.
   */
  animatedNumbers: {
    sectionHeading: 'Our Accomplishments',
    statistics: [],
  },

  /**
   * Google Tag Manager Configuration
   * Note: GTM (container GTM-MX3HMLWB, GA4 G-P53SH2GC9L) is now wired into the site.
   * The detailed GTM E2E spec remains skipped pending an opt-out-model rewrite; the
   * opt-out cookie-consent behavior is covered by the Jest unit test.
   */
  googleTagManager: {
    id: 'GTM-MX3HMLWB',
  },

  /**
   * Logo Configuration
   */
  logo: {
    headerAlt: 'Jewish War Veterans Post 619 emblem',
    heroAlt: 'JWV Post 619 volunteers supporting veterans in the community',
    navBarAriaLabel: 'JWV Post 619 home',
  },

  /**
   * Cookie Consent Configuration
   * Note: Cookie consent is not used on this site; these tests will be skipped.
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
