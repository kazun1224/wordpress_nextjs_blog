if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost:8080',
      // process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0],
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
      'localhost:8080',
    ],
  },
  reactStrictMode: true,
}
