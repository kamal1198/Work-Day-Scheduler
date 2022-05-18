//date,day
var todaydate = moment().format("mm-do-yyyy");
$("#currentday").html(todaydate);
//add click function
$(document).ready(function) {
$(".savebtn").on ("click",function()){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
}
}