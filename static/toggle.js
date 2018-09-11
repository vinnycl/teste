let toggle = (e) => {
    e = window.event;
    e.target.classList.toggle("button--benefits-hide");
    e.target.nextElementSibling.classList.toggle("hidden");
}

if(window.screen.width >= 1024) {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            var loop = document.querySelectorAll('.button--benefits-show'), i;
            for (i = 0; i < loop.length; ++i) {
                loop[i].click();
            }
        }
    }
    
}