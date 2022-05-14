function printDate(selector,initValue,count) {
   let container = document.getElementById(selector);
   for (let i= initValue; i <= count; i++) {
       let option =document.createElement("option");
       let optionText = document.createTextNode(i);
       option.appendChild(optionText);
       container.appendChild(option);
   }
}
printDate('day',1,31)
printDate('month',1,12)
printDate('year',1996,2022)




$(function(){
   

   $(window).on('scroll', function(){
     // $('#backToTop').show();

    var scrollSize = $(window).scrollTop()
      //console.log(scrollSize)

    if (scrollSize > 700) {
       $('#backToTop').css({
          bottom: '40px',
          opacity:1
       });
    } else {
       $('#backToTop').css({
          bottom: '500px',
          opacity:0
       });
    }


   })
   $('#backToTop').on('click', function (){
      $('html, body').animate({
         scrollTop:0,
      },1000)
   }) 
    
    //MENU ANIMATION

    $(window).on('scroll', function() {
       var scrollSize = $(window).scrollTop()



       if (scrollSize > 65) {
          $('#header').addClass('active_menu')
       } else {
          $('#header').removeClass('active_menu')
       }
    })




  
   
   


    $('.test_slider').slick({
       autoplay:true,
       autoplaySpeed: 1000,
    });
    //fade
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    
$('.autoplay').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 500,
 });

})







