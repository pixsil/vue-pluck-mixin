# Vue Pluck mixin

## What is it?

This is a Javascript pluck function based on the Laravel collection pluck (see below). The pluck works on both arrays filled with objects and outputs an array if only one column is selected and outputs an object if an key and value are selected.

https://laravel.com/docs/8.x/collections#method-pluck

The Javascript pluck function is created like a VueJs mixin but can also be used as vanilla JS.

## Donate

Find this project useful? You can support me on with a donation:

https://www.paypal.com/donate/?hosted_button_id=2XCS6R3CTC5BA

# As Protoype (recommended way)

## Installation

For a quick install, run this from your project root:
```bash
mkdir -p resources/js/tools/vue-pluck
wget -O resources/js/tools/vue-pluck/vue-pluck-prototype.js https://raw.githubusercontent.com/pixsil/vue-pluck-mixin/main/vue-pluck-prototype.js
```

Add this to your app.js
```javascript
import PixPluckPrototype from "./tools/vue-pluck/vue-pluck-prototype";
```

And in your Vue Init:

```javascript
Vue.use(PixPluckPrototype);
```


## Usage

You can use the function for both arrays 

```javascript
// output an array with keys
let id_array = this.$pluck(record_array, 'id’);

// output an object with keys and name value
let relation_id_arr = this.$pluck(record_array, 'name', 'id');
```

# As mixin

## Installation [Work in progress]

For a quick install, run this from your project root:
```bash
mkdir -p resources/js/tools/pix-pluck
wget -O resources/js/tools/pix-pluck/pluck-mixin.js https://raw.githubusercontent.com/pixsil/pix-pluck-mixin/main/pluck-mixin.js
```

Add this to your app.js
```javascript
import pluck from './tools/pix-pluck/pluck-mixin.js'
```

And in your Vue Init:

```javascript
mixins: [pluck],
```

## Usage

You can use the function for both arrays 

```
// output an array with keys
let id_array = this.pluck(record_array, 'id’);

// output an object with keys and name value
let relation_id_arr = this.pluck(record_array, 'name', 'id');
```
