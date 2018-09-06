let toggle = (e) => {
    e = window.event;
    e.target.classList.toggle("button--benefits-hide");
    e.target.nextElementSibling.classList.toggle("hidden");
}

