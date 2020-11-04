import { scrape, event, getUrl } from 'lemonpi-scraper-helper';
scrape({
    // Optional, but recommended: Whitelist specific URL(s) using a regular expression
    urlTest: /www\.thetimes\.co.uk/,
  
    // Optional, enable product retargeting by firing the 'product-viewed' event
    afterPush: event,
  
    // Required
    fields: {
      // Required fields with example values
      'advertiser-id': 604,
      sku: () => window.dataLayer.filter((entry) => entry.sku).pop().sku,
  
      // Optional, arbitrary fields with example values
      url: getUrl,
      name: () => document.querySelector('h1').textContent,
    },
  }); 