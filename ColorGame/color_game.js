
var numberOfSquares = 6;
var colorArr = generateRandomColors(numberOfSquares);
var correctColor;
var squares = document.querySelectorAll('.squares');
var displayColor = document.getElementById('displayColor');   // h1
var message = document.getElementById('message');
var resetBtn = document.getElementById('reset');
var h1 = document.querySelector('h1');
var modeBtns = document.querySelectorAll('.mode');

// initalize setup
setupModeButtons();
setupSquares();
reset();

function setupModeButtons() {
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener('click', function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === 'Easy') {
                console.log('numSq = 3')
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            }
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            var pickedColor = this.style.background;
            if (pickedColor === correctColor) {
                message.textContent = 'CORRECT!'
                resetBtn.textContent = 'Play Again?'
                changeCorrectColors(pickedColor);
                h1.style.background = correctColor;
            } else {
                this.style.background = '#232323';
                message.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colorArr = generateRandomColors(numberOfSquares);
    correctColor = pickCorrectColor();
    displayColor.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if(colorArr[i]) {
            squares[i].style.display ='block';
            squares[i].style.background = colorArr[i];
        } else {
            squares[i].style.display = 'none'
        }
        
    }
    resetBtn.textContent = 'New Colors';
    h1.style.background = 'steelblue'
    message.textContent = '';

}

resetBtn.addEventListener('click', function () {
    reset();
})

function changeCorrectColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }

}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function pickCorrectColor() {
    var random = Math.floor(Math.random() * colorArr.length);
    return colorArr[random];
}