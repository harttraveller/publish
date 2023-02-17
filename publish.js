// Don't know JS, this code was monkeypatched together.


function quickSearch() {
    left_col.style.width = '25%'
    search_view.style.opacity = '1'
    search_view.style.top = '0px'
    logo.style.left = '15px'
    search.focus()
    search.select()
    search_view.style.margin = '0px 0px 5px 45px'
}

function directoryBrowser() {
    left_col.style.width = '100%'
    left_col.style['background-color'] = 'rgba(0, 0, 0, 1)'
    nav_view.style.opacity = '1'
    logo.style.left = '15px'
}

function collapseLeftSidebar() {
    left_col.style.width = '3%'
    left_col.style['background-color'] = 'rgba(0, 0, 0, 0)'
    search_view.style.opacity = '0'
    nav_view.style.opacity = '0'
    logo.style.opacity = '0.5'
    logo.style.left = '15px'
    search_view.style.margin = '0px 0px 5px 45px'
    search_view.style.top = '20px'
    search.blur()
}


function expandRightSidebar() {
    right_col.style.width = '30%'
    outline_view.style.opacity = "1"
}

function collapseRightSidebar() {
    right_col.style.width = '4%'
    outline_view.style.opacity = "0"

}

function brightLogo() {
    logo.style.opacity = '1'
    logo.style['max-width'] = '40px'
    logo.style.top = '25px'
    logo.style.left = '10px'
}

function dimLogo() {
    logo.style.opacity = '0.5'
    logo.style['max-width'] = '30px'
    logo.style.top = '30px'
    logo.style.left = '15px'
}

function brightGitHubLogo() {
    github_logo.style.opacity = '0.8'
    github_logo.style.width = '31px'
    github_logo.style.top = '67px'
    github_logo.style.left = '14px'
}

function dimGitHubLogo() {
    github_logo.style.opacity = '0.25'
    github_logo.style.width = '25px'
    github_logo.style.top = '70px'
    github_logo.style.left = '17px'
}


function checkShortcuts(event) {
    if (event.shiftKey) {
        // key -> '
        if (event.keyCode == 222) {
            if (table_contents_open) {
                collapseRightSidebar()
                table_contents_open = false
                return false
            } else {
                expandRightSidebar()
                table_contents_open = true
                return false
            }
        }
        //key -> ;
        if (event.keyCode == 186) {
            if (directory_browser_open) {
                collapseLeftSidebar()
                directory_browser_open = false
                return false
            } else {
                directoryBrowser()
                directory_browser_open = true
                return false
            }
        }
        // key -> /
        if (event.keyCode == 191) {
            if (quick_search_open) {
                collapseLeftSidebar()
                quick_search_open = false
                return false
            } else {
                quickSearch()
                quick_search_open = true
                return false
            }
        }
        // key -> .
        if (event.keyCode == 190) {
            if (local_graph_open) {
                document.elementFromPoint(0, 0).click();
                local_graph_open = false
                return false
            } else {
                local_graph.click()
                local_graph_open = true
                return false
            }
        }
        // key -> ,
        if (event.keyCode == 188) {
            if (global_graph_open) {
                document.elementFromPoint(0, 0).click();
                global_graph_open = false
                return false
            } else {
                global_graph.click()
                global_graph_open = true
                return false
            }
        }
    }

}

// shortcut check

document.onkeydown = checkShortcuts

// getting elements
var directory_browser_open = false
var quick_search_open = false
var global_graph_open = false
var local_graph_open = false
var table_contents_open = false
var left_col = document.getElementsByClassName('site-body-left-column')[0]
var cent_col = document.getElementsByClassName('site-body-center-column')[0]
var search = document.getElementsByClassName('search-bar')[0]
var search_view = document.getElementsByClassName('search-view-outer')[0]
var logo = document.getElementsByClassName('site-body-left-column-site-logo')[0]
var right_col = document.getElementsByClassName('site-body-right-column')[0]
var nav_view = document.getElementsByClassName('nav-view-outer')[0]
var global_graph = document.getElementsByClassName("graph-global")[0]
var local_graph = document.getElementsByClassName("graph-expand")[0]
var outline_view = document.getElementsByClassName("outline-view-outer")[0]


// setting sidebar graphics

var github_logo = document.createElement('img')
github_logo.src =
    'https://raw.githubusercontent.com/harttraveller/stochasticintelligence/main/asset/logo/github-logo.png'
github_logo.style.width = '25px'
github_logo.style.opacity = '0.25'
github_logo.style.left = '17px'
github_logo.style.top = '70px'
github_logo.style.position = 'absolute'
github_logo.style.transition = '0.3s'
left_col.append(github_logo)


// event listeners

logo.addEventListener('mouseover', brightLogo, false)
logo.addEventListener('mouseout', dimLogo, false)
right_col.addEventListener('mouseover', expandRightSidebar, false)


github_logo.addEventListener('mouseover', brightGitHubLogo, false)
github_logo.addEventListener('mouseout', dimGitHubLogo, false)


cent_col.addEventListener('mouseover', collapseLeftSidebar, false)
cent_col.addEventListener('mouseover', collapseRightSidebar, false)

// sidebar graphics click hrefs

logo.onclick = function () {
    window.location.href = 'https://stochasticintelligence.com'
};

github_logo.onclick = function () {
    window.location.href =
        'https://github.com/harttraveller/stochasticintelligence'
}


