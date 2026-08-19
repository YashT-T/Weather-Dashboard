let btn = document.querySelector('button');
let input = document.querySelector('input');
let container = document.querySelector('.container');

btn.addEventListener('click', async () => {
    container.innerHTML = "";
    let city = input.value;
    let response = await fetch(`https://wttr.in/${city}?format=j1`);
    let data = await response.json();
    let current = data.current_condition[0];

    // pick what you want to show — label + actual value
    let details = [
        { label: 'Temperature',value: `${current.temp_C}°C` },
        { label: 'Visiblitity', value: `${current.visibility}` },
        { label: 'UV Index', value: `${current.uvIndex}` },
        { label: 'Humidity', value:  `${current.humidity}%` },
        { label: 'Condition', value: current.weatherDesc[0].value }
    ];

    for (let i = 0; i < details.length; i++) {
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = `${details[i].label}: ${details[i].value}`;
        container.appendChild(div);
    }
    console.log(current);
});
