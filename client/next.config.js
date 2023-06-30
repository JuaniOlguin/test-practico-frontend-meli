/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'http2.mlstatic.com',
            port: '',
            pathname: '**',
          },
        ],
      },
}

module.exports = nextConfig
