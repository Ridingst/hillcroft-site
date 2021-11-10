// snowpack.config.mjs
export default {
    alias: {
      // Map "$components/*" imports to "src/components/*"
      $components: './src/components',
      // Map "$/*" imports to "src/*"
      $: './src',
      // Define your own!
      '$my-special-alias': './src/some/special/folder',
    },
    // ...
  };