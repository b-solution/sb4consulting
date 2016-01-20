/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(e){"use strict";function t(t){return this.each(function(){var a=e(this),i=a.data("bs.alert");i||a.data("bs.alert",i=new n(this)),"string"==typeof t&&i[t].call(a)})}var a='[data-dismiss="alert"]',n=function(t){e(t).on("click",a,this.close)};n.VERSION="3.2.0",n.prototype.close=function(t){function a(){r.detach().trigger("closed.bs.alert").remove()}var n=e(this),i=n.attr("data-target");i||(i=n.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var r=e(i);t&&t.preventDefault(),r.length||(r=n.hasClass("alert")?n:n.parent()),r.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",a).emulateTransitionEnd(150):a())};var i=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=i,this},e(document).on("click.bs.alert.data-api",a,n.prototype.close)}(jQuery);