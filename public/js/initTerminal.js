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

const updateLine = (text, printUser = false) => {
  let lastLine = commandsZone.childNodes[commandsZone.childNodes.length - 3];
  if (printUser) lastLine.textContent = `${user}@${location}: ${text}`;
  else lastLine.textContent = text;
};

const handleTerminal = (e) => {
  if (e.code === "Enter") {
    let text = e.target.value;
    if (/user/.test(text)) {
      user = text.replace(/user /, "").trim();
      commandLabel.textContent = `${user}@${location}: `;
      text = "user";
    }

    createNewLine(text);
    commandLine.classList.add("invisible");
    switch (text) {
      case "fsociety init":
        if (steps === 0) {
          createNewLine("creating secure enviroment...", false);
          setTimeout(() => {
            updateLine("connecting to E-Corp", false);
            setTimeout(() => {
              updateLine("E-corp connected", false);
              createNewLine("---------------", false);
              createNewLine(" ////////", false);
              createNewLine(" //", false);
              createNewLine(" //", false);
              createNewLine(" //////", false);
              createNewLine(" //", false);
              createNewLine(" //", false);
              createNewLine(" ////////", false);
              createNewLine("---------------", false);
              createNewLine("welcome to E-Corp", false);
              location = "e_corp";
              barId.textContent = `Terminal ${user}@${location}:~`;
              commandLabel.textContent = `${user}@${location}: `;
              steps++;
              commandLine.classList.remove("invisible");
            }, 800);
          }, 1000);
        } else {
          createNewLine("fsociety enviroment is already active");
          commandLine.classList.remove("invisible");
        }
        break;
      case "ecorp chat":
        if (steps === 1) {
          setTimeout(() => {
            createNewLine("set your nickmane typing 'user your_name'", false);
            steps++;
            commandLine.classList.remove("invisible");
          }, 800);
        } else if (steps < 1) {
          createNewLine(
            "you are not inside E-corp system. Type 'fsociety init' to start running E-corp",
            false
          );
          commandLine.classList.remove("invisible");
        } else {
          createNewLine("you are already inside E-corp chat", false);
          commandLine.classList.remove("invisible");
        }
        break;
      case "user":
        createNewLine(`your user is ${user}`, false);
        commandLine.classList.remove("invisible");
        break;
      case "help":
        switch (steps) {
          case 0:
            createNewLine("use 'fsociety init' command to hack E Corp", false);
            break;
          case 1:
            createNewLine(
              "type the command 'ecorp chat' to start the ECORP chat",
              false
            );
            break;
          case 2:
            createNewLine("set your nickmane typing 'user yournickname'");
            break;
          default:
            createNewLine("Ecorp help", false);
        }
        commandLine.classList.remove("invisible");
        break;
      default:
        createNewLine("command not found");
        createNewLine("try some help with command 'help'", false);
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
