const { app, BrowserWindow } = require('electron')

let mainWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Some Title',
        width: 800,
        height: 600,
        //frame: false,
        //icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: true,
        backgroundColor: 'white'
    })

    //mainWindow.loadUrl(`file://${__dirname}/app/index.html`)
    mainWindow.loadFile('./app/index.html')
}
app.on('ready', createMainWindow)

app.allowRendererProcessReuse = true