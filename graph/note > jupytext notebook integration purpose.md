#past/min 

To illustrate why this might be useful, imagine that you have a query you want to falsify, or prove. I'll choose an arbitrary one:

`query > does unemployment correlate with inflation?`
 
A good way to approach this might be to quickly pull in data from FRED, and do a correlation analysis of the historical inflation and unemployment indices.

One way to do this would be to create a jupyter notebook, do the analysis, and then export the results of the analysis to the vault.

An alternative would be to create jupyter notebooks in the vault, but these would not be visible on and obsidian publish site, and even if you don't intend to create one you won't be able to view and edit the jupyter notebooks in obsidian. I haven't found a way yet, though I think there are some jupyter plugins they're deprecated now.

tangent -> [[note > executing code inline in obsidian]]

Anyways, keeping everything as markdown increases interoperability across various different interfaces.

Accordingly, I've opted to use jupytext to resolve this issue. Essentially, it allows you to open markdown files as jupyter notebooks.

The [[Docs]] page linking here has more details on this point.