/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fiverr-res.cloudinary.com',
				port: '',
			},
		],
	},
}

module.exports = nextConfig
