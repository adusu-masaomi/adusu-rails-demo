+function(e){"use strict";function t(t){t&&3===t.which||(e(i).remove(),e(o).each(function(){var r=n(e(this)),i={relatedTarget:this};r.hasClass("open")&&(r.trigger(t=e.Event("hide.bs.dropdown",i)),t.isDefaultPrevented()||r.removeClass("open").trigger("hidden.bs.dropdown",i))}))}function n(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var r=n&&e(n);return r&&r.length?r:t.parent()}function r(t){return this.each(function(){var n=e(this),r=n.data("bs.dropdown");r||n.data("bs.dropdown",r=new a(this)),"string"==typeof t&&r[t].call(n)})}var i=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(t){e(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.2.0",a.prototype.toggle=function(r){var i=e(this);if(!i.is(".disabled, :disabled")){var o=n(i),a=o.hasClass("open");if(t(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click",t);var s={relatedTarget:this};if(o.trigger(r=e.Event("show.bs.dropdown",s)),r.isDefaultPrevented())return;i.trigger("focus"),o.toggleClass("open").trigger("shown.bs.dropdown",s)}return!1}},a.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var r=e(this);if(t.preventDefault(),t.stopPropagation(),!r.is(".disabled, :disabled")){var i=n(r),a=i.hasClass("open");if(!a||a&&27==t.keyCode)return 27==t.which&&i.find(o).trigger("focus"),r.trigger("click");var s=" li:not(.divider):visible a",u=i.find('[role="menu"]'+s+', [role="listbox"]'+s);if(u.length){var l=u.index(u.filter(":focus"));38==t.keyCode&&l>0&&l--,40==t.keyCode&&l<u.length-1&&l++,~l||(l=0),u.eq(l).trigger("focus")}}}};var s=e.fn.dropdown;e.fn.dropdown=r,e.fn.dropdown.Constructor=a,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o+', [role="menu"], [role="listbox"]',a.prototype.keydown)}(jQuery);