#future/backlog

# type
- [[+material entity]]

# link
- [Ontobee: BFO - continuant fiat boundary](https://ontobee.org/ontology/BFO?iri=http://purl.obolibrary.org/obo/BFO_0000140)

# note
Formatted excerpts from ontobee are included below.

## definition
A continuant fiat boundary is a boundary of some material entity, or it is a boundary of some immaterial entity.

## examples
- the plane separating the Northern and Southern hemispheres
- the North Pole
- some portion of airspace

## details
Continuant fiat boundary doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilities. An example would be the mereological sum of two-dimensional continuant fiat boundary and a one dimensional continuant fiat boundary that doesn't overlap it. The situation is analogous to temporal and spatial regions.

In BFO 1.1 the assumption was made that the external surface of a material entity such as a cell could be treated as if it were a boundary in the mathematical sense. The new document propounds the view that when we talk about external surfaces of material objects in this way then we are talking about something fiat. To be dealt with in a future version: fiat boundaries at different levels of granularity.

More generally, the focus in discussion of boundaries in BFO 2.0 is now on fiat boundaries, which means: boundaries for which there is no assumption that they coincide with physical discontinuities. The ontology of boundaries becomes more closely allied with the ontology of regions.

## axioms
### axiom label in BFO2 CLIF: [029-001]
#### natural language
#todo -> find NL axiom

#### first order logic
```
(iff (ContinuantFiatBoundary a) (and (ImmaterialEntity a) (exists (b) (and (or (ZeroDimensionalSpatialRegion b) (OneDimensionalSpatialRegion b) (TwoDimensionalSpatialRegion b)) (forall (t) (locatedInAt a b t)))) (not (exists (c t) (and (SpatialRegion c) (continuantPartOfAt c a t))))))
```

### unknown axiom label
#todo -> find axiom label
#### natural language
Every continuant fiat boundary is located at some spatial region at every time at which it exists

#### first order logic
#todo -> find FOL axiom