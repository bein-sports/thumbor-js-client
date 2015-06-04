# thumbor-js-client

A pure JS client for thumbor.

*Warning : as it is javascript, if you use thumbor safe mode, the secret will be sent to the browser. Use at least a https connection*

## Installation

The recommended installation method is the use of bower.

Reference the project in the `bower.json` file of your project.

``` json
{
    "thumbor-js-client": "bein-sports/thumbor-js-client#master"
}
```

Run `bower install` command.

Load the javascript libraries

``` html
<script src="bower_components/jsSHA/src/sha.js"></script>
<script src="bower_components/thumbor-js-client/src/thumbor-js-client.js"></script>
```

## Usage

This example demonstrate the generation of a signed url.

Note : you should call `ThumborJsClient.create` each time you want to generate an url.

``` js
var hostname = "http://yourhostname-thumbor.com";
var secret = "y0uRs3cr3tKey";
var filename = "link-to-your-image.jpg"

// Create instance
var thumborClient = ThumborJsClient.create(hostname, secret);

// fit-in/200x100 filter
thumborClient.fitIn(200, 100);

//Get full URL
var signedUrl = thumborClient.url(filename);
```

## Documentation

Implemented filters :
* fit-in/{width}x{height} : fitIn(width, height)
* full-fit-in/{width}x{height} : fullFitIn(width, height)

## In progress

Missing filters
unsafe usage

## License

[MIT](License.md)


