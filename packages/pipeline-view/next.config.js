const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");

const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");

const config = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ["components"]
      }
    ]
  ],
  {
    webpack: (config, options) => {
      console.log("Config before", config);

      // config.resolve.extensions.push(".ts", ".tsx");
      config.resolve.alias = {
        ...config.resolve.alias,
        // Will make webpack look for these modules in parent directories
        components: require.resolve("components")
        //   '@your-project/styleguide': require.resolve('@your-project/styleguide'),
        // ...
      };

      config.module.rules.push(
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(css)$/,
          use: [
            // {
            //   loader: "style-loader"
            // },
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [require("precss"), require("autoprefixer")];
                }
              }
            },
          ]
        }
      );
      console.log("config after", config);

      return config;
    }
  }
);

console.log(config("development", { defaultConfig: {} }));

module.exports = config;

// withTM({
//   transpileModules: ["components"],
//   webpack: (config, options) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       // Will make webpack look for these modules in parent directories
//       components: require.resolve("components")
//       //   '@your-project/styleguide': require.resolve('@your-project/styleguide'),
//       // ...
//     };

//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"]
//     });

//     return config;
//   }
// });
