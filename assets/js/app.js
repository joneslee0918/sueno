$(document).ready(function () {
  $("select").niceSelect();
  $("#hour_option").next("div").find(".current").text("Ejemplo: Menos de 6 horas");
  $("#hour_option").next("div").find(".current").css("color","#ccc");
  $("#age_option").next("div").find(".current").text("Ejemplo: 40 años");
  $("#age_option").next("div").find(".current").css("color","#ccc");
  $("#age_option").next("div").find("ul").css("height","200px");
  $("#age_option").next("div").find("ul").css("overflow-y","scroll");
  $("#hour_option").next("div").find("ul").css("height","200px");
  $("#hour_option").next("div").find("ul").css("overflow-y","scroll");
});

const sleepResult = [
  "Faltan horas de sueño", //lack of sleep0
  "Estate atento", // be ware1
  "Buenas noticias", //Good news2
  "Cuidado", //Carefully3
  "Te faltan horas de sueño", //you lack hours of sleep4
]
function getSleepingResult(age_option, hours) {
  if(age_option == 1) {
    if(hours >= 1 && hours <=10) {
      return sleepResult[0];
    }

    if(hours >= 11 && hours <= 13){
      return sleepResult[1];
    }
    
    if(hours >= 14 && hours <= 17){
      return sleepResult[2];
    }
  }

  if(age_option == 2) {
    if(hours >= 1 && hours <=10) {
      return sleepResult[0];
    }

    if(hours >= 11 && hours <= 12){
      return sleepResult[1];
    }
    
    if(hours >= 13 && hours <= 15){
      return sleepResult[2];
    }

    if(hours >= 16 && hours <= 17){
      return sleepResult[3];
    }
  }

  if(age_option == 3) {
    if(hours >= 1 && hours <=9) {
      return sleepResult[0];
    }

    if(hours >= 10 && hours <= 14){
      return sleepResult[2];
    }
    
    if(hours >= 13 && hours <= 15){
      return sleepResult[2];
    }

    if(hours >= 15 && hours <= 17){
      return sleepResult[3];
    }
  }

  if(age_option == 4) {
    if(hours >= 1 && hours <=6) {
      return sleepResult[0];
    }

    if(hours >= 7 && hours <= 13){
      return sleepResult[2];
    }
    
    if(hours >= 14 && hours <= 17){
      return sleepResult[3];
    }
  }

  if(age_option == 5) {
    if(hours >= 1 && hours <=8) {
      return sleepResult[0];
    }

    if(hours >= 9 && hours <= 11){
      return sleepResult[2];
    }
    
    if(hours >= 12 && hours <= 17){
      return sleepResult[3];
    }
  }

  if(age_option == 6) {
    if(hours >= 1 && hours <=9) {
      return sleepResult[0];
    }

    if(hours >= 10 && hours <= 11){
      return sleepResult[2];
    }
    
    if(hours >= 12 && hours <= 17){
      return sleepResult[3];
    }
  }

  if(age_option == 7 || age_option == 8 || age_option == 9) {
    if(hours >= 1 && hours <=6) {
      return sleepResult[4];
    }

    if(hours >= 7 && hours <= 9){
      return sleepResult[2];
    }
    
    if(hours >= 10 && hours <= 17){
      return sleepResult[3];
    }
  }
  
}

var age_option_value = 0;
var hour_option_value = 0;
var firstTime_option = [14,12,11,8,9,10,7,7,7];
var secondTime_option = [17,15,14,13,11,11,9,9,9];

$("#age_option").change(function() {
  $("#age_option").next("div").find(".current").css("color","#4c84b7");
  var selectedValue = $(this).val(); 
  age_option_value = selectedValue;
});

$("#hour_option").change(function() {
  $("#hour_option").next("div").find(".current").css("color","#4c84b7");
  var selectedValue = $(this).val(); 
  hour_option_value = selectedValue;
});

$("#calculator").click(function() {
  if(age_option_value != 0 && hour_option_value != 0) {
    $("#query").css("display","none");
    $("#answer").css("display","block");
    var age = $("#age_option option:selected").text();
    $("#age").text(age);
    var hour = $("#hour_option option:selected").text();
    $("#hour").text(hour);
    var firstTime = firstTime_option[$("#age_option option:selected").val()-1];
    var secondTime = secondTime_option[$("#age_option option:selected").val()-1];
    var sleepStatus = getSleepingResult(age_option_value, hour_option_value);
    $("#firstTime").text(firstTime);
    $("#secondTime").text(secondTime);
    $("#sleepstatus").text(sleepStatus);

  }
});

$("#recalculator").click(function() {
  $("#query").css("display","block");
  $("#answer").css("display","none");
  $("#age_option").next('div').find('.current').text("Ejemplo: 40 años");
  $("#age_option").next("div").find(".current").css("color","#ccc");
  $("#hour_option").next('div').find('.current').text("Ejemplo: Menos de 6 horas");
  $("#hour_option").next("div").find(".current").css("color","#ccc");
  age_option_value = 0;
  hour_option_value = 0;
});






