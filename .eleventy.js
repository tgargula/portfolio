const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/*");
    eleventyConfig.addPassthroughCopy("./src/scripts/*");
    eleventyConfig.addWatchTarget("./src/css/*");
    eleventyConfig.addWatchTarget("./src/scripts/*");
    eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
	});

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    }).use(markdownItAttrs).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#",
        level: [2],
    });
    eleventyConfig.setLibrary("md", markdownLibrary);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}