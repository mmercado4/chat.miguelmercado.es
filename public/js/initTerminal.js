const commandsZone = document.querySelector("#commands-wrapper");
const commandLine = document.querySelector(".command-line");
const commandInput = document.querySelector(".command-line input");
const commandLabel = document.querySelector(".command-line label");
const barId = document.querySelector(".bar-id");
let user = "root";
let location = "";
let steps = 0;

const createNewLine = (text, printUser = true) => {
  let newLine = document.createElement("p");
  if (printUser) newLine.textContent = `${user}@${location}: ${text}`;
  else newLine.textContent = text;
  commandsZone.insertBefore(newLine, commandLine);
  commandInput.value = "";
};

const handleTerminal = (e) => {
  if (e.code === "Enter") {
    let text = e.target.value;
    createNewLine(text);
    commandLine.classList.add("invisible");
    switch (text) {
      case "fsociety init":
        if (steps === 0) {
          setTimeout(() => {
            createNewLine("creating secure enviroment", false);
            location = "fsociety";
            barId.textContent = `Terminal ${user}@${location}:~`;
            commandLabel.textContent = `${user}@${location}: `;
            steps++;
            commandLine.classList.remove("invisible");
          }, 500);
        } else {
          createNewLine("fsociety enviroment is already active");
          commandLine.classList.remove("invisible");
        }

        break;
      default:
        createNewLine("command not found");
        createNewLine("try some help with command 'fs -help'", false);
        commandLine.classList.remove("invisible");
    }
  }
};

export const initTerminal = () => {
  commandsZone.addEventListener("click", () => {
    commandInput.focus();
  });

  commandInput.addEventListener("keypress", handleTerminal);

  setTimeout(() => {
    createNewLine("Kali Linux - [Versión 10.0.19042.1586]", false);
    setTimeout(() => {
      commandLine.classList.remove("invisible");
    }, 200);
  }, 500);
};
