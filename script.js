//var jw = "jonathanWylie";
var scrolls = [0, 0];

/*function nameAnimation() { OLD ANIMATION
    if (nameCounter<=13) {
        document.getElementById('titlename1').innerText = jw.slice(0,nameCounter);
    } else {
        document.getElementById('titlename2').innerText =  jw.slice(13,nameCounter);
        if (nameCounter>15){
            clearInterval(nameTimer);
            document.getElementById('titlename1').style.color = '#dcdcaa';
            document.getElementById('titlename2').style.color = '#179fff';
            //underscore animation
            document.getElementById('underscore').classList.add('blinking');
        }
    }
    nameCounter += 1;
}*/

function darkenHeader() {
    scrolls[1] = window.scrollY;
    if (scrolls[1] > 0 && scrolls[0] == 0) {
        document.getElementById('header').classList.remove('lightenheader');
        document.getElementById('header').classList.add('darkenheader');
        document.getElementById('header').children[0].classList.remove('bigname');
        document.getElementById('header').children[0].classList.add('smallname');
    } else if (scrolls[1] == 0) {
        document.getElementById('header').classList.remove('darkenheader');
        document.getElementById('header').classList.add('lightenheader');
        document.getElementById('header').children[0].classList.remove('smallname');
        document.getElementById('header').children[0].classList.add('bigname');
    }
    scrolls[0] = scrolls[1];
}

function socialover(site) {
    document.getElementById(site + 'btn').classList.remove('socialhoveroff');
    document.getElementById(site + 'btn').classList.add('socialhoveron');
}

function socialout(site) {
    document.getElementById(site + 'btn').classList.remove('socialhoveron');
    document.getElementById(site + 'btn').classList.add('socialhoveroff');
}

function copyToClipboard() {
    navigator.clipboard.writeText('jwwylie1@gmail.com'); // add to clipboard
    document.getElementById('copiedtoclipboard').style.display = 'flex';
    document.getElementById('copiedtoclipboard').classList.add('clipboard');
    setTimeout(function () {
        document.getElementById('copiedtoclipboard').classList.remove('clipboard');
        document.getElementById('copiedtoclipboard').style.display = 'none';
    }, 2600)
}

function scrollToAboutMe() {
    var aboutme = document.getElementById('aboutme');
    aboutme.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollToTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
}

const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;

            const line = section.querySelector('#experienceline');
            if (line) {
                line.classList.add('pulldown');
            }

            const rows = section.querySelectorAll('.timeline-row');
            rows.forEach((row, index) => {
                setTimeout(() => {
                    row.classList.add('blendin');
                }, index * 1000);
            });

            // Optional but recommended: Stop observing once animations have triggered
            // so they don't replay every time the user scrolls up and down
            experienceObserver.unobserve(section);
        }
    });
}, { threshold: 0.2 }); // Lowered threshold slightly so it triggers better on mobile

const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.children[0].classList.add('slideup');
            entry.target.children[1].classList.add('slideup');
        }
    });
}, { threshold: 0 });

experienceObserver.observe(document.getElementById('experience'));

document.querySelectorAll('.projectsrow').forEach(el => {
    projectsObserver.observe(el);
});

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slideup');
            startProjectAnimation();
        }
    });
}, { threshold: 0 });

document.querySelectorAll('#projecttitle').forEach(el => {
    headerObserver.observe(el);
});

document.querySelectorAll('#experiencetitle').forEach(el => {
    headerObserver.observe(el);
});