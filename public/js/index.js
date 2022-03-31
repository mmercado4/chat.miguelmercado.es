const socket = io();
const terminal = document.querySelector("#terminal");

let mouseDown = false;
let mouseX = 0;
let mouseY = 0;
//Ponerlo en un archivo separado y poner solo en la barra superior de la terminal

terminal.addEventListener(
  "mousedown",
  (e) => {
    e.preventDefault();
    mouseDown = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
  },
  false
);

terminal.addEventListener(
  "mouseup",
  () => {
    mouseDown = false;
    console.log(terminal.getBoundingClientRect());
    let { x, y } = terminal.getBoundingClientRect();
    terminal.style.left = `${x}px`;
    terminal.style.top = `${y}px`;
    terminal.style.transform = `translate(0px, 0px)`;
  },
  false
);

terminal.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!mouseDown) return;
  let deltaX = e.clientX - mouseX;
  let deltaY = e.clientY - mouseY;
  handleMouseMove(deltaX, deltaY);
});

const handleMouseMove = (deltaX, deltaY) => {
  terminal.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
};

// function sendMessage() {
//   socket.emit("addNewMessage", "mis huevos");
// }

// sendMessage();
