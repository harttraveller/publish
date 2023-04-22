#future/backlog 

# type
- [[+continuant]]

# link
- [Ontobee: BFO - independent continuant](https://ontobee.org/ontology/BFO?iri=http://purl.obolibrary.org/obo/BFO_0000004)

# note
Formatted excerpts from ontobee are included below.


-   BFO CLIF specification label: IndependentContinuant
-   BFO OWL specification label: ic
-   example of usage: an organism; a leg; a molecule; the bottom right portion of a human torso; a heart; an atom; a chair; the interior of your mouth; a spatial region; an orchestra.
-   has associated axiom(fol): (iff (IndependentContinuant a) (and (Continuant a) (not (exists (b t) (specificallyDependsOnAt a b t))))) // axiom label in BFO2 CLIF: [017-002] ; (forall (x t) (if (IndependentContinuant x) (exists (r) (and (SpatialRegion r) (locatedInAt x r t))))) // axiom label in BFO2 CLIF: [134-001] ; (forall (x t) (if (and (IndependentContinuant x) (existsAt x t)) (exists (y) (and (Entity y) (specificallyDependsOnAt y x t))))) // axiom label in BFO2 CLIF: [018-002]
-   has associated axiom(nl): For every independent continuant b and time t during the region of time spanned by its life, there are entities which s-depends_on b during t. (axiom label in BFO2 Reference: [018-002]); For any independent continuant b and any time t there is some spatial region r such that b is located_in r at t. (axiom label in BFO2 Reference: [134-001])
-   http://www.w3.org/2000/01/rdf-schema#isDefinedBy: [http://purl.obolibrary.org/obo/bfo.owl](http://purl.obolibrary.org/obo/bfo.owl)