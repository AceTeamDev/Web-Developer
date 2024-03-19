document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
let docTitle = document.title
window.addEventListener("blur"  , ()=>{
    document.title="We are waiting for you! 😊"})
window.addEventListener("focus"  , ()=>{
    document.title=docTitle})
    