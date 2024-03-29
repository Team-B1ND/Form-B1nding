const { build } = require("esbuild");
const pkg = require("./package.json");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const inlineImage = require("esbuild-plugin-inline-image");

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

build({
  entryPoints: ["./src/index.ts"],
  outfile: pkg.main,
  format: "cjs",
  platform: "node",
  sourcemap: true,
  bundle: true,
  external: [...external],
  plugins: [
    pnpPlugin(),
    inlineImage({
      extensions: ["png"],
    }),
  ],
}).catch(() => process.exit(1));
