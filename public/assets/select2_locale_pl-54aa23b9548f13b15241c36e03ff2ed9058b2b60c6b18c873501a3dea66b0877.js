!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/pl",[],function(){var e=["znak","znaki","znak\xf3w"],t=["element","elementy","element\xf3w"],n=function(e,t){return 1===e?t[0]:e>1&&e<=4?t[1]:e>=5?t[2]:void 0};return{errorLoading:function(){return"Nie mo\u017cna za\u0142adowa\u0107 wynik\xf3w."},inputTooLong:function(t){var i=t.input.length-t.maximum;return"Usu\u0144 "+i+" "+n(i,e)},inputTooShort:function(t){var i=t.minimum-t.input.length;return"Podaj przynajmniej "+i+" "+n(i,e)},loadingMore:function(){return"Trwa \u0142adowanie\u2026"},maximumSelected:function(e){return"Mo\u017cesz zaznaczy\u0107 tylko "+e.maximum+" "+n(e.maximum,t)},noResults:function(){return"Brak wynik\xf3w"},searching:function(){return"Trwa wyszukiwanie\u2026"}}}),{define:e.define,require:e.require}}();