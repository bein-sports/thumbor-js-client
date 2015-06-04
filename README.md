 thumbor-js-client
 A pure JS client for thumbor

 Install :

 - bower install
 - include bower_components/jsSHA/src/sha.js
 - include src/thumbor-js-client.js


 #Initiate an instance of ThumborJsClient
```
 var hostname = "http://yourhostname-thumbor.com";
 var secret = "y0uRs3cr3tKey";
 var filename = "link-to-your-image.jpg"

// Create instance
 var thumborClient = ThumborJsClient.create(hostname, secret);

 // Add fullFitIn command
 thumborClient.fullFitIn(fullFitInWidth, fullFitInHeight);

 //Get full URL
 thumborClient.url(filename);
```


