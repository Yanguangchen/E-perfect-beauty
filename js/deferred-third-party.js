/**
 * Loads translator and chat widgets after the page is idle so they
 * do not compete with first paint, fonts, or the hero image.
 */
(function () {
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = function () {
        resolve();
      };
      script.onerror = function () {
        reject(new Error(src));
      };
      document.body.appendChild(script);
    });
  }

  function startThirdParties() {
    loadScript("https://elfsightcdn.com/platform.js").catch(function () {});
    loadScript("https://cdn.botpress.cloud/webchat/v3.6/inject.js")
      .then(function () {
        return loadScript("https://files.bpcontent.cloud/2026/05/22/15/20260522152436-D43GXFX0.js");
      })
      .catch(function () {});
  }

  function schedule() {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(startThirdParties, { timeout: 4000 });
    } else {
      setTimeout(startThirdParties, 2000);
    }
  }

  if (document.readyState === "complete") {
    schedule();
  } else {
    window.addEventListener("load", schedule, { once: true });
  }
})();
