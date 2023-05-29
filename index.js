
function animateText() {
    var text = document.getElementById("ab");
    var letters = text.innerHTML.split("");
    var i = 0;
    setInterval(function() {
      text.innerHTML = letters.slice(0, i + 1).join("");
      i++;
      if (i === letters.length) {
        i = 0;
      }
    }, 300);
  }
  window.onload = animateText;



