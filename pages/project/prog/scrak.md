<img src="https://i.redd.it/krtduqyyloja1.jpg" class="header-image">

> [!aperture]- Labels
> `type` -> [[type.python package|python package]] [[type.github repository|github repository]] [[type.flask app|flask app]]
> `area` -> [[area.web scraping|web scraping]]

# Overview
This is an asynchronous web scraping tool built around [scrapestack](https://scrapestack.com) (hence the name). It's currently a work in progress, but I expect in the coming weeks it will improve.

# Links
- [GitHub Repository](https://github.com/harttraveller/scrak)
- [Documentation Site](https://www.harttraveller.com/scrak/)

# Purpose
Instead of submitting a request directly, you submit urls, or batches of urls, to a local flask application. The backend of this program manages asynchronous request submission.

Upon successfully receiving data it deposits it in an abstract bucket, which the user can then collect at their own pace. The benefit of the "bucket" paradigm is that the application can optimize the rate at which requests are handled by dynamically adjusting the request timeout, allowing some requests to dropped and be rerun.

The program also supports using "agents" to preemptively process the request data into the format the user chooses, and "spiders" to perform exploratory crawling tasks.



