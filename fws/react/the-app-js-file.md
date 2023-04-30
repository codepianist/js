
## The `App.js` file:


- default App.js

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

- As a function;

```js
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
```

- As a class:

```js
import './App.css';

class App extends Component {
	render() {
		return(
			<h1> Hello world </h1>
		)
	}
}
ReactDOM.render(<App/> ,document.getElementById('app'))

export default App;
```

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      goals: []
    };
  }

  componentDidMount() {
    console.log('Component mounted!');
    fetch('http://localhost:8081/goal-rest/goals?offset=0&limit=20&sort_by=-id')
        .then(resp => resp.json())
        .then(goals => goals.setState({ goals: goals }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> </header>
        <main>
          <ul>
          {this.state.goals.map(goal=> (
            <li>{goal.title}</li>
          ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;