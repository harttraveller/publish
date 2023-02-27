## References
- [Copy-button for code blocks · Issue #1754 · gollum/gollum · GitHub](https://github.com/gollum/gollum/issues/1754)
- [Add a 'copy code to clipboard' button to your blog's code blocks](https://www.roboleary.net/2022/01/13/copy-code-to-clipboard-blog.html)

## CSS

CSS for `publish.css` file.

```css
pre[class*="language-"] button {
    position: absolute;
    top: 5px;
    right: 5px;
    opacity: 1;
}

.markdown-rendered button.copy-code-button {
    background-color: transparent;
    padding: 5px 5px 7px 5px;
    transition: 0.2s;
}

.markdown-rendered pre:not(:hover)>button.copy-code-button {
    display: block;
}

.markdown-rendered button.copy-code-button:hover {
    transition: 0.2s;
}
```
## Javascript

JS for `publish.js` file.

```javascript
const svgCopy =
  '<svg aria-hidden="true" height="12" viewBox="1 -2 12 18" version="1.1" width="18" data-view-component="true"><path fill-rule="evenodd" fill = "rgb(200, 200, 200)" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" fill = "rgb(200, 200, 200)" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>'
const svgCheck =
  '<svg aria-hidden="true" height="12" viewBox="1 -2 12 18" version="1.1" width="18" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>'

function addCopyButton (block) {
  // create the copy button
  let button = document.createElement('button')
  button.classList.add('copy-code-button')
  button.className = 'copy-code-button'
  button.type = 'button'
  button.innerHTML = svgCopy
  // append the button to the code block
  block.parentNode.insertBefore(button, block.nextSibling)

  // add the copy event listener
  button.addEventListener('click', function () {
    copyCodeToClipboard(block.textContent, button)
  })
}

function copyCodeToClipboard (code, button) {
  navigator.clipboard
    .writeText(code)
    .then(function () {
      console.log('Copied to clipboard: ' + code)
      button.blur()
      button.innerHTML = svgCheck
      setTimeout(function () {
        button.innerHTML = svgCopy
      }, 2000)
    })
    .catch(function (error) {
      console.error('Failed to copy code: ', error)
    })
}

// check if there are code blocks on the page every 100ms
// Have to continuously rerun this, even though it's inefficient, don't know why but it doesn't work otherwise
// waiting for the dom or page to load don't work
// in fairness, I don't know javascript, so I'm probably doing something wrong

setInterval(function () {
  document.querySelectorAll('pre code').forEach(block => {
    // if the next sibling is null or not a copy button, add a copy button
    if (
      !block.nextSibling ||
      block.nextSibling.className != 'copy-code-button'
    ) {
      addCopyButton(block)
    }
  })
}, 100)

```