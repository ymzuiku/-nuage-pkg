const fs = require("fs-extra");
const { resolve } = require("path");

const list = [
  ".eslintrc.js",
  ".gitignore",
  ".npmignore",
  ".prettierrc.js",
  "package.json",
  "rollup.server.js",
  "tsconfig.json",
  "yarn.lock",
];

fs.emptyDirSync(resolve(__dirname, "lib"));
fs.mkdirp(resolve(__dirname, "lib"));
list.forEach((f) => {
  fs.copyFileSync(resolve(__dirname, f), resolve(__dirname, "lib", f));
});

const dirs = ["scripts"];

dirs.forEach((d) => {
  fs.copySync(resolve(__dirname, d), resolve(__dirname, "lib", d));
});
