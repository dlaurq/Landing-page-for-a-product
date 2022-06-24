//Nav
function slideNav(x){
  let maxScreenW = 1000;
  if(window.innerWidth < maxScreenW)
  {
    const nav = document.querySelector("nav");
    nav.style.width = x;
  }
  
}

//desktop photo showcase
if(sessionStorage.getItem('imgDesktop') === null) // initializare
  sessionStorage.setItem('imgDesktop', './img/1.png')

let str = sessionStorage.getItem('imgDesktop');
$(".main-img").attr("src",str);

function changeImgDesktop(str)
{
  $(".main-img").attr("src",str);
  sessionStorage.setItem('imgDesktop', str)
}


//slide shower mobil
const showcaseImg = document.querySelector(".showcase-img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let pos;
if(sessionStorage.getItem('slide') === null) // initializare
  sessionStorage.setItem('slide', 0)
pos = parseInt(sessionStorage.getItem('slide')); // citire session storage
showcaseImg.classList.add("img"+pos)

function updateImg(move)
{
  let img = "img"+pos
  showcaseImg.classList.remove(img);

  if(move == "r")
    pos++;
  if(move == "l")
    pos--

  if(pos<0)
    pos=3
  if(pos>3)
    pos=0

  img = "img"+pos
  showcaseImg.classList.add(img);
  sessionStorage.setItem('slide', pos); //update session storage
}

//item counter
if(isNaN(sessionStorage.getItem('counter')) || sessionStorage.getItem('counter') === null) // initializare
  sessionStorage.setItem('counter', 0);

let c = parseInt(sessionStorage.getItem('counter')); //citire c

const counterInput = document.querySelector("#nr"); // luan input number
counterInput.value = c; // ii punem valoarea

function updateCounter(x){
  if(x == "+")
    c++;
  if(x == "-" && c > 0)
    c--;

  sessionStorage.setItem('counter', c);
  counterInput.value = c;
}

function setCounter(){
  let x = parseInt(document.querySelector("#nr").value);
  if(typeof x == 'number'){
    c=x;
    counterInput.value = c;
    sessionStorage.setItem('counter', c);
  }
  else{
    c=0;
  }
}


//add to cart
if(localStorage.getItem('cart') === null || isNaN(localStorage.getItem('cart')))
  localStorage.setItem('cart',0);

let cartNr = parseInt(localStorage.getItem('cart'));
const cartCounterDisp = document.querySelector(".cart-counter");

cartCounterDisp.textContent = cartNr;
function addToCart(){
  cartNr+= c;
  cartCounterDisp.textContent = cartNr;
  localStorage.setItem('cart',cartNr);
}


//Reviews cu AJAX si jQuery
let $reviews = $('.reviews-list');

function showReviews(){
  $.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/comments',
    success: function(reviews){
      $.each(reviews, function(i,review){
        if(parseInt(review.id) <11)
          $reviews.append('<div class="review"><div class="review-head"><div class="title">' + review.name +'</div><div class="email">' + review.email +'</div></div><div class="review-body">'+ review.body +'</div></div>');
      })
    }
  });
}
//docker run --name proiect-tw -d -p 83:80 -v ${pwd}:/usr/local/apache2/htdocs/ httpd:2.4
