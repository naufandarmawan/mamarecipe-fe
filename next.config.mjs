/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/v1/:slug*',
                destination: `${process.env.NEXT_PUBLIC_API}/v1/:slug*`,
            },
        ]
    },
};

export default nextConfig;
