#priority 
#structure

# head
## edge
- null
## link
- null

# body
## description
- This root node exists for information retrieval purposes. 
- The main groups are linked to it.
- Each main group has a description of the types of nodes linked to it.

## main groups

side
- input
- yield
site
- external
- internal

type
- auto -> `unsettled`
	- entity -> `unsettled`
	- system -> `unsettled`
	- object -> `unsettled`
	- source -> `unsettled`
- data
	- object
	- source
- feed
	- object
	- source
- info
	- object
	- source
- rsrc
	- object
	- source
- file? -> `unsettled`
- util
	- object
	- source
	- active -> `unsettled`
	- enable -> `unsettled`


### type

#### data
data that can be operated on to draw inferences from the data

#### feed
data feeds, that generate continuous new data

#### info
predominantly text information

#### file
static files which are used as a component in another entity

#### rsrc
active resource tools which are interactive, and used to gain information

#### util
passive tools/utilities which accelerate the process of creating new information

#### tool
active tools which one uses to create new information