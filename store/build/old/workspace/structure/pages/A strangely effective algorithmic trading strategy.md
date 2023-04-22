<img src="https://i.redd.it/jvwpho8yidla1.jpg" class="header-image">

#present/active 

## Overview


## Theory


## Implementation


## Backtests

### Time Interval: Minute


### Time Interval: Day


## Issues

- Not accounting for time delay in minute by minute data.

## Caveats

I'm pretty confident this trading algorithm wouldn't work. In essence, it seems far too simple. If the trading algorithm works, which is a big if - it probably won't work for very long as people start using it. And for the duration that it does the algorithm also wouldn't work on the basis that the amount of money you have would grow so quickly that you would end up just displacing the market, and your orders wouldn't fill at the price you want them to fill at.

In respect to the second point, this could be addressed by trading in fairly liquid markets with small amounts of capital.

## TODO
- check how market liquidity effects performance - look at volume


## previous param info
Assign previous trade to -1 (sell). Not the actual trade, reason included in docs.
Assign previous trade to -1 (sell).

Assume on instantiation there are no open positions, thus default is sell.

Sell implies all assets are cash.
