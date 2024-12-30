import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    // Добавляем лоадер для обработки SVG файлов как React компонентов
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
