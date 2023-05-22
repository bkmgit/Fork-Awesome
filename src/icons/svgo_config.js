module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          "convertPathData": false,
	},
        "removeAttrs": { "attrs": "(glyph-name|unicode)" },
        "removeScriptElement": true ,
        "removeRasterImages": true ,
        "removeViewBox": false ,
      },
    },
  ],
};
