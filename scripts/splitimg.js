var side1= document.getElementById('side1')
var side2= document.getElementById('side1')

window.addEventListener('scroll', function(e) {
    yoffset=window.pageYOffset-6675
    side1.style.left= + yoffset+'px';
})
window.addEventListener('scroll', function(e) {
    yoffset=window.pageYOffset-6675
    side2.style.left= + yoffset+'px';
})