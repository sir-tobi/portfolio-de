window.onload = function () {
    let allearOnScrollElements = document.querySelectorAll('.appearScroll');
    allearOnScrollElements.forEach(element => {
        if (isScrolledIntoView(element)) {
            element.classList.toggle('appearScroll');
        }
    });
}

window.onscroll = function () {
    let allearOnScrollElements = document.querySelectorAll('.appearScroll');
    allearOnScrollElements.forEach(element => {
        if (isScrolledIntoView(element)) {
            element.classList.toggle('appearScroll');
        }
    });
}

function isScrolledIntoView (el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = (elemTop >= 0) && (elemBottom - rect.height <= window.innerHeight / 8 * 7);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


// Lightbox
let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightbox-img");
let lightboxIsShown = false;

function showLightbox (imageId) {
    lightboxImage.src = "./assets/images/" + imageId + ".png";
    lightbox.classList.add("show");
    lightboxIsShown = true;
}

function closeLightbox () {
    if (lightboxIsShown) {
        lightbox.classList.remove("show");
        lightboxIsShown = false;
    }
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        closeLightbox();
    }
};

function sendMail() {
    var link = "mailto:moin@tobiasschnackenberg.de";
    window.location.href = link;
}