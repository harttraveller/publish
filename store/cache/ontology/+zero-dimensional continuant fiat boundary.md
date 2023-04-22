- isa: [[+continuant fiat boundary]]

# note
Formatted excerpts from ontobee are included below.

-   editor note: zero dimension continuant fiat boundaries are not spatial points. Considering the example 'the quadripoint where the boundaries of Colorado, Utah, New Mexico, and Arizona meet' : There are many frames in which that point is zooming through many points in space. Whereas, no matter what the frame, the quadripoint is always in the same relation to the boundaries of Colorado, Utah, New Mexico, and Arizona.
-   BFO CLIF specification label: ZeroDimensionalContinuantFiatBoundary
-   BFO OWL specification label: 0d-cf-boundary
-   elucidation: a zero-dimensional continuant fiat boundary is a fiat point whose location is defined in relation to some material entity. (axiom label in BFO2 Reference: [031-001])
-   example of usage: the quadripoint where the boundaries of Colorado, Utah, New Mexico, and Arizona meet; the point of origin of some spatial coordinate system.; the geographic North Pole
-   has associated axiom(fol): (iff (ZeroDimensionalContinuantFiatBoundary a) (and (ContinuantFiatBoundary a) (exists (b) (and (ZeroDimensionalSpatialRegion b) (forall (t) (locatedInAt a b t)))))) // axiom label in BFO2 CLIF: [031-001]
-   http://www.w3.org/2000/01/rdf-schema#isDefinedBy: [http://purl.obolibrary.org/obo/bfo.owl](http://purl.obolibrary.org/obo/bfo.owl)