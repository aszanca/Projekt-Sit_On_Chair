 document.addEventListener("DOMContentLoaded", function() {


   // Dropdown menu START
   var main_menu = document.querySelector(".main_menu").children;

   for (var i = 0; i < main_menu.length; i++) {
     main_menu[i].addEventListener("mouseover", function() {
       if (this.children.length > 0) {
         this.children[1].style.display = "flex";
       }
     });

     main_menu[i].addEventListener("mouseout", function() {
       if (this.children.length > 0) {
         this.children[1].style.display = "none";
       }
     });
   }
   // Dropdown menu END

   // Slider START
   var prev = document.getElementById('prev');
   var next = document.getElementById('next');
   var slides = document.querySelectorAll('.slider_element');
   var index = 0;

   slides[index].classList.add('visible');

   next.addEventListener("click", function() {
     slides[index].classList.remove('visible');
     index++;
     if (index == slides.length) {
       index = 0;
     }
     slides[index].classList.add('visible');
   });

   prev.addEventListener("click", function() {
     slides[index].classList.remove('visible');
     index--;
     if (index < 0) {
       index = slides.length - 1;
     }
     slides[index].classList.add('visible');
   });
   //Slider END

   // Product boxes names hidden START
   var product_box = document.querySelectorAll('.product_box');

   for (var i = 0; i < product_box.length; i++) {
     product_box[i].addEventListener("mouseout", function() {
       this.firstElementChild.style.display = "block";
     });
   }

   for (var i = 0; i < product_box.length; i++) {
     product_box[i].addEventListener("mouseover", function() {
       this.firstElementChild.style.display = "none";
     });
   }
   // Product boxes names hidden END

   // Pricing boxes color changes - hover START
   var pricing_box = document.querySelectorAll('.pricing_box_container');

   for (var i = 0; i < pricing_box.length; i++) {
     pricing_box[i].addEventListener("mouseover", function() {
       this.parentElement.classList.add('pricing_box_hover');
     });
   }

   for (var i = 0; i < pricing_box.length; i++) {
     pricing_box[i].addEventListener("mouseout", function() {
       this.parentElement.classList.remove('pricing_box_hover');
     });
   }
   // Pricing boxes color changes - hover END


 });
