<img src="https://i.redd.it/t7izg0v8il2b1.jpg" class="header-image">

> [!status] #present/med 
> Page is a work in progress.

# Premise

The survival of humanity is a good thing. Accordingly, entities, events and decisions that increase the survival probability of humanity are good, and ones that reduce the survival probability of humanity are bad.

## Scenario

Consider the following scenario: You are the leader of a powerful nuclear superpower. Throughout your presidency, you've adopted a pacifist approach, which has been mirrored by your adversaries. 

You're eating lunch one day, when you receive an urgent call stating that multiple independent thermal reconnaissance satellites observed heat signatures associated with ICBM launches throughout the territory of your primary geopolitical adversary.

An automated system has already simulated the expected orbital paths and reentry locations, assigning > 99.9% confidence the missiles are heading towards your country. 

Furthermore, communication links to all active SSBNs were severed simultaneously less than half an hour ago - undersea monitoring stations detected explosive shocks originating from the locations of the submarines, correlating precisely with the number that were deployed.

You're now sitting in a cold room lit by pale fluorescent lights as your generals explain that the primary targets are your missile silos, military bases, industrial plants, refineries, major cities, and vast tracts of agricultural land - which in less than 20 minutes will be entirely irradiated.

Statistical models have computed lower and upper bound estimates: just the initial attack is expected to kill anywhere from 10% to 20% of the population. The majority of expected death, however, will be attributed to radiation poisoning and famine in the following weeks.

You can retaliate with a proportional nuclear strike; but besides immediately killing millions more, doing so would draw more actors into the conflict, almost certainly leading to global thermonuclear war.

Even though some countries would not be targeted, or would only be targeted in a limited capacity, the same countries are also predominantly dependent on fertilizer, energy, and technology from the developed countries that would likely not make it through the war. Global systemic collapse would follow, subsequently setting humanity back hundreds of years, or potentially condemning the entire species to a withering oblivion.

Everyone is looking at you now, and the time window for retaliation is rapidly closing. Within the next few minutes, your nuclear silos will be hit. What should you do?

## Decision

The decision following from the premise established at the top of the page seems to suggest that choosing to ***not*** retaliate is the correct choice. The logic is fairly straightforward.

![[nuclear-game-theory-retaliation-decision.svg]]

Accordingly, you decide not to retaliate, and while you do not get revenge for your country, humanity survives (minus your continent), persevering into an uncertain future.

While at the pearly gates, you ask St. Peter if there was anything you could've done to prevent this from happening. He says there was, and states he couldn't say exactly what - but he can send you back in time, giving you one chance to try again.

## Restart

You open your eyes two years earlier. You now have to figure out how to avoid catastrophe. You start by carefully evaluating the reasoning you used before, when you were acting explicitly as a pacifist. We'll call this the "cooperative agent model", or *CAM-0* for short. A diagram illustrating what this model might potentially look like is included below, followed by a detailed explanation.


> [!note]- Probabilities & Utilities
> The probabilities, utilities, and model architectures chosen are all somewhat arbitrary. As mentioned at the top, I plan on creating a simulation that allows for:
> 
> - A) The generation of arbitrary game theoretical model architectures.
> - B) The tuning of parameters.
> - C) Evolutionary simulation of model architectures.
> - D) A streamlit webapp to interface with these.
> 
> The point of this article is really to explore ideas broadly, and not so much the minutiae of parameters chosen.

> [!note]- Omitted Information
> We're ignoring the following two facts:
> - A) "Hawkish" and "dovish" exist on a continuous spectrum.
> - B) Strictly speaking, there aren't two agents. There are a continuum of agents ranging from individual leaders, to military officers, to the systems they are part of, which also act as intelligent agents, etc.

%%
### Cooperative Agent Model

![[nuclear-game-theory-cooperative-agent-model.svg|300]]
![[nuclear-game-theory-cooperative-agent-model-backprop.svg]]

In the first column, you, and your decisions, are represented by the blue nodes. You can either adopt a dovish nuclear policy approach or a hawkish one. In this context, these terms are open to interpretation, but for the sake of argument let's suppose "hawkish" refers to a combination of aggressive rhetoric, as well as increased investment in technology designed to reverse MAD. Whereas "dovish" refers to the pacifist approach you took before.

Underneath your policy approach is the parameter $P(W)$ which refers to the probability that war will occur, and is assumed to have a base value of $0.5$. These parameters may or may not be correct; naturally this model is not a statement of truth - it exists to illustrate an idea.

*Time is ignored to simplify the model, but a proper model would use $P(W, t_1, t_2)$ to represent the probability of war between two instances in time.*

In this particular model, in addition to the base probability of war, you also assume that taking a hawkish approach will increase the probability of war by 20%, and taking a dovish approach will decrease the probability of war by 20% - regardless of whether you, or your opponent adopts that particular policy. Given the randomness inherent to reality, you assume you can never reduce the probability of war to 0%; or for that matter increase it to 100%.

