
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var headertext = document.querySelector("div.pickedColor");
var resetColors = document.querySelector("#resetColors");
var cardHeader = document.querySelector(".card-header");

var colors = getRandomColors(6);
var pickedColor = pickColor(colors);
colorDisplay.textContent = "Lets start!";

function letsPlay()
{
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function () {
            console.log("clicked on :" + this.style.background);
    
            if (this.style.background == pickedColor) {
                changecolor(pickedColor);
                headertext.style.background = pickedColor;
                var rgb = getRGB(pickedColor);
                cardHeader.classList.remove("bg-primary");
                cardHeader.style.background = "rgb("+rgb.red*.75+", "+rgb.green*.75+", "+rgb.blue*.75+")";
                cardHeader.style.color = "white";
                headertext.classList.remove("bg-primary");
                message.textContent = "Correct";
                resetColors.textContent = "Congrats! Lets Play Again?";
                resetColors.style.background = "rgb("+rgb.red*.8+", "+rgb.green*.8+", "+rgb.blue*.8+")";
            }
            else {
                this.classList.remove("visible");
                this.classList.add("invisible");
                this.style.background = "#232323";
                message.textContent = "Wrong!";
            }
        })
    }
}


resetColors.addEventListener("click", function () {
    letsPlay();
    headertext.classList.add("bg-primary");
    cardHeader.classList.add("bg-primary");
    colors = getRandomColors(6);
    pickedColor = pickColor(colors);
    colorDisplay.textContent = "Guess the color: "+pickedColor;
    setSquaresColor(colors);
    resetColors.textContent = "Restart?";
    resetColors.style = "";
    cardHeader.style = "";
    message.textContent = "";
})

function setSquaresColor(colorsList) {
    for (i = 0; i < colorsList.length; i++) {
        squares[i].style.background = colorsList[i];
        squares[i].classList.remove("invisible");
        squares[i].classList.add("visible");
    }

}

function changecolor(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
        squares[i].classList.remove("invisible");
        squares[i].classList.add("visible");
    }
}

function pickColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomColors(count) {
    var newcolors = [];
    for (i = 0; newcolors.length < count; i++) {
        var red = getRandomColor();
        var green = getRandomColor();
        var blue = getRandomColor();
        var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        if(!newcolors.includes(randomColor)) {
            newcolors.push(randomColor);
        }
    }
    return newcolors;
}
function getRandomColor()
{
    return Math.floor(Math.random() * 256 / 50) * 50;
}

function getRGB(strColor){
      var match = strColor.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
      return match ? {
        red: parseInt(match[1], 10),
        green: parseInt(match[2], 10),
        blue: parseInt(match[3], 10),
      } : {};
    }