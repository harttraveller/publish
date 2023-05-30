---
jupyter:
  jupytext:
    cell_metadata_filter: -all
    custom_cell_magics: kql
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.11.2
  kernelspec:
    display_name: base
    language: python
    name: python3
---

#notebook #present/min 

# Link
- [Collatz conjecture - Wikiwand](https://www.wikiwand.com/en/Collatz_conjecture)
- [Collatz Conjecture - Veritasium - YouTube](https://www.youtube.com/watch?v=094y1Z2wpJg)

# Edge
- issue - explore: [[query > given one can't learn everything about reality, how should one filter what is and isn't worth learning?]]

# Target
- weakly fulfills: [[+ target.abstract > learn about reality]]



# Notebook

**Problem Description**

> Consider the following operation on an arbitrary positive integer:
> - If the number is even, divide it by two.
> - If the number is odd, triple it and add one.
>
> Now form a sequence by performing this operation repeatedly, beginning with any positive integer, and taking the result at each step as the input at the next. The Collatz conjecture is: This process will eventually reach the number 1, regardless of which positive integer is chosen initially.

[source](https://www.wikiwand.com/en/Collatz_conjecture)

**Objective**

- [ ] Find a case where the process doesn't reach 1


## Running the basic classical game


Resource functions to simplify

```python
def half(x: int) -> int:
    return int(x/2)

def mult(x: int) -> int:
    return (3*x) + 1

def even(x: int) -> int:
    return x%2 == 0
```

Game function

```python
def game(X: int) -> list[int]:
    """X: number to start game from"""
    arr = [X]
    if X <= 1:
        return arr
    while arr[-1] != 1:
       if even(arr[-1]):
           arr.append(half(arr[-1]))
       else:
           arr.append(mult(arr[-1]))
    return arr
```

```python
game(15)
```

<!-- #region -->
```python
> [15, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
```
<!-- #endregion -->

## Bottom up approach

Instead of starting at a given number, try running the game from the ground up.

- Given some number, what are the numbers that could have led to that number given the original run
- try:
  - Put on graph?
  - Run a few billion loops?
  - Check to see if there is a loop somewhere on the graph that isn't 4, 2, 1?
- issue:
  - not going to be able to brute force a solution, given space already explored
    - let alone in python!
  - still, may be interesting to see if there are ways to optimize the above process and treat it as an optimization problem



```python
def source_integers(X: int) -> tuple[int | None]:
    """
    X: integer
    returns: tuple[int | None]

    tuple[0] = X * 2
    the number that X would've come from if it was divided by 2

    tuple[1]
    the number that X would've come from if it was multiplied by 3, and 1 was added

    both numbers are potential source numbers for X
    """
    if X == 1:
        return 2, None
    fmul = (X-1)/3
    fdiv = X*2
    # if x is not a decimal, then it fits
    if fmul%1 == 0:
        return int(fdiv), int(fmul)
    else:
        return int(fdiv), None
```

```python
def source_integers(X: int) -> set[int]:
    """
    mod previous function, just return set of potential source integers
    """
    if X == 1:
        return {2}
    fmul = (X-1)/3
    fdiv = X*2
    # if x is not a decimal, then it fits
    if fmul%1 == 0:
        return {int(fdiv), int(fmul)}
    else:
        return {int(fdiv)}
```



```python
import rustworkx as rx
from rustworkx.visualization import mpl_draw
```

~~Potential way to check - use directed acyclic graph and just enforce that there are no cycles, but don't include loop at 4, 2, 1?~~
Nope, wouldn't work for this.

Track nums occurred in set, so seen nums aren't added.

```python
def explore(n: int) -> rx.PyDiGraph:
    graph = rx.PyDiGraph()
    index = dict()
    targets = {1}
    for _ in range(n):
        novel = set()
        for target in targets:
            if target not in index.keys():
                index[target] = graph.add_node(target)
            sources = source_integers(target)
            # print(sources, target)
            for source in sources:
                if source not in index.keys():
                    index[source] = graph.add_node(source)
                    novel.add(source)
                if not graph.has_edge(index[target], index[source]):
                    graph.add_edge(index[target], index[source], None)
            # print(sources, target)
        targets.update(novel)
        # print()
    return graph
```

```python
graph = explore(14)
```

```python
from pyvis.network import Network
import networkx as nx


def convert_rustworkx_to_networkx(graph):
    """Convert a rustworkx PyGraph or PyDiGraph to a networkx graph."""
    edge_list = [(
        graph[x[0]], graph[x[1]],
        {'weight': x[2]}) for x in graph.weighted_edge_list()]

    if isinstance(graph, rx.PyGraph):
        if graph.multigraph:
            return nx.MultiGraph(edge_list)
        else:
            return nx.Graph(edge_list)
    else:
        if graph.multigraph:
            return nx.MultiDiGraph(edge_list)
        else:
            return nx.DiGraph(edge_list)
```

```python
nx_graph = convert_rustworkx_to_networkx(graph)
```

```python
for node in nx_graph.nodes(data=True):
  node[1]['label']=str(node[0])
```

```python
# options = {
#             "autoResize": True,
#             "nodes": {
#                 "scaling": {
#                     "min": 10,
#                     "max": 30
#                 }
#             },
#             "interaction": {
#                 "tooltipDelay": 200
#             },
#             "physics": {
#                 "solver": 'barnesHut',
#                 "barnesHut": {
#                     "gravitationalConstant": -8000,
#                     "springConstant": 0.04,
#                     "springLength": 95
#                 },
#                 "adaptiveTimestep": True,
#                 "stabilization": {
#                     "iterations": 987,
#                     "updateInterval": 100
#                 }
#             },
#             "layout": {
#                 "improvedLayout": False,
#                 "randomSeed": 191006
#             },
#             "width": '100%',
#             "height": '100%'
#         }

options = {
    "physics": {
        "forceAtlas2Based": {
            "gravitationalConstant": -17,
            "centralGravity": 0.005,
            "springLength": 0,
            "springConstant": 1.2,
            "damping": 0.47
            },
        "minVelocity": 0.75,
        "solver": "forceAtlas2Based"
        },
        "layout": {
                "improvedLayout": False,
                "randomSeed": 191006,
                # "hierarchical": {
                #     "enabled": True
                # }
        }
    }

```

```python
import json
```

```python
nt = Network(height="600px", width="600px", bgcolor="#000", font_color="#FFF", directed=True)
nt.from_nx(nx_graph)
nt.set_options(json.dumps(options))
# nt.show_buttons(filter_=['physics'])
# nt.toggle_physics(False)
# nt.save_graph("../asset/user/unsorted/nt.html")
nt.save_graph("../asset/repo/internal/collatz-conjecture-bottomup-graph-14.html")
# nt.generate_html("../asset/user/unsorted/nt.html")
```

- Now an interesting question, what are the numbers which don't actually appear?
- Note: explore different between growth in edges and growth in nodes?

```python
graph = explore(50)
```

```python
len(graph.nodes()), len(graph.edges())
```

```python
nodelist = graph.nodes()
```

```python
nodelist.sort()
```

query > how does the sparsity of numbers change?

```python
max(nodelist)
```

```python
fig
```

```python

```

```python

```

```python

```
