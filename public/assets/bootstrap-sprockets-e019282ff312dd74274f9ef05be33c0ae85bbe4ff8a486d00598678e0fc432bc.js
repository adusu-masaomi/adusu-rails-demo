+function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("bsTransitionEnd",function(){n=!0});var r=function(){n||e(i).trigger(e.support.transition.end)};return setTimeout(r,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var n=e(this),r=n.data("bs.alert");r||n.data("bs.alert",r=new i(this)),"string"==typeof t&&r[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function n(){o.detach().trigger("closed.bs.alert").remove()}var r=e(this),s=r.attr("data-target");s||(s=r.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=e("#"===s?[]:s);t&&t.preventDefault(),o.length||(o=r.closest(".alert")),o.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),e.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var r=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.button"),s="object"==typeof t&&t;r||i.data("bs.button",r=new n(this,s)),"toggle"==t?r.toggle():t&&r.setState(t)})}var n=function(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.7",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.$element,r=i.is("input")?"val":"html",s=i.data();t+="Text",null==s.resetText&&i.data("resetText",i[r]()),setTimeout(e.proxy(function(){i[r](null==s[t]?this.options[t]:s[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),e&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var i=e.fn.button;e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=e(n.target).closest(".btn");t.call(i,"toggle"),e(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),i.is("input,button")?i.trigger("focus"):i.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.carousel"),s=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),o="string"==typeof t?t:s.slide;r||i.data("bs.carousel",r=new n(this,s)),"number"==typeof t?r.to(t):o?r[o]():s.interval&&r.pause().cycle()})}var n=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),i="prev"==e&&0===n||"next"==e&&n==this.$items.length-1;if(i&&!this.options.wrap)return t;var r="prev"==e?-1:1,s=(n+r)%this.$items.length;return this.$items.eq(s)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(e>this.$items.length-1||e<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){if(!this.sliding)return this.slide("next")},n.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},n.prototype.slide=function(t,i){var r=this.$element.find(".item.active"),s=i||this.getItemForDirection(t,r),o=this.interval,a="next"==t?"left":"right",l=this;if(s.hasClass("active"))return this.sliding=!1;var u=s[0],c=e.Event("slide.bs.carousel",{relatedTarget:u,direction:a});if(this.$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,o&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=e(this.$indicators.children()[this.getItemIndex(s)]);h&&h.addClass("active")}var d=e.Event("slid.bs.carousel",{relatedTarget:u,direction:a});return e.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,r.addClass(a),s.addClass(a),r.one("bsTransitionEnd",function(){s.removeClass([t,a].join(" ")).addClass("active"),r.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(r.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(d)),o&&this.cycle(),this}};var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var r=function(n){var i,r=e(this),s=e(r.attr("data-target")||(i=r.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var o=e.extend({},s.data(),r.data()),a=r.attr("data-slide-to");a&&(o.interval=!1),t.call(s,o),a&&s.data("bs.carousel").to(a),n.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this);t.call(n,n.data())})})}(jQuery),+function(e){"use strict";function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return e(i)}function n(t){return this.each(function(){var n=e(this),r=n.data("bs.collapse"),s=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t);!r&&s.toggle&&/show|hide/.test(t)&&(s.toggle=!1),r||n.data("bs.collapse",r=new i(this,s)),"string"==typeof t&&r[t]()})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var e=this.$element.hasClass("width");return e?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(r&&r.length&&(t=r.data("bs.collapse"),t&&t.transitioning))){var s=e.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){r&&r.length&&(n.call(r,"hide"),t||r.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!e.support.transition)return a.call(this);var l=e.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",e.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var r=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return e.support.transition?void this.$element[n](0).one("bsTransitionEnd",e.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION):r.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(n,i){var r=e(i);this.addAriaAndCollapsedClass(t(r),r)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var r=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=r,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var r=e(this);r.attr("data-target")||i.preventDefault();var s=t(r),o=s.data("bs.collapse"),a=o?"toggle":r.data();n.call(s,a)})}(jQuery),+function(e){"use strict";function t(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i=n&&e(n);return i&&i.length?i:t.parent()}function n(n){n&&3===n.which||(e(r).remove(),e(s).each(function(){var i=e(this),r=t(i),s={relatedTarget:this};r.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(r[0],n.target)||(r.trigger(n=e.Event("hide.bs.dropdown",s)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),r.removeClass("open").trigger(e.Event("hidden.bs.dropdown",s)))))}))}function i(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new o(this)),"string"==typeof t&&i[t].call(n)})}var r=".dropdown-backdrop",s='[data-toggle="dropdown"]',o=function(t){e(t).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.7",o.prototype.toggle=function(i){var r=e(this);if(!r.is(".disabled, :disabled")){var s=t(r),o=s.hasClass("open");if(n(),!o){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",n);var a={relatedTarget:this};if(s.trigger(i=e.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(e.Event("shown.bs.dropdown",a))}return!1}},o.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var r=t(i),o=r.hasClass("open");if(!o&&27!=n.which||o&&27==n.which)return 27==n.which&&r.find(s).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",l=r.find(".dropdown-menu"+a);if(l.length){var u=l.index(n.target);38==n.which&&u>0&&u--,40==n.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=e.fn.dropdown;e.fn.dropdown=i,e.fn.dropdown.Constructor=o,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),+function(e){"use strict";function t(t,i){return this.each(function(){var r=e(this),s=r.data("bs.modal"),o=e.extend({},n.DEFAULTS,r.data(),"object"==typeof t&&t);s||r.data("bs.modal",s=new n(this,o)),"string"==typeof t?s[t](i):o.show&&s.show(i)})}var n=function(t,n){this.options=n,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},n.prototype.show=function(t){var i=this,r=e.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var r=e.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),r&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t});r?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){document===e.target||this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var e=this;this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(t){var i=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=e.support.transition&&r;if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+r).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;s?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var o=function(){i.removeBackdrop(),t&&t()};e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",o).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):o()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.$body[0].removeChild(e),t};var i=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e(this),r=i.attr("href"),s=e(i.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),o=s.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},s.data(),i.data());i.is("a")&&n.preventDefault(),s.one("show.bs.modal",function(e){e.isDefaultPrevented()||s.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(s,o,this)})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.tab");r||i.data("bs.tab",r=new n(this)),"string"==typeof t&&r[t]()})}var n=function(t){this.element=e(t)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var r=n.find(".active:last a"),s=e.Event("hide.bs.tab",{relatedTarget:t[0]}),o=e.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(s),t.trigger(o),!o.isDefaultPrevented()&&!s.isDefaultPrevented()){var a=e(i);this.activate(t.closest("li"),n),this.activate(a,a.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},n.prototype.activate=function(t,i,r){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var o=i.find("> .active"),a=r&&e.support.transition&&(o.length&&o.hasClass("fade")||!!i.find("> .fade").length);o.length&&a?o.one("bsTransitionEnd",s).emulateTransitionEnd(n.TRANSITION_DURATION):s(),o.removeClass("in")};var i=e.fn.tab;e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=i,this};var r=function(n){n.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.affix"),s="object"==typeof t&&t;r||i.data("bs.affix",r=new n(this,s)),"string"==typeof t&&r[t]()})}var n=function(t,i){this.options=e.extend({},n.DEFAULTS,i),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.7",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(e,t,n,i){var r=this.$target.scrollTop(),s=this.$element.offset(),o=this.$target.height();if(null!=n&&"top"==this.affixed)return r<n&&"top";if("bottom"==this.affixed)return null!=n?!(r+this.unpin<=s.top)&&"bottom":!(r+o<=e-i)&&"bottom";var a=null==this.affixed,l=a?r:s.top,u=a?o:t;return null!=n&&r<=n?"top":null!=i&&l+u>=e-i&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(n.RESET).addClass("affix");var e=this.$target.scrollTop(),t=this.$element.offset();return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,r=i.top,s=i.bottom,o=Math.max(e(document).height(),e(document.body).height());"object"!=typeof i&&(s=r=i),"function"==typeof r&&(r=i.top(this.$element)),"function"==typeof s&&(s=i.bottom(this.$element));var a=this.getState(o,t,r,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=e.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:o-t-s})}};var i=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(jQuery),+function(e){"use strict";function t(n,i){this.$body=e(document.body),this.$scrollElement=e(e(n).is(document.body)?window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),r=i.data("bs.scrollspy"),s="object"==typeof n&&n;r||i.data("bs.scrollspy",r=new t(this,s)),"string"==typeof n&&r[n]()})}t.VERSION="3.3.7",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),r=t.data("target")||t.attr("href"),s=/^#./.test(r)&&e(r);return s&&s.length&&s.is(":visible")&&[[s[n]().top+i,r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),r=this.offsets,s=this.targets,o=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),t>=i)return o!=(e=s[s.length-1])&&this.activate(e);if(o&&t<r[0])return this.activeTarget=null,this.clear();for(e=r.length;e--;)o!=s[e]&&t>=r[e]&&(void 0===r[e+1]||t<r[e+1])&&this.activate(s[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=e.fn.scrollspy;e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.tooltip"),s="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.tooltip",r=new n(this,s)),"string"==typeof t&&r[t]())})}var n=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var r=this.options.trigger.split(" "),s=r.length;s--;){var o=r[s];if("click"==o)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=o){var a="hover"==o?"mouseenter":"focusin",l="hover"==o?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},n.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),!n.isInStateTrue())return clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide()},n.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var i=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!i)return;var r=this,s=this.tip(),o=this.getUID(this.type);this.setContent(),s.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,u=l.test(a);u&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),h=s[0].offsetWidth,d=s[0].offsetHeight;if(u){var f=a,p=this.getPosition(this.$viewport);a="bottom"==a&&c.bottom+d>p.bottom?"top":"top"==a&&c.top-d<p.top?"bottom":"right"==a&&c.right+h>p.width?"left":"left"==a&&c.left-h<p.left?"right":a,s.removeClass(f).addClass(a)}var m=this.getCalculatedOffset(a,c,h,d);this.applyPlacement(m,a);var g=function(){var e=r.hoverState;r.$element.trigger("shown.bs."+r.type),r.hoverState=null,"out"==e&&r.leave(r)};e.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(t,n){var i=this.tip(),r=i[0].offsetWidth,s=i[0].offsetHeight,o=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(o)&&(o=0),isNaN(a)&&(a=0),t.top+=o,t.left+=a,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in");var l=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=s&&(t.top=t.top+s-u);var c=this.getViewportAdjustedDelta(n,t,l,u);c.left?t.left+=c.left:t.top+=c.top;var h=/top|bottom/.test(n),d=h?2*c.left-r+l:2*c.top-s+u,f=h?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(d,i[0][f],h)},n.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=r.hoverState&&s.detach(),r.$element&&r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),t&&t()}var r=this,s=e(this.$tip),o=e.Event("hide.bs."+this.type);if(this.$element.trigger(o),!o.isDefaultPrevented())return s.removeClass("in"),e.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this},n.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(t){t=t||this.$element;var n=t[0],i="BODY"==n.tagName,r=n.getBoundingClientRect();null==r.width&&(r=e.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var s=window.SVGElement&&n instanceof window.SVGElement,o=i?{top:0,left:0}:s?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()
},l=i?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},r,a,l,o)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var r={top:0,left:0};if(!this.$viewport)return r;var s=this.options.viewport&&this.options.viewport.padding||0,o=this.getPosition(this.$viewport);if(/right|left/.test(e)){var a=t.top-s-o.scroll,l=t.top+s-o.scroll+i;a<o.top?r.top=o.top-a:l>o.top+o.height&&(r.top=o.top+o.height-l)}else{var u=t.left-s,c=t.left+s+n;u<o.left?r.left=o.left-u:c>o.right&&(r.left=o.left+o.width-c)}return r},n.prototype.getTitle=function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},n.prototype.getUID=function(e){do e+=~~(1e6*Math.random());while(document.getElementById(e));return e},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var n=this;t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null,e.$element=null})};var i=e.fn.tooltip;e.fn.tooltip=t,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),+function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.popover"),s="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.popover",r=new n(this,s)),"string"==typeof t&&r[t]())})}var n=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.7",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var e=this.$element,t=this.options;return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=e.fn.popover;e.fn.popover=t,e.fn.popover.Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery);