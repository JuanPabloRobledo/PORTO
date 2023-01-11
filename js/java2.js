window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})


window.sr = ScrollReveal();

    sr.reveal('.banner-h1',{
        duration: 3000,
        origin: 'right' ,
        distance: '-500px'
    });
    sr.reveal('.list',{
        duration: 500,
        origin: 'bottom' ,
        distance: '-200px'
    });
