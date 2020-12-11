const withPlugins = require('next-compose-plugins');
const images = require('next-images');

const siteConfig = {
  siteName: "Alfredo's Shop & Go",
  gaPropertyId: "UA-156374155-2",
};

module.exports = withPlugins([
  images
], {
  env: {
    ...siteConfig,
    NEXT_PUBLIC_siteName: "Alfredo's Shop & Go"
  }
});