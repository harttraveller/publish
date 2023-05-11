# Types
## Base
- input
- yield
- internal
- external

## data
There are two subtypes under `data`, they are:
- `data source` -> eg: kaggle
- `data object` -> eg: a particular kaggle dataset
- `data stream` -> eg: a particular economic time series from FRED

"Data" refers to `information` that is computationally tractable. The line here is blurry; for instance, a news website might be an `event information stream`, but if you create a `system` that scrapes the website and compiles the information into a computationally tractable format, then it might become a `data stream`.

The differentiating factor is that data sets are static collections of data, whereas data streams are continually generating new data.

## info
There are three primary subtypes under `info`, they are:
- `info source` -> eg: NPR
- `info object` -> eg: a particular NPR episode, consumable
- `info recall` -> eg: an AWS documentation page, reference information

## tool
- `tool source` -> eg: a GitHub organization
- `tool object` -> eg: a python package, utilities
- `tool system` -> a set of tools working together to autonomously achieve an objective

## rsrc
- `rsrc source` -> eg: ontobee
- `rsrc object` -> eg: ontology files
- `rsrc enable` -> eg: cookiecutter templates, accelerate processes
