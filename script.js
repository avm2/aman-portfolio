


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //download resume
    document.getElementById("downloadButton").addEventListener("click", function () {
        // URL to your resume file (PDF, Word document, etc.)
        var resumeUrl = "image/Aman Verma.pdf"; // Replace with the actual path to your resume
      
        // Create an invisible link element
        var a = document.createElement("a");
        a.style.display = "none";
        a.href = resumeUrl;
        a.download = "Aman Verma.pdf"; // Set the desired file name for the download
      
        // Append the link to the body and trigger the download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
      

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer", "DSA Problem Solver", "WordPress Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer", "DSA Problem Solver", "WordPress Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //contact








    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});