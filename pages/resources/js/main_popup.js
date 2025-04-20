$(".main-popup").each(function (index, item) {
  var obj = $(item);
  var popupName = $(item).attr("id");
  checkCookie(popupName, obj);
});

$(".btn-popClose").on("click", function () {
  var currentPop = $(this).closest(".main-popup");
  var name = currentPop.attr("id");
  var chkbox = $(this).siblings("label").find("input");
  var chkTrue = $(chkbox).prop("checked");
  if (chkTrue) {
    setCookie(name, "done", 1);
    currentPop.css("display", "none");
  } else {
    delCookie(name);
    currentPop.css("display", "none");
  }
});

function checkCookie(name, obj) {
  var cookies = document.cookie.split(";");
  var visited = false;

  for (var i in cookies) {
    if (cookies[i].indexOf(name) > -1) {
      visited = true;
    }
  }
  if (visited) {
    obj.css("display", "none");
  } else {
    obj.css("display", "block");
  }
}

function delCookie(name) {
  var date = new Date();
  date.setDate(date.getDate() - 1);

  var setCookie = "";
  setCookie += name + "=done;";
  setCookie += "Expires =" + date.toUTCString();

  document.cookie = setCookie;
  console.log(setCookie);
}

function setCookie(name, value, day) {
  var date = new Date();
  date.setDate(date.getDate() + day);

  var mycookie = "";
  mycookie += name + "=" + value + ";";
  mycookie += "Expires=" + date.toUTCString();

  document.cookie = mycookie;
}
