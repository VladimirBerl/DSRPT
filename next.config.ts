import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Добавляем лоадер для обработки SVG файлов как React компонентов
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // Включаем экспериментальные опции Webpack
    config.experiments = {
      topLevelAwait: true, // поддержка top-level await
      layers: true, // включаем слои
    };

    return config;
  },
};

export default nextConfig;
