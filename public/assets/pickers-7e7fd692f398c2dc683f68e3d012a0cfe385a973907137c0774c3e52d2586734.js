$(document).on("ready page:change",function(){$(".datetimepicker").datetimepicker({icons:{date:"fa fa-calendar",time:"fa fa-clock-o",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-chevron-left",next:"fa fa-chevron-right",today:"fa fa-crosshairs",clear:"fa fa-trash-o",close:"fa fa-times"}}),$(".datetimerange").each(function(){var t=$(this),e=$(t.find(".input-group")[0]),i=$(t.find(".input-group")[1]);null!=e.data("DateTimePicker").date()&&i.data("DateTimePicker").minDate(e.data("DateTimePicker").date()),null!=i.data("DateTimePicker").date()&&e.data("DateTimePicker").maxDate(i.data("DateTimePicker").date()),e.on("dp.change",function(t){t.date?i.data("DateTimePicker").minDate(t.date):i.data("DateTimePicker").minDate(!1)}),i.on("dp.change",function(t){t.date?e.data("DateTimePicker").maxDate(t.date):e.data("DateTimePicker").maxDate(!1)})})});