# Vue:

## Upgrade from Vue 2 to 3:
```shell
╭─codepianist@debian-note ~ 
╰─$ vue --version
2.9.6
╭─codepianist@debian-note ~ 
╰─$ which vue
/usr/bin/vue
╭─codepianist@debian-note ~ 
╰─$ cd /usr/bin
╭─codepianist@debian-note /usr/bin 
╰─$ ls -lha vue*
lrwxrwxrwx 1 root root 35 May 31 10:43 vue -> ../lib/node_modules/vue-cli/bin/vue
lrwxrwxrwx 1 root root 40 May 31 10:43 vue-init -> ../lib/node_modules/vue-cli/bin/vue-init
lrwxrwxrwx 1 root root 40 May 31 10:43 vue-list -> ../lib/node_modules/vue-cli/bin/vue-list
╭─codepianist@debian-note /usr/bin 
╰─$ sudo rm -rf vue
[sudo] password for codepianist: 
╭─codepianist@debian-note /usr/bin 
╰─$ sudo rm -rf vue-init
╭─codepianist@debian-note /usr/bin 
╰─$ sudo rm -rf vue-list
╭─codepianist@debian-note /usr/bin 
╰─$ mkdir ~/.npm-global
mkdir: cannot create directory ‘/home/codepianist/.npm-global’: File exists
╭─codepianist@debian-note /usr/bin 
╰─$ npm config set prefix '~/.npm-global'                                                                                                             1 ↵
╭─codepianist@debian-note /usr/bin 
╰─$ export PATH=~/.npm-global/bin:$PATH
╭─codepianist@debian-note /usr/bin 
╰─$ source ~/.profile
╭─codepianist@debian-note /usr/bin 
╰─$ npm install -g @vue/cli
/home/codepianist/.npm-global/bin/vue -> /home/codepianist/.npm-global/lib/node_modules/@vue/cli/bin/vue.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/@vue/cli/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @vue/cli@3.9.3
updated 1 package in 27.285s
╭─codepianist@debian-note /usr/bin 
╰─$ vue --version
3.9.3
╭─codepianist@debian-note /usr/bin 
╰─$ vue -V
3.9.3
```