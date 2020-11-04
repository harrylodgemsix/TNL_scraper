# ODC client scripts

> Houses all untranspiled ODC (Manage-R) clients' product scrapers and dynamic soft landing scripts.

## Install

Once you have cloned this repository, make sure to install npm packages in the directory where you have cloned to.

```shell
npm install
```

## Develop

1. Create a new file "**_client_**-**_countrycode_**-**_type_**-**_name_**.js" in the `src` folder (e.g. "seat-nl-soft-landing-suv-video.js")
2. Start the development server:

```shell
npm start
```

3. A new browser tab will open: `https://localhost/`
   - If you get a security warning, hit **Advanced** and click **Proceed to localhost (unsafe)**.
4. Select your file from the page, and inject its URL into the website you wish to develop for

Example snippet using the [CJS extension](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) for Chrome:

```js
var script = document.createElement('script');
script.src = 'https://localhost/your-file.js';
document.head.appendChild(script);
```

## Deploy

Copy the build script contents from the file opened in the browser or the `dist` folder, then paste it to ODC product store.

## Helpers

More on how to use helper libraries:

- [ODC Scraper Helper](https://www.npmjs.com/package/lemonpi-scraper-helper)
- [ODC Soft Landing Helper](https://www.npmjs.com/package/lemonpi-soft-landing-helper)
