let images = document.querySelectorAll('.image');
let curent = 0;
let button = document.querySelector('.next-btn');
let i=images.length-1;
let j=0


function slider() {   
   j=i;
   i--;
   if (i<0) {
    i=images.length-1;
    j=0
  }
 images[i].classList.add('active');
 images[j].classList.remove('active');   
       
    }


 button.addEventListener('click', function() {
         slider()
 })
