module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com', // cloudinary images
            'lh3.googleusercontent.com', // google avatars
            'platform-lookaside.fbsbx.com', // facebook avatars
            'dl.airtable.com', // strapi marketplace,
            // `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            // `https://${env('AWS_BUCKET')}.s3.${env(
            //   'AWS_REGION')}.amazonaws.com`,
         ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['https://store-demo.fly.dev', 'http://localhost:1337'],
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
