
```shell
# create a folder with the name of project
mkdir electron-sample-1 && cd $_
npm init

# change entry point 
# entry point: (index.js) main.js

# install dependencies
npm i -D electron
npm i -D nodemon # automatically reload

# setup package json
#  "scripts": {
#    "start": "electron .",
#    "dev": "nodemon --exec electron ."
#  },
```

2. Create main.js file:

```js
const { app, BrowserWindow } = require('electron')

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Some Title',
        width: 800,
        height: 600,
        //icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: true,
        backgroundColor: 'white'
    })

    //mainWindow.loadUrl(`file://${__dirname}/app/index.html`)
    //mainWindow.loadFile('./app/index.html')
}
app.on('ready', createMainWindow())
```

