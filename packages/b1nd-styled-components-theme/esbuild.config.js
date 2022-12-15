const { build } = require("esbuild");
const pkg = require("./package.json");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");

build({
  entryPoints: ["./src/index.ts"],
  outfile: pkg.main,
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  external: ["react", "styled-components"],
  plugins: [pnpPlugin()],
}).catch(() => process.exit(1));
