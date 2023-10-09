#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const purgecss = require("@fullhuman/postcss-purgecss");

// postcss([purgecss({
//   content: ['./**/*.html']
// })]).process(css, { from, to }).then(result => {
//   console.log(result.css)
// })

function findStylesFilePath() {
  const distFolderPath = path.join(__dirname, "dist");
  const stylesFileExtension = ".css";
  const knownFileNamePart = "styles";

  fs.readdir(distFolderPath, (err, files) => {
    if (err) {
      console.error(`Error reading the 'dist' folder: ${err}`);
      return;
    }

    const stylesFile = files.find((file) => {
      return (
        file.startsWith(knownFileNamePart) && file.endsWith(stylesFileExtension)
      );
    });

    if (stylesFile) {
      return path.join(distFolderPath, stylesFile);
    } else {
      throw new Error("Unfortunatelly, the styles file was not found.");
    }
  });
}

findStylesFilePath();
