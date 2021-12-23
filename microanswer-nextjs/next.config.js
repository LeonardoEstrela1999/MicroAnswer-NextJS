/** @type {import('next').NextConfig} */

//This will allow us to import all our configs related to i18n.
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  //This allows us to use this environmental variable in our client side application.
  //Tipically, this would only be accessible on the backend.
  env: {
    MICROANSWER_KEY: process.env.MICROANSWER_KEY,
  },
  //The previously imported configs for i18n
  i18n
}