> [!question]- Doesn't declaring war increase the probability to 100%?
> If you are looking back at a retrospective nuclear war, then there is a "100%" probability it occurred, given it is in the past. It is impossible for *you*, as an agent, to increase the probability to 100%, however. Even if you gave the order, people might disobey your order, or the Earth might be struck by a rogue black hole just as the missiles leave the launch tubes. Nothing in the future can really have a 100% probability. By definition for something to have a 100% probability, it would have to be in the past, at which point probability is no longer a relevant metric - unless you are trying to assess whether or not your memory is accurate (probably not) or what you perceive to be reality is actually reality (almost certainly not) - but those subjects are out of scope for this article.

Furthermore, you figured that whatever your choice, it was likely to influence the choice of your opponent, represented by $P(D)$. In this particular instance of CAM-0, you assumed that your opponent would mirror your actions, with the specific parameters selected as:

- If you take a dovish approach
	- There is an 80% chance your opponent also takes a dovish approach
	- There is a 20% chance your opponent adopts a hawkish approach anyways
- If you take a hawkish approach
	- There is a 80% chance your opponent also takes a hawkish approach
	- There is a 20% chance your opponent adopts a dovish approach regardless

These in turn effect $P(W)$ -> the global probability of war. We're assuming that because your interest primarily lies in the collective security of humanity, you are agnostic to who starts the war, or who [wins](https://store.steampowered.com/app/1520/DEFCON/) the war. Basically, you just want to minimize the probability humanity goes extinct.

Accordingly, outcomes which result in nuclear war have a cost of $1$ and outcomes which do not result in nuclear war have a cost of $0$. These values were chosen to simplify the calculations. This model suggests there is an optimal decision: the one which minimizes expected cost.

We can find that decision via "backpropagation" of the terminal utilities through the probability graph. Because the costs chosen were 0 and 1, calculating the expected cost given the probability of war is fairly straightforward. It's simply $(P(W) \times 1) + (P(W) \times 0)$ which simplifies to $P(W) \times 1$. We'll call this figure the probability of cost, or $P(C)$. For this model $P(C) = P(W)$. 

We can then multiple these by $P(D)$ in order to get our expected costs. 


![[nuclear-game-theory-cooperative-agent-model-backprop.svg]]



Now let's examine another model, which suggests that if you *truly* believe in CAM-0, you shouldn't actually use CAM-0 to inform your decisions - at least directly.


- the function mapping between warlikeness and peacelikeness must be modelled



- note that we would also need to account for the fact that the first probabilities may or may not be correct, and that "hawkish" and "dovish" exist on a continuous spectrum

? Use reinforcement learning algorithm to solve problem?


Let's look at the implicit reasoning you were using before. We'll call it the "cooperative agent model" or *CAM-0* for short. While this model could be represented with a bimatrix, it is not for reasons that will become apparent in short order.

The assumption for this model is that you are prioritizing the survival of humanity, per the premise established at the beginning of the article. In this case, $P(extinction)$ is abbreviated as $P(E)$. 


The moral thing to do is to act warlike and aggressive, and then simply choose to not follow through on your commitment to destruction? At least according to this model, yes. The question then becomes, how do you tell if a violent but cowardly agent is actually an enlightened strategic thinker, playing out the archetypal role of Judas (per the Gnostic interpretation).






- alternative model
- seremodel
- convergence towards acting competitively even if you are cooperative
- incomplete information



Instead of building a pacifist administration, however, you adopt a militaristic approach, even though you *are* a pacifist - in the hopes it will function as a deterrent. The "militarism" 

In your adversaries country, a new president comes into power. This complicates matters, as now you do not know their policy, even though they claim to be a pacifist.

You reason as follows

Their model of the world, are they saying what they mean, or is there an ulterior motive?

You need to evaluate the different possibilities and cross reference them.

Assume they take a Nash Equilibrium approach, and believe that conflict is inevitable and 

two possible models, 2D nash equilibrium does not suffice, as we have a third axis of possible outcomes so the events have been mapped out.

Assume you do not know which one your opponent is using, but assume you are using the cooperative agent model.

Map out possibilities.

Regardless of whether you use the cooperative(?)

Your reasoning is as follows.


^point on entities consuming each other

^point on cooperation really being the cooptation of entities by entities on higher abstraction levels which are more adaptive.

^point on the idea that perhaps we can escape this paradigm

Let's suppose your reasoning is correct. This would ironically imply that pacifist leaders who say they want peace, *actually* want war, and militaristic leaders who say they want war, *actually* want peace - at least up until the moment the latter category of leaders invade, at which point it becomes clear that indeed, they do want, or are at least willing to tolerate, war, for whatever 

## Game Theoretical Risk

Deterrents are only deterrents if they are *credible* deterrents.

Assume there are entities who simply want to destroy everything, see - cannibals, serial killers, people infected by ineffable hatred, or possessed by narcissistic egoism.

## Conclusions

The first insight informs the second. If that every agent in the world has incomplete information about the reality, other agents, and themselves - and furthermore if you cannot use what people say to understand them with certainty - you

In respect to the second item, peaceful agents actually want war, warlike agents actually want peace.

