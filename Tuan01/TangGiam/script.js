let count = 0;
const countElement = document.querySelector('#count');
const countMinus = document.querySelector('#minus');
const countReset = document.querySelector('#reset');
const countPlus = document.querySelector('#plus');

countPlus.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});
countMinus.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
}
);
countReset.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
});