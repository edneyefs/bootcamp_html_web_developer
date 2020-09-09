$('.owl-carousel').owlCarousel({
    loop:true, //ativa ou desativa o loop do carrosel
    margin:10, //almenta ou diminue a margem entre as imagens
    nav:false, //ativa ou desativa a seta de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})