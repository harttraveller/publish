#active 

State, as in a country.

Suppose one was trying to quantify the act of migration between states; immigration or emigration.

Google defines migration as:

> Human migration is the movement of people from one place to another with intentions of settling, permanently or temporarily, at a new location

In this context, we take some individual $I$ named John, and the set of states $S$ containing $S_1$ and $S_2$.

If we needed to formally represent this as a JSON snippet, we might quantify the event of migration as follows.

```json
{
	"human": "John",
	"state": {
		"source": "Canada",
		"target": "United States of America"
	}
}
```

Presumably we would want to include temporal information as well, or more granular information like the point of departure or arrival, etc, but that is outside the scope of the intent here.

The formal representation above would suffice in some cases, but when we refer to `Canada` what are we actually referring to?

There are multiple ways we could approach this.

- Geographic boundaries of the country
- State apparatus and bureaucracy
- Cultural identity
- Distributed belief in the existence of the state across human minds

Intuitively, it also seems that when we refer to the event of "migration" in this context, we need to specify the attributes:

- Human migration (in contrast to bird migration)
- Interstate human migration (in contrast to intrastate human migration)

The act of migration, given this context, would refer to the following expected process:

- A human travels from a geographically delineated state boundary $G_1$ to another geographically delineated state boundary $G_2$.
- They engage with the state serentity/CAS (bureaucracy, etc) - for which the computational infrastructure is located within $G_2$ in order to receive the necessary approval from the system, in the form of documents, and state{agent} state{descriptor} memory updates (updates to databases and so forth) - which are required for entry.

> [!note]
> We refer to "computational infrastructure", because the agent/organism that is the state is distributed across large distances. For instance, if a data center $X$ holding surveillance intel on citizens is to the state{CAS} as your hippocampus is to your brain (imperfect metaphor, but gets the idea across) - then while $X$ might be an asset maintained and controlled by state $S_1$, it might also physically reside inside the geographic boundarys $G_2$ of state $S_2$.
> 
> Accordingly, we make the (imperfect, and non-rigorous) assumption that the majority of the "brain" of a state $S_1$ will lie within the collectively recognized geographic boundaries $G_1$ delineating the borders of that state.
> 
> This is a bad assumption, and would need to be revised at a later date. Edgecases are frequent enough that they aren't even edgecases. An example would include the relocation of Ukrainian cloud infrastructure into NATO countries before the war, as documented in [[report.defending ukraine - early lessons from the cyber war|this]] microsoft report. Another set of examples would include all the countries which use AWS to manage state operations, that are not the USA.

In respect to the second point, we say: "required for entry". But are they required for entry? On a physical basis - no - but if they are not obtained then we would prepend the term "illegal" to "migration" - which thus implies that we can infer "migration" refers to the act of "legal migration" unless otherwise specified, though this heuristic would likely have many edgecases where it fails.

This is a sufficient definition for state in the context of migration, as in order for the definition to hold, we only need these criteria. Formally, the individual does not have to integrate with the cultural identify of the state in order to migrate to it. Nor must they actually believe it exists, as they could refute its existence, but accept that other people believe in it and thus they must follow collectively defined protocols in order to reach their geographic objective.

In a legal context, such as when the state sues an individual, we might be referring to the CAS. Thus the definition might hold.

In a geographic context, the definition would also hold. NYC{geographic} is within the geographic boundaries of NY State{geographic}.

But is the definition above sufficient for Jay-Z's "Empire State of Mind"?

Granted, the song is referring to NYC, but given there are geographic boundaries for the city, and a state apparatus wherein the computational infrastructure primarily resides, this is a trivial issue. Plus, he used the word: "state" in the title of the song.

To see if the definition suffices, we can analyze some of the lyrics.

> Concrete jungle...

- inference: lots of big buildings, major metropolitan area

> ...where dreams are made of

- inference: there are many human-centric events that generate positive subjective experience for the humans within this geographic boundary that is also a metropolitan area

> There's nothin' you can't do

- inference: you will feel like you can achieve your goals in this metropolitan area/geographic boundary

> These streets will make you feel brand new

- inference: you will feel refreshed once you step foot on the streets in this metropolitan area

> Big lights will inspire you

- inference: there are big lights in this metropolitan area, and seeing them will inspire you
	- further inference: they will probably inspire you because they are a testament to the human capacity for creation; manifesting our will into reality, and you are probably a human

The definition of the state which is referenced in this song would seem to be a culturally defined notion. Technically, the geographic definition still applies, but the CAS definition of the state organism is only related in an abstract sense. Perhaps being in New York feels good because you feel like you are part of something greater than yourself, and that is the state{CAS}? This connection is weak, so we will put it aside.

If we return to our earlier examples, and consider the event: "migration to New York", when our individual migrates to NY, is he migrating to the NY described in the song?

Possibly, but possibly not. It depends on whether the individual accepts the cultural perceptions of the state, psychologically integrating them and associating them with the perception of the entity of the state (as a global entity encompassing this definition, and prior definitions).

If we get even more specific, we might say that the state that existed in the song is an entity that is a perception, characterized by geographic boundaries, features such as big lights and tall buildings (specifically those found in NYC circa. 2009), the subjective experience of hope, freedom, passion, and so forth.

In this case, the individual $I$ is not migrating to "that entity" - as that entity is a perception that while defined by attributive geographic boundaries, does not exist within geographic boundaries - rather it exists within minds.

Accordingly, in order to get to a formal and consistent definition, we might split the state into the several different sub-entities.

- state{geographic}
- state{CAS}
- state{cultural identity}
- state{subjective experience}
- state{distributed belief}

The token "state" must of course by further differentiated from "state", in reference to a finite state machine, state space, etc, which may also require further definition, but for now state{mathematical} might suffice.

Anyways, this added level of formality allows us to map the dependencies between the aforementioned entities.

For a state $S$:

- The state{CAS} is a computational agent made of humans and human-dependent computational, industrial, etc infrastructure.
- The aforementioned infrastructure for the state{CAS} is primarily located within the state{geographic} boundaries, which are upheld as an abstract object by the state{distributed belief}.
- The state{CAS} derives it's ability to sustain itself from the state{distributed belief} which derives its ability to sustain itself from the state{cultural identity} which derives its ability to sustain itself from the state{subjective experience} (human subjective experience of the state{global} and the adjacent psychological associations).
	- An alternative view might be that the state{CAS} derives its ability to sustain itself from the state{distributed belief} - not in the states cultural identity, built from positive subjective experience (and psych. assoc.) but from the expectation that violence will be enforced against those who do not comply with the directives, standards, and expectations of the state{CAS}.
		- Is this an alternative view? Or just a fact? Carrots, sticks, bread, and circuses...

Further rigor is required, but this is sufficient for now.


