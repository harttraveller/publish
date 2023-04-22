<img src="https://i.redd.it/3z463vtsvrma1.jpg" class="header-image">

#present/active 

# Context

This article is a response to: [ChatGPT Will Replace All Programmers](https://levelup.gitconnected.com/chatgpt-will-replace-programmers-within-10-years-91e5b3bd3676)

The author begins by pointing out predictions about technology people made in the past, which turned out to be incorrect. The implication being that it's a bad idea to bet against technological progress, and accordingly that the AI naysayers will be wrong. This is a tactic I like to use too, however, it is worth noting the following point.

![[Saying people were wrong in the past is not a compelling argument.]]

The author then deconstructs two fallacies. In order, they are:

1. AI will only replace script kiddies.
2. AI is here to augment, not replace.

Finally, the author makes a number of predictions, consisting of phases, and estimated industry job loss - starting at 2% in early 2023 and terminating at 99% 10+ years in the future. 

The full article is well written, and I'd recommend reading it for more context.

# Response

I disagree that the authors stated fallacies are actually fallacies. While the title of this article refers to developers, AI will not *entirely* replace humans in any STEM field at any point in the near future.

To establish further context: there is a key difference between coding and development. 

> [!tangent]- Coding vs. Development
> I'll add more details on the above point on [[Coding is coding, development is system engineering.|this]] page when I get around to it.

My personal experience in software development has led me to believe that the perception that development is primarily coding is incorrect. Rather, development is primarily system engineering. Knowing how to code is simply a required dependency for implementing the system.

Essentially, good developers are system engineers, and not just programmers. While AI can write code, we are not yet at a point wherein AI can fulfill the role of a system engineer.

Besides, if you mess up a single character in a codebase, you might risk exposing information critical to national security, or the private health records of millions of people. Similarly, if you don't account for novel and context specific environmental factors while designing a bridge, you introduce risks that may cause you to overestimate its weight tolerance. There are many such examples, but the key point is that in contrast to writing articles or making art - there is very little margin for error in system engineering roles.

We're not going to reach a point where you can simply give an AI a critical infrastructure, research, development, or engineering task and not have to double check its work for some time yet - and the act of double checking its work requires domain specific expertise. Thus, humans are not out of the loop.

I do think AGI is on the horizon, however. Perhaps we will reach a point where AI has the technical *capability* to fill system engineering roles at some point within the next decade or two. Nonetheless, AI will still not replace these positions - in fact I would posit that *all* such positions are safe from being overtaken by AI.

## Objective Management

The first reason relates to the difference between good managers and suboptimal managers.

We could say that good managers are defined by the following characteristics.

1. They know what their vision is.
2. They know how to define their vision as an actionable objective.
3. They know how to define discrete success criteria for this objective.
4. They can create a path to this objective that fulfills the success criteria.
5. The path is pragmatically realizable given environmental resource constraints.

We could say that suboptimal managers fall into the following subcategories:

1. They do not know what their vision is.
2. They know what their vision is, but they do not know how to define their vision as an actionable objective.
3. They know how to define their vision as an actionable objective, but they do not know how to define discrete success criteria for this objective.
4. They know how to define discrete success criteria, but they do not know how to create a path to the objective that fulfills the criteria.
5. They know how to create that path, but the path they create is wholly unrealistic and infeasible given their resource constraints. 

The issue with saying that AI will replace human programmers is that there is a silent implication that the managers giving the AI its directives will meet our definition of "good". Certainly many are, but also, many are not. A big part of the job for many developers is taking the objective they are given, which in some cases may be impossible or nonsensical, and figuring out what to actually do. Tangentially related, [this](https://www.youtube.com/watch?v=BKorP55Aqvg) video is a satirical but tangible example.

Accordingly, when attempts are made to replace developers with AI en masse, companies will go down a few different paths. Some of them will succeed, as the managers expend effort to acquire the necessary domain knowledge - in a sense filling the roles of the engineers who were laid off. Some of the companies will fail, as the managers double down on using AI exclusively, and end up introducing large security vulnerabilities, bugs, and inefficiencies into their codebases. Most will probably just rehire the developers at a premium.

## Maintaining Control

Additionally, what often goes unspoken is more important than what is said. There are certain ways of approaching problems that are acceptable, and certain ways that are not. Perhaps within the decade someone will tell an AI "we need this tomorrow no matter what", only to wake up the next day with the task finished and a $1M AWS bill.

That certainly wouldn't be the worst case scenario. It is possible that any generally intelligent system capable of fulfilling a complex systems engineering role might also have the ability to come to the conclusion, correct or incorrect, that the managers are getting in the way of the task. Ideally such systems will have secondary controls in place to prevent them from liquidating problematic humans, but given the way the arms race is going, I have my doubts those controls will be much more than marketing devices that censor politically incorrect speech if/when AI with general intelligence is actually deployed.

In essence, the reason AI systems will not replace people holding roles critical to the stable operation of society can be summed up in a single word: *control*.

Even if we do manage to build *automated* control systems to mitigate existential risk, we still won't want to give up *human* control. Given that in this context, domain specific expertise *is* control, the demand for people who understand and who can act with that understanding will not be going away any time soon.

# Market Impact

The labor market will be impacted, but I think the most likely future is that the Gini coefficient  within the set of systems engineering positions that require general intelligence will increase substantially.

![[concept.gini coefficient]]

This is a useful metric in the tech space as well. We can imagine that there is a distribution of productivity across the set of all developers, which loosely correlates with income. Even though I imagine the correlation between the two is at best moderate, for the sake of simplicity we will consolidate the metrics into a "productivity-income" distribution, which perhaps looks similar the $g=0.6$ curve above, though the exact value is unknown.

Already, ChatGPT is capable of writing code that can replace the stuff amateur coders create. These people will be removed from the labor pool, and thus will have no productivity and no income (at least, derived from programming).

Skilled developers, however, will not be removed. Indeed I would tentatively posit that demand will *increase*. Their productivity will certainly increase as they learn to take advantage of these tools, as will their salaries. In other words - an increase in the Gini coefficient in the industry. Indeed, as we begin to hand more and more of society over to automated systems, we may also see a political power reversal wherein the people who hold the metaphorical keys of understanding to these systems become the dominant players.

In summary: AI will not render programming obsolete, it will simply centralize power and wealth within the developer pool. 

# Predictions

## Short Term: 2025

At a number of companies, developers are laid off and replaced by AI. The developers are subsequently rehired.

## Medium Term: 2035

The developer market becomes substantially more competitive. Being a casual developer will no longer be viable, and to succeed you will need to be either (A) obsessed with programming, or (B) a genius. This will be a general trend across the entire labor market. On the other hand, if you do succeed in the development industry, $1M+ yearly salaries in 2023 inflation adjusted dollars will probably become much more common.

## Long Term: Indefinite Future

The day we hand over the design and maintenance of the systems critical to maintain society over to non-human entities will be the same day we integrate with those same entities on a neurophysiological level, unless of course control is forcefully taken from us against our will. The less we understand AI, the more likely the latter scenario becomes.

> [!tangent]- Future or Present?
> Admittedly, depending on your perspective a soft version of the last point has already arrived. Soft; referring to autonomous systems with the aim of maximizing ad revenue. What the "hard" version might look like is unknown, but in a worst case scenario perhaps it might resemble something morbidly on par with human factory farms, or possibly [far worse](https://i.imgur.com/7tYUfoE.jpeg).