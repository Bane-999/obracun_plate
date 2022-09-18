function plata(hours) {
    let procentage = hours/(6.5*days);
    let e;
    let plata = `${Math.round(procentage*1000)}`;
    let str = String(plata).split("");
    if( (plata == 1) || ( (str[str.length - 1] == 1) && (str[str.length - 2] != 1) )) {
        e = "evro";
    }
    else {
        e = "evra";
    }
    display.innerText = `${plata} ${e} (${plata*117} dinar/a)`;
    list_item += `<li>broj radnih dana:<b> ${days}</b> | intenzitet rada:<b> ${procentage_input.options[procentage_input.selectedIndex].text}</b> | ukupan broj sati:<b> ${hours}</b> | potrebno vreme:<b> ${estimate(String(hours).split("+"))}dan/a</b> | plata:<b> ${plata}e (${plata*117} din.)</b></li>`;
    list.innerHTML = list_item;
}

function arrSum(arr) {
    let sum = 0;
    arr.forEach((x) => {
        num = parseInt(x);
        sum += num;
    })
    return sum;
}

function renderDays(day) {
    if([1,21,31,41,51,61,71,81,91].includes(day)) {
        display.innerText = `Potrebno vreme je: ${day} dan`;
    }
    else if(day === 'error') {
        display.innerText = `Greska!`;
    }
    else {
        display.innerText = `Potrebno vreme je: ${day} dana`;
    }
    return;
}

function estimate(arr) {
    sum = arrSum(arr);
    for(let i=0; i < 100; i++) {
        if( sum <= ((i+1)*procent).toFixed(1) ) {
            return (i+1);
        }
    }
    return 'error';
}

const display = document.getElementById("display");
const button = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const input = document.getElementById("vreme");
const days_input = document.querySelector('#select1');
const procentage_input = document.querySelector('#select2');
const list = document.querySelector('.info');
let list_item = ``;
let days = 19;
let procent = 6.5;

days_input.addEventListener('change', () => {
   days = parseInt(days_input.value);
})

procentage_input.addEventListener('change', () => {
   procent = parseInt(procentage_input.value);
})

button2.addEventListener('click',() => {
    // issues
    result = estimate((input.value).split("+"));
    renderDays(result);
    input.value = arrSum((input.value).split("+"));
});

button.addEventListener('click',() => {
    // obracun plate
    plata(input.value);
});

