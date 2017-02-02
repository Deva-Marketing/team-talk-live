# format-obj
This module is part of the [Lackey CMS](http://lackey.io).

The modules helps in converting the object key names and selecting a subset of properties. 
If data is an array the mapping will affect every item

## Install

``` 
npm install format-obj
```

## Usage

```
var formatter = require('format-obj'),
	obj;

obj = formatter({
	_id: 123,
	title: 'OK',
	test: 456
}, '_id:id title');

// returns 
// {
//    id: 123,
//    title: 'OK'
// }
```

Using the * character 

```
var formatter = require('format-obj'),
	obj;

obj = formatter({
	_id: 123,
	title: 'OK',
	test: 456
}, '_id:id *');

// returns 
// {
//    id: 123,
//    title: 'OK',
//    test: 456
// }
```
