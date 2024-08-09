/*====== SplashScreen ======*/

function showMainContent() {
    var introScreen = document.getElementById('intro');
    var mainContent = document.getElementById('main-content');

    introScreen.classList.add('hide');
    mainContent.classList.add('show');
}

var delay = 600;

setTimeout(showMainContent, delay);

/*====== BGM ====== */
function bgmPlay() {
    var x = document.getElementById("bgm").autoplay;
}

/*====== Scroll Reveal ======*/
ScrollReveal({
    //reset : true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.title-content h2, .story-content h1, story-leaf, .maps-content h1, .credits-content h2', {origin: 'top'});
ScrollReveal().reveal('.maps-content img', {origin: 'bottom'});
ScrollReveal().reveal('.title-content h1, img-ageng, .story-content p, .credits-content h1, .credits-content p, .credits-content img', {origin: 'left'});
ScrollReveal().reveal('.title-content h3, .title-content img, .story-content img, .maps-content p', {origin: 'right'});