//var jw = "jonathanWylie";
var jw = "var jonathanWylie = {student:true,softwareEngineer:true,camelCaseEnthusiast:true}"
var nameCounter = 1;
var scrolls = [0,0];

function nameAnimation() {
    if (nameCounter<=3) {
        document.getElementById('titlevar').innerText = jw.slice(0,nameCounter);
    } else if (nameCounter<=17) {
        if (nameCounter==4) {document.getElementById('titlevar').style.color = '#179fff'}
        document.getElementById('titlevarname').innerText = jw.slice(3,nameCounter);
    } else if (nameCounter<=19) {
        if (nameCounter==18) {document.getElementById('titlevarname').style.color = '#dcdcaa'}
        document.getElementById('titleequals').innerText = jw.slice(17,nameCounter);
    } else if (nameCounter<=21) {
        document.getElementById('titlebracket1').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=28) {
        if (nameCounter==22) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titlestruct1').innerText = jw.slice(21,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter==29) {
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(28,nameCounter);
    } else if (nameCounter<=33) {
        document.getElementById('titleval1').innerText = jw.slice(29,nameCounter);
    } else if (nameCounter==34) {
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(33,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=50) {
        document.getElementById('titlestruct2').innerText = jw.slice(34,nameCounter);
    } else if (nameCounter==51) {
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(50,nameCounter);
    } else if (nameCounter<=55) {
        document.getElementById('titleval2').innerText = jw.slice(51,nameCounter);
    } else if (nameCounter==56) {
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(55,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=75) {
        document.getElementById('titlestruct3').innerText = jw.slice(56,nameCounter);
    } else if (nameCounter==76) {
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(75,nameCounter);
    } else if (nameCounter<=80) {
        document.getElementById('titleval3').innerText = jw.slice(76,nameCounter);
    } else if (nameCounter==81) {
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlecomma3').innerText = jw.slice(80,nameCounter);
        document.getElementById('underscore4').style.display = 'none';
        document.getElementById('underscore5').style.display = 'inline';
    } else {
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('arrows').classList.add('fadein');
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

var nameTimer = setInterval(nameAnimation, 5);

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