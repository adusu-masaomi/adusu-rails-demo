$(document).on("ready page:change",function(){$(".datetimepicker").datetimepicker({icons:{date:"fa fa-calendar",time:"fa fa-clock-o",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-crosshairs",clear:"fa fa-trash-o",close:"fa fa-times"}}),$(".datetimerange").each(function(){var e=$(this),t=$(e.find(".input-group")[0]),a=$(e.find(".input-group")[1]);null!=t.data("DateTimePicker").date()&&a.data("DateTimePicker").minDate(t.data("DateTimePicker").date()),null!=a.data("DateTimePicker").date()&&t.data("DateTimePicker").maxDate(a.data("DateTimePicker").date()),t.on("dp.change",function(e){e.date?a.data("DateTimePicker").minDate(e.date):a.data("DateTimePicker").minDate(!1)}),a.on("dp.change",function(e){e.date?t.data("DateTimePicker").maxDate(e.date):t.data("DateTimePicker").maxDate(!1)})})});