# Debugging Node with VS Code

Debug node code directly from your editor!

## Alternatives

* `console.log` everywhere.
* `--debug` mode.
* node-inspector.

## Do it

* Configure debugger in launch.json.
  * When using NVM, specify path to runtime executable.
  * Specify the `run` command.

* Hit fn + F5 to launch the debugger.

* Working Pane has all the functionality you would expect.
  * Variables, in all their contexts.
  * Variable watches.
  * Call stack.
  * List of breakpoints.

* Using chrome debugger extension.
  * Configure a `launch` configuration with a path to an html file.
  * Include the cwd property (not documented).

