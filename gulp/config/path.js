import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    js: `${buildFolder}/`,
    scss: `${buildFolder}/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    normalize: `${buildFolder}/`,
  },
  src: {
    images: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,ico}`,
    svg: `${srcFolder}/img/**/*.svg`,
    js: `${srcFolder}/app.js`,
    scss: `${srcFolder}/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
    normalize: `${srcFolder}/normalize.css`,
  },
  watch: {
    images: `${srcFolder}/img/**/*.{jpeg,jpg,png,gif,webp,svg,ico}`,
    js: `${srcFolder}**/*.js`,
    scss: `${srcFolder}/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`,
};
