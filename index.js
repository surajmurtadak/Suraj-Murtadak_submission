function clearInput() {
  var getValue = $(".name");
  if (getValue.value != "") {
    getValue.value = "";
  }
}
function change() {
  $(".changebtn").css("background-color", "#b6bf00");
  $(".changebtn").text("ENROLL NOW");
}

function ChangeColor1() {
  $(".btn1").css("color", "white");
  setTimeout(clr, 500);
}
function ChangeColor2() {
  $(".btn2").css("color", "white");
  setTimeout(clr, 500);
}

function clr() {
  $(".btn1").css("color", "black");
}
