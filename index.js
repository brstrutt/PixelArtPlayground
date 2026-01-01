document.addEventListener("scroll", (event) => {
    event.preventDefault();
    event.stopPropagation();

    window.scrollTo(
        window.scrollX - (window.scrollX % 2),
        window.scrollY - (window.scrollY % 2)
    );
});
