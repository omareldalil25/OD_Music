// document.addEventListener("DOMContentLoaded", function() {
//     animateText();
//   });

//   function animateText() {
//     var textContainer = document.getElementById("animatedText");
//     var text = textContainer.textContent;
//     textContainer.textContent = "";

//     for (var i = 0; i < text.length; i++) {
//       var span = document.createElement("span");
//       span.innerHTML = text[i] === " " ? "&nbsp;" : text[i];
//       span.style.animation = "drawLetter 2s forwards " + (i * 0.2) + "s";
//       textContainer.appendChild(span);
//     }

//     textContainer.style.opacity = 1;
//   }

setTimeout(function () {
    window.location.href = './signup&signin/signs.html'; 
}, 8000);