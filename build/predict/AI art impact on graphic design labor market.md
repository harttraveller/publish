<img src="https://i.redd.it/hm1bnkw3u9la1.jpg" class="header-image">

%%
- [[hasAuthor > Hart Traveller]]
- [[isPage > prediction]]
- [[isDomain > AI art]]
- [[isDomain > economics]]
- [[isDomain > labor market]]
%%

## Overview
Bet with friend about impact of AI art on graphic design labor market. If net demand has fallen 50% or more by April 2025, I win, and he pays me $100. Otherwise, he wins, and he pays me $100. This particular bet I went into expecting to lose, really, it was more for the fun of making a bet with a friend.

## Reasoning
The reasoning I used is not rigorous; it is based predominantly on intuition. Essentially, the introduction of AI art tools is equivalent to adding millions of artists to the labor pool. Given the increased supply, I would expect the quantity of art to drastically increase (already has really),  and the price for art to similarly decrease, per basic economic models of supply and demand.

I will note that what might possibly happen is that graphic designers must to find alternative jobs, and art goes from being a full time gig, to a hobby or secondary source of income.

> [!note]- Tangent
> With the possible exception of those whose art is not their art, but their connections in the industry, and/or their ability to launder money or exploit tax loopholes via their art. The demand for that probably won't go away.

Artists who work part time would still be represented in the labor pool. Furthermore, given that humans who generate AI art commercially may be included in the labor pool of graphic designers, the labor pool may increase. Or alternatively art generation may be consolidated into corporate structures that provide services for other corporations - but it would be a stretch to consider employees working for an art corporation graphic designers or artists - even if they are technically part of a corporate structure that if considered a living organism, is an "artist" in a very abstract sense.

## Validation
We were planning on finding the data to check the prediction when the time arrives, but I've linked one data source we found below.

- [Graphic Designers in the US - Employment Statistics | IBISWorld](https://www.ibisworld.com/industry-statistics/employment/graphic-designers-united-states/)

## Variables
- $t_1$ = 2022-04-21
- $t_2$ = 2025-04

## Functions
- $designers(t)$ -> number of graphic designers in labor market at point in time $t$
- $wages(t)$ -> mean wage of graphic designers  in labor market at point in time $t$
- $demand(t) = designers(t) * wages(t)$  -> market demand for human graphic designers 

## Criteria
- $demand(t_1) > demand(t_2) * 0.5$