---
tags:
- present/max
---

> [!status]
> At the moment I'm going through my old backlog of notes on this topic and moving them to this page so I can organize them here. Thus, the page will be disorganized and incomplete for some time, but if you check back occasionally you'll start to see it fill in.
> 
> I'll update this message when that is no longer the case.


# Description
The purpose of this page is to provide documentation for the architecture of this vault, so it can be replicated or adapted by others.

Skimming the [[AGENT framework]] first might be useful, as not everything on this page will necessarily make sense otherwise.

%%
note -> this page documents stuff not included in *this* vault specifically, but that I use for my personal second brain - these are tips that might be useful regardless
%%
# Structure
There are several directories in the vault. The main structure... #todo 

# Jupytext & VSCode

One of the things that I wanted to try and integrate into the vault, was the ability to link programmatic analysis in jupyter notebooks as nodes on the graph. I've linked the purpose here: [[note > jupytext notebook integration purpose]]

The only available [obsidian plugin](https://github.com/tillahoffmann/obsidian-jupyter) for jupyter notebooks, however - is deprecated. Plus, I generally prefer to use VSCode while editing notebooks - but how to maintain the native view/edit interoperability with obsidian?

Thankfully, there is a [jupytext extension](https://marketplace.visualstudio.com/items?itemName=congyiwu.vscode-jupytext) for VSCode. Notably, this is a fork of the original plugin - apparently that one was broken. 

> [!bug]- Fixing Jupytext Format Error
> Ironically, this plugin was also broken for me as well. Sometimes, while attempting to save the temporary `.ipynb` files to markdown, the following error occurs:
> ```python
> jupytext.formats.JupytextFormatError: Format 'percent' is not associated to extension '.md'. Please choose one of: markdown, pandoc, myst.
> ```
> I looked through the code that generated the error and was able to add a "patch" that seems to fix things: [[tutorial > debug solution for jupytext format error]]

# Obsidian


## Plugins
### Core Plugins

### Community Plugins
- periodic notes (alt to unique notes)
- (!) map view

%%
[obsidian map view](obsidian://show-plugin?id=obsidian-map-view)
%%

## Directories
- note -> originally tried, just doesn't work
- ideally you can put everything in your mind and life in one place
	- can't in my case cause I'm splitting stuff between personal and this vault
- complex directory structures just don't work well for this - having spent a year trying, but it depends on your task and they may work well in some cases
	- #todo -> cover basic directory structure, move to layout

## Layout

- purpose of this layout is to try and avoid dealing with directories at all, instead, you just get the graph, which is a high level view of your mind, and you can zoom into particular sections and view them in more detail
- highlighting the protocol nodes is important - the idea again being to avoid information/potential path overload
	- everything you do is optimally connected to a protocol node, this way you filter out stuff you don't actually need to do
	- see: [[#Disclaimer]]
- example given below
	- notable caveat being that this image is of my personal vault right after deciding to dump all my other vaults into one place (excepting this one) - and still only halfway through consolidation!
		- so ideally your graph has more structure than this mess, but this gets the idea across
		- you see your "mind" when you open the software, the protocol/targets (core life objectives) are highlighted, so you can go in and find stuff around them
- note -> not visible here, but also implementing a time graph structure is useful so items close to each other in time cluster together in space on the graph as well
	- #todo -> add more details on this point


![[example obsidian layout - stacked tabs.png]]


## Settings
- stacked tabs
- pinned graph
- css snippets
- 
- 

## Disclaimer
One important thing to be aware of: while it may be tempting, quantifying every single thing in your life is probably impossible. The goal of the architecture is not to perfectly abide by the framework, but to *functionally* abide by it solely to the extent it accelerates your ability to refine and achieve objectives.

%%
- tangent -> tried to create finite state graph of everything in my life, didn't work well
- conclusion -> Faith - in unconscious, and reality to guide you.
%%

Relating to the aforementioned point, the vault architecture should meet the following criteria.

1. WHAT -> The vault should be able to *tell me what I need to do*.
2. WHY -> It should be able to tell me *why I ought to do it*.
3. HOW -> It should be able to direct me to the resources to *execute* on doing it.

One critical component here, is that once you have built out the protocol graph, you can assess whether you should actually do something (read a book, watch a youtube video, start a project, take a job, etc) - based on whether or not it can connect to one of the objectives in your objective hierarchy.

The reason this is important, is because practicing this allows you to filter out all of the stuff that you don't actually need to be doing. The specific issue this is trying to address is that of *potential path overload*.

This is something that I've experienced quite often, and comes about when you see all of the stuff you could do, but you know you can't do all of it, and if you try to do all of it, you'll probably do none of it, so you have to choose just some of it - so you can get anything done at all.

Unfortunately this is a byproduct of being human, at the moment we simply don't have enough time to do everything. I've come to the conclusion that it is much better to focus on doing *something* well, and have faith that other people will also do this, with the cumulative effect being ideally that civilization continues to evolve in a positive direction.


