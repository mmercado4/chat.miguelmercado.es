export const dragTerminal = () => {
  //Drag terminal
  const terminal = document.querySelector("#terminal");
  const bar = document.querySelector("#terminal-bar");

  let mouseDown = false;
  let mouseX = 0;
  let mouseY = 0;

  bar.addEventListener(
    "mousedown",
    (e) => {
      e.preventDefault();
      mouseDown = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
    },
    false
  );

  bar.addEventListener(
    "mouseup",
    () => {
      mouseDown = false;
      let { x, y } = terminal.getBoundingClientRect();
      terminal.style.left = `${x}px`;
      terminal.style.top = `${y}px`;
      terminal.style.transform = `translate(0px, 0px)`;
    },
    false
  );

  bar.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) return;
    let deltaX = e.clientX - mouseX;
    let deltaY = e.clientY - mouseY;
    handleMouseMove(deltaX, deltaY);
  });
};

const handleMouseMove = (deltaX, deltaY) => {
  terminal.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
};
