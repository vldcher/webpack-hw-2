module.exports = () => ({
    ident: 'postcss',
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {
        stage: 3,
        browsers: ['last 5 versions', '> 5%'],
      },
    },
  });
  