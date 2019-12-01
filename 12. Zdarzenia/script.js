window.onload = function () {

    let clickCounter = 0;
    let dblclickcounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click', function () {
        document.getElementById('click-counter').textContent = ++clickCounter;
    });
    document.addEventListener('dblclick', function () {
        document.getElementById('dbl-click-counter').textContent = ++dblclickcounter;
    });
    document.addEventListener('keydown', function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;

    });

    let button = document.getElementById('add-element');
    let boxContainer = document.getElementById('box-container');

    button.addEventListener('click', function () {
       let nowyElement = document.createElement('div');
       nowyElement.classList.add('box');
       boxContainer.appendChild(nowyElement);

    });

    boxContainer.addEventListener('click', function (e) {
    if (e.target.className.includes('box')) {
        e.target.style.border = '1px solid red'
/*        this.removeChild(e.target);*/
        }
    });


};