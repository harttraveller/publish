function checkShortcuts(event) {
    // quick search -> /
    if (event.keyCode == 191) {
        if (quick_search_open) {
            search.blur()
            quick_search_open = false
            left_col.style.opacity = 0;
            return false
        } else {

            search.focus()
            search.select()
            quick_search_open = true
            return false
        }
    }
    // local graph -> [
    if (event.keyCode == 219) {
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
    // global graph -> ]
    if (event.keyCode == 221) {
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
    // return to home page -> :
    if (event.keyCode == 186) {
        window.location.href = 'https://rokosphoenix.com'
    }

}

document.onkeydown = checkShortcuts
var search = document.getElementsByClassName('search-bar')[0]
var quick_search_open = false
var global_graph = document.getElementsByClassName("graph-global")[0]
var global_graph_open = false
var local_graph = document.getElementsByClassName("graph-expand")[0]
var local_graph_open = false
