const cursor = document.querySelector('.cursor');

let mouseX, mouseY;

window.addEventListener('mousemove',
    function (e) {
        mouseX = e.clientX
        mouseY = e.clientY


        cursor.style.top = `${mouseY}px`
        cursor.style.left = `${mouseX}px`
    })