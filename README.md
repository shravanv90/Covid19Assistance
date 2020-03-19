# Covid19Assistance

Resources for assisting customers with the Covid19 information awareness initiative.

# What does this repository contains ?

This repository contains:

### ProfileNotificationSample ###

- a Default_V10 Example profile
- a Covid19 skin
- a HomePage WebAppHTML Template : this is used to display a News card on the Sinequa Home Page
- a Sponsored Links example

Default V10 profile and Covid19 are not necessary and are used only to show how sponsored links and an Home Page WebAppHTML Template have te be configured.

The Covid19 Home Page WebApp HTML Template is added to the Covid19 skin in the tab `Search Form` section `Custom HTML`. Please note that the CSS style is implement directly within the template between `style` tags

Sponsored Links keywords should be edited directly from the Sponsored Links configuration page but using the detailed configuration when clicking on the pen on the right of a sponsored link line. Keywords must be splitted by line to be considered as different keywords.


### SBA V1 Sample widget  ###

- quickpoc the App name in the **apps** folder
- quicpoc webservice, the query of the app quickpoc in **webservice** folder
- A Covid19 query intent based on a whitelist and an angular component, in **queryintent** folder 
- An example of source data using the CSV connector to pull data from index
- Entities Configuration necessary for intent detection
- Whitelist on related covid term and associated urls in **files/whitelist** folder
- query-intent-covid19 the angular component in **resources/quickpoc/src** folder
- custom.ts to reference the new component in the App

All the path provides here are relative to **<sinequa_data>/configuration**
The app quickpoc and the webservice are here to show to plug the query intent. You may want only to add your query intent in your legacy SBA. 
The sources CSV here is here to serve as example of data to demo the result. You need to run the indexation for the widget to work properly thought it's not mandatory; You can use you legacy index but please update your query intent SQL action accordingly 


After setting everyting, it should like : 

![widget](https://github.sinequa.com/djoko/Covid19Assistance/blob/master/screenshots/Covid19_Widget.PNG)


### SampleDictionaries ###

- Synoynms for Covid-19.
- Reformulation expansions for various terms related to this disease.
- Synonyms for business terms people might be search form.
- Some acronym reformulation for acronyms people might use in queries around this issue.


# How to use it ?

You can download the files from github directly. Keep in mind that the Default V10 profile and the Covid19 skin are here as example. In your case, you must use the customer profile and skin already in place.

To make sponsored links work, you need to build the sponsored links index when you're in the sponsored links configuration page.

For the dictionaries, you may find additional terms you want to add, or the business may have others to add, keep an open mind as you deploy!


