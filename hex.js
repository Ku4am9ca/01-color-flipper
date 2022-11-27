const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//#f15025

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


// слушаем кнопку и даём функцию 
btn.addEventListener('click', function () {
    //присваеваем переменной хештег
    let hexColor = '#';
    //сщздаём цыкл
    for (let i = 0; i < 6; i++) {
        //на каждой итерации добавляем из массива значения 0
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor; //свойству css присваеваем 
    document.body.style.background = hexColor; //фону присваеваем
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}