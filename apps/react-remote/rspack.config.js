const { composePlugins, withNx, withReact } = require('@nx/rspack');
const { ModuleFederationPlugin } = require('@module-federation/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.devServer = {
    ...config.devServer,
    port: 4003,
  };

  config.output = {
    ...config.output,
    uniqueName: 'react_remote',
    publicPath: 'http://localhost:4003/',
  };

  config.plugins ??= [];
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'react_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactRemote': './src/components/AddressDetail/index.tsx',
      },

      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
      library: {
        type: 'var',
        name: 'react_remote',
      },
    })
  );

  return config;
});
