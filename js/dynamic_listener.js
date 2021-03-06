!(function (e) {
  "use strict";
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (e) {
        for (
          var t = (this.document || this.ownerDocument).querySelectorAll(e),
            r = t.length;
          --r >= 0 && t.item(r) !== this;

        );
        return r > -1;
      }),
    (e.addDynamicEventListener = function (e, t, r, o, n) {
      e.addEventListener(
        t,
        (function (e, t) {
          return function (r) {
            if (r.target && r.target.matches(e))
              return (
                (r.delegatedTarget = r.target), void t.apply(this, arguments)
              );
            var o = event.path || (event.composedPath && event.composedPath());
            if (o)
              for (var n = 0; n < o.length; ++n) {
                var a = o[n];
                if (
                  (a.matches(e) &&
                    ((r.delegatedTarget = a), t.apply(this, arguments)),
                  a === r.currentTarget)
                )
                  return;
              }
          };
        })(r, o),
        n
      );
    });
})(this);
