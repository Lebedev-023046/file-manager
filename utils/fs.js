import { sayCurrPath } from "../helper.js";

function up() {
  process.chdir("../");
  sayCurrPath();
}

function cd(path) {
  try {
    process.chdir(path);
    sayCurrPath();
  } catch (error) {
    console.log("Operation failed");
  }
}

export { up, cd };
