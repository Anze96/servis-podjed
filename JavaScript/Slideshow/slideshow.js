// on page load
slides = document.getElementsByClassName("slajd");
dots = document.getElementsByClassName("kvadratek");
nSlides = slides.length;

SLIDE_INDEX = 0;
startSlideshow(true);

// automatic sliding (every 5 seconds)
function startSlideshow (init) {
    SLIDESHOW_INTERVAL = 5000;

    INTERVAL_ID = setInterval(function () {
        nextSlide();
    }, SLIDESHOW_INTERVAL);
}

function stopSlideshow () {
    clearInterval(INTERVAL_ID);
}

function mouseenterSlide () {
    stopSlideshow();
}

function mouseleaveSlide () {
    startSlideshow(false);
}

function nextSlide () {
    var outgoing = SLIDE_INDEX;
    SLIDE_INDEX++;
    SLIDE_INDEX %= nSlides;
    var incoming = SLIDE_INDEX;
    var slideDirection = 'slide-forwards';

    transitionSlides(outgoing, incoming, slideDirection);
}

function previousSlide () {
    var outgoing = SLIDE_INDEX;
    SLIDE_INDEX--;
    SLIDE_INDEX = SLIDE_INDEX < 0 ? nSlides - 1 : SLIDE_INDEX;
    var incoming = SLIDE_INDEX;
    var slideDirection = 'slide-backwards';

    transitionSlides(outgoing, incoming, slideDirection);
}

function setSlide (n) {
    // no transition if we are already at the chosen slide
    if (n === SLIDE_INDEX) {
        return;
    }
    var outgoing = SLIDE_INDEX;
    SLIDE_INDEX = n;
    var incoming = SLIDE_INDEX;
    var slideDirection = incoming < outgoing ? 'slide-backwards' : 'slide-forwards';

    transitionSlides(outgoing, incoming, slideDirection);
}

function transitionSlides (outgoing, incoming, slideDirection) {
    // reset slide classes
    slides[outgoing].className = 'slajd'
    slides[incoming].className = 'slajd'

    // add new slide animation classes
    slides[outgoing].className += ' ' + slideDirection + '-out';
    slides[incoming].className += ' ' + slideDirection + '-in';

    // add new slide active class
    slides[incoming].className += ' active';

    // reset controls class
    dots[outgoing].className = 'kvadratek';

    // add new controls active class
    dots[incoming].className += ' active';
}
