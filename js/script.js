// code toggle menu to convert cross menu//

let menu=document.querySelector('#menu');
let nav=document.querySelector('nav');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	nav.classList.toggle('active');

}
// code toggle menu to convert cross menu//

// all document selecter//

document.querySelector('.login').onclick =() =>{
	document.querySelector('.form-container').classList.toggle('active')
}

document.querySelector('#close-form').onclick =() =>{
	document.querySelector('.form-container').classList.remove('active')
}
// all document selecter end//




  var swiper = new Swiper(".slider", {
        slidesPerView: 1,
        spaceBetween: 20,
				loop:true,
				grabCursor:true,
        centeredSlides:true,
				autoplay: {
        delay: 1900,
        disableOnInteraction: false,
				 },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          1024: {
            slidesPerView: 3,
            
          },
        },
      });