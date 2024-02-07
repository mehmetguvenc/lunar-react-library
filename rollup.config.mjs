import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// const pkg = require("./package.json");
const mainDir = "dist/cjs/index.js";
const moduleDir = "dist/esm/index.js";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: mainDir,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: moduleDir,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ plugins: [autoprefixer()], extract: true }),
      terser()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, /\.scss$/]
  },
];
