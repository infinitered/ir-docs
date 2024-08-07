/*
 * Categories of type "generated-index" do not represent the document itself.
 * By default, their URLs include "category" instead of the document's name,
 * meaning the document's name does not appear in the URL. This makes it
 * impossible to show a GitHub link for the repo at the top of the page.
 *
 * For example,
 * - Ignite's Boilerplate: "/ignite-cli/boilerplate/"
 * - React Native MLKit's Image Labeling: "/category/image-labeling"
 *
 * This script gathers all "generated-index" type categories and updates
 * their entries with the corresponding slug that includes the document name.
 */
const fs = require("fs");
const path = require("path");

const baseDocsDir = path.join(__dirname, "../docs");

function updateCategoryFile(filePath, dirName, subDirName) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  if (data.link && data.link.type === "generated-index") {
    const newSlug = `/${dirName}/${subDirName}/list`;
    data.link.slug = newSlug;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated slug for ${filePath}: ${newSlug}`);
  }
}

function processDocumentDir(documentDir) {
  const dirName = path.basename(documentDir);
  const subDirs = fs.readdirSync(documentDir);
  subDirs.forEach((subDir) => {
    const subDirPath = path.join(documentDir, subDir);
    if (fs.statSync(subDirPath).isDirectory()) {
      const categoryFilePath = path.join(subDirPath, "_category_.json");
      if (fs.existsSync(categoryFilePath)) {
        updateCategoryFile(categoryFilePath, dirName, subDir);
      }
    }
  });
}

function generateSlug() {
  const documentDirs = fs.readdirSync(baseDocsDir);
  documentDirs.forEach((document) => {
    const documentDir = path.join(baseDocsDir, document);
    if (fs.statSync(documentDir).isDirectory()) {
      processDocumentDir(documentDir);
    }
  });
}

generateSlug();
