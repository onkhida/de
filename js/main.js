/* Open when someone clicks on the span element */
function openNav() {
    console.log('something pressed')
    document.getElementById("mobile-nav").style.width = "100vw";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
  }