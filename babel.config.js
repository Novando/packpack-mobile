module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["."],
        extentions: [".js", ".tsx", ".android.tsx"],
        alias: {
          "@packpack": "./src",
          "@packpack-assets": "./assets"
        }
	  	}],
      "react-native-reanimated/plugin",
    ]
  };
};
