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
}

function estimate(arr) {
    let sum = 0;
    arr.forEach((x) => {
        num = parseInt(x);
        sum += num;
    })

    for(let i=0; i < 100; i++) {
        if( sum <= ((i+1)*procent).toFixed(1) ) {
            if([1,21,31,41,51,61,71,81,91].includes(i+1)) {
                display.innerText = `Potrebno vreme je: ${i+1} dan`;
            }
            else {
                display.innerText = `Potrebno vreme je: ${i+1} dana`;
            }
            return sum;
        }
        else {
            display.innerText = `Greska!`;
        }
    }
    return sum;
}

const display = document.getElementById("display");
const button = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const input = document.getElementById("vreme");
const days_input = document.querySelector('#select1');
const procentage_input = document.querySelector('#select2');
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
    sum = estimate((input.value).split("+"));
    input.value = sum;
});

button.addEventListener('click',() => {
    // obracun plate
    plata(input.value);
});

