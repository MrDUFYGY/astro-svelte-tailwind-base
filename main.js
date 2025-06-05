const { app, BrowserWindow } = require('electron')

// Escribiendo una función reutilizable para instanciar ventanas
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./index.html')
}

// Llamar a tu función cuando la app esté lista
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Salir de la aplicación cuando todas las ventanas estén cerradas (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})