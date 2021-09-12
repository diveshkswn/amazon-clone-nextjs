const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
  pwa: {
    dest: 'public',
  },
});
