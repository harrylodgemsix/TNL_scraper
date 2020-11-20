import { scrape, event, getUrl } from 'lemonpi-scraper-helper';

scrape({
  // Optional, but recommended: Whitelist specific URL(s) using a regular expression
  urlTest: /www\.thetimes\.co.uk/,
  optionalFields: [
    'article_title_last_viewed',
    'article_id_last_viewed',
    'article_image',
    'page_tags',
    'customer_id',
  ],

  // Optional, enable product retargeting by firing the 'product-viewed' event
  afterPush: event,

  // Required
  fields: {
    // Required fields with example values
    'advertiser-id': 604,

    // Article Id, e.g. "6a3ac798-1fb7-11eb-a6f9-33c15bd31337"
    sku: window.utag_data.article_id,

    url: getUrl,

    // Article Title, e.g. "US election: Trump stokes fresh fury as Biden appeals for calm"
    article_title: () => window.utag_data.attrs.headline,

    // Article Title Last Viewed, e.g. "us election: trump stokes fresh fury as biden appeals for calm"
    article_title_last_viewed: () => window.utag_data.article_headline_last_viewed,

    // Article Id Last Viewed, e.g. "6a3ac798-1fb7-11eb-a6f9-33c15bd31337"
    article_id_last_viewed: () => window.utag_data.article_id_last_viewed,

    // Article Publish Date, e.g. "2020/11/13"
    article_publish_date: () => window.utag_data.article_publish_date,

    // Article Author, e.g. "David Charter"
    article_author: () => window.utag_data.article_author,

    // Article Image, e.g. "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1b819f3e-200f-11eb-8696-f5d5fcef88fd.jpg?crop=4476%2C2518%2C346%2C343&resize=685"
    article_image: () => window.utag_data['meta.og:image'],

    // Page Site Name, e.g. "the times and sunday times"
    page_site_name: () => window.utag_data.page_site_name,

    // Page Site Region, e.g. "uk"
    page_site_region: () => window.utag_data.page_site_region,

    // Page Section, e.g. "news"
    page_section: () => window.utag_data.page_section,

    // Page Type, e.g. "article"
    page_type: () => window.utag_data.page_type,

    // Page Tags, e.g. "us election 2020"
    page_tags: () => window.utag_data.page_tags,

    // Action, e.g. "Viewed"
    action: () => window.utag_data.action,

    // sp_v1_consent, e.g. "1!1:1:1:0"
    sp_v1_consent: () => window.utag_data['cp._sp_v1_consent'],

    // Login Event Fired, e.g. "false"
    login_event_fired: () => window.utag_data['cp.login_event_fired'],

    // NUK Consent Personalisation, e.g. "1"
    nuk_consent_personalisation: () =>
      parseFloat(window.utag_data['cp.nuk-consent-personalisation']),

    // NUK Customer Country Code, e.g. "GB"
    nuk_customer_country_code: () => window.utag_data['cp.nuk_customer_country_code'],

    // NUK Customer Location Hint, e.g. "UK"
    nuk_customer_location_hint: () => window.utag_data['cp.nuk_customer_location_hint'],

    // NUK Customer Region Code, e.g. "EN"
    nuk_customer_region_code: () => window.utag_data['cp.nuk_customer_region_code'],

    // NUKT Krux Consent, e.g. "SENT"
    nukt_krux_consent: () => window.utag_data['cp.nukt_krux_consent'],

    // Permutive Id, e.g. "08028893-55b9-4cff-a138-0ce3782035ae"
    permutive_id: () => window.utag_data['cp.permutive-id'],

    // Customer Id, e.g. " " - this returns blank for me as I assume you need to be logged in. I Expect it to return a string similar to other Ids
    customer_id: () => window.utag_data.customer_id,

    // Customer Type, e.g. "guest"
    customer_type: () => window.utag_data.customer_type,

    // Propensity Threshold, e.g. 0
    propensity_threshold: () => parseFloat(window.utag_data.propensity_threshold),

    // Propensity Threshold AU, e.g. 0.56
    propensity_threshold_AU: () => parseFloat(window.utag_data.propensity_threshold_AU),

    // Propensity Threshold CA, e.g. 0.55
    propensity_threshold_CA: () => parseFloat(window.utag_data.propensity_threshold_CA),

    // Propensity Threshold FR, e.g. 0.63
    propensity_threshold_FR: () => parseFloat(window.utag_data.propensity_threshold_FR),

    // Propensity Threshold GB, e.g. 0
    propensity_threshold_GB: () => parseFloat(window.utag_data.propensity_threshold_GB),

    // Propensity Threshold US, e.g. 0.56
    propensity_threshold_US: () => parseFloat(window.utag_data.propensity_threshold_US),
  },
});
