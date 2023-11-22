/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    }
}
module.exports = nextConfig
