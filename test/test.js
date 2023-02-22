var fs = require("fs");
var postcss = require("postcss");
var pxtorem = require("postcss-pxtorem");
var css = fs.readFileSync("main.css", "utf8");
var options = {
  rootValue: 10,
  propList: ["*"],
  replace: true,
};
var processedCss = postcss(pxtorem(options)).process(css).css;

fs.writeFile("main-rem.css", processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log("Rem file written.");
});
