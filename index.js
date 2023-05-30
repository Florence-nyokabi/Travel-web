document.getElementById('abou').style.color = 'orange'
document.getElementById('abou').style.borderBottom = 'double 5px'
document.getElementById('abou').style.paddingLeft= '20%'
document.getElementById('abou').style.marginBottom = '25px'
document.getElementById('h2').style.fontSize= '30px'
document.getElementById('h3').style.fontSize= '30px'
document.getElementById('h2').style.fontWeight= '900'

function animateText() {
    var text = document.getElementById("wander");
    var letters = text.innerHTML.split("");
    var i = 0;
    setInterval(function() {
      text.innerHTML = letters.slice(0, i + 1).join("");
      i++;
      if (i === letters.length) {
        i = 0;
      }
    }, 200);
  }
  window.onload = animateText;

  





