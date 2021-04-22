const express = require('express')
const wiki = require('./wiki')

const app = express()

const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World!')
  })

app.get('/about', (req, res) => {
res.send('Bye Bye!')

})
app.use('/', wiki)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
