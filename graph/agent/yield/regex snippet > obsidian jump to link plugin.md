#active 

# edge
- type: [[= yield.internal.info.record + regex snippet]]
- area: [[~regex]]

# text
```regex
[\n ](?=[^\n ])|(?<=[^\n ])[\n ]|\.$|\?$|\.[A-Za-z0-9]|\/[A-Za-z0-9]
```