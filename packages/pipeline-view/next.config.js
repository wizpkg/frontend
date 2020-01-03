const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["components"],
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      components: require.resolve("components")
      //   '@your-project/styleguide': require.resolve('@your-project/styleguide'),
      // ...
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  }
});
