// function checkShortcuts(event) {
//     // quick search -> /
//     if (event.keyCode == 191) {
//         if (quick_search_open) {
//             search.blur()
//             quick_search_open = false
//             left_col.style.opacity = 0;
//             return false
//         } else {

//             search.focus()
//             search.select()
//             quick_search_open = true
//             return false
//         }
//     }

// }

// document.onkeydown = checkShortcuts
// var search = document.getElementsByClassName('search-bar')[0]
// var quick_search_open = false


// function dimLeftSidebar() {

// }




// function checkShortcuts(event) {
//     // table of contents -> ]
//     if (event.keyCode == 221) {
//         if (table_contents_open) {
//             collapseRightSidebar()
//             table_contents_open = false
//             return false
//         } else {
//             expandRightSidebar()
//             table_contents_open = true
//             return false
//         }
//     }
//     // directory browser -> [
//     if (event.keyCode == 219) {
//         if (directory_browser_open) {
//             collapseLeftSidebar()
//             directory_browser_open = false
//             return false
//         } else {
//             directoryBrowser()
//             directory_browser_open = true
//             return false
//         }
//     }
//     // quick search -> /
//     if (event.keyCode == 191) {
//         if (quick_search_open) {
//             collapseLeftSidebar()
//             quick_search_open = false
//             return false
//         } else {
//             quickSearch()
//             quick_search_open = true
//             return false
//         }
//     }
//     // local graph -> -
//     if (event.keyCode == 189) {
//         if (local_graph_open) {
//             document.elementFromPoint(0, 0).click();
//             local_graph_open = false
//             return false
//         } else {
//             local_graph.click()
//             local_graph_open = true
//             return false
//         }
//     }
//     // global graph -> +
//     if (event.keyCode == 187) {
//         if (global_graph_open) {
//             document.elementFromPoint(0, 0).click();
//             global_graph_open = false
//             return false
//         } else {
//             global_graph.click()
//             global_graph_open = true
//             return false
//         }
//     }
//     // return to home page -> ~
//     if (event.keyCode == 192) {
//         window.location.href = 'https://rokosphoenix.com'
//     }

// }

// // shortcut check

// document.onkeydown = checkShortcuts

// // getting elements
// var directory_browser_open = false
// var quick_search_open = false
// var global_graph_open = false
// var local_graph_open = false
// var table_contents_open = false
// var left_col = document.getElementsByClassName('site-body-left-column')[0]
// var cent_col = document.getElementsByClassName('site-body-center-column')[0]
// var search = document.getElementsByClassName('search-bar')[0]
// var search_view = document.getElementsByClassName('search-view-outer')[0]
// var right_col = document.getElementsByClassName('site-body-right-column')[0]
// var nav_view = document.getElementsByClassName('nav-view-outer')[0]
// var global_graph = document.getElementsByClassName("graph-global")[0]
// var local_graph = document.getElementsByClassName("graph-expand")[0]
// var outline_view = document.getElementsByClassName("outline-view-outer")[0]


// // setting sidebar graphics

// var github_logo = document.createElement('img')
// github_logo.src =
//     'https://raw.githubusercontent.com/harttraveller/rokosphoenix/main/asset/website/github.png'
// github_logo.style.width = '25px'
// github_logo.style.opacity = '0.5'
// github_logo.style.left = '17px'
// github_logo.style.top = '76px'
// github_logo.style.position = 'absolute'
// github_logo.style.transition = '0.3s'
// left_col.append(github_logo)


// // event listeners






// // sidebar graphics click hrefs



// github_logo.onclick = function () {
//     window.location.href =
//         'https://github.com/harttraveller/rokosphoenix'
// }


