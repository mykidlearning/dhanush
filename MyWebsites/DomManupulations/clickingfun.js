


function clickFun() {
    var h1 = document.querySelector("h1");
    h1.style.color = "pink";
    h1.innerText = "Someone clicked me";
    var intNo = setInterval(function () {
        if (h1.style.color === "pink") {
            h1.style.color = "black";
        }
        else {
            h1.style.color = "pink";
        }
    }, 500)

    var reset = document.querySelector("#reset");
    reset.addEventListener("click", function () {
        clearInterval(intNo)
        h1.style.color = "black";
        h1.innerText = "No one has clicked me";
    })
}

var links = document.getElementsByTagName("a");
console.log(links.length);
for (i = 0; i < links.length; i++) {
    console.log("links");
    links[i].addEventListener("click", function () {
        console.log("links");
        links[i].classList.toggle("linkClick");
    });
}