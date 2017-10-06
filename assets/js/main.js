//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();

window.onload = function() {
  Particles.init({
   // normal options
   selector: '.background',
   maxParticles: 150,

   // options for breakpoints
   responsive: [
     {
       breakpoint: 768,
       options: {
         maxParticles: 95,
         color: '#ffffff',
         connectParticles: false
       }
     }, {
       breakpoint: 425,
       options: {
         maxParticles: 50,
         connectParticles: true
       }
     }, {
       breakpoint: 320,
       options: {
         maxParticles: 0 // disables particles.js
       }
     }
   ]
 });

 };

 
