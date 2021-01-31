const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 9001;
const app = express()

const data = []

app.use(cors())
app.use(express.json())

app.post('/', (req, res) => {

  console.log(req.body)
  const { nick, record } = req.body;

  data.push({ nick: nick ? nick : 'Sem nick', record })

  res.status(200).json({ nick, record })
})

app.get('/', (req, res) => {
  res.status(200).json({ recordList: data.sort((a,b) => a.record + b.record).reverse() })
})


app.listen(PORT, () => console.log('subiu'))