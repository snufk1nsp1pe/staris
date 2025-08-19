import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
    extension: /\.(md|mdx)$/,

})
module.exports = {
  images: {
    remotePatterns: [new URL('https://image.tmdb.org/t/p/**')],
  },
}
export default withMDX(nextConfig)
