let lightsOn = true;

window.onload = function () {
 let appearOnScrollElements = document.querySelectorAll('.appearScroll');
    appearOnScrollElements.forEach(element => {
        if (isScrolledIntoView(element)) {
            element.classList.toggle('appearScroll');
        }
    });

    let now = moment();
    let hourToCheck = (now.day() !== 0)?18:00;
    let dateToCheck = now.hour(hourToCheck).minute(00);
  
    if (moment().isAfter(dateToCheck)) {
        toggleLight();
    }

    setTimeout(function() {
        // XHR to request a JS and a CSS
        var xhr = new XMLHttpRequest();
        new Image().src = './assets/images/hero_image_2.png';
        new Image().src = './assets/images/hero_image_3.png';
    }, 1000);
}

window.onscroll = function () {
    let appearOnScrollElements = document.querySelectorAll('.appearScroll'); 
    appearOnScrollElements.forEach(element => {
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

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
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

function toggleLight() {
    document.getElementById("landing").classList.toggle("light-off-landing");
    document.getElementById("body").classList.toggle("light-off-body");
    document.getElementById("hero").classList.toggle("hidden");
    document.getElementById("hero-night").classList.toggle("hidden");
    if (lightsOn) {
        document.getElementById("mail-icon").src = "./assets/images/mail2.png";
        document.getElementById("mail-icon2").src = "./assets/images/mail2.png";
        document.getElementById("shelf").src = "./assets/images/shelf2.png";
        document.getElementById("plants").src = "./assets/images/plants2.png";
    } else {
        document.getElementById("mail-icon").src = "./assets/images/mail.png";
        document.getElementById("mail-icon2").src = "./assets/images/mail.png";
        document.getElementById("shelf").src = "./assets/images/shelf.png";
        document.getElementById("plants").src = "./assets/images/plants.png";
    }
    lightsOn = !lightsOn;
}

