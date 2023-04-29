

## `onChange`

- Pass the catch value to the state

```js
<input type='search' onChange={e => this.setState({ searchField: e.target.value }) />
<input type='search' onChange={e => this.setState({ searchField: e.target.value }, ()=> { console.log('Immediate after callback'); }) />
```

- [React SyntheticEvents](https://reactjs.org/docs/events.html)

## SyntheticEvent:

```js
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```