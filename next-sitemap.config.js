/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhot:3000",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
