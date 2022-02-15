import { spawn, spawnSync } from "child_process";

function Shell() {}

Shell.prototype.run = function (...Commands: string[]) {
  Commands.forEach((eachNames) => {
    const CommandData = eachNames.split(" ");
    const CommandToRun = CommandData[0]; // the command to run
    CommandData.shift(); // remove the run command
    spawn(CommandToRun, CommandData, {
      shell: true,
      stdio: "inherit"
    });
  });
  return this;
};

function newCommand(CommandName: string) {
  Shell.prototype[CommandName] = function (CommandArgs: string) {
    const CommandData = CommandArgs.split(" ");
    spawn(CommandName, CommandData, { shell: true, stdio: "inherit" });
  };
  return { newCommand };
}

module.exports = { newCommand, Shell };
