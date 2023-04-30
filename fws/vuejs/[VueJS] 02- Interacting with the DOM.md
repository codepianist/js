# VueJS



### Template and HTML generation:

- VueJS creates a template based on our file, and generate an HTML based on it. 



### Interpolation or Mustache  `{{  }}`:

- Allows access to `data` and `methods` on Vue instance.

- Only renders text. Cannot be used with links for example.
- Supports javascript expressions:

```js
// Works
{{ number + 1 }}
{{ ok ? 'SIM' : 'NÃO' }}
{{ message.split('').reverse().join('') }}

// Won't work
// an attribution, not an expression
{{ var a = 1 }}

// flow control, prefer ternary expressions instead
{{ if (ok) { return message } }}
```





### Directives:

#### Special attributes starting with `v-`:

- `v-bind:href`: For links;

```html
<p>See more:<a v-bind:href="seeMore" target="_blank">Link</a></p>
```

- `v-once`: For interpolation, keeps the first value;

```html
<p id="result" v-once>{{ title }}</p>
```

- `v-on`- Event handling for any DOM event:

```html
<input type="text" v-on:input="changeTitle" />
<button v-on:click="increase">Click</button>
```

- `v-html`- evals raw html:

```html
<p id="result" v-html="code"></p>
```

- `v-bind`- for HTML attributes:

```html
<div v-bind:id="dynamicId"></div>
<button v-bind:disabled="isButtonDisabled">Button</button>
```

- `v-if`- conditional redering:

```html
<p v-if="seen">Hi</p>
```

- Expressions as parameters:

```html
<!-- Since v.2.4.6 expressions are accepted as parameters to directives --> 
<a v-bind:[attributeName]="url"> ... </a>
<a v-on:[eventName]="doSomething"> ... </a>

<!-- Avoid uppercase -->
<!-- Will be converted to v-bind:[someattr] in DOM. -->
<a v-bind:[someAttr]="value"> ... </a>
```



- ` v-` prefix can be suppressed:

```html
<!-- properties -->
<a v-bind:href="url"> ... </a>
<a :href="url"> ... </a>

<!-- methods -->
<a v-on:click="doSomething"> ... </a>
<a @click="doSomething"> ... </a>
```



### Event Modifiers:

- Special suffix that indicates a modification on a directive.
- For example `.prevent` indicates that `v-on` should call  `event.preventDefault()` when the event triggers:

```html
<form v-on:submit.prevent="onSubmit"> ... </form>
```

- https://br.vuejs.org/v2/guide/events.html#Modificadores-de-Eventos



### Computed Properties:

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Olá Vue'
  },
  computed: {
    // computed "getter" 
    reversedMessage: function () {
      // `this` points to the Vue instance `vm`
      return this.message.split('').reverse().join('')
    }
  }
})
```



#### Providing a Setter: 

- Computed Properties works like Getters by default, but is possible to provide a Setter:

```js
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names.shift()
      this.lastName = names.pop()
    }
  }
}
```



#### Computed Properties VS Methods:

- Computed properties differ from methods: They're cached. They're computed based on their dependencies, they'll change only when a property is modified.

```js
// Careful with this
computed: {
  now: function () {
    return Date.now()
  }
}
```



#### Computed Properties VS Watchers:

- Computed properties differ from watchers:

```js
// Using watch
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})

// Using computed properties
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```



### 2 way Data-Binding:

- Changes in both ways affect the property:

#### Script.js

```js
new Vue({
    el: '#app',
    data: {
        name: 'Cesar'
    }
});
```

#### index.html

```html
<div id="app">
	<input type="text" >
	<p>{{ name }}</p>
</div>
```

