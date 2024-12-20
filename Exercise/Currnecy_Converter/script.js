let BASE_URL = ('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_d3v9FS1jAbMosuKo27d6UgiqL6x7uqIV5OcEFKEX&currencies=');

const dropdown = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const from = document.querySelector('.from select');
const to = document.querySelector('.to select');
const msg = document.querySelector('.msg');

window.addEventListener('load', ()=>{
    getExchangeRate();
});

for(let select of dropdown){
    for(let code in countryList){
        let option = document.createElement('option');
        option.innerText = code;
        option.value = code;
        select.appendChild(option);
        if(select.name === 'from' && code === 'USD'){
            option.selected = true;
        }
        else if(select.name === 'to' && code === 'INR'){
            option.selected = true;
        }
    }
    select.addEventListener('change',(e)=>{
        updateFlag(e.target)
    })
}

const updateFlag = (element)=>{
    let code = element.value;
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    getExchangeRate();
})

const getExchangeRate = async()=>{
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amount.value = '1';
        amtVal = 1;
    }

    const URL = `${BASE_URL}${to.value}&base_currency=${from.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.data[to.value];

    let finalAmount = amtVal*rate;
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
}