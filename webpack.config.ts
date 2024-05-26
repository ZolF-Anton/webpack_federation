// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

export interface EnvVars {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVars) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });
};
