window.onload = function () {
    var allearOnScrollElements = document.querySelectorAll('.appearScroll');
    allearOnScrollElements.forEach(element => {
        if (isScrolledIntoView(element)) {
            element.classList.toggle('appearScroll');
        }
    });
}

window.onscroll = function () {
    var allearOnScrollElements = document.querySelectorAll('.appearScroll');
    allearOnScrollElements.forEach(element => {
        if (isScrolledIntoView(element)) {
            element.classList.toggle('appearScroll');
        }
    });
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom - rect.height <= window.innerHeight / 8 * 7);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}