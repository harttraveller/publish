#past/min 

# Bug

This page documents a quick patch that fixes the functionality for the [vscode-jupytext](https://marketplace.visualstudio.com/items?itemName=congyiwu.vscode-jupytext) VSCode plugin, assuming that the following error is the issue:
```python
jupytext.formats.JupytextFormatError: Format 'percent' is not associated to extension '.md'. Please choose one of: markdown, pandoc, myst.
```
# Solution

The source of the error is in the `formats.py` file in the following directory (may vary slightly on your machine).

`~/.vscode/extensions/congyiwu.vscode-jupytext-0.1.2/python-libs/jupytext/formats.py`

Specifically, with the following function:

```python
def get_format_implementation(ext, format_name=None):
    """Return the implementation for the desired format"""
    # remove pre-extension if any
    ext = "." + ext.split(".")[-1]
    formats_for_extension = []
    for fmt in JUPYTEXT_FORMATS:
        if fmt.extension == ext:
            if fmt.format_name == format_name or not format_name:
                return fmt
            formats_for_extension.append(fmt.format_name)

    if formats_for_extension:
        raise JupytextFormatError(
            "Format '{}' is not associated to extension '{}'. "
            "Please choose one of: {}.".format(
                format_name, ext, ", ".join(formats_for_extension)
            )
        )
    raise JupytextFormatError("No format associated to extension '{}'".format(ext))
```

We can see that this function *should* be returning `fmt` but instead it doesn't, and thus raises the exception.

I looked at the `JUPYTEXT_FORMATS` variable, and the first one is markdown - which is actually the only one I care about.

Accordingly, replacing the above function with the following function seems to fix the error:
```python
def get_format_implementation(ext, format_name=None):
    """Return the markdown format"""
    return JUPYTEXT_FORMATS[0]
```
# Caveats

1. I don't really understand the codebase, the above solution just seemed like it might intuitively work and it did. Pure luck really.
2. The above solution will probably break all other jupytext formats besides markdown (files ending in `.md`) in the VSCode jupytext extension. I haven't checked, but that's my guess.