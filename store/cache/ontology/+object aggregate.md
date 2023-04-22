- isa: [[+material entity]]

# note
Formatted excerpts from ontobee are included below.

-   editor note: An entity a is an object aggregate if and only if there is a mutually exhaustive and pairwise disjoint partition of a into objects
-   editor note: BFO 2 Reference: object aggregates may gain and lose parts while remaining numerically identical (one and the same individual) over time. This holds both for aggregates whose membership is determined naturally (the aggregate of cells in your body) and aggregates determined by fiat (a baseball team, a congressional committee).
-   BFO CLIF specification label: ObjectAggregate
-   BFO OWL specification label: object-aggregate
-   definition source: ISBN:978-3-938793-98-5pp124-158#Thomas Bittner and Barry Smith, 'A Theory of Granular Partitions', in K. Munn and B. Smith (eds.), Applied Ontology: An Introduction, Frankfurt/Lancaster: ontos, 2008, 125-158.
-   elucidation: b is an object aggregate means: b is a material entity consisting exactly of a plurality of objects as member_parts at all times at which b exists. (axiom label in BFO2 Reference: [025-004])
-   example of usage: your collection of Meissen ceramic plates.; the aggregate of blood cells in your body; an organization is an aggregate whose member parts have roles of specific types (for example in a jazz band, a chess club, a football team); a symphony orchestra; the aggregate of bearings in a constant velocity axle joint; the restaurants in Palo Alto; defined via attributive delimitations such as: the patients in this hospital; a swarm of bees is an aggregate of members who are linked together through natural bonds; a collection of cells in a blood biobank.; defined by fiat: the aggregate of members of an organization; the nitrogen atoms in the atmosphere; defined through physical attachment: the aggregate of atoms in a lump of granite; defined through physical containment: the aggregate of molecules of carbon dioxide in a sealed container
-   has associated axiom(fol): (forall (x) (if (ObjectAggregate x) (and (MaterialEntity x) (forall (t) (if (existsAt x t) (exists (y z) (and (Object y) (Object z) (memberPartOfAt y x t) (memberPartOfAt z x t) (not (= y z)))))) (not (exists (w t_1) (and (memberPartOfAt w x t_1) (not (Object w)))))))) // axiom label in BFO2 CLIF: [025-004]
-   http://www.w3.org/2000/01/rdf-schema#isDefinedBy: [http://purl.obolibrary.org/obo/bfo.owl](http://purl.obolibrary.org/obo/bfo.owl)