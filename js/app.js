
let header = document.querySelector('.header');
let scrollToTop = document.querySelector('.scroll');


var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
     if(direction === 'down'){
         header.classList.add("shadow");
         header.classList.add('animate__slideInDown');
         scrollToTop.style.display = 'block';
     }
     else{
         header.classList.remove("shadow");
         header.classList.remove('animate__slideInDown');
         scrollToTop.style.display = 'none';
     }
   
    },
    offset: '20%'
  })
ScrollReveal({
    origin: 'top',
    distance: '50%',
    duration: 1000,
    interval: 200,
    reset: true
}).reveal('.content');

  