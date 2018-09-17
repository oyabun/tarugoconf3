/* MOBILE MENU */
var menuButton = document.getElementById('js-menu-button'),
    menu = document.getElementById('js-menu');

/* OPEN-CLOSE MOBILE MENU */
var controlMobileMenu = function () {
    if (menu.classList.contains('is-visible')) {
        menu.classList.remove('is-visible');
    } else {
        menu.classList.add('is-visible');
    }
};

/* SMOOTH SCROLLING ANCHOR NAVIGATION */
var animateScroll = function (anchor, time) {
    var elem = document.scrollingElement || document.documentElement,
        style = "scrollTop",
        unit = "",
        from = window.scrollY,
        prop = true,
        to = document.getElementById(anchor).offsetTop;

    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
};

/* NAVIGATION MOBILE AND DESKTOP */
var navigation = function (e) {
    var responsiveMenuChange = 600; //Same value of media query change from mobile to desktop menu
    if (e.target.matches('a')) {
        //Menu items mobile behavior
        if (window.innerWidth < responsiveMenuChange) {
            controlMobileMenu();

        //Menu items desktop behavior
        } else {
            var anchor = e.target.getAttribute('href').substr(1);
            animateScroll(anchor, 800);
        }
    }
}

/************ EVENTS *************/

/* OPEN-CLOSE MOBILE MENU */
menuButton.addEventListener('click', controlMobileMenu);

/* NAVIGATION MOBILE AND DESKTOP */
menu.addEventListener('click', navigation);

//Add some pixels (40px) in the anchor navigation so it does not show on the edge
window.addEventListener('hashchange', function (e) {
    window.scrollTo(window.scrollX, window.scrollY - 40);
});
