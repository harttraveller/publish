#past/min 

# Description
This page is a short reference page on the process I use to profile python scripts in VSCode.

# Notes
- Tried to get [austin](https://github.com/P403n1x87/austin) to work a dozen times and just never did for some reason, kept getting errors
- Some good alternative python profilers can be found and compared via the [GitHub Profiling Topic](https://github.com/topics/profiling)

# Details
## Dependencies

- [pyinstrument](https://pyinstrument.readthedocs.io/en/latest/) (python package)
- [command-runner](https://marketplace.visualstudio.com/items?itemName=edonet.vscode-command-runner) (vscode extension)
- vscode html previewer
	- options
		1. [HTML Preview - Analytic Signal Limited](https://marketplace.visualstudio.com/items?itemName=analytic-signal.preview-html)
		2. [HTML Preview - George Oliveira](https://marketplace.visualstudio.com/items?itemName=george-alisson.html-preview-vscode)
	- option 2 is more popular, not sure why though - 1 seems more professional
	- not actually sure what the functional difference is between them


## Process

- Install pyinstrument via pip.
```bash
pip install pyinstrument
```
- Add pyinstrument call via command runner to vscode `settings.json`
```json
"command-runner.terminal.name": "runCommand",
"command-runner.terminal.autoClear": true,
"command-runner.terminal.autoFocus": false,
"command-runner.commands": {
"Profile Python": "pyinstrument -o ${file}.html ${file}"
}
```
- Add keyboard shortcut to run command to vscode `keybindings.json`
- Customize keybinding and terminal settings appropriately
```json
{
    "key": "f8",
    "command": "command-runner.run",
    "args": {
      "command": "Profile Python",
      "terminal": {
        "autoClear": true,
        "autoFocus": false
      }
    }
  }
```

# Result
## Example Script

- press `F8` while in `test.py`
```python
import time

def function():
    for i in range(10_000):
        time.sleep(0.0001)

if __name__ == "__main__":
    function()
```

## Result
- `test.py.html` appears in adjacent folder after profiling
- output looks like:

![[pyinstrument example output.png]]