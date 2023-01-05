import { createInterface } from "readline";
import { homedir } from "os";
import { sayCurrPath, sayHello } from "./helper.js";
import { cd, up } from "./utils/fs.js";
const rl = createInterface(process.stdin, process.stdout);

const name = process.argv.at(-1).split("=")[1];
const homePath = homedir();

process.chdir(homePath);
sayHello(name);
sayCurrPath();

rl.on("SIGINT", () => {
  console.log(`\nThank you for using File Manager, ${name}, goodbye!`);
  rl.close();
});

function promptInput(prompt, handler) {
  rl.question(prompt, (input) => {
    if (handler(input) !== false) {
      promptInput(prompt, handler);
    } else {
      rl.close();
    }
  });
}

promptInput("fileManager> ", async (input) => {
  const userInput = input.replace(/ +/g, " ").trim().split(" ");
  const mainCommand = userInput[0];
  const commandParams = userInput.length > 1 ? userInput.splice(1) : "";

  switch (true) {
    case mainCommand === "up" && commandParams.length === 0:
      up();
      break;
    case mainCommand === "cd" && commandParams.length === 1:
      cd(commandParams[0]);
      break;
    case mainCommand === "exit":
      console.log("Bye!");
      return false;
    default:
      console.log("Invalid input");
  }
});
