 $(document).ready(() => {

     const slickOptions = {
         autoplay: true,
         autoplayspeed: 200,
         dots: false,
         prevArrow:
            '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
         nextArrow: 
            '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
     };
     $(".slider").slick(slickOptions);
    
   });

  