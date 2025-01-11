

let navBar = false;



function yh() {

    let ul = document.querySelector('ul');

let yhh = document.querySelector('.yhh');

    if (ul.style.right === "-100%") {

        ul.style.right = "0";

        yhh.innerHTML = "x";

        ul.style.cursor = "pointer";

        

    }

    else {

        ul.style.right = "-100%";

        yhh.innerHTML = "="; 

        ul.style.cursor = "normal";

    }

}

ScrollReveal({

    distance: '60px',

    opacity: '0'

});

ScrollReveal().reveal('.firstslide');

ScrollReveal().reveal('.you', { delay:500 , origin:'right'});

ScrollReveal().reveal('.secondslide', { delay: 700 , origin:'left', mobile: false});

ScrollReveal().reveal('.second_slide', { delay: 4500 ,  origin:'right'});

ScrollReveal().reveal('.hmm', { delay: 100,  origin:'left'});

ScrollReveal().reveal('.btns', { delay: 300,  origin:'bottom'});

ScrollReveal().reveal(' .skills-header-text', { delay: 300,  origin:'bottom'});

ScrollReveal().reveal(' .icon', { delay: 300,  origin:'left'});

ScrollReveal().reveal(' .hn', { delay: 300,  origin:'right'});

ScrollReveal().reveal('.secondsideofcard', { delay: 700 , origin:'left'});

ScrollReveal().reveal(' .card1', { delay: 700 , origin:'right'});

ScrollReveal().reveal(' .card2', { delay: 700 , origin:'left' });



let name = ["Gbohunmi", "Williams" , "Ayomide"];

console.log(name)
