#backlog 

Consider the following article by studysmarter: [Nuclear Weapons in Pakistan](https://www.studysmarter.us/explanations/geography/superpowers-of-the-world/nuclear-weapons-in-pakistan)

To illustrate, we'll take the following excerpts from the article.

> Pakistan has a stockpile of approximately 160 warheads in 2021, making it the sixth largest nuclear arsenal. Pakistan is actively developing nuclear weapons, but it is difficult to estimate current and future numbers, as the Pakistani government has not disclosed any information about current production capacities. Pakistan may also have tactile weapons, but these are not subject to any treaty limits.

> Furthermore, Pakistan has the components for producing further warheads:
> - Stockpiles of highly enriched uranium to produce more warheads. The Khan Research laboratories at the Khushab facility can increase uranium production.
> - Stockpiles of weapons-grade plutonium. The Chashma reprocessing plant is capable of expanding Pakistan’s plutonium production.

We'll add some information from [ican](https://www.icanw.org/india) as well:

> India possesses approximately 164 nuclear weapons, which it can launch from missiles and, most likely, aircraft. It may also be able to launch them from submarines. India conducted a total of three nuclear tests in 1974 and 1998.

To begin, we'll only consider the following statements:

1. Pakistan possesses 160 warheads.
2. India possesses 164 warheads.

Suppose we wanted to start representing this information on the graph. We might say that our goal is to create a complete representation (all information from language is on graph), while still having the graph "evaluate" to being true.

We might start with the following statement.

![[01-seregraph-explore-basic-relation.svg]]

This is true, but how do we add the number of nuclear warheads does Pakistan possess? And how to contrast that to India? We start to run into issues here, as if we now add India, we need to begin increasing the complexity. There are a few approaches, but suppose that one of our goals is to *universally avoid* using properties like this:
![[02-seregraph-explore-add-quantity.svg]]
And instead ensure everything exists on the graph.

![[03-seregraph-explore-potential-approaches-classical-graph.svg]]
And we've already run into a problem. Actually a number of problems.

First - unaddressed earlier - what does "possesses" mean? And how do we differentiate the use of "possesses" here from other places it would be used.

The glaring problem with the prior graph is that if we want to get the number of nuclear weapons possessed by Pakistan from the graph, we now can't. We've added the count information, but not the ownership information.

We could attempt to resolve this by say:
- creating a node called -> (A) nuclear warheads possessed by Pakistan
- creating a node called -> (B) nuclear warheads possessed by India
- (C) adding a property to each called count with the respective count OR
- (D) linking each with a count edge type to an integer value

The issue is, now (A) is a very specific node; it will only be used once. The problem with that is, we need to *know* the node exists beforehand if we are querying the graph, in order to try and find the value we are looking for, which may work if we know the node name and the parameter we are looking for, but
- if we don't, can't query
- if we're trying to elucidate connections, these are not generalizable
- if we're trying to represent everything in reality and the relations between everything else, this kind of hyper-specificity will balloon the scale of the graph - of nodes of implied combinations and relations of other nodes - to a completely intractable size

We could attempt to resolve this using hypergraph data structures, and this is something I intend to explore, but for now we will look at "seregraph" data structures, a general data structure for arbitrarily deep directed graphs within graphs meant to represent language - that I'm currently exploring and thus is a work in progress.

Suppose we add another criteria to our graph: namely, that we can't actually use edge *types* (I refer to varieties of types of edges like `possesses`, `is a`, `has`, etc) we can only use directed edges. This is because if we use a type for an edge (like: possesses), we are implicitly assuming that the user of the graph is aware of what `possesses` means, which may be true in this limited case, but more often than not is not true when considering the multitudinous variety of potential edges.

Furthermore:
- If you imagine you are trying to teach an AGI what the world is, it will not know
- In reality, you probably don't know, because while maybe you can define it (or look up the precise definition), every definition will be made of more words, and thus to know what the word means, shouldn't you be able to define what those words mean?
	- Suppose you can, and you use any old dictionary to keep going indefinitely. Where is the "root" word that all other words derive their meaning from?
	- There isn't a root word, the meaning of words is derived from their relations within the network, and the meaning of the relations is derived (I hypothesize) from connections between those entities and relations, and the axiomatic somatosensory data we perceive, which gets built into ever more complex concepts and systems of understanding as we develop as human beings.
	- Accordingly, assuming an implicit definition as being an "objective thing" is not allowed in this structure, as it is also not allowed in our brains - beyond our subjective experience, which we cannot yet translate (or have no way to tell if we have translated) into a digital medium.
	- Everything must be defined by its relations to other things - so `possesses` cannot be an edge as it is an implicitly objective thing absent context, as it would be for any edge type with no definition - and thus is a violation of the underlying principle.
	- This is not to say you *can't* do this ever. You can and should. There is a difference between what I am trying to do here, which is an academic pursuit for a data structure that can represent reality and translate between arbitrarily complex spoken word and queryable graph data structures, and an AWS neptune graph one maintains for the purpose of identity resolution, which has no such need for this kind of rigor.
		- As the objective is identity resolution given an underlying assumption of implied consensus knowledge of reality, which will be true for the database engineers, data scientists, and clients.
		- In contrast to this, where (I repeat myself) the objective is to encode reality and language in a data structure that can be queried (and used for inference and data storage).

---

treat nodes as edges, each node is implicitly contains arbitrarily deep subgraphs of other networks of nodes

maintain independent subgraph index as key value storage (KVS)

each key is a word, or perhaps even UID, each value is a pointer to a subgraph

each subgraph is made of nodes and edges, the edges are simply unnamed directed edges, the nodes are nothing but pointers items in the KVS, which of course points to the graph, containing the subgraphs that point back to the KVS

whole data structure is highly recursive - there are no "real" objects on it - only a network of arbitrarily deep and complex pointers
- ? with logical criteria defining relations
- ? with bayesian criteria defining relations
- ?! will probably need some kind of implied objective schema nonetheless
	- ie: for entities vs relations between entities (as nodes)
	- can use BFO for entities
		- maybe for concepts?
		- will need ontology of abstract relations...

- `Pakistan` -> abstract entity(?), state
- `has a stockpile of` -> relation(?), possesses, present tense
	- (?) possession: the quality in which one entity $E_1$ "owns" another entity $E_2$ and can make decisions about the ways $E_2$ can be used according to the 'action utilization schema' of $E_2$
- `of approximately 160 warheads in 2021`

