introHeader = document.getElementsByClassName(`intro__header`)[0];
navToggle = document.getElementsByClassName(`navbar__toggle`)[0];
menuList = document.getElementsByClassName(`navbar__menu-list`)[0]

navToggle.addEventListener(`click`, function() {
  console.log(`click working`)
  if(menuList.style.height == "430px") {
    menuList.style.height = "0px";
    menuList.style.width = "0px";
    introHeader.style.marginTop = "0px";
  } else {
    menuList.style.height = "430px";
    menuList.style.width = "100%";
    introHeader.style.marginTop = "430px";
  }
})

// Slick carousel

$(document).ready(function(){
  $('.slick-container').slick({
    arrows: false,
    dots: true
  });
});

// smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
