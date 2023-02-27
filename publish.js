function checkShortcuts (event) {
  // quick search -> /
  if (event.keyCode == 191) {
    if (quick_search_open) {
      search.blur()
      collapseDirectoryBrowser()
      quick_search_open = false
      return false
    } else {
      expandDirectoryBrowser()
      search.focus()
      search.select()
      quick_search_open = true
      return false
    }
  }
  // local graph -> [
  if (event.keyCode == 219) {
    if (local_graph_open) {
      document.elementFromPoint(0, 0).click()
      local_graph_open = false
      return false
    } else {
      local_graph.click()
      local_graph_open = true
      return false
    }
  }
  // global graph -> ]
  if (event.keyCode == 221) {
    if (global_graph_open) {
      document.elementFromPoint(0, 0).click()
      global_graph_open = false
      return false
    } else {
      global_graph.click()
      global_graph_open = true
      return false
    }
  }
  // return to home page -> :
  if (event.keyCode == 186) {
    window.location.href = 'https://rokosphoenix.com'
  }
}

function isMobile () {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true
  } else {
    return false
  }
}

function expandDirectoryBrowser () {
  nav_view_outer.style.width = '280%'
  nav_view_outer.style.opacity = '1'
  cent_col.style.opacity = '0.05'
  search_view.style.opacity = '1'
}
function collapseDirectoryBrowser () {
  nav_view_outer.style.width = '100%'
  nav_view_outer.style.opacity = '0'
  cent_col.style.opacity = '1'
  search_view.style.opacity = '0'
}

function brightLogo () {
  logo.style.opacity = '1'
  logo.style['max-width'] = '56px'
  logo.style.top = '-13px'
  logo.style['margin-right'] = '12px'
  logo.style['margin-bottom'] = '4px'
}
function dimLogo () {
  logo.style.opacity = '0.4'
  logo.style['max-width'] = '50px'
  logo.style.top = '-10px'
  logo.style.right = '0px'
  logo.style['margin-right'] = '15px'
  logo.style['margin-bottom'] = '10px'
}

function brightHeaderLogo () {
  header_logo.style.opacity = '1'
}
function dimHeaderLogo () {
  header_logo.style.opacity = '0.4'
}

document.onkeydown = checkShortcuts
var search = document.getElementsByClassName('search-bar')[0]
var search_view = document.getElementsByClassName('search-view-outer')[0]
var global_graph = document.getElementsByClassName('graph-global')[0]
var local_graph = document.getElementsByClassName('graph-expand')[0]
var logo = document.getElementsByClassName('site-body-left-column-site-logo')[0]
var header_logo = document.getElementsByClassName('site-header-logo')[0]
var left_col = document.getElementsByClassName('site-body-left-column')[0]
var cent_col = document.getElementsByClassName('site-body-center-column')[0]
var nav_view_outer = document.getElementsByClassName('nav-view-outer')[0]
var nav_view = document.getElementsByClassName('nav-view')[0]
var blocks = document.querySelectorAll('pre')

var quick_search_open = false
var global_graph_open = false
var local_graph_open = false

if (!isMobile()) {
  collapseDirectoryBrowser()
  cent_col.addEventListener('mouseover', collapseDirectoryBrowser, false)
  left_col.addEventListener('mouseover', expandDirectoryBrowser, false)
}

logo.addEventListener('mouseover', brightLogo, false)
logo.addEventListener('mouseout', dimLogo, false)

header_logo.addEventListener('mouseover', brightHeaderLogo, false)
header_logo.addEventListener('mouseout', dimHeaderLogo, false)

logo.onclick = function () {
  window.location.href = 'https://rokosphoenix.com'
}

header_logo.onclick = function () {
  window.location.href = 'https://rokosphoenix.com'
}

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
// in faireness, I don't know javascript, so I'm probably doing something wrong

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
