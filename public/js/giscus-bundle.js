(() => {
  // ns-hugo-params:<stdin>
  var category = "General";
  var categoryId = "DIC_kwDORbfmx84C3cdw";
  var emitMetadata = 0;
  var inputPosition = "bottom";
  var lang = "en";
  var mapping = "pathname";
  var reactionsEnabled = 1;
  var repo = "wattyler1381/blog";
  var repoId = "R_kgDORbfmxw";
  var strict = 0;
  var theme = "light";

  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const giscusAttributes = {
      "src": "https://giscus.app/client.js",
      "data-repo": repo,
      "data-repo-id": repoId,
      "data-category": category,
      "data-category-id": categoryId,
      "data-mapping": mapping,
      "data-strict": strict,
      "data-reactions-enabled": reactionsEnabled,
      "data-emit-metadata": emitMetadata,
      "data-input-position": inputPosition,
      "data-theme": theme,
      "data-lang": lang,
      "crossorigin": "anonymous",
      "async": ""
    };
    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    document.getElementById("giscus").appendChild(giscusScript);
  });
})();
