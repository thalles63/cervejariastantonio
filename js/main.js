(function () {
   emailjs.init('user_ETb33n9DaGIpKWFF0xYrn');
})();
const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();
// function toggleMenu() {
//    const menu = document.querySelector('.hamburger');
//    const navigation = document.querySelector('.navigation');
//    const header = document.querySelector('header');

//    menu.classList.toggle('is-active');
//    navigation.classList.toggle('active');
//    header.classList.toggle('active');
// }
// function closeMenu() {
//    const menu = document.querySelector('.hamburger');
//    const navigation = document.querySelector('.navigation');
//    const header = document.querySelector('header');

//    menu.classList.remove('is-active');
//    navigation.classList.remove('active');
//    header.classList.remove('active');
// }
window.addEventListener('scroll', function () {
   const header = document.querySelector('header');
   header.classList.toggle("sticky", window.scrollY > 0)
});
function goTo(section) {
   document.querySelector('#' + section).scrollIntoView({
      behavior: 'smooth'
   });
}
window.onload = function () {
   document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault();
      
      var info = document.getElementsByClassName("form-box")[0];
      var success = document.getElementsByClassName("form-success")[0];

      info.style.display = 'none';
      success.style.display = 'block';
      
      emailjs.sendForm('service_gmail', 'template_st_antonio', this)
         .then(function () {

         }, function (error) {
            console.log('FAILED...', error);
         });
   });
}