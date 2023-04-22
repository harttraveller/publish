#future/backlog

# type
- [[+realizable entity]]

# link
- [Ontobee: BFO - disposition](https://ontobee.org/ontology/BFO?iri=http://purl.obolibrary.org/obo/BFO_0000016)

# note
Formatted excerpts from ontobee are included below.

## definition
b is a disposition means: b is a realizable entity & b’s bearer is some material entity & b is such that if it ceases to exist, then its bearer is physically changed, & b’s realization occurs when and because this bearer is in some special physical circumstances, & this realization occurs in virtue of the bearer’s physical make-up.

## examples (of usage)
- certain people have a predisposition to colon cancer
- children are innately disposed to categorize objects in certain ways
- an atom of element X has the disposition to decay to an atom of element Y
- the cell wall is disposed to filter chemicals in endocytosis and exocytosis


## details
Dispositions exist along a strength continuum. Weaker forms of disposition are realized in only a fraction of triggering cases. These forms occur in a significant number of cases of a similar type.


## axioms
### axiom label in BFO2 CLIF: [062-002] 
#### natural language
#todo -> retrieve NL axiom

#### first order logic
```
(forall (x) (if (Disposition x) (and (RealizableEntity x) (exists (y) (and (MaterialEntity y) (bearerOfAt x y t))))))
```
### axiom label in BFO2 CLIF: [063-002]
#### natural language
If b is a realizable entity then for all t at which b exists, b s-depends_on some material entity at t.

#### first order logic
```
(forall (x t) (if (and (RealizableEntity x) (existsAt x t)) (exists (y) (and (MaterialEntity y) (specificallyDepends x y t)))))
```