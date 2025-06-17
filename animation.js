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
    document.getElementById('titlegraphic').classList.remove('pygraphic');
    document.getElementById('cpptab').classList.remove('selectedtab');
    document.getElementById('jstab').classList.remove('selectedtab');
    document.getElementById('pytab').classList.remove('selectedtab');
    document.getElementById('underscore4').classList.remove('blinking');
    document.getElementById('pybreak').style.display = 'none';
    
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
    } else if (nameCounter<=21) { // _=
        if (nameCounter==20) {document.getElementById('titlevarname').style.color = '#dcdcaa'}
        document.getElementById('titleequals').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=23) { // _{
        document.getElementById('titlebracket1').innerText = jw.slice(21,nameCounter);
    } else if (nameCounter<=31) { // \tstudent
        if (nameCounter==24) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titlestruct1').innerText = jw.slice(23,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter==32) { // :
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(31,nameCounter);
    } else if (nameCounter<=37) { // _true
        document.getElementById('titleval1').innerText = jw.slice(32,nameCounter);
    } else if (nameCounter==38) { // ,
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(37,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=48) { // \tdeveloper
        document.getElementById('titlestruct2').innerText = jw.slice(38,nameCounter);
    } else if (nameCounter==49) { // :
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(48,nameCounter);
    } else if (nameCounter<=54) { // _true
        document.getElementById('titleval2').innerText = jw.slice(49,nameCounter);
    } else if (nameCounter==55) { // ,
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(54,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=75) { // \tcamelCaseEnthusiast
        document.getElementById('titlestruct3').innerText = jw.slice(55,nameCounter);
    } else if (nameCounter==76) { // :
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(75,nameCounter);
    } else if (nameCounter<=81) { // _true
        document.getElementById('titleval3').innerText = jw.slice(76,nameCounter);
    } else if (nameCounter==82) { // }
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlebracket2').innerText = jw.slice(81,nameCounter);
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
    } else if (nameCounter<=26) { // \tbool
        if (nameCounter==22) {document.getElementById('titlebracket1').style.color = '#ffcb05'}
        document.getElementById('titletype1').innerText = jw.slice(21,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter<=34) { // student
        if (nameCounter==27) {document.getElementById('titletype1').style.color = '#179fff'}
        document.getElementById('titlestruct1').innerText = jw.slice(26,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter<=36) { // _=
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(34,nameCounter);
    } else if (nameCounter<=41) { // _true
        document.getElementById('titleval1').innerText = jw.slice(36,nameCounter);
    } else if (nameCounter==42) { // ,
        document.getElementById('titleval1').style.color = '#da70d6';
        document.getElementById('titlecomma1').innerText = jw.slice(41,nameCounter);
        document.getElementById('underscore2').style.display = 'none';
        document.getElementById('underscore3').style.display = 'inline';
    } else if (nameCounter<=47) { // \tbool
        document.getElementById('titletype2').innerText = jw.slice(42,nameCounter);
    } else if (nameCounter<=57) { // developer
        if (nameCounter==48) {document.getElementById('titletype2').style.color = '#179fff'};
        document.getElementById('titlestruct2').innerText = jw.slice(47,nameCounter);
    } else if (nameCounter<=59) { // _=
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(57,nameCounter);
    } else if (nameCounter<=64) { // _true
        document.getElementById('titleval2').innerText = jw.slice(59,nameCounter);
    } else if (nameCounter==65) { // ;
        document.getElementById('titleval2').style.color = '#da70d6';
        document.getElementById('titlecomma2').innerText = jw.slice(64,nameCounter);
        document.getElementById('underscore3').style.display = 'none';
        document.getElementById('underscore4').style.display = 'inline';
    } else if (nameCounter<=70) { // \tbool
        document.getElementById('titletype3').innerText = jw.slice(65,nameCounter);
    } else if (nameCounter<=90) { // camelCaseEnthusiast
        if (nameCounter==71) {document.getElementById('titletype3').style.color = '#179fff'};
        document.getElementById('titlestruct3').innerText = jw.slice(70,nameCounter);
    } else if (nameCounter<=92) { // _=
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(90,nameCounter);
    } else if (nameCounter<=97) { // _true
        document.getElementById('titleval3').innerText = jw.slice(92,nameCounter);
    } else if (nameCounter==98) {
        document.getElementById('titlecomma3').innerText = jw.slice(97,nameCounter);
    } else if (nameCounter==99) { // }
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('titlebracket2').innerText = jw.slice(98,nameCounter);
        document.getElementById('underscore4').style.display = 'none';
        document.getElementById('underscore5').style.display = 'inline';
    } else if (nameCounter==100) {
        document.getElementById('titlebracket2').style.color = '#ffcb05';
        document.getElementById('titlecomma4').innerText = ";";
    } else {
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('arrows').classList.add('fadein');
        clearInterval(nameTimer);
    }
    nameCounter += 1;
}

function animatePY() {
    if (nameCounter<=5) { // class
        document.getElementById('titlevar').innerText = jw.slice(0,nameCounter);
    } else if (nameCounter<=19) { // jonathanWylie
        if (nameCounter==6) {document.getElementById('titlevar').style.color = '#179fff'}
        document.getElementById('titlevarname').innerText = jw.slice(5,nameCounter);
    } else if (nameCounter==20) { // :
        document.getElementById('titlevarname').style.color = '#4ec9b0'
        document.getElementById('titlebracket1').innerText = jw.slice(19,nameCounter);
    } else if (nameCounter<=25) { // \tdef
        if (nameCounter==21) {document.getElementById('titlebracket1').style.color = '#ffffff'}
        document.getElementById('titledef').innerText = jw.slice(20,nameCounter);
        document.getElementById('underscore1').style.display = 'none';
        document.getElementById('underscorepy').style.display = 'inline';
    } else if (nameCounter<=33) { // __init__
        if (nameCounter==26) {document.getElementById('titledef').style.color = '#179fff'}
        document.getElementById('titleinit').innerText = jw.slice(25,nameCounter);
    } else if (nameCounter==34) { // (
        document.getElementById('titleinit').style.color = '#dcdcaa';
        document.getElementById('titleopen').innerText = jw.slice(33,nameCounter);
    } else if (nameCounter<=38) { // self
        document.getElementById('titleself').innerText = jw.slice(34,nameCounter);
    } else if (nameCounter==39) { // )
        document.getElementById('titleself').style.color = '#9cdcfe';
        document.getElementById('titleclose').innerText = jw.slice(38,nameCounter);
    } else if (nameCounter==40) { // :
        document.getElementById('titlecolon').innerText = jw.slice(39,nameCounter);
        document.getElementById('titleopen').style.color = '#ffcb05';
        document.getElementById('titleclose').style.color = '#ffcb05';
        document.getElementById('underscorepy').style.display = 'none';
        document.getElementById('underscore2').style.display = 'inline';
    } else if (nameCounter<=46) { // \t\tself
        document.getElementById('titletype1').innerText = jw.slice(40,nameCounter);
    } else if (nameCounter==47) { // .
        document.getElementById('titletype1').style.color = '#9cdcfe'
        document.getElementById('titledot1').innerText = jw.slice(46,nameCounter);
    } else if (nameCounter<=54) { // student
        document.getElementById('titlestruct1').innerText = jw.slice(47,nameCounter);
    } else if (nameCounter<=56) { // _=
        document.getElementById('titlestruct1').style.color = '#9cdcfe';
        document.getElementById('titlecolon1').innerText = jw.slice(54,nameCounter);
    } else if (nameCounter<=61) { // _True
        document.getElementById('titleval1').innerText = jw.slice(56,nameCounter);
    } else if (nameCounter<=67) { // \t\tself
        if (nameCounter==62) {
            document.getElementById('titleval1').style.color = '#da70d6'
            document.getElementById('underscore2').style.display = 'none';
            document.getElementById('underscore3').style.display = 'inline';
        };
        document.getElementById('titletype2').innerText = jw.slice(61,nameCounter);
    } else if (nameCounter==68) { // .
        document.getElementById('titletype2').style.color = '#9cdcfe'
        document.getElementById('titledot2').innerText = jw.slice(67,nameCounter);
    } else if (nameCounter<=77) { // developer
        document.getElementById('titlestruct2').innerText = jw.slice(68,nameCounter);
    } else if (nameCounter<=79) { // _=
        document.getElementById('titlestruct2').style.color = '#9cdcfe';
        document.getElementById('titlecolon2').innerText = jw.slice(77,nameCounter);
    } else if (nameCounter<=84) { // _True
        document.getElementById('titleval2').innerText = jw.slice(79,nameCounter);
    } else if (nameCounter<=90) { // \t\tself
        if (nameCounter==85) {
            document.getElementById('titleval2').style.color = '#da70d6'
            document.getElementById('underscore3').style.display = 'none';
            document.getElementById('underscore4').style.display = 'inline';
        };
        document.getElementById('titletype3').innerText = jw.slice(84,nameCounter);
    } else if (nameCounter==91) { // .
        document.getElementById('titletype3').style.color = '#9cdcfe'
        document.getElementById('titledot3').innerText = jw.slice(90,nameCounter);
    } else if (nameCounter<=110) { // camelCaseEnthusiast
        document.getElementById('titlestruct3').innerText = jw.slice(91,nameCounter);
    } else if (nameCounter<=112) { // _=
        document.getElementById('titlestruct3').style.color = '#9cdcfe';
        document.getElementById('titlecolon3').innerText = jw.slice(110,nameCounter);
    } else if (nameCounter<=117) { // _True
        document.getElementById('titleval3').innerText = jw.slice(112,nameCounter);
    } else {
        document.getElementById('titleval3').style.color = '#da70d6';
        document.getElementById('arrows').style.display = 'block';
        document.getElementById('arrows').classList.add('fadein');
        document.getElementById('underscore4').classList.add('blinking');
        clearInterval(nameTimer);
    }
    nameCounter += 1;
}

function startJS() {
    clearGraphic();
    document.getElementById('titlegraphic').classList.add('jsgraphic');
    document.getElementById('jstab').classList.add('selectedtab');
    jw = "const jonathanWylie = {\tstudent: true,\tdeveloper: true,\tcamelCaseEnthusiast: true}";
    nameTimer = setInterval(animateJS, 35);
}

function startCPP() {
    clearGraphic();
    document.getElementById('titlegraphic').classList.add('cppgraphic');
    document.getElementById('cpptab').classList.add('selectedtab');
    jw = "class jonathanWylie {\tbool student = true;\tbool developer = true;\tbool camelCaseEnthusiast = true;};";
    nameTimer = setInterval(animateCPP, 35);
}

function startPY() {
    clearGraphic();
    document.getElementById('pybreak').style.display = 'block';
    document.getElementById('titlegraphic').classList.add('pygraphic');
    document.getElementById('pytab').classList.add('selectedtab');
    jw = "class jonathanWylie:\tdef __init__(self):\t\tself.student = True\t\tself.developer = True\t\tself.camelCaseEnthusiast = True";
    nameTimer = setInterval(animatePY, 35);
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