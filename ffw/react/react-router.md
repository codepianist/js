## React Router

- By default React doesn't handle routing;
- React aim to fullfill one purpose, different than Angular, which is a full fledge framework;
- You will have to use a library to solve routing;

- ReactRouter is an standard in market on React projects
- It ignores HTTP routing

- [https://reactrouter.com/](https://reactrouter.com/)
- [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)


### Install on your project

- At your project directory type:

```shell
yarn add react-router-dom
npm install react-router-dom
```

### Importing

- Import and wrap your application in it;

```js
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

ReactDom.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	document.getElementById('root');
);

```


### Using

```js
import React from 'react';
import Route from 'react-router-dom';

<Route exact url component />


```


### Route

```jsx
<Route exact path='/' component={HomePage} />
```

### Link

```jsx
<Link to={`${props.match.url}/13`} >To 13</Link>
```

### `history`

history props.history.push()
- Allow dynamic navigation

### `location`
- Allow know where we are

```js
location.pathname // Current location
```

### `match`

- Allow to build a nested route structure

```jsx
<Link to={`${props.match.url}/13`} >To 13</Link>
```

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
```

### Passing Router objects into nested components 

- Route only passes its object to the child component referenced by the router

```jsx
<Route exact path='/' component={HomePage} /> // in this case to HomePage
```

- For nested components the solution is to pass objects down

```jsx
const Nested = ({match,history,location}) => (
	<div>
		...
	</div>
);
```

#### WithRouter

- Higher Order Commponent
- a function that takes a Component as an argument and returns a modified version of this Component;

```jsx
const Nested = ({match,history,location,linkUrl}) => (
	<div>
		...
		<button onClick={()=> history.push(`${match.url}${linkUrl}`)}>
	</div>
);

export default withRouter(Nested); // now Nested has access to the Router objects

```

### SectionProps

```
...someProps
<MenuItem key={id} {...someProps} />
```

### Switch
- renders a route exclusively.
- [https://reactrouter.com/web/api/Switch](https://reactrouter.com/web/api/Switch)

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
```