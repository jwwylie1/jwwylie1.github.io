let jw;
let nameCounter = 1;
let nameTimer;

const c3 = document.getElementById('projecttitle').children[1];
const c4 = document.getElementById('projecttitle').children[2];
let projects = "Some of the projects I've created throughout my journey.Take a look by clicking the /*links*/ below each project!";

function clearGraphic() {
    nameCounter = 0;
    document.getElementById('titlegraphic').classList.remove('cppgraphic');
    document.getElementById('titlegraphic').classList.remove('jsgraphic');
    document.getElementById('cpptab').classList.remove('selectedtab');
    document.getElementById('jstab').classList.remove('selectedtab');
    
    const titleGraphic = document.getElementById('titlegraphic');
    const arrows = document.getElementById('arrows');
    
    // Get all elements within titlegraphic except those inside arrows
    const elements = titleGraphic.querySelectorAll('*:not(#arrows, #arrows *)');
    
    // Process each element
    elements.forEach(element => {
        element.innerText = '';
        element.style.color = 'white';

        if (element.id.includes('underscore')) {
            element.style.display = 'none';
            element.innerText = '_';
        }
    });

    document.getElementById('underscore1').style.display = 'inline';
    document.getElementById('underscore2').style.display = 'none';
    document.getElementById('underscore3').style.display = 'none';
    document.getElementById('underscore4').style.display = 'none';
    document.getElementById('underscore5').style.display = 'none';
    

    clearInterval(nameTimer);
}

