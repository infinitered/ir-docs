const fs = require("fs");
const path = require("path");
const sidebars = require("../sidebars");

const docsDirectory = path.join(__dirname, '../docs');

module.exports = function (context, options) {
    return {
        name: 'custom-homepage-plugin',
        async contentLoaded({actions}) {
            const {createData} = actions;
            const sidebars = require('../sidebars.js');

            const sidebarDirs = Object.values(sidebars).map(sidebar => sidebar[0].dirName);
            console.log({sidebarDirs})
            const packages = sidebarDirs.map((dir) => {
                console.log("adding sidebar: " + dir);
                const folder = path.join(docsDirectory, dir)
                if (fs.statSync(folder).isDirectory() && fs.statSync(path.join(folder, "_category_.json")).isFile()) {
                    const category = require(path.join(folder, "_category_.json"));
                    return {
                        label: category.label,
                        description: category.customProps.description,
                        projectName: category.customProps.projectName,
                    }
                } else {
                    return null;
                }
            }).filter(i=>Boolean(i));

            actions.setGlobalData({
                packages
            });
        }
    };
};
