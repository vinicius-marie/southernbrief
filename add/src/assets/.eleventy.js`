module.exports = function(eleventyConfig) {
  // Copy static (compiled CSS) to the output. Eleventy expects the compiled
  // CSS in static/css/style.css so that we can reference /css/style.css in templates.
  eleventyConfig.addPassthroughCopy("static");

  // Helpful collections the templates use:
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/articles/**/*.md").reverse();
  });
  eleventyConfig.addCollection("aggregated", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/aggregated/**/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
.eleventy.js`
