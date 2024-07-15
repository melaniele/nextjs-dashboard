/** @type {import('next').NextConfig} */

/** Implementing Partial Prerendering (PPR) */
const nextConfig = {
    experimental:{
        ppr: 'incremental'
    }
};

export default nextConfig;
