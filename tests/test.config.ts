/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

export const testConfig = {
  /**
   * Mission Video Configuration
   * Used in: tests/mission-video.spec.ts
   * Note: JWV Post 619 does not have a mission video; these tests will be skipped.
   */
  missionVideo: {
    ariaLabel: 'JWV Post 619 mission video',
    title: 'Learn about JWV Post 619 mission to support veterans',
  },

  /**
   * Application Form Configuration
   * Used in: tests/application-form.spec.ts
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
   * Used in: tests/events.spec.ts
   * Note: JWV Post 619 events are on the Who We Are page, not embedded Facebook.
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
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/groups/471639085511224',
      ariaLabel: 'Facebook',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Copper State JWV Post 619',
    searchText: 'Copper State JWV Post 619',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Animated Numbers Configuration
   * Used in: tests/animated-numbers.spec.ts
   * Note: JWV Post 619 does not have animated numbers; these tests will be skipped.
   */
  animatedNumbers: {
    sectionHeading: 'Our Accomplishments',
    statistics: [],
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts
   */
  logo: {
    headerAlt: 'JWV Post 619',
    heroAlt: 'JWV Post 619 Emblem',
    navBarAriaLabel: 'JWV Post 619 home',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
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
