window.addEventListener("mousemove", (dets) => {
    var rect = document.querySelector("#rect");
    var xval = gsap.utils.mapRange(0, window.innerWidth, 200 + rect.getBoundingClientRect().width / 2, window.innerWidth - (200 + rect.getBoundingClientRect().width / 2), dets.clientX);
    var yval=gsap.utils.mapRange(0, window.innerHeight, 50 + rect.getBoundingClientRect().height / 2, window.innerHeight - (50 + rect.getBoundingClientRect().height / 2), dets.clientY);

    gsap.to("#rect", {
        left: xval,
        top:yval,
        ease:Power3
    });
    
})