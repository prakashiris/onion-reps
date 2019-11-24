var prevScrollpos = window.pageYOffset;
document.getElementById("mainNav").style.top = "-150px";

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos <= currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
} 