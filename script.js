const swiper = document.getElementsByClassName("mySwiper")[0];
const body = document.getElementsByTagName("body")[0];

swiper.addEventListener("swiperslidechange", () => {
    const raqam = swiper.swiper.realIndex + 1;

    switch (raqam) {
        case 1:
            body.style.background = "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)";
            break;
        case 2:
            body.style.background = "linear-gradient(105.54deg, #ADB080 -2.93%, #E1E1E1 72.14%)";
            break;
        
    }
});