Of course, you cannot know whether this is true, so in evaluating an agent in reality, most likely a person, but possibly a group of people, or something else, you need to take into account that entities model of reality, interests, and whether it uses language purely as a mechanism of communication, or partially as a mechanism of communication, and partially as a tool to reach objectives.

*tangent: it is possible most people use language as a tool to reach objectives to varying degrees, with the delineating factor being not whether they do or do not, but whether they are self aware, and conscious of the fact that they are doing this. I don't know though, this is pure conjecture.*

In respect to the third item, this is what causes the full scale nuclear retaliation - reference
preemptive full retaliatory strike against enemies.




> [!question]- How could you have avoided nuclear war?
> You open your eyes. You're floating in a void. There are dim pinpricks of light barely visible in the distance. 
>
>"OK, I screwed up. How could I have avoided nuclear war?" you say. A soft voice responds.
>
>>The deterrence strategy was good, albeit you could have avoided an arms race with slightly more moderate policies. "Speak softly and carry a big stick" or so I hear. However, the universe is intrinsically chaotic, so there was no single event that determined the outcome you experienced. If you makes you feel better, you could have reduced the probability of nuclear war by ~98% for another few years if two days before you decided to retaliate, you had chosen pasta with risotto sauce instead of a tuna sandwich for lunch.
>
>"What?"
> 
>>In respect to the tuna sandwich, your office was bugged. When you chose that sandwich, an analyst on your adversaries side made a sexist joke involving tuna to his coworker. His coworker went home and told his wife, who slapped him. The following morning he took out his anger on a subordinate, firing him. That subordinate went binge drinking later that night with a friend, a silo safety engineer, who was hungover the following day. If he hadn't been hungover he would've caught the wiring glitch which induced the the launch of the test missile, which by the didn't even have active warheads. It was like a one in a billion wiring glitch though, so you got unlucky.
>
>"Wait, what caused them to attack us the first time around?"
>
>> The open pacifism was definitely a component - it psychologically primed them to take advantage of you - but honestly we were just running the same simulation on their side and they did more or less the same thing you did with the same reasoning you used.
>
>"This is all absurd."
>
>>You're part of a universe with infinitely dense points that warp the fabric of time around them as they consume galaxies. You used to be an impossibly complex network of signal pathways, all performing a perfectly synchronized orchestra from the scale of molecules to proteins to cells to people to an entire planet. What was absurd is that you didn't fall apart into goop every second of your life. How absurd something is has no bearing on whether it is true or false - though granted, most of the absurd stuff your species thought up was humorously wrong. Anyways, welcome to what I guess you guys called the Boötes void.
>
>"The what void?"
>
>>Hell doesn't exist, we just deposit people who screw up out here around the middle of the void. Attributing to cosmic inflation you'll probably lose sight of the stars in a few eons.
>
>"So what next?"
>
>> Nothing really. You'll likely go eventually insane. The lack of sensory stimulation will probably cause you to hallucinate your own little reality into existence, full of people and things and places, and the cycle will repeat all over again. Anyways, I've got to be on my way, this article is becoming excessively preposterous.

%%


%%
## Scratchpad
- of course, this assumes that everything is perfectly logically, and controlled
	- that there wouldn't be accidents, or that the president could control everything

Arguably, no *person* is, but rather it is an emergent decision made 

unless you already understand them, and (C) 

- Different entities
- incomplete information
- implication of nash equilibrium


- come to conclusion


- set point, are people calling for peace the people who want war, and vice versa?

The irony of this paradigm of course, is that you cannot know who intelligent people really are, by who they say they are, or what they say they want.





Of course this isn't all strictly cynical. If ones objective is truth, the act of using the tool may fulfill the objectives, independent of the secondary effects.


nash equilibrium
arms race








Your reasoning hinges on the following premise.



Your reasoning is as follows.

!



!





In the run up to the election, an arms race starts. 

You had campaigned on a platform of pacifism, and more or less immediately the issue with this is clear.






You open your eyes stars

- bootes void
- chaos theory

"You know when you "



You're now faced with the decision of essentially ending the world, 

The primary targets 

that the lower and upper bound 


has estimated the lower and upper 

Each missile has multiple warheads, 

being read a solemn report in cold room 

You're currently in the situation room, a and are situated within the situation room. In a moment of gravity, a report is presented to you, indicating that your primary geopolitical rival has launched a complete nuclear attack just five minutes prior.



- is it evil to respond with nuclear deterrent
	- yes - it would always be better to let some of humanity survive
- thus: it is good to not respond if nuclear war starts, and it is, in fact, evil to respond
- BUT
- what if I told you that *actually* what I just said is really evil - or, well, it *is* good, but it's *also* evil
- If I state I won't respond, what if someday I become president. Now the adversaries knowledge of non-response will *increase* the chances of nuclear war. Thus, by saying I would not respond to a nuclear strike, I am increasing the probability of nuclear war - *which is evil*.
- the moral thing to do is to act immoral, and the immoral thing to do is to act moral

- geopolitics
- gametheory
- philosophy
- credibledefense
- ethics
%%