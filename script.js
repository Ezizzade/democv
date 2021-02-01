$(document).ready(function() {
  // nawbar scroll
  $(window).scroll(function() {
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else {
      $('.navbar').removeClass("sticky");
    }
  });
  // menu toggle class active
  $(".menu-btn").click(function() {
    $(".navbar .menu").toggleClass('active');
    $(".menu-btn i").toggleClass('active');
    $(".text-3").toggleClass('active');
  });

  // typing animation
  var typed = new Typed(".typing", {
    strings: ["Developer","Engineer","Freelancer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  });
});
