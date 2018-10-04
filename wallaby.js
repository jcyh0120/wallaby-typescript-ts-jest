process.env.NODE_ENV = 'test';
process.env.NODE_CONFIG_DIR=`${process.cwd()}/config`

module.exports = function (w) {
    return {
      files: [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
      ],
  
      tests: [
        'src/**/*.spec.ts',
      ],
  
      env: {
        type: 'node',
        NODE_ENV:'test'
      },
  
      // or any other supported testing framework:
      // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
      testFramework: 'jest',
    };
  };
  