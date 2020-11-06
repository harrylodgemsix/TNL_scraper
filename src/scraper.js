import {scrape, event, getUrl} from 'lemonpi-scraper-helper';

scrape({
  // Optional, but recommended: Whitelist specific URL(s) using a regular expression
  urlTest: /www\.thetimes\.co.uk/,

  // Optional, enable product retargeting by firing the 'product-viewed' event
  afterPush: event,

  // Required
  fields: {
    // Required fields with example values
    'advertiser-id': 604,

    sku: () => window.utag_data.article_id,

    url: getUrl,

    article_title: () => window.utag_data.attrs.headline,

    article_title_last_viewed: () => window.utag_data.article_headline_last_viewed,

    article_id_last_viewed: () => window.utag_data.article_id_last_viewed,

    article_author: () => window.utag_data.article_author,

    article_image: () => window.utag_data['meta.og:image'],

    article_publish_date: () => window.utag_data.article_publish_date,

    page_site_name: () => window.utag_data.page_site_name,

    page_site_region: () => window.utag_data.page_site_region,

    page_section: () => window.utag_data.page_section,

    page_type: () => window.utag_data.page_type,

    page_tags: () => window.utag_data.page_tags,

    action: () => window.utag_data.action,

    sp_v1_consent: () => window.utag_data['cp._sp_v1_consent'],

    login_event_fired: () => window.utag_data['cp.login_event_fired'],

    nuk_consent_personalisation: () => window.utag_data['cp.nuk-consent-personalisation'],

    nuk_customer_country_code: () => window.utag_data['cp.nuk_customer_country_code'],

    nuk_customer_location_hint: () => window.utag_data['cp.nuk_customer_location_hint'],

    nuk_customer_region_code: () => window.utag_data['cp.nuk_customer_region_code'],

    nukt_krux_consent: () => window.utag_data['cp.nukt_krux_consent'],

    permutive_id: () => window.utag_data['cp.permutive-id'],

    customer_id: () => window.utag_data.customer_id,

    customer_type: () => window.utag_data.customer_type,

    propensity_threshold: () => window.utag_data.propensity_threshold,

    propensity_threshold_AU: () => window.utag_data.propensity_threshold_AU,

    propensity_threshold_CA: () => window.utag_data.propensity_threshold_CA,

    propensity_threshold_FR: () => window.utag_data.propensity_threshold_FR,

    propensity_threshold_GB: () => window.utag_data.propensity_threshold_GB,

    propensity_threshold_US: () => window.utag_data.propensity_threshold_US,
  },
});
