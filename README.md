## array-sampleInterval ##
An array extension to sample random intervals from an array.

_sampleInterval(numberOfSamples, intervalWidth)_

numberOfSamples - Number of samples to return. Returns an array if more than 1, returns just a sample otherwise. If omitted, defaults to 1.
intervalWidth - Number of array elements contained in the interval. If '1' the interval is [a,a], otherwise [a,b] where the index of b is a+intervalWidth-1.

Returns one or an array of intervals of the form [a,b] where 'a' and 'b' are elements in the array, endpoints of the requested interval.

Ask for one, get a random element, ask for multiple elements and get an array.
Since the samples are random, it's good to remember that they won't be in any meaningful order, but the elements of each interval are always in array order.

## Install ##
```
npm install array-sample
```
## Usage ##
```
Array.prototype.sampleInterval = require('array-sampleInterval');

[0,1,2,3,4].sample(1) // [3,3]
[0,1,2,3,4].sample(1) // [1,1]
[0,1,2,3,4].sample(1) // [0,0]

[0,1,2,3,4].sample(3,2) // [[0,1],[3,4],[1,2]]

[0,1,2,3,4].sample(3, 5) // [[0,4],[0,4],[0,4]]
```

That's it