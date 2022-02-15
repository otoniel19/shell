# shell

- usage

```js
const { newCommand, Shell } = require("@otoniel19/shell");

const RunShell = new Shell();
newCommand("ls").newCommand("echo");

RunShell.ls("-a");
RunShell.echo("OK");
```
