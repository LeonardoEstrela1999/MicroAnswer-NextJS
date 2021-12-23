/** @type {import('next').NextConfig} */

//This will allow us to import all our configs related to i18n.
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  env: {
    MICROANSWER_KEY: process.env.MICROANSWER_KEY,
  },
  i18n
}
