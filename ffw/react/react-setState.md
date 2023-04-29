
## `setState`

- Is used to update the state;
- It's asynchronous;
- React batches multiple calls to setState together to increase performance;

```js
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleClick = () => {

      // v1
      this.setState({ name: 'name' });
      // v2
      this.setState({ name: 'name' }, () => 
      	console.log('Execute immediately after')
      );
      // v3
      this.setState((prevState, prevProps) => {
      	return { name: 'name'+preState+prevProps }
      } , () => 
      	console.log('Execute immediately after')
      );

  }
  ...

```

`({})` - Dont have to type return 