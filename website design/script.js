const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove", function(){
        this.document.querySelector("#min-circle").computedStyleMap.transform = `translate(${dets.clientX}px ${dets.clientY}px`;
    })
}
circleMouseFollower();