#internal/output
#reference 

# edge
- 
- type: [[= yield.internal.rsrc.object + css snippet]]
- area: [[style sheet language > css]]
- area: [[? > obsidian custom styling]]
- related: [[regex snippet > obsidian jump to link plugin]]
- used for: [[obsidian plugin > jump to link]]

# main
```css
.jl.popover {
    background: rgba(0, 0, 0, 0.7);
    border-width: 0px;
    font-size: 8px;
    line-height: 0px;
    color: rgb(0, 255, 0);
    padding: 0px 0px;
}
```

# note
## purpose
This css snippet makes the text waypoint popovers for cursor navigation less obtrusive.

## example
### before
![[css-snippet-obsidian-jump-to-link-before.png|300]]

### after
![[css-snippet-obsidian-jump-to-link-after.png|300]]