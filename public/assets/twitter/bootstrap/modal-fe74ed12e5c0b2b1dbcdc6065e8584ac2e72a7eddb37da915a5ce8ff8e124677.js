/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(e){"use strict";function t(t,n){return this.each(function(){var i=e(this),r=i.data("bs.modal"),o=e.extend({},a.DEFAULTS,i.data(),"object"==typeof t&&t);r||i.data("bs.modal",r=new a(this,o)),"string"==typeof t?r[t](n):o.show&&r.show(n)})}var a=function(t,a){this.options=a,this.$body=e(document.body),this.$element=e(t),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.VERSION="3.2.0",a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},a.prototype.show=function(t){var a=this,n=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.backdrop(function(){var n=e.support.transition&&a.$element.hasClass("fade");a.$element.parent().length||a.$element.appendTo(a.$body),a.$element.show().scrollTop(0),n&&a.$element[0].offsetWidth,a.$element.addClass("in").attr("aria-hidden",!1),a.enforceFocus();var i=e.Event("shown.bs.modal",{relatedTarget:t});n?a.$element.find(".modal-dialog").one("bsTransitionEnd",function(){a.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(300):a.$element.trigger("focus").trigger(i)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},a.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},a.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var a=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&n;if(this.$backdrop=e('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(150):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){a.removeBackdrop(),t&&t()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(150):r()}else t&&t()},a.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},a.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",e+this.scrollbarWidth)},a.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},a.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.$body[0].removeChild(e),t};var n=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=a,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var n=e(this),i=n.attr("href"),r=e(n.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),o=r.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(i)&&i},r.data(),n.data());n.is("a")&&a.preventDefault(),r.one("show.bs.modal",function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),t.call(r,o,this)})}(jQuery);