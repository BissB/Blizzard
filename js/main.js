console.clear();

// ----------------------------------------------- #

const articles = document.querySelectorAll('article');
console.log('1. articles:', articles);

const aside = document.querySelector("aside");
console.log('2. aside:', aside);

const close = document.querySelector("aside span");
console.log('3. close:', close);

const background = document.querySelector(".asidewrap");
console.log('4. background:', background);

// ----------------------------------------------- #

for(let article of articles) {

    article.addEventListener('mouseenter', e => {
        console.log('mouseentered ...');

        e.currentTarget.querySelector('video').play();
    });

    // ---

    article.addEventListener('mouseleave', e => {
        console.log('mouseleaved ...');

        e.currentTarget.querySelector('video').pause();
        // e.currentTarget.querySelector('video').stop();      // XX
    });

    // ---

    article.addEventListener('click', e => {
        console.log('***Clicked');

        // let div = e.currentTarget.querySelector("#asidewrap").getAttribute("background");
        let title = e.currentTarget.querySelector("h2").innerText;
        let text = e.currentTarget.querySelector("p").innerText;
        let videoSrc = e.currentTarget.querySelector("video").getAttribute("src");

        console.log(`>>> title: ${title}`);
        console.log(`>>> text: ${text}`);
        console.log(`>>> videoSrc: ${videoSrc}`);

        aside.querySelector("h1").innerText = title;
        aside.querySelector("p").innerText = text;
        aside.querySelector("video").setAttribute("src", videoSrc);

        aside.classList.add("on");
        aside.querySelector("video").play();
        background.classList.add("on");
    });

    // ---

    close.addEventListener("click", e => {
        console.log('clicked ...');

        aside.querySelector("video").pause();
        aside.classList.remove("on");
        background.classList.remove("on");
    });

} // for-of (enhanced for)

// ----------------------------------------------- #

