
$(function() {
    setInterval("rotateImage()", 3000);
    }); 

        function rotateImage() {
            var oCurPhoto = $('#hero div.current');
            var oNxtPhoto = oCurPhoto.next();
                if(oNxtPhoto.length == 0)
                    oNxtPhoto = $('#hero div:first');
            
        oCurPhoto.removeClass('current').addClass('previous');
        oNxtPhoto.css({ opacity: 0.0 }).addClass('current')    
                .animate({ opacity: 1.0 }, 1000,
                         function() {
                        oCurPhoto.removeClass('previous');
                        });
        }

//setInterval
//when the slides reaches last slide start from first slide
//

 // $(function() {  
    //configuration
    var width = 600;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider .find('.slides');
    var $slides = $slideContainer .find('.slide');
    
  var interval;
    
 //  function startSlider() {
 $(function() { setInterval("slidingImage()", pause);
       
   });
       function slidingImage() {
               $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
              currentSlide++;
            if (currentSlide == $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
                }    
            });
           }

       
    
 
// function stopSlider() {
      //clearInterval('interval');
 // }
    
//  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
 //startSlider();
    
 // });