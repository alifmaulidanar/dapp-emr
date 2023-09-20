/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  externals: {
    FileReader: "FileReader",
  },
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
      // Mengabaikan file biner saat membangun di sisi klien
      config.module.rules.push({
        test: /\.(bin)$/,
        use: "null-loader",
      });
    }
    return config;
  },
};

// const nextConfig = {};

// module.exports = nextConfig;
