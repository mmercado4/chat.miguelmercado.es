import { initTerminal } from "./initTerminal.js";

export const openTerminal = () => {
  //open close terminal
  const terminalIcon = document.querySelector("#terminal-icon");
  const closeButton = document.querySelector(".close-btn");
  const terminal = document.querySelector("#terminal");

  terminalIcon.addEventListener("dblclick", () => {
    if (!terminal.classList.contains("open-terminal")) {
      terminal.classList.add("open-terminal");
      initTerminal();
    }
  });

  closeButton.addEventListener("click", () => {
    if (terminal.classList.contains("open-terminal")) {
      terminal.classList.remove("open-terminal");
      const commandsZone = document.querySelector("#commands-wrapper");
      // commandsZone.innerHTML = `
      //   <div class="command-line invisible">
      //     <label for="command-input">root@: </label>
      //     <input name="command-input" type="text" />
      //   </div>`;
    }
  });
};
