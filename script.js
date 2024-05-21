var cursor=document.querySelector('.cursor');
var cursorScale=document.querySelectorAll(".cursor-scale");

mouseX=0;
mouseY=0;

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function(){
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
})


window.addEventListener("mousemove", function (e){
    mouseX=e.clientX;
    mouseY=e.clientY
})

window.addEventListener("touchmove", function (e){
    if (e.touches.length == 1) {
        var touch = e.touches[0];
        this.mouseX = touch.clientX;
        this.mouseY = touch.clientY;
    }
    // mouseX=e.clientX;
    // mouseY=e.clientY
})

cursorScale.forEach(element =>{
// console.log(element);
    element.addEventListener('mouseleave',()=>{
        cursor.classList.remove('grow');
        document.querySelector('#main').style.opacity="0.1";
    })
    element.addEventListener('touchend',()=>{
        cursor.classList.remove('grow');
        document.querySelector('#main').style.opacity="0.1";
    })
    element.addEventListener('mousemove',()=>{
        cursor.classList.add('grow');
        cursor.style.zIndex="0";
        document.querySelector('#main').style.opacity="0.9";
    })
    element.addEventListener('touchmove',()=>{
        cursor.classList.add('grow');
        cursor.style.zIndex="0";
        document.querySelector('#main').style.opacity="0.9";
    })
});