#active 

# edge
- type: [[= yield.internal.rsrc.object + regex snippet]]
- area: [[~regex]]

# text
```regex
[\n ](?=[^\n ])|(?<=[^\n ])[\n ]|\.$|\?$|\.[A-Za-z0-9]|\/[A-Za-z0-9]
```