## Warning: Each child in a list should have a unique “key” prop

- Just add a key:

```js
  <ul>          
    {
      this.state.goals.map(goal => (
        <li key={goal.id}>{goal.title}</li>
      ))
    }
  </ul>
```