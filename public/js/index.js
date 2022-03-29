const socket = io();
const terminal = document.querySelector("#terminal");

let mouseMovement;

terminal.addEventListener(
  "mousedown",
  (e) => {
    let initialPosition = {
      x: e.clientX,
      y: e.clientY,
    };

    terminal.addEventListener(
      "mousemove",
      (e) => {
        handleMouseMove(e, initialPosition);
      },
      false
    );
  },
  false
);

terminal.addEventListener("mouseup", () => {
  terminal.removeEventListener(
    "mousemove",
    (e) => {
      handleMouseMove(e, initialPosition);
    },
    false
  );
});

const handleMouseMove = (e, initialPosition) => {
  let { offsetX, offsetY, clientX, clientY } = e;
  let { x, y } = terminal.getBoundingClientRect();
  console.log("*********");
  console.log(initialPosition);
  // console.log("nueva posición", clientX - offsetX, clientY - offsetY);
  // terminal.style.left = `${x + offsetX}px`;
  // terminal.style.top = `${y + offsetY}px`;
};

// function sendMessage() {
//   socket.emit("addNewMessage", "mis huevos");
// }

// sendMessage();
