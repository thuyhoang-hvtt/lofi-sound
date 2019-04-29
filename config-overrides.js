const { override, fixBabelImports, addLessLoader } = require('customize-cra');
 
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#ffffff',
      '@text-color': 'rgba(242, 242, 242, 0.8)',
      '@btn-default-bg': 'rgba(255, 255, 255, 0.3)',
      '@btn-disable-color': 'rgba(242, 242, 242, 0.5)',
      '@btn-disable-bg': 'rgba(255, 255, 255, 0.3)',
      'font-family': "'Arvo', serif",
      '@input-placeholder-color': 'rgba(255, 255, 255, 0.5)'
    },
  }),
);