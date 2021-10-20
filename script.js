

// window.addEventListener("load", function(){
//     const canvas = document.querySelector("#canvas");
//     const ctx = canvas.getContext("2d");

//     canvas.height = window.innerHeight;
//     canvas.window = window.innerWidth;
//     console.log(window.innerHeight)
//     console.log(window.innerWidth)
// })

// canvas.setAttribute('width', canvasWidth);
// canvas.setAttribute('height', canvasHeight);
// canvas.setAttribute('id', 'canvas');

// if(typeof G_vmlCanvasManager != 'undefined') {
// 	canvas = G_vmlCanvasManager.initElement(canvas);
// }
// context = canvas.getContext("2d");

let currentColor = "#000000"
var clickTool = new Array();
var curTool = "crayon";

function changeColor(x) {
    currentColor = x;
    console.log(x)
}

// let heightWidth;

// window.addEventListener("resize", () => {

//     console.log(window.innerWidth)

//     if (window.innerWidth > 500) {
//         heightWidth = window.innerHeight
//     } else {
//         heightWidth = window.innerWidth
//     }

// })

const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");


const canvas2 = document.querySelector("#canvas2");

const ctx2 = canvas2.getContext("2d");




// Image functions

var imgPath = './colorme.jpg';

//Create a new Image object.
var imgObj = new Image();

//Set the src of this Image object.
imgObj.src = imgPath;

//the x coordinates
var x = 0;

//the y coordinates
var y = 0;

//When our image has loaded.
imgObj.onload = function () {
    //Draw the image onto the canvas.
    ctx2.drawImage(imgObj, x, y, 300, 300, 0, 0, canvas2.width, canvas2.height);
}

let imageData = ctx.getImageData(0, 0, 1000, 1000);



window.addEventListener("load", () => {

    console.log("test")

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    canvas2.height = window.innerHeight;
    canvas2.width = window.innerWidth;



    // Variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function finishedPosition() {
        painting = false;
        ctx.beginPath()
    }

    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = 50;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    ctx.globalCompositeOperation = "multiply"

    // Event listeners 
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)

})

var canvasWrap = document.querySelector("#canvas")

function download(e) {

    ctx2.putImageData(imageData, 0, 0);

    console.log("fuckkk")
    // get the blob and set the href
    var dt = canvasWrap.toDataURL()
    this.href = dt

}

const takeScreenshotButton = document.getElementById("takeScreenshot")

takeScreenshotButton.addEventListener("click", download)

