//This file contains all the configs for the next-i18next library. 

module.exports = {
    react: { useSuspense: false },
    i18n: {
      // These are all the locales the application currently supports
      locales: ['en', 'pt'],
      // This is the default locale. 
      // If no locale is specified in the URL, this will be the locale shown.
      // If the user specifies in the URL, for instances, /en, then that will be the locale.
      defaultLocale: 'pt',
      // The following configuration is needed if you wish to change the name of the locale files
      // to something other than 'common.json' (could be necessary depending on the tool you're 
      // using for editing the locales).
      defaultNS: "translation"
    },
  }
  