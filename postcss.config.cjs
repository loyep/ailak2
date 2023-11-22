const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-antd-fixes': {
      // Support multiple prefixes, if you do not custom antd class name prefix, it's not necessary option.
      prefixes: ['vp-antd', 'ant'],
    },
  },
};

module.exports = config;
