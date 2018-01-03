require('source-map-support').install({
  handleUncaughtExceptions: false,
  environment: 'node',
  overrideRetrieveFile: true,
  retrieveFile: function(filepath) {
    // this console.log will fail, and appears to stall the process from finishing
    console.log(`filepath: ${filepath}`);
  },
});
