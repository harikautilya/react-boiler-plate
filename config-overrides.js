const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  override,
  disableChunk,
  addBabelPlugins,
  removeModuleScopePlugin,
  addBabelPresets,
  addWebpackAlias,
} = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = override(
  ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
  ...addBabelPlugins(
    [
      'import',
      { libraryName: 'antd-mobile', libraryDirectory: 'lib', style: 'css' },
      'antd-mobile',
    ],
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
  ),
  disableChunk(),
  removeModuleScopePlugin(),
  alias(aliasMap),
);
