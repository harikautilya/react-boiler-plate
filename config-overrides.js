const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  override,
  disableChunk,
  addBabelPlugins,
  removeModuleScopePlugin,
  addBabelPresets,
} = require('customize-cra');

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
);
