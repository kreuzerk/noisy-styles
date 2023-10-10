#!/usr/bin/env node
import {PurgeCSS} from "purgecss";
import * as fs from "fs";

function getStringSizeInKB(inputString) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(inputString);
  return bytes.length / 1024;
}

(async () => {
  const purgeCSSResults = await new PurgeCSS().purge({
    content: ["**/*.html", "**/*.ts", "**/*.js"],
    css: ["dist/**/*.css"],
    skippedContentGlobs: ['node_modules/**']
  });

  const fileStats = {};

  purgeCSSResults.forEach((purgeCSSResult) => {
    const {css, file} = purgeCSSResult;
    const fileName = purgeCSSResult.file.split('/').pop();

    const originalFileStats = fs.statSync(file);

    const originalFileSizeInKb = originalFileStats.size / 1024;
    const modifiedFileSizeInKb = getStringSizeInKB(css);
    const diff = originalFileSizeInKb - modifiedFileSizeInKb;

    fileStats[fileName] = {
      originalFileSizeInKb,
      modifiedFileSizeInKb,
      diff
    }
    console.table(fileStats);

    fs.writeFileSync(file, css, "utf8");
  });

  console.log('Done! CSS is purged.');
})();

