!function(e){var t={};e.fn.railsAutocomplete=function(){var n=function(){this.railsAutoCompleter||(this.railsAutoCompleter=new e.railsAutocomplete(this))};return t[this.selector.replace("#","")]=arguments[0],void 0!==e.fn.on?$(document).on("focus",this.selector,n):this.live("focus",n)},e.railsAutocomplete=function(e){_e=e,this.init(_e)},e.railsAutocomplete.fn=e.railsAutocomplete.prototype={railsAutocomplete:"0.0.2"},e.railsAutocomplete.fn.extend=e.railsAutocomplete.extend=e.extend,e.railsAutocomplete.fn.extend({init:function(n){function i(e){return e.split(n.delimiter)}function r(e){return i(e).pop().replace(/^\s+/,"")}n.delimiter=e(n).attr("data-delimiter")||null,e(n).autocomplete($.extend({source:function(t,i){e.getJSON(e(n).attr("data-autocomplete"),{term:r(t.term)},function(){if(0==arguments[0].length){var t="No existing matches";void 0!==e(n).attr("data-autocomplete-label")&&(t=e(n).attr("data-autocomplete-label")),arguments[0]=[],arguments[0][0]={id:"",label:t}}e(arguments[0]).each(function(t,i){var r={};r[i.id]=i,e(n).data(r)}),i.apply(null,arguments)})},change:function(t,n){if(""!=e(e(this).attr("data-id-element")).val()){e(e(this).attr("data-id-element")).val(n.item?n.item.id:"");var i=!1;e(this).attr("data-update-elements")&&(i=e.parseJSON(e(this).attr("data-update-elements")));var r=n.item?e(this).data(n.item.id.toString()):{};if(!i||""!=e(i.id).val())for(var o in i)e(i[o]).val(n.item?r[o]:"")}},search:function(){var e=r(this.value);if(e.length<2)return!1},focus:function(){return!1},select:function(t,r){var o=i(this.value);if(o.pop(),""!=r.item.id&&o.push(r.item.value),null!=n.delimiter)o.push(""),this.value=o.join(n.delimiter);else if(this.value=o.join(""),e(this).attr("data-id-element")&&e(e(this).attr("data-id-element")).val(r.item.id),e(this).attr("data-update-elements")){var s=e(this).data(r.item.id.toString()),a=e.parseJSON(e(this).attr("data-update-elements"));for(var u in a)e(a[u]).val(s[u])}var l=this.value;return e(this).bind("keyup.clearId",function(){e(this).val().trim()!=l.trim()&&(e(e(this).attr("data-id-element")).val(""),e(this).unbind("keyup.clearId"))}),e(n).trigger("railsAutocomplete.select",r),!1}},t[n.id]))}}),e(document).ready(function(){e("input[data-autocomplete]").railsAutocomplete()})}(jQuery);