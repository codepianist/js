
# React


## Principals

1. Don't touch the DOM;
2. Lego blocks;
3. Unidirectional data flow;
4. We deal with UI, the rest is up to you;  

Components
JSX - HTML inside JS

State

function React(state, componenets) { } 

Creates a VirtualDOM

## React Everywhere
- React Native - Mobile
- React 360 - VR 
- React Desktop - Desktops
- React Blessed - Terminal


### Create react app

#### Install create-react-app

```shell
# Not used anymore
# npx ensures the last version
npm install -g create-react-app
```

```shell script
npx create-react-app my-app
cd my-app
npm start
```

- Uses Babel to convert to vanilla javascript


NPM Package Manager
Yarn Package Manager

- Manage libraries
- Install, uninstall, update, configure

### NPM Multiple versions of a package

```shell
nvm install {version}
nvm use {version}
```

localhost:3000/

- Optimized production build

npm build

- public/ - with html files
- build/ with static files
- src/ with source code

webpack modular bundler

- bundle all js files together in a optimized way;

## Start

```shell
cd project-folder
npm start #or
yarn start
```
- it will make app available on [http://localhost:3000/](http://localhost:3000/)


## Rendering your App

- index.js 

```js
import React from 'react';
import ReactDOM from 'react-dom'; // Interacts with the DOM
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

- App is a component


## npm eject

- Show all files behind the scenes
- scripts like: build.js, start.js, test.js





## Using classes

```js
class Welcome extends React.Component {
  constructor() {
  	super();
  	this.state = {
  		name: "Amanda"
  	}
  }	

  render() {
    return (
    	<div>
    		<h1>Hello, {this.state.name}</h1>
			<button onClick={this.setState({name: 'Jessica'})}></button>
		</div>
	);
  }
}

```

## setState for changing state

- Why setState() instead of state.name= '...'
- You're not allowed to changed state. Unidirectional dataflow.
- setState() re-render the component. Its other version.

## jsx attributes

className - 
onClick - 

- They use camelCase Syntax

## Show a list

```jsx
class App extends React.Component {
  constructor() {
  	super();
  	this.state = {
		monsters: [
			{ id: 1, name: 'Dracula' },
			{ id: 2, name: 'Frankeinstein' },
			{ id: 3, name: 'Werewolf' },
		]  
  	};
  }	

  render() {
    return (
    	<div className='App'>
			<ul>
			{
				this.state.monsters.map(monster=> (
					<li key={monster.id}>{monster.name}</li>
				))
			}
			</ul>
		</div>
	);
  }
}
```

## Fetching content

### Lifecycle methods
- componentDidCatch
- componentDidMount
- componentDidUpdate
- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

```jsx
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			monsters: []  
		};
	}	

	componentDidMount() {
		fetch('httos://jsonplaceholder.typicode.com/users')
			.then(resp=> resp.json())
			.then(users=> this.setState({ monsters: users }))
	}

	render() {
		return (
			<div className='App'>
				<ul>
				{
					this.state.monsters.map(monster=> (
						<li key={monster.id}>{monster.name}</li>
					))
				}
				</ul>
			</div>
	);
}
```

## Components

- React allows to mix html with custom components:

```jsx
	// ...

	return (
		<div className='App'>
			<h1>Title</h1>
			<SearchBox onSearchChange={this.onSearchChange} />
			<CardList monsters={filteredMonsters} />	
		</div>
	);

	// ...
```

2 ways of building Components

- function;
- class;

- both of them returns a jsx

### Components on components folder

components/
	component.name/
		name.component.jsx
		name.style.css