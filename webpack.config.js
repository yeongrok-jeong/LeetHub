const path = require("path")

module.exports = {
  mode: "development",
  entry: { // input files to bundle to output file
    leetcode: path.resolve(__dirname, "src/leetcode/leetcode.js")
  },
  output: { // output multiple bundled files into the build.js
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  }
}

