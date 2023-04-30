
```shell
# check version
node -v || node --version

# list installed versions of node (via nvm)
nvm ls
nvm ls-remote | grep "Latest LTS"

# install specific version of node
nvm install 6.9.2

# set default version of node
nvm alias default 6.9.2

# switch version of node
nvm use 6.9.1

nvm uninstall 8
```

https://gist.github.com/chranderson/b0a02781c232f170db634b40c97ff455
https://nodejs.org/en