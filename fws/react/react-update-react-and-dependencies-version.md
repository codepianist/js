
## Update React and dependencies version

### Remove `yarn.lock` or `package-lock.json`

```shell
rm -rf yarn.lock
rm -rf package-lock.json
```

```shell
npm update -D # Dev dependencies
npm audit fix
npm install
npm audit fix
```