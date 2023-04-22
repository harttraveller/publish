#future/backlog

# type
- [[+entity]]

# link
- [Ontobee: BFO - continuant](https://ontobee.org/ontology/BFO?iri=http://purl.obolibrary.org/obo/BFO_0000002)

# note
Formatted excerpts from ontobee are included below.

## definition
A continuant is an entity that persists, endures, or continues to exist through time while maintaining its identity.

## examples
#todo

## details
Continuant entities are entities which can be sliced to yield parts only along the spatial dimension, yielding for example the parts of your table which we call its legs, its top, its nails. 

My desk stretches from the window to the door. It has spatial parts, and can be sliced (in space) in two. With respect to time, however, a thing is a continuant

Continuant doesn't have a closure axiom because the subclasses don't necessarily exhaust all possibilities. For example, in an expansion involving bringing in some of Ceuster's other portions of reality, questions are raised as to whether universals are continuants.

## axiom
### axiom label in BFO2 CLIF: [008-002]
#### natural language
#todo

#### first order logic
```
(forall (x)(if (Continuant x) (Entity x)))
```
### axiom label in BFO2 CLIF: [011-002]
#### natural language
if b is a material entity, then there is some temporal interval (referred to below as a one-dimensional temporal region) during which b exists.

#### first order logic
```
(forall (x) (if (Material Entity x) (exists (t) (and (TemporalRegion t) (existsAt x t)))))
```
### axiom label in BFO2 CLIF: [126-001]
#### natural language
if b is a continuant and if, for some t, c has_continuant_part b at t, then c is a continuant. 

#### first order logic
```
(forall (x y) (if (and (Continuant x) (exists (t) (hasContinuantPartOfAt y x t))) (Continuant y)))
```
### axiom label in BFO2 CLIF: [009-002]
#### natural language
if b is a continuant and if, for some t, cis continuant_part of b at t, then c is a continuant

#### first order logic
```
(forall (x y) (if (and (Continuant x) (exists (t) (continuantPartOfAt y x t))) (Continuant y)))
```
