let currentColor = "#000000"
var clickTool = new Array();
var curTool = "crayon";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const canvas2 = document.querySelector("#canvas2");
const ctx2 = canvas2.getContext("2d");

function changeColor(x) {
    currentColor = x;
    console.log(x)
}

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
        ctx.lineWidth = 35;
        if (window.innerWidth < 500) {
            ctx.lineWidth = 20;
        }

        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    // ctx.globalCompositeOperation = "multiply"

    // Event listeners 
    canvas.addEventListener("mousedown", startPosition)
    canvas.addEventListener("mouseup", finishedPosition)
    canvas.addEventListener("mousemove", draw)

    // canvas.addEventListener("touchdown", startPosition)
    // canvas.addEventListener("touchend", finishedPosition)
    // canvas.addEventListener("touchmove", draw)


    canvas.addEventListener("touchstart", function (e) {
        e.preventDefault();
      
          mousePos = getTouchPos(canvas, e);
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
      }, false);
      canvas.addEventListener("touchend", function (e) {
      var mouseEvent = new MouseEvent("mouseup", {});
      canvas.dispatchEvent(mouseEvent);
      }, false);
      canvas.addEventListener("touchmove", function (e) {
      var touch = e.touches[0];
      var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
      });
      canvas.dispatchEvent(mouseEvent);
      }, false);
      
      function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
        };
        }

})

const takeScreenshotButton = document.getElementById("takeScreenshot")

takeScreenshotButton.addEventListener("click", download)

