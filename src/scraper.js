import { scrape, event, getUrl } from 'lemonpi-scraper-helper';

scrape({
  // Optional, but recommended: Whitelist specific URL(s) using a regular expression
  urlTest: /www\.thetimes\.co.uk/,
  optionalFields: [
    'article_title_last_viewed',
    'article_id_last_viewed',
    'article_image',
    'page_tags'
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

    // Article Author, e.g. "David Charter"
    article_author: () => window.utag_data.article_author,

    // Article Image, e.g. "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1b819f3e-200f-11eb-8696-f5d5fcef88fd.jpg?crop=4476%2C2518%2C346%2C343&resize=685"
    article_image: () => window.utag_data['meta.og:image'],
    
    // Article Name, e.g. "inquiry to be held into government’s pandemic response"
    article_name: () => window.utag_data.article_name,
    
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

    // Permutive Id, e.g. "08028893-55b9-4cff-a138-0ce3782035ae"
    permutive_id: () => window.utag_data['cp.permutive-id'],
    
    // Page Name, e.g. "article:us election: trump stokes fresh fury as biden appeals for calm"
    page_name: () => window.utag_data.page_name,
    
    // Page Section, e.g. "news"
    page_section: () => window.utag_data.page_section,



  },
});
