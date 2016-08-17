(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  /**
   * @Template service code:
   */

  var extend = angular.extend;
  var jqLite = angular.element;
  var win=window,doc=win.document;

  angular.module('nx.widget').factory('nxResolution', function () {
      return {
        useRem: useRem
      };

      function useRem() {
        var docEl = doc.documentElement,
          isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
          dpr = isIOS? Math.min(win.devicePixelRatio, 3) : 1,
          dpr = win.top === win.self? dpr : 1, // When import by iframe,prevent scale.
          resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
        docEl.dataset.dpr = dpr;
        var recalc = function () {
            var width = docEl.clientWidth;
            if (width / dpr > 750) {
                width = 750 * dpr;
            }
            docEl.dataset.width = width
            docEl.dataset.percent = 100 * (width / 750);
            docEl.style.fontSize = 100 * (width / 750) + 'px';
          };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
      }
    });
})();