function animateJS() {
    if (nameCounter<=5) { // const
        document.getElementById('titlevar').innerText = jw.slice(0,nameCounter);
    } else if (nameCounter<=19) { // jonathanWylie
        if (nameCounter==6) {document.getElementById('titlevar').style.color = '#179fff'}
        document.getElementById('titlevarname').innerText = jw.slice(5,nameCounter);
    } else if (nameCounter<=21) { // =
        if (nameCounter==20) {document.getElementById('titlevarname').style.color = '#dcdcaa'}
        document.getElementById('titleequals').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=23) { // {
        document.getElementById('titlebracket1').innerText = jw.slice(21,nameCounter);
    } else if (nameCounter<=30) { // student
        if (nameCounter==24) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titlestruct1').innerText = jw.slice(23,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter==31) { // :
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(30,nameCounter);
    } else if (nameCounter<=35) {
        document.getElementById('titleval1').innerText = jw.slice(31,nameCounter);
    } else if (nameCounter==36) { // ,
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(35,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=45) { // developer
        document.getElementById('titlestruct2').innerText = jw.slice(36,nameCounter);
    } else if (nameCounter==46) {
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(45,nameCounter);
    } else if (nameCounter<=50) {
        document.getElementById('titleval2').innerText = jw.slice(46,nameCounter);
    } else if (nameCounter==51) {
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(50,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=70) {
        document.getElementById('titlestruct3').innerText = jw.slice(51,nameCounter);
    } else if (nameCounter==71) {
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(70,nameCounter);
    } else if (nameCounter<=75) {
        document.getElementById('titleval3').innerText = jw.slice(71,nameCounter);
    } else if (nameCounter==76) {
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlebracket2').innerText = jw.slice(75,nameCounter);
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

function animateCPP() {
    if (nameCounter<=5) { // class
        document.getElementById('titlevar').innerText = jw.slice(0,nameCounter);
    } else if (nameCounter<=19) { // jonathanWylie
        if (nameCounter==6) {document.getElementById('titlevar').style.color = '#179fff'}
        document.getElementById('titlevarname').innerText = jw.slice(5,nameCounter);
    } else if (nameCounter<=21) { // {
        if (nameCounter==20) {document.getElementById('titlevarname').style.color = '#4ec9b0'}
        document.getElementById('titlebracket1').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=25) { // bool
        if (nameCounter==22) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titletype1').innerText = jw.slice(21,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter<=33) { // student
        if (nameCounter==26) {document.getElementById('titletype1').style.color = '#179fff'}
        document.getElementById('titlestruct1').innerText = jw.slice(25,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter==34) { // =
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(33,nameCounter);
    } else if (nameCounter<=38) { // true
        document.getElementById('titleval1').innerText = jw.slice(34,nameCounter);
    } else if (nameCounter==39) { // ,
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(38,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=43) { // bool
        document.getElementById('titletype2').innerText = jw.slice(39,nameCounter);
    } else if (nameCounter<=53) { // developer
        if (nameCounter==44) {document.getElementById('titletype2').style.color = '#179fff'};
        document.getElementById('titlestruct2').innerText = jw.slice(43,nameCounter);
    } else if (nameCounter==54) { // =
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(53,nameCounter);
    } else if (nameCounter<=58) { // true
        document.getElementById('titleval2').innerText = jw.slice(54,nameCounter);
    } else if (nameCounter==59) { // ;
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(58,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=63) { // bool
        document.getElementById('titletype3').innerText = jw.slice(59,nameCounter);
    } else if (nameCounter<=83) { // camelCaseEnthusiast
        if (nameCounter==64) {document.getElementById('titletype3').style.color = '#179fff'};
        document.getElementById('titlestruct3').innerText = jw.slice(63,nameCounter);
    } else if (nameCounter==84) { // =
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(83,nameCounter);
    } else if (nameCounter<=88) { // true
        document.getElementById('titleval3').innerText = jw.slice(84,nameCounter);
    }  else if (nameCounter==89) {
        document.getElementById('titlecomma3').innerText = ";";
    } else if (nameCounter==90) { // }
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlebracket2').innerText = jw.slice(88,nameCounter);
        document.getElementById('underscore4').style.display = 'none';
        document.getElementById('underscore5').style.display = 'inline';
    } else if (nameCounter==91) {
        document.getElementById('titlebracket2').style.color = '#ffcb05';
        document.getElementById('titlecomma4').innerText = ";";
    } else {
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('arrows').classList.add('fadein');
        clearInterval(nameTimer);
    }
    nameCounter += 1;
}

function startJS() {
    clearGraphic();
    document.getElementById('titlegraphic').classList.add('jsgraphic');
    document.getElementById('jstab').classList.add('selectedtab');
    jw = "const jonathanWylie = {student:true,developer:true,camelCaseEnthusiast:true}";
    nameTimer = setInterval(animateJS, 35);
}

function startCPP() {
    clearGraphic();
    document.getElementById('titlegraphic').classList.add('cppgraphic');
    document.getElementById('cpptab').classList.add('selectedtab');
    jw = "class jonathanWylie {bool student=true;bool developer=true;bool camelCaseEnthusiast=true}";
    nameTimer = setInterval(animateCPP, 35);
}

let titleCounter = 0;
let lastUpdateTime = 0;
const frameDelay = 20; // ms between updates (adjust as needed)

function animateProjectTitle(timestamp) {
    if (!lastUpdateTime) lastUpdateTime = timestamp;
    const elapsed = timestamp - lastUpdateTime;

    if (elapsed >= frameDelay) {
        lastUpdateTime = timestamp;

        if (titleCounter == projects.length) {
            c4.innerHTML = c4.innerHTML.slice(0, c4.innerHTML.length);
            return; // Stop animation
        } else if (titleCounter < 56) {
            c3.innerHTML = c3.innerHTML.slice(0, c3.innerHTML.length-1) + (projects[titleCounter] + "_");
        } else {
            if (titleCounter == 56) {
                c3.innerHTML = c3.innerHTML.slice(0, c3.innerHTML.length-1);
            }
            c4.innerHTML = c4.innerHTML.slice(0, c4.innerHTML.length-1) + (projects[titleCounter] + "_");
        }
        titleCounter++;
    }
    requestAnimationFrame(animateProjectTitle);
}

function startProjectAnimation() {
    requestAnimationFrame(animateProjectTitle);
}

startCPP();