const { addAfterLoader, loaderByName } = require("@craco/craco");
const { URL } = require("url");
const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.plugins.forEach((plugin) => {
        if (plugin.constructor.name === "ModuleScopePlugin") {
          plugin.allowedFiles.add(new URL("./", path.resolve("./src")));
        }
      });

      return webpackConfig;
    },
  },
};

module.exports = {
  webpack: {
    configure(webpackConfig) {
      addAfterLoader(webpackConfig, loaderByName("babel-loader"), {
        test: /\.mdx?$/,
        loader: require.resolve("@mdx-js/loader"),
      });
      return webpackConfig;
    },
  },
};

// module.exports = {
//   webpack: {
//     alias: {
//       "@src": path.resolve(__dirname, "src"),
//     },
//     configure: (webpackConfig, { env, paths }) => {
//       webpackConfig.resolve.extensions.push(".ts", ".tsx");
//       return webpackConfig;
//     },
//   },
//   jest: {
//     configure: {
//       moduleNameMapper: {
//         "^@src(.*)$": "<rootDir>/src$1",
//       },
//       transform: {
//         "^.+\\.tsx?$": "ts-jest",
//       },
//       globals: {
//         "ts-jest": {
//           tsconfig: "<rootDir>/tsconfig.json",
//         },
//       },
//     },
//   },
// };
