# VueJS:



## Components:

- Create re-usable pieces of Vue code;
- Create a component a Global Component:

```html
<script src="..."></script>
<div id="app">
    <first-comp></first-comp>
    <first-comp></first-comp>
</div>
```



```js
Vue.component('first-comp', {
    data: function(){
        return { // Creates a new object and return | Don't pass an object from outside
            status: 'Critical'
        },
        template: "<p>Server Status: {{ status }}</p>"
    }
});
new Vue({
    el: '#app'
});
```



### Local Components:

- Only available on Vue instances within it's registered;

```js
var component= {
	data: function(){
    	return { // Creates a new object and return | Don't pass an object from outside
            status: 'Critical'
    	};
    },
    template: "<p>Server Status: {{ status }}</p>"
};
new Vue({
    el: '#app',
    components: {
        'first-component': component
    }
});
```



- Templates must have only one root element:

```html
<template>
	<div>
        <p>1</p>
        <p>2</p>
        <p>n</p>
    </div>
</template>

<!-- Not -->
<template>
        <p>1</p>
        <p>2</p>
        <p>n</p>
</template>
```



##### Components Names:

- DOM (case-insensitive) have restrictions with CamelCase names: `appHeader`;
- But in vue files they are allowed;
- In fact, `Vue.js` accepts case-sensitive tags in both ways:

```html
<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
import ...
export default {
    components: {
        appHeader: Header,
        appContent: Content,
        appFooter: Footer
    }
}
</script>

```



### Styles:

- by default any style will be applied globally;
- Add `scoped` keyword to make it scoped;

```html
<style scoped>
    div {
        border: solid 1px red;
    }
</style>
```





### Component Communication - `Props`:

- Child:

```html
<template>
    <div>
        <p>{{ myName }}</p>
    </div>
</template>

<script>
export default {
	props: ['myName']
}
</script>
```

- Parent:

```html
<template>
    <div>
        <child v-bind:myName="name"></child> <!-- :name shorthand -->
    </div>
</template>
<script>
export default {
	data: function(){
        return {
            name: 'Cesar'
        };
    }
}
</script>
```



### Validating Props:

- Child:

```html
<template>
    <div>
        <p>{{ myName }}</p>
    </div>
</template>

<script>
export default {
	props: {
    	myName: String, // Can be an array too
        required: true,
        default: 'John Doe' // default value
    }
}
</script>
```

- Parent:

```html
<template>
    <div>
        <child v-bind:myName="name"></child> <!-- :name shorthand -->
    </div>
</template>
<script>
export default {
	data: function(){
        return {
            name: 'Cesar'
        };
    }
}
</script>
```



### Component Communication - `Event`:

- Child:

```html
<template>
    <div>
        <p>{{ myName }}</p>
    </div>
</template>

<script>
export default {
	props: {
    	myName: String, // Can be an array too
        required: true,
        default: 'John Doe' // default value
    },
    methods: {
        nameChanged(){
            this.name = 'Something else';
            this.$emit('nameChanged', this.name);
        }
    }
}
</script>
```

- Parent:

```html
<template>
    <div>
        <child v-bind:myName="name" v-on:@nameChanged="name= $event"></child>
		<!-- :name shorthand -->
		<!-- @nameChanged shorthand -->
    </div>
</template>
<script>
export default {
	data: function(){
        return {
            name: 'Cesar'
        };
    }
}
</script>
```





### Component Communication - `Callback Function`:

- Pass a method to child component;

- Child:

```html
<template>
    <div>
        <p>{{ myName }}</p>
        <button @click="changeNameFn"></button>
    </div>
</template>

<script>
export default {
	props: {
    	myName: {
            type: String, // Can be an array too
        	required: true,
       		default: 'John Doe' // default value
        },
        changeNameFn: Function
    },
    methods: {
        nameChanged(){
            this.name = 'Something else';
        }
    }
}
</script>
```

- Parent:

```html
<template>
    <div>
        <child v-bind:myName="name" v-bind:changeNameFn="changeName" 
               v-on:@nameChanged="name= $event"></child>
		<!-- :name shorthand -->
		<!-- @nameChanged shorthand -->
    </div>
</template>
<script>
export default {
	data: function(){
        return {
            name: 'Cesar'
        };
    },
    methods: {
        changeName() { //ES6
            this.name = 'Anything';
        }
    }
}
</script>
```

 

### Communication between siblings childs:

####1. Emit to parent which pass the property changes to all childs;

- <https://learning.oreilly.com/videos/vue-js-2/9781788992817/9781788992817-video8_10>



#### 2. Using a function in `Parent.js` passed as argument to Childs.



#### 3. Using a EventBus:

- Each instance o Vue is an Event Bus.
- `main.js`:

```js
export const eventBus= new Vue();
```

- `Child2.js`:

```js
import { eventBus } from '../main';

export default {
    props: ...,
    methods: {
    	doSomething(){
            eventBus.$emit('someEvent', someData);
        }
	}
}
```

- `Child1.js`:

