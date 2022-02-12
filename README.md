
## angular-google-maps-demo

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-wzqrfe)

Angular 12 GoogleMaps Demo based on sample code
- https://github.com/angular/components/tree/master/src/google-maps
- https://github.com/angular/components/blob/master/src/google-maps/google-map/README.md

## Logging error cases

### Success

```
map api loaded main.js:formatted:29730
gmap control found main.js:formatted:29734
gmap control internal googleMap true main.js:formatted:29734
gmap control internal googleMap renderingType UNINITIALIZED main.js:formatted:29768
[WDS] Live Reloading enabled. main.js:formatted:18643
event idle RASTER main.js:formatted:29949
event tilesloaded RASTER main.js:formatted:29958`
```

### Invalid API key

```
map api loaded main.js:formatted:29906
gmap control found main.js:formatted:29929
gmap control internal googleMap true main.js:formatted:29929
gmap control internal googleMap renderingType UNINITIALIZED main.js:formatted:29931
event idle RASTER main.js:formatted:29949
Google Maps JavaScript API error: InvalidKeyMapError
event authFailure main.js:formatted:29940
authFailure main.js:formatted:29930
event tilesloaded RASTER main.js:formatted:29958
Google Maps JavaScript API warning: InvalidKey
```

### Invalid Google Maps API URL

```
gmap control not found main.js:formatted:29768
GET https://maps.googleapis.com/maaaaps/api/js?key=something&callback=ng_jsonp_callback_0
[HTTP/3 404 Not Found 75ms]
The resource from “https://maps.googleapis.com/maaaaps/api/js?key=something&callback=ng_jsonp_callback_0” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).
Loading failed for the <script> with source “https://maps.googleapis.com/maaaaps/api/js?key=something&callback=ng_jsonp_callback_0”. localhost:4200:1:1

map api load error: {"headers":{
    "normalizedNames":{},"lazyUpdate":null,"headers":{}},
    "status":0,"statusText":"JSONP Error",
    "url":"https://maps.googleapis.com/maaaaps/api/js?key=something&callback=ng_jsonp_callback_0",
    "ok":false,"name":"HttpErrorResponse",
    "message":"Http failure response for https://maps.googleapis.com/maaaaps/api/js?key=something&callback=ng_jsonp_callback_0: 0 JSONP Error",
    "error":{"isTrusted":true}
} main.js:formatted:29730
```
=> apiLoaded is false
