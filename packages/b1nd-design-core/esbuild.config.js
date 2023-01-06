const { build } = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

build({
  entryPoints: ["./src/index.ts", "./src/b1ndResetStyle.css"],
  outdir: "./dist",
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  plugins: [
    pnpPlugin(),
    cssModulesPlugin({
      filter: /\.css$/,
    }),
  ],
}).catch(() => process.exit(1));
