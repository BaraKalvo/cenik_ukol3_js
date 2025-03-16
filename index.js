/*

MOJE PŮVODNÍ ŘEŠENÍ, KTERÉ JSEM PAK ZKOUŠELA ZJEDNODUŠIT NÍŽE

const selectPlan = (planNumber) => {

    const plan1Elm = document.querySelector('#plan1');
    const plan2Elm = document.querySelector('#plan2');
    const plan3Elm = document.querySelector('#plan3');

    if (planNumber === 1) {
        plan1Elm.classList.add('plan--selected');
        plan2Elm.classList.remove ('plan--selected');
        plan3Elm.classList.remove ('plan--selected');
    } else if (planNumber === 2) {
        plan2Elm.classList.add('plan--selected');
        plan1Elm.classList.remove('plan--selected');
        plan3Elm.classList.remove('plan--selected');
    } else if (planNumber === 3) {
        plan3Elm.classList.add('plan--selected');
        plan1Elm.classList.remove('plan--selected');
        plan2Elm.classList.remove('plan--selected');
    } else {
        plan1Elm.classList.remove('plan--selected');
        plan2Elm.classList.remove('plan--selected');
        plan3Elm.classList.remove('plan--selected');
        console.log('invalid planNumber');
    };

};

selectPlan(2);
selectPlan(3);
selectPlan(1);
selectPlan(3);

*/


const selectPlan = (planNumber) => {

    const plan1Elm = document.querySelector('#plan1');
    const plan2Elm = document.querySelector('#plan2');
    const plan3Elm = document.querySelector('#plan3');

    const allPlans = document.querySelectorAll('.plan'); //dohledala jsem si, jak vybrat všechny prvky s danou třídou
    allPlans.forEach(plan => plan.classList.remove('plan--selected')); //s tímto řádkem kódu mi pomohl ChatGPT - je ten kód prosím v pořádku?

    if (planNumber === 1) {
        plan1Elm.classList.add('plan--selected');
    } else if (planNumber === 2) {
        plan2Elm.classList.add('plan--selected');
    } else if (planNumber === 3) {
        plan3Elm.classList.add('plan--selected');
    } else {
        console.log('invalid planNumber');
    };

};

selectPlan(2);
selectPlan(1);
selectPlan(3);
selectPlan(6);
selectPlan(2);
