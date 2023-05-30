<img src="https://i.redd.it/lg7f63djvw2b1.jpg" class="header-image">

> [!status]
> At the moment I'm going through my old backlog of notes on this topic and moving them to this page so I can organize them here. Thus, the page will be disorganized and incomplete for some time, but if you check back occasionally you'll start to see it fill in.
> 
> I'll update this message when that is no longer the case.

#present/max 

# Overview

This page documents a system to Achieve Goals via Empirical Networked Targets - or as I'll refer to it: the AGENT system. As the name suggests, it is intended to be a systematized approach for objective selection and realization. Specifically, this document covers:

1. A high level overview of the framework, and includes some conceptual context and definitions.
2. Links to the specific absolute objectives I'm using, per the protocol graph defined in the framework.
3. The specific obsidian vault architecture I'm using to implement this system, along with useful plugins and configuration settings.

> [!note]- Unfamiliar Terminology
> Note that in some cases I may use unfamiliar terminology. This may be attributable to the fact that I simply made it up. I'll try to add inline links to notes or pages with more details on these terms where relevant.

> [!note]- Dynamic Nature
> This system is not a static prescription for how one should approach life, free to adapt it to fit your needs. Alternatively, if you see issues in the system, let me know as I'd love to receive critical feedback!

# Framework
## Agent Based Human Model