```js
import { eventBus } from '../main';

export default {
    props: ...,
    methods: ...,
    created() { // es6 syntax
        eventBus.$on('someEvent', (data)=> {
            this.expectData = data;
        })
    }
}
```



##### Putting logic on the EventBus:

- Using the Event Bus to store(centralize) code that you will use on more than on component.

- `main.js`:

```js
export const eventBus= new Vue({
    methods: {
        changeSomething(something) {
            this.$emit('somethingEdited', something);
        }
    }
});
```

- `Child2.js`:

```js
import { eventBus } from '../main';
export default {
    props: ...,
    methods: {
    	doSomething(){
            eventBus.changeSomething(someData);
        }
	}
}
```

- `Child1.js`:

```js
import { eventBus } from '../main';

export default {
    props: ...,
    methods: ...,
    created() { // es6 syntax
        eventBus.$on('someEvent', (data)=> {
            this.expectData = data;
        });
    }
}
```



### Slots:

- Allow pass html content to component:

- `Component.vue`:

```html
<template>
	<div>
        <slot></slot>
    </div>
</template>

<script>
	export default {
        
    }
</script>
```

- `App.vue`:

```html
<template>
	<div class="container">
        <div class="col-xs-12">
        	<app-component>
                <h2>Component</h2>
                <p>This is a component.</p>
            </app-component>
        </div>
    </div>
</template>

<script>
    import Component from './components/Component.vue';
	export default {
        components: {
            appComponent: Component
        }
    }
</script>
```

- Styles: Only styles within the component will be applied.



#### Multiple Slots:

- `Component.vue`:

```html
<template>
	<div>
        <slot name="title"></slot>
    </div>
    <div>
    	<slot name="content"></slot>
    </div>
</template>

<script>
	export default {
        
    }
</script>
```

- `App.vue`:

```html
<template>
	<div class="container">
        <div class="col-xs-12">
        	<app-component>
                <h2 slot="title">Component</h2>
                <p slot="subtitle">
                    This content will be replaced if passed.
                </p>
                <p slot="content">This is a component.</p>
            </app-component>
        </div>
    </div>
</template>

<script>
    import Component from './components/Component.vue';
	export default {
        components: {
            appComponent: Component
        }
    }
</script>
```

- There is 2 types of slots: Named and Default slots, which is a slot without a name.
- Contents within slots are used if no content are passed.





### Dynamic Components:

- `App.vue`:

```html
<template>
	<div class="container">
        <div class="col-xs-12">
            <button @click="selectedComponent= 'compOne'">One</button>
            <button @click="selectedComponent= 'compTwo'">Two</button>
            <button @click="selectedComponent= 'compThree'">Three</button>
        	<hr>
            <p>{{ selectedComponent }}</p>
            <component :is="selectedComponent">
            </component>
        </div>
    </div>
</template>

<script>
    import CompOne from './components/CompOne.vue';
    import CompTwo from './components/CompTwo.vue';
    import CompThree from './components/CompThree.vue';
	export default {
        components: {
            selectedComponent: 'compOne',
            compOne: CompOne,
            compTwo: CompTwo,
            compThree: CompThree
        }
    }
</script>
```

- `CompOne`:

```html
<template>
	<div>
        <h2>Component One.</h2>	
    </div>
</template>

<script>
	export default {
        activated(){
            console.log('Component One Activated!');  
        },
        deactivated(){
            console.log('Component One Deactivated!');  
        },
		destroyed(){
            console.log('Component One Destroyed!');
        }
    }
</script>
```

- `CompTwo`:

```html
<template>
	<div>
        <h2>Component Two.</h2>	
    </div>
</template>

<script>
	export default {
        activated(){
            console.log('Component Two Activated!');  
        },
        deactivated(){
            console.log('Component Two Deactivated!');  
        },
		destroyed(){
            console.log('Component Two Destroyed!');
        }
    }
</script>
```

- `CompThree`:

```html
<template>
	<div>
        <h2>Component Three.</h2>	
    </div>
</template>

<script>
	export default {
        activated(){
            console.log('Component Three Activated!');  
        },
        deactivated(){
            console.log('Component Three Deactivated!');  
        },
		destroyed(){
            console.log('Component Three Destroyed!');
        }
    }
</script>
```

- When you change between components, the component you leave is destroyed.

- Use `keep-alive` around the component to keep it alive;

```html
<keep-alive>
	<component :is="selectedComponent">
    </component>
</keep-alive>
```

- Observe the `activated` and `deactivated` life-cycle hooks.



#### Input  `v-model` Modifiers:

- lazy- updates after focus off
- trim- trim
- Modifiers can be chained.



####`v-model` Behind the scenes:

```html
<input type="text" v-model="userData.email" />
<input type="text" 
       :value="userData.email"
       @input="use rData.email = $event.target" >

<!-- Or -->
<input type="text" v-model="userData.email.lazy" />
<input type="text" 
       :value="userData.email"
       @change="userData.email = $event.target" >
```



