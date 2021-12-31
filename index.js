$(document).ready(function(){
    // alert("hubbjb")
    $(".dropdownBut").on("click", ()=>{
        // alert("hubbjb")
        $(".leftside").removeClass("hide");
    })
    $(".cross").on("click", ()=>{
        // alert("hubbjb")
        $(".leftside").addClass("hide");
    })
    function myFunction(x) {
        if (x.matches) { // If media query matches
            $(".leftside").addClass("hide");
        } else {
            $(".leftside").removeClass("hide");
        }
      }
      
      var x = window.matchMedia("(max-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
})