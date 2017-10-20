# BC ADMIN APP TEST
## Secure Zone API - costPerPeriod

Simple test to show that the costPerPeriod does not update when submitting. Everything is hardcoded.

String | Value
------------ | -------------
Name | "SZ API UPDATED 1"
costPerPeriod | 199.99
orderCountryCode | "AU"
sellAccess | true
cycleType | 1

* If testing, may need to update the Secure Zone **ID** in the URL.
* Just press the submit button.



#### Module_Data call to test system is updated
```html
{module_data resource="securezones" version="v3" fields="id,name,sellAccess,costPerPeriod,orderCountryCode,cycleType,lastUpdateDate" skip="0" limit="10" order="id" collection="myData"}
  
<pre>{{myData.items|json}}</pre>
```
#### BC Documentation 
[Update an existing secure zone](https://docs.worldsecuresystems.com/reference/rest-apis/secure-zones/securezones.html#Updateanexistingsecurezone)
