# Covid19Assistance

Package resources for **Profile** and/or **SBA** for assisting customers with the Covid19 information.<br/>
To use these resources, you must have Sinequa ES installed with a valid License. <br/>

# What does this repository contains ?

This repository contains:

### Profile Notification Sample &  ###

*Notification Sample*
- a Default_V10 Example profile
- a Covid19 skin
- a HomePage WebAppHTML Template : this is used to display a News card on the Sinequa Home Page
- a Sponsored Links example

*Synonym & Reformulation*
- Synoynms for Covid-19
- Reformulation expansions for various terms related to this disease
- Synonyms for business terms people might be search for
- Acronyms related to business term people might use in queries around this issue
- Engine configuration showcasing where to reference above files


Default V10 profile and Covid19 are not necessary and are used only to show how sponsored links and an Home Page WebAppHTML Template have te be configured.

The Covid19 Home Page WebApp HTML Template is added to the Covid19 skin in the tab `Search Form` section `Custom HTML`. Please note that the CSS style is implement directly within the template between `style` tags

Sponsored Links keywords should be edited directly from the Sponsored Links configuration page but using the detailed configuration when clicking on the pen on the right of a sponsored link line. Keywords must be splitted by line to be considered as different keywords.


### SBA Sample widget  ###

*Widget Material* 
- quickpoc the App name in the **apps** folder
- quicpoc webservice, the query of the app quickpoc in **webservice** folder
- A Covid19 query intent based on a whitelist and an angular component, in **queryintent** folder 
- An example of source data using the CSV connector to pull data from index
- Entities Configuration necessary for intent detection
- Whitelist on related covid term and associated urls in **files/whitelist** folder
- query-intent-covid19 the angular component in **resources/quickpoc/src** folder
- custom.ts to reference the new component in the App
 
*Synonym & Reformulation*

- Synoynms for Covid-19
- Reformulation expansions for various terms related to this disease
- Synonyms for business terms people might be search for
- Acronyms related to business term people might use in queries around this issue
- Engine configuration showcasing where to reference above files

The app quickpoc and the webservice are here to show how to plug the query intent. You must use your existing App, webservice and update with new require info. 
The sources CSV is here to serve as example of data to demo the result. You need to run the indexation for the widget to work properly thought it's not mandatory; You can use you legacy index but please update your query intent SQL action accordingly 


After setting everyting, it should like : 

![widget](https://github.com/aureldjoko/Covid19Assistance/blob/master/screenshots/Covid19_Widget.PNG)



# How to use it ?
First of all, the pathes here are relative to **<sinequa_data>/configuration**

Second either your UIs are based on Profile then you will be interested only in Profile folder of this repository or you UIs are based on SBA, then the SBA folder make sense for you. 
If you have Both UIs based on profile and SBA, you may have on look on both folder.  

You can download the files from github directly. 
Keep in mind that the Default V10 profile and the Covid19 skin are here as example. In your case, you must use the customer profile and skin already in place.
The same remark applied for the app quickpoc provided here. In your case, you must reuse your existing app, query and leverage thanks to this repo how to wire them all together. 
The engine configuration is just to showcase how you can plug synonym and reformulation files. You must use your existing engine. 


To make sponsored links work, you need to build the sponsored links index when you're in the sponsored links configuration page!
For the widget, you may want to change the look & feel to meet your company guidelines on point to specific content, keep an open mind !
For the dictionaries, you may find additional terms you want to add, or the business may have others to add, keep an open mind as you deploy!

Do not hesitate to reach out if your require further assistance