Let's first investigate what it means to be human. While I do not intend to provide a universal definition, I think there are some perspectives one can take which are useful. In this subsection, we'll attempt to answer this question using the model of an [intelligent agent](https://www.wikiwand.com/en/Intelligent_agent) - starting with simple models and moving up through increasingly complex ones.

The purpose of this exercise is to use these models to inform the framework (and later vault) architecture.

Lets start with the simplest model. In this model, there is the agent (human) and the information the agent ingests (about its environment).

![[draw > agent based human model two nodes info.svg]]

Upon ingesting the information, the agent encodes this information in a [[definition > reality model|reality model]].  As such we can add another node to our model.



![[agent-based-human-model-3-with-rm.svg]]

The agent does this to because it is necessary if it is to navigate of the [[definition > state space of reality|state space of reality]] (SSR), and it navigates the state space of reality *to achieve objectives*.

[[query > is it possible to truly synchronize an internal reality model with external reality?]]

> [!note]- Formal Objective Definition
> ![[definition > objective]]

We've been implicitly using the term "agent" with the assumption that it refers to a "moderately well off human in the 21st century", but the model articulated so far holds true for all cognitive agents throughout history. 

> [!tangent]- Agent Definition Threshold
> Depending on how one chooses to define: "reality model" it may hold true for organisms without a nervous system as well. I think the line probably gets blurred somewhere around viruses. Even single celled organisms have incredibly complex networks of signal pathways which can ingest environmental information and "encode" them in "reality models" - though I doubt these reality models are associated with subjective experience and qualia the same way ours are.
> 
> Though, I will say that the differentiating factor here is not a subjective experience of reality, but the manifest behavior of the agent, and the associated internal structures for information representation. Accordingly, a simple Q-Learning algorithm would be an agent, but perhaps not a cognitive one, whereas a self replicating strand of RNA might not be an agent at all...
> 
> > [!tangent]- Neat Q-Learning Tutorial
> > [This](https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/) is an excellent tutorial for implementing a Q-Learning algorithm from scratch in python, would highly recommend.

Accordingly, if we expand our definition, it's worth asking what the difference is between a "well off present human" and "all other agent classes throughout biological history". I think the answer lies in the selection of objectives.

Historically, the singular objective has been survival, defined by the acts of consumption, and reproduction - towards the end of growth, with evolution as acting on this process as a [[definition > sereprocess|sereprocess]] to optimize it over time.

I would posit that this is no longer the case (for well off humans at least). 


%%
The answer I believe is simply: To achieve objectives.

To achieve objectives
we can view a human as a [black box](https://www.wikiwand.com/en/Black_box). The agent (human) ingests information from the external world, recombines and permutes that information, and releases new information back out into the world.

Ensuring the reality model is synchronized with reality is necessary

three yield groups
- tool
- info
- action

%%

%%
- to reach objectives
- 
%%


%%
question -> Why is it useful?
answer -> I don't know but I've tried it and it seems to make sense. I should come up with a better answer though.
%%




%%

Components
- input information
- reality model
	- purpose -> information retrieval
	- pragmatic divisions
		- network
		- knowledge
		- causal
			- causal graph is used to inform knowledge of what action is appropriate to take to realize objectives
- thinking and processing information
- output information
- protocol


%%

## Protocol Graph

%%
Note that this subsection on the protocol graph differs from the [[#Protocol|protocol]] section insofar as this is the high level structure defining how the protocol is organized, whereas the that section provides information on the specific protocol I'm assembling to direct my life. Naturally, I think the latter is pretty good definition for the meaning of life, but I expect there would not be universal agreement.

In contrast, this section on the abstract structure of the protocol graph is probably almost applicable to most objective oriented humans - though of course I'm sure there is plenty of room for improvement.

%%
### Objective Hierarchy

The objective hierarchy is made up of three tiers of objectives: absolute, abstract, and concrete.

#### Absolute Objectives

Absolute objectives are similar to abstract objectives insofar as they can't (or perhaps even shouldn't) have discrete success criteria. I would recommend having at least one, but at most five. I have three. The key to keep in mind is that absolute objectives, are *absolute*. They are the things you need to be willing to dedicate your life to, and you should have absolute faith in them.

Notably, this doesn't mean that you should be absolutely *certain* they are the correct objectives. Through the course of life, we accumulate wisdom, and our reality models evolve. It would make sense that our objectives evolve with them, and as such, some degree of malleability is probably good.

> [!tangent]- Illustrative Personal Example
> For a while I wanted to be a hedge fund manager. I really did enjoy algorithmic trading and quantitative finance. IMHO, pretty much all alpha in the financial markets is derived from the exploitation of asymmetries in access to information, speed of access to information, or ability to extract signal from noise that others can't (which is really just access to information), and searching for patterns in data to exploit these asymmetries is really fun.
> 
> The thing is, I always felt I could be doing something more meaningful, and so there was always that lingering doubt. I think at some point I realized that my interest in money wasn't actually motivated by ego, or even greed, but just fear of insecurity. Around the time I realized this, I stopped caring about money. Actually I'm trying to make myself care more about it now, cause the complete apathy towards capital has reached a potentially maladaptive level! But I digress...
> 
> I'll need to return to this point later, because I'm not sure exactly why, but I've come to the conclusion that a life motivated by fear in any capacity will be a life of regret. While I can't quite articulate why, I have this intuition that most people have this same sense - the ability to detect that feeling of lingering doubt about whether one is committed to the right path - whether one is becoming all that one could be.
> 
> The point about faith isn't to say that one should have absolute certainty that ones objectives are the perfect objectives in life. They never will be, because even defining such a thing is likely only something God could do, or perhaps it is simply impossible.
> 
> The point is to say that when one chooses ones objectives in life, one should be able to look at them honestly, and have no doubt in the pit of your stomach that they are worthy objectives to dedicate your life to.

##### Absolute Objective Examples

To provide examples, of absolute objectives, I've included mine below. Of course, these are subject to change, but I feel pretty good about these objectives. It's taken a few years to get to this point, even though the results are quite simple.

Notably, my first absolute absolute objective: "find the truth" addresses the earlier issue with uncertainty and faith using a halting-problem-esque logical paradox to ensure that it is a good objective. More information is included on that page.

1. [[Finding the truth as the default objective]]
2. [[The meaning of life is to make life meaningful]]
3. [[Maximizing universal freedom as a raison d'etre for life]]

%%
- add note -> absolute objectives should be justified
- #todo -> include objective hierarchy graph

%%
#### Abstract Objectives

#### Concrete Objectives

### Dependent Objectives

While the objectives in the previous hierarchical structure are open to interpretation, there is a second group of objectives which are far more restricted, and exist in a class of their own. Thus, in my vault I've opted to isolate them in a different folder - `dependent`.

Before one can work towards realizing ones abstract objectives, it is necessary to simply *survive*. After all, if you're dead you can't make progress towards your objectives.

As an extension to survival, we might add dependent objectives relating to *flourishing* and *adaptivity* - but deciding whether these are dependent objectives is more difficult.


%%
- adaptivity
- flourishing
%%

%%
query -> should the dependents be split into a separate category?
%%



### Indicator Definitions

#### Criteria Indicator

#### Feedback Indicator










%%
# Scratchpad

The reason this system is referred to as the AGENT system, is largely because one of the definitions the system invokes to establish its internal structure is that of the "human as a cognitive/computational agent navigating the SSR to achieve objectives".


- imagine you're agent
	- permute information or