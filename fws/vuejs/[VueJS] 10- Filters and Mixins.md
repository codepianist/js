# VueJS:



## Filters:

- Transport output into the data.  Doesn't transform the property itself.
- For example takes a String and transform to uppercase letters.
- VueJS don't came up with filters have to build by our own.

```html
<template>
	<div>
        <h2>Filters</h2>
        <p>{{ text | toUpperCase }}</p>
    </div>
</template>

<script>
	export default {
		data(){
            return {
                text: 'Hello There'
            }
        },
        filters: { // local to this component
            toUpperCase(value){ // value to be transformed
                return value.toUpperCase();
            }
        }
    }
</script>
```

- Global Filter- `main.js`:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.filter('toUpperCase', function(value){
    return value.toUpperCase();
});
```





## Mixins:

- `fruitMixin.js`:

```js
export const fruitMixin= {
	data(){
        return {
            fruits: ['Apple','Banana','Mango','Melon'],
            filteredText: ''
        }
    },
    computed: {
        filteredFruits(){
            return this.fruits.filter((e) => {
                return e.match(this.filteredText);
            });
        }
    }
}
```

- `Component.js`:

```html
<template>
	<div>
        <h2>Mixins</h2>
        <p>{{ text | toUpperCase }}</p>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    export default {
		data(){
            return {
                text: 'Hello There'
            }
        },
        mixins: [fruitMixin]
    }
</script>
```

- Mixins are merged with the components, with the order mixin first. So component has the last word to overwrite changes in the mixin.

- Mixins are replicated on each component, and not shared around.

#### Global Mixins:

- `main.js`:

```js
import Vue from 'vue';
import App from 'App.vue';

Vue.mixin({
    created(){
        console.log('Global mixin created!');
    }
});
```



