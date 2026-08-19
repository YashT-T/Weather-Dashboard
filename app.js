let btn = document.querySelector('button');
let input = document.querySelector('input');
let container = document.querySelector('.container');

btn.addEventListener('click',async () =>{
    container.innerHTML = "";
    let city = input.value;
    try{
        let response = await fetch(`https://wttr.in/${city}?format=j1`);
        let data = await response.json();
        console.dir(data);
        console.dir(data.current_condition[0]);
        for(let i = 0; i<5;i++){
        let div = document.createElement('div');
        div.classList.add('result');
        container.appendChild(div);
        div.classList.add(`${i}`);
        }
    } 
});
