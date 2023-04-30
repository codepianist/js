# Vuex

## Use Vuex to store state

## Use getter to instead vuex directly

## Mutations
```js
new Vuex.Store({
	state: {
		counter: 0
	},
	getters: {
		simpleCounter: state => {
			return state.counter;
		},
		doubleCounter: state => {
			return state.counter* 2;
		}
	},
	mutations:{
		increment: state => {
			state.counter++;
		},
		decrement: state => {
			state.counter--;
		}
	}
});
``` 

## Use Vuex Helpers: mapGetters w spread Operator
```js
import { mapMutations } from 'vuex';
export default {
	methods: {
		increment(){
			this.$store.commit('increment');
		},
		decrement(){
			this.$store.commit('decrement');
		}
	}
}


```
- Without verbosity.
```js
import { mapMutations } from 'vuex';
export default {
	methods: {
		...mapMutations([
			'increment',
			'decrement'
		])
		// BTS- It does: 
		// increment() { this.$store.dispatch('increment'); }
		// increment(arg) { this.$store.dispatch('increment', arg); }
	}
}
```

## Actions
- Mutations: should only have sychronous code.
- Actions: can have asynchronous code.
  - It commits after the job is done.
  - Its a good pratice use actions in your code, and never use mutations directly.
```js
	//...
	// Basic usage
	actions: {
		increment: context => {
			context.commit('increment');
		},
		// This is also accepted
		increment: (context, payload) => {
			context.commit('increment', payload);
		}
	}

	//...
	// Desconstruction manner
	actions: {
		increment: ({commit}) => { // gets commit from context
			commit('increment');
		}
	}
```

## Computed Property with VueX:
```js
export default {
	computed: {
		someValue: {
			get(){
				return this.$store.getters.someValue;
			},
			set(){
				this.$store.dispatch('updateIt', event.target.someValue);
			}
		}
	}
}
```

## Modules:
- `/store/modules/counter.js`:
```js
const state = {
	// ...
};
const getters = {
	// ...
};
const mutations = {
	// ...
};
const actions = {
	// ...
};
export default {
	state,
	getters,
	mutations,
	actions
};
```

- `/store/centralStore.js`:
```js
import { counter } from './modules/counter';
new Vuex.Store({
	modules: {
		counter
	}
});
```