const upBtn = document.querySelector('.sizeUp');
const downBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const text = document.querySelector('p');
let font = 36;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const changeColor = () => {
//   const variableColor = getRandomHexColor();
//   text.style.color = `${variableColor}`;
// };

const changeColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    text.style.color = `rgb(${r}, ${g}, ${b})`;
}

const sizeUp = () => {
    if (font >= 100) {
        return
    }
    font += 5;
    text.style.fontSize = font + 'px';
}

const sizeDown = () => {
    if (font <= 20) {
        return
    }
    font -= 5;
    text.style.fontSize = font + 'px';
}

colorBtn.addEventListener('click', changeColor);
upBtn.addEventListener('click', sizeUp);
downBtn.addEventListener('click', sizeDown);
