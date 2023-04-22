#future/backlog 

# type
- [[+material entity]]

# link
- [Ontobee: BFO - fiat object part](https://ontobee.org/ontology/BFO?iri=http://purl.obolibrary.org/obo/BFO_0000024)

# note
Formatted excerpts from ontobee are included below.

## definition
b is a fiat object part = Def. b is a material entity which is such that for all times t, if b exists at t then there is some object c such that b proper continuant_part of c at t and c is demarcated from the remainder of c by a two-dimensional continuant fiat boundary.

## examples (of usage)
- the upper and lower lobes of the left lung
- the Western hemisphere of the Earth
- regional parts of an intact human body

## details
Most examples of fiat object parts are associated with theoretically drawn divisions or with divisions drawn by cognitive subjects for practical reasons, such as the division of a cake (before slicing) into (what will become) slices (and thus member parts of an object aggregate). However, this does not mean that fiat object parts are dependent for their existence on divisions or delineations effected by cognitive subjects. If, for example, it is correct to conceive geological layers of the Earth as fiat object parts of the Earth, then even though these layers were first delineated in recent times, still existed long before such delineation and what holds of these layers (for example that the oldest layers are also the lowest layers) did not begin to hold because of our acts of delineation.

Examples viewed by some as problematic cases for the trichotomy of fiat object part, object, and object aggregate include: a mussel on (and attached to) a rock, a slime mold, a pizza, a cloud, a galaxy, a railway train with engine and multiple carriages, a clonal stand of quaking aspen, a bacterial community (biofilm), a broken femur. Note that, as Aristotle already clearly recognized, such problematic cases – which lie at or near the penumbra of instances defined by the categories in question – need not invalidate these categories. The existence of grey objects does not prove that there are not objects which are black and objects which are white.

The existence of mules does not prove that there are not objects which are donkeys and objects which are horses. It does, however, show that the examples in question need to be addressed carefully in order to show how they can be fitted into the proposed scheme, for example by recognizing additional subdivisions; the division of the planet into hemispheres; the division of the brain into regions; the dorsal and ventral surfaces of the body, and so on.


## axioms
### axiom label in BFO2 CLIF: [027-004]
#### first order logic
```
(forall (x) (if (FiatObjectPart x) (and (MaterialEntity x) (forall (t) (if (existsAt x t) (exists (y) (and (Object y) (properContinuantPartOfAt x y t))))))))
```


