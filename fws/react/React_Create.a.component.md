# Create a component

- Create a components/ directory at root;
- Create a <component-name>/ directory inside the directory above;
- Create a <component-name>.component.jsx file inside this directory; 

## In line component

- `welcome.component.js`:

```jsx
import React from 'react'

// inline
export const Welcome= (props) => <div>Hello</div>; 

// multiline
export const Welcome= (props) => {
    console.log(props);
    return <div>Hello</div>;
}
```

- `App.js`:

```jsx
import React from 'react'
import { Welcome } from './components/welcome/welcome.component'

render() {
    return (
        <div className="App">
            <Welcome name="Cesar" />
        </div>
    );
}

export default App;
```

## children argument

- Anything you pass inside the component declaration:

```jsx
import React from 'react'
import { Welcome } from './components/welcome/welcome.component'

class App extends Component {

    constructor() {
        super();
        this.state= {
            persons: []
        };
    }

    fetchPersons() {
        fetch('http://localhost:8080/persons')
            .then(resp => response.json())
            .then(p => this.setState({ persons: p }))
    }

    render() {
        return (
            <div className="App">
                <Welcome name="Cesar" >
                    <h1>Sir Cesar</h1>
                </Welcome>
            </div>
        );
    }

}

export default App;
```

- `welcome.component.js`:

```jsx
import React from 'react'
import './welcome.style.css'

// inline
export const Welcome= (props) => <div>Hello</div>; 

// multiline
export const Welcome= (props) => {
    console.log(props);
    return <div>{props.children}</div>;
}