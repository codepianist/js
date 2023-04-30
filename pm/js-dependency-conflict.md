
## Conflicts with npm or yarn

- Just add a resolution object to the package.json file:

```js
...
, "resolutions" :{
	"babel-jest" : "24.7.1"
}
...
```

Add re-install

```shell
yarn # ->yarn  install
```