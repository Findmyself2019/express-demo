const express = require('express')
const app = express()
app.engine('html', require('express-art-template'))
app.use('/public/', express.static('./public'))
app.use('/node_modules/',express.static('./node_modules'))

app.listen(3000, () => { 
  console.log(1231232)
})
app.get('/', (req,res) => { 
  res.render('index.html', {
    fruits: [
      '苹果','香蕉','橘子'
  ]
  })
})