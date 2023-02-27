
%%
- [ ] Automatically order names 

- detect if initials
- extract names from username
  - create an algorithm to do this using name and username data extracted from chessan
  - return multiple possible names and the probabilities
  - link names to specific people and individuals
- detect if fake name
  - detect probability fake name
- detect country
- detect probability country
- country probability distribution
- add name extraction from text
  - *don't* add recognition of specific entities here - that should be added to ontonlp
  - or it could be added here, either works?
- detect if name real, or joke name or other string of text
  - add threshold parameter
  - use ML algorithm?
    - add to huggingface and automatically download trained model and cache
    - create validation report on algorithm
- parse through text and extract likely names and usernames
  - can do username extraction using markov model


Identify gender of the name (using gender identification APIs or pre-built models)
Recognize name prefixes and suffixes (such as "Dr.", "Mr.", "Jr.", "III", etc.)
Extract nicknames or aliases associated with the name
Recognize and extract titles or positions (such as "President", "CEO", "Professor", etc.)
Identify and extract middle names or initials
Normalize and format names consistently (such as capitalization and order of first and last name)
Provide an option to translate non-English names into English or vice versa
Identify and extract name-based keywords to help classify or categorize text (such as "medical doctor", "lawyer", "athlete", etc.)

Recognize and extract maiden names, particularly for genealogical research
Identify and extract patronymic or matronymic names, particularly for non-English names
Implement a fuzzy matching algorithm to handle misspelled names or nicknames
Identify and extract company or organization names associated with a given individual's name
Offer a pronunciation feature for difficult-to-pronounce names, especially those from non-English-speaking countries
Recognize and extract family or clan names, particularly for East Asian names
Identify and extract honorifics or suffixes (such as "esq.", "Ph.D.", "M.D.", etc.)
Develop an algorithm to identify and disambiguate individuals with the same name, particularly useful for large datasets
Offer a feature to verify the accuracy of parsed names against a reference database or official record, such as a voter registration list or a social security database.

Recognize and extract aliases or pseudonyms
Identify and extract geographic information associated with a given name (such as a city, region, or country of origin)
Offer a feature to identify potential familial relationships between individuals based on their names
Develop a feature to recognize and extract names in handwritten or scanned documents, such as census records or archival documents
Implement a feature to detect and disambiguate nicknames, given that a single name may have multiple common variations (such as "Katie" and "Kate" for Katherine)
Recognize and extract cultural or religious names, such as those from Indigenous cultures or names derived from the Bible
Offer a feature to recognize and extract names from spoken language or audio recordings, such as from recorded phone conversations or interviews
Develop an algorithm to identify and extract names from social media or web content, particularly useful for social network analysis or targeted advertising.

Recognize and extract pseudonyms or online handles, such as those used in social media, forums, or online gaming
Offer a feature to identify and extract names from images or videos, such as identifying the name on a name tag or from a caption in a photo
Implement a feature to identify and extract the context in which a name appears, such as the genre or topic of a document
Offer a feature to recognize and extract abbreviations and acronyms commonly used in names, such as "Jr.", "Ms.", or "CEO"
Develop an algorithm to recognize and extract multi-word names, such as "John Quincy Adams" or "Julia Margaret Cameron"
Recognize and extract genealogical information associated with a given name, such as birth and death dates, marriage information, or ancestral information
Offer a feature to recognize and extract names from non-English language sources, such as news articles or research papers in other languages.

Develop a feature to recognize and extract nicknames based on the sound or pronunciation of a given name, such as "Buzzy" for William or "Mimi" for Mary.
Offer a feature to identify and extract names associated with a particular profession, industry, or interest, such as the names of famous athletes, musicians, or authors.
Implement a feature to recognize and extract names from structured data sources, such as spreadsheets, databases, or XML files.
Develop an algorithm to recognize and extract multi-cultural or multi-ethnic names, such as those that include elements from more than one language or cultural tradition.
Offer a feature to recognize and extract names from speech-to-text transcription, particularly useful for automated transcription services or real-time captioning.
Implement a feature to recognize and extract names in documents with specific formats or structures, such as academic articles, legal documents, or medical records.
Develop an algorithm to recognize and extract names with non-standard capitalization, such as those that use all lowercase letters or all uppercase letters.

Offer a feature to recognize and extract names from handwriting or cursive text, particularly useful for historical documents or personal correspondence.
Implement a feature to recognize and extract names from PDF documents or scanned images, such as those used in government forms or tax documents.
Develop an algorithm to recognize and extract alternative spellings of names, such as those that vary by region or dialect, or those that have been altered for political or social reasons.
Offer a feature to recognize and extract names from spoken language or audio recordings in different languages, such as those used in multilingual settings or for language learning purposes.
Implement a feature to recognize and extract names from large datasets, such as those used in machine learning applications or statistical analyses.
Develop an algorithm to recognize and extract cultural or geographic markers associated with a given name, such as those associated with Indigenous communities or those that indicate a place of origin.
Offer a feature to recognize and extract names from handwritten or printed materials in languages that use non-Roman scripts, such as Arabic, Chinese, or Russian.

%%