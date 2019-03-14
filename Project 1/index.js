// var next = document.getElementsByClassName('next');
var prev = document.querySelector('.prev');
var pic = document.querySelectorAll("#products");
var card = document.querySelector(".card");
var colorPicker = document.querySelector(".color-picker")
var pages = 0

// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#showcase nav').style.opacity = 0.9;
      document.querySelector('#showcase nav').style.backgroundColor= 'rgb(65, 53, 44)';
    } else {
      document.querySelector('#showcase nav').style.opacity = 1;
      document.querySelector('#showcase nav').style.backgroundColor= 'rgba(255, 255, 255, 0)';

    }
});
$('#arrow-down a, i').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
  
    const hash = this.hash;
  
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 300
      },
      800
      );
    }
  });  

// Card
$('.color-picker').css('display','none');

$(".card").mouseover(function(){
  $(this ).find(".color-picker").css('display','flex');
});
$(".card").mouseout(function(){
  $(this).find(".color-picker").css('display','none');
});
// card.addEventListener("onmouseover", function(){
//   colorPicker.style.display= 'block'
// });
// card.addEventListener("onmouseout", function(){
//   colorPicker.style.display= 'none'
// })
// Smooth Scrolling

// next.addEventListener("click", function(){
//   document.querySelector("#nxt-pre span").textContent = pages+=1;
// });

