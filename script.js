//var jw = "jonathanWylie";
var jw = "var jonathanWylie = {student:true,developer:true,camelCaseEnthusiast:true}"
var nameCounter = 1;
var scrolls = [0,0];

function nameAnimation() {
    if (nameCounter<=3) { // var
        document.getElementById('titlevar').innerText = jw.slice(0,nameCounter);
    } else if (nameCounter<=17) { // jonathanWylie
        if (nameCounter==4) {document.getElementById('titlevar').style.color = '#179fff'}
        document.getElementById('titlevarname').innerText = jw.slice(3,nameCounter);
    } else if (nameCounter<=19) { // =
        if (nameCounter==18) {document.getElementById('titlevarname').style.color = '#dcdcaa'}
        document.getElementById('titleequals').innerText = jw.slice(17,nameCounter);
    } else if (nameCounter<=21) { // {
        document.getElementById('titlebracket1').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=28) { // student
        if (nameCounter==22) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titlestruct1').innerText = jw.slice(21,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter==29) { // :
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(28,nameCounter);
    } else if (nameCounter<=33) {
        document.getElementById('titleval1').innerText = jw.slice(29,nameCounter);
    } else if (nameCounter==34) { // ,
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(33,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=43) { // developer
        document.getElementById('titlestruct2').innerText = jw.slice(34,nameCounter);
    } else if (nameCounter==44) {
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(43,nameCounter);
    } else if (nameCounter<=48) {
        document.getElementById('titleval2').innerText = jw.slice(44,nameCounter);
    } else if (nameCounter==49) {
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(48,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=68) {
        document.getElementById('titlestruct3').innerText = jw.slice(49,nameCounter);
    } else if (nameCounter==69) {
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(68,nameCounter);
    } else if (nameCounter<=73) {
        document.getElementById('titleval3').innerText = jw.slice(69,nameCounter);
    } else if (nameCounter==74) {
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlebracket2').innerText = jw.slice(73,nameCounter);
        document.getElementById('underscore4').style.display = 'none';
        document.getElementById('underscore5').style.display = 'inline';
    } else {
        document.getElementById('titlebracket2').style.color = '#ffcb05'
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('arrows').classList.add('fadein');
        clearInterval(nameTimer);
    }
    nameCounter += 1;
}

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

var nameTimer = setInterval(nameAnimation, 35);

function darkenHeader() {
    scrolls[1] = window.scrollY;
    if (scrolls[1] > 0 && scrolls[0] == 0) {
        document.getElementById('header').classList.remove('lightenheader');
        document.getElementById('header').classList.add('darkenheader');
    } else if (scrolls[1] == 0) {
        document.getElementById('header').classList.remove('darkenheader');
        document.getElementById('header').classList.add('lightenheader');
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
    setTimeout(function() {
        document.getElementById('copiedtoclipboard').classList.remove('clipboard');
        document.getElementById('copiedtoclipboard').style.display = 'none';
    }, 2600)
}

function scrollToAboutMe() {
    var aboutme = document.getElementById('aboutme');
    aboutme.scrollIntoView({ behavior: "smooth", block: "center"});
}

function scrollToTop() {
    document.body.scrollIntoView({ behavior: "smooth"});
}

function updateParentHeight() {
    const parent = document.querySelector('#experience');
    const children = parent.querySelectorAll('.expHalf');
    let maxHeight = 0;
  
    children.forEach(child => {
      const childHeight = child.offsetHeight + child.offsetTop;
      if (childHeight > maxHeight) maxHeight = childHeight;
    });
  
    parent.style.height = `${maxHeight}px`;
  }

const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.children[0].classList.add('pulldown');
        entry.target.children[1].classList.add('blendin');
        entry.target.children[3].classList.add('blendin');
        window.setTimeout(function() {entry.target.children[2].classList.add('blendin');
            entry.target.children[4].classList.add('blendin')}, 1000);

      }
    });
  }, { threshold: 0.5 });

const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.children[0].classList.add('slideup');
        entry.target.children[1].classList.add('slideup');
      }
    });
}, { threshold: 0.1 });

experienceObserver.observe(document.getElementById('experience'));

document.querySelectorAll('.projectsrow').forEach(el => {
    projectsObserver.observe(el);
});

window.addEventListener('load', updateParentHeight);
window.addEventListener('resize', updateParentHeight);